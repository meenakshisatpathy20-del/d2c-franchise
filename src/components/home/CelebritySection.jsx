import { useState } from 'react'
import { Star } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import Lightbox from '../ui/Lightbox'
import { celebrityGallery, company } from '../../data/content'

export default function CelebritySection() {
  const [index, setIndex] = useState(null)

  return (
    <section className="section relative overflow-hidden bg-navy-900">
      <div className="pointer-events-none absolute top-0 -left-32 h-96 w-96 rounded-full bg-saffron-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-leaf-500/20 blur-3xl" />

      <div className="relative grid items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionTitle
            dark
            eyebrow="Bollywood marketing"
            title="Your store, backed by"
            highlight="A-list celebrities"
            text={`${company.ambassador.name} is the face of AccessHer. Every D2C Mall partner gets celebrity posters, campaigns and launch support.`}
          />
          <Reveal className="mt-8 flex flex-wrap gap-3">
            {['Celebrity endorsement', 'Radio & cinema ads', 'Hoardings', 'Social media'].map((t) => (
              <span key={t} className="glass-dark flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/80">
                <Star size={14} className="text-saffron-400" /> {t}
              </span>
            ))}
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {celebrityGallery.slice(0, 6).map((c, i) => (
            <Reveal key={c.image} delay={i * 0.06} className={i === 0 ? 'col-span-2 row-span-2 sm:col-span-1' : ''}>
              <button onClick={() => setIndex(i)} className="group relative block h-full w-full overflow-hidden rounded-2xl bg-white/5">
                <img
                  src={c.image}
                  alt={c.caption}
                  loading="lazy"
                  className="aspect-square h-full w-full object-cover object-top transition duration-700 group-hover:scale-110"
                />
                <span className="absolute inset-x-0 bottom-0 bg-linear-to-t from-navy-900/90 to-transparent p-2 text-left text-[11px] text-white/90">
                  {c.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox images={celebrityGallery} index={index} onClose={() => setIndex(null)} onChange={setIndex} />
    </section>
  )
}