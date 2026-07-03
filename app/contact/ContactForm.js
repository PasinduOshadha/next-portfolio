'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', projectType: '', budget: '', brief: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', email: '', projectType: '', budget: '', brief: '' })
    } catch {
      setStatus('error')
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
        />
      </div>

      {status === 'success' && (
        <p className="text-sm font-mono text-on-surface bg-surface-container-low px-4 py-3 border border-outline-variant">
          Message sent. I&apos;ll be in touch shortly.
        </p>
      )}
      {status === 'error' && (
        <p className="text-sm font-mono text-on-surface bg-surface-container px-4 py-3 border border-on-surface">
          Something went wrong. Please try again or email directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full mono-button-primary py-4 text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : 'Initialize Inquiry'}
      </button>
    </form>
  )
}
