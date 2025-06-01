"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("all")
  
  const projects = [
    {
      id: 1,
      title: "Commercial Office Building",
      description: "Complete electrical system installation for a 15-story office building in downtown San Francisco.",
      category: "commercial",
      imageUrl: "https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      client: "Horizon Properties",
      completed: "December 2023",
      details: "This project involved a comprehensive electrical system installation for a new 15-story office tower. Our team designed and installed power distribution systems, energy-efficient lighting, fire alarm systems, and smart building controls.",
    },
    {
      id: 2,
      title: "Luxury Home Rewiring",
      description: "Full rewiring project for a 5,000 sq ft residential property in Pacific Heights.",
      category: "residential",
      imageUrl: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      client: "Private Homeowner",
      completed: "September 2023",
      details: "This historic home required complete electrical rewiring to meet modern code requirements while preserving the architectural integrity. We installed new service panels, updated wiring, and added smart home features throughout the property.",
    },
    {
      id: 3,
      title: "Manufacturing Plant Upgrade",
      description: "Electrical system modernization for a large industrial facility in Oakland.",
      category: "industrial",
      imageUrl: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      client: "Bay Area Manufacturing Inc.",
      completed: "March 2024",
      details: "This industrial project involved upgrading power distribution systems, installing energy-efficient lighting, and implementing automated controls for improved efficiency and safety in a 50,000 sq ft manufacturing facility.",
    },
    {
      id: 4,
      title: "Solar Panel Installation",
      description: "Residential solar system with battery backup for a single-family home in Marin County.",
      category: "residential",
      imageUrl: "https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      client: "Thompson Family",
      completed: "July 2023",
      details: "We designed and installed a 12kW solar panel system with battery backup to provide energy independence for this modern home. The system includes monitoring capabilities and integrates with the home's smart systems.",
    },
    {
      id: 5,
      title: "Retail Chain Lighting",
      description: "Energy-efficient lighting solutions for 12 retail locations across the Bay Area.",
      category: "commercial",
      imageUrl: "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      client: "Urban Fashion Retail Group",
      completed: "November 2023",
      details: "This multi-location project involved upgrading lighting systems in 12 retail stores to improve energy efficiency and enhance the shopping experience. We implemented LED lighting with advanced controls to reduce energy costs by 40%.",
    },
    {
      id: 6,
      title: "Smart Home Integration",
      description: "Complete smart home electrical system with voice control for a luxury condo.",
      category: "residential",
      imageUrl: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      client: "Private Homeowner",
      completed: "February 2024",
      details: "We transformed this luxury condo with comprehensive smart home technologies, including automated lighting, climate control, security, and entertainment systems, all controllable via voice commands or smartphone.",
    },
    {
      id: 7,
      title: "Hospital Emergency Power",
      description: "Backup power system installation for a major medical center in San Jose.",
      category: "commercial",
      imageUrl: "https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      client: "Valley Medical Center",
      completed: "October 2023",
      details: "This critical infrastructure project involved designing and installing redundant backup power systems for a 350-bed hospital. The solution included multiple generators, UPS systems, and advanced transfer switches to ensure uninterrupted power for life-saving equipment.",
    },
    {
      id: 8,
      title: "Data Center Power Systems",
      description: "High-capacity power infrastructure for a new tech company data center.",
      category: "industrial",
      imageUrl: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      client: "TechNova Solutions",
      completed: "January 2024",
      details: "We designed and implemented the complete power infrastructure for this 10,000 sq ft data center, including redundant power feeds, UPS systems, backup generators, and advanced power monitoring solutions to ensure 99.999% uptime.",
    },
    {
      id: 9,
      title: "EV Charging Station Network",
      description: "Installation of 24 electric vehicle charging stations at various locations.",
      category: "commercial",
      imageUrl: "https://images.pexels.com/photos/3787400/pexels-photo-3787400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      client: "City of Oakland",
      completed: "December 2023",
      details: "This municipal project involved installing a network of Level 2 and DC fast charging stations throughout the city. We managed everything from site assessment and electrical infrastructure upgrades to installation and commissioning.",
    },
  ]
  
  const filteredProjects = activeTab === "all"
    ? projects
    : projects.filter(project => project.category === activeTab)
  
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore our portfolio of successful electrical projects spanning residential, 
            commercial, and industrial sectors.
          </p>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList>
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="residential">Residential</TabsTrigger>
                <TabsTrigger value="commercial">Commercial</TabsTrigger>
                <TabsTrigger value="industrial">Industrial</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value={activeTab} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map(project => (
                  <Card key={project.id} className="overflow-hidden group cursor-pointer border-0 shadow-lg" onClick={() => setSelectedProject(project)}>
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={project.imageUrl} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 rounded-full mb-3">
                        {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <Button variant="outline" className="w-full" onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}>
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-background rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="relative h-80 overflow-hidden">
              <img 
                src={selectedProject.imageUrl} 
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <Button variant="outline" size="icon" className="rounded-full bg-background/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </Button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="inline-block px-3 py-1 text-xs font-medium bg-blue-500/80 text-white rounded-full mb-2">
                  {selectedProject.category.charAt(0).toUpperCase() + selectedProject.category.slice(1)}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedProject.title}</h2>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Client</h3>
                  <p className="font-medium">{selectedProject.client}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Completed</h3>
                  <p className="font-medium">{selectedProject.completed}</p>
                </div>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
                <p className="text-muted-foreground leading-relaxed">{selectedProject.details}</p>
              </div>
              <div className="flex justify-end">
                <Button onClick={() => setSelectedProject(null)}>Close</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}