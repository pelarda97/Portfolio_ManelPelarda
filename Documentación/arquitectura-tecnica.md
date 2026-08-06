# Arquitectura Técnica — Portfolio Híbrido Web & Game Dev

> Documento de referencia permanente. Actualizar si cambia el stack o la estructura.

---

## Stack Tecnológico

| Capa | Herramienta | Versión | Rol |
|---|---|---|---|
| **Framework** | [Astro](https://astro.build) | ^4.16 | Motor principal de renderizado estático (SSG) |
| **Estilos** | [Tailwind CSS](https://tailwindcss.com) | ^3.4 | Utility-first CSS con design tokens personalizados |
| **Lenguaje** | TypeScript | via Astro | Tipado en componentes y schemas |
| **Contenido** | Astro Content Collections | nativo | Gestión de proyectos y formación via `.md` |
| **Validación** | Zod | nativa en Astro | Schema validation de los archivos de contenido |
| **Animaciones** | CSS Keyframes + Intersection Observer | nativo | Scroll-reveal, glow, float — sin dependencias externas |
| **Interactivo** | Canvas 2D API (vanilla JS) | nativo | Particle background — efecto game dev |
| **Tipografías** | Google Fonts (Inter, Space Grotesk, JetBrains Mono) | CDN | Display, body y código respectivamente |
| **Build tool** | Vite | via Astro | Bundling y HMR en desarrollo |
| **Package manager** | npm | ^11 | Gestión de dependencias |

---

## Arquitectura del Proyecto

```
Portfolio Project/
│
├── Documentación/               ← Este directorio. Docs internas del proyecto.
│   ├── arquitectura-tecnica.md  ← (este archivo)
│   ├── plan-de-desarrollo.md    ← Fases y estado del proyecto
│   └── datos-personales.md      ← Fuente de verdad de todos los datos del dueño
│
├── public/                      ← Archivos sirvedos tal cual (sin procesar)
│   ├── favicon.svg
│   └── cv.pdf                   ← (pendiente) CV en PDF para descarga directa
│
├── src/
│   ├── components/
│   │   ├── layout/              ← Componentes estructurales de toda la página
│   │   │   ├── Navbar.astro     ← Navegación sticky responsive (mobile+desktop)
│   │   │   └── Footer.astro     ← Footer con links sociales y email
│   │   │
│   │   ├── sections/            ← Una sección = un bloque visual de la SPA
│   │   │   ├── Hero.astro       ← Nombre, rol, propuesta de valor, CTAs
│   │   │   ├── Projects.astro   ← Grid de proyectos con filtro por categoría
│   │   │   ├── Timeline.astro   ← Línea de tiempo de formación/experiencia
│   │   │   └── TechStack.astro  ← Stack técnico con nivel de habilidad por dots
│   │   │
│   │   └── ui/                  ← Componentes reutilizables sin lógica de negocio
│   │       ├── ProjectCard.astro       ← Card individual de proyecto
│   │       └── ParticleBackground.astro ← Canvas particle system decorativo
│   │
│   ├── content/                 ← 🧱 SISTEMA LEGO — fuente de verdad del contenido
│   │   ├── config.ts            ← Schemas Zod que validan cada colección
│   │   ├── projects/            ← Un archivo .md = un proyecto en el portfolio
│   │   │   ├── ecommerce-platform.md
│   │   │   ├── space-shooter-game.md
│   │   │   ├── puzzle-platformer.md
│   │   │   └── saas-dashboard.md
│   │   └── education/           ← Un archivo .md = un ítem en la línea de tiempo
│   │       ├── full-stack-bootcamp.md
│   │       ├── unity-game-dev.md
│   │       └── cs50.md
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro     ← HTML base: charset, viewport, SEO, OG, fuentes
│   │
│   ├── pages/
│   │   └── index.astro          ← Única página (SPA feel con scroll suave)
│   │
│   └── styles/
│       └── global.css           ← Tailwind layers + clases custom + @media print
│
├── astro.config.mjs             ← Config de Astro: integrations, site URL
├── tailwind.config.mjs          ← Design tokens: colores neon, fuentes, animaciones
└── tsconfig.json                ← TypeScript: strict mode + path aliases
```

---

## Flujo de Datos (Content Collections)

```
Archivo .md en src/content/projects/
         │
         ▼
  Frontmatter validado por Zod (config.ts)
         │
         ▼
  getCollection('projects')  ← API de Astro en tiempo de build
         │
         ▼
  Projects.astro  →  ProjectCard.astro  →  HTML estático en dist/
```

El mismo flujo aplica a `education/` → `Timeline.astro`.

**Consecuencia**: añadir o editar contenido nunca requiere tocar código.
Solo se editan (o crean) archivos `.md`.

---

## Sistema de Diseño — Design Tokens

Definidos en `tailwind.config.mjs` y consumibles en cualquier componente como clases de Tailwind.

### Colores

| Token | Hex | Uso |
|---|---|---|
| `neon-cyan` | `#00f5ff` | Acento principal, Web Dev |
| `neon-purple` | `#bf5af2` | Acento secundario, Game Dev |
| `neon-green` | `#32d74b` | Estado "activo / disponible" |
| `neon-blue` | `#0a84ff` | Acento terciario, Full Stack |
| `dark-900` | `#050810` | Fondo base (más oscuro) |
| `dark-800` | `#0a0f1e` | Fondo de cards |
| `dark-700..400` | — | Escalado de superficies y bordes |

### Tipografías

| Familia | Variable Tailwind | Uso |
|---|---|---|
| Space Grotesk | `font-display` | Títulos y headings |
| Inter | `font-sans` | Cuerpo de texto |
| JetBrains Mono | `font-mono` | Código, badges, etiquetas técnicas |

### Clases de componente reutilizables (en `global.css`)

| Clase | Descripción |
|---|---|
| `.btn-primary` | Botón CTA con fondo cyan y sombra neon |
| `.btn-ghost` | Botón outline con borde cyan |
| `.btn-icon` | Botón pequeño para GitHub / Demo |
| `.glass-card` | Card con fondo semitransparente y blur |
| `.skill-badge` | Etiqueta de tecnología (monospace) |
| `.section-title` | H2 uniforme entre secciones |
| `.reveal` | Clase para scroll-reveal (se activa al entrar en viewport) |
| `.no-print` | Elementos que desaparecen al imprimir/exportar PDF |

---

## Exportación a PDF / CV Automático

El archivo `src/styles/global.css` contiene una hoja de estilos `@media print` completa.

**Cómo funciona:**
1. El usuario pulsa `Ctrl + P` o "Imprimir" en el navegador.
2. El CSS de print oculta: navbar, canvas de partículas, botones de filtro, decoración.
3. Reformat completo: fondo blanco, texto negro, tipografía legible para escáneres ATS.
4. El Hero se convierte en cabecera de CV con datos de contacto inline.
5. Los proyectos pasan a grid de 2 columnas compacto.
6. La formación se muestra como lista limpia sin decoración gráfica.
7. La página se configura en formato A4 con márgenes de 15/12mm.

---

## Scripts Disponibles

```bash
npm run dev      # Servidor local en http://localhost:4321 con HMR
npm run build    # Build de producción en /dist — listo para deploy
npm run preview  # Preview del build de producción en local
```

---

## Decisiones de Arquitectura (ADR simplificado)

| Decisión | Alternativa descartada | Motivo |
|---|---|---|
| Astro SSG | Next.js / Vite SPA | Mejor Lighthouse score; portfolio no necesita SSR |
| Tailwind CSS | CSS Modules / Styled Components | Velocidad de prototipado; design tokens centralizados |
| CSS nativo para animaciones | Framer Motion | Cero dependencias JS; mejor performance; suficiente para este caso |
| Canvas 2D vanilla | Three.js / WebGL | Mismo efecto visual; bundle ~0 KB extra |
| Content Collections `.md` | CMS headless (Contentful, Sanity) | Sin coste; sin API keys; sin red en build; edición directa en VS Code |
| SPA de una página | Multi-página | Experiencia de navegación más fluida; mejor para portfolios |
