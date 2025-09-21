"use client"
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '../components/ui/button'
import TestimonialsMarquee from '../components/testimonials-marquee'
import UnicornStudio from '../components/unicorn-studio'
import LoadingGate from '../components/loading-gate'
import RoadmapAnimated from '../components/roadmap-animated'
import AdSection from '../components/ad-section'
import UnicornDemoSection from '../components/unicorn-demo-section'
import ButWaitSection from '../components/but-wait'
import AzFoundrySection from '../components/az-foundry-section'
import { useState } from 'react'

export default function HomePage() {
  const [shaderReady, setShaderReady] = useState(false)
  const heroRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!heroRef.current) return

    const ctx = gsap.context(() => {
      // Register plugins
      // Ensure ScrollTrigger is registered once (idempotent)
      if (!(gsap as any).registeredScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger)
        ;(gsap as any).registeredScrollTrigger = true
      }
      // Fade-up for general elements (excluding the headline now handled separately)
      gsap.from('[data-animate="fade-up"]', {
        y: 28,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: 'power3.out'
      })

  // Character headline animation
      const chars = gsap.utils.toArray<HTMLElement>('[data-headline-char]')
      if (chars.length) {
        // Set initial state (hidden below)
        gsap.set(chars, { yPercent: 120, opacity: 0 })
        // Keyframed bounce-in effect
        gsap.to(chars, {
          keyframes: [
            { yPercent: 0, opacity: 1, ease: 'power3.out', duration: 0.6 },
            { yPercent: -14, ease: 'power1.out', duration: 0.18 },
            { yPercent: 0, ease: 'power2.out', duration: 0.34 }
          ],
          stagger: 0.04,
          delay: 0.1
        })
      }
      // (Scroll snapping removed per updated requirements)
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={heroRef} className="relative">
      <LoadingGate ready={shaderReady} />
      {/* Hero Section */}
  <section className="relative min-h-screen flex flex-col overflow-hidden">
  {/* Unicorn Studio full-screen canvas (updated project) */}
  {/* Hero background unicorn canvas (keep -z-10 so intermediate sections don't clip it) */}
  <UnicornStudio onReady={() => setShaderReady(true)} projectId="dDwz2YDuLTupUpCRhONo" className="absolute inset-0 -z-10" height="100%" />
        {/* Content anchored near bottom-left with generous whitespace */}
  <div className="container flex flex-1 items-end pb-24 md:pb-28">
          <div className="max-w-4xl space-y-8" data-animate-wrapper>
            <h1
              className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]"
              aria-label="The AI Firewall, For Agent Era"
            >
              <span className="sr-only">The AI Firewall, For Agent Era</span>
              <div className="space-y-2">
                {/* Line 1 */}
                <div className="flex flex-wrap">
                  {['The', 'AI', 'Firewall,'].map((word, wIdx) => (
                    <div
                      key={wIdx}
                      className="overflow-hidden mr-4 last:mr-0 pt-1.5 pb-2 -my-2"
                      aria-hidden="true"
                    >
                      <div className="inline-flex translate-y-[6px]">
                        {Array.from(word).map((char, cIdx) => (
                          <span
                            key={cIdx}
                            data-headline-char
                            className="inline-block will-change-transform"
                          >
                            {char}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                {/* Line 2 */}
                <div className="flex flex-wrap text-accent">
                  {['For', 'Agent', 'Era'].map((word, wIdx) => (
                    <div
                      key={wIdx}
                      className={`${word === 'Agent' ? 'mr-4 last:mr-0 pt-1.5 pb-2 -my-2' : 'overflow-hidden mr-4 last:mr-0 pt-1.5 pb-2 -my-2'}`}
                      aria-hidden="true"
                    >
                      <div className="inline-flex translate-y-[2px]">
                        {Array.from(word).map((char, cIdx) => (
                          <span
                            key={cIdx}
                            data-headline-char
                            className="inline-block will-change-transform"
                          >
                            {char}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </h1>
            <p data-animate="fade-up" className="text-base md:text-lg text-muted-foreground max-w-2xl">
              Inspect prompts & MCP tool calls locally.<br></br>
              Enforce clear policies. Use AI with confidence.
            </p>
            <div data-animate="fade-up" className="pt-2">
              <Button size="lg" asChild className="shadow-lg shadow-primary/30">
                <a href="#try">Try it out</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
  {/* Ad Section (between Hero and Testimonials) */}
  <AdSection />
  {/* Simple 100vh full-bleed demo section (reverted from letterboxed) */}
  <section id="demo" className="relative min-h-screen">
    <UnicornDemoSection projectId="iX3Yko9qR358mDyrQg1J" />
  </section>
    <section aria-label="Testimonials" className="py-24">
        <div className="w-full max-w-7xl mx-auto">
          <TestimonialsMarquee />
        </div>
      </section>

    {/* Interstitial animated section now sits directly after testimonials for better flow */}
    <ButWaitSection />

    {/* Az Foundry background section */}
    <AzFoundrySection />



  <section
    id="try"
    className="relative py-20 scroll-mt-20 min-h-[50vh] flex items-center overflow-hidden"
  >
    <UnicornStudio
      projectId="H1zbLl2X0nwOiF0Tobqg"
      height="100%"
      className="absolute inset-0 -z-10 h-full w-full"
    />
    <div className="container relative flex flex-col items-center justify-center text-center gap-6">
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--sidebar-accent)]">Try MCP Shield</h2>
      <div className="flex gap-3">
        <Button
          asChild
          className="cta-heartbeat animate-bounce bg-[#F5DDC5] text-black shadow-lg shadow-primary/30 hover:bg-[#f3cfa3]"
        >
          <a href="https://github.com/jitha_microsoft/HACKATHON25-MCPShield/" target="_blank" rel="noopener noreferrer">Quickstart</a>
        </Button>
      </div>
    </div>
  </section>



  <section id="roadmap" className="container py-24 scroll-mt-20 min-h-screen flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Roadmap</h2>
        <RoadmapAnimated />
      </section>
    </div>
  )
}

