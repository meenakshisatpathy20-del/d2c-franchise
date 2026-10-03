import { MessageCircle } from 'lucide-react'
import { company } from '../../data/content'

export default function WhatsAppButton() {
  const text = encodeURIComponent('Hi, I am interested in the D2C Mall franchise. Please share details.')

  return (
    <a
      href={`https://wa.me/${company.whatsapp}?text=${text}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-4 bottom-24 z-30 hidden h-14 w-14 place-items-center rounded-full bg-leaf-500 text-white shadow-xl shadow-leaf-500/40 transition hover:scale-110 lg:right-8 lg:bottom-8 lg:grid"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-leaf-500 opacity-30" />
      <MessageCircle size={26} className="relative" />
    </a>
  )
}