import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

const MAP = [
  {
    title: 'AI & LLM',
    items: ['LLM agents', 'OpenAI API', 'Claude', 'RAG pipelines', 'LangChain', 'Vector stores', 'Prompt engineering', 'Vapi voice agents'],
  },
  {
    title: 'Automation',
    items: ['n8n', 'make.com', 'GoHighLevel', 'Airtable', 'Slack API', 'Webhooks', 'QuickChart'],
  },
  {
    title: 'Development',
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Flask', 'React'],
  },
  {
    title: 'Data, ML & Cloud',
    items: ['scikit-learn', 'PyTorch', 'MySQL', 'Data pipelines', 'AWS', 'Git', 'REST APIs'],
  },
]

const LEVELS = ['Working knowledge', 'Hands-on', 'Strong']

// Self-assessed: 2 = Strong, 1 = Hands-on, 0 = Working knowledge.
const MATRIX = [
  ['n8n', 2],
  ['make.com', 2],
  ['LLM agents', 2],
  ['Prompt engineering', 2],
  ['Airtable', 2],
  ['Python', 2],
  ['GoHighLevel', 1],
  ['Vapi voice agents', 1],
  ['RAG pipelines', 1],
  ['LangChain', 1],
  ['React', 1],
  ['SQL', 1],
  ['PyTorch', 0],
  ['AWS', 0],
]

export default function Systems() {
  return (
    <section id="systems" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          index="05"
          label="System map"
          title={
            <>
              The stack, <span className="text-muted">connected by how I use it.</span>
            </>
          }
        />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {MAP.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06} className="bg-surface p-6">
              <div className="mono-label flex items-center justify-between">
                <span className="text-ink">{group.title}</span>
                <span className="text-accent">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <ul className="mt-6 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted">
                    <span className="h-1 w-1 rounded-full bg-dim" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <div className="mono-label mb-4 flex flex-wrap items-center justify-between gap-3">
            <span className="text-ink">Skill matrix</span>
            <span className="flex flex-wrap gap-4">
              {LEVELS.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </span>
          </div>
          <ul className="grid grid-cols-1 border-t border-line md:grid-cols-2 md:gap-x-12">
            {MATRIX.map(([name, level]) => (
              <li key={name} className="flex items-center gap-4 border-b border-line py-3.5">
                <span className="flex-1 text-sm text-ink">{name}</span>
                <span className="mono-label hidden w-36 text-right sm:block">{LEVELS[level]}</span>
                <span className="flex gap-1" aria-label={LEVELS[level]}>
                  {LEVELS.map((_, i) => (
                    <span key={i} className={`h-2 w-6 rounded-sm ${i <= level ? 'bg-accent' : 'bg-line'}`} />
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
