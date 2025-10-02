# Faculty Dashboard (React + Vite + Tailwind)

This app is set up for four pages developed in parallel using a shared Cards system.

## Scripts

- dev: start Vite dev server
- build: production build
- preview: preview build

## Project structure

```
src/
  components/
    pages/
      Dashboard.jsx
      ManageClubs.jsx
      Announcements.jsx
      ManageChannels.jsx
    cards/
      index.js
      parts/
        Card.jsx
        CardHeader.jsx
        CardBody.jsx
        CardFooter.jsx
        CardGrid.jsx
        CardImage.jsx
        CardActions.jsx
      variants/
        StatCard.jsx
        ListCard.jsx
        MediaCard.jsx
        ActionCard.jsx
      utils/
        cardConstants.js
        cardFormatters.js
        classNames.js
  App.jsx
  main.jsx
  index.css
```

## Packages

Runtime: react, react-dom, react-router-dom, axios, zustand, clsx
Dev: vite, @vitejs/plugin-react, tailwindcss, postcss, autoprefixer, @tailwindcss/forms, @tailwindcss/typography, eslint (+react, hooks, a11y), prettier, vitest, @testing-library/react, @testing-library/jest-dom, jsdom

## Tailwind

- Config in `tailwind.config.js`
- Base CSS in `src/index.css` using `@tailwind` directives

## Routing

`src/main.jsx` uses React Router with nested routes under `App.jsx`:
- "/" → `Dashboard`
- "/clubs" → `ManageClubs`
- "/announcements" → `Announcements`
- "/channels" → `ManageChannels`

## Cards usage

Import from `src/components/cards`:

```jsx
import { Card, CardHeader, CardBody, CardFooter, CardGrid, StatCard } from '@/components/cards'
```

Example:

```jsx
<CardGrid columns={{ base: 1, md: 2, xl: 4 }}>
  <StatCard label="Active Clubs" value={42} delta="+4 this week" />
  {/* other cards */}
  
</CardGrid>
```

## Team Guidelines

- Each page owner works in their page file
- New shared card variants go under `cards/variants` and exported in `cards/index.js`
- Shared utilities go in `cards/utils`
- Keep styles via Tailwind utilities; avoid custom CSS unless necessary



