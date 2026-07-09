# aniketshaw29.github.io

Personal portfolio site — live at **[aniketshaw29.github.io](https://aniketshaw29.github.io)**

## Stack

- Pure HTML + CSS + JS — single `index.html`, no framework, no build step
- Fonts: Inter + JetBrains Mono via Google Fonts
- Hosted on GitHub Pages (serves `main` branch root)

## Structure

```
/
└── index.html   # entire site — HTML, CSS, and JS in one file
```

## Sections

| Section | Description |
|---|---|
| Hero | Name, tagline, CTA buttons |
| About | Bio text + stat cards |
| Skills | Language / framework / AI / cloud tags |
| Experience | Full SAP rotation history + education timeline |
| Projects | 4 featured side projects with GitHub links |
| Contact | GitHub · LinkedIn · Email |

## Editing

Just edit `index.html` directly — no `npm install`, no build, no deploy script needed.

To update content:
- **Bio / about text** → search for `id="about"`
- **Skills** → search for `skills-grid`
- **Experience** → search for `id="experience"`
- **Projects** → search for `id="projects"`
- **Contact links** → search for `id="contact"`

## Deploying

Push to `main` — GitHub Pages serves the root `index.html` automatically.

```bash
git add index.html
git commit -m "update: <what you changed>"
git push
```

Changes go live within ~30 seconds.
