import { motion } from 'framer-motion'
import {
  HiOutlineCpuChip,
  HiOutlineCommandLine,
  HiOutlineCircleStack,
  HiOutlineBolt,
} from 'react-icons/hi2'
import SectionHeading from './SectionHeading.jsx'

const CATEGORIES = [
  {
    icon: HiOutlineCpuChip,
    title: 'AI & LLM',
    color: 'from-violet-500/20 to-violet-500/0',
    items: [
      'RAG pipelines',
      'LangChain',
      'OpenAI API',
      'Prompt engineering',
      'Vector stores',
      'LLM agents',
      'Calling agents',
      'Embeddings & semantic search',
    ],
  },
  {
    icon: HiOutlineBolt,
    title: 'Automation',
    color: 'from-cyan-500/20 to-cyan-500/0',
    items: [
      'n8n',
      'make.com',
      'Workflow orchestration',
      'API integration',
      'Webhooks',
      'Conditional logic',
      'CRM & email automation',
    ],
  },
  {
    icon: HiOutlineCommandLine,
    title: 'Programming',
    color: 'from-fuchsia-500/20 to-fuchsia-500/0',
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Flask', 'React'],
  },
  {
    icon: HiOutlineCircleStack,
    title: 'Data, ML & Cloud',
    color: 'from-emerald-400/20 to-emerald-400/0',
    items: ['scikit-learn', 'PyTorch', 'MySQL', 'Data pipelines', 'AWS', 'Git', 'REST APIs'],
  },
]

const MARQUEE_ITEMS = [
  'n8n',
  'LangChain',
  'OpenAI API',
  'RAG',
  'make.com',
  'Python',
  'React',
  'Vector DBs',
  'PyTorch',
  'AWS',
  'Webhooks',
  'CRM Automation',
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Capabilities"
          title="The stack behind the automation"
          description="From reasoning agents to the pipes that carry data between them — here's what I build with day to day."
        />
      </div>

      <div className="relative mb-16 overflow-hidden py-3">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />
        <div className="flex w-max animate-marquee gap-4">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className="glass whitespace-nowrap rounded-full px-5 py-2 font-mono text-sm text-ink/90"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface p-6"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <cat.icon className="text-cyan-300" size={22} />
                </div>
                <h3 className="font-display mt-5 text-lg font-semibold text-ink">{cat.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted transition-colors group-hover:text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
