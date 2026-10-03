import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import { press } from '../../data/content'

export default function PressStrip() {
  return (
    <section className="section bg-white">
      <SectionTitle eyebrow="In the news" title="Trusted. Funded." highlight="Growing fast." center />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {press.slice(0, 6).map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <article className="group h-full overflow-hidden rounded-3xl border border-navy-50 bg-white shadow-md transition hover:shadow-xl">
              <div className="aspect-video overflow-hidden bg-navy-50">
                <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <span className="rounded-full bg-saffron-50 px-3 py-1 text-xs font-bold text-saffron-600">{p.source}</span>
                <h3 className="mt-3 text-base leading-snug font-bold">{p.title}</h3>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}