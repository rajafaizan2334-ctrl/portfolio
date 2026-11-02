import Reveal from './Reveal.jsx'

export default function SectionHeading({ index, label, title, description }) {
  return (
    <div className="mb-14 md:mb-20">
      <Reveal className="mono-label flex items-center gap-3">
        <span className="text-accent">{index}</span>
        <span className="text-dim">/</span>
        <span>{label}</span>
        <span className="h-px flex-1 bg-line" />
      </Reveal>
      <Reveal
        as="h2"
        delay={0.05}
        className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl"
      >
        {title}
      </Reveal>
      {description && (
        <Reveal as="p" delay={0.1} className="mt-6 max-w-2xl leading-relaxed text-muted md:text-lg">
          {description}
        </Reveal>
      )}
    </div>
  )
}
