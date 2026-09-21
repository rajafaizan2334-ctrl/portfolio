import { motion } from 'framer-motion'
import { HiOutlineAcademicCap, HiOutlineBadgeCheck } from 'react-icons/hi'
import SectionHeading from './SectionHeading.jsx'

const EDUCATION = [
  {
    school: 'Federal Urdu University of Arts, Science & Technology',
    degree: 'Bachelor of Computer Science',
    period: '2023 — 2026',
    location: 'Islamabad, Pakistan',
  },
  {
    school: 'Government Degree College, Malir Cantt',
    degree: 'Intermediate, Computer Science',
    period: '2020 — 2022',
    location: 'Karachi, Pakistan',
  },
]

const CERTIFICATIONS = [
  { name: 'Machine Learning with Python', issuer: 'IBM' },
  { name: 'Generative AI with LangChain', issuer: 'IBM' },
  { name: 'LLMs with LangChain', issuer: 'Coursera / NYIF' },
  { name: 'Prompt Engineering', issuer: 'DeepLearning.AI' },
  { name: 'CS50', issuer: 'Harvard University' },
]

export default function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Background" title="Education & certifications" />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-ink">
              <HiOutlineAcademicCap className="text-violet-300" size={20} />
              Education
            </div>
            <div className="space-y-5">
              {EDUCATION.map((ed, i) => (
                <motion.div
                  key={ed.school}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl border border-border bg-surface p-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-ink">{ed.degree}</h3>
                    <span className="font-mono text-xs text-cyan-300">{ed.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-violet-300">{ed.school}</p>
                  <p className="mt-1 text-xs text-muted">{ed.location}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-ink">
              <HiOutlineBadgeCheck className="text-cyan-300" size={20} />
              Certifications
            </div>
            <div className="space-y-3">
              {CERTIFICATIONS.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-surface px-5 py-4"
                >
                  <div>
                    <div className="text-sm font-medium text-ink">{cert.name}</div>
                    <div className="text-xs text-muted">{cert.issuer}</div>
                  </div>
                  <HiOutlineBadgeCheck className="shrink-0 text-violet-300" size={20} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
