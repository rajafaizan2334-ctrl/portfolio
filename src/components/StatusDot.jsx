export default function StatusDot({ className = '' }) {
  return (
    <span className={`relative inline-flex h-2 w-2 shrink-0 ${className}`}>
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
    </span>
  )
}
