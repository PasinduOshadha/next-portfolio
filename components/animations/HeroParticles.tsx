'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  depth: number // 0 (far) .. 1 (near)
}

const NEAR_COLOR = '19, 19, 19' // near-black dots on light canvas
const FAR_COLOR = '19, 19, 19' // connecting lines
const LINK_DISTANCE = 130
const MOUSE_RADIUS = 140
const TILT_STRENGTH = 18

export default function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    let width = 0
    let height = 0
    let particles: Particle[] = []
    let raf = 0
    let running = false
    let visible = true
    const mouse = { x: -9999, y: -9999, tx: 0, ty: 0 }

    function resize() {
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = width < 768 ? 40 : 90
      particles = Array.from({ length: count }, () => {
        const depth = Math.random()
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * (0.15 + depth * 0.35),
          vy: (Math.random() - 0.5) * (0.15 + depth * 0.35),
          depth,
        }
      })
    }

    function draw() {
      if (!ctx) return
      ctx.clearRect(0, 0, width, height)

      // parallax tilt toward cursor, eased
      mouse.tx += ((mouse.x - width / 2) / width - mouse.tx) * 0.04
      mouse.ty += ((mouse.y - height / 2) / height - mouse.ty) * 0.04

      for (const p of particles) {
        if (!reduceMotion) {
          p.x += p.vx
          p.y += p.vy
          if (p.x < -10) p.x = width + 10
          if (p.x > width + 10) p.x = -10
          if (p.y < -10) p.y = height + 10
          if (p.y > height + 10) p.y = -10

          // mouse repel, stronger for near particles
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist = Math.hypot(dx, dy)
          if (dist < MOUSE_RADIUS && dist > 0) {
            const force = ((MOUSE_RADIUS - dist) / MOUSE_RADIUS) * (0.4 + p.depth * 0.6)
            p.x += (dx / dist) * force
            p.y += (dy / dist) * force
          }
        }
      }

      // lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        const ax = a.x + mouse.tx * TILT_STRENGTH * a.depth
        const ay = a.y + mouse.ty * TILT_STRENGTH * a.depth
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const bx = b.x + mouse.tx * TILT_STRENGTH * b.depth
          const by = b.y + mouse.ty * TILT_STRENGTH * b.depth
          const dist = Math.hypot(ax - bx, ay - by)
          if (dist < LINK_DISTANCE) {
            const alpha = (1 - dist / LINK_DISTANCE) * 0.1
            ctx.strokeStyle = `rgba(${FAR_COLOR}, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(ax, ay)
            ctx.lineTo(bx, by)
            ctx.stroke()
          }
        }
      }

      // dots on top, depth-scaled
      for (const p of particles) {
        const px = p.x + mouse.tx * TILT_STRENGTH * p.depth
        const py = p.y + mouse.ty * TILT_STRENGTH * p.depth
        const r = 0.8 + p.depth * 1.6
        ctx.fillStyle = `rgba(${NEAR_COLOR}, ${0.08 + p.depth * 0.3})`
        ctx.beginPath()
        ctx.arc(px, py, r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    function loop() {
      draw()
      if (!reduceMotion) raf = requestAnimationFrame(loop)
    }

    function start() {
      if (running || !visible || document.hidden) return
      running = true
      raf = requestAnimationFrame(loop)
    }

    function stop() {
      running = false
      cancelAnimationFrame(raf)
    }

    function onMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    function onMouseLeave() {
      mouse.x = -9999
      mouse.y = -9999
    }

    function onVisibility() {
      if (document.hidden) stop()
      else start()
    }

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) start()
      else stop()
    })
    observer.observe(canvas)

    resize()
    if (reduceMotion) {
      draw() // single static frame
    } else {
      start()
    }

    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', onVisibility)
    // listen on window so the effect works while hovering hero content above the canvas
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', onMouseLeave)

    return () => {
      stop()
      observer.disconnect()
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('mousemove', onMouseMove)
      document.documentElement.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}
