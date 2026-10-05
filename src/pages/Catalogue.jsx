import PageHeader from '../components/ui/PageHeader'
import ProductGrid from '../components/catalogue/ProductGrid'
import BrandWall from '../components/catalogue/BrandWall'
import CtaBand from '../components/home/CtaBand'

export default function Catalogue() {
  return (
    <>
      <PageHeader
        eyebrow="Catalogue"
        title="What sells in a"
        highlight="D2C Mall"
        text="Browse products from our own brands. Tap the heart on anything you like — your shortlist goes with your franchise application."
        image="/images/luxura/luxura-banner.webp"
      />
      <section className="section pt-0">
        <ProductGrid />
      </section>
      <BrandWall />
      <CtaBand />
    </>
  )
}