'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    brief: '',
  })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const inputClass =
    'w-full px-5 py-3 rounded-lg bg-surface-container text-on-surface placeholder:text-on-surface/40 border border-outline-variant/20 focus:outline-none focus:ring-2 focus:ring-primary/40 font-mono text-sm'

  return (
    <form onSubmit={handleSubmit} className="bg-surface-container-high rounded-xl p-10 flex flex-col gap-6">
      <h2 className="text-2xl font-bold font-headline text-on-surface mb-2">Send a Message</h2>

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

      <button
        type="submit"
        className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary-container py-4 rounded-lg text-lg font-bold hover:scale-105 transition-transform duration-200"
      >
        Initialize Inquiry
      </button>
    </form>
  )
}
