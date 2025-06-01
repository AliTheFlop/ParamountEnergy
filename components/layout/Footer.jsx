import Link from "next/link";
import {
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    Mail,
    Phone,
    MapPin,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white">
            <div className="container mx-auto py-12 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="font-bold text-2xl mb-4">
                            <span className="text-blue-400">PARAMOUNT</span>{" "}
                            <span className="text-amber-400">ENERGY</span>
                        </h3>
                        <p className="mb-4 text-slate-300">
                            Providing reliable and innovative electrical
                            solutions for residential, commercial, and
                            industrial clients across Sydney since 2005.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a
                                href="#"
                                className="text-white hover:text-blue-400 transition-colors"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-blue-400 transition-colors"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-blue-400 transition-colors"
                            >
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-blue-400 transition-colors"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 border-b border-slate-700 pb-2">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {[
                                "Home",
                                "Services",
                                "Projects",
                                "About",
                                "Blog",
                                "Contact",
                            ].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={
                                            item === "Home"
                                                ? "/"
                                                : `/${item.toLowerCase()}`
                                        }
                                        className="text-slate-300 hover:text-blue-400 transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 border-b border-slate-700 pb-2">
                            Our Services
                        </h3>
                        <ul className="space-y-2">
                            {[
                                "Residential Electrical",
                                "Commercial Electrical",
                                "Industrial Solutions",
                                "Energy Efficiency",
                                "Lighting Design",
                                "Electrical Repairs",
                            ].map((service) => (
                                <li key={service}>
                                    <Link
                                        href="/services"
                                        className="text-slate-300 hover:text-blue-400 transition-colors"
                                    >
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 border-b border-slate-700 pb-2">
                            Contact Us
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <MapPin className="h-5 w-5 mr-3 text-blue-400 mt-0.5" />
                                <p className="text-slate-300">
                                    13 Rennay St
                                    <br />
                                    Sydney, NSW 2205
                                </p>
                            </div>
                            <div className="flex items-center">
                                <Phone className="h-5 w-5 mr-3 text-blue-400" />
                                <p className="text-slate-300">(02) 9123 4567</p>
                            </div>
                            <div className="flex items-center">
                                <Mail className="h-5 w-5 mr-3 text-blue-400" />
                                <p className="text-slate-300">
                                    info@paramountenergy.com.au
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-700 mt-10 pt-6 text-center md:flex md:justify-between md:text-left">
                    <p className="text-slate-400">
                        &copy; {new Date().getFullYear()} Paramount Energy
                        Group. All rights reserved.
                    </p>
                    <div className="mt-4 md:mt-0 flex justify-center md:justify-end space-x-4 text-slate-400">
                        <Link
                            href="/privacy-policy"
                            className="hover:text-blue-400 transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms-of-service"
                            className="hover:text-blue-400 transition-colors"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
