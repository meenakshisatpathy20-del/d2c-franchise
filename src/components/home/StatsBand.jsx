import Counter from '../ui/Counter'
import Marquee from '../ui/Marquee'
import { brands, channels, onboardedBrands, stats } from '../../data/content'

export default function StatsBand() {
  const names = [...brands, ...onboardedBrands].map((b) => b.name)

  return (
    <section className="relative overflow-hidden bg-navy-900 py-12 text-white">
      <div className="pointer-events-none absolute -top-20 left-1/3 h-60 w-60 rounded-full bg-saffron-500/20 blur-3xl" />
      <div className="relative grid grid-cols-2 gap-6 px-[clamp(1rem,4vw,3rem)] sm:grid-cols-3 lg:grid-cols-5">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-3xl font-extrabold text-saffron-400 md:text-5xl">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-xs font-medium tracking-wide text-white/60 uppercase">{s.label}</p>
          </div>
        ))}
      </div>
      <p className="relative mt-10 text-center text-xs text-white/50">
        Selling on {channels.join(' · ')} — and now offline
      </p>
      <div className="relative mt-4">
        <Marquee items={names} dark />
      </div>
    </section>
  )
}