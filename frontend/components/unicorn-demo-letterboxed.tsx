"use client"
import { useEffect, useRef, useState, useLayoutEffect } from 'react'

interface UnicornDemoLetterboxedProps {
  projectId: string
  title?: string
  className?: string
  /** Logical base dimensions (default 1920x1080) */
  baseWidth?: number
  baseHeight?: number
  /** Background color for bars */
  barColorClass?: string
}

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
      const s = document.createElement('script')
      s.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js'
      s.onload = () => { try { w.UnicornStudio.init(); w.UnicornStudio.isInitialized = true } catch {}; resolve() }
      ;(document.head || document.body).appendChild(s)
    })
    return p
  }
})()

export default function UnicornDemoLetterboxed({
  projectId,
  title = 'See MCP Shield in action..',
  className = '',
  baseWidth = 1920,
  baseHeight = 1080,
  barColorClass = 'bg-background'
}: UnicornDemoLetterboxedProps) {
  const stageRef = useRef<HTMLDivElement | null>(null)
  const [scale, setScale] = useState(1)
  const aspect = baseWidth / baseHeight

  useLayoutEffect(() => {
    if (!stageRef.current) return
    const el = stageRef.current
    const compute = () => {
      const vw = el.clientWidth
      const vh = el.clientHeight
      const containerAspect = vw / vh
      let nextScale = 1
      if (containerAspect > aspect) {
        // limited by height
        nextScale = vh / baseHeight
      } else {
        // limited by width
        nextScale = vw / baseWidth
      }
      setScale(nextScale)
    }
    const ro = new ResizeObserver(compute)
    ro.observe(el)
    compute()
    return () => ro.disconnect()
  }, [aspect, baseWidth, baseHeight])

  useEffect(() => { loadUnicornScript() }, [])

  return (
    <section
      id="demo-visual"
      aria-label="Demo Section"
      className={`relative h-screen w-screen overflow-hidden flex flex-col ${className}`}
      style={{ width: '100vw' }}
    >
      {/* Bars (letterbox/pillarbox) handled by background color of section */}
      <div ref={stageRef} className={`absolute inset-0 flex items-center justify-center ${barColorClass}`}> 
        <div
          data-us-project={projectId}
          style={{
            width: baseWidth,
            height: baseHeight,
            transform: `scale(${scale})`,
            transformOrigin: 'center center'
          }}
          className="shadow-lg"
        />
      </div>
      <div className="pointer-events-none pt-10 pb-4 w-full text-center z-10">
        <h2 className="inline-block px-6 py-2 rounded-full bg-background/70 backdrop-blur text-xl md:text-2xl font-semibold tracking-tight shadow-sm">
          {title}
        </h2>
      </div>
      <div className="flex-1" />
    </section>
  )
}
