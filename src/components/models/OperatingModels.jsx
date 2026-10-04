import { Handshake, UserCog } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import { operatingModels } from '../../data/content'

const icons = [UserCog, Handshake]

export default function OperatingModels() {
  return (
    <section className="section bg-white">
      <SectionTitle eyebrow="Available in 2 models" title="Run it yourself, or" highlight="let us run it" center />
      <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
        {operatingModels.map((o, i) => {
          const Icon = icons[i]
          return (
            <Reveal key={o.code} delay={i * 0.1}>
              <div
                className={`h-full rounded-3xl p-7 ${
                  i ? 'bg-linear-to-br from-navy-500 to-navy-700 text-white' : 'border-2 border-saffron-100 bg-saffron-50'
                }`}
              >
                <Icon size={32} className={i ? 'text-saffron-400' : 'text-saffron-500'} />
                <p className="mt-4 font-display text-4xl font-extrabold">{o.code}</p>
                <p className={`mt-1 font-semibold ${i ? 'text-white/80' : 'text-navy-900/80'}`}>{o.name}</p>
                <p className={`mt-3 text-sm ${i ? 'text-white/60' : 'text-navy-900/60'}`}>{o.text}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}