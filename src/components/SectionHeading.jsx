import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`mb-14 ${align === 'center' ? 'text-center mx-auto max-w-2xl' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className={`flex items-center gap-3 text-sm font-mono uppercase tracking-[0.25em] text-violet-300/80 ${align === 'center' ? 'justify-center' : ''}`}
      >
        <span className="h-px w-8 bg-gradient-to-r from-violet-400 to-cyan-300" />
        {eyebrow}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="font-display mt-4 text-3xl font-semibold text-ink sm:text-4xl md:text-[2.6rem]"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-muted text-base leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
