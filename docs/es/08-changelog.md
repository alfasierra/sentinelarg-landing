

# Historial de Cambios (Changelog)

## [1.0.3] - 2026-11-18

### ✅ Correcciones Críticas

- **IA Anti-Alucinación:** Implementado filtro de validación cruzada para eliminar CVEs inventados por el modelo de lenguaje en los reportes.
- **Truncamiento de Contexto:** Aumentado el contexto de Ollama a 8192 tokens y filtrado de hallazgos por severidad para evitar que la IA ignore datos.
- **Códigos ANSI en PDF:** Corregido el parser para eliminar caracteres de color (`1m[34m`) en los reportes exportados, mejorando la legibilidad.
- **Dependencias de Herramientas:** Agregados `dirb`, `seclists` y `libnet-ssleay-perl` a la imagen Docker para corregir fallos en Gobuster y Nikto (HTTPS).

### 📊 Reportes PDF Profesionales
- **Tabla de Contenidos** automática al inicio del reporte
- **Sección de Metodología y Alcance** con herramientas dinámicas (las que realmente se ejecutaron) y duración legible
- **Resumen de Hallazgos** con tabla de severidades y gráfico de torta visual
- **Agrupamiento por Severidad** en lugar de por herramienta (estándar de la industria: CRÍTICO → ALTO → MEDIO → BAJO → INFORMATIVO)
- **Anexo A: Output Crudo de Herramientas** para auditoría técnica
- **Corrección de severidad en BD**: ahora se guarda la severidad real de Nuclei/Nmap en la tabla `findings` (antes todo quedaba como INFO)
- **Función `infer_severity()`** para hallazgos sin severidad explícita

### 🐛 Bugs Corregidos
- Fix: Duración del escaneo mostraba "X minutos" → ahora formato legible (ej: "0 hora(s) y 20 minuto(s)")
- Fix: Tabla de resumen mostraba 0 vulnerabilidades → ahora cuenta hallazgos reales con severidad
- Fix: Gráfico de torta vacío → ahora refleja distribución real de severidades
- Fix: Error `Illegal attribute 'fillColors'` en reportlab → asignación individual de colores por slice
- Fix: Import incorrecto de `Pie` desde `reportlab.graphics.shapes` → corregido a `charts.piecharts`
- Fix: `MITRE ATT&CK` aparecía como `MITRE ATT&CK;` → escapado correcto de `&` en HTML

### 🛠️ Nuevas Utilidades de Sistema
- **`Limpiar_Espacio_Docker.bat`**: Script oficial para compactar el disco virtual de Docker (`ext4.vhdx`) y recuperar espacio en disco en Windows sin perder datos de SentinelArg.
- **`Desinstalar_SentinelArg.bat`**: Proceso de desinstalación limpia que elimina contenedores, volúmenes y archivos de configuración de forma segura.

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