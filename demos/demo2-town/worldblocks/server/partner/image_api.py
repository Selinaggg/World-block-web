from __future__ import annotations

import base64
import mimetypes
import os
from pathlib import Path


def read_env_value_from_file(env_path: Path, key: str) -> str | None:
    if not env_path.exists():
        return None

    try:
        text = env_path.read_text(encoding="utf-8")
    except Exception:
        return None

    for line in text.splitlines():
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        if not line.startswith(key + "="):
            continue

        value = line.split("=", 1)[1].strip()
        value = value.strip('"').strip("'").strip()
        return value or None

    return None


def find_gemini_api_key(explicit_api_key: str | None = None) -> str:
    if explicit_api_key and explicit_api_key.strip():
        return explicit_api_key.strip()

    env_key = os.getenv("GEMINI_API_KEY")
    if env_key and env_key.strip():
        return env_key.strip()

    here = Path(__file__).resolve().parent
    cwd = Path.cwd().resolve()

    candidate_env_files = [
        here / ".env",
        cwd / ".env",
        cwd.parent / ".env",
        here.parent / ".env",
    ]

    checked = []
    for env_path in candidate_env_files:
        env_path = env_path.resolve()
        checked.append(str(env_path))
        value = read_env_value_from_file(env_path, "GEMINI_API_KEY")
        if value:
            return value

    raise RuntimeError(
        "没有找到 GEMINI_API_KEY。\n\n"
        "程序已经检查过这些位置：\n"
        + "\n".join(f"- {p}" for p in checked)
        + "\n\n"
        "请确认 .env 文件里有这一行：\n"
        "GEMINI_API_KEY=你的真实key"
    )


def find_gemini_model() -> str:
    env_model = os.getenv("GEMINI_MODEL")
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
        value = read_env_value_from_file(env_path.resolve(), "GEMINI_MODEL")
        if value:
            return value

    return "gemini-2.5-flash-image"


def image_mime_type(image_path: Path) -> str:
    return mimetypes.guess_type(image_path.name)[0] or "image/png"


def extract_generated_image_parts(response: object) -> tuple[bytes | None, str]:
    parts = []

    if getattr(response, "candidates", None):
        for candidate in response.candidates:
            content = getattr(candidate, "content", None)
            if content and getattr(content, "parts", None):
                parts.extend(content.parts)

    if not parts and getattr(response, "parts", None):
        parts = list(response.parts)

    text_chunks = []

    for part in parts:
        if getattr(part, "text", None):
            text_chunks.append(part.text)

        inline_data = getattr(part, "inline_data", None)
        if inline_data and getattr(inline_data, "data", None):
            data = inline_data.data
            if isinstance(data, str):
                data = base64.b64decode(data)
            return data, "\n".join(text_chunks)

    return None, "\n".join(text_chunks) if text_chunks else "模型没有返回任何文本。"


def generate_image_with_gemini(
    prompt: str,
    image_paths: list[str | Path],
    output_path: str | Path,
    model: str | None = None,
    api_key: str | None = None,
) -> Path:
    api_key = find_gemini_api_key(api_key)

    try:
        from google import genai
        from google.genai import types
    except Exception as exc:
        raise RuntimeError(
            "没有安装 google-genai。请运行：\n"
            "uv add google-genai"
        ) from exc

    resolved_image_paths = [Path(path) for path in image_paths]
    missing = [str(path) for path in resolved_image_paths if not path.exists()]
    if missing:
        raise RuntimeError("没有找到输入图片：\n" + "\n".join(f"- {path}" for path in missing))

    output_path = Path(output_path)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    contents = [
        types.Part.from_bytes(data=path.read_bytes(), mime_type=image_mime_type(path))
        for path in resolved_image_paths
    ]
    contents.append(prompt)

    model_name = model or find_gemini_model()
    client = genai.Client(api_key=api_key)
    response = client.models.generate_content(
        model=model_name,
        contents=contents,
    )

    image_bytes, detail = extract_generated_image_parts(response)
    if image_bytes:
        output_path.write_bytes(image_bytes)
        return output_path

    raise RuntimeError(
        "Gemini 没有返回图像数据。\n\n"
        f"当前模型：{model_name}\n\n"
        f"模型返回：\n{detail}"
    )


def generate_world_with_gemini(
    prompt: str,
    control_image_path: str | Path,
    output_path: str | Path,
    style_reference_path: str | Path | None = None,
    model: str | None = None,
    api_key: str | None = None,
) -> Path:
    control_image_path = Path(control_image_path)
    if not control_image_path.exists():
        raise RuntimeError(
            "没有找到控制图 control_map.png。\n"
            "请先点击“按键二”生成控制图和 Prompt。"
        )

    image_paths: list[Path] = [control_image_path]
    if style_reference_path is not None:
        style_reference_path = Path(style_reference_path)
        if style_reference_path.exists():
            image_paths.append(style_reference_path)

    return generate_image_with_gemini(
        prompt=prompt,
        image_paths=image_paths,
        output_path=output_path,
        model=model,
        api_key=api_key,
    )
