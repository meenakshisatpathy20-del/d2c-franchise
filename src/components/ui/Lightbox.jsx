import { useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function Lightbox({ images, index, onClose, onChange }) {
  const open = index !== null && index !== undefined
  const item = open ? images[index] : null
  const src = item ? item.image || item : null
  const caption = item && item.caption ? item.caption : item && item.title ? item.title : ''

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onChange((index + 1) % images.length)
      if (e.key === 'ArrowLeft') onChange((index - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, index, images.length, onClose, onChange])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          data-lenis-prevent
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-900/95 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white"
          >
            <X size={20} />
          </button>
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onChange((index - 1 + images.length) % images.length)
                }}
                aria-label="Previous"
                className="absolute left-2 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white md:left-6"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onChange((index + 1) % images.length)
                }}
                aria-label="Next"
                className="absolute right-2 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white md:right-6"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
          <motion.figure
            key={src}
            className="max-h-full max-w-4xl"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={src} alt={caption} className="max-h-[80dvh] w-auto rounded-2xl object-contain" />
            {caption && <figcaption className="mt-3 text-center text-sm text-white/70">{caption}</figcaption>}
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  )
}