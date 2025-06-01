"use client"

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronRight, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 to-slate-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <div className={cn(
              "transition-all duration-1000 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}>
              <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-400/20 text-blue-300 mb-4">
                <Zap className="h-4 w-4 mr-1" />
                Licensed Sydney Electricians
              </span>
              <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight tracking-tight">
                Powering Sydney <br className="hidden md:block" />
                <span className="text-blue-400">With Excellence</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl">
                Paramount Energy Group delivers reliable, innovative electrical services across Greater Sydney and NSW with expertise and integrity.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 hover:text-black px-8 py-3">
                  <Link href="/contact">Get a Quote</Link>
                </Button>
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 hover:text-black px-8 py-3">
                  <Link href="/services">Our Services <ChevronRight className="h-4 w-4 ml-1" /></Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className={cn(
              "transition-all duration-1000 transform delay-300",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            )}>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/257886/pexels-photo-257886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Professional electrical installation" 
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 max-w-[240px]">
                  <div className="flex items-center text-blue-600">
                    <Zap className="h-5 w-5 mr-2" />
                    <span className="font-bold">24/7 Emergency Service</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">
                    Serving Sydney & surrounds with rapid response times.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-16 md:h-24 w-full fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V100.69C57.1,97.93,124.92,88.05,182.97,78.43Z"></path>
        </svg>
      </div>
    </div>
  )
}