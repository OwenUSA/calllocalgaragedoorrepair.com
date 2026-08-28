# Call Local Garage Door Repair

Landing de garage door repair para el dominio **calllocalgaragedoorrepair.com**.
Séptima página de YELP PAGES, con paleta propia: **espresso + cobre + bronce
sobre crema**.

Desde el 28 de agosto de 2026 es una aplicación **Next.js** (App Router) que se
compila a sitio estático: el HTML y el CSS que salen del build no necesitan
servidor. Misma arquitectura que FlowerGarageDoorRepair.

## Cómo se trabaja

```bash
npm install       # una vez
npm run dev       # http://localhost:3000
npm run build     # genera out/ con el sitio estatico completo
```

`out/` es lo que se sube al hosting, o lo que compilan Vercel / Netlify /
GitHub Actions. No se commitea: está en `.gitignore`, igual que `node_modules`.

## Estructura

```
app/layout.jsx              <html>, CSS global y metadata compartida
app/page.jsx                /                 home (Miami)
app/[city]/page.jsx         /Miami /MiamiGardens /Weston /BocaRaton /WestPalmBeach
app/privacy-policy/page.jsx /privacy-policy   (con la clausula A2P 10DLC)
components/                 Header, Footer, TopBar, Icons
data/site.js                TODO el contenido: marca, telefono, ciudades, servicios, FAQ
css/styles.css              hoja global (paleta en :root)
css/location.css            componentes de las paginas de ciudad
public/img/                 logo y fotos, servidas en /img/...
public/robots.txt · public/sitemap.xml · public/favicon.svg
assets/originales/          los .jfif de Gemini sin tocar (NO se publican)
docs/                       notas de imagenes y prompts
```

Las cinco páginas de ciudad son **una sola ruta**: `app/[city]/page.jsx` con
`generateStaticParams()`. Lo que cambia entre ellas —dirección, ZIP, barrios,
párrafo de "Local Knowledge", coordenadas— vive en el array `cities` de
`data/site.js`. Añadir una ciudad es añadir un objeto a ese array; ya no hacen
falta `loc.tpl` ni `gen.sh`.

Las URLs limpias se conservan (`/Weston`) por `trailingSlash: true` en
`next.config.mjs`. La única que cambió es la legal: de `/privacy-policy.html` a
**`/privacy-policy`**.

### Dónde tocar cada cosa

| Quieres cambiar… | Archivo |
|---|---|
| Teléfono, correo, horario, marca | `data/site.js`, objeto `site` |
| Una dirección, un barrio, el texto local de una ciudad | `data/site.js`, array `cities` |
| Las tarjetas de servicio | `data/site.js`, `homeServices` / `cityServices` |
| Las preguntas frecuentes (y su JSON-LD, que sale de ahí) | `data/site.js`, `faq` |
| Colores y tipografía | `css/styles.css`, bloque `:root` |
| Cabecera, pie, menú | `components/` |

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
