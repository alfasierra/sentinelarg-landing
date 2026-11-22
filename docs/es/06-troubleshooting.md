
---
title: "Solución de Problemas y Preguntas Frecuentes"
---
# Solución de Problemas y Preguntas Frecuentes (FAQ)

## P: Windows SmartScreen o Defender bloquea el instalador `.exe` o `.bat`.

**R:** Esto es normal en software nuevo sin reputación de firma digital.
- **Solución:** Haz clic derecho en el archivo > *Propiedades* > Marca la casilla **"Desbloquear"** > *Aplicar*. O ejecuta directamente los scripts `.ps1` como Administrador, los cuales no activan esta alerta.

## P: El contenedor `sentinelarg-ollama` aparece como `unhealthy`.

**R:** Ollama está descargando o cargando el modelo en la RAM.
- **Solución:** Espera 1-2 minutos. Si persiste, ejecuta `sudo docker compose logs sentinelarg-ollama` para verificar que tu sistema tenga al menos 8 GB de RAM libres.

## P: El análisis de IA dice "Risk: UNKNOWN" o el resumen está vacío.

**R:** Esto solía ocurrir por un truncamiento del contexto.
- **Solución:** Asegúrate de estar usando la versión 1.0.3 o superior, que incluye el ajuste automático de `OLLAMA_CONTEXT_LENGTH=8192` y el filtro de hallazgos por severidad.

## P: Error: `wordlist file does not exist` en Gobuster.

**R:** La wordlist de `dirb` no estaba en la imagen base.
- **Solución:** Ejecuta `sudo ./update.sh` (Linux) o `.\3_Actualizar_Sistema.bat` (Windows) para descargar la imagen corregida que incluye `dirb` y `seclists`.

## P: ¿Cómo actualizo SentinelArg a la última versión?

**R:**
- **Linux:** `cd sentinelarg-client-release && sudo ./update.sh`
- **Windows:** Ejecuta `.\3_Actualizar_Sistema.bat` como Administrador. El script hará un backup de tu base de datos automáticamente.

## P: La licencia expiró, ¿qué hago?

**R:** Contacta a tu proveedor para renovar. Una vez obtenida la nueva clave, ejecútala con:
```bash
sudo ./activate.sh NUEVA_CLAVE

P: El dashboard no carga en el navegador.
R:
Usa http://127.0.0.1:8888/dashboard en lugar de http://localhost:8888 (evita problemas de resolución IPv6).
Verifica que los contenedores están corriendo: docker ps.
Revisa logs: docker compose logs sentinelarg-core.
Pruebe en modo incógnito del navegador (puede haber caché corrupto).
P: Rendimiento lento de la IA.
R:
Verifica que tienes una GPU NVIDIA compatible (GTX 1060 o superior).
Instala los drivers más recientes desde https://www.nvidia.com/drivers.
En Docker Desktop: Settings → Resources → WSL 2 → Activa "CUDA support".
Reinicia Docker Desktop.
Verifica que la GPU es detectada: nvidia-smi desde una terminal de WSL.
Vuelve a ejecutar 1_Instalar_SentinelArg.bat — detectará la GPU automáticamente.
P: Nikto falla con "TLS/SSL is not available".
R: Corregido en v1.0.3. La librería libnet-ssleay-perl ahora está incluida en la imagen Docker. Actualiza con sudo ./update.sh (Linux) o .\3_Actualizar_Sistema.bat (Windows).
