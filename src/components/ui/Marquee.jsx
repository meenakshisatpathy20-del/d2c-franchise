export default function Marquee({ items, dark = false }) {
  const list = [...items, ...items]

  return (
    <div className="relative overflow-hidden">
      <div className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
        {list.map((item, i) => (
          <span
            key={i}
            className={`whitespace-nowrap rounded-full border px-5 py-2 text-sm font-semibold ${
              dark ? 'border-white/15 bg-white/5 text-white/80' : 'border-navy-100 bg-white text-navy-900/80'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}