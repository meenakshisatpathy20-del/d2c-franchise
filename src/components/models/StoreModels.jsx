import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowRight, BadgeCheck, IndianRupee, TrendingUp, Users } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import ShareButton from '../ui/ShareButton'
import { formOptions, storeModels } from '../../data/content'

function Rows({ rows }) {
  return (
    <dl className="divide-y divide-navy-50">
      {rows.map(([label, value]) => (
        <div key={label} className="flex justify-between gap-4 py-2.5 text-sm">
          <dt className="text-navy-900/60">{label}</dt>
          <dd className="text-right font-semibold">{value}</dd>
        </div>
      ))}
    </dl>
  )
}

export default function StoreModels() {
  const [active, setActive] = useState(1)
  const m = storeModels[active]

  return (
    <section id="store-models" className="section">
      <SectionTitle
        eyebrow="D2C Mall store formats"
        title="Three sizes."
        highlight="One complete package."
        text="Choose a store size to see the full investment, monthly costs and expected revenue — exactly as per the company plan."
      />

      <div className="mt-8 inline-flex rounded-full bg-navy-50 p-1.5">
        {storeModels.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActive(i)}
            className={`relative rounded-full px-4 py-2.5 text-sm font-bold transition sm:px-6 ${
              active === i ? 'text-white' : 'text-navy-900/60 hover:text-navy-900'
            }`}
          >
            {active === i && (
              <motion.span
                layoutId="store-tab"
                className="absolute inset-0 rounded-full bg-saffron-500 shadow-lg shadow-saffron-500/30"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative">{s.size}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={m.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
          className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_1fr]"
        >
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-navy-500/5">
            <div className="relative aspect-[16/10]">
              <img src={m.image} alt={m.name} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-navy-900/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="text-sm text-white/70">{m.name}</p>
                <p className="font-display text-3xl font-extrabold md:text-4xl">{m.size}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 p-5">
              <div className="rounded-2xl bg-saffron-50 p-4">
                <IndianRupee size={18} className="text-saffron-500" />
                <p className="mt-2 text-xs text-navy-900/60">Total investment</p>
                <p className="font-display text-xl font-extrabold">~{m.investment}</p>
              </div>
              <div className="rounded-2xl bg-leaf-50 p-4">
                <BadgeCheck size={18} className="text-leaf-500" />
                <p className="mt-2 text-xs text-navy-900/60">Company package</p>
                <p className="font-display text-xl font-extrabold text-leaf-600">{m.package}</p>
              </div>
              <div className="rounded-2xl bg-navy-50 p-4">
                <TrendingUp size={18} className="text-navy-500" />
                <p className="mt-2 text-xs text-navy-900/60">Monthly revenue (est.)</p>
                <p className="font-display text-xl font-extrabold">{m.revenue}</p>
              </div>
              <div className="rounded-2xl bg-navy-50 p-4">
                <TrendingUp size={18} className="text-navy-500" />
                <p className="mt-2 text-xs text-navy-900/60">{m.margin ? `Margin / month @${m.marginPct}` : 'Margin on sales'}</p>
                <p className="font-display text-xl font-extrabold">{m.margin || m.marginPct}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 px-5 pb-5">
              <Link to={`/apply?model=${encodeURIComponent(formOptions.models[active])}`} className="btn-primary">
                Apply for {m.size} <ArrowRight size={18} />
              </Link>
              <ShareButton title={`D2C Mall ${m.size}`} text={`D2C Mall ${m.size} franchise — investment ~${m.investment}, zero royalty.`} />
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-3xl bg-white p-6 shadow-lg shadow-navy-500/5">
              <h3 className="text-lg font-bold">One-time investment (CAPEX)</h3>
              <div className="mt-3">
                <Rows rows={m.capex} />
              </div>
              <p className="mt-4 rounded-xl bg-leaf-50 px-4 py-3 text-sm font-semibold text-leaf-600">{m.packageNote}</p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-lg shadow-navy-500/5">
              <h3 className="text-lg font-bold">Monthly running cost (OPEX)</h3>
              <div className="mt-3">
                <Rows rows={m.opex} />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {m.staff.map((s) => (
                  <span key={s} className="flex items-center gap-1.5 rounded-full bg-navy-50 px-3 py-1.5 text-xs font-medium">
                    <Users size={12} className="text-navy-500" /> {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}