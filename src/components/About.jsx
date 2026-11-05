import { HiArrowRight, HiOutlineDownload } from 'react-icons/hi'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import StatusDot from './StatusDot.jsx'
import { SITE } from '../site.js'
import candid from '../assets/processed/faizan-candid.webp'

const FACTS = [
  ['Based in', 'Karachi, Pakistan (Remote)'],
  ['Focus', 'AI agents, automation & premium websites'],
  ['Currently', `Founder, ${SITE.agency || 'AI agency & software studio'}`],
  ['Studying', 'BS Computer Science, FUUAST'],
]

const BUILDING = [
  'AI agents and LLM assistants wired into business tools',
  'Modern, luxury websites for brands that want to stand out',
  'Automation workflows that remove repetitive ops work',
  'Knowledge systems on top of company documents',
]

const EDUCATION = [
  {
    school: 'Federal Urdu University of Arts, Science & Technology',
    degree: 'Bachelor of Computer Science',
    period: '2023 — 2026',
  },
  {
    school: 'Government Degree College, Malir Cantt',
    degree: 'Intermediate, Computer Science',
    period: '2020 — 2022',
  },
]

const CERTIFICATIONS = [
  ['Machine Learning with Python', 'IBM'],
  ['Generative AI with LangChain', 'IBM'],
  ['LLMs with LangChain', 'Coursera / NYIF'],
  ['Prompt Engineering', 'DeepLearning.AI'],
  ['CS50', 'Harvard University'],
]

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="06"
          label="About"
          title={
            <>
              I care about systems <span className="text-muted">that actually ship.</span>
            </>
          }
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="mx-auto w-full max-w-sm lg:mx-0">
            <div className="border border-line bg-surface p-2">
              <img
                src={candid}
                alt="Faizan Saleem at work"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover grayscale transition duration-700 hover:grayscale-0"
              />
            </div>
            <div className="mt-4 rounded-lg border border-line bg-surface p-5">
              <div className="mono-label">Work status</div>
              <div className="mt-3 flex items-center gap-2 text-lg font-semibold text-ink">
                <StatusDot /> Taking new projects
              </div>
              <div className="mt-1 text-sm text-muted">AI agents · Automations · Websites</div>
              <div className="mt-5 flex flex-wrap gap-2">
                <a href="#contact" className="btn btn-primary h-10">
                  Start a project <HiArrowRight />
                </a>
                {SITE.cvUrl && (
                  <a href={SITE.cvUrl} download className="btn btn-ghost h-10">
                    <HiOutlineDownload /> CV
                  </a>
                )}
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal as="p" className="text-lg leading-relaxed text-muted">
              I'm an AI Engineer who lives at the intersection of{' '}
              <span className="text-ink">large language models</span> and{' '}
              <span className="text-ink">real-world operations</span>. In October 2026 I started my
              own AI agency and software studio. Before that I built AI agents and LLM assistants at{' '}
              <span className="text-ink">UNITZERO</span>, automated outbound and lead-gen pipelines for{' '}
              <span className="text-ink">Scaletopia</span>, and spent 1.5 years freelancing — designing
              n8n workflows, RAG knowledge agents and calling agents for clients across industries.
            </Reveal>
            <Reveal as="p" delay={0.05} className="mt-5 text-lg leading-relaxed text-muted">
              What I care about is systems that actually ship: pipelines that connect an LLM to a CRM, a
              webhook and a human without falling over — and websites that look as premium as the
              business behind them.
            </Reveal>

            <Reveal as="dl" delay={0.1} className="mt-10 border-t border-line">
              {FACTS.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[110px_1fr] gap-4 border-b border-line py-3.5 sm:grid-cols-[160px_1fr]">
                  <dt className="mono-label pt-0.5">{k}</dt>
                  <dd className="text-sm text-ink">{v}</dd>
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.15} className="mt-10">
              <div className="mono-label mb-4">Currently building</div>
              <ul className="space-y-2.5">
                {BUILDING.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-ink">
                    <span className="h-px w-4 shrink-0 bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="mono-label mb-4 text-ink">Education</div>
            <ul className="border-t border-line">
              {EDUCATION.map((ed) => (
                <li key={ed.school} className="border-b border-line py-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="font-semibold text-ink">{ed.degree}</span>
                    <span className="font-mono text-xs text-muted">{ed.period}</span>
                  </div>
                  <div className="mt-1 text-sm text-muted">{ed.school}</div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mono-label mb-4 text-ink">Certifications</div>
            <ul className="border-t border-line">
              {CERTIFICATIONS.map(([name, issuer]) => (
                <li key={name} className="flex items-baseline justify-between gap-4 border-b border-line py-3.5">
                  <span className="text-sm text-ink">{name}</span>
                  <span className="mono-label shrink-0">{issuer}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
