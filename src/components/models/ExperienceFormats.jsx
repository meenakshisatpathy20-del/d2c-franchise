import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, Dumbbell, FileImage, Gamepad2, Building, Coffee } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import Lightbox from '../ui/Lightbox'
import { experienceModels, formOptions, kasrat, leisure, roiNote } from '../../data/content'

const icons = { kasrat: Dumbbell, cafe: Coffee, gaming: Gamepad2, mega: Building }
const formKey = { kasrat: 3, cafe: 4, gaming: 5, mega: 6 }
const galleries = {
  kasrat: kasrat.gallery,
  cafe: leisure.gallery.slice(0, 2),
  gaming: leisure.gallery.slice(2),
}

export default function ExperienceFormats() {
  const [box, setBox] = useState({ images: [], index: null })

  return (
    <section id="experience" className="section">
      <SectionTitle
        eyebrow="Experience formats"
        title="Beyond retail —"
        highlight="fitness, food & fun"
        text="Own a destination brand from the D2C family. Each format comes with design, setup and launch support."
      />

      <div className="mt-12 space-y-16">
        {experienceModels.map((m, i) => {
          const Icon = icons[m.id]
          const gallery = m.gallery || galleries[m.id] || [m.image]
          return (
            <Reveal key={m.id}>
              <article className={`grid items-center gap-8 lg:grid-cols-2 [&>*]:min-w-0 ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <div>
                  <button
                    onClick={() => setBox({ images: gallery, index: 0 })}
                    className="group relative block w-full overflow-hidden rounded-3xl shadow-xl"
                  >
                    <img src={gallery[0]} alt={m.name} loading="lazy" className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105" />
                    <span className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-navy-900">
                      <Icon size={14} className="text-saffron-500" /> {m.name}
                    </span>
                  </button>
                  {gallery.length > 1 && (
                    <div className="no-scrollbar mt-3 flex gap-3 overflow-x-auto">
                      {gallery.slice(1).map((g, gi) => (
                        <button
                          key={g}
                          onClick={() => setBox({ images: gallery, index: gi + 1 })}
                          className="h-20 w-28 shrink-0 overflow-hidden rounded-2xl"
                        >
                          <img src={g} alt="" loading="lazy" className="h-full w-full object-cover transition hover:scale-110" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-3xl font-extrabold md:text-4xl">{m.name}</h3>
                  <p className="mt-2 text-navy-900/60">{m.tagline}</p>

                  <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3 [&>*]:min-w-0">
                    <div className="rounded-2xl bg-saffron-50 p-3">
                      <p className="text-[11px] text-navy-900/60">Investment</p>
                      <p className="font-display text-lg font-extrabold text-saffron-600">{m.investment}</p>
                    </div>
                    <div className="rounded-2xl bg-navy-50 p-3">
                      <p className="text-[11px] text-navy-900/60">Space</p>
                      <p className="font-display text-lg font-extrabold">{m.size}</p>
                    </div>
                    <div className="rounded-2xl bg-leaf-50 p-3">
                      <p className="text-[11px] text-navy-900/60">ROI</p>
                      <p className="font-display text-sm leading-tight font-extrabold break-words text-leaf-600">{m.roi}</p>
                    </div>
                  </div>

                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {m.includes.map((inc) => (
                      <li key={inc} className="flex gap-2 text-sm">
                        <Check size={18} className="shrink-0 text-leaf-500" /> {inc}
                      </li>
                    ))}
                  </ul>

                  {m.id === 'kasrat' && (
                    <div className="mt-6 rounded-2xl bg-navy-900 p-5 text-white">
                      <p className="text-xs font-bold tracking-wider text-saffron-400 uppercase">Membership plans</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {kasrat.memberships.map((p) => (
                          <span key={p} className="rounded-full bg-white/10 px-3 py-1 text-xs">{p}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link to={`/apply?model=${encodeURIComponent(formOptions.models[formKey[m.id]])}`} className="btn-primary">
                      Apply <ArrowRight size={18} />
                    </Link>
                    {m.poster && (
                      <button onClick={() => setBox({ images: [{ image: m.poster, title: m.name }], index: 0 })} className="btn-outline">
                        <FileImage size={18} /> View brochure
                      </button>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>

      <p className="mt-10 text-xs text-navy-900/40">{roiNote}</p>

      <Lightbox
        images={box.images}
        index={box.index}
        onClose={() => setBox((b) => ({ ...b, index: null }))}
        onChange={(index) => setBox((b) => ({ ...b, index }))}
      />
    </section>
  )
}