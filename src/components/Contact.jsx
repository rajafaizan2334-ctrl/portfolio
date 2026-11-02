import { useState } from 'react'
import { HiArrowRight, HiArrowUpRight } from 'react-icons/hi2'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { SITE } from '../site.js'

const CHANNELS = [
  { label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
  { label: 'Phone', value: SITE.phone, href: SITE.phoneHref },
  { label: 'LinkedIn', value: 'in/faizansaleem', href: SITE.linkedin },
  { label: 'GitHub', value: 'rajafaizan2334-ctrl', href: SITE.github },
]

const inputClass =
  'w-full rounded-md border border-line bg-bg px-4 py-3 text-sm text-ink placeholder:text-dim outline-none transition-colors focus:border-accent'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  // No backend: the form composes an email in the visitor's mail app.
  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `Portfolio enquiry from ${form.name}`
    const body = `${form.message}\n\n— ${form.name} (${form.email})`
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="07"
          label="Contact"
          title={
            <>
              Got a workflow worth automating? <span className="text-muted">Let's build it.</span>
            </>
          }
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-lg border border-line bg-surface">
              <div className="mono-label flex items-center justify-between border-b border-line px-5 py-3">
                <span>faizan@khi: ~</span>
                <span className="text-accent">zsh</span>
              </div>
              <div className="space-y-2 p-5 font-mono text-sm leading-relaxed">
                <p className="text-ink">
                  <span className="text-accent">$</span> connect --with-faizan
                  <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-ink" />
                </p>
                <p className="text-muted">&gt; open to: freelance, full-time roles, collaborations</p>
                <p className="text-muted">&gt; builds: ai agents · rag systems · automations</p>
                <p className="text-muted">&gt; reply time: usually within a day</p>
              </div>
            </div>

            <ul className="mt-6 border-t border-line">
              {CHANNELS.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="group flex items-center gap-4 border-b border-line py-4"
                  >
                    <span className="mono-label w-20 shrink-0">{c.label}</span>
                    <span className="flex-1 truncate text-ink transition-colors group-hover:text-accent">
                      {c.value}
                    </span>
                    <HiArrowUpRight className="text-dim transition-colors group-hover:text-accent" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <form onSubmit={handleSubmit} className="rounded-lg border border-line bg-surface p-5 sm:p-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mono-label mb-2 block">Name</span>
                  <input required value={form.name} onChange={update('name')} placeholder="Your name" className={inputClass} />
                </label>
                <label className="block">
                  <span className="mono-label mb-2 block">Email</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@company.com"
                    className={inputClass}
                  />
                </label>
              </div>
              <label className="mt-4 block">
                <span className="mono-label mb-2 block">Message</span>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="What would you like to automate?"
                  className={`${inputClass} resize-none`}
                />
              </label>
              <button type="submit" className="btn btn-primary mt-5 w-full">
                Send message <HiArrowRight />
              </button>
              <p className="mt-3 text-center text-xs text-dim">Opens your email app with the message filled in.</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
