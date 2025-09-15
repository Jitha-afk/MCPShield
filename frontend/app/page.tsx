"use client"
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Button } from '../components/ui/button'
import TestimonialsMarquee from '../components/testimonials-marquee'
import UnicornStudio from '../components/unicorn-studio'

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (heroRef.current) {
      const ctx = gsap.context(() => {
        gsap.from('[data-animate="fade-up"]', { y: 28, opacity: 0, stagger: 0.15, duration: 0.9, ease: 'power3.out' })
      }, heroRef)
      return () => ctx.revert()
    }
  }, [])

  return (
    <div ref={heroRef}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Unicorn Studio full-screen canvas */}
        <UnicornStudio className="absolute inset-0 -z-10" height="100%" />
        {/* Content anchored near bottom-left with generous whitespace */}
        <div className="container flex flex-1 items-end pb-24 md:pb-28">
          <div className="max-w-4xl space-y-8" data-animate-wrapper>
            <h1
              data-animate="fade-up"
              className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]"
            >
              The AI Firewall,
              <br />
              For Agent Era
            </h1>
            <div data-animate="fade-up" className="pt-2">
              <Button size="lg" className="shadow-lg shadow-primary/30">
                Try it out
              </Button>
            </div>
          </div>
        </div>
      </section>
      <TestimonialsMarquee />
      <section id="features" className="container py-20 grid gap-12 md:gap-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Inline Threat Detection', body: 'Analyze prompts & tool I/O for injection signatures using lightweight local models.' },
            { title: 'Policy Engine', body: 'Declarative rules for blocking, redacting, or sandboxing suspicious flows.' },
            { title: 'Copilot+ Ready', body: 'Optimized for upcoming NPU accelerated scenarios on Windows.' },
          ].map(card => (
            <div key={card.title} className="p-6 rounded-xl border border-border/60 bg-card text-card-foreground shadow-sm">
              <h3 className="font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="roadmap" className="container py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Roadmap</h2>
        <ol className="space-y-6 max-w-2xl">
          <li className="border-l pl-4 border-primary/50"><span className="font-medium">Alpha:</span> Local prompt stream inspection & rule based blocking.</li>
          <li className="border-l pl-4 border-primary/50"><span className="font-medium">Beta:</span> Adaptive ML scoring, Windows service integration, telemetry opt-in.</li>
          <li className="border-l pl-4 border-primary/50"><span className="font-medium">GA:</span> Copilot+ deep hooks, enterprise policy packs, SOC integration.</li>
        </ol>
      </section>
    </div>
  )
}
