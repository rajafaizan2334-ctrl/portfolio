import { motion } from 'framer-motion'
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi'
import { FiLinkedin } from 'react-icons/fi'
import MagneticButton from './MagneticButton.jsx'

const CONTACTS = [
  {
    icon: HiOutlineMail,
    label: 'Email',
    value: 'rajafaizan2554@gmail.com',
    href: 'mailto:rajafaizan2554@gmail.com',
  },
  {
    icon: HiOutlinePhone,
    label: 'Phone',
    value: '+92 318 5236412',
    href: 'tel:+923185236412',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/faizansaleem',
    href: 'https://www.linkedin.com/in/faizansaleem-2965b1265',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-surface px-8 py-16 text-center sm:px-16">
          <div
            className="animate-float-slow absolute -left-20 -top-20 h-72 w-72 rounded-full bg-violet-600/25 blur-[80px] will-change-transform"
            aria-hidden="true"
          />
          <div
            className="animate-float absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-cyan-500/20 blur-[80px] will-change-transform"
            aria-hidden="true"
            style={{ animationDelay: '-4s' }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="flex items-center justify-center gap-3 text-sm font-mono uppercase tracking-[0.25em] text-violet-300/80">
              <span className="h-px w-8 bg-gradient-to-r from-violet-400 to-cyan-300" />
              Get in touch
              <span className="h-px w-8 bg-gradient-to-l from-violet-400 to-cyan-300" />
            </div>
            <h2 className="font-display mx-auto mt-5 max-w-2xl text-3xl font-semibold text-ink sm:text-4xl md:text-5xl">
              Got a workflow worth automating?{' '}
              <span className="text-gradient">Let's build it.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted">
              Open to freelance projects, full-time roles, and collaborations around AI agents,
              RAG systems, and automation. I usually reply within a day.
            </p>

            <div className="mt-10 flex justify-center">
              <MagneticButton
                href="mailto:rajafaizan2554@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-8 py-3.5 text-sm font-semibold text-bg shadow-[0_0_40px_-8px_rgba(124,92,255,0.7)]"
              >
                <HiOutlineMail size={18} />
                Say hello
              </MagneticButton>
            </div>

            <div className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
              {CONTACTS.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-surface px-4 py-5 transition-colors hover:border-cyan-300/50"
                >
                  <c.icon className="text-cyan-300 transition-transform group-hover:scale-110" size={20} />
                  <span className="text-xs text-muted">{c.label}</span>
                  <span className="break-all text-sm font-medium text-ink">{c.value}</span>
                </motion.a>
              ))}
            </div>

            <div className="mt-10 flex items-center justify-center gap-2 text-xs text-muted">
              <HiOutlineLocationMarker />
              Karachi, Sindh, Pakistan — available remote, worldwide
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
