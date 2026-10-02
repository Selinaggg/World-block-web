from __future__ import annotations

import os
import time
from pathlib import Path

from .image_api import find_gemini_api_key, image_mime_type, read_env_value_from_file


def find_veo_model() -> str:
    env_model = os.getenv("VEO_MODEL")
    if env_model and env_model.strip():
        return env_model.strip()

    here = Path(__file__).resolve().parent
    cwd = Path.cwd().resolve()

    candidate_env_files = [
        here / ".env",
        cwd / ".env",
        cwd.parent / ".env",
        here.parent / ".env",
    ]

    for env_path in candidate_env_files:
        value = read_env_value_from_file(env_path.resolve(), "VEO_MODEL")
        if value:
            return value

    return "veo-3.1-lite-generate-preview"


def generate_animation_with_veo(
    prompt: str,
    image_path: str | Path,
    output_path: str | Path,
    model: str | None = None,
    api_key: str | None = None,
) -> Path:
    api_key = find_gemini_api_key(api_key)
    image_path = Path(image_path)
    if not image_path.exists():
        raise RuntimeError(f"没有找到动画起始图片：{image_path}")

    try:
        from google import genai
        from google.genai import types
    except Exception as exc:
        raise RuntimeError(
            "没有安装 google-genai。请运行：\n"
            "pip install google-genai"
        ) from exc

    output_path = Path(output_path)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    model_name = model or find_veo_model()
    client = genai.Client(api_key=api_key)
    start_image = _build_start_image(types, image_path)

    try:
        operation = client.models.generate_videos(
            model=model_name,
            prompt=prompt,
            image=start_image,
        )
    except TypeError:
        operation = client.models.generate_videos(
            model=model_name,
            prompt=prompt,
            image=start_image,
            config=types.GenerateVideosConfig(),
        )

    operation = _poll_operation(client, operation)
    generated_video = _first_generated_video(operation)
    if not generated_video:
        raise RuntimeError(
            "Veo 没有返回视频数据。\n\n"
            f"当前模型：{model_name}"
        )

    if _save_generated_video(client, generated_video, output_path):
        return output_path

    raise RuntimeError(
        "Veo 返回了结果，但无法保存视频文件。\n\n"
        f"当前模型：{model_name}"
    )


def _build_start_image(types: object, image_path: Path) -> object:
    image_type = getattr(types, "Image", None)
    if image_type and hasattr(image_type, "from_file"):
        try:
            return image_type.from_file(location=str(image_path))
        except TypeError:
            return image_type.from_file(path=str(image_path))

    if image_type and hasattr(image_type, "from_bytes"):
        return image_type.from_bytes(
            data=image_path.read_bytes(),
            mime_type=image_mime_type(image_path),
        )

    part_type = getattr(types, "Part", None)
    if part_type and hasattr(part_type, "from_bytes"):
        return part_type.from_bytes(
            data=image_path.read_bytes(),
            mime_type=image_mime_type(image_path),
        )

    raise RuntimeError("当前 google-genai 版本不支持构造 Veo 起始图片。请升级 google-genai。")


def _poll_operation(client: object, operation: object, poll_seconds: float = 10.0, max_wait_seconds: float = 900.0) -> object:
    started_at = time.time()
    while not getattr(operation, "done", False):
        if time.time() - started_at > max_wait_seconds:
            raise RuntimeError("Veo 动画生成超时。请稍后重试，或检查模型/账号是否支持视频生成。")
        time.sleep(poll_seconds)
        try:
            operation = client.operations.get(operation)
        except TypeError:
            operation_name = getattr(operation, "name", None)
            if not operation_name:
                raise
            operation = client.operations.get(name=operation_name)

    error = getattr(operation, "error", None)
    if error:
        raise RuntimeError(f"Veo 动画生成失败：{error}")

    return operation


def _first_generated_video(operation: object) -> object | None:
    response = getattr(operation, "response", None) or getattr(operation, "result", None)
    generated_videos = getattr(response, "generated_videos", None) if response else None
    if generated_videos:
        first = generated_videos[0]
        return getattr(first, "video", None) or first
    return None


def _save_generated_video(client: object, generated_video: object, output_path: Path) -> bool:
    try:
        files_api = getattr(client, "files", None)
        if files_api and hasattr(files_api, "download"):
            files_api.download(file=generated_video)
    except Exception:
        pass

    if hasattr(generated_video, "save"):
        generated_video.save(str(output_path))
        return output_path.exists()

    data = getattr(generated_video, "data", None) or getattr(generated_video, "video_bytes", None)
    if isinstance(data, str):
        data = data.encode("latin1")
    if isinstance(data, bytes):
        output_path.write_bytes(data)
        return True

    inline_data = getattr(generated_video, "inline_data", None)
    inline_bytes = getattr(inline_data, "data", None) if inline_data else None
    if isinstance(inline_bytes, bytes):
        output_path.write_bytes(inline_bytes)
        return True

    return False
