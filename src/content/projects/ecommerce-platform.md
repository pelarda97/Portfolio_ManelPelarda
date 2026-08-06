---
title: "Juega Y Calla"
description: "Plataforma web de reseñas profundas de videojuegos con comentarios en tiempo real, sistema de likes y analytics integrados."
longDescription: "Aplicación SPA construida con React 18 y TypeScript, con backend completamente gestionado en Supabase (PostgreSQL + RLS + Realtime). Incluye sistema de ratings decimales con iconos animados, filtros por género, secciones colapsables de spoilers, comentarios en tiempo real vía WebSockets, sistema de likes/dislikes, tracking de page views y CI/CD automatizado con Vercel."
category: "web"
stack: ["React 18", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Supabase Realtime", "React Query", "React Router", "shadcn/ui", "Vite", "Vercel"]
github: "https://github.com/pelarda97/Juega-Y-Calla-Reviews"
demo: "https://www.juegaycalla.com"
featured: true
status: "completed"
date: 2025-09-25
order: 1
---

Proyecto principal con usuarios reales y métricas en producción. Diseñé y desarrollé en solitario toda la arquitectura: desde el modelo de datos en PostgreSQL con Row Level Security hasta la UI en React con componentes Radix UI. El sistema de reseñas admite HTML enriquecido, spoilers colapsables y secciones temáticas. CI/CD automatizado: cada push a `main` genera un deploy en Vercel en menos de 60 segundos.
