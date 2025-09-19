"use client"
import { useEffect, useRef } from 'react'

/**
 * Full-screen background UnicornStudio section for the "az-foundry" showcase.
 * Uses provided embed snippet: project id tQf6tgqBOB7knqciUPJk
 */
export default function AzFoundrySection() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Ensure script loaded only once globally
    if (!(window as any).__unicornStudioLoading) {
      ;(window as any).__unicornStudioLoading = true
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js'
      script.async = true
      script.onload = () => {
        if (!(window as any).UnicornStudio?.isInitialized) {
          try {
            ;(window as any).UnicornStudio?.init?.()
            ;(window as any).UnicornStudio.isInitialized = true
          } catch (e) {
            console.warn('UnicornStudio init failed', e)
          }
        }
      }
      document.head.appendChild(script)
    } else {
      // If already loaded, attempt init immediately (idempotent)
      try {
        ;(window as any).UnicornStudio?.init?.()
      } catch {/* ignore */}
    }
  }, [])

  return (
    <section id="az-foundry" className="relative h-screen w-full overflow-hidden">
      {/* Background project canvas (sized by inline style to preserve layout expectations) */}
      <div
        ref={containerRef}
        data-us-project="XZ9dqEijk6MOfR3Kmx5j"
        style={{ width: '1440px', height: '900px' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
      />
      <div className="absolute inset-0 -z-10 bg-background" />
      <div className="absolute inset-0 -z-0 opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/20 to-background" />
      {/* Overlay removed per request */}
    </section>
  )
}
