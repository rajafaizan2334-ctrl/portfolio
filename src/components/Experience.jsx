import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'

const EXPERIENCE = [
  {
    role: 'AI Engineer',
    org: 'UNITZERO (Pvt.) Ltd',
    period: 'Oct 2025 — Present',
    location: 'Pakistan',
    points: [
      'Design and deploy AI agents, LLM-powered assistants, and chatbots integrated with business tools, APIs, and knowledge bases.',
      'Build and maintain automation workflows that streamline operations and reduce manual effort on repetitive tasks.',
    ],
    current: true,
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

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Career"
          title="Where I've put this to work"
          description="A quick tour through the teams and clients I've shipped AI systems for."
        />

        <div className="relative">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-400 via-white/15 to-transparent sm:left-[15px]" />

          <div className="space-y-12">
            {EXPERIENCE.map((job, i) => (
              <motion.div
                key={job.role + job.org}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="relative pl-10 sm:pl-12"
              >
                <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center sm:left-1">
                  <motion.span
                    animate={job.current ? { scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] } : {}}
                    transition={{ duration: 2.2, repeat: Infinity }}
                    className={`absolute h-6 w-6 rounded-full ${job.current ? 'bg-cyan-400/40' : ''}`}
                  />
                  <span
                    className={`relative h-3 w-3 rounded-full border-2 ${
                      job.current
                        ? 'border-cyan-300 bg-cyan-400'
                        : 'border-violet-400 bg-bg'
                    }`}
                  />
                </span>

                <div className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-violet-400/40">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-xl font-semibold text-ink">{job.role}</h3>
                    <span className="font-mono text-xs text-cyan-300">{job.period}</span>
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted">
                    <span className="text-violet-300">{job.org}</span>
                    <span aria-hidden>·</span>
                    <span>{job.location}</span>
                    {job.current && (
                      <span className="ml-1 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-cyan-300">
                        Current
                      </span>
                    )}
                  </div>
                  <ul className="mt-4 space-y-2">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-2 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
