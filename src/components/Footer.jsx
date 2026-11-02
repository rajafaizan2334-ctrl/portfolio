import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { SITE } from '../site.js'

const SOCIALS = [
  { icon: FiLinkedin, label: 'LinkedIn', href: SITE.linkedin },
  { icon: FiGithub, label: 'GitHub', href: SITE.github },
  { icon: FiMail, label: 'Email', href: `mailto:${SITE.email}` },
]

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <div className="text-4xl font-bold tracking-tight text-ink sm:text-6xl">
              FAIZAN SALEEM<span className="text-accent">.</span>
            </div>
            <div className="mono-label mt-4">
              {SITE.role} · {SITE.location}
            </div>
          </div>
          <div className="flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-md border border-line text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <div className="mono-label mt-12 flex flex-col justify-between gap-2 border-t border-line pt-6 sm:flex-row">
          <span>© {new Date().getFullYear()} {SITE.name}</span>
          <span>Built to automate. Shipped to last.</span>
        </div>
      </div>
    </footer>
  )
}
