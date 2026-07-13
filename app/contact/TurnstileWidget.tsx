'use client'

import Script from 'next/script'
import { useEffect, useRef, useState } from 'react'

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string
          callback?: (token: string) => void
          'expired-callback'?: () => void
          'error-callback'?: () => void
          theme?: 'light' | 'dark' | 'auto'
        },
      ) => string
      reset: (widgetId?: string) => void
      remove: (widgetId?: string) => void
    }
  }
}

interface TurnstileWidgetProps {
  siteKey: string
  onTokenChange: (token: string | null) => void
  resetCounter: number
}

export default function TurnstileWidget({
  siteKey,
  onTokenChange,
  resetCounter,
}: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const widgetIdRef = useRef<string | null>(null)
  const [isReady, setIsReady] = useState(false)
  const hasTurnstileApi = typeof window !== 'undefined' && Boolean(window.turnstile)

  useEffect(() => {
    if (window.turnstile) {
      return
    }

    const handleReady = () => setIsReady(true)
    window.addEventListener('turnstile-ready', handleReady)

    return () => window.removeEventListener('turnstile-ready', handleReady)
  }, [])

  useEffect(() => {
    if ((!isReady && !hasTurnstileApi) || !containerRef.current || widgetIdRef.current || !window.turnstile) {
      return
    }

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      callback: (token) => onTokenChange(token),
      'expired-callback': () => onTokenChange(null),
      'error-callback': () => onTokenChange(null),
      theme: 'light',
    })

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current)
      }
      widgetIdRef.current = null
    }
  }, [hasTurnstileApi, isReady, onTokenChange, siteKey])

  useEffect(() => {
    if (!widgetIdRef.current || !window.turnstile) {
      return
    }

    window.turnstile.reset(widgetIdRef.current)
  }, [resetCounter])

  return (
    <>
      <Script
        id="cf-turnstile"
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={() => {
          window.dispatchEvent(new Event('turnstile-ready'))
          setIsReady(true)
        }}
      />
      <div ref={containerRef} />
    </>
  )
}
