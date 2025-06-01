"use client";

import { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    Home,
    Building2,
    Factory,
    Lightbulb,
    Battery,
    ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
    {
        id: "residential",
        title: "Residential",
        icon: Home,
        description: "Expert electrical services for your home",
        items: [
            {
                title: "Electrical Repairs",
                description:
                    "Quick and reliable repairs for all home electrical issues.",
            },
            {
                title: "Wiring & Rewiring",
                description:
                    "Complete home wiring and upgrades to meet modern standards.",
            },
            {
                title: "Lighting Installation",
                description:
                    "Custom lighting solutions to enhance your living spaces.",
            },
            {
                title: "Smart Home Integration",
                description:
                    "Connect and automate your home electrical systems.",
            },
        ],
    },
    {
        id: "commercial",
        title: "Commercial",
        icon: Building2,
        description: "Powering your business with reliability",
        items: [
            {
                title: "Commercial Installations",
                description:
                    "Complete electrical systems for offices and retail spaces.",
            },
            {
                title: "Electrical Maintenance",
                description:
                    "Regular service to keep your business running smoothly.",
            },
            {
                title: "Energy Efficiency Audits",
                description:
                    "Identify ways to reduce costs and environmental impact.",
            },
        ],
    },
    {
        id: "industrial",
        title: "Industrial",
        icon: Factory,
        description: "Heavy-duty solutions for manufacturing",
        items: [
            {
                title: "Industrial Power Systems",
                description:
                    "Design and installation of robust electrical infrastructure.",
            },
            {
                title: "Machine & Equipment Wiring",
                description: "Specialized wiring for industrial machinery.",
            },
            {
                title: "Control Panel Design",
                description:
                    "Custom control solutions for industrial processes.",
            },
            {
                title: "Compliance & Safety",
                description:
                    "Ensuring all systems meet regulatory requirements.",
            },
        ],
    },
    {
        id: "specialty",
        title: "Specialty",
        icon: Lightbulb,
        description: "Specialized electrical solutions",
        items: [
            {
                title: "Lighting Design",
                description:
                    "Custom lighting designs for aesthetics and efficiency.",
            },
            {
                title: "Solar Power",
                description: "Clean energy solutions for homes and businesses.",
            },
            {
                title: "EV Charging",
                description:
                    "Installation of electric vehicle charging stations.",
            },
            {
                title: "Generator Installation",
                description: "Backup power systems for peace of mind.",
            },
        ],
    },
];

export default function Services() {
    const [activeTab, setActiveTab] = useState("residential");

    return (
        <section id="services" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Our Electrical Services
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Paramount Energy Group offers a comprehensive range of
                        electrical services for residential, commercial, and
                        industrial clients.
                    </p>
                </div>

                <Tabs
                    defaultValue="residential"
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="max-w-5xl mx-auto"
                >
                    <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full h-auto mb-12">
                        {services.map((service) => (
                            <TabsTrigger
                                key={service.id}
                                value={service.id}
                                className={cn(
                                    "flex flex-col items-center py-4 gap-2 data-[state=active]:text-blue-600",
                                    "transition-all duration-200"
                                )}
                            >
                                <service.icon
                                    className={cn(
                                        "h-6 w-6 mb-1",
                                        activeTab === service.id
                                            ? "text-blue-600"
                                            : "text-muted-foreground"
                                    )}
                                />
                                <span>{service.title}</span>
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {services.map((service) => (
                        <TabsContent
                            key={service.id}
                            value={service.id}
                            className="space-y-4"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {service.items.map((item, idx) => (
                                    <Card
                                        key={idx}
                                        className="overflow-hidden group hover:border-blue-500/50 transition-all duration-300"
                                    >
                                        <CardHeader className="pb-2">
                                            <CardTitle>{item.title}</CardTitle>
                                            <CardDescription>
                                                {item.description}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="pt-2">
                                            <Link
                                                href="/services"
                                                className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors"
                                            >
                                                Learn more{" "}
                                                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            <div className="flex justify-center mt-8">
                                <Button asChild>
                                    <Link href="/services">
                                        View All {service.title} Services
                                    </Link>
                                </Button>
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>

                <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg border border-blue-100 dark:border-blue-900/30">
                        <Battery className="h-12 w-12 text-blue-600 mb-4" />
                        <h3 className="text-xl font-bold mb-2">
                            Energy Efficiency
                        </h3>
                        <p className="text-muted-foreground mb-4">
                            We help you reduce energy costs with smart solutions
                            and efficient systems.
                        </p>
                        <Link
                            href="/services"
                            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                        >
                            Learn more <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                    </div>

                    <div className="bg-amber-50 dark:bg-amber-900/20 p-8 rounded-lg border border-amber-100 dark:border-amber-900/30">
                        <ShieldCheck className="h-12 w-12 text-amber-600 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Safety First</h3>
                        <p className="text-muted-foreground mb-4">
                            All our work meets or exceeds safety standards to
                            protect your property.
                        </p>
                        <Link
                            href="/about"
                            className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors"
                        >
                            Our approach <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                    </div>

                    <div className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-lg text-white">
                        <div className="flex flex-col h-full">
                            <h3 className="text-2xl font-bold mb-2">
                                24/7 Emergency Service
                            </h3>
                            <p className="mb-6 text-blue-100">
                                Electrical emergencies don't wait, and neither
                                do we. Our team is ready to respond at any hour.
                            </p>
                            <div className="mt-auto">
                                <Button variant="secondary" size="lg">
                                    Call Now: (555) 123-4567
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
