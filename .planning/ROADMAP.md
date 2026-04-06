# ROADMAP.md — Modern Instagram-like App (Milestone 1)

> **Stack:** Next.js · Supabase (PostgreSQL + Auth + Storage + Realtime + RLS) · Vercel
> **Design:** Stitch Modern Insta UI — screens in `stitch_screens/`, tokens in `stitch_assets/`
> **Mode:** YOLO · Standard granularity · Parallel execution

---

## Phase 1 — Project Scaffold & Design System

**Goal:** Bootstrap the Next.js project, extract the Stitch design system tokens from `stitch_assets/`, and create a global CSS design system that all screens will use.

**Depends on:** nothing

### Plans

1. **Scaffold Next.js app** — `npx create-next-app@latest` with TypeScript, App Router, Tailwind (or vanilla CSS matching Stitch), ESLint
2. **Extract Stitch design tokens** — unzip `stitch_assets/design_system_1.zip`, `design_system_2.zip`, `design_system_3.zip`, identify color palette, typography, spacing, border-radius, shadow tokens
3. **Global CSS design system** — implement extracted tokens as CSS custom properties in `globals.css`; dark-mode-first, glassmorphism utility classes, font imports
4. **Project structure** — set up `components/`, `app/`, `lib/`, `hooks/`, `types/` directories; configure path aliases
5. **Linting & formatting** — ESLint, Prettier, `.gitignore`, Vercel `vercel.json`

**UAT:** `npm run dev` loads blank app with correct fonts, colors, and dark background matching Stitch design system

---

## Phase 2 — Supabase Setup & Database Schema

**Goal:** Configure Supabase project, create all database tables with correct relationships, enable RLS policies, and set up storage buckets.

**Depends on:** Phase 1

### Plans

1. **Supabase project init** — create Supabase project, store credentials in `.env.local` and Vercel env vars
2. **Database schema migration** — create tables: `profiles`, `posts`, `likes`, `comments`, `follows`, `saved_posts`, `conversations`, `messages`, `notifications`
3. **RLS policies** — write and apply RLS policies for every table (users can only read/write their own data; public read for posts/profiles)
4. **Storage buckets** — create `avatars` and `posts` buckets, set bucket policies (public read for posts)
5. **Database triggers** — auto-create notification rows on like, comment, and follow events
6. **TypeScript types** — generate Supabase TypeScript types with `supabase gen types`

**UAT:** Supabase Studio shows all tables, RLS enabled, storage buckets visible, types file generated

---

## Phase 3 — Authentication Screens & Logic

**Goal:** Implement Login and Signup pages using Stitch screen HTML as base, wired to Supabase Auth.

**Depends on:** Phase 2

### Plans

1. **Auth context / provider** — Supabase client singleton, `useUser` hook, session listener, protected route HOC
2. **Login page** — port `stitch_screens/login_page.html` to Next.js React component, wire to `supabase.auth.signInWithPassword`
3. **Signup page** — port `stitch_screens/signup_page.html`, wire to `supabase.auth.signUp`, auto-create profile row via trigger
4. **OAuth login** — Google OAuth button on Login page via `supabase.auth.signInWithOAuth`
5. **Route guards** — middleware to redirect unauthenticated users; redirect authenticated users away from login/signup

**UAT:** Can sign up, log in, log out; OAuth flow works; unauthenticated users redirected to login

---

## Phase 4 — User Profiles & Follow System

**Goal:** Implement user profile pages, edit profile, and follow/unfollow functionality.

**Depends on:** Phase 3

### Plans

1. **User profile page** — port `stitch_screens/user_profile.html` → dynamic route `/profile/[username]`; fetch posts grid, follower/following counts
2. **Follow / unfollow** — follow button component, optimistic UI update, writes to `follows` table
3. **Followers / following modals** — list of users with follow buttons
4. **Edit profile page** — port `stitch_screens/edit_profile.html`; update bio, username, avatar upload to Supabase Storage `avatars` bucket
5. **Avatar image component** — reusable avatar component with fallback, uses Supabase Storage public URL

**UAT:** Can view any user's profile, follow/unfollow, edit own profile, upload avatar

---

## Phase 5 — Post Creation & Interactions

**Goal:** Implement post creation modal, post detail modal, and all post interaction actions (like, comment, save).

**Depends on:** Phase 4

### Plans

1. **Create post modal** — port `stitch_screens/create_post_modal.html`; image/video upload to `posts` bucket, caption, submit → insert into `posts` table
2. **Post card component** — reusable card with avatar, username, image, like/comment/save action bar, caption
3. **Post detail modal** — port `stitch_screens/post_detail_modal.html`; full image, comments list, comment input
4. **Like / unlike** — optimistic toggle, writes to `likes` table, updates count
5. **Comments** — add/delete comments, real-time updates via Supabase Realtime subscription
6. **Save / unsave** — bookmark post, writes to `saved_posts` table

**UAT:** Can create post with image, like/unlike, comment, save; post detail modal opens correctly

---

## Phase 6 — Home Feed & Explore

**Goal:** Implement the main home feed (followed users' posts), home feed dashboard, and explore page.

**Depends on:** Phase 5

### Plans

1. **Home feed** — port `stitch_screens/home_feed.html`; paginated query of posts from followed users + own posts, infinite scroll
2. **Home feed dashboard** — port `stitch_screens/home_feed_dashboard.html`; activity summary, suggested users
3. **Explore page** — port `stitch_screens/explore_page.html`; trending posts grid, user suggestions, search input
4. **Search** — debounced search by username/hashtag, results page
5. **Suggested users sidebar** — users not yet followed, random/trending selection

**UAT:** Feed shows posts from followed users, explore shows trending, search returns results

---

## Phase 7 — Reels

**Goal:** Implement the Reels viewing page with short-form video feed, autoplay, and interactions.

**Depends on:** Phase 5

### Plans

1. **Reels page** — port `stitch_screens/reels_viewing.html`; full-screen vertical scroll video feed
2. **Video player component** — autoplay on scroll-into-view (IntersectionObserver), loop, mute/unmute toggle
3. **Reel interactions** — like, comment, share actions overlaid on video
4. **Reel upload** — extend create post modal to support video MIME types

**UAT:** Reels page autoplays videos on scroll, like/comment works, videos load from Supabase Storage

---

## Phase 8 — Direct Messages

**Goal:** Implement real-time direct messaging between users.

**Depends on:** Phase 3

### Plans

1. **Messages page** — port `stitch_screens/messages.html`; conversation list UI
2. **Conversation view** — message thread, message bubbles, timestamp
3. **Message input** — send message → insert into `messages` table
4. **Real-time delivery** — Supabase Realtime subscription on conversation channel
5. **Read receipts** — mark messages read, update unread badge

**UAT:** Can start conversation, send/receive messages in real time, unread count updates

---

## Phase 9 — Notifications

**Goal:** Implement notification feed with real-time delivery.

**Depends on:** Phase 5

### Plans

1. **Notifications page** — port `stitch_screens/notifications.html`; list of like/comment/follow/mention notifications
2. **Notification item component** — avatar + action text + post thumbnail + timestamp
3. **Real-time delivery** — Supabase Realtime subscription on `notifications` table for current user
4. **Mark as read** — mark all / individual notifications read, clear unread badge in nav

**UAT:** Notifications appear in real time after like/comment/follow, mark-as-read works

---

## Phase 10 — Settings & Deployment

**Goal:** Implement settings page, finalize all Polish, and deploy to Vercel production.

**Depends on:** Phase 9

### Plans

1. **Settings page** — port `stitch_screens/settings.html`; change password, private/public toggle, delete account
2. **Nav & layout shell** — bottom nav (mobile) / sidebar nav (desktop) with active states, notification badge
3. **Loading states** — skeleton screens for feed, profile, explore; error boundaries
4. **Vercel deployment** — link repo, set env vars (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY), deploy to production
5. **Final QA pass** — test all 13 screens end-to-end, RLS verification, Lighthouse audit

**UAT:** Production URL live, all screens functional, RLS verified, Lighthouse ≥ 80 mobile

---

## Backlog (v2)

- 999.1 — Stories (ephemeral 24h content)
- 999.2 — Live streaming
- 999.3 — Ads / sponsored content
- 999.4 — Native mobile app (React Native + Expo)
- 999.5 — Dark/light mode toggle
- 999.6 — PWA manifest + service worker
