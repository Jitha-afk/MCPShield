"use client"
import { useEffect, useRef } from 'react'

interface UnicornStudioProps {
  projectId?: string
  className?: string
  /** Optional override for container height (default 100vh) */
  height?: string
}

// Lightweight loader that injects unicornstudio script once and renders a full-size container.
export default function UnicornStudio({
  projectId = 'iUBa2FcBKKlYpnFPBfB9',
  className = '',
  height = '100vh'
}: UnicornStudioProps) {
  const initializedRef = useRef(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (initializedRef.current) return
    initializedRef.current = true
    if (!(window as any).UnicornStudio) {
      ;(window as any).UnicornStudio = { isInitialized: false }
      const scriptEl = document.createElement('script')
      scriptEl.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js'
      scriptEl.onload = () => {
        const us = (window as any).UnicornStudio
        if (!us.isInitialized && typeof us.init === 'function') {
          us.init()
          us.isInitialized = true
        }
      }
      ;(document.head || document.body).appendChild(scriptEl)
    } else {
      const us = (window as any).UnicornStudio
      if (!us.isInitialized && typeof us.init === 'function') {
        us.init()
        us.isInitialized = true
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      data-us-project={projectId}
      style={{ width: '100%', height }}
      className={className}
    />
  )
}
