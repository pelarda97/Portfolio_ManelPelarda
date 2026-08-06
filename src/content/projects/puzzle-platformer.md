---
title: "El Círculo"
description: "Juego de cartas para beber desarrollado en Unity para móvil (Android). Baraja española de 48 cartas dispuestas en elipse, dinámica de turnos y sistema de integridad del círculo."
longDescription: "El Círculo es un juego móvil offline para 2 a 12 jugadores que comparten el mismo dispositivo físicamente — pensado para fiestas y eventos. Los jugadores arrastran cartas del círculo elíptico y deben cumplir la regla asociada. La mecánica diferenciadora es el sistema de integridad del círculo: si al retirar una carta queda un hueco visible entre las restantes, el jugador recibe una penalización y el círculo se reorganiza automáticamente en una elipse más pequeña con orden aleatorio. El proyecto incluye arquitectura en capas con GameManager Singleton, detección de rotura por distancias físicas en world space (no por índices de array), barajado Fisher-Yates y una herramienta de editor personalizada que genera los 48 ScriptableObjects automáticamente."
category: "games"
stack: ["Unity 2022 LTS", "C#", "ScriptableObjects", "Unity UI Toolkit", "TextMeshPro", "Unity Physics 2D", "Android Build"]
featured: true
status: "completed"
date: 2026-04-16
order: 3
github: "https://github.com/pelarda97/El_Circulo"
demo: "https://play.google.com/store/apps/details?id=com.ManyObrasGames.ElCirculo&pcampaignid=web_share"
demoLabel: "Google Play"
---

Juego de cartas móvil para grupos de 2 a 12 personas que comparten un mismo dispositivo. Construido en Unity con arquitectura en capas (UI / Game Logic / Data), 48 cartas de la baraja española en disposición elíptica y un sistema propio de detección de rotura del círculo basado en distancias físicas en world space — más robusto y fiel a lo que el jugador ve en pantalla que cualquier solución basada en índices de array.

Publicado en Google Play y disponible para descargar en Android.
