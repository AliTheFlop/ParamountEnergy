"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 w-full z-40 transition-all duration-300 bg-white shadow-sm">
      {/* Top bar with contact info */}
      <div className="hidden md:block bg-primary text-primary-foreground">
        <div className="container mx-auto py-2 px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>(02) 9123 4567</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span>info@paramountenergy.com.au</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto py-4 px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="font-bold text-2xl">
            <span className="text-blue-600">PARAMOUNT</span> <span className="text-amber-500">ENERGY</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="font-medium text-foreground/80 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-blue-600 hover:bg-blue-700 hover:text-white px-6 py-2.5">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
          <Button 
            variant="ghost"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2"
          >
            <span className="sr-only">Open menu</span>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex md:hidden">
          <div className="p-4 w-full">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <div className="font-bold text-2xl">
                  <span className="text-blue-600">PARAMOUNT</span> <span className="text-amber-500">ENERGY</span>
                </div>
              </Link>
              <Button 
                variant="ghost" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2"
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="mt-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="py-3 font-medium text-lg border-b border-border"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button asChild className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 hover:text-white">
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </div>
              <div className="py-4 border-t border-border space-y-2">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>(02) 9123 4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>info@paramountenergy.com.au</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}