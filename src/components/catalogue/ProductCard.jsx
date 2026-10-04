import { motion } from 'motion/react'
import { Heart } from 'lucide-react'
import { brandById } from '../../data/catalogue'

export default function ProductCard({ product, liked, onLike, onOpen }) {
  const brand = brandById[product.brand]

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-navy-50 bg-white shadow-md shadow-navy-500/5 transition hover:shadow-xl"
    >
      <button
        type="button"
        onClick={onLike}
        aria-label={liked ? 'Remove from interested' : 'Mark as interested'}
        className={`absolute top-3 right-3 z-10 grid h-9 w-9 place-items-center rounded-full shadow transition ${
          liked ? 'bg-saffron-500 text-white' : 'bg-white text-navy-900/50 hover:text-saffron-500'
        }`}
      >
        <Heart size={16} fill={liked ? 'currentColor' : 'none'} />
      </button>

      <button type="button" onClick={onOpen} className="flex flex-1 flex-col text-left">
        <div className="relative aspect-square overflow-hidden bg-linear-to-br from-saffron-50 via-white to-leaf-50 p-5">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-contain drop-shadow-xl transition duration-500 group-hover:scale-110"
          />
        </div>
        <div className="flex flex-1 flex-col p-4">
          <p className="text-[11px] font-bold tracking-wider text-saffron-500 uppercase">{product.section}</p>
          <h3 className="mt-1 text-sm leading-snug font-bold md:text-base">{product.name}</h3>
          <p className="mt-auto pt-2 text-xs text-navy-900/50">{product.sku ? `SKU ${product.sku}` : brand.name}</p>
        </div>
      </button>
    </motion.article>
  )
}