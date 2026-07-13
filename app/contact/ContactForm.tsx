'use client'

import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'
import type { ContactFormStatus, ContactFormValues, ContactResponse } from '../../types/contact'
import TurnstileWidget from './TurnstileWidget'

const DEFAULT_FORM_VALUES: ContactFormValues = {
  name: '',
  email: '',
  projectType: '',
  budget: '',
  brief: '',
}

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormValues>(DEFAULT_FORM_VALUES)
  const [status, setStatus] = useState<ContactFormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const [turnstileResetCounter, setTurnstileResetCounter] = useState(0)

  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ''
  const isTurnstileConfigured = turnstileSiteKey.length > 0

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorMessage(null)

    if (!isTurnstileConfigured) {
      setStatus('error')
      setErrorMessage('Turnstile is not configured yet. Add NEXT_PUBLIC_TURNSTILE_SITE_KEY to enable the form.')
      return
    }

    if (!turnstileToken) {
      setStatus('error')
      setErrorMessage('Please complete the verification challenge before sending your message.')
      return
    }

    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          turnstileToken,
        }),
      })

      const payload = (await res.json()) as ContactResponse
      if (!res.ok || payload.error) throw new Error(payload.error)
      setStatus('success')
      setForm(DEFAULT_FORM_VALUES)
      setTurnstileToken(null)
      setTurnstileResetCounter((value) => value + 1)
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again or email directly.')
      setTurnstileToken(null)
      setTurnstileResetCounter((value) => value + 1)
    }
  }

  const inputClass =
    'w-full px-5 py-3 bg-white text-on-surface placeholder:text-on-surface/40 border border-outline-variant focus:outline-none focus:ring-2 focus:ring-on-surface/15 font-mono text-sm'

  return (
    <form onSubmit={handleSubmit} className="mono-card p-10 flex flex-col gap-6">
      <h2 className="text-2xl font-medium font-headline text-on-surface mb-2">Send a Message</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-mono uppercase tracking-widest text-on-surface-variant">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className={inputClass}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-mono uppercase tracking-widest text-on-surface-variant">Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jane@company.com"
            className={inputClass}
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-mono uppercase tracking-widest text-on-surface-variant">Project Type</label>
        <select
          name="projectType"
          value={form.projectType}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="" disabled>Select project type</option>
          <option value="headless">Headless Architecture</option>
          <option value="wordpress">Enterprise WordPress</option>
          <option value="performance">Performance Audit</option>
          <option value="role">Remote Engineering Role</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-mono uppercase tracking-widest text-on-surface-variant">Budget Range</label>
        <select
          name="budget"
          value={form.budget}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="" disabled>Select budget range</option>
          <option value="5k-15k">$5k–$15k</option>
          <option value="15k-50k">$15k–$50k</option>
          <option value="50k+">$50k+</option>
          <option value="retainer">Retainer / Full-time</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-mono uppercase tracking-widest text-on-surface-variant">Project Brief</label>
        <textarea
          name="brief"
          value={form.brief}
          onChange={handleChange}
          rows={4}
          placeholder="Describe your project, goals, and any technical constraints..."
          className={inputClass}
          required
        />
      </div>

      <div className="flex flex-col gap-3">
        <label className="text-xs font-mono uppercase tracking-widest text-on-surface-variant">Verification</label>
        {isTurnstileConfigured ? (
          <TurnstileWidget
            siteKey={turnstileSiteKey}
            onTokenChange={setTurnstileToken}
            resetCounter={turnstileResetCounter}
          />
        ) : (
          <p className="text-sm font-mono text-on-surface-variant">
            Turnstile site key missing. Add `NEXT_PUBLIC_TURNSTILE_SITE_KEY` to enable submissions.
          </p>
        )}
      </div>

      {status === 'success' && (
        <p className="text-sm font-mono text-on-surface bg-surface-container-low px-4 py-3 border border-outline-variant">
          Message sent. I&apos;ll be in touch shortly.
        </p>
      )}
      {status === 'error' && (
        <p className="text-sm font-mono text-on-surface bg-surface-container px-4 py-3 border border-on-surface">
          {errorMessage ?? 'Something went wrong. Please try again or email directly.'}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading' || !isTurnstileConfigured}
        className="w-full mono-button-primary py-4 text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : 'Initialize Inquiry'}
      </button>
    </form>
  )
}
