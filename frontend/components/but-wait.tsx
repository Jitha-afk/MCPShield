"use client"
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * 50vh interstitial section appearing after testimonials.
 * Animates each character of the phrase "BUT WAIT, WHAT IS THIS??" into view
 * when the section scrolls into ~60% of the viewport, using GSAP + ScrollTrigger.
 */
export default function ButWaitSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    // Register plugin idempotently (pattern used elsewhere in codebase)
    if (!(gsap as any).registeredScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger)
      ;(gsap as any).registeredScrollTrigger = true
    }

    const wordGroups = Array.from(el.querySelectorAll<HTMLElement>('[data-bw-word]'))
    const allChars = Array.from(el.querySelectorAll<HTMLElement>('[data-bw-char]'))
    gsap.set(allChars, { yPercent: 140, rotateX: -70, opacity: 0, color: 'var(--background)' })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        // shorten scroll distance to accelerate progress
        end: '+=300',
        scrub: 0.4 // light smoothing
      }
    })

    wordGroups.forEach((group, i) => {
      const chars = Array.from(group.querySelectorAll<HTMLElement>('[data-bw-char]'))
      const label = `word-${i}`
      tl.addLabel(label)
        .to(chars, {
          yPercent: 0,
          rotateX: 0,
          opacity: 1,
            color: '#FFFFFF',
          ease: 'power3.out',
          duration: 0.5,
          stagger: 0.03
        }, '>') // strictly after previous segment
    })

    return () => { tl.kill() }
  }, [])

  // Two-line layout (grouped words)
  const lineGroups: string[][] = [
    ['BUT', 'WAIT,'],
    ['WHAT IS', 'THIS??']
  ]

  return (
    <section
      ref={sectionRef}
      aria-label="But Wait Interstitial"
      className="relative h-[25vh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background via-background/80 to-background" />
      <h2 className="relative z-10 text-center font-extrabold tracking-tight text-5xl md:text-7xl leading-[1.05] select-none space-y-2">
        {lineGroups.map((words, li) => (
          <div key={li} className="flex justify-center gap-6 md:gap-10">
            {words.map((word, wi) => (
              <span key={wi} data-bw-word className="inline-flex">
                {Array.from(word).map((char, ci) => (
                  <span key={ci} className={`inline-block overflow-hidden ${char === ' ' ? 'w-3 md:w-4' : ''}`}>
                    <span data-bw-char className="inline-block will-change-transform">
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        ))}
      </h2>
    </section>
  )
}


