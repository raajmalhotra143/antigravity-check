'use client'
import { useState } from 'react'

const CONVERSATIONS = [
  { id: '1', username: 'alex_m', lastMessage: 'That photo was 🔥', time: '2m', unread: 2, bg: '#833ab4' },
  { id: '2', username: 'sara.ph', lastMessage: 'See you tomorrow!', time: '15m', unread: 0, bg: '#e1306c' },
  { id: '3', username: 'travel_jay', lastMessage: 'Where is that?? 😍', time: '1h', unread: 1, bg: '#f77737' },
  { id: '4', username: 'foodie99', lastMessage: 'Recipe please 🙏', time: '3h', unread: 0, bg: '#0095f6' },
  { id: '5', username: 'nat.wild', lastMessage: 'Haha exactly', time: '1d', unread: 0, bg: '#405de6' },
]

const MESSAGES_BY_CONVO: Record<string, Array<{id:string;text:string;sent:boolean;time:string}>> = {
  '1': [
    { id: '1', text: 'Hey! How are you?', sent: false, time: '2:40 PM' },
    { id: '2', text: "I'm great! Just posted that mountain shot 📸", sent: true, time: '2:41 PM' },
    { id: '3', text: 'That photo was 🔥', sent: false, time: '2:42 PM' },
  ],
  '2': [
    { id: '1', text: 'Are you coming to the event?', sent: false, time: '11:30 AM' },
    { id: '2', text: 'Yes definitely!', sent: true, time: '11:32 AM' },
    { id: '3', text: 'See you tomorrow!', sent: false, time: '11:33 AM' },
  ],
}

export default function MessagesPage() {
  const [activeConvo, setActiveConvo] = useState(CONVERSATIONS[0])
  const [newMessage, setNewMessage] = useState('')
  const messages = MESSAGES_BY_CONVO[activeConvo.id] || []

  return (
    <div className="messages-layout">
      {/* Conversation list */}
      <div className="conversation-list">
        <div style={{ padding: '16px', borderBottom: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontWeight: 700, fontSize: 16 }}>Messages</span>
          <button className="btn-ghost" style={{ padding: 4 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
            </svg>
          </button>
        </div>
        {CONVERSATIONS.map(convo => (
          <div
            key={convo.id}
            className={`conversation-item${activeConvo.id === convo.id ? ' active' : ''}`}
            onClick={() => setActiveConvo(convo)}
          >
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: convo.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, flexShrink: 0 }}>
              {convo.username[0].toUpperCase()}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="conversation-name" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>{convo.username}</span>
                <span style={{ fontSize: 11, color: 'var(--color-text-muted)', fontWeight: 400 }}>{convo.time}</span>
              </div>
              <div className="conversation-preview" style={{ fontWeight: convo.unread ? 600 : 400 }}>
                {convo.lastMessage}
              </div>
            </div>
            {convo.unread > 0 && (
              <div className="nav-badge">{convo.unread}</div>
            )}
          </div>
        ))}
      </div>

      {/* Thread */}
      <div className="message-thread">
        <div className="message-thread-header">
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: activeConvo.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700 }}>
            {activeConvo.username[0].toUpperCase()}
          </div>
          <div>
            <div style={{ fontWeight: 600 }}>{activeConvo.username}</div>
            <div style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>Active now</div>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
            <button className="btn-ghost" style={{ padding: 8 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44A2 2 0 0 1 3.58 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.12 6.12l1.08-1.08a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </button>
            <button className="btn-ghost" style={{ padding: 8 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
            </button>
          </div>
        </div>

        <div className="messages-area">
          {messages.map(msg => (
            <div key={msg.id} className={`message-bubble ${msg.sent ? 'sent' : 'received'}`}>
              {msg.text}
            </div>
          ))}
        </div>

        <div className="message-input-bar">
          <button className="btn-ghost" style={{ padding: 4 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
          </button>
          <input
            className="message-input"
            placeholder="Message..."
            value={newMessage}
            onChange={e => setNewMessage(e.target.value)}
            id="message-input"
          />
          {newMessage.trim() && (
            <button className="btn-follow" onClick={() => setNewMessage('')}>Send</button>
          )}
          {!newMessage.trim() && (
            <>
              <button className="btn-ghost" style={{ padding: 4 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
              </button>
              <button className="btn-ghost" style={{ padding: 4 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
