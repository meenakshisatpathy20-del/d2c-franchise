import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight, BadgePercent, PlayCircle, ShieldCheck, Sparkles } from 'lucide-react'
import { company, highlights } from '../../data/content'

const HeroScene = lazy(() => import('../three/HeroScene'))

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.1 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] } }),
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-saffron-50 via-white to-leaf-50">
      <div className="absolute inset-0 opacity-40 lg:left-1/2 lg:opacity-100">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-saffron-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-leaf-400/20 blur-3xl" />

      <div className="section relative grid items-center gap-10 lg:grid-cols-2">
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-navy-500"
          >
            <Sparkles size={14} className="text-saffron-500" /> {company.headline}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-6 text-4xl font-extrabold sm:text-5xl xl:text-7xl"
          >
            Own a <span className="text-gradient">D2C Mall</span>. Zero royalty. Real brands.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-5 max-w-xl text-base text-navy-900/70 md:text-lg"
          >
            Start your own multi-brand lifestyle store from <strong className="text-navy-900">₹13 Lakhs</strong> — 2000+
            products across beauty, fashion, electronics, fitness and home, marketed with Bollywood celebrities.
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3} className="mt-8 flex flex-wrap gap-3">
            <Link to="/apply" className="btn-primary">
              Apply for Franchise <ArrowRight size={18} />
            </Link>
            <Link to="/models" className="btn-outline">
              <PlayCircle size={18} /> Explore Models
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {highlights.map((h) => (
              <div key={h.label} className="glass rounded-2xl p-3 text-center">
                <p className="font-display text-xl font-extrabold text-saffron-500 md:text-2xl">{h.value}</p>
                <p className="mt-1 text-[11px] font-medium text-navy-900/60">{h.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute inset-x-6 bottom-0 top-16 rounded-[2.5rem] bg-linear-to-br from-saffron-500 via-saffron-400 to-leaf-500 shadow-2xl shadow-saffron-500/30" />
          <img
            src="/images/rakul-accessher-bag.webp"
            alt={company.ambassador.name}
            className="relative mx-auto max-h-[520px] w-auto drop-shadow-2xl"
            fetchPriority="high"
          />
          <div className="glass absolute top-24 -left-2 animate-float rounded-2xl px-4 py-3 sm:-left-8">
            <p className="flex items-center gap-2 text-xs font-bold text-navy-900">
              <ShieldCheck size={16} className="text-leaf-500" /> 90% Buyback
            </p>
          </div>
          <div className="glass absolute -right-2 bottom-28 animate-float rounded-2xl px-4 py-3 [animation-delay:1.5s] sm:-right-6">
            <p className="flex items-center gap-2 text-xs font-bold text-navy-900">
              <BadgePercent size={16} className="text-saffron-500" /> 0% Royalty
            </p>
          </div>
          <div className="glass absolute inset-x-4 bottom-4 rounded-2xl px-4 py-3 text-center">
            <p className="font-display text-sm font-bold text-navy-900">{company.ambassador.name}</p>
            <p className="text-xs text-navy-900/60">{company.ambassador.role}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}