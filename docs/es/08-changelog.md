
---
title: "Historial de Cambios "
---
# Historial de Cambios (Changelog)

## [1.0.3] - 2026-11-18

### ✅ Correcciones Críticas

- **IA Anti-Alucinación:** Implementado filtro de validación cruzada para eliminar CVEs inventados por el modelo de lenguaje en los reportes.
- **Truncamiento de Contexto:** Aumentado el contexto de Ollama a 8192 tokens y filtrado de hallazgos por severidad para evitar que la IA ignore datos.
- **Códigos ANSI en PDF:** Corregido el parser para eliminar caracteres de color (`1m[34m`) en los reportes exportados, mejorando la legibilidad.
- **Dependencias de Herramientas:** Agregados `dirb`, `seclists` y `libnet-ssleay-perl` a la imagen Docker para corregir fallos en Gobuster y Nikto (HTTPS).

### 🚀 Nuevas Características

- **Instalador Windows Profesional:** Scripts `.bat` y `.ps1` optimizados con detección de directorio UAC y verificación de Docker.
- **Exportación a DOCX:** Además de PDF, ahora se pueden generar reportes editables en Microsoft Word.
- **Detección de GPU en Windows:** El instalador detecta automáticamente NVIDIA y configura `docker-compose.nvidia.yml`.

## [1.0.2] - 2026-11-10

- Integración nativa de Metasploit Framework en el contenedor.
- Mejora en el "Scroll Inteligente" de la consola en vivo.
- Botón de "Explotación con 1 Clic" pre-llenado en el Exploit Lab.

## [1.0.1] - 2026-11-05

- Primera versión pública.
- Escaneo web básico con Nmap, Nuclei, WhatWeb.
- Reportes PDF.