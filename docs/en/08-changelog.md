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

### 📊 Professional PDF Reports
- **Automatic Table of Contents** at the beginning of the report
- **Methodology and Scope section** with dynamic tools (only those actually executed) and readable duration
- **Findings Summary** with severity table and visual pie chart
- **Grouping by Severity** instead of by tool (industry standard: CRITICAL → HIGH → MEDIUM → LOW → INFO)
- **Annex A: Raw Tool Output** for technical audit
- **Severity fix in DB**: now saves the real severity from Nuclei/Nmap in the `findings` table (previously everything was saved as INFO)
- **`infer_severity()` function** for findings without explicit severity

### 🐛 Bugs Fixed
- Fix: Scan duration showed "18379 minutes" → now readable format (e.g., "0 hour(s) and 20 minute(s)")
- Fix: Summary table showed 0 vulnerabilities → now counts real findings with severity
- Fix: Empty pie chart → now reflects real severity distribution
- Fix: Error `Illegal attribute 'fillColors'` in reportlab → individual color assignment per slice
- Fix: Incorrect import of `Pie` from `reportlab.graphics.shapes` → corrected to `charts.piecharts`
- Fix: `MITRE ATT&CK` appeared as `MITRE ATT&CK;` → proper escaping of `&` in HTML

### 🛠️ New System Utilities
- **`Clean_Docker_Space.bat`**: Official script to compact Docker's virtual disk (`ext4.vhdx`) and recover disk space on Windows without losing SentinelArg data.
- **`Uninstall_SentinelArg.bat`**: Clean uninstallation process that safely removes containers, volumes, and configuration files.

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