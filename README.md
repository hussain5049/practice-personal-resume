<div align="center">

<img src="./public/profile.png" alt="Nazmul Hussain" width="130" style="border-radius:50%">

# Nazmul Hussain

**Full-Stack Developer · AI Automation Engineer · Data Analyst · Founder of [Omebly](https://omebly.com/)**

Dubai, UAE · India · Open to full-time, contract and remote roles

[![Live Resume](https://img.shields.io/badge/Live%20Resume-hussain5049.github.io-2ef2b5?style=for-the-badge&logo=githubpages&logoColor=black)](https://hussain5049.github.io/practice-personal-resume/)
[![PDF](https://img.shields.io/badge/Resume-PDF-ef4444?style=for-the-badge&logo=adobeacrobatreader&logoColor=white)](./public/Nazmul_Hussain_Resume.pdf)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Nazmul%20Hussain-0a66c2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/nazmul-hussain-16a55b243/)
[![GitHub](https://img.shields.io/badge/GitHub-hussain5049-181717?style=flat-square&logo=github)](https://github.com/hussain5049)
[![Omebly](https://img.shields.io/badge/Omebly-omebly.com-2ef2b5?style=flat-square&logo=googlechrome&logoColor=black)](https://omebly.com/)
[![Email](https://img.shields.io/badge/Email-info%40makemybusinesslive.com-0e7490?style=flat-square&logo=gmail&logoColor=white)](mailto:info@makemybusinesslive.com)

</div>

---

## About

I build products end to end: fast web and desktop apps, AI-powered automations that remove busywork, and data pipelines and dashboards that tell teams what to do next.

I started in pharmaceutical sales, moved into performance marketing and training in the UAE, and today I design, build and ship software under my own brand, **Omebly**. That path means I write code with a commercial brain: I know what a funnel, a budget and a deadline look like from the inside.

## Featured: Omebly Downloader

<img src="./public/omebly-icon.png" alt="Omebly Downloader" width="56" align="left" style="margin-right:12px">

**See every video, audio file, image and file on a page, tick what you want, and download it at full speed.**
Free and open source (GPL-3.0-or-later). [Product page](https://omebly.com/tools/downloader/) · [Source](https://github.com/hussain5049/omebly-downloader)

<br clear="left">

- **Native desktop app** in Rust + Tauri 2 with a signed NSIS installer and signed one-click updates.
- **Manifest V3 browser extension** for Chrome, Edge and Brave that scans frames, players, HLS / DASH streams and playlists.
- **Release engineering:** GitHub Actions builds, hash-pinned yt-dlp and FFmpeg, SignPath code signing, Playwright end-to-end tests.
- **Privacy by design:** no ads, tracking or analytics. DRM-protected media is detected and never downloaded.

## Skills

| Track | Core |
| --- | --- |
| **Web & App** | JavaScript / TypeScript, React, Vite, Tailwind, Node.js, Express, Tauri + Rust, PHP, SQL / MySQL, REST APIs, MV3 browser extensions, Git, GitHub Actions, Playwright |
| **AI & Automation** | LLM APIs (OpenAI, Claude), prompt and workflow design, n8n / Make / Zapier, chatbots and assistants, API integration and webhooks, Python scripting, CRM and email automation, scraping |
| **Data & Analytics** | SQL, advanced Excel / Google Sheets, GA4 and Tag Manager, Looker Studio, Power BI, Python (pandas), A/B testing, KPI / funnel / cohort analysis |
| **Growth & Design** | SEO, Google / Meta / LinkedIn / TikTok Ads, UI / UX (Figma, Adobe XD), Adobe Creative Suite, content and copywriting, training |

## Experience

| Period | Role | Company | Location |
| --- | --- | --- | --- |
| 2025 – Present | **Founder & Lead Developer** | [Omebly](https://omebly.com/) | Dubai · Remote |
| 2024 – 2025 | Digital Marketing Manager | Essenzi Perfumes | Dubai, UAE |
| 2023 – 2024 | Digital Marketing Trainer | Spoton Training Institute | Dubai, UAE |
| 2022 – 2023 | Digital Marketing Executive | Etisalat Telecom (HACB) | Dubai, UAE |
| 2021 – 2022 | Digital Marketing Executive | WGCB | Dubai, UAE |
| 2017 – 2019 | Senior Marketing Executive | Indiabulls Pharma | India |
| 2014 – 2017 | Junior Marketing Executive | Shreya Lifescience · Raptakos, Brett & Co. · Ajanta Pharma | India |

Full descriptions are on the [live resume](https://hussain5049.github.io/practice-personal-resume/) and in the [PDF](./public/Nazmul_Hussain_Resume.pdf).

## Education

- **Bachelor of Computer Applications (BCA)**, 2014
- Ongoing self-directed work in Rust / Tauri, modern React, release engineering, LLM tooling and analytics.

## Contact

| | |
| --- | --- |
| Email | [info@makemybusinesslive.com](mailto:info@makemybusinesslive.com) |
| Phone / WhatsApp | [+91 84150 44306](tel:+918415044306) |
| LinkedIn | [linkedin.com/in/nazmul-hussain-16a55b243](https://www.linkedin.com/in/nazmul-hussain-16a55b243/) |
| GitHub | [github.com/hussain5049](https://github.com/hussain5049) |
| Website | [omebly.com](https://omebly.com/) |

---

<details>
<summary><strong>About this repository (how the site is built)</strong></summary>

An interactive resume built with **React 19, Vite, Tailwind CSS v4 and Framer Motion**, deployed to **GitHub Pages** by GitHub Actions.

```
.
├── index.html                 # shell + SEO / schema.org metadata
├── public/
│   ├── profile.png            # photo
│   ├── omebly-icon.png        # Omebly logo
│   └── Nazmul_Hussain_Resume.pdf
├── src/
│   ├── data/resume.js         # ALL resume content lives here
│   ├── components/            # Hero, About, Skills, Experience, Projects, Education, Contact, PrintResume…
│   ├── hooks/useReveal.js     # scroll-reveal presets
│   └── index.css              # theme tokens + print rules
└── .github/workflows/deploy.yml
```

**Edit content:** change `src/data/resume.js`. Nothing else needs touching.

**Run locally**

```bash
npm install
npm run dev        # http://localhost:5173/practice-personal-resume/
npm run build      # production build in dist/
```

**Publish:** repository *Settings → Pages → Source: GitHub Actions*. Every push to `main` deploys to
`https://hussain5049.github.io/practice-personal-resume/`.

**Regenerate the PDF:** open the live site, press *Ctrl/Cmd + P*, save as PDF (a dedicated print layout is used), and replace `public/Nazmul_Hussain_Resume.pdf`.

</details>
