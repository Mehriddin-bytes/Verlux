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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-brand flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Construction className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-black text-gray-900 group-hover:text-brand transition-colors">
                VERLUX
              </span>
            </Link>
            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Building exceptional spaces with precision, passion, and unparalleled expertise. Your trusted construction partner for over 15 years.
            </p>

            {/* Contact Details */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-brand flex-shrink-0" />
                <a href="tel:+14374520850" className="text-gray-700 hover:text-brand transition-colors text-sm sm:text-base">
                  +1 (437) 452-0850
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-brand flex-shrink-0" />
                <a href="mailto:info@verlux.com" className="text-gray-700 hover:text-brand transition-colors text-sm sm:text-base break-all">
                  info@verlux.com
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-brand flex-shrink-0" />
                <span className="text-gray-600 text-sm sm:text-base">8 McKee Ave, North York, ON M2N 7E5</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-gray-900 font-bold text-base sm:text-lg mb-4 sm:mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-brand transition-colors inline-block text-sm sm:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="text-center sm:text-left lg:text-right">
            <h3 className="text-gray-900 font-bold text-base sm:text-lg mb-4 sm:mb-6 uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-600 hover:text-brand transition-colors inline-block text-sm sm:text-base"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="border-t border-gray-200 pt-6 sm:pt-8">
          <div className="flex flex-col items-center gap-2 sm:gap-4 text-center">
            <p className="text-gray-600 text-xs sm:text-sm">
              © {currentYear} Verlux Construction. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
