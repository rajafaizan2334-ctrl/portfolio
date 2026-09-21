import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function MagneticButton({ as: Tag = 'a', className = '', children, ...props }) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`
  }

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0px, 0px)'
  }

  const MotionTag = motion.create ? motion.create(Tag) : motion(Tag)

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`transition-transform duration-300 ease-out ${className}`}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
