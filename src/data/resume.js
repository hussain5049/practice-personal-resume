// ============================================================================
//  RESUME CONTENT — edit this file only; every section of the site reads from it.
// ============================================================================

export const profile = {
  name: "Nazmul Hussain",
  firstName: "Nazmul",
  roles: [
    "Full-Stack Developer",
    "AI Automation Engineer",
    "Data Analyst",
    "Founder of Omebly",
  ],
  tagline:
    "I build products end to end: fast web and desktop apps, AI-powered automations that remove busywork, and data pipelines and dashboards that tell teams what to do next.",
  location: "Dubai, UAE · India",
  availability: "Open to full-time, contract and remote roles",
  email: "info@makemybusinesslive.com", // TODO: switch to your Omebly / preferred email
  phone: "+91 84150 44306",
  phoneHref: "tel:+918415044306",
  website: "https://omebly.com/",
  websiteLabel: "omebly.com",
  github: "https://github.com/hussain5049",
  githubLabel: "github.com/hussain5049",
  linkedin: "https://www.linkedin.com/in/nazmul-hussain-16a55b243/",
  linkedinLabel: "linkedin.com/in/nazmul-hussain-16a55b243",
  photo: `${import.meta.env.BASE_URL}profile.png`,
  resumePdf: `${import.meta.env.BASE_URL}Nazmul_Hussain_Resume.pdf`,
};

export const stats = [
  { value: 10, suffix: "+", label: "years of professional experience" },
  { value: 2, suffix: "", label: "countries worked in: India & UAE" },
  { value: 1, suffix: "", label: "shipped product: Omebly Downloader" },
  { value: 3, suffix: "", label: "disciplines: code, data, growth" },
];

export const about = {
  intro:
    "I am a developer and founder based between Dubai and India. I started my career in pharmaceutical sales, moved into performance marketing and training in the UAE, and today I design, build and ship software under my own brand, Omebly.",
  paragraphs: [
    "That path matters: I write code with a commercial brain. I know what a funnel, a budget and a deadline look like from the inside, so the apps, automations and dashboards I build are aimed at business outcomes rather than tickets.",
    "My current focus is Omebly, where I build and maintain a signed, auto-updating Windows app and browser extension used by real people, with CI, tests and a public open-source codebase.",
  ],
  highlights: [
    {
      title: "Web & App Development",
      text: "React front-ends, Node.js / Express APIs, PHP + SQL back-ends, and native desktop apps with Tauri and Rust.",
    },
    {
      title: "AI Automation",
      text: "LLM APIs, webhooks and workflow tools wired into lead-capture, reporting and content pipelines that run without humans in the loop.",
    },
    {
      title: "Data Analysis",
      text: "Campaign, sales and product data turned into clean datasets, SQL and dashboards that answer the question behind the question.",
    },
    {
      title: "Product Ownership",
      text: "From idea to signed installer: architecture, UX, release engineering, privacy policy, support and iteration.",
    },
  ],
};

// Skill levels are 0–100 and drive the animated bars.
export const skillGroups = [
  {
    id: "web",
    label: "Web & App",
    icon: "Code2",
    blurb: "Front-end to desktop: I ship interfaces people enjoy and back-ends that stay up.",
    skills: [
      { name: "JavaScript / TypeScript", level: 92 },
      { name: "React & Vite", level: 88 },
      { name: "HTML5 & CSS3 / Tailwind", level: 95 },
      { name: "Node.js & Express", level: 84 },
      { name: "Tauri & Rust (desktop apps)", level: 72 },
      { name: "PHP & MySQL / SQL", level: 80 },
      { name: "REST APIs & Webhooks", level: 88 },
      { name: "Browser Extensions (MV3)", level: 86 },
      { name: "Git, GitHub Actions, CI/CD", level: 85 },
    ],
    tags: ["React", "Vite", "Node.js", "Express", "Tauri", "Rust", "PHP", "SQL", "Playwright", "EJS", "Web3 basics"],
  },
  {
    id: "ai",
    label: "AI & Automation",
    icon: "Bot",
    blurb: "I connect models, tools and data so repetitive work disappears and teams move faster.",
    skills: [
      { name: "LLM APIs (OpenAI, Claude)", level: 85 },
      { name: "Prompt & Workflow Design", level: 88 },
      { name: "n8n / Make / Zapier", level: 82 },
      { name: "AI Chatbots & Assistants", level: 80 },
      { name: "API Integration & Webhooks", level: 90 },
      { name: "Python scripting", level: 70 },
      { name: "CRM & Email Automation", level: 86 },
      { name: "Scraping & Data Extraction", level: 84 },
    ],
    tags: ["OpenAI API", "Claude API", "n8n", "Make", "Zapier", "LangChain basics", "Python", "Webhooks", "HubSpot", "Mailchimp"],
  },
  {
    id: "data",
    label: "Data & Analytics",
    icon: "BarChart3",
    blurb: "Numbers only matter when they change a decision. I build the reporting that does.",
    skills: [
      { name: "SQL", level: 85 },
      { name: "Excel / Google Sheets (advanced)", level: 92 },
      { name: "Google Analytics 4 & Tag Manager", level: 90 },
      { name: "Looker Studio / Power BI", level: 82 },
      { name: "Python (pandas)", level: 68 },
      { name: "A/B Testing & Experimentation", level: 80 },
      { name: "KPI, Funnel & Cohort Analysis", level: 88 },
    ],
    tags: ["SQL", "GA4", "GTM", "Looker Studio", "Power BI", "pandas", "Excel", "Google Sheets", "Dashboards"],
  },
  {
    id: "growth",
    label: "Growth & Design",
    icon: "Sparkles",
    blurb: "A decade in marketing and design means I can own the whole product surface, not just the code.",
    skills: [
      { name: "SEO (technical, on & off-page)", level: 92 },
      { name: "Google / Meta / LinkedIn / TikTok Ads", level: 90 },
      { name: "UI / UX Design (Figma, Adobe XD)", level: 85 },
      { name: "Adobe Creative Suite", level: 80 },
      { name: "Content & Copywriting", level: 86 },
      { name: "Training & Public Speaking", level: 84 },
    ],
    tags: ["SEO", "Google Ads", "Meta Ads", "Figma", "Adobe XD", "Photoshop", "Illustrator", "Premiere Pro", "After Effects"],
  },
];

export const experience = [
  {
    role: "Founder & Lead Developer",
    company: "Omebly",
    url: "https://omebly.com/",
    location: "Dubai, UAE · Remote",
    period: "2025 – Present",
    current: true,
    summary:
      "Omebly is my software brand. Its first product, Omebly Downloader, is a free, open-source Windows app plus browser extension that finds every video, audio file, image and document on a page and downloads what you tick at full speed.",
    bullets: [
      "Architected and built the full stack: a Rust + Tauri 2 desktop app, a Manifest V3 browser extension (Chrome, Edge, Brave) and a native-messaging bridge between them.",
      "Implemented media detection for HLS / DASH streams, players, playlists and copy-protected (DRM) content, with yt-dlp and FFmpeg bundled and hash-pinned for reproducible builds.",
      "Set up GitHub Actions release builds, SignPath code signing, signed one-click updates via a custom update endpoint, and end-to-end Playwright tests against a local test site.",
      "Own the product beyond code: website, privacy policy, licence agreement, support and release notes. No ads, no tracking, no analytics.",
    ],
    tech: ["Rust", "Tauri 2", "JavaScript", "MV3 Extension", "GitHub Actions", "Playwright", "SignPath", "yt-dlp", "FFmpeg"],
  },
  {
    role: "Digital Marketing Manager",
    company: "Essenzi Perfumes",
    location: "Dubai, UAE",
    period: "2024 – 2025",
    summary: "Led the digital channel for a retail perfume brand: paid, SEO, email and the e-commerce storefront.",
    bullets: [
      "Owned budgets and performance across Google, Meta and TikTok ads, SEO and email.",
      "Built reporting that combined ad-platform, analytics and sales data into one weekly view of spend, ROAS and funnel drop-off.",
      "Automated repetitive operations (lead routing, campaign reports, content scheduling) with scripts and workflow tools.",
    ],
    tech: ["Google Ads", "Meta Ads", "GA4", "Looker Studio", "Shopify", "Automation"],
  },
  {
    role: "Digital Marketing Trainer",
    company: "Spoton Training Institute",
    location: "Dubai, UAE",
    period: "2023 – 2024",
    summary: "Designed and delivered hands-on digital marketing and analytics training for professionals and career-changers.",
    bullets: [
      "Built a curriculum covering SEO, Google Ads, social advertising, analytics and landing-page development.",
      "Coached learners through live campaign projects and data-driven optimisation exercises.",
      "Introduced Google Analytics and Looker Studio reporting modules with practice datasets.",
    ],
    tech: ["Curriculum Design", "GA4", "Looker Studio", "Google Ads", "SEO"],
  },
  {
    role: "Digital Marketing Executive",
    company: "Etisalat Telecom (HACB)",
    location: "Dubai, UAE",
    period: "2022 – 2023",
    summary: "Ran digital acquisition campaigns for telecom products under a major UAE brand.",
    bullets: [
      "Worked within strict brand, compliance and budget guidelines.",
      "Analysed campaign and lead-quality data to move budget toward the best audiences and creatives.",
      "Closed the loop with sales teams between online leads and conversions.",
    ],
    tech: ["Paid Media", "Lead Generation", "Analytics", "CRM"],
  },
  {
    role: "Digital Marketing Executive",
    company: "WGCB",
    location: "Dubai, UAE",
    period: "2021 – 2022",
    summary: "Managed SEO, social and paid campaigns, and built landing pages and site content.",
    bullets: [
      "Set up tracking (tags, events, conversions) so every campaign was measurable end to end.",
    ],
    tech: ["SEO", "Social Media", "Landing Pages", "GTM"],
  },
  {
    role: "Senior Marketing Executive",
    company: "Indiabulls Pharma",
    location: "India",
    period: "2017 – 2019",
    summary: "Territory sales and marketing for a pharmaceutical portfolio.",
    bullets: [
      "Managed relationships with doctors, distributors and retail partners and tracked performance against targets.",
    ],
    tech: ["Sales", "Territory Planning", "Reporting"],
  },
  {
    role: "Junior Marketing Executive",
    company: "Shreya Lifescience · Raptakos, Brett & Co. · Ajanta Pharma",
    location: "India",
    period: "2014 – 2017",
    summary: "Field marketing and sales across three pharmaceutical companies.",
    bullets: [
      "Built the communication, negotiation and reporting habits that still shape how I work with clients and stakeholders.",
    ],
    tech: ["Field Marketing", "Communication"],
  },
];

export const featuredProject = {
  name: "Omebly Downloader",
  tagline: "See everything on a page. Tick what you want. Download at full speed.",
  icon: `${import.meta.env.BASE_URL}omebly-icon.png`,
  url: "https://omebly.com/tools/downloader/",
  repo: "https://github.com/hussain5049/omebly-downloader",
  version: "v0.3.3",
  licence: "GPL-3.0-or-later",
  description:
    "A free, open-source Windows download manager with a companion browser extension. The extension scans every frame of a page for videos, audio, images, files, streams and playlists; the desktop app downloads them in parallel, merges streams with FFmpeg and keeps everything on the user's machine.",
  features: [
    { title: "Native desktop app", text: "Rust + Tauri 2, single-instance, signed NSIS installer, one-click signed updates." },
    { title: "MV3 browser extension", text: "Chrome, Edge and Brave. Scans frames, players, HLS / DASH streams and playlists." },
    { title: "Privacy by design", text: "No ads, tracking or analytics. The only request home is the update check." },
    { title: "Release engineering", text: "GitHub Actions builds, hash-pinned yt-dlp and FFmpeg, SignPath code signing." },
    { title: "Tested end to end", text: "Playwright suite runs the extension against a local test site and real pages." },
    { title: "Responsible by default", text: "DRM-protected media is detected, labelled and never downloaded." },
  ],
  stack: ["Rust", "Tauri 2", "JavaScript", "Chrome Extension (MV3)", "Native Messaging", "yt-dlp", "FFmpeg", "GitHub Actions", "Playwright", "SignPath"],
};

export const projects = [
  {
    name: "Omebly.com",
    description:
      "The home of the Omebly brand: product pages, downloads, documentation, update API and contact. Designed, built and maintained by me.",
    url: "https://omebly.com/",
    tags: ["Web", "Product Site", "API", "SEO"],
  },
  {
    name: "Wand Enhancer (contribution)",
    description:
      "Fork of an open-source C# extension that adds UX and interoperability features to a desktop app. Used to study and contribute to a .NET codebase.",
    url: "https://github.com/hussain5049/Wand-Enhancer",
    tags: ["C#", ".NET", "Open Source"],
  },
  {
    name: "Marketing automation & reporting stack",
    description:
      "Internal tooling built across my marketing roles: automated weekly performance reports, lead routing into CRMs and dashboard templates in Looker Studio.",
    tags: ["Automation", "GA4", "Looker Studio", "Sheets", "Apps Script"],
  },
  {
    name: "This interactive resume",
    description:
      "React 19 + Vite + Tailwind + Framer Motion, deployed to GitHub Pages by GitHub Actions, with a print layout that produces the PDF version.",
    url: "https://github.com/hussain5049/practice-personal-resume",
    tags: ["React", "Vite", "Tailwind", "Framer Motion", "GitHub Pages"],
  },
];

export const education = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    org: "Graduated 2014",
    text: "Programming, databases, data structures and software engineering fundamentals.",
  },
  {
    title: "Self-directed engineering",
    org: "Ongoing",
    text: "Rust and Tauri for desktop apps, modern React, release engineering and security practices, learned by shipping Omebly.",
  },
  {
    title: "AI & data practice",
    org: "Ongoing",
    text: "LLM APIs and agent workflows, automation platforms, SQL and analytics applied to real marketing and product data.",
  },
];

export const languages = ["English", "Hindi", "Bengali"];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
