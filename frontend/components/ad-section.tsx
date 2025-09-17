"use client";

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * AdSection
 * Full viewport (100vh) promotional section to sit between Hero and Testimonials.
 * Includes a background placeholder layer reserved for a future interactive Unicorn.Studio element.
 */
const RAW_TEXT = `AI is the future.\nBut every future has threats.\n\nMCPShield runs where others can’t - on the NPU inside your Copilot+ PC.\n\nSeamless in every MCP client,\nbuilt to catch the invisible,\nstopping attacks before they stop you.\n\nThis is the AI firewall for the agent era.`

export default function AdSection() {
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    if (!(gsap as any).registeredScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger)
      ;(gsap as any).registeredScrollTrigger = true
    }

    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>('[data-ad-word]')
      if (!words.length) return

      // Break every word into characters (already split) and set base state.
      const chars = gsap.utils.toArray<HTMLElement>('[data-ad-char]')
      gsap.set(words, { y: 22, opacity: 0.12 })
      gsap.set(chars, { color: 'currentColor', opacity: 0.6 })

      // Build a timeline where each word animates into place & recolors its chars.
      const tl = gsap.timeline({
        defaults: { ease: 'power2.out' },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 30%',
          scrub: true,
        }
      })

      const persistentSet = new Set<HTMLElement>()

      words.forEach((wordEl, i) => {
        const wordChars = Array.from(wordEl.querySelectorAll<HTMLElement>('[data-ad-char]'))
        const isPersistent = wordEl.dataset.persistent === 'true'

        // Word entrance
        tl.to(wordEl, { y: 0, opacity: 1, duration: 0.4 }, i * 0.25)

        // Character fill
        tl.to(wordChars, {
          color: 'var(--sidebar-accent)',
          stagger: 0.02,
          duration: 0.35,
          ease: 'none',
          onComplete: () => {
            if (isPersistent) {
              persistentSet.add(wordEl)
            }
          }
        }, i * 0.25 + 0.1)

        // Dim previous non-persistent word
        if (i > 0) {
          const prev = words[i - 1]
          if (!persistentSet.has(prev) && prev.dataset.persistent !== 'true') {
            const prevChars = Array.from(prev.querySelectorAll<HTMLElement>('[data-ad-char]'))
            tl.to(prevChars, { color: 'currentColor', duration: 0.3, stagger: 0.005, ease: 'none' }, i * 0.25)
            tl.to(prev, { opacity: 0.38, duration: 0.3 }, i * 0.25)
          }
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const lines = RAW_TEXT.split('\n')

  return (
    <section
      ref={sectionRef}
    id="ad"
    className="relative min-h-screen py-24 w-full flex items-center justify-center"
      aria-labelledby="ad-heading"
    >
      {/* Background placeholder (future unicorn.studio interactive canvas) */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center"
        data-role="unicorn-background-placeholder"
        aria-hidden="true"
      >
        {/* Unicorn.Studio embedded project placeholder */}
        <div
          data-us-project="6lp3CWaPgGAmuQXjiEOZ"
          style={{ width: '100%', height: '100vh' }}
          className="max-w-none"
        />
        <script
          // Using dangerouslySetInnerHTML so we only inject once; init guard prevents duplicates
          dangerouslySetInnerHTML={{
            __html: `!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();`
          }}
        />
      </div>

      <div className="container max-w-5xl mx-auto px-6 md:px-10 xl:px-16">
        <h2
          id="ad-heading"
          className="text-pretty font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight"
        >
          {lines.map((line, lineIdx) => {
            if (line.trim() === '') {
              return <div key={lineIdx} className="h-6 md:h-7" aria-hidden="true" />
            }
            const words = line.split(/\s+/)
            return (
              <div key={lineIdx} data-ad-line className="flex flex-wrap gap-x-3 gap-y-2 md:gap-x-4 md:gap-y-3">
                {words.map((word, wIdx) => {
                  const persistent = /^(MCPShield|NPU|Copilot\+|PC|AI|Firewall)$/i.test(word.replace(/[^A-Za-z+]/g, ''))
                  return (
                    <span
                      key={wIdx}
                      data-ad-word
                      data-persistent={persistent ? 'true' : 'false'}
                      className="inline-flex overflow-hidden py-[0.4em]"
                    >
                      {Array.from(word).map((char, cIdx) => (
                        <span
                          key={cIdx}
                          data-ad-char
                          className="inline-block will-change-transform"
                        >
                          {char}
                        </span>
                      ))}
                    </span>
                  )
                })}
              </div>
            )
          })}
        </h2>
      </div>
    </section>
  )
}
