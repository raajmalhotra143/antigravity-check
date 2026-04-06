# REQUIREMENTS.md — Modern Instagram-like App

## Milestone 1: Foundation & Core Social Features

### Must-Have (P0)

#### Authentication
- [ ] **REQ-001** — Email/password signup and login via Supabase Auth
- [ ] **REQ-002** — OAuth login (Google) via Supabase Auth
- [ ] **REQ-003** — Persistent session management (JWT, refresh tokens)
- [ ] **REQ-004** — Logout and session invalidation
- [ ] **REQ-005** — Protected routes — redirect unauthenticated users to Login

#### User Profiles
- [ ] **REQ-006** — Public user profile page (username, avatar, bio, post grid, follower/following count)
- [ ] **REQ-007** — Edit profile (username, bio, avatar upload to Supabase Storage)
- [ ] **REQ-008** — Follow / unfollow users
- [ ] **REQ-009** — Followers and following lists

#### Posts
- [ ] **REQ-010** — Create post — upload image/video (Supabase Storage), add caption, optional location
- [ ] **REQ-011** — Delete own post
- [ ] **REQ-012** — Like / unlike a post
- [ ] **REQ-013** — Comment on a post
- [ ] **REQ-014** — Delete own comment
- [ ] **REQ-015** — Save / unsave (bookmark) a post
- [ ] **REQ-016** — Post detail modal (full image, caption, comments, likes)

#### Feed
- [ ] **REQ-017** — Home feed — paginated posts from followed users (infinite scroll)
- [ ] **REQ-018** — Home feed dashboard — highlighted stats/activity summary
- [ ] **REQ-019** — Explore page — trending posts and user discovery

#### Reels
- [ ] **REQ-020** — Reels viewing page — short-form video feed with autoplay, loop, like

#### Messaging
- [ ] **REQ-021** — Direct messages — 1:1 conversation list
- [ ] **REQ-022** — Real-time message delivery via Supabase Realtime
- [ ] **REQ-023** — Message read receipts

#### Notifications
- [ ] **REQ-024** — Notification feed — likes, comments, follows, mentions
- [ ] **REQ-025** — Real-time notification delivery via Supabase Realtime
- [ ] **REQ-026** — Mark notifications as read

#### Settings
- [ ] **REQ-027** — Account settings — change password, delete account
- [ ] **REQ-028** — Privacy settings — private/public account toggle

#### Backend / Database
- [ ] **REQ-029** — Supabase PostgreSQL schema — users, posts, likes, comments, follows, messages, notifications, saved_posts tables
- [ ] **REQ-030** — Row-Level Security (RLS) policies on all tables
- [ ] **REQ-031** — Supabase Storage buckets — avatars, posts (images/videos)
- [ ] **REQ-032** — Database triggers — auto-create notification on like/comment/follow

#### Frontend / UI
- [ ] **REQ-033** — Next.js app with routing matching all 13 Stitch screens
- [ ] **REQ-034** — Stitch Modern Insta UI design system (dark-mode, glassmorphism, typography tokens)
- [ ] **REQ-035** — Mobile-first responsive layout
- [ ] **REQ-036** — Loading skeletons and optimistic UI updates
- [ ] **REQ-037** — Image optimisation (next/image or Supabase transform)

#### Deployment
- [ ] **REQ-038** — Vercel project linked to repo, with preview deployments on PRs
- [ ] **REQ-039** — Environment variables managed via Vercel dashboard (Supabase URL, anon key, service key)
- [ ] **REQ-040** — Production domain configured

### Should-Have (P1)

- [ ] **REQ-041** — Search — search users and posts by keyword/tag
- [ ] **REQ-042** — Hashtag pages — posts grouped by hashtag
- [ ] **REQ-043** — Mention autocomplete in comments/captions
- [ ] **REQ-044** — Post tagging — tag other users in posts
- [ ] **REQ-045** — Image cropper / filter UI before upload

### Nice-to-Have (P2)

- [ ] **REQ-046** — Dark / light mode toggle (dark default)
- [ ] **REQ-047** — Progressive Web App (PWA) manifest + service worker
- [ ] **REQ-048** — Infinite scroll with virtualisation (react-window)

### Out of Scope

- Stories (ephemeral 24h content) — v2
- Live streaming — v2
- Ads / sponsored content — future
- Native mobile apps — web-only

---

## Acceptance Criteria

- All P0 requirements functional and passing manual UAT
- RLS verified — no data leakage between users
- Vercel production deployment live with custom domain
- All 13 Stitch screens implemented and pixel-accurate to design system
- Lighthouse performance score ≥ 80 on mobile
