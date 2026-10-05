import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import { catalogueBrands } from '../../data/catalogue'
import { onboardedBrands } from '../../data/content'

export default function BrandWall() {
  return (
    <section className="section bg-white">
      <SectionTitle
        eyebrow="Our brands"
        title="16 own brands,"
        highlight="one store"
        text="D2C Ecommerce owns these homegrown brands and supplies franchise partners directly — no middlemen."
      />

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {catalogueBrands.map((b, i) => {
          const card = (
            <div className="group flex h-full flex-col items-center justify-between rounded-3xl border border-navy-50 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="grid h-16 w-full place-items-center">
                <img src={b.logo} alt={b.name} loading="lazy" className="max-h-14 w-auto object-contain" />
              </div>
              <p className="mt-3 text-xs font-semibold text-navy-900/50">{b.category}</p>
              {b.hasProducts && (
                <span className="mt-3 flex items-center gap-1 rounded-full bg-saffron-50 px-3 py-1 text-xs font-bold text-saffron-600">
                  View products <ArrowRight size={12} />
                </span>
              )}
            </div>
          )
          return (
            <Reveal key={b.id} delay={(i % 4) * 0.05}>
              {b.hasProducts ? <Link to={`/catalogue/${b.id}`}>{card}</Link> : card}
            </Reveal>
          )
        })}
      </div>

      <Reveal className="mt-14">
        <h3 className="text-xl font-bold md:text-2xl">
          Partner brands <span className="text-gradient">onboarded</span>
        </h3>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {onboardedBrands.map((b) => (
            <div key={b.name} className="flex items-center justify-between rounded-2xl bg-navy-50/60 px-5 py-4">
              <span className="font-bold">{b.name}</span>
              <span className="text-xs text-navy-900/50">{b.category}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-navy-900/50">D2C brands ranging from 1 SKU to 1000+ SKUs can be onboarded on a win-win model.</p>
      </Reveal>
    </section>
  )
}