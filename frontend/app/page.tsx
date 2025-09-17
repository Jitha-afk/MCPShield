"use client"
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Button } from '../components/ui/button'
import TestimonialsMarquee from '../components/testimonials-marquee'
import UnicornStudio from '../components/unicorn-studio'

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!heroRef.current) return

    const ctx = gsap.context(() => {
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
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={heroRef}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
  {/* Unicorn Studio full-screen canvas (updated project) */}
  <UnicornStudio projectId="dDwz2YDuLTupUpCRhONo" className="absolute inset-0 -z-10" height="100%" />
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
                <div className="flex flex-wrap">
                  {['For', 'Agent', 'Era'].map((word, wIdx) => (
                    <div
                      key={wIdx}
                      className="overflow-hidden mr-4 last:mr-0 pt-1.5 pb-2 -my-2"
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
                <a href="#demo">Try it out</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <TestimonialsMarquee />
      <section id="features" className="container py-20 grid gap-12 md:gap-20 scroll-mt-20">
        <h2 className="text-3xl md:text-4xl font-bold">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Inline Threat Detection', body: 'Analyze prompts & tool I/O for injection signatures using lightweight local models.' },
            { title: 'Policy Engine', body: 'Declarative rules for blocking, redacting, or sandboxing suspicious flows.' },
            { title: 'Copilot+ Ready', body: 'Optimized for upcoming NPU accelerated scenarios on Windows.' },
          ].map(card => (
            <div key={card.title} className="p-6 rounded-xl border border-border bg-card text-card-foreground shadow-sm">
              <h3 className="font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="container py-20 scroll-mt-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
        <ol className="grid gap-4 md:grid-cols-3">
          <li className="p-5 rounded-xl border border-border/60 bg-card/50">
            <div className="font-semibold mb-1">Step 1: Plug in</div>
            <p className="text-sm text-muted-foreground">Add a small adapter on your MCP tool bus.</p>
          </li>
          <li className="p-5 rounded-xl border border-border/60 bg-card/50">
            <div className="font-semibold mb-1">Step 2: Inspect</div>
            <p className="text-sm text-muted-foreground">Traffic is scanned and scored in real time.</p>
          </li>
          <li className="p-5 rounded-xl border border-border/60 bg-card/50">
            <div className="font-semibold mb-1">Step 3: Enforce</div>
            <p className="text-sm text-muted-foreground">Policies block, redact, or sandbox. Logged for audit.</p>
          </li>
        </ol>
      </section>

      <section id="why" className="container py-20 scroll-mt-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why MCP Shield</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl border border-border/60 bg-card/50">
            <h3 className="font-semibold mb-1">Local-first</h3>
            <p className="text-sm text-muted-foreground">Keep sensitive data on-device. No vendor lock-in.</p>
          </div>
          <div className="p-5 rounded-xl border border-border/60 bg-card/50">
            <h3 className="font-semibold mb-1">Transparent control</h3>
            <p className="text-sm text-muted-foreground">Rules + lightweight models. Tunable and debuggable.</p>
          </div>
        </div>
      </section>

      <section id="demo" className="container py-20 scroll-mt-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Try MCP Shield</h2>
        <p className="text-sm md:text-base text-muted-foreground mb-6">
          Spin up a local adapter and see policy enforcement on sample tools.
        </p>
        <div className="flex gap-3">
          <Button asChild><a href="/quickstart">Quickstart</a></Button>
        </div>
      </section>

      <section id="roadmap" className="container py-24 scroll-mt-20">
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
