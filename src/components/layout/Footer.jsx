import { Link } from 'react-router-dom'
import { Mail, MessageCircle, Phone } from 'lucide-react'
import { navItems } from './navItems'
import { company, logos, roiNote } from '../../data/content'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-900 text-white">
      <div className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-saffron-500/20 blur-3xl" />

      <div className="section relative grid gap-10 md:grid-cols-3">
        <div>
          <span className="inline-block rounded-2xl bg-white px-4 py-3">
            <img src={logos.mall} alt="D2C Mall" className="h-10 w-auto" />
          </span>
          <p className="mt-5 max-w-xs text-sm text-white/60">{company.headline}. {company.subline}.</p>
        </div>

        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-white/70">
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="hover:text-saffron-400">
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/apply" className="font-semibold text-saffron-400">
                Apply Now
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Franchise Desk</p>
          <div className="mt-4 space-y-3 text-sm text-white/70">
            <a href={`tel:${company.phoneRaw}`} className="flex items-center gap-2 hover:text-white">
              <Phone size={16} /> {company.phone}
            </a>
            <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white">
              <MessageCircle size={16} /> WhatsApp us
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-2 break-all hover:text-white">
              <Mail size={16} /> {company.email}
            </a>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {company.socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70 hover:border-saffron-400 hover:text-white"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 px-[clamp(1rem,4vw,3rem)] py-6 text-xs text-white/40">
        <p>{roiNote}</p>
        <p className="mt-2">© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}