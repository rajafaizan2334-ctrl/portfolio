import { motion } from 'framer-motion'

// Fades and lifts its content in the first time it scrolls into view.
export default function Reveal({ as = 'div', delay = 0, y = 18, className = '', children, ...props }) {
  const Tag = motion[as]
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...props}
    >
      {children}
    </Tag>
  )
}
