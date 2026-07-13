export interface ContactFormValues {
  name: string
  email: string
  projectType: string
  budget: string
  brief: string
}

export type ContactFormStatus = 'idle' | 'loading' | 'success' | 'error'

export interface ContactRequestPayload extends ContactFormValues {
  turnstileToken: string
}

export interface ContactResponse {
  success?: boolean
  error?: string
}

export interface ContactChannel {
  icon: string
  label: string
  value: string
  href: string
  external: boolean
}

export interface ContactLink {
  id: number
  name: string
  icon: string
  url: string
}
