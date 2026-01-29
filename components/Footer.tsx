import Link from "next/link";
import { Construction, Phone, Mail, MapPin } from "lucide-react";
import { services as servicesData } from "@/lib/data/homeData";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  // { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About Us" },
];

const services = servicesData.map((service) => ({
  href: `/services/${service.slug}`,
  label: service.fullTitle,
}));

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 text-gray-700 border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Logo */}
          <div className="flex flex-col items-center sm:items-start">
            <Link href="/" className="inline-flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-2xl bg-brand flex items-center justify-center mb-4">
                <Construction className="w-20 h-20 text-white" />
              </div>
              <span className="text-4xl font-black text-gray-900">VERLUX</span>
              <p className="text-gray-500 text-base mt-1">CONSTRUCTION</p>
            </Link>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-5 uppercase tracking-wide border-b border-gray-300 pb-2">Services</h3>
            <ul className="space-y-2.5">
              {services.slice(0, 5).map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-gray-600 hover:text-brand transition-colors text-sm">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-5 uppercase tracking-wide border-b border-gray-300 pb-2">About</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-600 hover:text-brand transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-5 uppercase tracking-wide border-b border-gray-300 pb-2">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 text-sm">8 McKee Ave,<br />North York, ON M2N 7E5</span>
              </div>
              <a href="mailto:info@verlux.com" className="flex items-center gap-3 text-gray-600 hover:text-brand transition-colors text-sm">
                <Mail className="w-4 h-4 text-brand flex-shrink-0" />
                <span>info@verlux.com</span>
              </a>
              <a href="tel:+14374520850" className="flex items-center gap-3 text-gray-600 hover:text-brand transition-colors text-sm">
                <Phone className="w-4 h-4 text-brand flex-shrink-0" />
                <span>+1 (437) 452-0850</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-6 lg:px-8 py-5">
          <p className="text-gray-500 text-sm text-center">
            © {currentYear} Verlux Construction. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
