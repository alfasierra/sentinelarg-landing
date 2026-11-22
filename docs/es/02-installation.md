---
title: "Guía de Instalación Detallada"
---
# Guía de Instalación Detallada

SentinelArg se despliega completamente mediante contenedores Docker, garantizando un entorno aislado, seguro y reproducible.

## Requisitos del Sistema

| Componente | Mínimo | Recomendado |
|---|---|---|
| **CPU** | 4 núcleos (x86_64) | 8+ núcleos (Intel i7/i9 o AMD Ryzen 7/9) |
| **RAM** | 8 GB | 16 GB o superior |
| **Almacenamiento** | 20 GB SSD | 50 GB SSD NVMe |
| **GPU** | Ninguna | NVIDIA RTX 3060+ (para aceleración de IA) |

## Instalación en Windows (Paso a Paso)

1. **Instala Docker Desktop:** Descárgalo desde [docker.com](https://www.docker.com/products/docker-desktop). Durante la instalación, asegúrate de marcar **"Use WSL 2 based engine"**.
2. **Configura la GPU (Opcional):** Si tienes una GPU NVIDIA, ve a *Settings > Features in development* y marca **"CUDA support"**.
3. **Ejecuta el Instalador:** Haz clic derecho en `1_Instalar_SentinelArg.bat` > *Ejecutar como administrador*.
   > *Nota: Si Windows SmartScreen bloquea el archivo, haz clic en "Más información" > "Ejecutar de todos modos", o usa los scripts `.ps1` directamente.*

## Instalación en Linux (Kali/Ubuntu/Debian)

El script `install.sh` detecta automáticamente tu sistema y configura las dependencias:

```bash
# 1. Navega a la carpeta
cd sentinelarg-client-release

# 2. Otorga permisos de ejecución
sudo chmod +x install.sh activate.sh update.sh

# 3. Ejecuta la instalación
sudo ./install.sh


El instalador detectará automáticamente si tienes una GPU NVIDIA, AMD o Intel y configurará el archivo docker-compose correspondiente.
Verificación Post-Instalación
Para verificar que todo está funcionando:

sudo docker compose ps

Deberías ver sentinelarg-core y sentinelarg-ollama con el estado Up.