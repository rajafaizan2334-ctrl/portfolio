import { motion } from 'framer-motion'
import { HiArrowRight, HiArrowDown, HiOutlineDownload } from 'react-icons/hi'
import StatusDot from './StatusDot.jsx'
import { SITE } from '../site.js'
import portrait from '../assets/processed/faizan-portrait.webp'

const TICKER = [
  'LLM Agents',
  'RAG Pipelines',
  'n8n',
  'make.com',
  'Voice AI · Vapi',
  'GoHighLevel',
  'Airtable',
  'Claude',
  'OpenAI API',
  'Slack API',
  'LangChain',
  'Python',
  'React',
  'Luxury web design',
]

const STATS = [
  ['2+', 'Years building AI systems'],
  ['10+', 'Apps, sites & automations shipped'],
  ['3', 'Teams & founders served'],
]

const rise = (delay) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
})

function Corner({ className }) {
  return <span className={`absolute h-4 w-4 border-accent ${className}`} aria-hidden="true" />
}

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-16 md:pt-40">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-4 sm:px-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
        <div>
          <motion.div {...rise(0)} className="mono-label flex flex-wrap items-center gap-3">
            <span className="text-accent">01</span>
            <span className="text-dim">/</span>
            <span>Professional profile</span>
          </motion.div>

          <motion.h1
            {...rise(0.08)}
            className="mt-7 text-[2.6rem] font-semibold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            I build AI agents that turn manual work into{' '}
            <span className="text-muted">self-running systems.</span>
          </motion.h1>

          <motion.p {...rise(0.18)} className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
            I'm Faizan — AI engineer and founder of{' '}
            <span className="text-ink">{SITE.agency || 'an AI agency & software studio'}</span>. I build
            AI agents, n8n / make.com automations and modern, premium websites for businesses that want
            their work to run itself.
          </motion.p>

          <motion.div {...rise(0.26)} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#work" className="btn btn-primary">
              View my work <HiArrowRight />
            </a>
            {SITE.cvUrl && (
              <a href={SITE.cvUrl} download className="btn btn-ghost">
                <HiOutlineDownload /> Download CV
              </a>
            )}
            <a
              href="#contact"
              className="mono-label ml-2 inline-flex items-center gap-2 text-ink underline-offset-4 hover:underline"
            >
              Let's connect <HiArrowDown />
            </a>
          </motion.div>

          <motion.dl
            {...rise(0.34)}
            className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-6"
          >
            {STATS.map(([num, label]) => (
              <div key={label}>
                <dt className="text-2xl font-semibold text-ink sm:text-3xl">{num}</dt>
                <dd className="mt-1 text-xs leading-snug text-muted">{label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.figure {...rise(0.2)} className="relative mx-auto w-full max-w-sm">
          <div className="mono-label mb-3 flex items-center justify-between">
            <span>ID / FS-01</span>
            <span className="flex items-center gap-2 text-ink">
              <StatusDot /> Status: open
            </span>
          </div>
          <div className="relative border border-line bg-surface p-2">
            <Corner className="-left-px -top-px border-l border-t" />
            <Corner className="-right-px -top-px border-r border-t" />
            <Corner className="-bottom-px -left-px border-b border-l" />
            <Corner className="-bottom-px -right-px border-b border-r" />
            <img
              src={portrait}
              alt="Faizan Saleem"
              className="aspect-[4/5] w-full object-cover object-top grayscale transition duration-700 hover:grayscale-0"
            />
          </div>
          <figcaption className="mono-label mt-3 flex items-center justify-between">
            <span>{SITE.role}</span>
            <span>KHI · PK · Remote</span>
          </figcaption>
        </motion.figure>
      </div>

      <div className="relative mt-20 overflow-hidden border-y border-line bg-surface/60 py-4">
        <div className="flex w-max animate-ticker">
          {[...TICKER, ...TICKER].map((item, i) => (
            <span key={i} className="mono-label flex items-center whitespace-nowrap px-6 text-ink/80">
              {item}
              <span className="ml-12 text-accent">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
