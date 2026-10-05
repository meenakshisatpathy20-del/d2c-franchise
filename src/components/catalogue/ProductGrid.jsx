import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Search, X } from 'lucide-react'
import ProductCard from './ProductCard'
import QuickView from './QuickView'
import InterestedBar from './InterestedBar'
import { useInterested } from '../../lib/interested'
import { brandById, catalogueGroups, products } from '../../data/catalogue'

export default function ProductGrid({ brandFilter = null, showBrandChips = true }) {
  const [group, setGroup] = useState('all')
  const [brand, setBrand] = useState(brandFilter || 'all')
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(null)
  const interested = useInterested()

  const brandIds = useMemo(() => [...new Set(products.map((p) => p.brand))], [])

  const visibleGroups = useMemo(() => {
    const pool = products.filter((p) => brand === 'all' || p.brand === brand)
    const used = new Set(pool.map((p) => p.group))
    return catalogueGroups.filter((g) => g.id === 'all' || used.has(g.id))
  }, [brand])

  const list = useMemo(() => {
    const q = query.trim().toLowerCase()
    return products.filter(
      (p) =>
        (brand === 'all' || p.brand === brand) &&
        (group === 'all' || p.group === group) &&
        (!q || `${p.name} ${p.section} ${brandById[p.brand].name}`.toLowerCase().includes(q)),
    )
  }, [brand, group, query])

  const pickBrand = (id) => {
    setBrand(id)
    setGroup('all')
  }

  return (
    <div>
      <div className="sticky top-[64px] z-20 -mx-[clamp(1rem,4vw,3rem)] border-b border-navy-50 bg-[#fafaf7]/90 px-[clamp(1rem,4vw,3rem)] py-4 backdrop-blur-xl lg:top-0">
        <div className="relative">
          <Search size={18} className="absolute top-1/2 left-4 -translate-y-1/2 text-navy-900/40" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, e.g. shampoo, serum, earbuds"
            className="w-full rounded-full border border-navy-100 bg-white py-3 pr-10 pl-11 text-sm outline-none focus:border-saffron-400 focus:ring-4 focus:ring-saffron-100"
          />
          {query && (
            <button onClick={() => setQuery('')} aria-label="Clear search" className="absolute top-1/2 right-3 -translate-y-1/2 text-navy-900/40">
              <X size={18} />
            </button>
          )}
        </div>

        {showBrandChips && (
          <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto">
            {['all', ...brandIds].map((id) => (
              <button
                key={id}
                onClick={() => pickBrand(id)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold transition ${
                  brand === id ? 'bg-navy-500 text-white' : 'bg-white text-navy-900/60 ring-1 ring-navy-100'
                }`}
              >
                {id === 'all' ? 'All brands' : brandById[id].name}
              </button>
            ))}
          </div>
        )}

        <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto">
          {visibleGroups.map((g) => (
            <button
              key={g.id}
              onClick={() => setGroup(g.id)}
              className={`relative shrink-0 rounded-full px-4 py-2 text-xs font-bold transition ${
                group === g.id ? 'text-white' : 'text-navy-900/60 hover:text-navy-900'
              }`}
            >
              {group === g.id && (
                <motion.span layoutId={`group-pill-${brandFilter || 'all'}`} className="absolute inset-0 rounded-full bg-saffron-500" />
              )}
              <span className="relative">{g.label}</span>
            </button>
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm text-navy-900/50">
        Showing {list.length} product{list.length === 1 ? '' : 's'}
      </p>

      <motion.div layout className="mt-4 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              liked={interested.has(p.id)}
              onLike={() => interested.toggle(p.id)}
              onOpen={() => setOpen(p)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {list.length === 0 && <p className="py-16 text-center text-navy-900/50">No products match your search.</p>}

      <QuickView
        product={open}
        liked={open ? interested.has(open.id) : false}
        onLike={() => open && interested.toggle(open.id)}
        onClose={() => setOpen(null)}
      />
      <InterestedBar count={interested.ids.length} onClear={interested.clear} />
    </div>
  )
}