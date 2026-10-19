// ============================================================================
//  RESUME CONTENT — edit this file only; every section of the site reads from it.
// ============================================================================

const BASE = import.meta.env.BASE_URL;

export const profile = {
  name: "Nazmul Hussain",
  firstName: "Nazmul",
  title: "Managing Director & Technical Head, Omebly",
  roles: [
    "Managing Director & Technical Head @ Omebly",
    "Full-Stack MERN, SaaS & Flutter App Architect",
    "AI Automation & Data Analytics Engineer",
    "Creator of the Omebly App & 60+ Browser Tools",
    "Lead Mentor at Omebly Academy (16 Live Tracks)",
    "UI/UX Designer, 3D Animator & Unreal Creator",
  ],
  headline: ["Building digital", "experiences that", "scale globally"],
  tagline:
    "Managing Director & Technical Head at Omebly and founder of KiniCode & Zenkart. With 10+ years of hands-on product engineering I personally lead every web, SaaS, Flutter mobile app, 3D game and AI architecture from first consultation to launch, backed by lifetime bug-fix support.",
  location: "Kolkata, India · Downtown Dubai, UAE",
  hubs: "Kolkata (IN) & Downtown Dubai (UAE)",
  regions: "India · UAE · Gulf · UK · USA",
  availability: "Open to AI automation, full-stack and data roles · consulting via Omebly",
  email: "info@omebly.com",
  whatsapp: "+91 70444 33991",
  whatsappHref: "https://wa.me/917044433991",
  website: "https://omebly.com/",
  websiteLabel: "omebly.com",
  github: "https://github.com/hussain5049",
  githubLabel: "github.com/hussain5049",
  linkedin: "https://www.linkedin.com/in/nazmul-hussain-16a55b243/",
  linkedinLabel: "linkedin.com/in/nazmul-hussain-16a55b243",
  photo: `${BASE}profile.png`,
  omeblyIcon: `${BASE}omebly-icon.png`,
  resumePdf: `${BASE}Nazmul_Hussain_Resume.pdf`,
};

export const stats = [
  { value: 10, suffix: "+", label: "years founder & product experience" },
  { value: 8, suffix: "", label: "studio service pillars" },
  { value: 16, suffix: "", label: "live academy tracks mentored" },
  { value: 60, suffix: "+", label: "free in-browser tools shipped" },
];

// Rows shown on the holographic ID card in the hero.
export const hud = {
  rows: [
    { k: "EXECUTIVE", v: "Nazmul Hussain" },
    { k: "DESIGNATION", v: "MD & Technical Head @ Omebly", accent: "cyan" },
    { k: "LEADERSHIP", v: "Nazmul Hussain & Tania Firdus", accent: "purple" },
    { k: "GLOBAL HUBS", v: "Kolkata (IN) & Downtown Dubai (UAE)", accent: "green" },
    { k: "CLIENT REGIONS", v: "India • UAE • Gulf • UK • USA" },
    { k: "FLAGSHIP APP", v: "Omebly Voice-Party App (13 langs)", accent: "cyan" },
  ],
  bars: [
    { label: "Full-stack MERN, SaaS & Cloud", level: 98 },
    { label: "Flutter mobile & real-time voice / AI", level: 96 },
    { label: "UI/UX systems, 3D & Unreal Engine", level: 94 },
  ],
};

export const ticker = [
  "Web & SaaS development",
  "Flutter iOS & Android apps",
  "AI automation & LLM agents",
  "Data analytics & Power BI",
  "UI/UX design systems",
  "2D & 3D animation",
  "Unity & Unreal game dev",
  "Omebly Academy · 16 live tracks",
  "60+ free in-browser tools",
  "Lifetime bug-fix support",
];

export const about = {
  intro:
    "I am a founder-engineer based between Kolkata and Downtown Dubai. I started in pharmaceutical sales, moved into performance marketing and corporate training in the UAE, and today I lead Omebly, a product studio and academy, as Managing Director & Technical Head alongside owner Tania Firdus.",
  paragraphs: [
    "I still write the code. Every Omebly product, client platform and academy syllabus goes through my hands, from architecture and UI to release engineering and support. That is why I can credibly take on an AI automation, full-stack or data role: I have shipped all three for real users.",
    "A decade on the commercial side means I think in funnels, budgets and deadlines. I build software that moves a business metric, and I explain it in plain language to the people who own that metric.",
  ],
  highlights: [
    {
      title: "Full-Stack & Mobile",
      text: "MERN web apps, SaaS platforms, APIs, WordPress builds, and Flutter apps for iOS and Android with real-time voice and video.",
    },
    {
      title: "AI Automation",
      text: "LLM agents, AI document tools (Chat with PDF, summarisers, OCR), workflow automation and CRM / email pipelines that run unattended.",
    },
    {
      title: "Data & Analytics",
      text: "Power BI & DAX, SQL, Python and advanced Excel. GA4 dashboards and reporting that turn campaign and product data into decisions.",
    },
    {
      title: "Design, 3D & Games",
      text: "Figma design systems, Adobe suite, Blender and 3ds Max animation, Unity and Unreal Engine 5 game development.",
    },
  ],
};

// Skill levels are 0–100 and drive the animated bars.
export const skillGroups = [
  {
    id: "web",
    label: "Full-Stack Web",
    icon: "Code2",
    blurb: "High-speed business sites, custom e-commerce, scalable MERN apps, APIs and SaaS platforms.",
    skills: [
      { name: "JavaScript (ES6+) / TypeScript", level: 95 },
      { name: "React.js & Vite", level: 92 },
      { name: "Node.js & Express.js", level: 90 },
      { name: "MongoDB & SQL", level: 86 },
      { name: "PHP & WordPress / Elementor Pro", level: 88 },
      { name: "HTML5 / CSS3 / Tailwind", level: 96 },
      { name: "REST APIs, Webhooks & Auth", level: 90 },
      { name: "Rust + Tauri desktop apps", level: 74 },
      { name: "Git, GitHub Actions, CI/CD", level: 86 },
    ],
    tags: ["React", "Node.js", "Express", "MongoDB", "MERN", "PHP", "SQL", "WordPress", "Tauri", "Playwright", "Vite"],
  },
  {
    id: "ai",
    label: "Mobile, AI & Automation",
    icon: "Bot",
    blurb: "Flutter apps with real-time voice and video, plus AI agents and automations that remove busywork.",
    skills: [
      { name: "Flutter & Dart", level: 92 },
      { name: "Real-time voice / video (WebRTC)", level: 86 },
      { name: "LLM APIs & AI Agents (OpenAI, Claude)", level: 88 },
      { name: "AI document tools (PDF chat, OCR, summarise)", level: 90 },
      { name: "Workflow automation (n8n / Make / Zapier)", level: 84 },
      { name: "Python scripting & scraping", level: 80 },
      { name: "End-to-end encryption & security", level: 78 },
      { name: "CRM & email automation", level: 86 },
    ],
    tags: ["Flutter", "Dart", "OpenAI API", "Claude API", "AI Agents", "n8n", "Python", "E2E Encryption", "GitHub Copilot", "Firebase"],
  },
  {
    id: "data",
    label: "Data & Analytics",
    icon: "BarChart3",
    blurb: "Numbers only matter when they change a decision. I build the dashboards and models that do.",
    skills: [
      { name: "Power BI & DAX", level: 92 },
      { name: "SQL", level: 88 },
      { name: "Advanced Excel / Google Sheets", level: 95 },
      { name: "Python (pandas, data cleaning)", level: 80 },
      { name: "Google Analytics 4 & Tag Manager", level: 92 },
      { name: "KPI, funnel & cohort analysis", level: 90 },
      { name: "A/B testing & CRO", level: 86 },
    ],
    tags: ["Power BI", "DAX", "SQL", "Excel", "Python", "GA4", "GTM", "Looker Studio", "CRO"],
  },
  {
    id: "creative",
    label: "Design, 3D & Games",
    icon: "Sparkles",
    blurb: "Design systems, motion, CGI and games: the whole visual surface of a product, not just the code.",
    skills: [
      { name: "Figma design systems & prototypes", level: 94 },
      { name: "Photoshop, Illustrator, InDesign", level: 90 },
      { name: "Premiere Pro, After Effects, DaVinci", level: 88 },
      { name: "Blender 3D & 3ds Max", level: 82 },
      { name: "Unreal Engine 5 & Unity", level: 80 },
      { name: "AutoCAD & Revit", level: 72 },
      { name: "Brand strategy & identity", level: 88 },
    ],
    tags: ["Figma", "Adobe CC", "DaVinci Resolve", "Blender", "3ds Max", "Unreal Engine 5", "Unity", "WebGL", "AutoCAD", "Revit"],
  },
];

export const ecosystem = [
  {
    badge: "Live social product",
    name: "Omebly Voice-Party App",
    text: "Flagship real-time voice and video social app with interactive voice rooms, live PK battles, games, gifts and leaderboards, localised in 13 languages for India and the Gulf. Architected and engineered by me.",
    chips: ["Flutter", "Real-time voice / video", "Live games & PK", "13 languages"],
    link: { href: "https://omebly.com/", label: "Explore the Omebly App" },
    accent: "cyan",
  },
  {
    badge: "60+ privacy-first web tools",
    name: "Omebly In-Browser Tools Suite",
    text: "A zero-upload, client-side utility suite that keeps 100% of files on the user's device: 54 PDF & AI tools (Chat with PDF, AI summariser, OCR), 4 image tools (4K upscaler, background remover) and multi-track video timeline tools.",
    chips: ["AI PDF summariser", "4K photo enhancer", "Multi-track video", "Zero server upload"],
    link: { href: "https://omebly.com/", label: "Launch the free tools" },
    accent: "purple",
  },
  {
    badge: "16 live mentor-led tracks",
    name: "Omebly Training Academy",
    text: "Live online cohorts with weekly 1-on-1 code and design reviews across Data Analysis, Advanced Power BI & DAX, Python, Full-Stack Web, Flutter, Unity Game Dev, UI/UX in Figma and 2D/3D Blender animation.",
    chips: ["Power BI & SQL", "Full-stack & Flutter", "AI app workshops", "Dubai & global cohorts"],
    link: { href: "https://omebly.com/", label: "View all 16 syllabi" },
    accent: "cyan",
  },
];

export const pillars = [
  { n: "01", tag: "∞ Lifetime support", title: "Web & SaaS Development", text: "High-speed business websites, custom e-commerce, scalable MERN web apps, APIs and SaaS platforms.", accent: "cyan" },
  { n: "02", tag: "∞ Lifetime support", title: "App Development", text: "Cross-platform Flutter, iOS and Android apps with clean mobile UX, scalable back-ends and store launch.", accent: "cyan" },
  { n: "03", tag: "Design systems", title: "UI/UX Product Design", text: "Interactive Figma prototypes, SaaS dashboards, comprehensive design systems and UX conversion audits.", accent: "purple" },
  { n: "04", tag: "2D & 3D CGI", title: "Animation Design", text: "3D product animation, CGI environments, explainer videos, Lottie UI motion, Blender and After Effects renders.", accent: "purple" },
  { n: "05", tag: "Cinematic post", title: "Video Editing", text: "High-retention Reels, Shorts and YouTube production, colour grading and sound design in Premiere Pro and DaVinci.", accent: "cyan" },
  { n: "06", tag: "ROI & analytics", title: "Digital Marketing", text: "Technical SEO, Google and Meta ad funnels, conversion-rate optimisation, email automation and GA4 dashboards.", accent: "cyan" },
  { n: "07", tag: "∞ Lifetime support", title: "Game Development", text: "2D and 3D mobile, PC and WebGL games built in Unity and Unreal Engine 5 with custom physics, art and multiplayer.", accent: "green" },
  { n: "08", tag: "Identity & voice", title: "Brand Building", text: "Brand strategy, logo suites, visual guidelines, rebranding and investor pitch kits for global startups.", accent: "purple" },
];

export const experience = [
  {
    role: "Managing Director & Technical Head",
    company: "Omebly",
    url: "https://omebly.com/",
    location: "Kolkata & Downtown Dubai",
    period: "Present",
    current: true,
    summary:
      "Co-lead Omebly with owner Tania Firdus: a product studio, free-tools platform and live academy serving clients across India, the UAE, Kuwait, Qatar, Saudi Arabia, the UK and the US.",
    bullets: [
      "Architected and shipped the Omebly Voice-Party App (Flutter, real-time voice and video, live games, 13 languages).",
      "Built the 60+ tool in-browser suite: 54 PDF & AI tools, image upscaling and background removal, and video timeline tools, all client-side with zero uploads.",
      "Built Omebly Downloader: a Rust + Tauri desktop app and MV3 extension with signed releases, CI and Playwright tests (open source, GPL-3.0).",
      "Lead mentor for 16 live academy tracks: Power BI & DAX, Python, full-stack, Flutter, Unity, UI/UX and Blender.",
      "Own delivery for client web, SaaS and mobile projects with full code ownership, weekly live demos and lifetime bug-fix support.",
    ],
    tech: ["MERN", "Flutter", "AI / LLM", "Rust + Tauri", "Power BI", "Figma", "Unreal / Unity"],
  },
  {
    role: "Founder",
    company: "KiniCode · Zenkart",
    location: "India · UAE",
    period: "Ongoing",
    summary:
      "KiniCode (kinicode.com) delivers custom SaaS, web and mobile engineering alongside Omebly. Zenkart is my digital software brand, through which I scaled e-commerce architectures such as Essenzi and Tripurakart.",
    bullets: [
      "Custom SaaS, web and mobile builds for clients in India, the Gulf, the UK and the US.",
      "E-commerce platforms, storefront performance and growth tooling for retail brands.",
      "Authored the handbook “From Zero to Digital Hero”.",
    ],
    tech: ["SaaS", "E-commerce", "Web & Mobile", "Growth"],
  },
  {
    role: "Digital Marketing Manager",
    company: "Essenzi Perfumes",
    location: "Dubai, UAE",
    period: "2024 – 2025",
    summary: "Owned the digital channel and e-commerce architecture for a retail perfume brand.",
    bullets: [
      "Paid search and social, SEO, email and storefront performance with weekly spend / ROAS / funnel reporting.",
      "Automated reporting, lead routing and content scheduling with scripts and workflow tools.",
    ],
    tech: ["E-commerce", "Google & Meta Ads", "GA4", "Automation"],
  },
  {
    role: "Corporate Trainer: Power BI, Python, Generative AI & Design",
    company: "Edoxi · SpotOn Training Institute",
    location: "Dubai, UAE",
    period: "2023 – 2024",
    summary: "Trained corporate professionals in Dubai in data analytics, Python, generative AI and design.",
    bullets: [
      "Designed and delivered hands-on curricula in Power BI & DAX, Python, generative AI and digital marketing analytics.",
      "Coached learners through live projects with weekly reviews; this programme became the model for Omebly Academy.",
    ],
    tech: ["Power BI", "Python", "Generative AI", "Curriculum design"],
  },
  {
    role: "Digital Marketing Executive",
    company: "Etisalat Business (HACB)",
    location: "Dubai, UAE",
    period: "2022 – 2023",
    summary: "B2B digital campaigns for Etisalat Business projects in Dubai.",
    bullets: [
      "Delivered multiple medal-winning B2B digital campaigns within strict brand, compliance and budget rules.",
      "Used campaign and lead-quality data to shift budget toward the best audiences and creatives.",
    ],
    tech: ["B2B campaigns", "Lead generation", "Analytics"],
  },
  {
    role: "Web & Digital Systems for UAE Enterprises",
    company: "Dubai Shipping LLC · Emirates Packaging Group LLC · Golden Colour General Trading LLC",
    location: "Dubai, UAE",
    period: "2021 – 2023",
    summary: "Architected web platforms and digital brand presence for UAE corporates, including the WGCB engagement.",
    bullets: [
      "Corporate websites, tracking setup (tags, events, conversions) and SEO foundations.",
      "Brand and content systems that the companies still run on.",
    ],
    tech: ["Web platforms", "SEO", "Brand", "GTM"],
  },
  {
    role: "Marketing Executive → Senior Marketing Executive",
    company: "Shreya Lifescience · Raptakos, Brett & Co. · Ajanta Pharma · Indiabulls Pharma",
    location: "India",
    period: "2014 – 2019",
    summary: "Five years of pharmaceutical field marketing and territory sales.",
    bullets: [
      "Managed doctor, distributor and retail relationships and tracked performance against targets.",
      "Built the communication and reporting discipline I still use with clients and teams.",
    ],
    tech: ["Sales", "Territory planning", "Reporting"],
  },
];

export const ventures = [
  {
    badge: "Global studio & rebrand",
    name: "Omebly & KiniCode",
    text: "Co-leading Omebly (omebly.com) with owner Tania Firdus alongside KiniCode (kinicode.com), delivering custom SaaS, web and mobile engineering across India, the UAE, Kuwait, Qatar, Saudi Arabia, the UK and the US.",
    accent: "cyan",
  },
  {
    badge: "Dubai & UAE enterprise",
    name: "UAE Corporate Digital Systems",
    text: "Architected web platforms and digital brand presence for Dubai Shipping LLC, Emirates Packaging Group LLC and Golden Colour General Trading LLC, plus medal-winning B2B digital campaigns for Etisalat Business projects in Dubai.",
    accent: "purple",
  },
  {
    badge: "E-commerce & corporate training",
    name: "Zenkart, Essenzi & Edoxi Dubai",
    text: "Founded the digital software brand Zenkart, scaled e-commerce architectures such as Essenzi and Tripurakart, authored “From Zero to Digital Hero”, and trained corporate professionals in Dubai (Edoxi / SpotOn) in Power BI, Python, generative AI and design.",
    accent: "green",
  },
];

export const featuredProject = {
  name: "Omebly Downloader",
  tagline: "See everything on a page. Tick what you want. Download at full speed.",
  icon: `${BASE}omebly-icon.png`,
  url: "https://omebly.com/tools/downloader/",
  repo: "https://github.com/hussain5049/omebly-downloader",
  version: "v0.3.3",
  licence: "GPL-3.0-or-later",
  description:
    "Free, open-source Windows download manager with a companion browser extension. The extension scans every frame of a page for videos, audio, images, files, streams and playlists; the desktop app downloads them in parallel, merges streams with FFmpeg and keeps everything on the user's machine.",
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

export const repos = [
  {
    badge: "E2E encrypted messaging",
    name: "secure-chat",
    text: "Privacy-first encrypted communication platform with end-to-end encryption and automatic 24-hour ephemeral message deletion. Private build; source on request.",
    url: "https://github.com/hussain5049",
    tags: ["E2E encryption", "Real-time", "Privacy"],
  },
  {
    badge: "Creative AI & workflow",
    name: "Wand-Enhancer",
    text: "Fork of an open-source C# extension adding UX and interoperability features to a desktop app; used to study and contribute to a .NET codebase.",
    url: "https://github.com/hussain5049/Wand-Enhancer",
    tags: ["C#", ".NET", "Open source"],
  },
  {
    badge: "This site",
    name: "practice-personal-resume",
    text: "This interactive resume: React 19, Vite, Tailwind v4 and Framer Motion with a canvas particle network, deployed to GitHub Pages by GitHub Actions.",
    url: "https://github.com/hussain5049/practice-personal-resume",
    tags: ["React", "Vite", "Tailwind", "Framer Motion"],
  },
];

export const education = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    org: "Graduated 2014",
    text: "Programming, databases, data structures and software engineering fundamentals.",
  },
  {
    title: "Lead Mentor, Omebly Academy",
    org: "16 live tracks",
    text: "Teaching Power BI & DAX, Python, full-stack web, Flutter, Unity, UI/UX and Blender to cohorts in Dubai and worldwide.",
  },
  {
    title: "Author, “From Zero to Digital Hero”",
    org: "Handbook",
    text: "A practical guide to building a digital presence and business from nothing, drawn from a decade of client work.",
  },
];

export const languages = ["English", "Hindi", "Bengali"];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "ecosystem", label: "Omebly" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" },
];
