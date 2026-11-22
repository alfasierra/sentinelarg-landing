

# Troubleshooting and Frequently Asked Questions (FAQ)

## Q: Windows SmartScreen or Defender blocks the `.exe` or `.bat` installer.

**A:** This is normal for new software without digital signature reputation.
- **Solution:** Right-click the file > *Properties* > Check the **"Unblock"** box > *Apply*. Or run the `.ps1` scripts directly as Administrator, which do not trigger this alert.

## Q: The `sentinelarg-ollama` container appears as `unhealthy`.

**A:** Ollama is downloading or loading the model into RAM.
- **Solution:** Wait 1-2 minutes. If it persists, run `sudo docker compose logs sentinelarg-ollama` to verify that your system has at least 8 GB of free RAM.

## Q: AI analysis says "Risk: UNKNOWN" or the summary is empty.

**A:** This used to occur due to context truncation.
- **Solution:** Make sure you are using version 1.0.3 or higher, which includes automatic adjustment of `OLLAMA_CONTEXT_LENGTH=8192` and severity-based finding filtering.

## Q: Error: `wordlist file does not exist` in Gobuster.

**A:** The `dirb` wordlist was not in the base image.
- **Solution:** Run `sudo ./update.sh` (Linux) or `.\3_Update_System.bat` (Windows) to download the corrected image that includes `dirb` and `seclists`.

## Q: How do I update SentinelArg to the latest version?

**A:**
- **Linux:** `cd sentinelarg-client-release && sudo ./update.sh`
- **Windows:** Run `.\3_Update_System.bat` as Administrator. The script will automatically backup your database.

## Q: The license expired, what do I do?

**A:** Contact your provider to renew. Once you have the new key, run:
```bash
sudo ./activate.sh NEW_KEY

Q: The dashboard doesn't load in the browser.
A:
Use http://127.0.0.1:8888/dashboard instead of http://localhost:8888 (avoids IPv6 resolution issues).
Verify that containers are running: docker ps.
Check logs: docker compose logs sentinelarg-core.
Try incognito mode (there may be corrupted cache).
Q: Slow AI performance.
A:
Verify you have a compatible NVIDIA GPU (GTX 1060 or higher).
Install the latest drivers from https://www.nvidia.com/drivers.
In Docker Desktop: Settings → Resources → WSL 2 → Enable "CUDA support".
Restart Docker Desktop.
Verify the GPU is detected: nvidia-smi from a WSL terminal.
Re-run 1_Install_SentinelArg.bat — it will detect the GPU automatically.
Q: Nikto fails with "TLS/SSL is not available".
A: Fixed in v1.0.3. The libnet-ssleay-perl library is now included in the Docker image. Update with sudo ./update.sh (Linux) or .\3_Update_System.bat (Windows).


## Disk Space Management and Uninstallation (Windows)

### Why does Docker take up so much disk space?

Docker Desktop on Windows uses a virtual disk (`ext4.vhdx`) to store images, containers, and volumes. This file **grows automatically** when you download new images (like SentinelArg's), but **does not shrink on its own** when you delete them. Over time, it can consume tens of unnecessary GBs.

### 7.2 How to free up disk space

To recover space occupied by Docker without affecting your SentinelArg installation:
1. Close SentinelArg and Docker Desktop.
2. Right-click on `Clean_Docker_Space.bat` and select **"Run as administrator"**.
3. The script will stop Docker, compact the virtual disk, and free up the space.
4. Once finished, Docker Desktop will restart automatically.

### How to completely uninstall SentinelArg

If you want to remove SentinelArg and all its data (including scan databases and AI models):
1. Right-click on `Uninstall_SentinelArg.bat` and select **"Run as administrator"**.
2. Confirm the action by typing `YES` when prompted.
3. The script will remove containers, data volumes, and the installation folder.
> ⚠️ **WARNING:** This action is irreversible. All local scans and configurations will be lost.