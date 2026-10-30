// ── Shared profile data ──────────────────────────────────────────────────
// Single source of truth used by both the portfolio sections and the /cv page,
// so the CV always stays in sync with the site without duplicating content.

export const profile = {
  name:        'Manel Pelarda',
  roleMain:    'Full-Stack Developer',
  roleAlt:     'Game Developer',
  heroDescription: 'Desarrollador Full-Stack y Prompt Engineer autodidacta. Construyo aplicaciones web escalables y videojuegos con Unity. Calidad, pasión y mejora como principios.',
  email:       'pelardeveloper@gmail.com',
  linkedin:    'https://www.linkedin.com/in/manel-pelarda-011b263a4/',
  linkedinLabel: 'linkedin.com/in/manel-pelarda-011b263a4',
  github:      'https://github.com/pelarda97',
  githubLabel: 'github.com/pelarda97',
  bio: `Soy Manel, desarrollador Full-Stack y Prompt Engineer autodidacta. Con formación sanitaria, decidí cambiar de sector y apostar por un mundo que me apasiona. Como primer proyecto, he publicado Juega Y Calla Reviews —plataforma de reseñas de videojuegos altamente responsiva y escalable, con comentarios y estadísticas en tiempo real. Paralelamente desarrollo un RPG táctico con combate por turnos y arquitectura Singleton, mientras trabajo en otros proyectos más pequeños para aprender nuevas tecnologías y habilidades. Me muevo entre React, TypeScript, Supabase Unity y C# con la mirada puesta en el Game Dev, la IA y la ciberseguridad. Busco experiencias en equipo donde seguir creciendo. Mi filosofía: calidad a precio justo, escalabilidad y trato directo.`,
  stats: [
    { value: '+10',  label: 'meses\nfreelance'         },
    { value: '2',    label: 'proyectos en\nproducción'  },
    { value: '5',    label: 'cursos\ncertificados'      },
    { value: '2',    label: 'proyectos en\ndesarrollo'   },
  ],
  interests: [
    { label: 'Game Dev',       color: 'text-neon-purple border-neon-purple/30 bg-neon-purple/10' },
    { label: 'IA & LLMs',     color: 'text-neon-cyan border-neon-cyan/30 bg-neon-cyan/10'       },
    { label: 'Ciberseguridad', color: 'text-neon-green border-neon-green/30 bg-neon-green/10'   },
    { label: 'Web Dev',        color: 'text-amber-400 border-amber-400/30 bg-amber-400/10'      },
  ],
  availability: {
    title:    'Disponible para oportunidades',
    subtitle: 'Remoto · Presencial · Abierto a reubicación',
  },
};

// ── Tech stack ────────────────────────────────────────────────────────────
// To add a new skill: just add an entry to the relevant category array.
export const techStack = [
  {
    id:    'frontend',
    label: 'Frontend',
    color: 'text-neon-cyan',
    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>`,
    skills: [
      { name: 'HTML / CSS',   level: 4 },
      { name: 'JavaScript',   level: 4 },
      { name: 'TypeScript',   level: 4 },
      { name: 'React',        level: 4 },
      { name: 'Tailwind CSS', level: 4 },
      { name: 'React Router', level: 3 },
      { name: 'shadcn/ui',    level: 3 },
    ],
  },
  {
    id:    'backend',
    label: 'Backend',
    color: 'text-neon-green',
    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"/>
    </svg>`,
    skills: [
      { name: 'Node.js',      level: 3 },
      { name: 'Supabase',     level: 4 },
      { name: 'PostgreSQL',   level: 3 },
      { name: 'REST APIs',    level: 3 },
      { name: 'React Query',  level: 3 },
      { name: 'Vercel CI/CD', level: 3 },
    ],
  },
  {
    id:    'gamedev',
    label: 'Game Dev',
    color: 'text-neon-purple',
    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/>
    </svg>`,
    skills: [
      { name: 'Unity',              level: 4 },
      { name: 'C#',                 level: 4 },
      { name: 'ScriptableObjects',  level: 3 },
      { name: 'Unity UI Toolkit',   level: 3 },
      { name: 'Diseño de juego',    level: 4 },
    ],
  },
  {
    id:    'tools',
    label: 'Herramientas & IA',
    color: 'text-amber-400',
    icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>`,
    skills: [
      { name: 'Git / GitHub',    level: 4 },
      { name: 'VS Code',         level: 5 },
      { name: 'LLMs / IA',       level: 3 },
      { name: 'Prompt Engineering', level: 3 },
      { name: 'Ciberseguridad',  level: 2 },
      { name: 'Vite',            level: 3 },
    ],
  },
];
