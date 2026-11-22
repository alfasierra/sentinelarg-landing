
---
title: "Detailed Installation Guide"
---
# Detailed Installation Guide

SentinelArg is fully deployed using Docker containers, ensuring an isolated, secure, and reproducible environment.

## System Requirements

| Component | Minimum | Recommended |
|---|---|---|
| **CPU** | 4 cores (x86_64) | 8+ cores (Intel i7/i9 or AMD Ryzen 7/9) |
| **RAM** | 8 GB | 16 GB or higher |
| **Storage** | 20 GB SSD | 50 GB SSD NVMe |
| **GPU** | None | NVIDIA RTX 3060+ (for AI acceleration) |

## Windows Installation (Step by Step)

1. **Install Docker Desktop:** Download from [docker.com](https://www.docker.com/products/docker-desktop). During installation, make sure to check **"Use WSL 2 based engine"**.
2. **Configure GPU (Optional):** If you have an NVIDIA GPU, go to *Settings > Features in development* and check **"CUDA support"**.
3. **Run the Installer:** Right-click `1_Install_SentinelArg.bat` > *Run as administrator*.
   > *Note: If Windows SmartScreen blocks the file, click "More info" > "Run anyway", or use the `.ps1` scripts directly.*

## Linux Installation (Kali/Ubuntu/Debian)

The `install.sh` script automatically detects your system and configures dependencies:

```bash
# 1. Navigate to the folder
cd sentinelarg-client-release

# 2. Grant execution permissions
sudo chmod +x install.sh activate.sh update.sh

# 3. Run the installation
sudo ./install.sh

The installer will automatically detect if you have an NVIDIA, AMD, or Intel GPU and configure the corresponding docker-compose file.
Post-Installation Verification
To verify everything is working:

sudo docker compose ps
You should see sentinelarg-core and sentinelarg-ollama with the status Up.