"use client"

import { useEffect, useState, useRef } from 'react'
import { cn } from '@/lib/utils'

const stats = [
  { id: 1, value: 15, suffix: "+", label: "Years of Experience" },
  { id: 2, value: 1000, suffix: "+", label: "Completed Projects" },
  { id: 3, value: 100, suffix: "%", label: "Client Satisfaction" },
  { id: 4, value: 24, suffix: "/7", label: "Emergency Service" },
]

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState(stats.map(() => 0))
  const sectionRef = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])
  
  useEffect(() => {
    if (!isVisible) return
    
    const intervals = stats.map((stat, index) => {
      const duration = 2000
      const steps = 50
      const stepValue = stat.value / steps
      let current = 0
      
      return setInterval(() => {
        setCounts(prev => {
          const newCounts = [...prev]
          current += stepValue
          if (current > stat.value) {
            current = stat.value
            clearInterval(intervals[index])
          }
          newCounts[index] = Math.floor(current)
          return newCounts
        })
      }, duration / steps)
    })
    
    return () => {
      intervals.forEach(interval => clearInterval(interval))
    }
  }, [isVisible])

  return (
    <section ref={sectionRef} className="py-16 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.id}
              className={cn(
                "text-center transform transition-all duration-700",
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-12",
                { 'transition-delay-150': index === 1 },
                { 'transition-delay-300': index === 2 },
                { 'transition-delay-450': index === 3 }
              )}
            >
              <div className="font-bold text-4xl md:text-5xl lg:text-6xl text-blue-600 mb-2">
                {counts[index]}{stat.suffix}
              </div>
              <div className="text-slate-600 dark:text-slate-300 text-lg font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}