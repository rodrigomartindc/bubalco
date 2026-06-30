FUNDACIÓN BUBALCÓ PATAGONIA — INSTRUCCIONES DE DESPLIEGUE
=========================================================

Dominio final: https://fundacionbubalco.org.ar

ARCHIVO A SUBIR
---------------
Descomprimir: fundacion-bubalco-produccion-final.zip

Subir TODO el contenido del ZIP al root (document root) del dominio.
No subir una carpeta contenedora: index.html y .htaccess deben quedar
directamente en la raíz del sitio.


ARCHIVOS CLAVE EN LA RAÍZ
-------------------------
- index.html          → página de inicio
- .htaccess           → reglas Apache (SPA + redirecciones)
- robots.txt          → política de rastreo
- sitemap.xml         → mapa del sitio
- llms.txt            → contexto para asistentes/LLMs
- assets/             → CSS y JS del sitio
- images/             → imágenes organizadas por sección
- logos/              → logos de la fundación
- docs/               → documentos descargables (PDF)
- data/               → tarifas editables (ver abajo)
- favicon.ico, favicon-32x32.png, apple-touch-icon.png


ESTRUCTURA DE IMÁGENES
----------------------
images/hero/              → imágenes del inicio
images/bioparque/         → bioparque, mapas, visitas escolares
images/nuestro-trabajo/   → sección nuestro trabajo
images/tarjetas/          → medios de pago
images/partners/          → logos de partners


REQUISITOS DEL SERVIDOR
-----------------------
- Hosting con Apache (o compatible) y soporte para .htaccess
- mod_rewrite habilitado (o equivalente para fallback SPA)
- El archivo .htaccess debe conservar su nombre con punto inicial
  (en este ZIP ya viene como .htaccess, no como "htaccess")


QUÉ HACE EL .htaccess
---------------------
1. Sirve archivos y carpetas existentes tal cual.
2. Fallback SPA: rutas de React Router van a index.html.
3. Redirección 301 permanente:
   /visitas-escolares  →  /bioparque/visitas-escolares


PRUEBAS RECOMENDADAS TRAS EL DESPLIEGUE
---------------------------------------
Rutas principales:
  https://fundacionbubalco.org.ar/
  https://fundacionbubalco.org.ar/bioparque
  https://fundacionbubalco.org.ar/bioparque/horarios-y-tarifas
  https://fundacionbubalco.org.ar/bioparque/preguntas-frecuentes
  https://fundacionbubalco.org.ar/bioparque/visitas-escolares
  https://fundacionbubalco.org.ar/nuestro-trabajo
  https://fundacionbubalco.org.ar/donaciones

Redirección 301:
  https://fundacionbubalco.org.ar/visitas-escolares

SEO:
  https://fundacionbubalco.org.ar/robots.txt
  https://fundacionbubalco.org.ar/sitemap.xml


ACTUALIZAR TARIFAS (SIN REBUILD NI ZIP NUEVO)
---------------------------------------------
Las tarifas NO se editan en HTML ni en assets/*.js.

Archivo a modificar en el servidor:
  data/tarifas.json

Cómo hacerlo (cPanel → Administrador de archivos):
1. Ir a la carpeta data/ en la raíz del sitio
2. Editar tarifas.json
3. Cambiar solo los valores en "valor": "$..." (respetar comillas y comas)
4. Guardar
5. Abrir la web en una pestaña nueva o recargar con Ctrl+F5:
   /bioparque/horarios-y-tarifas

IMPORTANTE:
- No editar index.html ni archivos dentro de bioparque/horarios-y-tarifas/
- No editar assets/*.js
- Si el JSON queda mal formado, el sitio muestra las tarifas de respaldo
  hasta que se corrija el archivo
- Validar JSON antes de guardar (comillas dobles, comas entre items)

Estructura del archivo:
  tarifas[]       → lista de entradas individuales
  promociones[]   → grupos I, II, III
  clubRioNegro[]  → descuentos Club Río Negro


API MERCADO PAGO (OPCIONAL)
---------------------------
La carpeta api/ incluye endpoints PHP para donaciones con Mercado Pago.
Solo es necesaria si se activará el checkout online.
