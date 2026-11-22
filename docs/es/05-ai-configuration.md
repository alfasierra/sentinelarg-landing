


# Configuración y Ajuste de la Inteligencia Artificial

SentinelArg utiliza **Ollama** para ejecutar modelos de lenguaje localmente, garantizando que los datos de tus escaneos nunca salgan de tu infraestructura.

## Modelo por Defecto

El sistema utiliza `qwen2.5-coder:3b` por su excelente equilibrio entre rendimiento y precisión en tareas de ciberseguridad.

## Ajuste de Rendimiento (GPU vs CPU)

- **Con GPU NVIDIA:** El instalador configura automáticamente `docker-compose.nvidia.yml`. La IA responderá en 2-5 segundos.
- **Solo CPU:** El sistema funcionará correctamente, pero la generación de texto puede tardar 10-20 segundos.

## Prevención de Alucinaciones (Anti-Hallucination Filter)

SentinelArg incluye un filtro de validación cruzada. Si el modelo de IA menciona un CVE que no fue detectado por las herramientas de escaneo (Nmap/Nuclei), el sistema:

1. Elimina automáticamente la mención del reporte.
2. Elimina la guía de Metasploit asociada.
3. Agrega una nota de transparencia: *"Se filtró información no verificada por el motor de escaneo"*.

## Cambiar el Modelo de IA (Avanzado)

Si deseas usar un modelo más grande (ej. `llama3:8b`), edita el archivo `docker-compose.yml` y cambia la variable de entorno o ejecuta:

```bash
sudo docker compose exec sentinelarg-ollama ollama pull llama3:8b


(Requiere al menos 16 GB de RAM).
Configuración del Contexto
El contexto de Ollama está configurado en 8192 tokens (ampliado desde 4096 en v1.0.3). Para modificarlo:

# En docker-compose.yml, bajo sentinelarg-ollama:
environment:
  - OLLAMA_CONTEXT_LENGTH=8192

  Verificación del Estado de la IA
Para verificar que Ollama está funcionando:
sudo docker compose exec sentinelarg-ollama ollama list
Deberías ver el modelo qwen2.5-coder:3b en la lista.