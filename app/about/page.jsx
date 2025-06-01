import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Check, Clock, Award, Users, Shield, Lightbulb } from "lucide-react"

export const metadata = {
  title: 'About Us | Paramount Energy Group',
  description: 'Learn about our company, mission, values, and the team behind Paramount Energy Group.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Paramount Energy Group</h1>
              <p className="text-xl text-blue-100 mb-8">
                We're a team of dedicated electrical professionals with a commitment to quality, 
                safety, and exceptional customer service.
              </p>
              <Button variant="secondary" size="lg">
                Meet Our Team
              </Button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-400/20 rounded-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-400/20 rounded-lg"></div>
                <img 
                  src="https://images.pexels.com/photos/8961292/pexels-photo-8961292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Paramount Energy Group Team" 
                  className="rounded-lg shadow-xl relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-lg">
              <p>
                Founded in 2005, Paramount Energy Group began as a small team of electricians committed to providing quality electrical services to the local community. Our founder, Robert Paramount, had a vision of creating an electrical company that prioritized customer relationships, technical excellence, and innovative solutions.
              </p>
              <p>
                Over the years, we've grown from a team of three to a full-service electrical contractor with dozens of skilled professionals. Throughout our growth, we've maintained our core values and commitment to quality that defined us from the beginning.
              </p>
              <p>
                Today, we serve residential, commercial, and industrial clients throughout the region, providing a comprehensive range of electrical services. From simple repairs to complex industrial systems, we bring the same level of expertise, integrity, and dedication to every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide every aspect of our work and define who we are as a company.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                  <Shield className="text-blue-600 h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Safety First</h3>
                <p className="text-muted-foreground">
                  We prioritize safety in every aspect of our work, protecting our clients, 
                  our team, and the communities we serve.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center mb-4">
                  <Award className="text-amber-600 h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We are committed to delivering the highest quality workmanship and service 
                  on every project, large or small.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                  <Check className="text-green-600 h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Integrity</h3>
                <p className="text-muted-foreground">
                  We operate with honesty and transparency in all our business practices, 
                  building trust with our clients and partners.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
                  <Lightbulb className="text-purple-600 h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously seek new technologies and methods to improve our services 
                  and provide forward-thinking solutions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mb-4">
                  <Clock className="text-red-600 h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Reliability</h3>
                <p className="text-muted-foreground">
                  Our clients can count on us to deliver on our promises, meet deadlines, 
                  and be there when they need us.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center mb-4">
                  <Users className="text-teal-600 h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
                <p className="text-muted-foreground">
                  We build lasting relationships with our clients through exceptional service 
                  and a genuine commitment to their satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced professionals who lead Paramount Energy Group.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Robert Paramount",
                title: "Founder & CEO",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                bio: "With over 25 years in the electrical industry, Robert founded Paramount Energy Group with a vision to set new standards in service excellence."
              },
              {
                name: "Jennifer Martinez",
                title: "Director of Operations",
                image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                bio: "Jennifer brings 15 years of operations management experience, ensuring our projects run smoothly and efficiently."
              },
              {
                name: "Michael Chang",
                title: "Chief Engineer",
                image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                bio: "A licensed master electrician with expertise in complex electrical systems and innovative solutions."
              },
              {
                name: "Sarah Johnson",
                title: "Client Relations Manager",
                image: "https://images.pexels.com/photos/3771790/pexels-photo-3771790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                bio: "Sarah ensures every client receives personalized attention and exceptional service throughout their project."
              }
            ].map((member) => (
              <div key={member.name} className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-[3/4] relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{member.title}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/contact">
                Work With Our Team
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Certifications & Affiliations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We maintain the highest industry standards through certifications and professional memberships.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              "Master Electrician License",
              "NECA Member",
              "LEED Certified",
              "OSHA Safety Certified",
              "Energy Star Partner",
              "IEEE Member",
              "BBB Accredited",
              "State Contractor License"
            ].map((certification, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md flex items-center justify-center h-32">
                <p className="font-semibold text-center">{certification}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}