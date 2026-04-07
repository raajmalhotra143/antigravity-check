import PostCard from '@/components/PostCard'

const DEMO_POSTS = [
  { id: '1', caption: 'Golden hour in the mountains 🏔️ The light was absolutely magical today.', location: 'Rocky Mountains, CO', created_at: new Date(Date.now() - 2 * 3600000).toISOString(), likes: 1847, comments: 42 },
  { id: '2', caption: 'Morning coffee views ☕ Nothing beats this to start the day!', location: 'San Francisco, CA', created_at: new Date(Date.now() - 5 * 3600000).toISOString(), likes: 934, comments: 18 },
  { id: '3', caption: 'Weekend adventures 🌊 Missing summer already', location: 'Malibu Beach', created_at: new Date(Date.now() - 9 * 3600000).toISOString(), likes: 2103, comments: 67 },
  { id: '4', caption: 'City lights never get old ✨ Love this view from the rooftop', location: 'New York City', created_at: new Date(Date.now() - 14 * 3600000).toISOString(), likes: 3221, comments: 94 },
  { id: '5', caption: 'Nature therapy 🌿 Spent the whole morning here, no regrets', location: 'Yosemite National Park', created_at: new Date(Date.now() - 22 * 3600000).toISOString(), likes: 4892, comments: 127 },
]

const STORY_USERS = [
  { id: '1', username: 'your_story', isOwn: true },
  { id: '2', username: 'alex_m', seen: false },
  { id: '3', username: 'sara.ph', seen: false },
  { id: '4', username: 'travel_jay', seen: true },
  { id: '5', username: 'foodie99', seen: false },
  { id: '6', username: 'nat.wild', seen: true },
  { id: '7', username: 'j_codes', seen: false },
  { id: '8', username: 'yuki_sg', seen: false },
]

const AVATAR_COLORS = ['#833ab4', '#e1306c', '#f77737', '#0095f6', '#405de6', '#fd1d1d', '#833ab4', '#f77737']

export default function HomePage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px 24px', gap: '32px', maxWidth: '935px', margin: '0 auto' }}>
      {/* Feed */}
      <div style={{ flex: 1, maxWidth: '470px', minWidth: 0 }}>
        {/* Stories */}
        <div className="card" style={{ marginBottom: '16px', borderRadius: '16px', overflow: 'hidden' }}>
          <div className="stories-row">
            {STORY_USERS.map((user, i) => (
              <div key={user.id} className="story-item">
                <div className={`story-circle${user.seen ? ' seen' : ''}`}>
                  <div
                    className="story-circle-inner"
                    style={{ background: user.isOwn ? 'var(--color-bg-tertiary)' : AVATAR_COLORS[i], display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 16, fontWeight: 700 }}
                  >
                    {user.isOwn
                      ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                      : user.username[0].toUpperCase()
                    }
                  </div>
                </div>
                <span className="story-label">{user.isOwn ? 'Your story' : user.username}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Posts */}
        {DEMO_POSTS.map((post, i) => (
          <PostCard
            key={post.id}
            post={{ ...post, creator: { username: STORY_USERS[(i + 1) % STORY_USERS.length].username } }}
            seed={i}
          />
        ))}
      </div>

      {/* Right Sidebar */}
      <div style={{ width: '293px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '24px', paddingTop: '8px' }}>
        {/* Profile mini */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--gradient-instagram)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700 }}>
            F
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600 }}>faiz_dev</div>
            <div style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>Faiz Malhotra</div>
          </div>
          <button className="auth-link" style={{ marginLeft: 'auto', fontSize: 13, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>Switch</button>
        </div>

        {/* Suggestions */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-secondary)' }}>Suggested for you</span>
            <button style={{ fontSize: 12, fontWeight: 600, background: 'none', border: 'none', color: 'var(--color-text-primary)', cursor: 'pointer' }}>See All</button>
          </div>
          {STORY_USERS.slice(1, 6).map((user, i) => (
            <div key={user.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: AVATAR_COLORS[i], display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>
                {user.username[0].toUpperCase()}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.username}</div>
                <div style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>Suggested for you</div>
              </div>
              <button className="btn-follow" style={{ padding: '4px 12px', fontSize: 12 }}>Follow</button>
            </div>
          ))}
        </div>

        <div style={{ fontSize: 11, color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
          © 2025 InstaClone from Faiz Malhotra
        </div>
      </div>
    </div>
  )
}
