import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowRight, Heart, X } from 'lucide-react'

export default function InterestedBar({ count, onClear }) {
  return (
    <AnimatePresence>
      {count > 0 && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          className="fixed inset-x-4 bottom-24 z-30 mx-auto flex max-w-md items-center gap-3 rounded-full bg-navy-900 py-2 pr-2 pl-5 text-white shadow-2xl lg:bottom-8 lg:left-[calc(18rem+1rem)]"
        >
          <Heart size={18} className="shrink-0 text-saffron-400" fill="currentColor" />
          <p className="flex-1 text-sm font-medium">
            {count} product{count > 1 ? 's' : ''} shortlisted
          </p>
          <button onClick={onClear} aria-label="Clear shortlist" className="grid h-9 w-9 place-items-center rounded-full bg-white/10">
            <X size={16} />
          </button>
          <Link to="/apply" className="flex items-center gap-1 rounded-full bg-saffron-500 px-4 py-2 text-sm font-bold">
            Apply <ArrowRight size={16} />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}