import Link from 'next/link'
import Image from 'next/image'
import Logo3D from '../public/MCPShield 3D Logo Transparent.png'
import { Button } from './ui/button'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from './ui/navigation-menu'

const navItems = [
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#why', label: 'Why MCP Shield' },
  { href: '#roadmap', label: 'Roadmap' },
]

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container flex h-16 items-center">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 font-semibold mr-6">
          <Link href="#" className="flex items-center gap-2 group">
            <Image
              src={Logo3D}
              alt="MCP Shield 3D Logo"
              width={36}
              height={36}
              priority
              className="rounded-sm shadow-sm transition-transform group-hover:rotate-[6deg] group-hover:scale-105"
            />
            <span className="text-lg md:text-xl gradient-text tracking-tight">MCP Shield</span>
          </Link>
        </div>

        {/* Center: Primary Navigation */}
        <div className="hidden md:flex flex-1 justify-center">
          <NavigationMenu viewport={false} className="">
            <NavigationMenuList>
              {navItems.map(item => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink href={item.href} className="px-3 py-2 text-sm font-medium focus-visible:ring-0 focus-visible:outline-none">
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right: Single project love button */}
        <div className="flex items-center gap-3 ml-auto pl-4">
          <Button
            asChild
            size="sm"
            className="cta-heartbeat bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90"
          >
            <Link
              href="https://innovationstudio.microsoft.com/hackathons/hackathon2025/project/95945"
              target="_blank"
              rel="noopener noreferrer"
            >
              💖 the Project
            </Link>
          </Button>
          <Button
            asChild
            size="sm"
            variant="secondary"
            className="shadow-md hover:bg-secondary/80"
          >
            <Link
              href="https://github.com/Jitha-afk/MCPShield"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on GitHub"
            >
              <span className="flex items-center gap-1">
                {/* Inline GitHub icon (octocat simplified) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="opacity-90"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12A11.5 11.5 0 0 0 8.3 23.13c.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.48-1.34-5.48-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.38 11.38 0 0 1 3-.4c1.02 0 2.05.14 3 .4 2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22 0 1.6-.02 2.88-.02 3.27 0 .32.22.7.83.58A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
                <span className="hidden sm:inline">GitHub</span>
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
