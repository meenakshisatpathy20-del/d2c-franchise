import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle } from 'lucide-react'
import Reveal from '../ui/Reveal'
import { company } from '../../data/content'

export default function CtaBand() {
  return (
    <section className="px-[clamp(1rem,4vw,3rem)] pb-[clamp(3rem,8vw,6rem)]">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-linear-to-br from-saffron-500 via-saffron-600 to-navy-500 p-8 text-white md:p-14">
          <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
          <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-3xl font-extrabold md:text-5xl">Invest once, earn forever.</h2>
              <p className="mt-4 max-w-xl text-white/80">
                              Apply online. Our franchise team will call you to discuss the right model for your city.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/apply" className="btn bg-white text-saffron-600 shadow-lg hover:bg-saffron-50">
                  Apply Now <ArrowRight size={18} />
                </Link>
                <a
                  href={`https://wa.me/${company.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn border-2 border-white/60 text-white hover:bg-white/10"
                >
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </div>
            </div>
            <img src="/images/rakul-blazer.webp" alt="" loading="lazy" className="mx-auto hidden max-h-80 w-auto drop-shadow-2xl md:block" />
          </div>
        </div>
      </Reveal>
    </section>
  )
}