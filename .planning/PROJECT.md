# PROJECT.md — Modern Instagram-like Social Media App

## What This Is

A full-featured Instagram-inspired social media platform built with a modern web stack. Users can create accounts, share photos and short videos (Reels), follow each other, like and comment on posts, explore content, send direct messages, and receive notifications. The app is deployed on Vercel with Supabase powering the database, authentication, file storage, and real-time features.

## Core Value

Enable users to share moments, discover content, and connect with others through a visually-rich, performant social media experience — with a modern polished UI matching the Stitch design system (Modern Insta UI).

## Context

- **Stack:** Next.js (Vite/React), Supabase (PostgreSQL + Auth + Storage + Realtime + RLS), Vercel deployment
- **Design:** Modern Insta UI Stitch design system — dark-mode-first, glassmorphism accents, mobile-first responsive
- **Screens (from Stitch):** Login, Signup, Home Feed, Home Feed Dashboard, Explore, Reels Viewing, Messages, Notifications, Create Post Modal, Post Detail Modal, User Profile, Edit Profile, Settings
- **Auth:** Supabase Auth (email/password + OAuth providers)
- **Storage:** Supabase Storage for images and video uploads
- **Real-time:** Supabase Realtime for live notifications and messages
- **Deployment:** Vercel (preview + production environments)

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] User authentication — signup, login, logout (email + OAuth)
- [ ] User profiles — avatar, bio, username, follower/following counts
- [ ] Post creation — image/video upload with caption, location, tags
- [ ] Home feed — paginated feed of posts from followed users
- [ ] Explore page — discover trending posts and users
- [ ] Reels — short-form video feed with autoplay
- [ ] Post interactions — like, comment, save/bookmark
- [ ] Post detail modal — full post view with comments
- [ ] Direct messages — real-time 1:1 conversations
- [ ] Notifications — likes, comments, follows, mentions
- [ ] Follow / unfollow users
- [ ] Edit profile — update avatar, bio, username
- [ ] Settings — privacy controls, account management
- [ ] Row-Level Security (RLS) on all Supabase tables
- [ ] Responsive mobile-first UI matching Stitch design system
- [ ] Vercel deployment with environment variable management

### Out of Scope

- Stories (Instagram stories) — deferred to v2
- Ads / monetization — outside scope
- Live streaming — deferred to v2
- Third-party analytics dashboard — deferred to v2
- Mobile native apps (iOS/Android) — web-only for now

## Key Decisions

| Decision | Rationale | Outcome |
|---|---|---|
| Supabase over Firebase | PostgreSQL relations, RLS, open source, better querying | Chosen |
| Next.js over plain React | SSR/SSG for SEO, file-based routing, Vercel-native | Chosen |
| Dark-mode-first design | Matches Stitch Modern Insta UI, premium feel | Chosen |
| Stitch design system | Pre-built screens, consistent tokens, faster UI development | Chosen |
| Vercel deployment | Supabase-native integration, preview deployments, zero-config | Chosen |

---
*Last updated: 2026-04-07 after initialization*

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state
