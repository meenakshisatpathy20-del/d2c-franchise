import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Counter({ value, suffix = '' }) {
  const ref = useRef(null)

  useGSAP(() => {
    const counter = { n: 0 }
    gsap.to(counter, {
      n: value,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: { trigger: ref.current, start: 'top 90%', once: true },
      onUpdate: () => {
        if (ref.current) ref.current.textContent = Math.round(counter.n) + suffix
      },
    })
  })

  return <span ref={ref}>0{suffix}</span>
}