"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown, Phone, Construction } from "lucide-react";
import { services } from "@/lib/data/homeData";

const navLinks = [
  // { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About Us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [servicesMobileOpen, setServicesMobileOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const handleServicesMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 200);
    setDropdownTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-brand flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Construction className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black text-gray-900 group-hover:text-brand transition-colors">
              VERLUX
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center gap-8">
              {/* Home Link */}
              <Link
                href="/"
                className={`relative text-sm font-bold uppercase tracking-wider transition-colors ${pathname === "/"
                    ? "text-brand"
                    : "text-gray-700 hover:text-brand"
                  }`}
              >
                Home
                {pathname === "/" && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand"></span>
                )}
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <button
                  className={`relative text-sm font-bold uppercase tracking-wider transition-colors flex items-center gap-1 ${pathname === "/services" || servicesDropdownOpen
                      ? "text-brand"
                      : "text-gray-700 hover:text-brand"
                    }`}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? "rotate-180" : ""}`} />
                  {(pathname === "/services" || servicesDropdownOpen) && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand"></span>
                  )}
                </button>

                {/* Dropdown Menu */}
                {servicesDropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl border border-gray-200 py-2 z-50"
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                  >
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={`/services/${service.slug}`}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand transition-colors"
                      >
                        <div className="font-semibold">{service.title}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{service.subtitle}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Other Nav Links */}
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-sm font-bold uppercase tracking-wider transition-colors ${isActive
                        ? "text-brand"
                        : "text-gray-700 hover:text-brand"
                      }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand"></span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Phone & CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+14374520850"
              className="flex items-center gap-2 text-gray-700 hover:text-brand transition-colors font-semibold"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+1 (437) 452-0850</span>
            </a>
            <Link
              href="/quote"
              className="bg-brand hover:bg-brand-hover text-white px-6 py-2.5 font-bold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center"
            >
              Get Quote
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white border-t border-gray-200">
          <div className="flex flex-col gap-4">
            {/* Phone Number - Mobile */}
            <a
              href="tel:+14374520850"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-gray-700 hover:text-brand transition-colors font-semibold py-2 border-b border-gray-200 pb-4"
            >
              <Phone className="w-5 h-5" />
              <span>+1 (437) 452-0850</span>
            </a>

            {/* Home Link */}
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`text-base font-bold uppercase tracking-wider py-2 transition-colors ${pathname === "/"
                  ? "text-brand border-l-4 border-brand pl-4"
                  : "text-gray-700 hover:text-brand hover:pl-4 transition-all"
                }`}
            >
              Home
            </Link>

            {/* Services Dropdown Mobile */}
            <div>
              <button
                onClick={() => setServicesMobileOpen(!servicesMobileOpen)}
                className={`w-full text-left text-base font-bold uppercase tracking-wider py-2 transition-colors flex items-center justify-between ${pathname === "/services"
                    ? "text-brand border-l-4 border-brand pl-4"
                    : "text-gray-700 hover:text-brand pl-4"
                  }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesMobileOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesMobileOpen && (
                <div className="ml-4 mt-2 space-y-2 border-l-2 border-gray-200 pl-4">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={`/services/${service.slug}`}
                      onClick={() => {
                        setIsOpen(false);
                        setServicesMobileOpen(false);
                      }}
                      className="block py-2 text-sm text-gray-600 hover:text-brand transition-colors"
                    >
                      <div className="font-semibold">{service.title}</div>
                      <div className="text-xs text-gray-500">{service.subtitle}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Nav Links */}
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-bold uppercase tracking-wider py-2 transition-colors ${isActive
                      ? "text-brand border-l-4 border-brand pl-4"
                      : "text-gray-700 hover:text-brand hover:pl-4 transition-all"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4 mt-4 border-t border-gray-200">
              <Link
                href="/quote"
                onClick={() => setIsOpen(false)}
                className="w-full bg-brand hover:bg-brand-hover text-white py-4 font-bold shadow-lg flex items-center justify-center"
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
