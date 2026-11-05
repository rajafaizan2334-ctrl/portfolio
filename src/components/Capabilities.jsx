import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import SectionHeading from './SectionHeading.jsx'

const CAPABILITIES = [
  {
    title: 'AI Agents & Assistants',
    summary:
      'LLM-powered assistants and chatbots wired into business tools, APIs and knowledge bases — built to take real actions, not just chat.',
    tools: ['OpenAI API', 'Claude', 'LangChain', 'n8n AI Agent', 'Prompt engineering'],
    uses: ['Support assistants', 'AI email drafting', 'Website chatbots'],
  },
  {
    title: 'RAG & Knowledge Systems',
    summary:
      'Embeddings, vector search and automated indexing so answers come from your documents — grounded, not guessed.',
    tools: ['LangChain', 'Vector stores', 'Embeddings', 'Python'],
    uses: ['Knowledge bases', 'Document Q&A', 'Semantic search'],
  },
  {
    title: 'Workflow Automation',
    summary:
      'Multi-step n8n and make.com pipelines with conditional logic that replace repetitive manual work end to end.',
    tools: ['n8n', 'make.com', 'Webhooks', 'Conditional logic'],
    uses: ['Ticket routing', 'Data processing', 'Scheduled jobs'],
  },
  {
    title: 'Voice & Calling Agents',
    summary:
      'Speech-to-text plus LLM reasoning for real-time, hands-free conversations that log themselves and trigger follow-ups.',
    tools: ['Vapi', 'Soniox STT', 'GPT-4.1', 'Event triggers'],
    uses: ['Customer support lines', 'Call logging', 'Automated follow-up'],
  },
  {
    title: 'Lead-Gen & Outbound',
    summary:
      'LLMs connected to CRMs, enrichment tools and messaging APIs to qualify, route and personalise outreach at scale.',
    tools: ['n8n', 'GoHighLevel', 'Airtable', 'Email & SMS APIs'],
    uses: ['Reply sync to CRM', 'Lead routing', 'Personalised outreach'],
  },
  {
    title: 'CRM & API Integration',
    summary:
      'The plumbing between tools: REST APIs, webhooks and CRM sync so data moves without anyone copy-pasting it.',
    tools: ['REST APIs', 'Webhooks', 'Airtable', 'Slack Block Kit'],
    uses: ['Tool sync', 'Slack-driven pipelines', 'Automated reports'],
  },
  {
    title: 'Premium Websites & Web Apps',
    summary:
      'Modern, luxury websites and web apps — custom design, smooth motion, mobile-first, fast and SEO-ready, with forms wired into your CRM.',
    tools: ['React', 'Tailwind CSS', 'Framer Motion', 'Python / Flask'],
    uses: ['Luxury brand sites', 'Landing pages', 'Dashboards & web apps'],
  },
]

function Detail({ cap, index }) {
  return (
    <motion.div
      key={cap.title}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-5xl font-medium text-line">{String(index + 1).padStart(2, '0')}</span>
        <span className="mono-label text-accent">Active module</span>
      </div>
      <h3 className="mt-6 text-2xl font-semibold text-ink">{cap.title}</h3>
      <p className="mt-3 leading-relaxed text-muted">{cap.summary}</p>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <div className="mono-label mb-3">Tools</div>
          <ul className="flex flex-wrap gap-2">
            {cap.tools.map((t) => (
              <li key={t} className="rounded border border-line px-2.5 py-1 font-mono text-xs text-ink">
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mono-label mb-3">Applications</div>
          <ul className="space-y-1.5">
            {cap.uses.map((u) => (
              <li key={u} className="flex items-center gap-2 text-sm text-ink">
                <span className="h-px w-3 bg-accent" />
                {u}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default function Capabilities() {
  const [active, setActive] = useState(0)

  return (
    <section id="capabilities" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="02"
          label="Capabilities"
          title={
            <>
              I work where AI meets <span className="text-muted">automation and software.</span>
            </>
          }
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr]">
          <ul className="border-t border-line">
            {CAPABILITIES.map((cap, i) => (
              <li key={cap.title} className="border-b border-line">
                <button
                  onClick={() => setActive(i)}
                  onMouseEnter={() => window.matchMedia('(hover: hover)').matches && setActive(i)}
                  aria-expanded={active === i}
                  className="group flex w-full items-center gap-5 py-5 text-left"
                >
                  <span
                    className={`font-mono text-xs transition-colors ${active === i ? 'text-accent' : 'text-dim'}`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`flex-1 text-lg font-medium transition-colors sm:text-xl ${
                      active === i ? 'text-ink' : 'text-muted group-hover:text-ink'
                    }`}
                  >
                    {cap.title}
                  </span>
                  <HiArrowRight
                    className={`transition-all ${
                      active === i ? 'translate-x-0 text-accent opacity-100' : '-translate-x-2 opacity-0'
                    }`}
                  />
                </button>
                {active === i && (
                  <div className="pb-6 lg:hidden">
                    <Detail cap={cap} index={i} />
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <div className="sticky top-28 rounded-lg border border-line bg-surface p-8">
              <AnimatePresence mode="wait">
                <Detail key={active} cap={CAPABILITIES[active]} index={active} />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
