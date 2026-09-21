import { motion } from 'framer-motion'
import { HiOutlineAcademicCap, HiOutlineLocationMarker, HiOutlineSparkles } from 'react-icons/hi'
import SectionHeading from './SectionHeading.jsx'
import candid from '../assets/processed/faizan-candid.webp'

const FACTS = [
  { icon: HiOutlineLocationMarker, label: 'Based in', value: 'Karachi, Pakistan (Remote)' },
  { icon: HiOutlineAcademicCap, label: 'Studying', value: 'BS Computer Science, FUUAST' },
  { icon: HiOutlineSparkles, label: 'Focus', value: 'LLM Agents & Automation' },
]

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="About me" title="Turning messy workflows into intelligent systems" />

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-cyan-400/20 via-transparent to-violet-500/25 blur-2xl" />
            <div className="glass overflow-hidden rounded-[2rem] p-3">
              <div className="overflow-hidden rounded-[1.5rem]">
                <img
                  src={candid}
                  alt="Faizan Saleem, AI engineer"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
            <motion.div
              animate={{ rotate: [0, 3, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-6 rounded-2xl border border-white/10 bg-bg px-4 py-3 shadow-xl shadow-black/40"
            >
              <div className="font-display text-xl font-semibold text-gradient">1.5+ yrs</div>
              <div className="text-[11px] text-muted">shipping AI systems</div>
            </motion.div>
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="text-lg leading-relaxed text-muted"
            >
              I'm an AI Engineer who lives at the intersection of{' '}
              <span className="text-ink">large language models</span> and{' '}
              <span className="text-ink">real-world operations</span>. Currently building AI
              agents and LLM-powered assistants at <span className="text-ink">UNITZERO</span>,
              after a run automating outbound and lead-gen pipelines for{' '}
              <span className="text-ink">Scaletopia</span> and 1.5 years freelancing — designing
              n8n workflows, RAG knowledge agents, and calling agents for clients across
              industries.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 text-lg leading-relaxed text-muted"
            >
              I care about systems that actually ship — pipelines that connect an LLM to a CRM,
              a webhook, and a human, without falling over. Currently finishing my Bachelor's in
              Computer Science at Federal Urdu University of Arts, Science &amp; Technology.
            </motion.p>

            <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {FACTS.map((fact, i) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                  className="rounded-2xl border border-border bg-surface p-4"
                >
                  <fact.icon className="text-cyan-300" size={20} />
                  <div className="mt-3 text-xs uppercase tracking-wide text-muted">
                    {fact.label}
                  </div>
                  <div className="mt-1 text-sm font-medium text-ink">{fact.value}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
