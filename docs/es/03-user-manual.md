---
title: "Manual de Usuario"
---
# SentinelArg — Manual de Usuario / User Manual
**Versión del Software:** 1.0.3 | **Versión del Documento:** 2.0 | **Fecha:** Noviembre 2026

## 1. Introducción

**SentinelArg** es una plataforma empresarial de ciberseguridad que automatiza la evaluación de vulnerabilidades, el reconocimiento de superficie de ataque y el análisis de riesgos.

Potenciada por un **Orquestador de Inteligencia Artificial** local (Ollama), SentinelArg no solo detecta fallos técnicos, sino que los correlaciona, filtra el ruido y entrega un **Resumen Ejecutivo** en lenguaje de negocios, mapeando cada hallazgo con frameworks de cumplimiento como **OWASP Top 10, MITRE ATT&CK, CWE y PCI-DSS**.

### Novedades de la Versión 1.0.3

| Mejora | Descripción |
|---|---|
| 🪟 **Instalador nativo Windows** | Scripts `.bat` + `.ps1` con detección automática de GPU NVIDIA. |
| 🐧 **Instalador Linux robusto** | Detección jerárquica NVIDIA → AMD → Intel → CPU. |
| 🧠 **IA con filtro anti-alucinación** | Validación cruzada de CVEs contra datos reales del escaneo. |
| 📄 **Exportación PDF + DOCX** | Reportes ejecutivos en ambos formatos. |
| 🎨 **Limpieza de códigos ANSI** | Hallazgos legibles en reportes (sin `1m[34m`). |
| 🔧 **Contexto Ollama ampliado** | 8192 tokens para análisis de mayor calidad. |
| 🛡️ **Modelo de transparencia** | Distribución de scripts abiertos auditables. |
| 🌐 **Soporte multi-plataforma** | Windows (PowerShell), Linux (Bash), macOS (WSL2). |

---

## 2. Requisitos del Sistema

### 2.1 Requisitos Mínimos (Escaneos Básicos)

| Componente | Especificación |
|---|---|
| CPU | 4 núcleos (x86_64) |
| RAM | 8 GB |
| Almacenamiento | 20 GB SSD |
| Sistema Operativo | Ubuntu 22.04+, Debian 11+, Kali 2024+, Windows 10/11 (WSL2) |
| Red | Conexión a Internet (descarga de imágenes Docker ~2.5 GB) |

### 2.2 Requisitos Recomendados (Escaneos Completos + IA Local)

| Componente | Especificación |
|---|---|
| CPU | 8+ núcleos (Intel i7/i9 o AMD Ryzen 7/9) |
| RAM | 16 GB o superior |
| Almacenamiento | 50 GB SSD NVMe |
| GPU | NVIDIA RTX 3060+ (8 GB VRAM) — **opcional pero recomendada** |
| Software Base | Docker Desktop (Windows) o Docker Engine + Compose V2 (Linux) |

---

## 3. Instalación y Despliegue

### 3.1 Modelo de Distribución: Transparencia sobre Conveniencia

**SentinelArg se distribuye como código fuente ejecutable (`.bat` + `.ps1` + `.sh`), no como un instalador `.exe` firmado.**

Esta es una **decisión de seguridad intencional**:

| Instalador .exe tradicional | SentinelArg (este paquete) |
|---|---|
| Binario compilado, imposible de auditar | Scripts abiertos, revisables línea por línea |
| Requiere certificado de code signing (~$300/año) | Sin costos ocultos trasladados al cliente |
| SmartScreen bloquea hasta tener "reputación" | No depende de reputación de Microsoft |
| El usuario delega confianza al firmante | El usuario **verifica** lo que ejecuta |
| Ejecuta acciones opacas en segundo plano | Cada acción es visible en la consola |

> **Si su política de seguridad corporativa exige un `.exe` firmado**, contáctenos a **soporte@sentinelarg.com.ar** y le proporcionaremos el instalador firmado con nuestro certificado EV (disponible bajo solicitud para clientes Enterprise).

### 3.2 Instalación en Windows (Recomendada)

#### Requisitos previos
1. **Docker Desktop** instalado y en ejecución.
   - Descarga: https://www.docker.com/products/docker-desktop
   - ⚠️ Activar **"Use WSL 2 based engine"** en Settings.
   - ⚠️ Si tiene GPU NVIDIA: activar **"CUDA support"** en Settings → Features in development.
2. **PowerShell** (incluido en Windows 10/11).

#### Pasos
1. Descargue el paquete `SentinelArg_Windows_v1.0.3.zip` desde https://sentinelarg.com.ar/licencias
2. Descomprima en una carpeta (ej. `C:\SentinelArg`).
3. **Abra PowerShell como Administrador** y ejecute:
   ```powershell
   Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
   cd C:\SentinelArg
   .\1_Instalar_SentinelArg.bat
   ```
4. Siga las instrucciones en pantalla:
   - Se le preguntará si desea instalar el motor de IA local (Ollama). Responda **Y** si tiene ≥8 GB RAM libres.
   - El script detectará automáticamente su GPU NVIDIA (si corresponde).
   - Se descargará la imagen de Docker (~2.5 GB). Esto puede tardar 5-15 minutos.
5. Active la licencia:
   ```powershell
   .\2_Activar_Licencia.bat
   ```
   Ingrese su clave en formato `XXXX-XXXX-XXXX`.
6. Abra su navegador en **http://127.0.0.1:8888/dashboard**.

### 3.3 Instalación en Linux (Kali/Ubuntu/Debian)

#### Requisitos previos
- `docker` y `docker-compose-plugin` instalados.
- Permisos `sudo`.

#### Pasos
1. Descargue `sentinelarg-linux-v1.0.3.tar.gz`.
2. Extraiga y entre al directorio:
   ```bash
   tar -xzf sentinelarg-linux-v1.0.3.tar.gz
   cd sentinelarg-client-release
   ```
3. Ejecute el instalador:
   ```bash
   sudo chmod +x install.sh
   sudo ./install.sh
   ```
4. Active la licencia:
   ```bash
   sudo ./activate.sh TU_CLAVE_DE_LICENCIA
   ```
5. Abra **http://127.0.0.1:8888/dashboard**.

---

## 4. Configuración Inicial

### 4.1 Personalización del Sistema

El archivo `sentinelarg_config.json` permite personalizar la plataforma para reflejar la identidad de su organización en los reportes.

| Campo | Descripción | Ejemplo |
|---|---|---|
| `company_name` | Nombre de su empresa | `"CyberSec Solutions S.A."` |
| `report_title` | Título de los reportes | `"Informe de Evaluación de Seguridad"` |
| `primary_color` | Color principal del tema | `"#8B0000"` |
| `logo_path` | Ruta al logo | `"static/logo.png"` |
| `footer_text` | Texto del pie de página | `"© 2026 Mi Empresa. Confidencial."` |

**Aplicar cambios:** Reinicie el contenedor:
```bash
sudo docker compose restart sentinelarg-core
```

### 4.2 Configuración de Inteligencia Artificial (Ollama)

SentinelArg utiliza **Ollama** para ejecutar modelos de IA localmente, garantizando la privacidad total de los datos del escaneo.

- Modelo por defecto: `qwen2.5-coder:3b` (3 mil millones de parámetros).
- Contexto: **8192 tokens** (ampliado desde 4096 en v1.0.3).
- Verificar instalación:
  ```bash
  sudo docker compose exec sentinelarg-ollama ollama list
  ```

### 4.3 Aceleración por GPU

El instalador detecta automáticamente el hardware:

| GPU detectada | Acción automática |
|---|---|
| **NVIDIA** | Usa `docker-compose.nvidia.yml` (requiere `nvidia-container-toolkit` en Linux, o CUDA activado en Docker Desktop Windows). |
| **AMD** | Usa `docker-compose.amd-intel.yml` con ROCm/Vulkan. |
| **Intel iGPU** | Usa `docker-compose.amd-intel.yml` con Vulkan. |
| **Sin GPU** | Modo CPU (funcional pero más lento). |

---

## 5. Acceso y Panel de Control (Command Center)

Al acceder a la interfaz web, el usuario se encuentra con el **Command Center**:

### Componentes Principales
- **Barra Superior:** Estado de la licencia activa (ej. `ENTERPRISE`), versión del software, botones `INITIATE_SCAN` y `EXPLOIT_LAB`.
- **Métricas en Tiempo Real:** `TOTAL_SCANS`, `COMPLETED`, `VULNERABILITIES`.
- **Historial de Escaneos:** Tabla central con ID, Objetivo, Tipo, Estado, conteo de vulnerabilidades y botones de acción (Ver Logs, Ver Reporte, Análisis IA).

---

## 6. Protocolos de Escaneo Disponibles

| Protocolo | Descripción y Casos de Uso |
|---|---|
| **QUICK** | Evaluación rápida de puertos comunes (1-1000) con Nmap y detección básica con Nuclei. |
| **OSINT** | Reconocimiento pasivo (theHarvester, Subfinder, Amass, dnsrecon) para descubrir subdominios y correos. |
| **WEB_SERVER** | Auditoría profunda de aplicaciones web (WhatWeb, Nikto, Gobuster, Nuclei). |
| **WINDOWS_SERVER** | Evaluación especializada para entornos Windows (SMB, RDP, RPC, WinRM, MSSQL). |
| **LINUX_SERVER** | Auditoría de servicios Linux (SSH, MySQL, PostgreSQL, Redis, NFS, SMB). |
| **NETWORK_DISCOVERY** | Descubrimiento avanzado de hosts vivos en un rango de red (CIDR) con reportes XML. |
| **VULNERABILITY_SCAN** | Evaluación centrada 100% en la detección de CVEs utilizando Nuclei. |
| **FULL_AUTO** | Evaluación exhaustiva con batería completa de herramientas. |
| **WINDOWS_WORKSTATION** | Auditoría de estaciones de trabajo (políticas de contraseñas, Defender, BitLocker, UAC). |

---

## 7. Guía Paso a Paso: Ejecución de un Escaneo

### Paso 1: Iniciar la Evaluación
1. Haga clic en **INITIATE_SCAN**.
2. Ingrese el **TARGET** (Dominio o IP).
3. Seleccione el **SCAN_PROTOCOL**.
4. Haga clic en **EXECUTE**.

### Paso 2: Monitoreo en Tiempo Real (Live Execution Console)
Se abrirá la ventana **LIVE_EXECUTION_CONSOLE**:
- **Barra de Desplazamiento:** Aparece si el texto excede el 60% de la altura.
- **Desplazamiento Inteligente:** La consola se desplaza automáticamente hacia abajo solo si el usuario ya se encuentra al final. Si sube para leer un log anterior, el sistema respeta su posición.
- **Contenido:** Comandos ejecutados, progreso de herramientas y salida cruda (STDOUT/STDERR).

### Paso 3: Finalización
Cuando el estado cambie a **COMPLETED**, la consola mostrará un mensaje de finalización y se habilitarán los botones de **Reporte** y **Análisis IA**.

---

## 8. Análisis de Resultados e Inteligencia Artificial

Al hacer clic en el ícono de **Análisis IA** en un escaneo completado, el Orquestador presenta:

1. **Contextual Risk Score:** Puntuación de riesgo del 0 al 100.
2. **Resumen Ejecutivo:** Párrafo redactado en lenguaje de negocios.
3. **Guía de Explotación Recomendada (IA):** Si la IA detecta un servicio o CVE explotable con Metasploit, mostrará un bloque destacado con el módulo, payload, opciones y un botón **"PRE-LLENAR EXPLOIT LAB"** para ejecutarlo con un solo clic.
4. **Hallazgos Críticos Prioritarios:** Lista curada con Título, Severidad, Impacto y Remediación.
5. **Ruido Filtrado:** Transparencia total sobre los elementos que la IA descartó intencionalmente (falsos positivos, códigos ANSI, parámetros de marketing).

### Filtro Anti-Alucinación de CVEs
El sistema valida automáticamente cualquier CVE mencionado por la IA contra los datos reales del escaneo. Si la IA inventa un CVE que no fue detectado por las herramientas, se elimina del reporte y se agrega una nota de transparencia.

---

## 9. Generación y Exportación de Informes

Para generar un entregable formal, haga clic en el ícono de **Reporte**. El modal incluye:

- **Portada Personalizable:** Con el nombre, título y logotipo de su empresa.
- **Mapeo de Cumplimiento Normativo:** Badges de OWASP, MITRE ATT&CK, CWE y PCI-DSS.
- **Resumen Ejecutivo con IA:** Incluye puntuación de riesgo, hallazgos críticos y guía de explotación.
- **Exportación a PDF:** Botón `EXPORT_PDF` que descarga un documento profesional.
- **Exportación a DOCX:** Botón `EXPORT_DOCX` para edición en Microsoft Word.

**Nombre del archivo:** `Reporte_SentinelArg_<Objetivo>_<ID>.pdf` (o `.docx`).

---

## 10. Herramientas Avanzadas

### 10.1 Asistente de IA (AI_ASSISTANT)
Accesible mediante el botón flotante en la esquina inferior derecha.

**Función:** Permite realizar consultas en lenguaje natural sobre los resultados del escaneo y sobre el uso de la propia plataforma SentinelArg.

**Ejemplo:** *"¿Cómo ejecuto este exploit de forma segura?"* → La IA responderá guiándote al botón "EXPLOTAR" o al Exploit Lab, recordándote la necesidad del consentimiento explícito.

### 10.2 Laboratorio de Explotación (EXPLOIT_LAB)

> ⚠️ **ADVERTENCIA:** Esta herramienta interactúa con el framework **Metasploit** (preinstalado en el contenedor) y ejecuta módulos de explotación reales. Úsela **únicamente con autorización explícita y por escrito**.

#### Flujo de "1 Clic" (Recomendado)
1. Identifique un hallazgo crítico en el Dashboard o en el Análisis de IA que tenga el botón **EXPLOTAR** o **PRE-LLENAR EXPLOIT LAB**.
2. Al hacer clic, el modal se abrirá con el Módulo, RHOST, Payload y Opciones (JSON) ya completados automáticamente.
3. Revise los parámetros (especialmente **LHOST** y **LPORT** en las opciones).
4. Marque la casilla **CONFIRMATION** de autorización.
5. Haga clic en **EXECUTE** y observe la salida de la consola de Metasploit en tiempo real.

#### Flujo Manual
1. Haga clic en **EXPLOIT_LAB** en la barra superior.
2. Complete los campos: **MODULE**, **RHOST**, **PAYLOAD** y **OPTIONS** (JSON). Use los botones **LOAD_EX** y **TEMPLATE** para obtener ayuda.
3. Marque la casilla **CONFIRMATION**.
4. Haga clic en **EXECUTE**.

---

## 11. Mantenimiento y Actualización

### 11.1 Actualización del Software

**En Linux:**
```bash
cd /ruta/a/sentinelarg-client-release
sudo ./update.sh
```

**En Windows (PowerShell como Administrador):**
```powershell
cd C:\SentinelArg
.\3_Actualizar_Sistema.bat
```

El script realizará automáticamente:
1. Backup de su base de datos de escaneos.
2. Descarga de la nueva imagen Docker.
3. Reinicio de servicios.
4. Limpieza de imágenes antiguas.

### 11.2 Backup de la Base de Datos

```bash
sudo docker compose cp sentinelarg-core:/app/data/sentinelarg.db ./backup_$(date +%Y%m%d).db
```

### 11.3 Limpieza de Logs Antiguos

```bash
sudo docker compose exec sentinelarg-core find /app/data -name "logs_*.txt" -mtime +30 -delete
```

---

## 12. Preguntas Frecuentes (FAQ) y Soporte

### P: La consola en vivo no muestra nuevos logs o parece detenida.
**R:** La consola utiliza un sistema de "Short Polling" optimizado que consulta cada 1 segundo. Si la conexión se interrumpe, refresque la página del navegador (Ctrl+F5). Asegúrese de que el servicio backend esté activo.

### P: ¿Cómo sé si Metasploit está instalado correctamente en el contenedor?
**R:** Ejecute:
```bash
sudo docker compose exec sentinelarg-core msfconsole -v
```
Debería devolver la versión del framework.

### P: El botón "EXPLOTAR" no aparece en algunos hallazgos.
**R:** El botón solo aparece cuando el sistema (ya sea por mapeo estático o por análisis de IA) identifica un módulo de Metasploit confiable y conocido para ese servicio o CVE específico (ej. vsftpd 2.3.4, distcc, UnrealIRCd, Tomcat).

### P: El análisis de IA tarda más de lo esperado.
**R:** El análisis depende del servicio local de Ollama. Verifique que el contenedor `sentinelarg-ollama` esté activo y que el servidor tenga recursos de CPU/GPU disponibles.

### P: La licencia expiró, ¿qué hago?
**R:** Contacte a su proveedor para renovar. Una vez obtenida la nueva clave, ejecútela con:
```bash
sudo ./activate.sh NUEVA_CLAVE
```

### P: Windows SmartScreen bloquea el instalador.
**R:** Esto es esperado en software nuevo sin reputación establecida en Microsoft. Use los scripts `.bat` directamente (son más transparentes y no generan advertencias). Si prefiere el `.exe`, haga clic derecho → Propiedades → marque "Desbloquear" → Aceptar.

### P: Gobuster falla con "wordlist file does not exist".
**R:** Corregido en v1.0.3. Actualice con `./update.sh` (Linux) o `3_Actualizar_Sistema.bat` (Windows).

### P: Nikto falla con "TLS/SSL is not available".
**R:** Corregido en v1.0.3. La librería `libnet-ssleay-perl` ahora está incluida en la imagen Docker.

---

## 13. Aviso Legal y Ético

**DECLARACIÓN DE RESPONSABILIDAD:** SentinelArg es una herramienta de evaluación de seguridad diseñada exclusivamente para profesionales de la ciberseguridad, auditores y administradores de sistemas autorizados.

El usuario final es el único responsable de garantizar que cuenta con la **autorización explícita, legal y por escrita** del propietario del sistema para realizar cualquier tipo de escaneo o prueba de penetración.

El uso de esta plataforma contra objetivos sin la debida autorización constituye una violación de las leyes de ciberseguridad locales e internacionales. Los desarrolladores y distribuidores de SentinelArg **no asumen ninguna responsabilidad** por el uso indebido o malintencionado del software.

### Contacto de Soporte
- **Email:** soporte@sentinelarg.com.ar
- **Web:** https://sentinelarg.com.ar/soporte
- **Documentación:** https://sentinelarg.com.ar/docs

---

# 🇬🇧 PART II — ENGLISH

## 14. Introduction

**SentinelArg** is an enterprise-grade cybersecurity platform that automates vulnerability assessment, attack surface reconnaissance, and risk analysis.

Powered by a local **AI Orchestrator** (Ollama), SentinelArg not only detects technical flaws but correlates them, filters noise, and delivers an **Executive Summary** in business language, mapping each finding to compliance frameworks like **OWASP Top 10, MITRE ATT&CK, CWE, and PCI-DSS**.

### What's New in Version 1.0.3

| Improvement | Description |
|---|---|
| 🪟 **Native Windows Installer** | `.bat` + `.ps1` scripts with automatic NVIDIA GPU detection. |
| 🐧 **Robust Linux Installer** | Hierarchical detection: NVIDIA → AMD → Intel → CPU. |
| 🧠 **Anti-hallucination AI filter** | Cross-validation of CVEs against real scan data. |
| 📄 **PDF + DOCX Export** | Executive reports in both formats. |
| 🎨 **ANSI Code Cleanup** | Clean findings in reports (no more `1m[34m`). |
| 🔧 **Extended Ollama Context** | 8192 tokens for higher-quality analysis. |
| 🛡️ **Transparency Model** | Distribution of auditable open scripts. |
| 🌐 **Multi-platform Support** | Windows (PowerShell), Linux (Bash), macOS (WSL2). |

---

## 15. System Requirements

### 15.1 Minimum Requirements (Basic Scans)

| Component | Specification |
|---|---|
| CPU | 4 cores (x86_64) |
| RAM | 8 GB |
| Storage | 20 GB SSD |
| Operating System | Ubuntu 22.04+, Debian 11+, Kali 2024+, Windows 10/11 (WSL2) |
| Network | Internet connection (Docker image download ~2.5 GB) |

### 15.2 Recommended Requirements (Full Scans + Local AI)

| Component | Specification |
|---|---|
| CPU | 8+ cores (Intel i7/i9 or AMD Ryzen 7/9) |
| RAM | 16 GB or higher |
| Storage | 50 GB SSD NVMe |
| GPU | NVIDIA RTX 3060+ (8 GB VRAM) — **optional but recommended** |
| Base Software | Docker Desktop (Windows) or Docker Engine + Compose V2 (Linux) |

---

## 16. Installation and Deployment

### 16.1 Distribution Model: Transparency over Convenience

**SentinelArg is distributed as executable source code (`.bat` + `.ps1` + `.sh`), not as a signed `.exe` installer.**

This is an **intentional security decision**:

| Traditional .exe installer | SentinelArg (this package) |
|---|---|
| Compiled binary, impossible to audit | Open scripts, reviewable line by line |
| Requires code signing certificate (~$300/year) | No hidden costs passed to the customer |
| SmartScreen blocks until "reputation" is built | Does not depend on Microsoft reputation |
| User delegates trust to the signer | User **verifies** what they execute |
| Runs opaque actions in the background | Every action is visible in the console |

> **If your corporate security policy requires a signed `.exe`**, contact us at **support@sentinelarg.com.ar** and we will provide the installer signed with our EV certificate (available upon request for Enterprise customers).

### 16.2 Windows Installation (Recommended)

#### Prerequisites
1. **Docker Desktop** installed and running.
   - Download: https://www.docker.com/products/docker-desktop
   - ⚠️ Enable **"Use WSL 2 based engine"** in Settings.
   - ⚠️ If you have an NVIDIA GPU: enable **"CUDA support"** in Settings → Features in development.
2. **PowerShell** (included in Windows 10/11).

#### Steps
1. Download `SentinelArg_Windows_v1.0.3.zip` from https://sentinelarg.com.ar/licenses
2. Extract to a folder (e.g., `C:\SentinelArg`).
3. **Open PowerShell as Administrator** and run:
   ```powershell
   Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
   cd C:\SentinelArg
   .\1_Install_SentinelArg.bat
   ```
4. Follow the on-screen instructions:
   - You will be asked whether to install the local AI engine (Ollama). Answer **Y** if you have ≥8 GB free RAM.
   - The script will automatically detect your NVIDIA GPU (if applicable).
   - The Docker image (~2.5 GB) will download. This may take 5-15 minutes.
5. Activate your license:
   ```powershell
   .\2_Activate_License.bat
   ```
   Enter your key in `XXXX-XXXX-XXXX` format.
6. Open your browser at **http://127.0.0.1:8888/dashboard**.

### 16.3 Linux Installation (Kali/Ubuntu/Debian)

#### Prerequisites
- `docker` and `docker-compose-plugin` installed.
- `sudo` privileges.

#### Steps
1. Download `sentinelarg-linux-v1.0.3.tar.gz`.
2. Extract and enter the directory:
   ```bash
   tar -xzf sentinelarg-linux-v1.0.3.tar.gz
   cd sentinelarg-client-release
   ```
3. Run the installer:
   ```bash
   sudo chmod +x install.sh
   sudo ./install.sh
   ```
4. Activate the license:
   ```bash
   sudo ./activate.sh YOUR_LICENSE_KEY
   ```
5. Open **http://127.0.0.1:8888/dashboard**.

---

## 17. Initial Configuration

### 17.1 System Customization

The `sentinelarg_config.json` file allows you to customize the platform to reflect your organization's identity in reports.

| Field | Description | Example |
|---|---|---|
| `company_name` | Your company name | `"CyberSec Solutions S.A."` |
| `report_title` | Report title | `"Security Assessment Report"` |
| `primary_color` | Main theme color | `"#8B0000"` |
| `logo_path` | Path to logo | `"static/logo.png"` |
| `footer_text` | Footer text | `"© 2026 My Company. Confidential."` |

**Apply changes:** Restart the container:
```bash
sudo docker compose restart sentinelarg-core
```

### 17.2 AI Configuration (Ollama)

SentinelArg uses **Ollama** to run AI models locally, ensuring total privacy of scan data.

- Default model: `qwen2.5-coder:3b` (3 billion parameters).
- Context: **8192 tokens** (expanded from 4096 in v1.0.3).
- Verify installation:
  ```bash
  sudo docker compose exec sentinelarg-ollama ollama list
  ```

### 17.3 GPU Acceleration

The installer automatically detects hardware:

| Detected GPU | Automatic Action |
|---|---|
| **NVIDIA** | Uses `docker-compose.nvidia.yml` (requires `nvidia-container-toolkit` on Linux, or CUDA enabled in Docker Desktop Windows). |
| **AMD** | Uses `docker-compose.amd-intel.yml` with ROCm/Vulkan. |
| **Intel iGPU** | Uses `docker-compose.amd-intel.yml` with Vulkan. |
| **No GPU** | CPU mode (functional but slower). |

---

## 18. Access and Control Panel (Command Center)

Upon accessing the web interface, the user is greeted by the **Command Center**:

### Main Components
- **Top Bar:** Active license status (e.g., `ENTERPRISE`), software version, `INITIATE_SCAN` and `EXPLOIT_LAB` buttons.
- **Real-Time Metrics:** `TOTAL_SCANS`, `COMPLETED`, `VULNERABILITIES`.
- **Scan History:** Central table with ID, Target, Type, Status, vulnerability count, and action buttons (View Logs, View Report, AI Analysis).

---

## 19. Available Scan Protocols

| Protocol | Description and Use Cases |
|---|---|
| **QUICK** | Quick scan of common ports (1-1000) with Nmap and basic Nuclei detection. |
| **OSINT** | Passive reconnaissance (theHarvester, Subfinder, Amass, dnsrecon) to discover subdomains and emails. |
| **WEB_SERVER** | Deep web application audit (WhatWeb, Nikto, Gobuster, Nuclei). |
| **WINDOWS_SERVER** | Specialized assessment for Windows environments (SMB, RDP, RPC, WinRM, MSSQL). |
| **LINUX_SERVER** | Linux service audit (SSH, MySQL, PostgreSQL, Redis, NFS, SMB). |
| **NETWORK_DISCOVERY** | Advanced live host discovery in a network range (CIDR) with XML reports. |
| **VULNERABILITY_SCAN** | 100% CVE-focused assessment using Nuclei. |
| **FULL_AUTO** | Comprehensive assessment with full tool battery. |
| **WINDOWS_WORKSTATION** | Workstation audit (password policies, Defender, BitLocker, UAC). |

---

## 20. Step-by-Step Guide: Running a Scan

### Step 1: Start the Assessment
1. Click **INITIATE_SCAN**.
2. Enter the **TARGET** (Domain or IP).
3. Select the **SCAN_PROTOCOL**.
4. Click **EXECUTE**.

### Step 2: Real-Time Monitoring (Live Execution Console)
The **LIVE_EXECUTION_CONSOLE** window will open:
- **Scroll Bar:** Appears if text exceeds 60% of screen height.
- **Smart Scrolling:** The console auto-scrolls down only if the user is already at the bottom. If you scroll up to read a previous log, the system respects your position.
- **Content:** Executed commands, tool progress, and raw output (STDOUT/STDERR).

### Step 3: Completion
When the status changes to **COMPLETED**, the console will show a completion message and the **Report** and **AI Analysis** buttons will be enabled.

---

## 21. Results Analysis and Artificial Intelligence

Clicking the **AI Analysis** icon on a completed scan, the Orchestrator presents:

1. **Contextual Risk Score:** Risk score from 0 to 100.
2. **Executive Summary:** Paragraph written in business language.
3. **Recommended Exploitation Guide (AI):** If the AI detects an exploitable service or CVE with Metasploit, it will show a highlighted block with the module, payload, options, and a **"PRE-FILL EXPLOIT LAB"** button to execute it with one click.
4. **Priority Critical Findings:** Curated list with Title, Severity, Impact, and Remediation.
5. **Filtered Noise:** Full transparency about elements the AI intentionally discarded (false positives, ANSI codes, marketing parameters).

### CVE Anti-Hallucination Filter
The system automatically validates any CVE mentioned by the AI against the real scan data. If the AI invents a CVE that was not detected by the tools, it is removed from the report and a transparency note is added.

---

## 22. Report Generation and Export

To generate a formal deliverable, click the **Report** icon. The modal includes:

- **Customizable Cover:** With your company name, title, and logo.
- **Compliance Mapping:** Badges for OWASP, MITRE ATT&CK, CWE, and PCI-DSS.
- **AI Executive Summary:** Includes risk score, critical findings, and exploitation guide.
- **PDF Export:** `EXPORT_PDF` button downloads a professional document.
- **DOCX Export:** `EXPORT_DOCX` button for editing in Microsoft Word.

**File name:** `Reporte_SentinelArg_<Target>_<ID>.pdf` (or `.docx`).

---

## 23. Advanced Tools

### 23.1 AI Assistant (AI_ASSISTANT)
Accessible via the floating button in the bottom-right corner.

**Function:** Allows natural language queries about scan results and about using the SentinelArg platform itself.

**Example:** *"How do I run this exploit safely?"* → The AI will guide you to the "EXPLOIT" button or the Exploit Lab, reminding you of the need for explicit consent.

### 23.2 Exploitation Laboratory (EXPLOIT_LAB)

> ⚠️ **WARNING:** This tool interacts with the **Metasploit** framework (pre-installed in the container) and executes real exploitation modules. Use it **only with explicit written authorization**.

#### "1-Click" Flow (Recommended)
1. Identify a critical finding in the Dashboard or AI Analysis that has the **EXPLOIT** or **PRE-FILL EXPLOIT LAB** button.
2. Upon clicking, the modal will open with the Module, RHOST, Payload, and Options (JSON) already auto-filled.
3. Review the parameters (especially **LHOST** and **LPORT** in options).
4. Check the **CONFIRMATION** authorization box.
5. Click **EXECUTE** and observe the Metasploit console output in real time.

#### Manual Flow
1. Click **EXPLOIT_LAB** in the top bar.
2. Fill in the fields: **MODULE**, **RHOST**, **PAYLOAD**, and **OPTIONS** (JSON). Use the **LOAD_EX** and **TEMPLATE** buttons for help.
3. Check the **CONFIRMATION** box.
4. Click **EXECUTE**.

---

## 24. Maintenance and Updates

### 24.1 Software Update

**On Linux:**
```bash
cd /path/to/sentinelarg-client-release
sudo ./update.sh
```

**On Windows (PowerShell as Administrator):**
```powershell
cd C:\SentinelArg
.\3_Update_System.bat
```

The script will automatically:
1. Backup your scan database.
2. Download the new Docker image.
3. Restart services.
4. Clean up old images.

### 24.2 Database Backup

```bash
sudo docker compose cp sentinelarg-core:/app/data/sentinelarg.db ./backup_$(date +%Y%m%d).db
```

### 24.3 Cleaning Old Logs

```bash
sudo docker compose exec sentinelarg-core find /app/data -name "logs_*.txt" -mtime +30 -delete
```

---

## 25. Frequently Asked Questions (FAQ) and Support

### Q: The live console doesn't show new logs or seems stuck.
**A:** The console uses an optimized "Short Polling" system that queries every 1 second. If the connection is interrupted, refresh the browser page (Ctrl+F5). Ensure the backend service is active.

### Q: How do I know if Metasploit is correctly installed in the container?
**A:** Run:
```bash
sudo docker compose exec sentinelarg-core msfconsole -v
```
It should return the framework version.

### Q: The "EXPLOIT" button doesn't appear on some findings.
**A:** The button only appears when the system (either via static mapping or AI analysis) identifies a reliable and known Metasploit module for that specific service or CVE (e.g., vsftpd 2.3.4, distcc, UnrealIRCd, Tomcat).

### Q: AI analysis takes longer than expected.
**A:** Analysis depends on the local Ollama service. Verify that the `sentinelarg-ollama` container is active and that the server has available CPU/GPU resources.

### Q: The license expired, what do I do?
**A:** Contact your provider to renew. Once you have the new key, run:
```bash
sudo ./activate.sh NEW_KEY
```

### Q: Windows SmartScreen blocks the installer.
**A:** This is expected for new software without established Microsoft reputation. Use the `.bat` scripts directly (they are more transparent and don't generate warnings). If you prefer the `.exe`, right-click → Properties → check "Unblock" → OK.

### Q: Gobuster fails with "wordlist file does not exist".
**A:** Fixed in v1.0.3. Update with `./update.sh` (Linux) or `3_Update_System.bat` (Windows).

### Q: Nikto fails with "TLS/SSL is not available".
**A:** Fixed in v1.0.3. The `libnet-ssleay-perl` library is now included in the Docker image.

---

## 26. Legal and Ethical Notice

**DISCLAIMER:** SentinelArg is a security assessment tool designed exclusively for cybersecurity professionals, auditors, and authorized system administrators.

The end user is solely responsible for ensuring they have **explicit, legal, and written authorization** from the system owner to perform any type of scanning or penetration testing.

Use of this platform against targets without proper authorization constitutes a violation of local and international cybersecurity laws. The developers and distributors of SentinelArg **assume no responsibility** for misuse or malicious use of the software.

### Support Contact
- **Email:** support@sentinelarg.com.ar
- **Web:** https://sentinelarg.com.ar/support
- **Documentation:** https://docs.sentinelarg.com

---

## 📎 Apéndice A: Changelog / Changelog

### v1.0.3 (2026-11-18)

**Nuevas funcionalidades / New Features**
- Instalador nativo para Windows (.exe) con Inno Setup / Native Windows installer with Inno Setup
- Scripts de instalación en PowerShell para usuarios avanzados / PowerShell installation scripts for advanced users
- Detección automática de GPU NVIDIA en Windows / Automatic NVIDIA GPU detection on Windows
- Exportación de reportes en formato PDF y DOCX / PDF and DOCX report export
- Análisis de IA con filtrado anti-alucinaciones de CVEs / AI analysis with CVE anti-hallucination filtering
- Contexto de Ollama ampliado a 8192 tokens / Ollama context expanded to 8192 tokens

**Correcciones / Fixes**
- Error de codificación ANSI en reportes PDF (códigos `1m[34m` eliminados) / ANSI encoding error in PDF reports
- Truncamiento de prompt en Ollama (de 4096 a 8192 tokens) / Ollama prompt truncation
- Crash en análisis IA por variable `vuln_details` no definida / AI analysis crash due to undefined `vuln_details` variable
- Detección de GPU AMD/Intel en entornos WSL2 (falsos positivos) / AMD/Intel GPU detection in WSL2 (false positives)
- Nikto fallaba en HTTPS por falta de `libnet-ssleay-perl` / Nikto failed on HTTPS due to missing `libnet-ssleay-perl`
- Gobuster fallaba por falta de wordlist `dirb/common.txt` / Gobuster failed due to missing `dirb/common.txt` wordlist
- Race condition en inicio de contenedores (healthcheck demasiado estricto) / Race condition in container startup (overly strict healthcheck)

**Mejoras técnicas / Technical Improvements**
- Separación de docker-compose en archivos base + override por GPU / Separation of docker-compose into base + GPU override files
- Scripts `.bat` con detección robusta de directorio (resuelve UAC en Windows) / `.bat` scripts with robust directory detection (resolves UAC on Windows)
- Filtro anti-alucinación de CVEs: valida contra datos reales del escaneo / CVE anti-hallucination filter: validates against real scan data
- Prompt de IA filtrado por severidad (solo HIGH/CRITICAL para análisis ejecutivo) / AI prompt filtered by severity (only HIGH/CRITICAL for executive analysis)
- Backup de datos con `docker compose cp` en lugar de `tar` (más robusto en Windows) / Data backup with `docker compose cp` instead of `tar` (more robust on Windows)

**Distribución / Distribution**
- Paquete ZIP con scripts abiertos + instalador .exe opcional / ZIP package with open scripts + optional .exe installer
- Documentación `SECURITY_MODEL.md` explicando el modelo de transparencia / `SECURITY_MODEL.md` documentation explaining the transparency model
- Hash SHA256 incluido para verificación de integridad / SHA256 hash included for integrity verification

---

## 📎 Apéndice B: Estructura de Archivos / File Structure

```
SentinelArg_Windows_v1.0.3/
├
│
├── 📁 Manual_Install/
│   ├── 1_Instalar_SentinelArg.bat
│   ├── 2_Activar_Licencia.bat
│   ├── 3_Actualizar_Sistema.bat
│   ├── install.ps1
│   ├── activate.ps1
│   ├── update.ps1
│   ├── docker-compose.yml
│   ├── docker-compose.nvidia.yml
│   └── docker-compose.amd-intel.yml
│
├── 📁 Documentation/
│   ├── README_WINDOWS.md
│   ├── SECURITY_MODEL.md
│   ├── TROUBLESHOOTING.md
│   ├── EULA.md
│   └── CHANGELOG.md
│
└
```

---

## 📎 Apéndice C: Verificación de Integridad / Integrity Verification

Antes de instalar, verifique el hash SHA256 del instalador:

**Windows (PowerShell):**
```powershell
Get-FileHash Installers/SentinelArg_Setup_v1.0.3.exe -Algorithm SHA256
```

**Linux (Bash):**
```bash
sha256sum sentinelarg-linux-v1.0.3.tar.gz
```

Compare el resultado con el contenido del archivo `.sha256` incluido en el paquete. Deben coincidir exactamente.

---

**Documento generado para distribución oficial. © 2026 SentinelArg. Todos los derechos reservados.**
**Document generated for official distribution. © 2026 SentinelArg. All rights reserved.**

---