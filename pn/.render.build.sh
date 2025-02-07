#!/bin/bash

# Detener ejecución en caso de error
set -e

echo "🚀 Instalando dependencias..."
pip install -r requirements.txt

echo "⚙️ Generando el sitio estático con Pelican..."
pelican content

echo "✅ Build completado."
