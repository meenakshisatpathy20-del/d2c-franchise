import { motion } from 'motion/react'
import { CircleCheck, CircleX } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import { marketSplit, pillars, problems } from '../../data/content'

const bars = [
  { label: 'Unorganised offline retail', value: marketSplit.unorganisedOffline, color: 'bg-saffron-500' },
  { label: 'Organised offline retail', value: marketSplit.organisedOffline, color: 'bg-leaf-500' },
  { label: 'Online retail', value: marketSplit.online, color: 'bg-navy-500' },
]

export default function ProblemSolution() {
  return (
    <section className="section">
      <SectionTitle
        eyebrow="The opportunity"
        title="90% of India still shops"
        highlight="offline"
        text="Retail in India: unorganised offline 80%, organised offline 10%, online 10%."
      />

      <Reveal className="mt-10 max-w-3xl space-y-4">
        {bars.map((b) => (
          <div key={b.label}>
            <div className="flex justify-between text-sm font-semibold">
              <span>{b.label}</span>
              <span>{b.value}%</span>
            </div>
            <div className="mt-2 h-3 overflow-hidden rounded-full bg-navy-50">
              <motion.div
                className={`h-full rounded-full ${b.color}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${b.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />
            </div>
          </div>
        ))}
      </Reveal>

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        <Reveal className="rounded-3xl border border-red-100 bg-red-50/60 p-6 md:p-8">
          <p className="text-sm font-bold tracking-wider text-red-500 uppercase">Typical franchise</p>
          <h3 className="mt-2 text-2xl font-bold">Brands only sell franchises</h3>
          <ul className="mt-6 space-y-5">
            {problems.map((p) => (
              <li key={p.title} className="flex gap-3">
                <CircleX className="mt-0.5 shrink-0 text-red-500" size={22} />
                <div>
                  <p className="font-semibold">{p.title}</p>
                  <p className="text-sm text-navy-900/60">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="rounded-3xl bg-linear-to-br from-leaf-500 to-leaf-600 p-6 text-white shadow-xl shadow-leaf-500/20 md:p-8">
          <p className="text-sm font-bold tracking-wider text-white/70 uppercase">The D2C Mall way</p>
          <h3 className="mt-2 text-2xl font-bold">Win-win partnership</h3>
          <ul className="mt-6 space-y-5">
            {pillars.map((p) => (
              <li key={p.title} className="flex gap-3">
                <CircleCheck className="mt-0.5 shrink-0 text-white" size={22} />
                <div>
                  <p className="font-semibold">{p.title}</p>
                  <p className="text-sm text-white/75">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}