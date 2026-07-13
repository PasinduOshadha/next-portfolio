import { Resend } from 'resend'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import type { ContactRequestPayload, ContactResponse } from '../../../types/contact'

const resendApiKey = process.env.RESEND_API_KEY
const turnstileSecretKey = process.env.TURNSTILE_SECRET_KEY
const resend = resendApiKey ? new Resend(resendApiKey) : null
const contactFromEmail = process.env.CONTACT_FROM_EMAIL ?? 'Portfolio Contact <onboarding@resend.dev>'
const contactToEmail = process.env.CONTACT_TO_EMAIL ?? 'mailbox.pasindu@gmail.com'

interface TurnstileVerificationResponse {
  success: boolean
  hostname?: string
  'error-codes'?: string[]
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function formatMultilineHtml(value: string) {
  return escapeHtml(value).replaceAll('\n', '<br />')
}

function getRemoteIp(req: NextRequest) {
  return (
    req.headers.get('cf-connecting-ip') ??
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    null
  )
}

async function verifyTurnstile(token: string, remoteIp: string | null) {
  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      secret: turnstileSecretKey!,
      response: token,
      ...(remoteIp ? { remoteip: remoteIp } : {}),
      idempotency_key: crypto.randomUUID(),
    }),
  })

  return response.json() as Promise<TurnstileVerificationResponse>
}

export async function POST(req: NextRequest) {
  if (!resend || !turnstileSecretKey) {
    return NextResponse.json<ContactResponse>(
      { error: 'Contact form is not configured yet. Missing Resend or Turnstile server credentials.' },
      { status: 500 },
    )
  }

  try {
    const payload = (await req.json()) as ContactRequestPayload
    const name = payload.name?.trim()
    const email = payload.email?.trim()
    const projectType = payload.projectType?.trim()
    const budget = payload.budget?.trim()
    const brief = payload.brief?.trim()
    const turnstileToken = payload.turnstileToken?.trim()

    if (!name || !email || !brief || !turnstileToken) {
      return NextResponse.json<ContactResponse>({ error: 'Missing required fields' }, { status: 400 })
    }

    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json<ContactResponse>({ error: 'Enter a valid email address.' }, { status: 400 })
    }

    const turnstileResult = await verifyTurnstile(turnstileToken, getRemoteIp(req))

    if (!turnstileResult.success) {
      return NextResponse.json<ContactResponse>(
        {
          error: `Verification failed${turnstileResult['error-codes']?.length ? `: ${turnstileResult['error-codes']?.join(', ')}` : '.'}`,
        },
        { status: 400 },
      )
    }

    const { error } = await resend.emails.send({
      from: contactFromEmail,
      to: contactToEmail,
      replyTo: email,
      subject: `New inquiry from ${name}`,
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Project Type:</strong> ${escapeHtml(projectType || '—')}</p>
        <p><strong>Budget:</strong> ${escapeHtml(budget || '—')}</p>
        <hr />
        <p><strong>Brief:</strong></p>
        <p>${formatMultilineHtml(brief)}</p>
      `,
      text: [
        'New Contact Inquiry',
        `Name: ${name}`,
        `Email: ${email}`,
        `Project Type: ${projectType || '—'}`,
        `Budget: ${budget || '—'}`,
        '',
        'Brief:',
        brief,
      ].join('\n'),
    })

    if (error) {
      return NextResponse.json<ContactResponse>({ error: error.message }, { status: 500 })
    }

    return NextResponse.json<ContactResponse>({ success: true })
  } catch {
    return NextResponse.json<ContactResponse>(
      { error: 'Unable to process the contact form request.' },
      { status: 500 },
    )
  }
}
