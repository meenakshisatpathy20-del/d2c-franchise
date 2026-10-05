import { useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Check, Heart, MessageCircle, X } from 'lucide-react'
import { brandById } from '../../data/catalogue'
import { company } from '../../data/content'

export default function QuickView({ product, liked, onLike, onClose }) {
  useEffect(() => {
    if (!product) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [product, onClose])

  const brand = product ? brandById[product.brand] : null
  const message = product
    ? encodeURIComponent(`Hi, I saw ${product.name} by ${brand.name} on the D2C franchise website. I would like to know more.`)
    : ''

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          data-lenis-prevent
          className="fixed inset-0 z-[60] flex items-end justify-center bg-navy-900/70 backdrop-blur-sm sm:items-center sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-h-[92dvh] w-full max-w-4xl overflow-y-auto rounded-t-3xl bg-white sm:rounded-3xl"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-navy-50"
            >
              <X size={18} />
            </button>

            <div className="grid sm:grid-cols-2">
              <div className="h-72 bg-linear-to-br from-saffron-50 via-white to-leaf-50 p-8 sm:sticky sm:top-0 sm:h-auto sm:min-h-96">
                <img src={product.image} alt={product.name} className="h-full max-h-96 w-full object-contain drop-shadow-2xl" />
              </div>

              <div className="p-6 md:p-8">
                <img src={brand.logo} alt={brand.name} className="h-8 w-auto" />
                <p className="mt-4 text-xs font-bold tracking-wider text-saffron-500 uppercase">{product.section}</p>
                <h3 className="mt-1 text-2xl font-extrabold">{product.name}</h3>
                {product.sku && <p className="mt-2 text-sm text-navy-900/50">SKU {product.sku}</p>}
                {product.description && <p className="mt-4 text-sm leading-relaxed text-navy-900/70">{product.description}</p>}

                {product.points && (
                  <ul className="mt-5 space-y-3">
                    {product.points.map(([title, text]) => (
                      <li key={title} className="flex gap-3">
                        <Check size={18} className="mt-0.5 shrink-0 text-leaf-500" />
                        <p className="text-sm">
                          <span className="font-bold">{title}</span>
                          <span className="text-navy-900/70"> — {text}</span>
                        </p>
                      </li>
                    ))}
                  </ul>
                )}

                {product.features && (
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    {product.features.map((f) => (
                      <span key={f} className="flex items-center gap-2 rounded-xl bg-navy-50 px-3 py-2 text-xs font-semibold">
                        <Check size={14} className="shrink-0 text-leaf-500" /> {f}
                      </span>
                    ))}
                  </div>
                )}

                {product.ingredients && (
                  <div className="mt-5">
                    <p className="text-xs font-bold tracking-wider text-navy-900/50 uppercase">Key oils</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {product.ingredients.map((i) => (
                        <span key={i} className="rounded-full bg-leaf-50 px-3 py-1 text-xs font-semibold text-leaf-600">{i}</span>
                      ))}
                    </div>
                  </div>
                )}

                {product.recommendedFor && (
                  <div className="mt-5 rounded-2xl bg-navy-50/60 p-4">
                    <p className="text-xs font-bold tracking-wider text-navy-900/50 uppercase">Recommended for</p>
                    <p className="mt-1 text-sm text-navy-900/70">{product.recommendedFor}</p>
                  </div>
                )}

                {product.tags && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {product.tags.map((t) => (
                      <span key={t} className="rounded-full bg-saffron-50 px-3 py-1 text-xs font-semibold text-saffron-600">{t}</span>
                    ))}
                  </div>
                )}

                <div className="mt-8 flex flex-wrap gap-3">
                  <button onClick={onLike} className={liked ? 'btn-primary' : 'btn-outline'}>
                    <Heart size={18} fill={liked ? 'currentColor' : 'none'} /> {liked ? 'Interested' : 'Mark interested'}
                  </button>
                  <a href={`https://wa.me/${company.whatsapp}?text=${message}`} target="_blank" rel="noreferrer" className="btn-green">
                    <MessageCircle size={18} /> Ask on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}