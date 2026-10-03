import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { House, LayoutGrid, Mail, Menu, MessageCircle, Phone, Rocket, ShoppingBag, X } from 'lucide-react'
import { navItems } from './navItems'
import { company, logos } from '../../data/content'

const tabs = [
  { to: '/', label: 'Home', icon: House },
  { to: '/models', label: 'Models', icon: LayoutGrid },
  { to: '/apply', label: 'Apply', icon: Rocket, primary: true },
  { to: '/brands', label: 'Brands', icon: ShoppingBag },
]

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="glass sticky top-0 z-40 flex items-center justify-between px-4 py-3 lg:hidden">
        <Link to="/">
          <img src={logos.mall} alt="D2C Mall" className="h-9 w-auto" />
        </Link>
        <div className="flex items-center gap-2">
          <a
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="grid h-10 w-10 place-items-center rounded-full bg-leaf-500 text-white"
          >
            <MessageCircle size={18} />
          </a>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="grid h-10 w-10 place-items-center rounded-full bg-navy-500 text-white"
          >
            <Menu size={18} />
          </button>
        </div>
      </header>

      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-100 bg-white/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl lg:hidden">
        <div className="grid grid-cols-5">
          {tabs.map(({ to, label, icon: Icon, primary }) => (
            <NavLink key={to} to={to} end={to === '/'} className="flex flex-col items-center py-2">
              {({ isActive }) =>
                primary ? (
                  <>
                    <span className="-mt-7 grid h-14 w-14 place-items-center rounded-full bg-saffron-500 text-white shadow-lg shadow-saffron-500/40 ring-4 ring-white">
                      <Icon size={22} />
                    </span>
                    <span className="mt-1 text-[11px] font-semibold text-saffron-500">{label}</span>
                  </>
                ) : (
                  <>
                    <Icon size={20} className={isActive ? 'text-saffron-500' : 'text-navy-900/50'} />
                    <span className={`mt-1 text-[11px] font-medium ${isActive ? 'text-saffron-500' : 'text-navy-900/50'}`}>
                      {label}
                    </span>
                  </>
                )
              }
            </NavLink>
          ))}
          <button onClick={() => setOpen(true)} className="flex flex-col items-center py-2 text-navy-900/50">
            <Menu size={20} />
            <span className="mt-1 text-[11px] font-medium">More</span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-navy-900/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
            />
            <motion.aside
              data-lenis-prevent
              className="fixed inset-y-0 right-0 z-50 flex w-[85%] max-w-sm flex-col overflow-y-auto bg-navy-900 p-5 text-white lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 34 }}
            >
              <div className="flex items-center justify-between">
                <span className="rounded-xl bg-white px-3 py-2">
                  <img src={logos.mall} alt="D2C Mall" className="h-8 w-auto" />
                </span>
                <button onClick={close} aria-label="Close menu" className="grid h-10 w-10 place-items-center rounded-full bg-white/10">
                  <X size={18} />
                </button>
              </div>

              <div className="mt-6 space-y-1">
                {navItems.map(({ to, label, icon: Icon }, i) => (
                  <motion.div
                    key={to}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <NavLink
                      to={to}
                      end={to === '/'}
                      onClick={close}
                      className={({ isActive }) =>
                        `flex items-center gap-3 rounded-xl px-4 py-3 font-medium ${
                          isActive ? 'bg-saffron-500 text-white' : 'text-white/70'
                        }`
                      }
                    >
                      <Icon size={18} /> {label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <Link to="/apply" onClick={close} className="btn-primary mt-6 w-full">
                <Rocket size={18} /> Apply for Franchise
              </Link>

              <div className="mt-auto space-y-3 pt-8 text-sm text-white/70">
                <a href={`tel:${company.phoneRaw}`} className="flex items-center gap-2">
                  <Phone size={16} /> {company.phone}
                </a>
                <a href={`mailto:${company.email}`} className="flex items-center gap-2 break-all">
                  <Mail size={16} /> {company.email}
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}