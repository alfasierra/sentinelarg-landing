---
title: "AI Configuration and Tuning"
---
# AI Configuration and Tuning

SentinelArg uses **Ollama** to run language models locally, ensuring that your scan data never leaves your infrastructure.

## Default Model

The system uses `qwen2.5-coder:3b` for its excellent balance between performance and accuracy in cybersecurity tasks.

## Performance Tuning (GPU vs CPU)

- **With NVIDIA GPU:** The installer automatically configures `docker-compose.nvidia.yml`. The AI will respond in 2-5 seconds.
- **CPU Only:** The system will work correctly, but text generation may take 10-20 seconds.

## Anti-Hallucination Filter

SentinelArg includes a cross-validation filter. If the AI model mentions a CVE that was not detected by the scanning tools (Nmap/Nuclei), the system:

1. Automatically removes the mention from the report.
2. Removes the associated Metasploit guide.
3. Adds a transparency note: *"Information not verified by the scanning engine was filtered"*.

## Changing the AI Model (Advanced)

If you want to use a larger model (e.g., `llama3:8b`), edit the `docker-compose.yml` file and change the environment variable or run:

```bash
sudo docker compose exec sentinelarg-ollama ollama pull llama3:8b

(Requires at least 16 GB of RAM).
Context Configuration
Ollama's context is configured to 8192 tokens (expanded from 4096 in v1.0.3). To modify it:
# In docker-compose.yml, under sentinelarg-ollama:
environment:
  - OLLAMA_CONTEXT_LENGTH=8192

  Verifying AI Status
To verify that Ollama is working:
sudo docker compose exec sentinelarg-ollama ollama list
You should see the qwen2.5-coder:3b model in the list.
