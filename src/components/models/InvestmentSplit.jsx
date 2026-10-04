import { useState } from 'react'
import { motion } from 'motion/react'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import { investmentSplit, storeModels } from '../../data/content'

const colors = ['bg-saffron-500', 'bg-leaf-500', 'bg-navy-500', 'bg-saffron-400']

export default function InvestmentSplit() {
  const [active, setActive] = useState(1)
  const split = investmentSplit[active]
  const model = storeModels[active]

  return (
    <section id="split" className="section">
      <SectionTitle
        eyebrow="Where your money goes"
        title="Investment"
        highlight="breakdown"
        text="Exactly how the total investment is split, as per the company franchise presentation."
      />

      <Reveal className="mt-10 rounded-3xl bg-white p-6 shadow-xl shadow-navy-500/5 md:p-8">
        <div className="grid grid-cols-3 gap-2 sm:max-w-md">
          {investmentSplit.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={`rounded-2xl py-3 text-sm font-bold transition ${
                active === i ? 'bg-navy-500 text-white shadow-lg' : 'bg-navy-50 text-navy-900/60'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="mt-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm text-navy-900/60">Total investment</p>
            <p className="font-display text-4xl font-extrabold">~₹{split.total} Lakhs</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-navy-900/60">Company package</p>
            <p className="font-display text-2xl font-extrabold text-leaf-600">{model.package}</p>
          </div>
        </div>

        <div className="mt-6 flex h-6 overflow-hidden rounded-full bg-navy-50">
          {split.parts.map(([label, value], i) => (
            <motion.div
              key={`${split.id}-${label}`}
              className={`h-full ${colors[i]}`}
              initial={{ width: 0 }}
              animate={{ width: `${(value / split.total) * 100}%` }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: 'easeOut' }}
            />
          ))}
        </div>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {split.parts.map(([label, value], i) => (
            <li key={label} className="flex items-center justify-between rounded-2xl bg-navy-50/60 px-4 py-3">
              <span className="flex items-center gap-3 text-sm font-medium">
                <span className={`h-3 w-3 rounded-full ${colors[i]}`} /> {label}
              </span>
              <span className="text-sm font-bold">
                ₹{value} {value === 1 ? 'Lakh' : 'Lakhs'}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-6 rounded-xl bg-leaf-50 px-4 py-3 text-sm font-semibold text-leaf-600">{model.packageNote}</p>
      </Reveal>
    </section>
  )
}