'use client'
import { useState } from 'react'

const REEL_ITEMS = [
  { id: '1', username: 'alex_m', description: 'Golden hour vibes 🌅 #photography #travel', likes: 12400, comments: 234, audio: 'Original Audio — alex_m' },
  { id: '2', username: 'sara.ph', description: 'City nights never get old ✨ #citylife #nyc', likes: 8923, comments: 167, audio: 'Blinding Lights — The Weeknd' },
  { id: '3', username: 'travel_jay', description: 'Bali sunrise 🌄 worth the 4am wake up!', likes: 23500, comments: 512, audio: 'Sunset — Remi Wolf' },
]

const BG_GRADIENTS = [
  'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  'linear-gradient(135deg, #0d0d0d 0%, #1a0a00 50%, #2d1000 100%)',
  'linear-gradient(135deg, #0a0a1a 0%, #100a2d 50%, #1a0a3d 100%)',
]

export default function ReelsPage() {
  const [likedReels, setLikedReels] = useState<Set<string>>(new Set())
  const [muted, setMuted] = useState(true)

  const toggleLike = (id: string) => {
    setLikedReels(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <div style={{ height: '100vh', overflowY: 'scroll', scrollSnapType: 'y mandatory' }}>
      {REEL_ITEMS.map((reel, i) => (
        <div className="reel-container" key={reel.id} style={{ background: BG_GRADIENTS[i] }}>
          {/* Simulated video background */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '100%', maxWidth: '400px', aspectRatio: '9/16', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="rgba(255,255,255,0.15)" style={{ filter: 'blur(1px)' }}>
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            </div>
          </div>

          <div className="reel-overlay"/>

          {/* Right controls */}
          <div className="reel-controls">
            {/* User avatar */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--gradient-instagram)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, border: '2px solid white' }}>
                {reel.username[0].toUpperCase()}
              </div>
              <div style={{ width: 20, height: 20, background: '#0095f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '-12px', border: '1.5px solid white' }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="white" stroke="none"><line x1="12" y1="5" x2="12" y2="19" stroke="white" strokeWidth="3"/><line x1="5" y1="12" x2="19" y2="12" stroke="white" strokeWidth="3"/></svg>
              </div>
            </div>

            <div className="reel-action" onClick={() => toggleLike(reel.id)}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill={likedReels.has(reel.id) ? '#e1306c' : 'white'} stroke={likedReels.has(reel.id) ? 'none' : 'white'} strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              <span style={{ color: 'white' }}>{(reel.likes / 1000).toFixed(1)}K</span>
            </div>

            <div className="reel-action">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              <span style={{ color: 'white' }}>{reel.comments}</span>
            </div>

            <div className="reel-action">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
              <span style={{ color: 'white' }}>Share</span>
            </div>

            <div className="reel-action" onClick={() => setMuted(m => !m)}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                {muted
                  ? <><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></>
                  : <><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></>
                }
              </svg>
            </div>
          </div>

          {/* Bottom info */}
          <div className="reel-info">
            <div style={{ fontWeight: 700, color: 'white', marginBottom: '8px', fontSize: '15px' }}>@{reel.username}</div>
            <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px', marginBottom: '12px', lineHeight: 1.5 }}>{reel.description}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
              <span>{reel.audio}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
