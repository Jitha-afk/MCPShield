import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { cn } from '../lib/utils'
import { Navbar } from '../components/navbar'

export const metadata: Metadata = {
  title: 'MCP Shield – Secure Your MCP Calls',
  description: 'Monitoring & protecting Model Context Protocol interactions from prompt injection and emerging threats.',
  openGraph: {
    title: 'MCP Shield',
    description: 'Secure your MCP interactions on Copilot+ and local AI stacks.',
    url: 'https://jitha-microsoft.github.io/HACKATHON25-MCPShield',
    siteName: 'MCP Shield',
  },
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(()=>{try{const t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}}catch(e){document.documentElement.classList.add('dark')}})();`
          }}
        />
      </head>
      <body className={cn('min-h-screen flex flex-col bg-background font-sans text-foreground')}> 
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">© {new Date().getFullYear()} MCP Shield.</footer>
      </body>
    </html>
  )
}
