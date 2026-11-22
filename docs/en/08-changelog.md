---
title: "Changelog"
---
# Changelog

## [1.0.3] - 2026-11-18

### ✅ Critical Fixes

- **AI Anti-Hallucination:** Implemented cross-validation filter to remove CVEs invented by the language model in reports.
- **Context Truncation:** Increased Ollama context to 8192 tokens and severity-based finding filtering to prevent AI from ignoring data.
- **ANSI Codes in PDF:** Fixed parser to remove color characters (`1m[34m`) in exported reports, improving readability.
- **Tool Dependencies:** Added `dirb`, `seclists`, and `libnet-ssleay-perl` to the Docker image to fix Gobuster and Nikto (HTTPS) failures.

### 🚀 New Features

- **Professional Windows Installer:** Optimized `.bat` and `.ps1` scripts with UAC directory detection and Docker verification.
- **DOCX Export:** In addition to PDF, editable reports can now be generated in Microsoft Word.
- **GPU Detection on Windows:** The installer automatically detects NVIDIA and configures `docker-compose.nvidia.yml`.

## [1.0.2] - 2026-11-10

- Native integration of Metasploit Framework in the container.
- Improvement in "Smart Scroll" of the live console.
- "1-Click Exploitation" button pre-filled in the Exploit Lab.

## [1.0.1] - 2026-11-05

- First public release.
- Basic web scanning with Nmap, Nuclei, WhatWeb.
- PDF reports.