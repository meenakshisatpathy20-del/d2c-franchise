import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import { journey } from '../../data/content'

export default function Journey() {
  return (
    <section className="section">
      <SectionTitle eyebrow="How it works" title="Your journey to" highlight="ownership" center />
      <div className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {journey.map((j, i) => (
          <Reveal key={j.step} delay={i * 0.08}>
            <div className="glass relative h-full rounded-3xl p-6">
              <span className="font-display text-5xl font-extrabold text-saffron-500/20">0{i + 1}</span>
              <h3 className="mt-2 text-xl font-bold">{j.step}</h3>
              <p className="mt-2 text-sm text-navy-900/60">{j.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}