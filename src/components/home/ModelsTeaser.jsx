import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import { experienceModels, roiNote, storeModels } from '../../data/content'

const accent = {
  leaf: 'from-leaf-500 to-leaf-600',
  navy: 'from-navy-500 to-navy-700',
  saffron: 'from-saffron-500 to-saffron-600',
}

export default function ModelsTeaser() {
  return (
    <section className="section bg-white">
      <SectionTitle
        eyebrow="Franchise models"
        title="Pick the size that fits your"
        highlight="dream"
        text="Three D2C Mall store formats — and the company provides the complete package."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {storeModels.map((m, i) => (
          <Reveal key={m.id} delay={i * 0.1}>
            <motion.div whileHover={{ y: -8 }} className="group relative h-full overflow-hidden rounded-3xl border border-navy-50 bg-white shadow-lg shadow-navy-500/5">
              {m.popular && (
                <span className="absolute top-4 right-4 z-10 rounded-full bg-saffron-500 px-3 py-1 text-xs font-bold text-white">
                  Most Popular
                </span>
              )}
              <div className="aspect-[4/3] overflow-hidden">
                <img src={m.image} alt={m.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              </div>
              <div className={`bg-linear-to-r ${accent[m.color]} px-5 py-3 text-white`}>
                <p className="font-display text-2xl font-extrabold">{m.size}</p>
                <p className="text-sm text-white/80">{m.name}</p>
              </div>
              <div className="space-y-3 p-5">
                <div className="flex justify-between text-sm">
                  <span className="text-navy-900/60">Total investment</span>
                  <span className="font-bold">~{m.investment}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-navy-900/60">Company package</span>
                  <span className="font-bold text-leaf-600">{m.package}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-navy-900/60">Monthly revenue (est.)</span>
                  <span className="font-bold">{m.revenue}</span>
                </div>
                <Link to="/models" className="mt-2 flex items-center gap-1 text-sm font-semibold text-saffron-500">
                  See full breakdown <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16">
        <h3 className="text-2xl font-bold md:text-3xl">
          More ways to <span className="text-gradient">own a brand</span>
        </h3>
      </Reveal>

      <div className="no-scrollbar -mx-[clamp(1rem,4vw,3rem)] mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[clamp(1rem,4vw,3rem)] pb-4 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0">
        {experienceModels.map((m) => (
          <Link
            to="/models"
            key={m.id}
            className="group relative w-[75%] shrink-0 snap-start overflow-hidden rounded-3xl sm:w-[45%] lg:w-auto"
          >
            <img src={m.image} alt={m.name} loading="lazy" className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-linear-to-t from-navy-900/95 via-navy-900/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
              <p className="text-xs font-semibold text-saffron-400">{m.size}</p>
              <p className="font-display text-xl font-bold">{m.name}</p>
              <p className="mt-1 text-sm text-white/70">Investment {m.investment}</p>
            </div>
          </Link>
        ))}
      </div>
      <p className="mt-4 text-xs text-navy-900/40">{roiNote}</p>
    </section>
  )
}