import { useState } from 'react'
import { ZoomIn } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import Lightbox from '../ui/Lightbox'
import { posters } from '../../data/content'

export default function PosterCarousel() {
  const [index, setIndex] = useState(null)

  return (
    <section className="section">
      <SectionTitle eyebrow="Brochures" title="Tap any poster to" highlight="explore" />

      <div className="no-scrollbar -mx-[clamp(1rem,4vw,3rem)] mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[clamp(1rem,4vw,3rem)] pb-4">
        {posters.map((p, i) => (
          <button
            key={p.image}
            onClick={() => setIndex(i)}
            className="group relative w-[65%] shrink-0 snap-start overflow-hidden rounded-3xl border border-navy-50 bg-white shadow-lg sm:w-64"
          >
            <img src={p.image} alt={p.title} loading="lazy" className="aspect-[3/4] w-full object-cover object-top transition duration-700 group-hover:scale-105" />
            <span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-linear-to-t from-navy-900/90 to-transparent p-4 text-left text-sm font-semibold text-white">
              {p.title} <ZoomIn size={18} />
            </span>
          </button>
        ))}
      </div>

      <Lightbox images={posters} index={index} onClose={() => setIndex(null)} onChange={setIndex} />
    </section>
  )
}