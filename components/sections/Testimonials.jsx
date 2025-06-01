"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { QuoteIcon } from '@/components/icons/QuoteIcon'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Homeowner",
    quote: "Paramount Energy Group completely rewired our 1950s home. Their team was professional, clean, and finished ahead of schedule. I couldn't be happier with the results!",
    rating: 5,
    imageUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Office Manager",
    quote: "We hired Paramount for our office renovation and they exceeded our expectations. Their attention to detail and commitment to safety was impressive. Highly recommend!",
    rating: 5,
    imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    name: "David Rodriguez",
    position: "Factory Operations Director",
    quote: "Our factory needed a major electrical upgrade without disrupting production. Paramount's team worked efficiently during off-hours and completed the project with minimal downtime.",
    rating: 5,
    imageUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    name: "Emily Wilson",
    position: "Restaurant Owner",
    quote: "After a small electrical fire, we needed urgent help. Paramount responded within the hour and got our restaurant back up and running. They've been our go-to electricians ever since.",
    rating: 5,
    imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 5,
    name: "Robert Thompson",
    position: "Property Manager",
    quote: "Managing multiple properties means I need reliable contractors. Paramount Energy Group has consistently delivered quality work across all my properties for years.",
    rating: 5,
    imageUrl: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }
  }

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 500)
    
    return () => clearTimeout(timer)
  }, [activeIndex])

  const visibleTestimonials = () => {
    const result = []
    for (let i = 0; i < 3; i++) {
      const index = (activeIndex + i) % testimonials.length
      result.push(testimonials[index])
    }
    return result
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our satisfied customers about their 
            experience working with Paramount Energy Group.
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="hidden md:block absolute left-0 top-1/2 z-10 -translate-y-1/2">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-background/80 backdrop-blur-sm shadow-lg"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
          <div className="hidden md:block absolute right-0 top-1/2 z-10 -translate-y-1/2">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-background/80 backdrop-blur-sm shadow-lg"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 px-4 md:px-16">
            {visibleTestimonials().map((testimonial, i) => (
              <TestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial}
                className={cn(
                  "transition-all duration-500 ease-in-out",
                  i === 2 && "hidden lg:block",
                  isAnimating && "opacity-70 blur-[2px]"
                )}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-12 md:hidden space-x-2">
            <Button variant="outline" size="icon" onClick={prevTestimonial}>
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextTestimonial}>
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial, className }) {
  return (
    <Card className={cn("flex flex-col h-full", className)}>
      <CardContent className="pt-6 flex flex-col h-full">
        <div className="mb-6 flex-1">
          <div className="flex items-center mb-4">
            {Array(testimonial.rating).fill(null).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <QuoteIcon className="text-blue-200 w-10 h-10 mb-3" />
          <p className="text-lg">{testimonial.quote}</p>
        </div>
        <div className="flex items-center mt-6 pt-6 border-t">
          <div className="mr-4 w-12 h-12 rounded-full overflow-hidden">
            <img 
              src={testimonial.imageUrl} 
              alt={testimonial.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-muted-foreground">{testimonial.position}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}