# Call Local Garage Door Repair

Landing de garage door repair para el dominio **calllocalgaragedoorrepair.com**.
Séptima página de YELP PAGES. Formato **Trevino** (el mismo de
FlowerGarageDoorRepair: home + páginas de ciudad con URL limpia), con paleta
propia: **espresso + cobre + bronce sobre crema**.

## Estructura

```
index.html              home (Miami)
privacy-policy.html     política de privacidad (con cláusula A2P 10DLC)
css/styles.css          hoja global (paleta en :root)
css/location.css        componentes de las páginas de ciudad
Miami/index.html        despacho principal
MiamiGardens/index.html
Weston/index.html
BocaRaton/index.html
WestPalmBeach/index.html
img/                    fotos opcionales (ver img/LEEME.txt)
robots.txt  sitemap.xml
```

Las cinco páginas de ciudad son idénticas en estructura: sólo cambian ciudad,
dirección, ZIP, mapa, barrios y el párrafo de "Local Knowledge". Se generaron
con `loc.tpl` + `gen.sh` (scratchpad de la sesión del 28 ago 2026); si hay que
tocar las cinco, se edita la plantilla y se regenera.

## Datos del negocio

- **Teléfono:** (305) 614-2870 &mdash; **inventado**, hay que sustituirlo por el real.
- **Despacho principal:** 2915 Biscayne Blvd, Fl 136, Miami, FL 33137
- **Otros puntos de despacho:**
  - 17161 NW 27th Ave, Unit 3370, Miami Gardens, FL 33056 → `/MiamiGardens`
  - 801 Northpoint Pkwy, Ste G-183, West Palm Beach, FL 33407 → `/WestPalmBeach`
  - 2625 Executive Park Dr, Ste 4207, Weston, FL 33331 → `/Weston`
  - 7781 NW Beacon Square Blvd, Unit 1191, Boca Raton, FL 33487 → `/BocaRaton`
- **Correo:** service@ y privacy@calllocalgaragedoorrepair.com &mdash; **provisionales**.

## Paleta

| Token | Valor | Uso |
| --- | --- | --- |
| `--deep-900` | `#1f1a15` | fondo oscuro, hero, pie |
| `--deep-800` | `#33291f` | franja de confianza, CTA |
| `--brand` | `#c2540b` | cobre: botones, bordes, acentos |
| `--brand-light` | `#f2a56b` | cobre claro: texto sobre fondo oscuro |
| `--bronze` | `#c08a2e` | iconos, degradados |
| `--drop-bg` | `#f5a623` | dorado del desplegable (estándar, no se cambia) |
| `--bg-soft` | `#faf5ed` | crema de las secciones alternas |

## URLs limpias

Cada carpeta lleva su `index.html`, así que `/Miami`, `/MiamiGardens`, `/Weston`,
`/BocaRaton` y `/WestPalmBeach` funcionan sin configuración extra en cualquier
hosting estático.

## Imagenes

Las cuatro fotos y el logo (generados con Gemini el 28 ago 2026) ya estan
procesados y puestos: `img/hero-garage.jpg`, `img/about-garage.jpg`,
`img/why-garage.jpg`, `img/process-garage.jpg` y `img/logo-icon.png` (el icono
del logo, desfondado, va en la cabecera y el pie de las 7 paginas). El lockup
completo queda en `img/logo-full.png` y `img/logo-full-light.png` para usos
fuera de la web. Los originales `.jfif` de Gemini estan en `img/_originales/`.

## Pendientes antes de publicar

1. Sustituir el teléfono inventado por el real.
2. Correos reales en la política de privacidad y en el pie.
3. Redes sociales del pie (están en `#`).
