'use client'
import { useState } from 'react'

export default function CreatePage() {
  const [step, setStep] = useState<'upload' | 'edit'>('upload')
  const [preview, setPreview] = useState<string | null>(null)
  const [caption, setCaption] = useState('')

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setPreview(url)
    setStep('edit')
  }

  return (
    <div style={{ maxWidth: '935px', margin: '0 auto', padding: '40px 24px' }}>
      <h1 style={{ fontSize: 18, fontWeight: 700, marginBottom: '24px' }}>Create new post</h1>

      <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '20px', overflow: 'hidden', minHeight: '500px' }}>
        {step === 'upload' && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '24px', padding: '60px 40px', width: '100%' }}>
            <div style={{ width: 80, height: 80, background: 'var(--color-bg-elevated)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-secondary)" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 20, fontWeight: 300, marginBottom: '8px' }}>Drag photos and videos here</p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: 14 }}>Share with your followers</p>
            </div>
            <label className="btn btn-primary btn-lg" style={{ cursor: 'pointer' }}>
              Select from computer
              <input type="file" accept="image/*,video/*" style={{ display: 'none' }} onChange={handleFile} id="post-file-input" />
            </label>
          </div>
        )}

        {step === 'edit' && preview && (
          <div style={{ display: 'flex', width: '100%', minHeight: '500px' }}>
            {/* Preview */}
            <div style={{ flex: 1, background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '400px' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={preview} alt="preview" style={{ maxHeight: '500px', maxWidth: '100%', objectFit: 'contain' }} />
            </div>

            {/* Edit panel */}
            <div style={{ width: '340px', borderLeft: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--gradient-instagram)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: 13 }}>F</div>
                <span style={{ fontWeight: 600, fontSize: 14 }}>faiz_dev</span>
              </div>

              <textarea
                className="input-field"
                placeholder="Write a caption..."
                value={caption}
                onChange={e => setCaption(e.target.value)}
                id="post-caption"
                style={{ border: 'none', borderRadius: 0, resize: 'none', height: '180px', padding: '12px 16px', borderBottom: '1px solid var(--color-border)' }}
              />

              <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-border)' }}>
                <input className="input-field" placeholder="Add location" style={{ border: 'none', padding: 0, background: 'none', outline: 'none' }} />
              </div>

              <div style={{ padding: '16px', marginTop: 'auto' }}>
                <button className="btn btn-primary btn-block btn-lg" id="post-share-btn">
                  Share
                </button>
                <button className="btn btn-secondary btn-block" style={{ marginTop: 8 }} onClick={() => { setStep('upload'); setPreview(null) }}>
                  Discard
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
