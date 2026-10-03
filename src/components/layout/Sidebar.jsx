import { Link, NavLink } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { navItems } from './navItems'
import { company, logos } from '../../data/content'

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 flex-col overflow-hidden bg-navy-900 text-white lg:flex">
      <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-saffron-500/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-leaf-500/25 blur-3xl" />

      <Link to="/" className="relative m-5 rounded-2xl bg-white p-4 shadow-lg">
        <img src={logos.mall} alt="D2C Mall" className="mx-auto h-11 w-auto" />
      </Link>

      <nav className="relative flex-1 space-y-1 overflow-y-auto px-4">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink key={to} to={to} end={to === '/'} className="block">
            {({ isActive }) => (
              <span
                className={`relative flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                  isActive ? 'text-white' : 'text-white/60 hover:bg-white/5 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="sidebar-active"
                    className="absolute inset-0 rounded-xl bg-linear-to-r from-saffron-500 to-saffron-400 shadow-lg shadow-saffron-500/30"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <Icon size={18} className="relative" />
                <span className="relative">{label}</span>
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="relative m-4 rounded-2xl border border-white/10 bg-white/5 p-5">
        <p className="font-display text-lg font-bold">Start from ₹13 Lakhs</p>
        <p className="mt-1 text-xs text-white/60">Zero royalty · 30–50% margins</p>
        <Link to="/apply" className="btn-primary mt-4 w-full">
          Apply Now <ArrowRight size={16} />
        </Link>
        <a
          href={`https://wa.me/${company.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="mt-3 flex items-center justify-center gap-2 text-xs text-white/70 hover:text-white"
        >
          <MessageCircle size={14} /> Chat on WhatsApp
        </a>
      </div>
    </aside>
  )
}