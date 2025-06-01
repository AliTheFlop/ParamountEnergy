import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Home, Building2, Factory, Lightbulb, Battery, ShieldCheck } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: 'Services | Paramount Energy Group',
  description: 'Professional electrical services for residential, commercial, and industrial clients.',
}

const serviceCategories = [
  {
    title: "Residential Services",
    icon: Home,
    description: "Complete electrical solutions for homes of all sizes",
    services: [
      {
        title: "Electrical Repairs & Troubleshooting",
        description: "Fast, reliable solutions for all residential electrical problems, from outlets and switches to circuit breakers and electrical panels."
      },
      {
        title: "Wiring & Rewiring",
        description: "Complete home wiring for new construction or rewiring for older homes to meet modern electrical standards and safety codes."
      },
      {
        title: "Lighting Installation",
        description: "Expert installation of all types of lighting fixtures, including recessed lighting, ceiling fans, chandeliers, and outdoor lighting."
      },
      {
        title: "Panel Upgrades",
        description: "Upgrade your electrical panel to accommodate increased power demands from modern appliances and electronics."
      },
      {
        title: "Smart Home Integration",
        description: "Installation and setup of smart home electrical systems, including automated lighting, thermostats, and security systems."
      },
      {
        title: "Surge Protection",
        description: "Whole-house surge protection systems to safeguard your valuable electronics and appliances."
      },
    ]
  },
  {
    title: "Commercial Services",
    icon: Building2,
    description: "Powering businesses with reliable electrical solutions",
    services: [
      {
        title: "Commercial Installations",
        description: "Complete electrical system design and installation for offices, retail spaces, restaurants, and other commercial properties."
      },
      {
        title: "Lighting Design & Installation",
        description: "Energy-efficient lighting solutions that enhance your business environment and reduce operational costs."
      },
      {
        title: "Electrical Maintenance",
        description: "Scheduled maintenance programs to ensure your electrical systems remain safe and functional, preventing costly downtime."
      },
      {
        title: "Energy Efficiency Audits",
        description: "Comprehensive analysis of your electrical systems to identify opportunities for energy savings and sustainability improvements."
      },
      {
        title: "Office Renovations",
        description: "Electrical upgrades and modifications for office renovations or tenant improvements."
      },
      {
        title: "Emergency Services",
        description: "Rapid response to electrical emergencies to minimize business disruption."
      },
    ]
  },
  {
    title: "Industrial Services",
    icon: Factory,
    description: "Heavy-duty electrical solutions for manufacturing and industrial facilities",
    services: [
      {
        title: "Industrial Power Systems",
        description: "Design, installation, and maintenance of robust electrical infrastructure for manufacturing and industrial environments."
      },
      {
        title: "Machine & Equipment Wiring",
        description: "Specialized wiring solutions for industrial machinery and equipment to ensure optimal performance and safety."
      },
      {
        title: "Control Panel Design & Installation",
        description: "Custom control panels and automation solutions for industrial processes and equipment."
      },
      {
        title: "Power Quality Analysis",
        description: "Comprehensive testing and solutions to address power quality issues affecting industrial operations."
      },
      {
        title: "Preventative Maintenance",
        description: "Scheduled inspection and maintenance programs to prevent costly downtime and ensure continuous operations."
      },
      {
        title: "Compliance & Safety Services",
        description: "Ensuring all electrical systems meet industry regulations and safety standards."
      },
    ]
  },
  {
    title: "Specialty Services",
    icon: Lightbulb,
    description: "Specialized electrical solutions for specific needs",
    services: [
      {
        title: "Lighting Design",
        description: "Custom lighting design services for aesthetic appeal, energy efficiency, and proper illumination for any space."
      },
      {
        title: "Solar Power Systems",
        description: "Design and installation of solar power systems for residential and commercial properties."
      },
      {
        title: "EV Charging Stations",
        description: "Installation of electric vehicle charging stations for homes, multi-family buildings, and commercial properties."
      },
      {
        title: "Generator Installation",
        description: "Backup power solutions including standby and portable generators for homes and businesses."
      },
      {
        title: "Energy Storage Systems",
        description: "Battery storage solutions to complement renewable energy systems or provide backup power."
      },
      {
        title: "Outdoor & Landscape Lighting",
        description: "Enhance the beauty and security of your property with professional outdoor lighting design and installation."
      },
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Electrical Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            From simple repairs to complex industrial systems, Paramount Energy Group
            delivers exceptional electrical services with expertise and integrity.
          </p>
          <Button variant="secondary" size="lg">
            Request a Free Consultation
          </Button>
        </div>
      </section>

      {/* Services Categories */}
      {serviceCategories.map((category, index) => (
        <section key={category.title} className={`py-16 ${index % 2 === 1 ? 'bg-slate-50 dark:bg-slate-900' : 'bg-white dark:bg-background'}`}>
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-2">
              <category.icon className="h-8 w-8 text-blue-600" />
              <h2 className="text-3xl font-bold">{category.title}</h2>
            </div>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
              {category.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, idx) => (
                <Card key={idx} className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {service.description}
                    </CardDescription>
                    <Link href="/contact" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
                      Request Service <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 bg-blue-50 dark:bg-blue-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-lg shadow-xl p-8 md:p-12">
            <div className="flex items-start md:items-center gap-6 flex-col md:flex-row">
              <div className="md:flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Not sure which service you need?</h2>
                <p className="text-muted-foreground mb-6">
                  Our expert team can help you determine the best electrical solutions for your specific requirements. 
                  Contact us for a consultation and free estimate.
                </p>
                <Button asChild>
                  <Link href="/contact">Contact Our Experts</Link>
                </Button>
              </div>
              <div className="md:flex-1">
                <img 
                  src="https://images.pexels.com/photos/8961251/pexels-photo-8961251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Electrical consultation" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}