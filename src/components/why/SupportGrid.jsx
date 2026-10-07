import { BadgePercent, Clapperboard, Globe, Megaphone, Newspaper, PackageOpen, Radio, RefreshCw, ScanBarcode, Share2, Star, CircleCheck, Truck } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import { feeIncludes, support } from '../../data/content'

const icons = [Star, Megaphone, Radio, Clapperboard, Globe, Share2, Newspaper, ScanBarcode, RefreshCw, PackageOpen, Truck]

export default function SupportGrid() {
  return (
    <section className="section">
      <SectionTitle eyebrow="Business support" title="Company" highlight="support" text="As listed in the D2C Mall pamphlet and sales training deck." />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {support.map((s, i) => {
          const Icon = icons[i] || BadgePercent
          return (
            <Reveal key={s.title} delay={(i % 4) * 0.05} className="group rounded-3xl border border-navy-50 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-500/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-saffron-50 text-saffron-500 transition group-hover:bg-saffron-500 group-hover:text-white">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
              {s.text && <p className="mt-1 text-sm text-navy-900/60">{s.text}</p>}
            </Reveal>
          )
        })}
      </div>

      <Reveal className="mt-12 grid gap-6 rounded-3xl bg-navy-900 p-6 text-white md:grid-cols-[1fr_1.4fr] md:p-10">
        <div>
          <p className="eyebrow">Franchise fee ₹1 Lakh</p>
          <h3 className="mt-3 text-2xl font-extrabold md:text-3xl">
            What your fee <span className="text-gradient">includes</span>
          </h3>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {feeIncludes.map((f) => (
            <li key={f} className="flex gap-3 text-sm text-white/80">
              <CircleCheck size={18} className="mt-0.5 shrink-0 text-leaf-400" /> {f}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}