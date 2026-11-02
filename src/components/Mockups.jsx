// Code-drawn illustrations for work that has no screenshot. They are labelled
// as illustrations wherever they're used.

function Frame({ title, children, className = '' }) {
  return (
    <div className={`overflow-hidden rounded-lg border border-line bg-surface ${className}`}>
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="h-2 w-2 rounded-full bg-line" />
        <span className="mono-label ml-2 truncate">{title}</span>
      </div>
      {children}
    </div>
  )
}

function Chip({ children, on }) {
  return (
    <span
      className={`rounded border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
        on ? 'border-accent/40 text-accent' : 'border-line text-muted'
      }`}
    >
      {children}
    </span>
  )
}

export function GhlMock() {
  return (
    <Frame title="CRM · Conversations · SMS" className="h-full">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div>
          <div className="text-sm font-medium text-ink">Inbound lead</div>
          <div className="font-mono text-[11px] text-dim">+1 (•••) •••-2041</div>
        </div>
        <div className="flex gap-1.5">
          <Chip>DND off</Chip>
          <Chip>Opt-in</Chip>
        </div>
      </div>
      <div className="space-y-3 px-4 py-5 text-sm">
        <div className="max-w-[80%] rounded-lg rounded-bl-none bg-raised px-3 py-2 text-ink">
          Yes, interested. Can you send over the details?
        </div>
        <div className="mono-label flex items-center gap-2 text-[10px]">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Synced to Airtable · campaign matched
        </div>
        <div className="ml-auto max-w-[80%] rounded-lg rounded-br-none bg-ink px-3 py-2 text-bg">
          Of course! Sending them now. What's the best time for a quick call?
        </div>
        <div className="mono-label text-right text-[10px]">Sent via GHL · DND + opt-out checked</div>
      </div>
      <div className="flex flex-wrap gap-1.5 border-t border-line px-4 py-3">
        <Chip on>reply-logged</Chip>
        <Chip>campaign:synced</Chip>
        <Chip>contact:upserted</Chip>
      </div>
    </Frame>
  )
}

export function DashboardMock() {
  const rows = [
    ['Client A', 412, 38, 'On track'],
    ['Client B', 286, 21, 'On track'],
    ['Client C', 198, 9, 'At risk'],
    ['Client D', 351, 27, 'On track'],
  ]
  return (
    <Frame title="ops-dashboard.app / weekly">
      <div className="grid grid-cols-3 gap-px border-b border-line bg-line">
        {[
          ['Sends', '1,247'],
          ['Replies', '95'],
          ['Booked', '14'],
        ].map(([k, v]) => (
          <div key={k} className="bg-surface px-4 py-3">
            <div className="mono-label text-[10px]">{k}</div>
            <div className="mt-1 text-xl font-semibold text-ink">{v}</div>
          </div>
        ))}
      </div>
      <div className="flex h-20 items-end gap-1.5 border-b border-line px-4 py-3">
        {[40, 55, 35, 70, 62, 85, 74, 90, 66, 80, 95, 72].map((h, i) => (
          <span key={i} className={`flex-1 rounded-sm ${i === 10 ? 'bg-accent' : 'bg-raised'}`} style={{ height: `${h}%` }} />
        ))}
      </div>
      <ul className="px-4 py-2 text-xs">
        {rows.map(([name, sends, replies, status]) => (
          <li key={name} className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-4 border-b border-line py-2 last:border-0">
            <span className="text-ink">{name}</span>
            <span className="font-mono text-muted">{sends}</span>
            <span className="font-mono text-muted">{replies}</span>
            <Chip on={status === 'At risk'}>{status}</Chip>
          </li>
        ))}
      </ul>
    </Frame>
  )
}

export function SiteMock() {
  return (
    <Frame title="client-site.com">
      <div className="px-5 py-6">
        <div className="flex items-center justify-between">
          <span className="h-2.5 w-14 rounded-sm bg-ink/80" />
          <span className="flex gap-3">
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-1.5 w-8 rounded-sm bg-line" />
            ))}
          </span>
        </div>
        <div className="mt-8 space-y-2.5">
          <span className="block h-4 w-4/5 rounded-sm bg-ink/85" />
          <span className="block h-4 w-3/5 rounded-sm bg-ink/85" />
          <span className="block h-2 w-2/3 rounded-sm bg-line" />
          <span className="block h-2 w-1/2 rounded-sm bg-line" />
        </div>
        <div className="mt-6 flex gap-2">
          <span className="h-7 w-24 rounded bg-accent" />
          <span className="h-7 w-20 rounded border border-line" />
        </div>
        <div className="mt-8 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded border border-line p-3">
              <span className="block h-5 w-5 rounded bg-raised" />
              <span className="mt-3 block h-1.5 w-full rounded-sm bg-line" />
              <span className="mt-1.5 block h-1.5 w-2/3 rounded-sm bg-line" />
            </div>
          ))}
        </div>
      </div>
    </Frame>
  )
}

export function RagMock() {
  return (
    <Frame title="knowledge-agent · query">
      <div className="space-y-3 p-5 font-mono text-xs leading-relaxed">
        <p className="text-ink">
          <span className="text-accent">?</span> What's our refund window for annual plans?
        </p>
        <div className="rounded border border-line p-3 text-muted">
          <div className="mono-label mb-2 text-[10px]">Retrieved · top 3 chunks</div>
          <div>policy.pdf §4.2 · score 0.89</div>
          <div>faq.md #billing · score 0.84</div>
          <div>terms.pdf §11 · score 0.77</div>
        </div>
        <p className="text-ink">
          <span className="text-accent">›</span> Annual plans can be refunded within 30 days of purchase…
          <span className="text-dim"> [policy.pdf §4.2]</span>
        </p>
      </div>
    </Frame>
  )
}
