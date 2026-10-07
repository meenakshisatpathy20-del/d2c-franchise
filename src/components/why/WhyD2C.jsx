import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import ProblemSolution from '../components/home/ProblemSolution'
import IndustryCompare from '../components/why/IndustryCompare'
import SupportGrid from '../components/why/SupportGrid'
import CtaBand from '../components/home/CtaBand'
import { highlights } from '../data/content'

export default function WhyD2C() {
  return (
    <>
      <PageHeader
        eyebrow="Why D2C"
        title="India's 1st Multi D2C Brand"
        highlight="Retail Platform"
        text="Aspirational products at affordable prices across all lifestyle categories."
        image="/images/store-front-render.webp"
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/models" className="btn-primary">
            See models <ArrowRight size={18} />
          </Link>
          <Link to="/apply" className="btn border-2 border-white/30 text-white hover:bg-white/10">
            Apply now
          </Link>
        </div>
      </PageHeader>

      <section className="section pb-0">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.label} className="glass rounded-3xl p-5 text-center">
              <p className="font-display text-3xl font-extrabold text-saffron-500 md:text-4xl">{h.value}</p>
              <p className="mt-1 text-sm font-medium text-navy-900/60">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      <ProblemSolution />
      <IndustryCompare />
      <SupportGrid />
      <CtaBand />
    </>
  )
}