import Link from "next/link";
import { Construction, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About Us" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact Us" },
];

const services = [
  { href: "/services#residential", label: "Residential Construction" },
  { href: "/services#commercial", label: "Commercial Construction" },
  { href: "/services#renovations", label: "Renovations & Remodeling" },
  { href: "/services#kitchen-bathroom", label: "Kitchen & Bathroom" },
  { href: "/services#roofing", label: "Roofing" },
  { href: "/services#landscaping", label: "Landscaping" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

const socialLinks = [
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 text-gray-700 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-600 to-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Construction className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-black text-gray-900 group-hover:text-teal-600 transition-colors">
                VERLUX
              </span>
            </Link>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Building exceptional spaces with precision, passion, and unparalleled expertise. Your trusted construction partner for over 15 years.
            </p>
            
            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <a href="tel:+14374520850" className="text-gray-700 hover:text-teal-600 transition-colors">
                  +1 (437) 452-0850
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@verlux.com" className="text-gray-700 hover:text-teal-600 transition-colors">
                  info@verlux.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">8 McKee Ave, North York, ON M2N 7E5</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-teal-600 transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-teal-600 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-6 uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-600 hover:text-teal-600 transition-colors inline-block"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-6 uppercase tracking-wider">Connect With Us</h3>
            <p className="text-gray-600 mb-6">
              Follow us on social media for project updates, construction tips, and industry news.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-200 hover:bg-teal-600 flex items-center justify-center transition-colors group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>

            {/* License & Certifications */}
            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-700 mb-2 font-semibold">Licensed & Insured</p>
              <p className="text-xs text-gray-600">License #: BC-12345</p>
              <p className="text-xs text-gray-600 mt-1">Certified General Contractor</p>
            </div>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {currentYear} Verlux Construction. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-600">
              <span>License #: BC-12345</span>
              <span>•</span>
              <span>Fully Insured</span>
              <span>•</span>
              <span>BBB Accredited</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

