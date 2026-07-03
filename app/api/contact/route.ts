import { Resend } from 'resend'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import type { ContactRequestPayload, ContactResponse } from '../../../types/contact'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { name, email, projectType, budget, brief } = (await req.json()) as ContactRequestPayload

  if (!name || !email || !brief) {
    return NextResponse.json<ContactResponse>({ error: 'Missing required fields' }, { status: 400 })
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
      <p><strong>Brief:</strong></p>
      <p>${brief.replace(/\n/g, '<br />')}</p>
    `,
  })

  if (error) {
    return NextResponse.json<ContactResponse>({ error: error.message }, { status: 500 })
  }

  return NextResponse.json<ContactResponse>({ success: true })
}
