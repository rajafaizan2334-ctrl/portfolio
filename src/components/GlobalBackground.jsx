import { useEffect, useRef } from 'react'

const COLORS = ['124,92,255', '34,211,238', '255,92,168']

export default function GlobalBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = canvas.getContext('2d', { alpha: true })
    let width = 0
    let height = 0
    let particles = []
    let raf = null
    let frame = 0
    const mouse = { x: -9999, y: -9999 }

    const isSmall = () => window.innerWidth < 768

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const target = isSmall() ? 26 : Math.min(52, Math.floor((width * height) / 26000))
      particles = Array.from({ length: target }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.5 + 0.7,
        c: COLORS[(Math.random() * COLORS.length) | 0],
      }))
    }

    const linkDist = 120
    const linkDistSq = linkDist * linkDist

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      frame++

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dSq = dx * dx + dy * dy
        if (dSq < 14400) {
          p.x -= dx * 0.002
          p.y -= dy * 0.002
        }
      }

      // Connection lines recomputed every other frame — halves the O(n^2) cost.
      if (frame % 2 === 0) {
        ctx.lineWidth = 1
        for (let i = 0; i < particles.length; i++) {
          const a = particles[i]
          for (let j = i + 1; j < particles.length; j++) {
            const b = particles[j]
            const dx = a.x - b.x
            const dy = a.y - b.y
            const dSq = dx * dx + dy * dy
            if (dSq < linkDistSq) {
              const alpha = 0.1 * (1 - dSq / linkDistSq)
              ctx.strokeStyle = `rgba(124,92,255,${alpha})`
              ctx.beginPath()
              ctx.moveTo(a.x, a.y)
              ctx.lineTo(b.x, b.y)
              ctx.stroke()
            }
          }
        }
      }

      for (const p of particles) {
        ctx.beginPath()
        ctx.fillStyle = `rgba(${p.c},0.9)`
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    const start = () => {
      if (raf === null) raf = requestAnimationFrame(draw)
    }
    const stop = () => {
      if (raf !== null) cancelAnimationFrame(raf)
      raf = null
    }

    const handleMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    const handleVisibility = () => {
      if (document.hidden) stop()
      else start()
    }
    let resizeTimer
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(resize, 150)
    }

    resize()
    start()
    window.addEventListener('mousemove', handleMove, { passive: true })
    window.addEventListener('resize', handleResize)
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      stop()
      clearTimeout(resizeTimer)
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-50"
      aria-hidden="true"
    />
  )
}
