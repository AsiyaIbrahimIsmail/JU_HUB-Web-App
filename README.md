# Faculty Dashboard (React + Vite + Tailwind)

This app is set up for four pages developed in parallel using a shared Cards system.

## Scripts

- dev: start Vite dev server
- build: production build
- preview: preview build

## Project structure

```
faculty-dashboard/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Layout.jsx
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── ManageClubs.jsx
│   │   │   ├── Announcements.jsx
│   │   │   └── ManageChannels.jsx
│   │   ├── clubs/
│   │   │   ├── ApproveQueue.jsx
│   │   │   ├── AddNewClub.jsx
│   │   │   ├── EditClub.jsx
│   │   │   └── DeleteClub.jsx
│   │   ├── announcements/
│   │   │   ├── CreateAnnouncement.jsx
│   │   │   ├── EditAnnouncement.jsx
│   │   │   └── DeleteAnnouncement.jsx
│   │   └── channels/
│   │       ├── ChannelSettings.jsx
│   │       ├── ChannelDetail.jsx
│   │       ├── ChannelView.jsx
│   │       └── NewPost.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

Note: the app currently uses `Layout.jsx` as the shell (sidebar + topbar). `App.jsx` is included to match the structure file; routing is configured in `src/main.jsx`.

## Getting started

```
cd faculty-dashboard
npm install
npm run dev
```

## Build

```
npm run build
npm run preview
```

## Tech

- React + Vite
- React Router
- Tailwind CSS v4 (`@import "tailwindcss";` in `src/index.css` and `@tailwindcss/postcss` in `postcss.config.js`)

## Routes

- `/` Dashboard
- `/channels` ManageChannels
- `/clubs` ManageClubs
- `/announcements` Announcements
- Sub-pages under channels, clubs, announcements are in their respective folders.

## Team workflow and expectations

- Ownership
  - Dashboard: Amina Nor
  - ManageClubs: Asiya
  - Announcements: Sumaya
  - ManageChannels: Maimun
  - Asistant: Aisha

- Branching
  - Create feature branches per task: `feature/<area>-<short-desc>` (e.g., `feature/clubs-approve-queue`)
  - Keep `main` protected; PRs only

- Daily workflow
  1. `git pull --rebase origin main`
  2. Implement in small commits
  3. Open a PR early; request 1 reviewer
  4. Address review, merge when CI passes

- Definition of Done (quality bar)
  - Functional: feature works end-to-end with realistic sample data
  - Dynamic: UI renders from props/state; avoid hard-coded UI where data-driven is expected
  - Responsive: mobile (≤640px), tablet, desktop layouts validated
  - Accessible: semantic elements, focus styles, color contrast
  - Tested: add/adjust unit tests where logic exists (Vitest + RTL)
  - Documented: README or component docstring explains how to use or wire

- Coding standards
  - JS only (no TS). React function components
  - Tailwind v4 utilities; keep custom CSS minimal
  - Use `src/components/Layout.jsx` for the shell
  - Routes live in `src/main.jsx`; add new pages via nested routes
  - Update nav in `src/app/nav.js` for sidebar/topbar links
  - Shared state only when needed (Zustand); otherwise keep state local

- Commits and PRs
  - Conventional commits: `feat:`, `fix:`, `refactor:`, `docs:`, `chore:`, `test:`
  - PR description: what, why, screenshots/GIFs; list any follow-ups

- Review checklist (before asking for review)
  - No console errors, no unused imports
  - Keyboard navigation works; focus visible
  - Breakpoints checked (sm/md/lg)
  - Empty/loading/error states handled gracefully

## Contributing steps (quickstart)

```
git checkout -b feature/<area>-<short-desc>
npm run dev
# implement
git add -A && git commit -m "feat(<area>): <message>"
git push -u origin HEAD
# open PR on GitHub
```

