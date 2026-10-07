import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import { comparison } from '../../data/content'

export default function IndustryCompare() {
  const last = comparison.columns.length - 1
  return (
    <section className="section bg-white">
      <SectionTitle
        eyebrow="Do the math"
        title="D2C Mall vs"
        highlight="other franchises"
        text="Investment, royalty and margin, as shown in the company sales training deck."
      />
      <Reveal className="no-scrollbar mt-8 overflow-x-auto rounded-3xl border border-navy-50 shadow-lg shadow-navy-500/5">
        <table className="w-full min-w-[620px] text-left text-sm">
          <thead>
            <tr className="bg-navy-900 text-white">
              <th className="px-5 py-4 font-semibold">Details</th>
              {comparison.columns.map((c, i) => (
                <th key={c} className={`px-5 py-4 font-display text-base font-bold ${i === last ? 'bg-saffron-500' : ''}`}>
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map(([label, ...cells], r) => (
              <tr key={label} className={r % 2 ? 'bg-navy-50/50' : 'bg-white'}>
                <td className="px-5 py-3.5 text-navy-900/60">{label}</td>
                {cells.map((v, i) => (
                  <td key={i} className={`px-5 py-3.5 font-semibold ${i === last ? 'bg-saffron-50 text-saffron-600' : ''}`}>
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
      <p className="mt-3 text-xs text-navy-900/40">Figures as shown in the company franchise presentation. Other brands are shown by category only.</p>
    </section>
  )
}