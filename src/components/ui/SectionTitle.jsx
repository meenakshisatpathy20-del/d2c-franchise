import Reveal from './Reveal'

export default function SectionTitle({ eyebrow, title, highlight, text, center = false, dark = false }) {
  return (
    <Reveal className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className={`mt-3 text-3xl font-extrabold md:text-5xl ${dark ? 'text-white' : ''}`}>
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {text && <p className={`mt-4 text-base md:text-lg ${dark ? 'text-white/60' : 'text-navy-900/60'}`}>{text}</p>}
    </Reveal>
  )
}