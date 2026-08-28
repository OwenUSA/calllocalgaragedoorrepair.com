# Prompts de Gemini — Call Local Garage Door Repair

Identidad gráfica de la que salen todos los prompts:

| Rol | Color |
| --- | --- |
| Base espresso (fondo oscuro, pie, hero) | `#1F1A15` |
| Cobre (color de acción: botones, acentos) | `#C2540B` |
| Cobre claro (texto/acento sobre oscuro) | `#F2A56B` |
| Bronce (iconos, degradados) | `#C08A2E` |
| Crema (fondos suaves) | `#FAF5ED` |

Rasgos del sitio: plano y geométrico, esquinas poco redondeadas (10 px), trazos
gruesos, tipografía sans muy bold, nada de azules ni grises fríos.

---

## 1. Logo

### 1A. Lockup horizontal (el que va en la cabecera y el pie)

```
A flat vector logo for a garage door repair company called "Call Local Garage
Door Repair". Horizontal lockup: a square icon on the left, the wordmark on the
right.

Icon: a simplified front view of a sectional garage door built from three thick
horizontal bars, drawn with a bold geometric outline and a pitched roof line
above it. The three door bars get progressively shorter toward the top so they
also read as phone signal / call waves radiating from the door.

Wordmark: "CALL LOCAL" on the first line in a heavy geometric sans-serif,
uppercase, tight letter spacing, in near-black espresso #1F1A15. Below it, in a
much smaller size, "GARAGE DOOR REPAIR" in uppercase with wide letter spacing,
in copper #C2540B.

Color palette, strictly: copper #C2540B for the icon outline and the roof,
light copper #F2A56B for the inner door bars, espresso #1F1A15 for the main
word, cream #FAF5ED only if a fill is needed. No other colors.

Style: flat 2D vector, thick uniform strokes, sharp geometry, slightly rounded
corners, no gradients, no shadows, no 3D, no bevel, no texture, no photographic
elements. Clean, modern, industrial-trade look. Must stay legible at 40 px tall.

Background: one single flat pure white #FFFFFF field filling the whole canvas,
with generous even margin around the logo. Do NOT draw a transparency
checkerboard, a gradient, a frame, a border, a card or a drop shadow.

Wide canvas, roughly 3:1.
```

### 1B. Solo el icono (favicon, redes, avatar)

```
Same logo icon only, without any text: a simplified front view of a sectional
garage door made of three thick horizontal bars of decreasing width, with a
pitched roof line above, so the bars also read as call / signal waves.

Flat 2D vector, thick uniform strokes, copper #C2540B outline and roof, light
copper #F2A56B inner bars, no gradients, no shadows, no 3D, no text, no
lettering of any kind.

Centered on a single flat pure white #FFFFFF square canvas with wide even
margin. No checkerboard, no frame, no border, no shadow. Square 1:1.
```

### 1C. Versión clara para el pie oscuro (por si hace falta)

```
Same horizontal logo lockup for "Call Local Garage Door Repair", but recolored
for use on a dark background: the icon in light copper #F2A56B, the word "CALL
LOCAL" in cream #FAF5ED, and "GARAGE DOOR REPAIR" underneath in light copper
#F2A56B.

Flat 2D vector, thick uniform strokes, no gradients, no shadows, no 3D.
Centered on one single flat espresso #1F1A15 field filling the whole canvas,
with generous even margin. No checkerboard, no frame, no glow. Wide canvas,
roughly 3:1.
```

**Al recibirlos:** Gemini devuelve JPEG (`.jfif`), así que el "fondo
transparente" no existe: hay que desfondarlo. Por eso los prompts piden **blanco
puro sólido** y no el damero — el damero pintado obliga a quitar el fondo por
croma y se come los trazos oscuros poco saturados. Con blanco sólido se quita
con relleno por inundación desde el borde, que respeta el interior del dibujo.

---

## 2. Fotos del sitio

Las cuatro van en `img/` con estos nombres exactos y aparecen solas, sin tocar
el HTML. Ver `img/LEEME.txt`.

### 2A. `hero-garage.jpg` — fondo del hero (home + las 5 páginas de ciudad)

```
Photorealistic wide photograph of a single-family South Florida home at dusk,
seen from the driveway. The two-car garage door is open and lit from inside with
warm light. A white unbranded service van is parked on the right side of the
driveway with its rear doors open, showing organized shelves of tools and coiled
garage door springs. A technician in plain dark work clothes stands beside the
door, examining the top of it.

Composition: the house and the van occupy the right two thirds of the frame; the
left third is open sky and empty driveway, uncluttered, so text can be placed
over it.

Lighting and grade: warm golden hour into blue-free dusk, amber and copper tones,
deep warm shadows, no cold blue or teal color cast. Palm trees and tropical
planting in the background. Shot on a full frame camera, 24 mm, sharp, natural
realistic look, no HDR halos.

No text, no lettering, no signage, no logos, no brand names, no license plates,
no watermark, no people looking at the camera.

Wide 16:9 landscape, 1920x1080.
```

### 2B. `about-garage.jpg` — bloque "The Crew That Picks Up the Phone" (home)

```
Photorealistic photograph of two garage door technicians in plain dark work
uniforms working together at the open garage of a South Florida house in the
morning. One is on a step ladder adjusting the torsion spring above the door,
the other is holding a tablet with the work order. An unbranded white service
van sits behind them in the driveway.

Lighting and grade: warm morning sun, amber and copper tones, warm shadows, no
cold blue or teal cast. Natural documentary style, sharp, shallow depth of
field on the background.

No text, no lettering, no signage, no logos, no brand names, no license plates,
no watermark.

4:3 landscape, 1200x900.
```

### 2C. `why-garage.jpg` — "Why {ciudad} calls us first" (5 páginas de ciudad)

```
Photorealistic photograph of a garage door technician in plain dark work clothes
kneeling beside the bottom of a residential garage door, testing the roller and
the track with a wrench. His open tool bag and a coil of new cable sit on the
driveway next to him. The garage door is half open behind him.

Lighting and grade: warm daylight, amber and copper tones, warm concrete, no
cold blue or teal cast. Documentary style, sharp on the hands and the hardware.

No text, no lettering, no signage, no logos, no brand names, no watermark.

4:3 landscape, 1200x900.
```

### 2D. `process-garage.jpg` — "How a {ciudad} visit works" (5 páginas de ciudad)

```
Photorealistic close-up photograph of the torsion spring assembly above a
residential garage door: the steel torsion spring, the winding cone, the shaft
and the cable drum, with two gloved hands holding steel winding bars in the
cone, mid job.

Lighting and grade: warm workshop-style light with amber and copper highlights
on the steel, dark warm background, no cold blue or teal cast. Macro detail,
sharp on the spring and the bars, shallow depth of field.

No text, no lettering, no signage, no logos, no brand names, no watermark.

4:3 landscape, 1200x900.
```

### 2E. Opcional — imagen para compartir en redes (Open Graph)

Ahora mismo el sitio no declara `og:image`. Si la quieres, con esta foto se
añade en las 7 páginas:

```
Photorealistic wide photograph of a modern South Florida house at golden hour
with a clean two-car garage door closed, palm shadows on the copper-toned
driveway, warm amber grade, no cold blue cast, no text, no lettering, no logos,
no watermark. Composition centered and simple, plenty of empty space around the
house. 1200x630, landscape.
```

---

## 3. Bloque de negativos (por si Gemini se despista)

Si alguna imagen sale con letras, marcas o tono azulado, repite el prompt
añadiendo al final:

```
Negative: text, letters, words, numbers, signage, watermarks, logos, brand
names, license plates, blue or teal color cast, cool gray tones, HDR halos,
distorted hands, extra fingers, cartoon, illustration, 3D render.
```

---

## 4. Después de generar

1. Llegan como `.jfif` de 2–4 MB: convertir a `.jpg` y recomprimir (calidad ~82,
   al doble del tamaño mostrado) hasta dejarlas por debajo de 300 KB.
2. Comprobar las proporciones: Gemini suele cruzar la panorámica con la
   cuadrada. El hero es 16:9; las otras tres, 4:3.
3. Dejarlas en `img/` con el nombre exacto. No hay que tocar el HTML.
4. El logo sí necesita que yo sustituya el `<svg>` de `.logo__mark` en las 7
   páginas (index, privacy-policy y las 5 de ciudad).
