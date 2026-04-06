# STATE.md — Project Memory

## Current Status

- **Milestone:** 1 — Core Social Media App
- **Current Phase:** 0 (not started — run `/gsd-plan-phase 1` to begin)
- **Mode:** YOLO
- **Last Updated:** 2026-04-07

## Project Identity

- **Name:** Modern Instagram-like Social Media App
- **Stack:** Next.js, Supabase, Vercel
- **Design Source:** Stitch Modern Insta UI (`stitch_screens/`, `stitch_assets/`)

## Phase Progress

| Phase | Title | Status |
|---|---|---|
| 1 | Project Scaffold & Design System | ⬜ Not started |
| 2 | Supabase Setup & Database Schema | ⬜ Not started |
| 3 | Authentication Screens & Logic | ⬜ Not started |
| 4 | User Profiles & Follow System | ⬜ Not started |
| 5 | Post Creation & Interactions | ⬜ Not started |
| 6 | Home Feed & Explore | ⬜ Not started |
| 7 | Reels | ⬜ Not started |
| 8 | Direct Messages | ⬜ Not started |
| 9 | Notifications | ⬜ Not started |
| 10 | Settings & Deployment | ⬜ Not started |

## Key Files

- `.planning/PROJECT.md` — project vision and requirements
- `.planning/REQUIREMENTS.md` — full requirements with REQ IDs
- `.planning/ROADMAP.md` — phased execution plan
- `stitch_screens/` — Stitch HTML screen files (UI source of truth)
- `stitch_assets/` — Stitch design system ZIPs (color, type, spacing tokens)

## Notes

- UI MUST match Stitch design system exactly — extract tokens from `stitch_assets/` ZIPs in Phase 1 before implementing any screens
- Each screen phase references specific `stitch_screens/*.html` files as the porting target
- Supabase credentials go in `.env.local` (never committed) and Vercel dashboard
