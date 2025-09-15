"use client"
import { useEffect, useRef } from 'react'

interface UnicornStudioProps {
  projectId?: string
  className?: string
  /** Optional override for container height (default 100vh) */
  height?: string
  /** Force calling init again even if already initialized */
  forceReinit?: boolean
}

// Lightweight loader that injects unicornstudio script once and renders a full-size container.
export default function UnicornStudio({
  projectId = 'iUBa2FcBKKlYpnFPBfB9',
  className = '',
  height = '100vh',
  forceReinit = false
}: UnicornStudioProps) {
  const initializedRef = useRef(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Allow re-init if explicitly requested
    if (initializedRef.current && !forceReinit) return
    initializedRef.current = true
    if (!(window as any).UnicornStudio) {
      ;(window as any).UnicornStudio = { isInitialized: false }
      const scriptEl = document.createElement('script')
      scriptEl.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js'
      scriptEl.onload = () => {
        const us = (window as any).UnicornStudio
        if ((!us.isInitialized || forceReinit) && typeof us.init === 'function') {
          us.init()
          us.isInitialized = true
        }
      }
      ;(document.head || document.body).appendChild(scriptEl)
    } else {
      const us = (window as any).UnicornStudio
      if ((forceReinit || !us.isInitialized) && typeof us.init === 'function') {
        try { us.init() } catch (e) { /* swallow */ }
        us.isInitialized = true
      } 
    }
  }, [forceReinit])

  return (
    <div
      ref={containerRef}
      data-us-project={projectId}
      style={{ width: '100%', height }}
      className={className}
    />
  )
}
