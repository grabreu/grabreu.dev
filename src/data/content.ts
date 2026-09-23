export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
  demoHref?: string;
  packageHref?: string;
  packageLabel?: string;
  sourceHref: string;
}

export interface SiteContent {
  lang: "en" | "pt";
  name: string;
  role: string;
  tagline: string;
  nav: { href: string; label: string }[];
  aboutHeading: string;
  about: string[];
  experienceHeading: string;
  experience: Experience[];
  resumeLabel: string;
  projectsHeading: string;
  projects: Project[];
  viewAllProjects: string;
  demoLabel: string;
  sourceLabel: string;
  footer: string;
  langSwitchLabel: string;
  langSwitchHref: string;
}

const experience: Experience[] = [
  {
    period: "2020 — 2026",
    role: "Software Developer",
    company: "Ambev Tech",
    description:
      "Built and maintained full-stack logistics systems used across Brazil, Latin America, Canada, and Africa. Worked on architecture decisions, code reviews, incident response, CI/CD, and production troubleshooting.",
    tags: [".NET", "React", "SQL Server", "Azure"],
  },
  {
    period: "2019 — 2020",
    role: "Application Support Intern",
    company: "Ambev Tech",
    description:
      "Supported reseller partners using the company's logistics systems via Movidesk, troubleshooting issues directly in the system and through SQL queries, and maintaining stored procedures and scripts used in BI reporting.",
    tags: ["PostgreSQL", "T-SQL", "Root Cause Analysis"],
  },
];

const experiencePt: Experience[] = [
  {
    period: "2020 — 2026",
    role: "Desenvolvedor de Software",
    company: "Ambev Tech",
    description:
      "Desenvolvi e mantive sistemas de logística usados em múltiplas regiões (Brasil, LAS, Canadá, África). Atuei em decisões de arquitetura, revisões de código, resposta a incidentes, CI/CD e troubleshooting em produção.",
    tags: [".NET", "React", "SQL Server", "Azure"],
  },
  {
    period: "2019 — 2020",
    role: "Application Support Intern",
    company: "Ambev Tech",
    description:
      "Dei suporte a parceiros revendedores usando os sistemas de logística da empresa via Movidesk, investigando problemas direto no sistema e por queries SQL, e mantendo stored procedures e scripts usados em relatórios de BI.",
    tags: ["PostgreSQL", "T-SQL", "Root Cause Analysis"],
  },
];

const projects: Project[] = [
  {
    name: "slug-pages",
    description:
      "Anonymous, no-login scratchpad. Visit any URL and start typing. Autosaves as you type, with optional Markdown support.",
    tags: ["TanStack Start", "Cloudflare Workers", "D1", "Markdown"],
    demoHref: "https://slug-pages.grabreu.dev",
    sourceHref: "https://github.com/grabreu/slug-pages",
  },
  {
    name: "aduana",
    description:
      "A lightweight, type-safe fetch client for JavaScript/TypeScript, with axios-style interceptors and RFC 7807 error parsing.",
    tags: ["TypeScript", "HTTP Client", "npm"],
    packageHref: "https://www.npmjs.com/package/@grabreu/aduana",
    packageLabel: "npm",
    sourceHref: "https://github.com/grabreu/aduana",
  },
  {
    name: "desfecho",
    description:
      "A functional Result<TValue> pattern for .NET, with an ASP.NET Core minimal API integration.",
    tags: [".NET", "ASP.NET Core", "NuGet", "Result Pattern"],
    packageHref: "https://www.nuget.org/packages/Desfecho",
    packageLabel: "NuGet",
    sourceHref: "https://github.com/grabreu/desfecho",
  },
  {
    name: "ramus",
    description:
      "A cross-platform tree-style CLI for exploring directory structures, published to PyPI.",
    tags: ["Python", "CLI", "PyPI"],
    packageHref: "https://pypi.org/project/ramus/",
    packageLabel: "PyPI",
    sourceHref: "https://github.com/grabreu/ramus",
  },
  {
    name: "cram-kit",
    description:
      "A Claude Code skill that turns study text, topics, or images into summaries, flashcards, interactive quizzes, and printable practice activities.",
    tags: ["Python", "Claude Code", "Education"],
    sourceHref: "https://github.com/grabreu/cram-kit",
  },
  {
    name: "spotify-cli",
    description:
      "Interactive CLI that exports a Spotify playlist you own or collaborate on, or your Liked Songs, as CSV or JSON.",
    tags: ["Python", "Spotify API", "CLI"],
    sourceHref: "https://github.com/grabreu/spotify-cli",
  },
];

const projectsPt: Project[] = [
  {
    name: "slug-pages",
    description:
      "Bloco de notas anônimo, sem login. Acesse qualquer URL e comece a digitar. Salva automaticamente enquanto você digita, com suporte opcional a Markdown.",
    tags: ["TanStack Start", "Cloudflare Workers", "D1", "Markdown"],
    demoHref: "https://slug-pages.grabreu.dev",
    sourceHref: "https://github.com/grabreu/slug-pages",
  },
  {
    name: "aduana",
    description:
      "Um cliente fetch leve e type-safe para JavaScript/TypeScript, com interceptors estilo axios e parsing de erros RFC 7807.",
    tags: ["TypeScript", "HTTP Client", "npm"],
    packageHref: "https://www.npmjs.com/package/@grabreu/aduana",
    packageLabel: "npm",
    sourceHref: "https://github.com/grabreu/aduana",
  },
  {
    name: "desfecho",
    description:
      "Um padrão funcional Result<TValue> para .NET, com integração em minimal API do ASP.NET Core.",
    tags: [".NET", "ASP.NET Core", "NuGet", "Result Pattern"],
    packageHref: "https://www.nuget.org/packages/Desfecho",
    packageLabel: "NuGet",
    sourceHref: "https://github.com/grabreu/desfecho",
  },
  {
    name: "ramus",
    description:
      "Uma CLI multiplataforma estilo tree para explorar estrutura de diretórios, publicada no PyPI.",
    tags: ["Python", "CLI", "PyPI"],
    packageHref: "https://pypi.org/project/ramus/",
    packageLabel: "PyPI",
    sourceHref: "https://github.com/grabreu/ramus",
  },
  {
    name: "cram-kit",
    description:
      "Uma skill do Claude Code que transforma texto, tópicos ou imagens de estudo em resumos, flashcards, questionários interativos e atividades práticas imprimíveis.",
    tags: ["Python", "Claude Code", "Education"],
    sourceHref: "https://github.com/grabreu/cram-kit",
  },
  {
    name: "spotify-cli",
    description:
      "CLI interativa que exporta uma playlist do Spotify que você possui ou colabora, ou suas Liked Songs, em CSV ou JSON.",
    tags: ["Python", "Spotify API", "CLI"],
    sourceHref: "https://github.com/grabreu/spotify-cli",
  },
];

export const content: Record<"en" | "pt", SiteContent> = {
  en: {
    lang: "en",
    name: "Gabriel Abreu",
    role: "Software Developer",
    tagline:
      "Full-Stack Software Developer building cloud-native apps with .NET & React. Open to remote opportunities.",
    nav: [
      { href: "#about", label: "About" },
      { href: "#experience", label: "Experience" },
      { href: "#projects", label: "Projects" },
    ],
    aboutHeading: "About",
    about: [
      "Software Developer with 6+ years of experience building full-stack applications with .NET and React, primarily in logistics and cloud environments.",
      "I like owning the whole path of a feature: the design discussion, the code, the tests, the pipeline, and what happens after it ships. I've spent a fair share of time in production incidents, reading logs and metrics until the root cause shows up, and that shapes how I write code in the first place.",
      "Lately I've been building independent projects exploring different stacks and architectures. You'll find them below.",
      "Main stack: .NET, Python, React, SQL Server, PostgreSQL, Azure, and Cloudflare.",
      "Currently open to remote Software Developer and Full-Stack opportunities, including international teams.",
    ],
    experienceHeading: "Experience",
    experience,
    resumeLabel: "View Full Résumé",
    projectsHeading: "Projects",
    projects,
    viewAllProjects: "View All Projects on GitHub",
    demoLabel: "Live Demo",
    sourceLabel: "Source",
    footer:
      "Designed and built by Gabriel Abreu. Coded with Astro and Tailwind CSS, deployed on Cloudflare Workers.",
    langSwitchLabel: "Português",
    langSwitchHref: "/pt/",
  },
  pt: {
    lang: "pt",
    name: "Gabriel Abreu",
    role: "Desenvolvedor de Software",
    tagline:
      "Desenvolvedor de Software Full-Stack construindo aplicações cloud-native com .NET & React. Aberto a oportunidades remotas.",
    nav: [
      { href: "#about", label: "Sobre" },
      { href: "#experience", label: "Experiência" },
      { href: "#projects", label: "Projetos" },
    ],
    aboutHeading: "Sobre",
    about: [
      "Desenvolvedor de Software com mais de 6 anos de experiência construindo aplicações full-stack com .NET e React, principalmente em ambientes de logística e cloud.",
      "Gosto de acompanhar o caminho inteiro de uma feature: a discussão de design, o código, os testes, o pipeline, e o que acontece depois que ela vai pro ar. Passei boa parte do tempo em incidentes de produção, lendo logs e métricas até achar a causa raiz, e isso molda como eu escrevo código desde o início.",
      "Ultimamente venho construindo projetos independentes explorando diferentes stacks e arquiteturas. Você encontra abaixo.",
      "Stack principal: .NET, Python, React, SQL Server, PostgreSQL, Azure e Cloudflare.",
      "Atualmente aberto a oportunidades remotas de Desenvolvedor de Software e Full-Stack, incluindo times internacionais.",
    ],
    experienceHeading: "Experiência",
    experience: experiencePt,
    resumeLabel: "Ver Currículo Completo",
    projectsHeading: "Projetos",
    projects: projectsPt,
    viewAllProjects: "Ver todos os projetos no GitHub",
    demoLabel: "Demo ao Vivo",
    sourceLabel: "Código",
    footer:
      "Desenhado e construído por Gabriel Abreu. Codificado com Astro e Tailwind CSS, hospedado no Cloudflare Workers.",
    langSwitchLabel: "English",
    langSwitchHref: "/",
  },
};
