import { Suspense, useEffect, useRef } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Sidebar from './Sidebar'
import MobileNav from './MobileNav'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import PageLoader from '../ui/PageLoader'

gsap.registerPlugin(ScrollTrigger)

export default function Layout() {
  const { pathname } = useLocation()
  const outlet = useOutlet()
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1 })
    lenisRef.current = lenis
    lenis.on('scroll', ScrollTrigger.update)
    const tick = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)
    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  useEffect(() => {
    if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-dvh">
      <Sidebar />
      <MobileNav />

      <div className="pb-24 lg:pb-0 lg:pl-72">
        <AnimatePresence mode="wait" onExitComplete={() => ScrollTrigger.refresh()}>
          <motion.main
            key={pathname}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <Suspense fallback={<PageLoader />}>{outlet}</Suspense>
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>

      <WhatsAppButton />
    </div>
  )
}