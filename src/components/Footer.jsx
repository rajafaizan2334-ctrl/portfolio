import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-bg py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} Faizan Saleem. Built with React, Tailwind &amp; Framer Motion.</p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:rajafaizan2554@gmail.com"
            className="transition-colors hover:text-cyan-300"
            aria-label="Email"
          >
            <FiMail size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/faizansaleem-2965b1265"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-cyan-300"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href="https://github.com/rajafaizan2334-ctrl"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-cyan-300"
            aria-label="GitHub"
          >
            <FiGithub size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
