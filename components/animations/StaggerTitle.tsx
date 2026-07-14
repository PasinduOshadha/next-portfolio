'use client'

import { useEffect, useRef, type ReactNode, type ElementType } from 'react'

interface StaggerTitleProps {
  children: ReactNode
  /** Wrapper element, defaults to div (wrap your h1/h2 inside, or set as="h1") */
  as?: ElementType
  className?: string
  /** 'load' animates on mount (hero H1s); 'scroll' animates when entering viewport (section H2s) */
  trigger?: 'load' | 'scroll'
}

export default function StaggerTitle({
  children,
  as: Tag = 'div',
  className,
  trigger = 'scroll',
}: StaggerTitleProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let cleanup: (() => void) | undefined
    let cancelled = false

    async function run() {
      const [{ gsap }, { ScrollTrigger }, { SplitText }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
        import('gsap/SplitText'),
      ])
      if (cancelled || !el) return
      gsap.registerPlugin(ScrollTrigger, SplitText)

      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const split = new SplitText(el, { type: 'words' })
        const tween = gsap.from(split.words, {
          yPercent: 60,
          opacity: 0,
          duration: 0.5,
          ease: 'power3.out',
          stagger: 0.04,
          ...(trigger === 'scroll' && {
            scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          }),
        })
        return () => {
          tween.scrollTrigger?.kill()
          tween.kill()
          split.revert()
        }
      })
      cleanup = () => mm.revert()
    }

    run()
    return () => {
      cancelled = true
      cleanup?.()
    }
  }, [trigger])

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
