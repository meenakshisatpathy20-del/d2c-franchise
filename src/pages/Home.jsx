import Hero from '../components/home/Hero'
import StatsBand from '../components/home/StatsBand'
import ProblemSolution from '../components/home/ProblemSolution'
import ModelsTeaser from '../components/home/ModelsTeaser'
import CelebritySection from '../components/home/CelebritySection'
import PosterCarousel from '../components/home/PosterCarousel'
import PressStrip from '../components/home/PressStrip'
import Journey from '../components/home/Journey'
import CtaBand from '../components/home/CtaBand'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBand />
      <ProblemSolution />
      <ModelsTeaser />
      <CelebritySection />
      <PosterCarousel />
      <PressStrip />
      <Journey />
      <CtaBand />
    </>
  )
}