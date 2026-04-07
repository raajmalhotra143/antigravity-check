const DEMO_POSTS_IMAGES = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=80',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&q=80',
  'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&q=80',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&q=80',
  'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=300&q=80',
  'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=300&q=80',
  'https://images.unsplash.com/photo-1514565131-fce0801e6785?w=300&q=80',
  'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=300&q=80',
  'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=300&q=80',
]

export default function ProfilePage() {
  return (
    <div style={{ maxWidth: '935px', margin: '0 auto' }}>
      {/* Header */}
      <div className="profile-header">
        <div className="profile-avatar">
          <div className="avatar-ring">
            <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: 'var(--gradient-instagram)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 48, fontWeight: 800, border: '3px solid var(--color-bg-primary)' }}>
              F
            </div>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
            <h1 style={{ fontSize: 20, fontWeight: 400 }}>faiz_dev</h1>
            <button className="btn btn-secondary" style={{ padding: '6px 16px' }}>Edit profile</button>
            <button className="btn btn-secondary" style={{ padding: '6px 16px' }}>View archive</button>
            <button className="btn-ghost" style={{ padding: 4 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>
              </svg>
            </button>
          </div>
          <div className="profile-stats">
            <div className="profile-stat"><strong>9</strong><span>posts</span></div>
            <div className="profile-stat"><strong>1.2K</strong><span>followers</span></div>
            <div className="profile-stat"><strong>847</strong><span>following</span></div>
          </div>
          <div style={{ marginTop: '12px' }}>
            <div style={{ fontWeight: 600, fontSize: 14 }}>Faiz Malhotra</div>
            <div className="profile-bio" style={{ marginTop: 4 }}>
              🚀 Full stack developer<br/>
              📸 Photography enthusiast<br/>
              🌍 Building cool things
            </div>
          </div>
        </div>
      </div>

      {/* Tab bar */}
      <div style={{ display: 'flex', borderTop: '1px solid var(--color-border)' }}>
        {[
          { label: 'POSTS', icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> },
          { label: 'REELS', icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="2"/><polygon points="10 8 16 12 10 16 10 8" fill="white"/></svg> },
          { label: 'SAVED', icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg> },
          { label: 'TAGGED', icon: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
        ].map((tab, i) => (
          <button
            key={tab.label}
            style={{
              flex: 1, padding: '12px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              fontSize: 11, fontWeight: 600, letterSpacing: '0.08em',
              color: i === 0 ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
              borderTop: i === 0 ? '2px solid var(--color-text-primary)' : '2px solid transparent',
              borderLeft: 'none', borderRight: 'none', borderBottom: 'none',
              background: 'none', cursor: 'pointer',
            }}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="profile-grid">
        {DEMO_POSTS_IMAGES.map((img, i) => (
          <div key={i} className="explore-cell">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img} alt={`post ${i}`} loading="lazy" />
            <div className="explore-cell-overlay">
              <span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white" style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                {(Math.floor(Math.random() * 5000) + 100).toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
