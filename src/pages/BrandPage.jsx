import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, BadgeCheck, Mail, Phone, Sparkles } from 'lucide-react'
import ProductGrid from '../components/catalogue/ProductGrid'
import SectionTitle from '../components/ui/SectionTitle'
import Reveal from '../components/ui/Reveal'
import Lightbox from '../components/ui/Lightbox'
import ShareButton from '../components/ui/ShareButton'
import CtaBand from '../components/home/CtaBand'
import { brandById } from '../data/catalogue'

export default function BrandPage() {
  const { brandId } = useParams()
  const brand = brandById[brandId]
  const [box, setBox] = useState({ images: [], index: null })

  if (!brand || !brand.hasProducts) return <Navigate to="/catalogue" replace />

  const banners = brand.sections || []
  const gallery = brand.gallery || []

  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <img src={brand.banner} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-linear-to-r from-navy-900 via-navy-900/80 to-navy-900/30" />
        <div className="section relative">
          <Link to="/catalogue" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
            <ArrowLeft size={16} /> All brands
          </Link>
          <span className="mt-6 block w-fit rounded-2xl bg-white px-5 py-3">
            <img src={brand.logo} alt={brand.name} className="h-10 w-auto md:h-12" />
          </span>
          {brand.brandOf && <p className="mt-3 text-xs font-semibold tracking-wider text-white/50 uppercase">{brand.brandOf}</p>}
          <h1 className="mt-6 max-w-2xl text-4xl font-extrabold md:text-6xl">
            <span className="text-gradient">{brand.tagline}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-white/70">{brand.story}</p>
          {brand.badges && (
            <div className="mt-6 flex max-w-3xl flex-wrap gap-2">
              {brand.badges.map((b) => (
                <span key={b} className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white">
                  <BadgeCheck size={14} className="text-leaf-400" /> {b}
                </span>
              ))}
            </div>
          )}
          <div className="mt-8">
            <ShareButton title={brand.name} text={`${brand.name} — available at D2C Mall stores.`} className="btn border-2 border-white/40 text-white hover:bg-white/10" />
          </div>
        </div>
      </section>

      {(brand.perks || brand.contact) && (
        <section className="section pb-0">
          <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
            {brand.perks && (
              <div className="grid gap-3 sm:grid-cols-2">
                {brand.perks.map((p) => (
                  <Reveal key={p}>
                    <div className="flex h-full gap-3 rounded-2xl bg-white p-5 shadow-md shadow-navy-500/5">
                      <Sparkles size={20} className="shrink-0 text-saffron-500" />
                      <p className="text-sm font-semibold">{p}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
            {brand.contact && (
              <Reveal>
                <div className="h-full rounded-2xl bg-navy-900 p-5 text-white">
                  <p className="text-xs font-bold tracking-wider text-saffron-400 uppercase">{brand.contact.label}</p>
                  <a href={`tel:${brand.contact.phoneRaw}`} className="mt-3 flex items-center gap-2 text-sm">
                    <Phone size={16} /> {brand.contact.phone}
                  </a>
                  <a href={`mailto:${brand.contact.email}`} className="mt-2 flex items-center gap-2 text-sm break-all">
                    <Mail size={16} /> {brand.contact.email}
                  </a>
                </div>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {banners.length > 0 && (
        <section className="section pb-0">
          <SectionTitle eyebrow="Ranges" title="Explore the" highlight="collection" />
          <div className="no-scrollbar -mx-[clamp(1rem,4vw,3rem)] mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[clamp(1rem,4vw,3rem)] pb-4">
            {banners.map((b, i) => (
              <button
                key={b.title}
                onClick={() => setBox({ images: banners.map((x) => ({ image: x.image, title: x.title })), index: i })}
                className="w-[80%] shrink-0 snap-start overflow-hidden rounded-3xl shadow-lg sm:w-96"
              >
                <img src={b.image} alt={b.title} loading="lazy" className="aspect-video w-full object-cover transition duration-500 hover:scale-105" />
              </button>
            ))}
          </div>
        </section>
      )}

      <section className="section">
        <SectionTitle eyebrow={brand.name} title="All" highlight="products" />
        <div className="mt-6">
          <ProductGrid brandFilter={brand.id} showBrandChips={false} />
        </div>
      </section>

      {gallery.length > 0 && (
        <section className="section bg-white">
          <SectionTitle eyebrow={brand.name} title={brand.galleryTitle || 'Gallery'} />
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {gallery.map((g, i) => (
              <Reveal key={g} delay={i * 0.05}>
                <button onClick={() => setBox({ images: gallery, index: i })} className="block overflow-hidden rounded-2xl">
                  <img src={g} alt="" loading="lazy" className="aspect-video w-full object-cover transition duration-500 hover:scale-105" />
                </button>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <CtaBand />

      <Lightbox
        images={box.images}
        index={box.index}
        onClose={() => setBox((b) => ({ ...b, index: null }))}
        onChange={(index) => setBox((b) => ({ ...b, index }))}
      />
    </>
  )
}