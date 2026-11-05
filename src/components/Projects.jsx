import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiArrowsPointingOut, HiXMark } from 'react-icons/hi2'
import SectionHeading from './SectionHeading.jsx'
import FlowLine from './FlowLine.jsx'
import Reveal from './Reveal.jsx'
import { GhlMock, DashboardMock, RagMock, JewelMock, EstateMock, SaasMock } from './Mockups.jsx'
import emailReplySync from '../assets/work/email-reply-sync.webp'
import smsInboundSync from '../assets/work/sms-inbound-sync.webp'
import smsReplySender from '../assets/work/sms-reply-sender.webp'
import followupDrafter from '../assets/work/followup-drafter.webp'
import voiceAgent from '../assets/work/voice-agent.webp'
import slackDealPipeline from '../assets/work/slack-deal-pipeline.webp'
import weeklyReports from '../assets/work/weekly-reports.webp'

const FEATURED = [
  {
    category: 'Inbox & CRM automation',
    status: 'Production',
    title: 'Email Reply → CRM Sync Engine',
    tagline: 'Every email reply lands in the CRM, matched to the right client, campaign and contact.',
    flow: [
      'Reply webhook',
      'Resolve client workspace',
      'Find or create campaign',
      'Upsert contact',
      'Back-fill sent emails',
      'Dedupe & write reply',
    ],
    stack: ['n8n', 'Email platform API', 'Airtable', 'Gmail alerts'],
    role: 'Designed, built & maintain',
    built:
      'A production n8n pipeline that takes every email reply event, works out which client workspace it belongs to, finds or creates the campaign in the CRM, upserts the contact, back-fills any sent emails not yet logged and writes de-duplicated replies — with retries, cooldown waits and an alert on every failure path.',
    shots: [{ src: emailReplySync, caption: 'n8n — email reply sync, full canvas' }],
  },
  {
    category: 'GoHighLevel · SMS',
    status: 'Production',
    title: 'Two-Way SMS ↔ CRM Sync',
    tagline: 'Airtable becomes the SMS inbox: replies come in, answers go out — safely.',
    flow: [
      'Inbound SMS',
      'Fetch GHL conversation',
      'Upsert contact',
      'Map tag → campaign',
      'Log new messages',
      'Reply from Airtable',
      'DND & opt-out check',
      'Send via GHL',
    ],
    stack: ['n8n', 'GoHighLevel API', 'Airtable', 'JavaScript'],
    role: 'Designed & built both workflows',
    built:
      'Two workflows. Inbound replies are pulled from GoHighLevel, matched to the contact and campaign (creating the campaign on the fly if needed), de-duplicated and logged. Outbound replies typed in Airtable are sent back through GHL only after DND and opt-out checks pass.',
    shots: [
      { src: smsInboundSync, caption: 'n8n — inbound SMS → CRM' },
      { src: smsReplySender, caption: 'n8n — outbound reply with DND / opt-out guard' },
    ],
    mock: GhlMock,
  },
  {
    category: 'AI agent · LLM',
    status: 'Production',
    title: 'AI Follow-up Email Drafter',
    tagline: 'A lead asks for an email — a context-aware draft is waiting before anyone opens the inbox.',
    flow: [
      'Lead tagged "email me"',
      'Normalise timezone & greeting',
      'Claude drafts the email',
      'Parse JSON output',
      'Write draft to CRM',
    ],
    stack: ['n8n', 'Claude Sonnet', 'OpenAI', 'Airtable'],
    role: 'Agent design & prompt engineering',
    built:
      'When a lead asks to be contacted by email, an AI agent reads the full conversation history, infers the sender, offer and tone, and writes a personalised, time-of-day-aware follow-up. The draft lands on the contact record so the inbox manager only reviews and sends.',
    shots: [{ src: followupDrafter, caption: 'n8n — AI agent with Claude + OpenAI models' }],
  },
  {
    category: 'Voice AI',
    status: 'Built on Vapi',
    title: 'Customer Support Voice Agent',
    tagline: 'A banking support agent tuned for natural speed and low cost per call.',
    flow: ['Caller speaks', 'Soniox STT · 410ms', 'GPT-4.1 · 690ms', 'Vapi voice · 430ms', 'Reply in ~1.5s'],
    stack: ['Vapi', 'Soniox', 'GPT-4.1', 'Prompt engineering'],
    role: 'Agent build & tuning',
    built:
      'A customer-support voice assistant for a banking use case — speech-to-text, LLM and voice chosen and tuned for about 1.5s end-to-end latency at roughly $0.10 per minute, with a structured system prompt that keeps the agent in scope.',
    metrics: [
      ['~1.5s', 'End-to-end latency'],
      ['~$0.10', 'Cost per minute'],
      ['1.8%', 'Transcription WER'],
    ],
    shots: [{ src: voiceAgent, caption: 'Vapi — assistant configuration' }],
  },
]

const MORE = [
  {
    title: 'Slack-native Deal Pipeline',
    summary:
      'Reps move deals forward by clicking buttons in a Slack thread. A 16-branch router writes every step to Airtable and posts the next prompt in-thread.',
    stack: 'n8n · Slack Block Kit · Airtable',
    shot: { src: slackDealPipeline, caption: 'n8n — Slack ↔ Airtable state machine' },
  },
  {
    title: 'Automated Weekly KPI Reports',
    summary:
      'Every Friday at 5 PM it pulls each client’s KPIs, renders a table image with QuickChart and posts it to Slack — with alerts if any step fails.',
    stack: 'n8n · Airtable · QuickChart · Slack',
    shot: { src: weeklyReports, caption: 'n8n — scheduled reporting' },
  },
  {
    title: 'RAG Knowledge Agent',
    summary:
      'An AI knowledge base with embeddings, vector search and automated indexing that answers document questions with grounded, cited responses.',
    stack: 'LangChain · Vector store · Embeddings · Python',
    mock: RagMock,
  },
]

const SHOWCASE_SITE = {
  title: 'Luxury brand websites',
  summary:
    'Editorial layouts, refined serif typography and slow, deliberate motion — built to feel as premium as the product it sells.',
  stack: 'React · Tailwind CSS · Framer Motion · CMS',
  mock: JewelMock,
  caption: 'Design concept',
}

const WEBSITES = [
  {
    title: 'Real estate & hospitality',
    summary: 'Full-bleed imagery, listing pages and enquiry forms that drop leads straight into your CRM.',
    stack: 'React · CMS · CRM-connected forms',
    mock: EstateMock,
    caption: 'Design concept',
  },
  {
    title: 'Modern SaaS & startup sites',
    summary: 'Fast, animated product sites with clear messaging, pricing and sign-up flows.',
    stack: 'React · Tailwind CSS · Framer Motion',
    mock: SaasMock,
    caption: 'Design concept',
  },
  {
    title: 'Dashboards & web apps',
    summary: 'Front-ends for the automations — KPI views, review queues and admin panels.',
    stack: 'React · Python · Flask',
    mock: DashboardMock,
    caption: 'Illustration',
  },
]

const WEB_FEATURES = [
  'Custom design, no templates',
  'Mobile-first & fast',
  'Smooth, premium motion',
  'SEO-ready',
  'Easy to edit (CMS)',
  'Forms → CRM & automations',
]

function Field({ label, children }) {
  return (
    <div className="border-t border-line py-4">
      <div className="mono-label mb-2">{label}</div>
      <div className="text-sm leading-relaxed text-ink">{children}</div>
    </div>
  )
}

function Shot({ shot, onOpen }) {
  return (
    <figure className="overflow-hidden rounded-lg border border-line bg-surface">
      <button
        onClick={() => onOpen(shot)}
        className="group relative block w-full cursor-zoom-in"
        aria-label={`Enlarge: ${shot.caption}`}
      >
        <img
          src={shot.src}
          alt={shot.caption}
          loading="lazy"
          className="max-h-[520px] w-full bg-[#1b1b1b] object-contain"
        />
        <span className="mono-label absolute bottom-3 right-3 flex items-center gap-1.5 rounded border border-line bg-bg/80 px-2 py-1 text-ink opacity-80 backdrop-blur transition-opacity group-hover:opacity-100">
          <HiArrowsPointingOut /> Expand
        </span>
      </button>
      <figcaption className="mono-label border-t border-line px-4 py-3">{shot.caption}</figcaption>
    </figure>
  )
}

function Illustration({ mock: Mock, caption = 'Illustration', className = '' }) {
  return (
    <figure className={className}>
      <Mock />
      <figcaption className="mono-label mt-2 px-1 text-dim">{caption}</figcaption>
    </figure>
  )
}

function Lightbox({ shot, onClose }) {
  useEffect(() => {
    if (!shot) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [shot, onClose])

  return (
    <AnimatePresence>
      {shot && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={shot.caption}
          className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 rounded-md border border-line bg-bg p-2 text-ink"
          >
            <HiXMark size={18} />
          </button>
          <img
            src={shot.src}
            alt={shot.caption}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] w-full max-w-[1600px] rounded-lg border border-line object-contain"
          />
          <div className="mono-label mt-4">{shot.caption}</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Project({ project, index, onOpen }) {
  const [first, ...rest] = project.shots
  return (
    <article className="border-t border-line pt-10 md:pt-14">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="mono-label flex flex-wrap items-center gap-3">
            <span className="text-accent">Project {String(index + 1).padStart(2, '0')}</span>
            <span className="text-dim">/</span>
            <span>{project.category}</span>
            <span className="rounded border border-line px-2 py-0.5 text-ink">{project.status}</span>
          </div>
          <h3 className="mt-5 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{project.title}</h3>
          <p className="mt-3 text-lg text-muted">{project.tagline}</p>
          {project.metrics && (
            <dl className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-line bg-line">
              {project.metrics.map(([num, label]) => (
                <div key={label} className="bg-surface p-4">
                  <dt className="text-2xl font-semibold text-ink">{num}</dt>
                  <dd className="mt-1 text-xs text-muted">{label}</dd>
                </div>
              ))}
            </dl>
          )}
        </Reveal>

        <Reveal delay={0.08}>
          <Field label="What I built">{project.built}</Field>
          <div className="grid grid-cols-2 gap-6">
            <Field label="Role">{project.role}</Field>
            <Field label="Stack">
              <span className="font-mono text-xs">{project.stack.join(' · ')}</span>
            </Field>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-8">
        <div className="mono-label mb-3 flex items-center justify-between">
          <span>System flow</span>
          <span>{project.flow.length} steps</span>
        </div>
        <FlowLine steps={project.flow} />
      </Reveal>

      <div className="mt-6 space-y-4">
        <Reveal>
          <Shot shot={first} onOpen={onOpen} />
        </Reveal>
        {(rest.length > 0 || project.mock) && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {rest.map((shot) => (
              <Reveal key={shot.caption}>
                <Shot shot={shot} onOpen={onOpen} />
              </Reveal>
            ))}
            {project.mock && (
              <Reveal>
                <Illustration mock={project.mock} className="h-full" />
              </Reveal>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

function Card({ item, onOpen, index }) {
  return (
    <Reveal delay={index * 0.06} className="flex flex-col">
      {item.shot ? (
        <Shot shot={item.shot} onOpen={onOpen} />
      ) : (
        <Illustration mock={item.mock} caption={item.caption} />
      )}
      <h4 className="mt-5 text-xl font-semibold text-ink">{item.title}</h4>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.summary}</p>
      <div className="mt-4 border-t border-line pt-3 font-mono text-xs text-ink">{item.stack}</div>
    </Reveal>
  )
}

function SubHeading({ label, title }) {
  return (
    <Reveal className="mb-10 border-t border-line pt-10 md:pt-14">
      <div className="mono-label text-accent">{label}</div>
      <h3 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h3>
    </Reveal>
  )
}

export default function Projects() {
  const [open, setOpen] = useState(null)

  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="04"
          label="Selected work"
          title={
            <>
              Systems built to <span className="text-muted">take work off people's plates.</span>
            </>
          }
          description="Real production workflows, shown the way they run — step by step, from trigger to action. Client names and IDs are blurred."
        />

        <div className="space-y-20 md:space-y-28">
          {FEATURED.map((project, i) => (
            <Project key={project.title} project={project} index={i} onOpen={setOpen} />
          ))}
        </div>

        <div className="mt-20 md:mt-28">
          <SubHeading label="More from the stack" title="Reporting, pipelines and knowledge agents." />
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
            {MORE.map((item, i) => (
              <Card key={item.title} item={item} index={i} onOpen={setOpen} />
            ))}
          </div>
        </div>

        <div id="websites" className="mt-20 md:mt-28">
          <SubHeading label="Websites & web development" title="Modern, luxurious websites — built to convert." />
          <Reveal as="p" className="-mt-4 mb-8 max-w-2xl leading-relaxed text-muted">
            Beyond automation, I design and build premium websites for brands that want to look the part —
            from luxury storefronts to fast, modern product sites, all connected to your CRM and automations.
          </Reveal>
          <Reveal as="ul" className="mb-12 flex flex-wrap gap-2">
            {WEB_FEATURES.map((f) => (
              <li key={f} className="flex items-center gap-2 rounded-full border border-line px-3.5 py-1.5 text-sm text-ink">
                <span className="h-1 w-1 rounded-full bg-accent" />
                {f}
              </li>
            ))}
          </Reveal>

          <Reveal className="grid grid-cols-1 gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-end">
            <Illustration mock={SHOWCASE_SITE.mock} caption={SHOWCASE_SITE.caption} />
            <div className="pb-8">
              <div className="mono-label text-accent">Featured concept</div>
              <h4 className="mt-3 text-2xl font-semibold text-ink sm:text-3xl">{SHOWCASE_SITE.title}</h4>
              <p className="mt-3 leading-relaxed text-muted">{SHOWCASE_SITE.summary}</p>
              <div className="mt-5 border-t border-line pt-3 font-mono text-xs text-ink">{SHOWCASE_SITE.stack}</div>
              <a href="#contact" className="btn btn-primary mt-6">
                Start a website project
              </a>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
            {WEBSITES.map((item, i) => (
              <Card key={item.title} item={item} index={i} onOpen={setOpen} />
            ))}
          </div>
        </div>
      </div>

      <Lightbox shot={open} onClose={() => setOpen(null)} />
    </section>
  )
}
