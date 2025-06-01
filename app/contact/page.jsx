"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react"
import { cn } from '@/lib/utils'

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      toast.success("Your message has been sent! We'll be in touch soon.")
    }, 1500)
  }

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Have a question or need a quote? We're here to help with all your electrical needs.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you have a question about our services, need a quote, or want to schedule a consultation, 
                our team is ready to assist you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Our Location</h3>
                    <p className="text-muted-foreground">
                      123 Energy Street<br />
                      San Francisco, CA 94110
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Call Us</h3>
                    <p className="text-muted-foreground">
                      Main Office: (555) 123-4567<br />
                      Emergency: (555) 987-6543
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Email Us</h3>
                    <p className="text-muted-foreground">
                      General Inquiries: info@paramountenergy.com<br />
                      Customer Support: support@paramountenergy.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed<br />
                      <span className="text-blue-600 font-medium">24/7 Emergency Service Available</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-1">
                            Full Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            placeholder="John Smith"
                            required
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1">
                              Email Address
                            </label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formState.email}
                              onChange={handleChange}
                              placeholder="john@example.com"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium mb-1">
                              Phone Number
                            </label>
                            <Input
                              id="phone"
                              name="phone"
                              value={formState.phone}
                              onChange={handleChange}
                              placeholder="(555) 123-4567"
                              required
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="service" className="block text-sm font-medium mb-1">
                            Service Interested In
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formState.service}
                            onChange={handleChange}
                            className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            required
                          >
                            <option value="" disabled>Select a service</option>
                            <option value="residential">Residential Services</option>
                            <option value="commercial">Commercial Services</option>
                            <option value="industrial">Industrial Services</option>
                            <option value="specialty">Specialty Services</option>
                            <option value="emergency">Emergency Service</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-1">
                            Message
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            placeholder="Tell us about your project or questions..."
                            rows={5}
                            required
                          />
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                      </div>
                    </form>
                  ) : (
                    <div className="py-12 text-center">
                      <div className="flex justify-center mb-4">
                        <CheckCircle2 className="h-16 w-16 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for contacting Paramount Energy Group. One of our representatives
                        will be in touch with you shortly.
                      </p>
                      <Button onClick={() => {
                        setIsSubmitted(false)
                        setFormState({
                          name: "",
                          email: "",
                          phone: "",
                          service: "",
                          message: ""
                        })
                      }}>
                        Send Another Message
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visit our office or service center. We're conveniently located in San Francisco.
            </p>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl overflow-hidden">
            <div className="aspect-[16/9] w-full bg-slate-200 dark:bg-slate-700">
              {/* Placeholder for map - in a real implementation, this would be a Google Maps iframe or similar */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-muted-foreground">Interactive map would be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-xl text-white p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-8 md:mb-0 md:mr-8">
                <h2 className="text-3xl font-bold mb-4">24/7 Emergency Service</h2>
                <p className="text-lg text-blue-100 mb-6">
                  Electrical emergencies can happen at any time. Our team is available 24 hours a day, 
                  7 days a week to respond to your urgent electrical needs.
                </p>
                <div className="bg-white/10 rounded-lg p-4 inline-block">
                  <span className="block text-lg mb-1">Emergency Hotline:</span>
                  <span className="text-2xl font-bold">(555) 987-6543</span>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
                  <Phone className="h-12 w-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}