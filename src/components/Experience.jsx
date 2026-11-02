import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiPlus, HiMinus } from 'react-icons/hi'
import SectionHeading from './SectionHeading.jsx'
import FlowLine from './FlowLine.jsx'
import StatusDot from './StatusDot.jsx'

const EXPERIENCE = [
  {
    role: 'AI Engineer',
    org: 'UNITZERO (Pvt.) Ltd',
    period: 'Oct 2025 — Present',
    location: 'Pakistan',
    current: true,
    points: [
      'Design and deploy AI agents, LLM-powered assistants, and chatbots integrated with business tools, APIs, and knowledge bases.',
      'Build and maintain automation workflows that streamline operations and reduce manual effort on repetitive tasks.',
    ],
  },
  {
    role: 'Automation Engineer',
    org: 'Scaletopia',
    period: 'Feb 2026 — Jun 2026',
    location: 'Karachi, Pakistan',
    points: [
      'Built and maintained AI-driven automation workflows in n8n and make.com to power outbound and lead-generation operations at scale.',
      'Integrated LLMs with CRMs, data-enrichment tools, and messaging APIs to automate lead qualification, routing, and personalized outreach.',
      'Engineered multi-step pipelines for data processing, message drafting, and campaign orchestration, reducing manual workload for the team.',
    ],
  },
  {
    role: 'Freelance AI Agents Developer',
    org: 'Self-Employed',
    period: 'Jun 2024 — Oct 2025',
    location: 'Remote',
    points: [
      'Delivered custom n8n workflows integrating LLMs, CRMs, and APIs for clients across multiple industries.',
      'Built AI support assistants, lead-qualification systems, document-automation solutions, and 10+ web apps with Python, JavaScript, and React.',
    ],
  },
]

const LOGIC = [
  { label: 'Trigger', note: 'Webhook, form, call or schedule' },
  { label: 'Data', note: 'Enrich, clean, fetch context' },
  { label: 'LLM', note: 'Classify, summarise, draft' },
  { label: 'Decision', note: 'Rules and routing' },
  { label: 'Automation', note: 'n8n / make.com run' },
  { label: 'Action', note: 'CRM, message, booking' },
]

function Record({ job, index, open, onToggle }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={`rounded-lg border bg-surface transition-colors ${open ? 'border-dim' : 'border-line'}`}
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="grid w-full grid-cols-1 gap-3 p-5 text-left sm:p-6 md:grid-cols-[110px_190px_1fr_auto] md:items-center md:gap-6"
      >
        <span className="mono-label text-accent">Log.{String(index + 1).padStart(2, '0')}</span>
        <span className="font-mono text-xs text-muted">{job.period}</span>
        <span>
          <span className="block text-lg font-semibold text-ink sm:text-xl">{job.role}</span>
          <span className="text-sm text-muted">
            {job.org} · {job.location}
          </span>
        </span>
        <span className="mono-label flex items-center gap-3">
          {job.current ? (
            <span className="flex items-center gap-2 text-ink">
              <StatusDot /> Active
            </span>
          ) : (
            <span>Complete</span>
          )}
          <span className="flex h-7 w-7 items-center justify-center rounded border border-line text-ink">
            {open ? <HiMinus size={12} /> : <HiPlus size={12} />}
          </span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <ul className="space-y-3 border-t border-line px-5 py-5 sm:px-6 md:pl-[158px]">
              {job.points.map((p, i) => (
                <li key={p} className="flex gap-4 text-sm leading-relaxed text-muted">
                  <span className="font-mono text-xs text-dim">{String(i + 1).padStart(2, '0')}</span>
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  )
}

export default function Experience() {
  const [open, setOpen] = useState(0)

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="03"
          label="Experience"
          title={
            <>
              Where I've put this to work, <span className="text-muted">logged like a system.</span>
            </>
          }
        />

        <ol className="space-y-3">
          {EXPERIENCE.map((job, i) => (
            <Record
              key={job.role + job.org}
              job={job}
              index={i}
              open={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </ol>

        <div className="mt-16">
          <div className="mono-label mb-4 flex items-center justify-between">
            <span>Automation logic — how most of my systems run</span>
            <span className="flex items-center gap-2 text-ink">
              <StatusDot /> Live
            </span>
          </div>
          <FlowLine steps={LOGIC} />
        </div>
      </div>
    </section>
  )
}
