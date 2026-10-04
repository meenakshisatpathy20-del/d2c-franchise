import { LayoutGrid, PieChart, Sparkles, Wand2 } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import StoreModels from '../components/models/StoreModels'
import CompareTable from '../components/models/CompareTable'
import ExperienceFormats from '../components/models/ExperienceFormats'
import OperatingModels from '../components/models/OperatingModels'
import InvestmentSplit from '../components/models/InvestmentSplit'
import ModelFinder from '../components/models/ModelFinder'
import CtaBand from '../components/home/CtaBand'
import { scrollToId } from '../lib/scroll'

const jumps = [
  { id: 'store-models', label: 'Store formats', icon: LayoutGrid },
  { id: 'experience', label: 'Gym · Cafe · Gaming', icon: Sparkles },
  { id: 'split', label: 'Investment split', icon: PieChart },
  { id: 'finder', label: 'Model finder', icon: Wand2 },
]

export default function Models() {
  return (
    <>
      <PageHeader
        eyebrow="Franchise models"
        title="7 ways to own a"
        highlight="D2C business"
        text="From a ₹13 Lakh neighbourhood store to a ₹2.51 Crore lifestyle mall — zero royalty, complete setup package and celebrity-backed marketing."
        image="/images/store-front-render.webp"
      >
        <div className="flex flex-wrap gap-2">
          {jumps.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollToId(id)}
              className="glass-dark flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10"
            >
              <Icon size={16} className="text-saffron-400" /> {label}
            </button>
          ))}
        </div>
      </PageHeader>
      <StoreModels />
      <InvestmentSplit />
      <CompareTable />
      <ExperienceFormats />
      <OperatingModels />
      <ModelFinder />
      <CtaBand />
    </>
  )
}