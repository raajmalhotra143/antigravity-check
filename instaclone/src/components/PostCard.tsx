'use client'

import { useState } from 'react'

const DEMO_IMAGES = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=80',
  'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80',
  'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=400&q=80',
]

type PostCardProps = {
  post: {
    id: string
    image_url?: string
    caption?: string
    location?: string
    created_at: string
    likes?: number
    comments?: number
    creator?: {
      username: string
      avatar_url?: string
    }
  }
  seed?: number
}

export default function PostCard({ post, seed = 0 }: PostCardProps) {
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)
  const [likeCount, setLikeCount] = useState(post.likes ?? Math.floor(Math.random() * 2000) + 50)
  const demoImage = DEMO_IMAGES[seed % DEMO_IMAGES.length]
  const imageUrl = post.image_url || demoImage
  const username = post.creator?.username || 'user'
  const avatar = post.creator?.avatar_url

  const handleLike = () => {
    setLiked((prev) => !prev)
    setLikeCount((c) => liked ? c - 1 : c + 1)
  }

  const timeAgo = () => {
    const diff = Date.now() - new Date(post.created_at).getTime()
    const hours = Math.floor(diff / 3600000)
    if (hours < 1) return 'just now'
    if (hours < 24) return `${hours}h ago`
    return `${Math.floor(hours / 24)}d ago`
  }

  return (
    <article className="post-card">
      {/* Header */}
      <div className="post-header">
        <div className="post-user">
          <div className="avatar-ring" style={{ cursor: 'pointer' }}>
            <div
              className="avatar-inner"
              style={{ width: 36, height: 36, background: avatar ? undefined : 'var(--gradient-instagram)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: 'white' }}
            >
              {avatar
                ? <img src={avatar} alt={username} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                : username[0]?.toUpperCase()
              }
            </div>
          </div>
          <div>
            <div className="post-username">{username}</div>
            {post.location && <div className="post-location">{post.location}</div>}
          </div>
        </div>
        <button className="btn-ghost" style={{ width: 32, height: 32, borderRadius: '50%' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/>
          </svg>
        </button>
      </div>

      {/* Image */}
      <div className="post-image-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageUrl} alt={post.caption || 'post'} loading="lazy" />
      </div>

      {/* Actions */}
      <div className="post-actions">
        <button className={`post-action-btn${liked ? ' liked' : ''}`} onClick={handleLike}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill={liked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
        <button className="post-action-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </button>
        <button className="post-action-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
        </button>
        <button className={`post-action-btn post-save-btn${saved ? ' saved' : ''}`} onClick={() => setSaved(s => !s)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill={saved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
          </svg>
        </button>
      </div>

      {/* Likes */}
      <div className="post-likes">{likeCount.toLocaleString()} likes</div>

      {/* Caption */}
      {post.caption && (
        <div className="post-caption">
          <span className="username">{username}</span>
          {post.caption}
        </div>
      )}

      {/* Comments link */}
      <div className="post-comments-link">
        View all {post.comments ?? Math.floor(Math.random() * 100) + 5} comments
      </div>

      {/* Timestamp */}
      <div className="post-timestamp">{timeAgo()}</div>
    </article>
  )
}
