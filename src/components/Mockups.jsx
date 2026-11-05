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

// A faceted gemstone drawn with gradients, used in the jewellery concept.
function Gem({ size = 56, hue = '#e9d5a6' }) {
  return (
    <span
      className="relative inline-block rotate-45 rounded-[3px]"
      style={{
        width: size,
        height: size,
        background: `conic-gradient(from 45deg, #fff8, ${hue}, #6b5a3a, ${hue}, #fff6, #8c7448, ${hue})`,
        boxShadow: `0 0 ${size / 1.5}px ${hue}55`,
      }}
    >
      <span className="absolute inset-[22%] rounded-[2px] bg-white/25" />
    </span>
  )
}

export function JewelMock() {
  const pieces = [
    ['The Solène Ring', 'From $4,200', '#e9d5a6'],
    ['Aurore Pendant', 'From $3,650', '#cfe3ef'],
    ['Céleste Studs', 'From $2,900', '#f2d6d9'],
  ]
  return (
    <Frame title="maison-aurelle.com — design concept">
      <div className="bg-[#0b0a08] text-[#e8dcc4]">
        <div className="flex items-center justify-between border-b border-[#e8dcc4]/10 px-5 py-4 sm:px-8">
          <span className="font-serif text-sm tracking-[0.35em]">MAISON AURELLE</span>
          <span className="mx-6 hidden gap-6 text-[10px] uppercase tracking-[0.25em] text-[#e8dcc4]/60 md:flex">
            <span>Collections</span>
            <span>Atelier</span>
            <span>Bespoke</span>
          </span>
          <span className="border border-[#c8a96a]/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[#c8a96a]">
            Book a viewing
          </span>
        </div>

        <div className="grid grid-cols-1 items-center gap-8 px-5 py-10 sm:grid-cols-2 sm:px-8 sm:py-14">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#c8a96a]">Haute joaillerie — 2026</div>
            <h4 className="mt-4 font-serif text-4xl leading-[1.05] text-[#f4ead6] sm:text-5xl">
              Light, <em className="text-[#c8a96a]">set in gold.</em>
            </h4>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#e8dcc4]/60">
              Hand-finished pieces from our Paris atelier, made to be worn for a lifetime.
            </p>
            <div className="mt-7 flex items-center gap-5">
              <span className="bg-[#c8a96a] px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#0b0a08]">
                Discover the collection
              </span>
              <span className="border-b border-[#e8dcc4]/40 pb-0.5 text-[10px] uppercase tracking-[0.2em]">
                Our craft
              </span>
            </div>
          </div>
          <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_45%,#3a2f1c,#0b0a08_70%)]">
            <span className="absolute h-40 w-40 rounded-full border-[6px] border-[#c8a96a] shadow-[0_0_60px_#c8a96a55,inset_0_0_20px_#00000088] sm:h-48 sm:w-48" />
            <span className="absolute top-[14%]">
              <Gem size={48} />
            </span>
            <span className="absolute bottom-4 right-4 font-serif text-xs italic text-[#e8dcc4]/50">
              The Solène Ring
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 border-t border-[#e8dcc4]/10">
          {pieces.map(([name, price, hue]) => (
            <div key={name} className="flex flex-col items-center border-r border-[#e8dcc4]/10 px-2 py-6 last:border-0">
              <Gem size={22} hue={hue} />
              <span className="mt-5 text-center font-serif text-sm text-[#f4ead6] sm:text-base">{name}</span>
              <span className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#e8dcc4]/50">{price}</span>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  )
}

export function EstateMock() {
  return (
    <Frame title="noir-estates.com — design concept">
      <div className="bg-[#f3efe8] text-[#1d1a16]">
        <div className="flex items-center justify-between px-5 py-3.5">
          <span className="font-serif text-sm tracking-[0.3em]">NOIR ESTATES</span>
          <span className="text-[9px] uppercase tracking-[0.2em] text-[#1d1a16]/60">Enquire</span>
        </div>
        <div className="relative mx-3 h-44 overflow-hidden bg-gradient-to-b from-[#d9c7ad] via-[#b59c7c] to-[#5d4c3b]">
          <span className="absolute right-6 top-6 h-8 w-8 rounded-full bg-[#f6e6c8]/80 blur-[1px]" />
          <div className="absolute inset-x-0 bottom-0 flex items-end gap-1.5 px-4">
            {[52, 78, 64, 96, 70, 88, 58].map((h, i) => (
              <span key={i} className="flex-1 bg-[#2a221b]/85" style={{ height: h }}>
                <span className="mx-auto mt-2 block h-1 w-1/2 bg-[#f6e6c8]/50" />
              </span>
            ))}
          </div>
          <div className="absolute left-4 top-4 max-w-[60%] font-serif text-2xl leading-tight text-white">
            Residences <em>above</em> the city
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 p-3">
          {[
            ['$12.4M', 'Penthouse · 4 bd'],
            ['$8.9M', 'Villa · 5 bd'],
          ].map(([price, kind]) => (
            <div key={price} className="border border-[#1d1a16]/10 bg-white/60 p-3">
              <div className="h-12 bg-gradient-to-br from-[#cdbba0] to-[#8f7a60]" />
              <div className="mt-2 font-serif text-lg">{price}</div>
              <div className="text-[9px] uppercase tracking-[0.18em] text-[#1d1a16]/60">{kind}</div>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  )
}

export function SaasMock() {
  return (
    <Frame title="flowpilot.ai — design concept">
      <div className="relative overflow-hidden bg-[#07070b] px-5 pb-6 pt-5 text-white">
        <span className="absolute -right-10 -top-16 h-48 w-48 rounded-full bg-[#6d5dfc]/40 blur-3xl" />
        <span className="absolute -left-12 top-24 h-40 w-40 rounded-full bg-[#22d3ee]/25 blur-3xl" />
        <div className="relative flex items-center justify-between text-[10px] text-white/60">
          <span className="text-sm font-semibold text-white">flowpilot</span>
          <span className="rounded-full bg-white px-3 py-1 font-medium text-[#07070b]">Get started</span>
        </div>
        <div className="relative mt-7">
          <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[9px] text-white/70">
            ✦ New — AI agents v2
          </span>
          <h4 className="mt-4 text-[1.7rem] font-semibold leading-[1.05] tracking-tight">
            Ship work on <span className="bg-gradient-to-r from-[#a99dff] to-[#67e8f9] bg-clip-text text-transparent">autopilot.</span>
          </h4>
          <p className="mt-2 text-xs text-white/55">Automations and AI agents for modern teams.</p>
        </div>
        <div className="relative mt-5 rounded-xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur">
          <div className="flex items-center justify-between text-[10px] text-white/60">
            <span>Hours saved</span>
            <span className="text-[#67e8f9]">+42%</span>
          </div>
          <div className="mt-3 flex h-14 items-end gap-1">
            {[30, 42, 38, 55, 50, 68, 62, 80, 74, 92].map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-[#6d5dfc] to-[#67e8f9]"
                style={{ height: `${h}%`, opacity: 0.35 + i * 0.065 }}
              />
            ))}
          </div>
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
