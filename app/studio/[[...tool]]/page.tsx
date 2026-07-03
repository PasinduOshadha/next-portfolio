'use client'
import dynamic from 'next/dynamic'

// Studio uses browser APIs — must not SSR
const StudioClient = dynamic(() => import('./StudioClient'), { ssr: false })

export default function StudioPage() {
  return <StudioClient />
}
