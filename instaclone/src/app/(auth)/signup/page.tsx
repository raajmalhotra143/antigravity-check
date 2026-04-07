'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

export default function SignupPage() {
  const [form, setForm] = useState({ email: '', username: '', fullName: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const supabase = createClient()

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { data, error: signUpError } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: { data: { username: form.username, full_name: form.fullName } },
    })

    if (signUpError) {
      setError(signUpError.message)
      setLoading(false)
      return
    }

    if (data.user) {
      await supabase.from('profiles').insert({
        id: data.user.id,
        username: form.username,
        full_name: form.fullName,
      })
      router.push('/')
      router.refresh()
    }
    setLoading(false)
  }

  return (
    <div className="auth-page">
      <div style={{ width: '100%', maxWidth: '400px' }}>
        <div className="auth-card animate-slidein">
          <div className="auth-logo">
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
              <div style={{ width: 56, height: 56, background: 'var(--gradient-instagram)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="white"/>
                </svg>
              </div>
            </div>
            <h1>Sign up</h1>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', marginTop: '4px', textAlign: 'center' }}>
              Sign up to see photos and videos from your friends.
            </p>
          </div>

          <form className="auth-form" onSubmit={handleSignup}>
            <button
              type="button"
              className="btn btn-secondary btn-block"
              style={{ padding: '10px', gap: '8px' }}
              onClick={() => supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: `${location.origin}/` } })}
            >
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>

            <div className="auth-divider">or</div>

            <input className="input-field" type="email" id="signup-email" placeholder="Email address" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
            <input className="input-field" type="text" id="signup-fullname" placeholder="Full Name" required value={form.fullName} onChange={e => setForm(f => ({ ...f, fullName: e.target.value }))} />
            <input className="input-field" type="text" id="signup-username" placeholder="Username" required value={form.username} onChange={e => setForm(f => ({ ...f, username: e.target.value.toLowerCase().replace(/\s/g, '') }))} />
            <input className="input-field" type="password" id="signup-password" placeholder="Password" required value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))} />

            {error && (
              <div style={{ color: 'var(--color-accent-primary)', fontSize: '13px', textAlign: 'center' }}>{error}</div>
            )}

            <button className="btn btn-primary btn-block btn-lg" type="submit" disabled={loading} id="signup-submit">
              {loading ? 'Creating account...' : 'Sign up'}
            </button>

            <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', textAlign: 'center', lineHeight: 1.5 }}>
              By signing up, you agree to our <a href="#" style={{ color: 'inherit' }}>Terms</a>, <a href="#" style={{ color: 'inherit' }}>Privacy Policy</a> and <a href="#" style={{ color: 'inherit' }}>Cookies Policy</a>.
            </p>
          </form>
        </div>

        <div className="auth-card" style={{ marginTop: '12px', textAlign: 'center', padding: '20px' }}>
          <span style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>Have an account? </span>
          <Link href="/login" className="auth-link">Log in</Link>
        </div>
      </div>
    </div>
  )
}
