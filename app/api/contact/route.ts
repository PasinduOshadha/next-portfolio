import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { name, email, projectType, budget, brief, message } = await req.json()

  const body = message || brief

  if (!name || !email || !body) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: 'mailbox.pasindu@gmail.com',
    replyTo: email,
    subject: `New inquiry from ${name}`,
    html: `
      <h2>New Contact Inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Project Type:</strong> ${projectType || '—'}</p>
      <p><strong>Budget:</strong> ${budget || '—'}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${body.replace(/\n/g, '<br />')}</p>
    `,
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
