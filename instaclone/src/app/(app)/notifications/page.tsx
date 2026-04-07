const NOTIFICATIONS = [
  { id: '1', type: 'like', username: 'alex_m', text: 'liked your photo.', time: '2 minutes ago', unread: true, bg: '#833ab4', thumb: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=80&q=80' },
  { id: '2', type: 'follow', username: 'sara.ph', text: 'started following you.', time: '15 minutes ago', unread: true, bg: '#e1306c', thumb: null },
  { id: '3', type: 'comment', username: 'travel_jay', text: 'commented: "This is amazing! 😍"', time: '1 hour ago', unread: true, bg: '#f77737', thumb: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=80&q=80' },
  { id: '4', type: 'like', username: 'foodie99', text: 'liked your photo.', time: '2 hours ago', unread: false, bg: '#0095f6', thumb: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=80&q=80' },
  { id: '5', type: 'follow', username: 'nat.wild', text: 'started following you.', time: '5 hours ago', unread: false, bg: '#405de6', thumb: null },
  { id: '6', type: 'comment', username: 'j_codes', text: 'commented: "Love this! Where is it?"', time: '1 day ago', unread: false, bg: '#fd1d1d', thumb: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=80&q=80' },
  { id: '7', type: 'like', username: 'yuki_sg', text: 'and 23 others liked your photo.', time: '2 days ago', unread: false, bg: '#833ab4', thumb: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=80&q=80' },
]

export default function NotificationsPage() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px 0' }}>
      <div style={{ padding: '0 16px 16px', fontWeight: 700, fontSize: 20 }}>Notifications</div>

      {/* New */}
      <div style={{ padding: '8px 16px', fontSize: 13, fontWeight: 600, color: 'var(--color-text-secondary)' }}>New</div>
      {NOTIFICATIONS.filter(n => n.unread).map(notif => (
        <div key={notif.id} className={`notification-item${notif.unread ? ' unread' : ''}`}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: notif.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, flexShrink: 0 }}>
            {notif.username[0].toUpperCase()}
          </div>
          <div className="notification-text">
            <strong>{notif.username}</strong> <span>{notif.text}</span>
            <div className="notification-time" style={{ marginTop: 2 }}>{notif.time}</div>
          </div>
          {notif.thumb && (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="notification-thumb" src={notif.thumb} alt="post thumbnail" />
          )}
          {notif.type === 'follow' && (
            <button className="btn-follow" style={{ flexShrink: 0 }}>Follow</button>
          )}
        </div>
      ))}

      {/* Earlier */}
      <div style={{ padding: '16px 16px 8px', fontSize: 13, fontWeight: 600, color: 'var(--color-text-secondary)' }}>Earlier</div>
      {NOTIFICATIONS.filter(n => !n.unread).map(notif => (
        <div key={notif.id} className="notification-item">
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: notif.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, flexShrink: 0 }}>
            {notif.username[0].toUpperCase()}
          </div>
          <div className="notification-text">
            <strong>{notif.username}</strong> <span>{notif.text}</span>
            <div className="notification-time" style={{ marginTop: 2 }}>{notif.time}</div>
          </div>
          {notif.thumb && (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="notification-thumb" src={notif.thumb} alt="post thumbnail" />
          )}
          {notif.type === 'follow' && (
            <button className="btn-secondary btn" style={{ flexShrink: 0, padding: '4px 12px', fontSize: 12 }}>Follow</button>
          )}
        </div>
      ))}
    </div>
  )
}
