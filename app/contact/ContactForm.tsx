'use client'

import { useState, useEffect, useRef } from 'react'

interface FormState {
  name: string
  email: string
  company: string
  projectType: string
  message: string
  budget: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  company: '',
  projectType: '',
  message: '',
  budget: '',
}

const inputClass =
  'bg-surface-mid border border-outline text-primary-text placeholder:text-muted ' +
  'rounded-md px-4 py-3 w-full ' +
  'focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue ' +
  'transition-colors duration-150'

const labelClass = 'text-primary-text text-sm font-medium mb-1.5 block'

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const abortRef = useRef<AbortController | null>(null)

  useEffect(() => {
    return () => abortRef.current?.abort()
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status === 'loading') return

    if (!form.name.trim() || !form.email.trim()) {
      setStatus('error')
      setErrorMessage('Name and email are required.')
      return
    }
    if (form.message.trim().length < 20) {
      setStatus('error')
      setErrorMessage('Message must be at least 20 characters.')
      return
    }

    abortRef.current?.abort()
    abortRef.current = new AbortController()

    setStatus('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
        signal: abortRef.current.signal,
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error((data as { error?: string }).error || 'Request failed')
      }

      setStatus('success')
      setForm(INITIAL_FORM)
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') return
      setStatus('error')
      setErrorMessage(
        err instanceof Error && err.message !== 'Request failed'
          ? err.message
          : 'Something went wrong. Please try again or email me directly.'
      )
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

      {/* Name */}
      <div>
        <label htmlFor="name" className={labelClass}>
          Name <span className="text-muted font-normal">(required)</span>
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Jane Smith"
          required
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClass}>
          Email <span className="text-muted font-normal">(required)</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="jane@agency.com"
          required
          className={inputClass}
        />
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className={labelClass}>
          Company / Agency{' '}
          <span className="text-muted font-normal">(optional)</span>
        </label>
        <input
          id="company"
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Acme Agency"
          className={inputClass}
        />
      </div>

      {/* Project type */}
      <div>
        <label htmlFor="projectType" className={labelClass}>
          Project type
        </label>
        <select
          id="projectType"
          name="projectType"
          value={form.projectType}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select project type</option>
          <option value="wordpress">WordPress Development</option>
          <option value="performance">Performance Optimization</option>
          <option value="headless">Headless Build</option>
          <option value="woocommerce">WooCommerce</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-muted font-normal">(required, min 20 chars)</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell me what you're working on — timeline, what's broken, what you need done."
          required
          minLength={20}
          className={inputClass}
        />
      </div>

      {/* Budget */}
      <div>
        <label htmlFor="budget" className={labelClass}>
          Budget range{' '}
          <span className="text-muted font-normal">(optional)</span>
        </label>
        <select
          id="budget"
          name="budget"
          value={form.budget}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select budget range</option>
          <option value="under-2k">Under $2k</option>
          <option value="2k-5k">$2k–$5k</option>
          <option value="5k-15k">$5k–$15k</option>
          <option value="15k+">$15k+</option>
          <option value="retainer">Ongoing retainer</option>
        </select>
      </div>

      {/* Status messages — aria-live so screen readers announce outcome */}
      <div aria-live="polite" aria-atomic="true">
        {status === 'success' && (
          <p className="text-success font-mono text-sm">
            Got it. I&apos;ll get back to you within 24 hours — usually sooner.
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-400 text-sm">{errorMessage}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-blue text-white px-6 py-3 rounded-md font-semibold w-full hover:bg-blue-dark transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </button>

    </form>
  )
}
