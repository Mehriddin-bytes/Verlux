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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info - Centered */}
          <div className="text-center md:text-left">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-lg bg-brand flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Construction className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-black text-gray-900 group-hover:text-brand transition-colors">
                VERLUX
              </span>
            </Link>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Building exceptional spaces with precision, passion, and unparalleled expertise. Your trusted construction partner for over 15 years.
            </p>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="w-5 h-5 text-brand flex-shrink-0" />
                <a href="tel:+14374520850" className="text-gray-700 hover:text-brand transition-colors">
                  +1 (437) 452-0850
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="w-5 h-5 text-brand flex-shrink-0" />
                <a href="mailto:info@verlux.com" className="text-gray-700 hover:text-brand transition-colors">
                  info@verlux.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="w-5 h-5 text-brand flex-shrink-0" />
                <span className="text-gray-600">8 McKee Ave, North York, ON M2N 7E5</span>
              </div>
            </div>
          </div>

          {/* Quick Links - Centered */}
          <div className="text-center">
            <h3 className="text-gray-900 font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-brand transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links - Centered */}
          <div className="text-center md:text-right">
            <h3 className="text-gray-900 font-bold text-lg mb-6 uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-600 hover:text-brand transition-colors inline-block"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright & Legal - Centered */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-gray-600 text-sm">
              © {currentYear} Verlux Construction. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
