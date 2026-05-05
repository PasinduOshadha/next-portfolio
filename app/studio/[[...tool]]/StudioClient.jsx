'use client'
import { Studio } from 'sanity'
import config from '../../../sanity.config'

export default function StudioClient() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999 }}>
      <Studio config={config} />
    </div>
  )
}
