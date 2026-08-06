# Plan de Desarrollo — Portfolio Híbrido Web & Game Dev

> Estado actual: **Fases 0, 1, 2 y 3 completadas — datos reales cargados, proyectos y formación en producción.**
> Última actualización: Julio 2026

---

## Visión del producto

Un portfolio de una sola página (SPA feel) que sirve a la vez como:
- **Presentación profesional** para empresas de software corporativo (limpio, formal, ATS-friendly).
- **Showcase creativo** para estudios de videojuegos (interactivo, con personalidad técnica).
- **CV auto-generado** al imprimir/exportar PDF — sin mantener dos documentos separados.

---

## Estado por fase

| # | Fase | Estado | Descripción |
|---|---|---|---|
| 0 | Base técnica | ✅ Completada | Astro + Tailwind + Content Collections configurados y compilando |
| 1 | Datos personales & About Me | ✅ Completada | Hero, AboutMe, Navbar y Footer con datos reales de Manel |
| 2 | Zona de Proyectos | ✅ Completada (escalable) | 4 proyectos reales cargados vía Content Collections + CTA configurable |
| 3 | Formación & Experiencia | ✅ Completada | 7 entradas de formación reales (4 completadas + 3 en curso) |
| 4 | Visual & Pulido final | 🔲 Pendiente | En revisión visual actualmente |
| 5 | CV automático & Deploy | 🔲 Pendiente | — |

---

## Fase 0 — Base Técnica ✅

**Objetivo:** Proyecto funcional, compilando, con estructura escalable lista.

**Lo que se hizo:**
- [x] `astro.config.mjs` + `tailwind.config.mjs` + `tsconfig.json`
- [x] Design tokens: colores neon, tipografías, animaciones, sombras
- [x] `BaseLayout.astro` con SEO, Open Graph, carga de fuentes
- [x] `global.css` con clases de componente + `@media print` para PDF
- [x] Content Collections con schemas Zod para `projects` y `education`
- [x] Datos de ejemplo (4 proyectos + 3 formaciones)
- [x] Todos los componentes estructurados: Navbar, Footer, Hero, Projects, Timeline, TechStack, ProjectCard, ParticleBackground
- [x] Build de producción: ✅ 0 errores

---

## Fase 1 — Datos Personales & About Me ✅

**Objetivo:** El portfolio habla de una persona real. Primer contacto con el visitante.

**Completado:**
- [x] `Documentación/datos-personales.md` rellenado con los datos reales de Manel Pelarda
- [x] `Hero.astro` actualizado con nombre, roles (Full-Stack Developer / Game Developer) y propuesta de valor real
- [x] Sección **AboutMe.astro** creada con:
  - Párrafo de presentación real (Valencia, autodidacta, Juega Y Calla, El Círculo, RPG Táctico)
  - Stats destacados (meses freelance, proyectos, cursos, líneas de código)
  - Datos de contacto visibles (email, LinkedIn, GitHub)
  - Disponibilidad para proyectos
- [x] `Footer.astro` y `Navbar.astro` actualizados con links sociales reales (GitHub `pelarda97`, LinkedIn real)
- [x] `index.astro` actualizado para renderizar `<AboutMe />` entre Hero y Projects

**Pendiente opcional:**
- [ ] Foto de perfil (`public/profile.jpg`) — no proporcionada aún, no bloqueante

**Criterio de éxito:** ✅ Cumplido — nombre, rol y contacto reales visibles desde el primer scroll.

---

## Fase 2 — Zona de Proyectos ✅ (arquitectura escalable)

**Objetivo:** Mostrar trabajo real con contexto suficiente y CTAs claros.

**Completado:**
- [x] 4 proyectos reales cargados en `src/content/projects/`:
  - **Juega Y Calla** (web, featured, completado) — plataforma de reseñas en producción, demo en vivo
  - **RPG Táctico** (games, featured, en desarrollo) — repo privado, disponible bajo petición
  - **El Círculo** (games, featured, **completado y publicado en Google Play**) — repo público + link a la Play Store
  - Placeholder "Próximo proyecto" (archived, oculto en la práctica)
- [x] Filtro Web / Games / Full Stack funcionando sobre datos reales
- [x] **Mejora de escalabilidad (Jul 2026):** la sección ya funciona 100% vía Content Collections — añadir un proyecto nuevo es crear un `.md` en `src/content/projects/`, sin tocar código ni listas manuales
- [x] **Nuevo campo `demoLabel`** en el schema de proyectos: permite personalizar el texto del botón CTA ("Google Play", "Demo", "itch.io", "Ver web"...) en lugar de un genérico "Demo" fijo — pensado para poder añadir Steam, App Store, itch.io, etc. en el futuro sin cambios de código

**Pendiente:**
- [ ] Imágenes de preview de los proyectos (`public/projects/*.png` + campo `image` en el `.md`) — no añadidas aún

**Criterio de éxito:** ✅ Cumplido — proyectos navegables, enlaces reales funcionando, filtro operativo, arquitectura lista para escalar sin fricción.

---

## Fase 3 — Formación & Experiencia ✅

**Objetivo:** Mostrar trayectoria de aprendizaje y/o experiencia profesional.

**Completado:**
- [x] 7 entradas reales en `src/content/education/`:
  - Completadas: Diseño Web Responsivo (freeCodeCamp), Ciberseguridad Avanzada en Entornos OT (Academia Virensis), Elements of AI (Universidad de Helsinki), Iniciación al Desarrollo con IA (BIG School)
  - **Programa de Aceleración y Publishing de Videojuegos (EOI) — marcado como completado (Jul 2026)**. Certificado aún no emitido: el campo `credential` queda comentado en el frontmatter (`# credential: ...`) listo para descomentar y rellenar en cuanto la EOI lo entregue
  - En curso: Automatización con n8n y Agentes de IA (Udemy), Máster en Programación de Videojuegos con Unity 6 y C# (Udemy)
- [x] Orden cronológico revisado (campo `order`)

**Pendiente / decisión aplazada:**
- [ ] Sección dedicada de **Experiencia freelance** (~10+ meses, Jul 2025–presente) — actualmente solo aparece mencionada en las stats de AboutMe, no tiene timeline propia. Posible colección `experience` nueva o ampliación de Timeline.astro
- [ ] Badges/logos de certificaciones — no añadidos, se mantiene solo texto

**Criterio de éxito:** ✅ Cumplido — línea de tiempo verídica y ordenada. Pendiente decidir si la experiencia freelance merece su propia sección.

---

## Fase 4 — Visual & Pulido Final 🔲 (en revisión)

**Objetivo:** El portfolio tiene personalidad visual propia y es memorable.

**Estado:** Servidor de desarrollo levantado (`npm run dev`, http://localhost:4322/) para revisión visual conjunta. Pendiente de feedback del usuario tras inspección.

**Entregables:**
- [ ] Elegir paleta de acentos definitiva (¿cyan + purple? ¿otro color?)
- [ ] Revisar tipografías y tamaños en mobile, tablet y desktop
- [ ] Ajustar el `ParticleBackground`: densidad, velocidad, colores de partículas
- [ ] Añadir imagen OG (`public/og-image.png`) para compartir en redes sociales
- [ ] Revisar contraste de todo el texto (WCAG AA: ratio mínimo 4.5:1)
- [ ] Animaciones: ajustar velocidad y timing de `reveal` si se ven muy lentas/rápidas
- [ ] Revisar en mobile (Chrome DevTools: iPhone SE, iPhone 14, Pixel 7)
- [ ] Revisar en Safari (diferencias de rendering)
- [ ] Meta description final en `BaseLayout.astro`

**Opciones a decidir (debate en esta fase):**
- ¿Foto de perfil en el Hero o en el About Me?
- ¿Cursor personalizado? (añade carácter Game Dev, puede distraer en entornos corporativos)
- ¿Modo claro opcional? (aumenta accesibilidad pero complica el diseño)

**Criterio de éxito:**
> El portfolio se ve profesional en cualquier dispositivo y tiene coherencia visual de principio a fin.

---

## Fase 5 — CV Automático & Deploy 🔲

**Objetivo:** El portfolio está publicado en internet y el PDF de CV funciona.

**Entregables:**
- [ ] Verificar `@media print` con los datos reales ya cargados (Ctrl+P → "Guardar como PDF")
- [ ] Ajustar el CSS de print si algo no se ve bien
- [ ] Añadir el archivo `public/cv.pdf` (versión estática binaria, opcional)
- [ ] Elegir plataforma de deploy:
  - **Recomendado:** [Vercel](https://vercel.com) (gratuito, deploy automático desde GitHub, `npm run build` detectado automáticamente)
  - Alternativas: Netlify, GitHub Pages, Cloudflare Pages
- [ ] Configurar dominio personalizado (si se tiene uno)
- [ ] Actualizar `site` en `astro.config.mjs` con la URL final
- [ ] Probar Lighthouse en producción (objetivo: 95+ en Performance, Accessibility, SEO)

**Criterio de éxito:**
> `https://tudominio.dev` carga en < 2s, Lighthouse > 95, PDF de CV exportable en 2 clics.

---

## Tareas añadidas (Julio 2026)

```
[x] Marcar El Círculo como completado + enlace real de Google Play + demoLabel "Google Play"
[x] Marcar curso EOI (Programa de Aceleración y Publishing de Videojuegos) como completado
[x] Preparar campo credential comentado para el certificado EOI (pendiente de emisión)
[x] Añadir campo `demoLabel` al schema de proyectos para escalabilidad de CTAs
[ ] Añadir el enlace/código del certificado EOI en cuanto se emita
[x] Revisión visual conjunta de la Fase 4 (adorno flotante eliminado, velocidad de partículas
    reducida, scroll-spy del Navbar corregido para secciones altas y footer, título
    "Proyectos Personales", stats de AboutMe cambiados a "proyectos en producción/desarrollo")
[ ] Decidir si la experiencia freelance necesita sección/timeline propia
```

## Tareas añadidas (Agosto 2026)

```
[x] Corregido bug: la barra de contacto solo-impresión (Hero.astro) mostraba placeholders
    (yourportfolio.dev, yourusername) en vez de LinkedIn/GitHub reales
[x] npm audit fix aplicado (8 → 4 vulnerabilidades, sin breaking changes)
[ ] PENDIENTE — Actualización mayor de Astro (v4.16 → v7.1.6) para resolver las 4
    vulnerabilidades restantes (esbuild, vite, sharp/libvips). Es un breaking change:
    hacerlo al FINAL de la Fase 5, con todo probado y estable, revisando que ningún
    componente se rompa tras la migración
[ ] Pulir el CSS de @media print de la sección AboutMe (actualmente no tiene reglas
    específicas — se imprime tal cual, y sus botones de contacto se ocultan sin querer
    por compartir la clase .btn-ghost con el Navbar). Objetivo: condensarla para que el
    PDF exportado sea un "CV flash" real de 1-2 páginas
[ ] Generar `public/og-image.png` (imagen para compartir en redes) — pendiente
[ ] Actualizar `site` en `astro.config.mjs` con la URL real una vez desplegado
[ ] Crear `public/cv.pdf` o decidir si el CV final se genera solo vía @media print
```

---

## Orden de acción recomendado por próxima sesión

```
1. Terminar la revisión visual de la Fase 4 (paleta, mobile, Safari, OG image)
2. Decidir sobre la sección de experiencia freelance
3. Preparar Fase 5: verificar impresión del CV y elegir plataforma de deploy
4. Al cerrar la Fase 5: actualización mayor de Astro (breaking change, hacerla al final)
```

---

## Notas de arquitectura para el futuro

- **Internacionalización (i18n):** Astro tiene soporte nativo. Si quieres versión EN/ES, se puede añadir sin reescribir.
- **Blog técnico:** Añadir colección `blog/` y página `src/pages/blog/[slug].astro` es trivial con este setup.
- **Dark/Light mode:** Añadir `class="dark"` en el `<html>` y variantes `dark:` de Tailwind. No rompe nada actual.
- **Animaciones más elaboradas:** Si se quiere Framer Motion o GSAP en el futuro, se instala como dependencia puntual sin afectar al resto.
- **Escalabilidad de proyectos:** confirmado que la sección de Proyectos ya es 100% data-driven vía Content Collections + el nuevo campo `demoLabel`. Añadir un proyecto nuevo (o un nuevo tipo de enlace como Steam o App Store) no requiere tocar componentes.
