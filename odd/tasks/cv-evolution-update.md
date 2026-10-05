# CV Evolution update

## Objective

Bring the Evolution entries of the portfolio and the generated CV PDF up to date: accurate description, verified tech stack, current links, and fresh screenshots.

## Problem

- The portfolio presents the game client as a Godot project "in development"; it is now a released Svelte 5 web client (v1.1.0) live at https://evoduel.com.
- Tech lists disagree between `Projects.tsx`, `Experience.tsx`, and the PDF, and include stacks the server does not use (Fastify, MongoDB).
- The PDF project entry has no links; screenshots are outdated.

## Scope

- `src/components/Projects.tsx`, `Experience.tsx`, `InProgress.tsx` (plus `App.tsx` only if the in-progress section ends up empty)
- `scripts/generate-cv.js` and the regenerated `public/cv-diango-gavidia.pdf`
- `public/projects/*` screenshots

Out of scope: redesign, other experience entries, email mismatch between portfolio and PDF (reported to the user, not changed).

## Constraints

- Links to show (user-provided, all respond 200): https://evoduel.com/, https://evolutionygo.com/, https://github.com/diangogav/EDOpro-server-ts
- `evolution-card-game` is a private repository (GitHub 404): never link it.
- Site and CV copy stay in Spanish (existing project convention).
- Verified stack. Client: Svelte 5, TypeScript, Vite, GSAP, WebSocket (binary EDOpro protocol), PWA, Paraglide i18n (en/es), Vitest + fast-check, hexagonal architecture. Server: Node.js, TypeScript, Express, ws, PostgreSQL (TypeORM), Redis. API: Bun, Elysia, PostgreSQL.
- TDD: strict mode is configured globally, but this repository has no test runner; ordinary checks apply (`npm run lint`, `npm run build`, PDF generation and visual readback).

## Tasks

- [x] T1 Capture screenshots from production (home, deck builder, duel board, evolutionygo.com) into `public/projects/`. Route: delegated (browser automation, multi-step).
- [x] T2 Rewrite Evolution content in the portfolio components and the CV template. Route: delegated (4 non-trivial files).
- [x] T3 Regenerate the PDF, run lint and build, visually verify the PDF and the projects section. Route: inline.

## Delivery

Forecast under 400 authored changed lines; single PR slice, strategy `ask-on-risk`.

## Progress

- Branch `feat/cv-evolution-update` created from `main`.
- T1 done: four 1600x900 PNGs captured from production as a guest (one AI duel, surrendered afterwards). An earlier scripted run may have left one bot room to time out.
- T2 done: two project entries (Evolution Duel, Evolution YGO), Evolution experience rewritten, Godot entry removed (in-progress section no longer renders), PDF template mirrored with clickable links.
- T3 done: `npm run lint` clean, `npm run build` passes, PDF regenerated and confirmed 1 page (A4). The projects section moved to the PDF sidebar because it no longer fit in the main column.
- PDF generation needs `PUPPETEER_EXECUTABLE_PATH` pointing at a complete cached Chrome on this machine (the default cached build is incomplete).
- Removed unused `public/projects/evolution.png` and `evolution-game.png`.

## Follow-ups (not done, user decision)

- Portfolio email (`djangodev@gmail.com`) differs from the PDF email (`diangogavidia@gmail.com`).
- "Godot" skill tag remains in `Skills.tsx` and the PDF skills; MongoDB remains where other jobs used it.
