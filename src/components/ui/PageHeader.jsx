import { motion } from 'motion/react'
import ParticleField from './ParticleField'

export default function PageHeader({ eyebrow, title, highlight, text, image, children }) {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <ParticleField className="opacity-50" />
      <div className="pointer-events-none absolute -top-32 -left-20 h-80 w-80 rounded-full bg-saffron-500/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 -bottom-32 h-80 w-80 rounded-full bg-leaf-500/25 blur-3xl" />

      <div className="section relative grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="eyebrow">
            {eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-4xl font-extrabold md:text-6xl"
          >
            {title} <span className="text-gradient">{highlight}</span>
          </motion.h1>
          {text && (
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-5 max-w-2xl text-base text-white/70 md:text-lg"
            >
              {text}
            </motion.p>
          )}
          {children && (
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-8">
              {children}
            </motion.div>
          )}
        </div>
        {image && (
          <motion.img
            src={image}
            alt=""
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mx-auto hidden max-h-80 w-auto rounded-3xl object-cover shadow-2xl lg:block"
          />
        )}
      </div>
    </section>
  )
}