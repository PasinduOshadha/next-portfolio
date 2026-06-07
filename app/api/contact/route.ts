import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const { name, email, company, projectType, budget, message } = body as Record<string, string>

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeCompany = company ? escapeHtml(company) : '—'
  const safeProjectType = projectType ? escapeHtml(projectType) : '—'
  const safeBudget = budget ? escapeHtml(budget) : '—'
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />')

  const { error } = await resend.emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: 'mailbox.pasindu@gmail.com',
    replyTo: email,
    subject: `New inquiry from ${safeName}`,
    html: `
      <h2>New Contact Inquiry</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Company:</strong> ${safeCompany}</p>
      <p><strong>Project Type:</strong> ${safeProjectType}</p>
      <p><strong>Budget:</strong> ${safeBudget}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${safeMessage}</p>
    `,
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
