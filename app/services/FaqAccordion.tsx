'use client'

import { useState, useCallback } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FaqItem {
  q: string
  a: string
}

interface FaqAccordionProps {
  items: FaqItem[]
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }, [])

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
      if (event.key === 'Escape') {
        setOpenIndex(null)
        event.currentTarget.blur()
      } else if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        toggle(index)
      }
    },
    [toggle],
  )

  return (
    <dl className="divide-y divide-outline">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `faq-panel-${index}`
        const triggerId = `faq-trigger-${index}`

        return (
          <div key={index} className="py-5">
            <dt>
              <button
                id={triggerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={cn(
                  'w-full flex items-center justify-between gap-4 text-left',
                  'text-base font-semibold text-primary-text',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue rounded-sm',
                  'transition-colors duration-150',
                  isOpen && 'text-blue',
                )}
              >
                <span>{item.q}</span>
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    'w-5 h-5 shrink-0 text-muted transition-transform duration-200',
                    isOpen && 'rotate-180',
                  )}
                />
              </button>
            </dt>
            <dd
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              hidden={!isOpen}
              className={cn(
                'overflow-hidden transition-all duration-200',
                isOpen ? 'mt-3' : 'mt-0',
              )}
            >
              <p className="text-base text-muted leading-relaxed">{item.a}</p>
            </dd>
          </div>
        )
      })}
    </dl>
  )
}
