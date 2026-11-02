import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

// A row of numbered pipeline steps with a "signal" that steps through them
// while the diagram is on screen. Steps are strings or { label, note }.
export default function FlowLine({ steps, interval = 1000 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-60px' })
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (!inView || reduce) return
    const id = setInterval(() => setActive((i) => (i + 1) % steps.length), interval)
    return () => clearInterval(id)
  }, [inView, reduce, steps.length, interval])

  return (
    <ol
      ref={ref}
      style={{ '--cols': steps.length }}
      className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3 lg:grid-cols-[repeat(var(--cols),minmax(0,1fr))]"
    >
      {steps.map((step, i) => {
        const { label, note } = typeof step === 'string' ? { label: step } : step
        const on = i === active
        return (
          <li
            key={label}
            className={`relative p-4 transition-colors duration-500 ${on ? 'bg-raised' : 'bg-surface'}`}
          >
            <div className="flex items-center justify-between">
              <span
                className={`font-mono text-[10px] transition-colors ${on ? 'text-accent' : 'text-dim'}`}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span
                className={`h-1.5 w-1.5 rounded-full transition-colors duration-500 ${
                  on ? 'bg-accent shadow-[0_0_10px_var(--color-accent)]' : 'bg-line'
                }`}
              />
            </div>
            <div className="mt-6 text-sm font-medium leading-snug text-ink">{label}</div>
            {note && <div className="mt-1 text-xs leading-snug text-muted">{note}</div>}
            <span
              className={`absolute inset-x-0 bottom-0 h-px origin-left bg-accent transition-transform duration-700 ${
                on ? 'scale-x-100' : 'scale-x-0'
              }`}
            />
          </li>
        )
      })}
    </ol>
  )
}
