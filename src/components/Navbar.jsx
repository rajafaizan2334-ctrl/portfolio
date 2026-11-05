import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import StatusDot from './StatusDot.jsx'

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#websites', label: 'Websites' },
  { href: '#experience', label: 'Experience' },
  { href: '#systems', label: 'Systems' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive('#' + entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          scrolled || open ? 'border-line bg-bg/85 backdrop-blur-md' : 'border-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="text-lg font-bold tracking-tight text-ink">
            FAIZAN<span className="text-accent">.</span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`mono-label flex items-center gap-2 transition-colors hover:text-ink ${
                  active === link.href ? 'text-ink' : ''
                }`}
              >
                <span
                  className={`h-1 w-1 rounded-full bg-accent transition-opacity ${
                    active === link.href ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="mono-label hidden items-center gap-2 rounded-full border border-line px-3 py-1.5 text-ink transition-colors hover:border-muted lg:inline-flex"
          >
            <StatusDot />
            Taking new projects
          </a>

          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-line p-2 text-ink md:hidden"
          >
            {open ? <HiX size={18} /> : <HiMenuAlt4 size={18} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg/95 pt-24 backdrop-blur-md md:hidden"
          >
            <nav className="flex flex-col px-4">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                  className="flex items-baseline gap-4 border-b border-line py-5 text-3xl font-semibold text-ink"
                >
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                  {link.label}
                </motion.a>
              ))}
              <div className="mono-label mt-8 flex items-center gap-2 text-ink">
                <StatusDot />
                Taking new projects
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
