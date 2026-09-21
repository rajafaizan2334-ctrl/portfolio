import { useRef } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineArrowUpRight } from 'react-icons/hi2'
import SectionHeading from './SectionHeading.jsx'

const PROJECTS = [
  {
    title: 'n8n + LLM Support Assistant',
    tag: 'Customer Support Automation',
    description:
      'Automated ticket routing, summarization, and response generation using GPT orchestrated through n8n — cutting first-response time and manual triage.',
    stack: ['n8n', 'OpenAI API', 'Webhooks', 'CRM'],
    gradient: 'from-violet-500/25 via-fuchsia-500/10 to-transparent',
  },
  {
    title: 'RAG Knowledge Agent',
    tag: 'Retrieval-Augmented Generation',
    description:
      'AI knowledge base with embeddings, vector search, and automated indexing that answers document Q&A with accurate, grounded responses.',
    stack: ['LangChain', 'Vector Store', 'Embeddings', 'Python'],
    gradient: 'from-cyan-400/25 via-blue-500/10 to-transparent',
  },
  {
    title: 'AI Calling Agent',
    tag: 'Voice Automation',
    description:
      'Voice bot combining speech-to-text and GPT with automated call logging and event triggers for real-time, hands-free conversations.',
    stack: ['Speech-to-Text', 'GPT', 'Automation', 'APIs'],
    gradient: 'from-emerald-400/25 via-teal-500/10 to-transparent',
  },
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14
    el.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${y}deg) translateY(-6px)`
  }

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg)'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-surface p-8 transition-transform duration-300 ease-out will-change-transform"
    >
      <div
        className={`absolute -inset-1 bg-gradient-to-br ${project.gradient} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
      />
      <div className="relative">
        <div className="flex items-start justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-300">
            {project.tag}
          </span>
          <motion.span
            whileHover={{ rotate: 45 }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-ink"
          >
            <HiOutlineArrowUpRight size={16} />
          </motion.span>
        </div>
        <h3 className="font-display mt-5 text-2xl font-semibold text-ink">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-muted"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Selected work"
          title="Systems I've designed & shipped"
          description="A few of the agents and automations built to replace manual, repetitive work with reliable pipelines."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
