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
  (no renombrar a htaccess.txt ni similar)


QUÉ HACE EL .htaccess
---------------------
1. Sirve archivos y carpetas existentes tal cual.
2. Fallback SPA: rutas de React Router van a index.html.
3. Redirección 301 permanente:
   /visitas-escolares  →  /bioparque/visitas-escolares


PRUEBAS RECOMENDADAS TRAS EL DESPLIEGUE
---------------------------------------
Rutas principales (deben cargar correctamente):
  https://fundacionbubalco.org.ar/
  https://fundacionbubalco.org.ar/bioparque
  https://fundacionbubalco.org.ar/bioparque/horarios-y-tarifas
  https://fundacionbubalco.org.ar/bioparque/preguntas-frecuentes
  https://fundacionbubalco.org.ar/bioparque/visitas-escolares
  https://fundacionbubalco.org.ar/nuestro-trabajo
  https://fundacionbubalco.org.ar/donaciones

Redirección 301:
  https://fundacionbubalco.org.ar/visitas-escolares
  → debe llevar a /bioparque/visitas-escolares

SEO / indexación (en las páginas principales):
  https://fundacionbubalco.org.ar/robots.txt
  https://fundacionbubalco.org.ar/sitemap.xml

  En el HTML de cada página principal debe aparecer:
    <meta name="robots" content="index, follow" />
  y el canonical debe apuntar a https://fundacionbubalco.org.ar/...


API MERCADO PAGO (OPCIONAL)
---------------------------
La carpeta api/ incluye endpoints PHP para donaciones con Mercado Pago.
Solo es necesaria si se activará el checkout online. Requiere PHP 8.x,
extensión curl y configuración de credenciales en api/mp/config.php.


CONTACTO TÉCNICO
----------------
Sitio desarrollado por WebFine.
Para dudas sobre el paquete de producción, consultar al equipo que
entregó este release.
