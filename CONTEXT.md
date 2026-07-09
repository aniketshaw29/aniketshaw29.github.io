# Portfolio Project Context

> Load this file at the start of any agentic session to skip re-discovery.

## Owner
- **Name:** Aniket Shaw
- **Role:** Developer Associate @ SAP Labs, Bangalore
- **Email:** aniketshawwork@gmail.com
- **GitHub:** aniketshaw29
- **LinkedIn:** linkedin.com/in/aniketshaw29
- **Live site:** https://aniketshaw29.github.io

## Repo
- **Repo:** aniketshaw29/aniketshaw29.github.io
- **Branch:** main
- **Stack:** Single `index.html` — vanilla HTML/CSS/JS, zero build step, zero dependencies
- **Deploy:** GitHub Pages serves root of `main` branch automatically on push

## File structure
```
/
├── index.html      ← entire site (HTML + CSS + JS)
├── README.md       ← how to edit & deploy
└── CONTEXT.md      ← this file
```

## Site sections (in order)
| Section | id | Notes |
|---|---|---|
| Nav | — | sticky, glassmorphism blur |
| Hero | `#hero` | tagline + 2 CTA buttons |
| About | `#about` | bio text + 4 stat cards |
| Skills | `#skills` | 5 skill groups (no Frontend group) |
| Experience | `#experience` | SAP consolidated entry + intern |
| Education | `#education` | MTech BITS Pilani + BCA IEM |
| Projects | `#projects` | 4 project cards |
| Contact | `#contact` | GitHub + LinkedIn + Email |
| Footer | — | sassy one-liner |

## Skills on site
- **Languages:** Java, Python, TypeScript, JavaScript, SQL
- **Backend Frameworks:** Spring Boot, Express.js, Flask, FastAPI, Django, SAP CAP
- **AI / LLM:** LangChain, LLM Fine-tuning, Prompt Engineering, Vector DBs, RAG
- **Cloud & DevOps:** SAP BTP, Cloud Foundry, Docker, GitHub Actions, SAP S/4HANA
- **Databases:** SAP HANA, PostgreSQL, MongoDB, SQLite
- **Frontend is intentionally excluded** — Aniket is a backend/AI engineer

## Experience (SAP, condensed)
Single timeline entry: **Developer Associate** · Aug 2023 – Present · SAP, Bangalore
Sub-roles (inline list):
1. PRP Team — CX Commerce & Consumer Industries (Jul 2025–Present) · Java, Spring Boot
2. BTP INT ABS Solution Hub (Jan–Jul 2025) · Java, SAP BTP
3. SAP S/4HANA Cloud Retail PRP (Jun–Dec 2024) · Java, Spring Boot, SAP HANA, CAP, OData
4. InnVent Hackathon — Concur Team (Apr–May 2024) · Python, Flask, ML
5. LX Labs India (Sep 2023–Mar 2024) · Java, Spring Boot, SAP S/4HANA

Also: **Summer Intern** @ IEM IEDC, Kolkata (Apr–Jun 2022) · Node.js, MongoDB

## Education
- MTech Software Engineering · BITS Pilani WILP · 2023–Present
- BCA · IEM Kolkata · 2018–2022

## Projects (featured 4)
| Name | Repo | Stack tags |
|---|---|---|
| Expense Tracker | aniketshaw29/expense-tracker | TypeScript, LocalStorage, Offline-first |
| Flight Price History Tracker | aniketshaw29/flight-price-history-tracker | JavaScript, Playwright, Web Scraping, CLI |
| Instagram Follower Analyzer | aniketshaw29/insta-analysis | JavaScript, Privacy-first |
| Campus EventHub | aniketshaw29/Campus-EventHub | Java, Spring Boot, MySQL, REST API |

## Design tokens
```
--bg: #0d1117        /* page background */
--bg2: #161b22       /* card background */
--bg3: #21262d       /* tag background */
--border: #30363d    /* borders */
--text: #e6edf3      /* body text */
--muted: #8b949e     /* secondary text */
--accent: #58a6ff    /* blue accent */
--accent2: #3fb950   /* green (hero tag) */
```

## Rules / preferences (important for agents)
- **Never mention or highlight frontend skills** anywhere — not in Skills, not in project tags
- No framework tags (React, HTML, Angular) in project stack chips
- SAP experience = single consolidated entry, not split by rotation
- Education lives in its own `#education` section, not inside Experience
- Footer must stay sassy/personality-forward
- No build step — edit `index.html` directly and push to `main`
- To update remote: use `create_or_update_file` MCP tool with current file SHA

## How to get current SHA (before updating)
```
mcp: get_file_contents → owner:aniketshaw29, repo:aniketshaw29.github.io, path:index.html
→ returns SHA needed for create_or_update_file
```
