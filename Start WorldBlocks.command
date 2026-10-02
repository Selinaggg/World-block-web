#!/bin/zsh
set -eu
cd -- "${0:A:h}"
if ! command -v python3 >/dev/null 2>&1; then
  print '请先安装 Python 3.10 或更新版本。'
  read '?按回车关闭…'
  exit 1
fi
if [[ ! -x .venv/bin/python ]]; then
  python3 -m venv .venv
fi
if ! .venv/bin/python -c 'import serial, PIL, google.genai' >/dev/null 2>&1; then
  print '首次启动：正在准备依赖，需要联网。'
  if ! .venv/bin/python -m pip install -r launcher/requirements.txt; then
    print '依赖安装未完成。检查网络后重新双击启动即可。'
    read '?按回车关闭…'
    exit 1
  fi
fi
print '关闭服务请按 Control+C。请保留这个终端窗口。'
if ! .venv/bin/python launcher/start.py; then
  read '?启动失败，请阅读上面的提示。按回车关闭…'
fi

