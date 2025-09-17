import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { cn } from '../lib/utils'
import { Navbar } from '../components/navbar'
import UnicornStudio from '../components/unicorn-studio'
import SmoothScrollProvider from '../components/smooth-scroll-provider'

export const metadata: Metadata = {
  title: 'MCP Shield – Secure Your MCP Calls',
  description: 'Monitoring & protecting Model Context Protocol interactions from prompt injection and emerging threats.',
  openGraph: {
    title: 'MCP Shield',
    description: 'Secure your MCP interactions on Copilot+ and local AI stacks.',
    url: 'https://jitha-microsoft.github.io/HACKATHON25-MCPShield',
    siteName: 'MCP Shield',
  },
  // Add SVG favicon (modern browsers) and retain ICO as fallback
  icons: [
    { rel: 'icon', url: '/favicon.svg', type: 'image/svg+xml' },
    { rel: 'icon', url: '/favicon.ico' },
  ],
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head />
      <body className={cn('min-h-screen flex flex-col bg-background font-sans text-foreground')}> 
        <Navbar />
        <SmoothScrollProvider>
          <main className="flex-1">{children}</main>
        </SmoothScrollProvider>
        <footer className="relative w-full border-t border-border flex justify-center">
          {/* Wrapper enforces fixed design-size canvas */}
          <div className="relative" style={{ width: '1990px', height: '1206px' }}>
            <UnicornStudio
              projectId="ov3DHYiPO44KYDqNVNV1"
              className="absolute inset-0 w-full h-full"
              height="100%"
            />
            {/* Bottom overlay text */}
            <div className="absolute inset-x-0 bottom-0 py-6 text-center text-sm text-popover-foreground bg-popover/65 backdrop-blur-sm">
              © {new Date().getFullYear()} Made with ❤️ for Microsoft Global Hackathon by MCP Shield Team.
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
