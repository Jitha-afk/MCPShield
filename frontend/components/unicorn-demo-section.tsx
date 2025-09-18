"use client"
import { useEffect, useRef } from 'react'

interface UnicornDemoSectionProps {
  projectId: string
  title?: string
  className?: string
}

// Ensures the Unicorn Studio script is loaded exactly once and returns a promise that resolves after (attempted) init.
const loadUnicornScript = (() => {
  let p: Promise<void> | null = null
  return () => {
    if (p) return p
    p = new Promise<void>((resolve) => {
      const w = window as any
      if (w.UnicornStudio?.init) {
        try { w.UnicornStudio.init(); w.UnicornStudio.isInitialized = true } catch {}
        resolve();
        return
      }
      w.UnicornStudio = w.UnicornStudio || { isInitialized: false }
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js'
      script.onload = () => {
        try { w.UnicornStudio.init(); w.UnicornStudio.isInitialized = true } catch {}
        resolve()
      }
      ;(document.head || document.body).appendChild(script)
    })
    return p
  }
})()

export default function UnicornDemoSection({ projectId, title = 'See MCP Shield in action..', className = '' }: UnicornDemoSectionProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => { loadUnicornScript() }, [])

  return (
    <section id="demo-visual" aria-label="Demo Section" className={`relative h-screen w-full overflow-hidden flex flex-col ${className}`}>
      {/* Background fill container */}
      <div ref={wrapperRef} className="absolute inset-0 -z-10">
        <div data-us-project={projectId} style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Overlay heading */}
      <div className="pointer-events-none pt-10 pb-4 w-full text-center z-10">
        <h2 className="inline-block px-6 py-2 rounded-full bg-background/70 backdrop-blur text-xl md:text-2xl font-semibold tracking-tight shadow-sm">
          {title}
        </h2>
      </div>
      <div className="flex-1" />
    </section>
  )
}
