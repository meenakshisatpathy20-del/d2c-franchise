import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import { storeModels } from '../../data/content'

const rows = [
  ['Store size', (m) => m.size],
  ['Total investment', (m) => `~${m.investment}`],
  ['Company package', (m) => m.package],
  ['Rent / month', (m) => m.opex[0][1]],
  ['Manpower / month', (m) => m.opex[2][1]],
  ['Revenue / month (est.)', (m) => m.revenue],
  ['Margin / month', (m) => (m.margin ? `${m.margin} @${m.marginPct}` : `${m.marginPct} of sales`)],
  ['Royalty', () => '0%'],
]

export default function CompareTable() {
  return (
    <section className="section bg-white">
      <SectionTitle eyebrow="Side by side" title="Compare all" highlight="three formats" />
      <Reveal className="no-scrollbar mt-8 overflow-x-auto rounded-3xl border border-navy-50 shadow-lg shadow-navy-500/5">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead>
            <tr className="bg-navy-900 text-white">
              <th className="px-5 py-4 font-semibold">Details</th>
              {storeModels.map((m) => (
                <th key={m.id} className="px-5 py-4 font-display text-base font-bold">
                  {m.name} {m.size}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, get], i) => (
              <tr key={label} className={i % 2 ? 'bg-navy-50/50' : 'bg-white'}>
                <td className="px-5 py-3.5 text-navy-900/60">{label}</td>
                {storeModels.map((m) => (
                  <td key={m.id} className={`px-5 py-3.5 font-semibold ${label === 'Royalty' ? 'text-leaf-600' : ''}`}>
                    {get(m)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
      <p className="mt-3 text-xs text-navy-900/40">All figures as per the company franchise presentation. Margin is on sales, before monthly running costs.</p>
    </section>
  )
}