'use client'
import { useState } from 'react'

export default function SettingsPage() {
  const [privateAccount, setPrivateAccount] = useState(false)
  const [pushNotifs, setPushNotifs] = useState(true)
  const [emailNotifs, setEmailNotifs] = useState(false)

  const Toggle = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => (
    <div
      onClick={onChange}
      style={{
        width: 44, height: 24, borderRadius: 12, cursor: 'pointer', transition: 'background 0.2s',
        background: checked ? '#0095f6' : 'var(--color-bg-elevated)',
        border: '1px solid var(--color-border)', position: 'relative', flexShrink: 0,
      }}
    >
      <div style={{
        width: 18, height: 18, borderRadius: '50%', background: 'white',
        position: 'absolute', top: '2px', transition: 'left 0.2s',
        left: checked ? '22px' : '3px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.3)',
      }}/>
    </div>
  )

  const SettingRow = ({ label, desc, onClick }: { label: string; desc?: string; onClick?: () => void }) => (
    <div onClick={onClick} style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '14px 20px', borderBottom: '1px solid var(--color-border-subtle)',
      cursor: onClick ? 'pointer' : 'default', transition: 'background 0.15s',
    }}
    onMouseEnter={e => { if(onClick) (e.currentTarget as HTMLElement).style.background = 'var(--color-bg-elevated)' }}
    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}
    >
      <div>
        <div style={{ fontWeight: 500, fontSize: 14 }}>{label}</div>
        {desc && <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', marginTop: 2 }}>{desc}</div>}
      </div>
      {onClick && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>}
    </div>
  )

  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div style={{ marginBottom: '24px' }}>
      <div style={{ padding: '8px 20px', fontSize: 12, fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{title}</div>
      <div className="card" style={{ borderRadius: '12px', overflow: 'hidden' }}>{children}</div>
    </div>
  )

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px 24px' }}>
      <h1 style={{ fontSize: 20, fontWeight: 700, marginBottom: '24px' }}>Settings</h1>

      <Section title="Account">
        <SettingRow label="Edit Profile" onClick={() => {}} />
        <SettingRow label="Change Password" onClick={() => {}} />
        <SettingRow label="Email address" desc="faiz@example.com" onClick={() => {}} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', borderBottom: '1px solid var(--color-border-subtle)' }}>
          <div>
            <div style={{ fontWeight: 500, fontSize: 14 }}>Private Account</div>
            <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', marginTop: 2 }}>Only approved followers can see your posts</div>
          </div>
          <Toggle checked={privateAccount} onChange={() => setPrivateAccount(p => !p)} />
        </div>
      </Section>

      <Section title="Notifications">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', borderBottom: '1px solid var(--color-border-subtle)' }}>
          <div>
            <div style={{ fontWeight: 500, fontSize: 14 }}>Push Notifications</div>
            <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', marginTop: 2 }}>Likes, comments, follows</div>
          </div>
          <Toggle checked={pushNotifs} onChange={() => setPushNotifs(p => !p)} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px' }}>
          <div>
            <div style={{ fontWeight: 500, fontSize: 14 }}>Email Notifications</div>
            <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', marginTop: 2 }}>Weekly activity digest</div>
          </div>
          <Toggle checked={emailNotifs} onChange={() => setEmailNotifs(p => !p)} />
        </div>
      </Section>

      <Section title="Privacy">
        <SettingRow label="Blocked Accounts" onClick={() => {}} />
        <SettingRow label="Close Friends" onClick={() => {}} />
        <SettingRow label="Muted Accounts" onClick={() => {}} />
      </Section>

      <Section title="About">
        <SettingRow label="Help Center" onClick={() => {}} />
        <SettingRow label="Privacy Policy" onClick={() => {}} />
        <SettingRow label="Terms of Service" onClick={() => {}} />
        <div style={{ padding: '10px 20px', fontSize: 12, color: 'var(--color-text-muted)' }}>Version 1.0.0</div>
      </Section>

      <div className="card" style={{ borderRadius: '12px', overflow: 'hidden' }}>
        <button style={{ width: '100%', padding: '14px 20px', color: 'var(--color-accent-primary)', fontWeight: 600, fontSize: 14, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
          Log out
        </button>
        <button style={{ width: '100%', padding: '14px 20px', color: '#ff3b30', fontWeight: 600, fontSize: 14, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', borderTop: '1px solid var(--color-border-subtle)' }}>
          Delete account
        </button>
      </div>
    </div>
  )
}
