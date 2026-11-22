---
title: "Quick Start Guide"
---
# Quick Start Guide

Welcome to SentinelArg. You can have the platform up and running in under 10 minutes.

### Step 1: Prerequisites
- **Windows:** Docker Desktop installed and running.
- **Linux:** Docker Engine and Docker Compose V2 installed.
- Minimum 8 GB of free RAM.

### Step 2: Download and Extract
Download the `SentinelArg_Windows_v1.0.3.zip` or `sentinelarg-linux-v1.0.3.tar.gz` package from your client portal and extract it.

### Step 3: Installation
**On Windows:**
1. Open the extracted folder.
2. Right-click `1_Install_SentinelArg.bat` and select **"Run as administrator"**.
3. Follow the on-screen instructions (accept installing Ollama if you have enough RAM).

**On Linux:**
```bash
cd sentinelarg-client-release
sudo chmod +x install.sh
sudo ./install.sh

Activation
Run the activation script with your key:
Windows: .\2_Activate_License.bat (as Administrator)
Linux: sudo ./activate.sh YOUR_LICENSE_KEY
Access the Dashboard
Open your browser and go to: http://127.0.0.1:8888/dashboard