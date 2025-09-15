import Link from 'next/link'
import { Button } from './ui/button'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from './ui/navigation-menu'
import { ThemeToggle } from './theme-toggle'

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
          <Link href="#" className="flex items-center gap-2">
            <span className="text-lg md:text-xl gradient-text">MCP Shield</span>
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

        {/* Right: CTAs */}
        <div className="flex items-center gap-3 ml-auto pl-4">
          <ThemeToggle className="hidden sm:inline-flex" />
          <Button asChild variant="secondary" size="sm" className="hidden sm:inline-flex">
            <Link href="#login">Login</Link>
          </Button>
          <Button asChild size="sm" className="shadow-lg shadow-primary/30">
            <Link href="#join">Join Up</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
