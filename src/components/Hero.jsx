import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown, HiOutlineMail } from 'react-icons/hi'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import ParticleField from './ParticleField.jsx'
import MagneticButton from './MagneticButton.jsx'
import portrait from '../assets/processed/faizan-portrait.webp'

const ROLES = ['LLM Agent Developer', 'AI Automation Engineer', 'RAG Systems Builder', 'n8n & Workflow Architect']

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
}

const word = {
  hidden: { y: '110%', opacity: 0 },
  show: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

function RevealWords({ text, className }) {
  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="show"
      className={`inline-flex flex-wrap ${className}`}
    >
      {text.split(' ').map((w, i) => (
        <span key={i} className="overflow-hidden pb-1 pr-3">
          <motion.span variants={word} className="inline-block">
            {w}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % ROLES.length), 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_20%,black,transparent)]" />

      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-32 top-10 h-[26rem] w-[26rem] rounded-full bg-violet-600/25 blur-[110px]"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[-6rem] top-40 h-[24rem] w-[24rem] rounded-full bg-cyan-500/20 blur-[110px]"
      />
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[-6rem] left-1/3 h-[22rem] w-[22rem] rounded-full bg-fuchsia-500/15 blur-[110px]"
      />

      <ParticleField className="pointer-events-auto absolute inset-0 h-full w-full opacity-70" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-mono uppercase tracking-[0.2em] text-cyan-200/90"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            Open to new opportunities · Karachi, PK (Remote)
          </motion.div>

          <h1 className="font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl md:text-6xl">
            <RevealWords text="Hi, I'm Faizan Saleem." />
            <RevealWords text="I build" className="text-gradient" />
            <span className="mt-1 block h-[1.2em] overflow-hidden">
              <motion.span
                key={roleIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-gradient block"
              >
                {ROLES[roleIndex]}
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            AI Engineer specializing in LLM agents, RAG pipelines, and workflow automation —
            shipping production assistants, chatbots, and multi-step automations across n8n,
            make.com, and Python that connect LLMs to real CRMs and APIs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-7 py-3 text-sm font-semibold text-bg shadow-[0_0_40px_-8px_rgba(124,92,255,0.7)]"
            >
              View my work
              <HiArrowDown className="-rotate-90 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton
              href="mailto:rajafaizan2554@gmail.com"
              className="glass inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-ink hover:border-cyan-300/50"
            >
              <HiOutlineMail /> Get in touch
            </MagneticButton>

            <div className="ml-1 flex items-center gap-3">
              <MagneticButton
                href="https://www.linkedin.com/in/faizansaleem-2965b1265"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-ink hover:border-violet-400/60 hover:text-violet-300"
              >
                <FiLinkedin size={18} />
              </MagneticButton>
              <MagneticButton
                href="https://github.com/rajafaizan2334-ctrl"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-ink hover:border-violet-400/60 hover:text-violet-300"
              >
                <FiGithub size={18} />
              </MagneticButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-6"
          >
            {[
              ['1.5+', 'Years building AI systems'],
              ['10+', 'Web apps & automations shipped'],
              ['3', 'Companies & founders served'],
            ].map(([num, label]) => (
              <div key={label}>
                <div className="font-display text-2xl font-semibold text-ink">{num}</div>
                <div className="mt-1 text-xs leading-snug text-muted">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto hidden aspect-[4/5] w-full max-w-sm lg:block"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-violet-500/30 via-transparent to-cyan-400/30 blur-2xl" />
          <div className="glass relative h-full w-full overflow-hidden rounded-[2rem] p-3">
            <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-gradient-to-b from-white/5 to-transparent">
              <img
                src={portrait}
                alt="Faizan Saleem"
                className="h-full w-full object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
            </div>
          </div>
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="glass absolute -left-8 top-10 rounded-2xl px-4 py-3 text-xs"
          >
            <div className="font-mono text-cyan-300">agent.status</div>
            <div className="mt-0.5 font-semibold text-ink">Deploying workflow…</div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="glass absolute -right-6 bottom-14 rounded-2xl px-4 py-3 text-xs"
          >
            <div className="font-semibold text-ink">n8n × LLM × RAG</div>
            <div className="mt-0.5 text-muted">Production-ready</div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
        </motion.span>
      </motion.a>
    </section>
  )
}
