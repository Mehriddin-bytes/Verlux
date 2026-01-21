import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/data/homeData";
import {
  Building2,
  Building,
  Hammer,
  Home,
  Layers,
  Droplet,
  Paintbrush,
  Square,
  Maximize,
  ArrowRight,
} from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";
import StaggerAnimation from "@/components/ui/stagger-animation";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Building2,
  Building,
  Hammer,
  Layers,
  Droplet,
  Paintbrush,
  Square,
  Maximize,
};

export const metadata: Metadata = {
  title: "Our Services | Verlux Construction",
  description: "Comprehensive construction and restoration services including balcony restoration, masonry, roofing, painting, and more.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Hero Section with Diagonal Image */}
      <section className="relative pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 bg-brand text-white overflow-hidden min-h-[350px] sm:min-h-[400px] lg:min-h-[500px]">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] [background-size:24px_24px]"></div>
        </div>

        {/* Diagonal Image Container */}
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          {/* Diagonal clip path container */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0 100%)'
            }}
          >
            <Image
              src="/gallery/balcony/balcony-3.jpg"
              alt="Construction work"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto max-w-7xl relative z-10 px-4 sm:px-6 lg:px-16">
          <ScrollAnimation direction="up" delay={0.1}>
            <div className="max-w-2xl">
              <div className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-200 font-bold mb-2 sm:mb-4">Our Services</div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-tight">
                Comprehensive
                <br />
                <span className="text-gray-200">
                  Construction Solutions
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-50/90 leading-relaxed">
                From restoration to new installations, we provide expert construction services tailored to your building&apos;s unique needs.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-16 bg-white">
        <div className="container mx-auto max-w-7xl">
          <StaggerAnimation
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            staggerDelay={0.1}
            direction="up"
          >
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              if (!Icon) return null;
              return (
                <Link
                  key={index}
                  href={`/services/${service.slug}`}
                  className="group relative overflow-hidden bg-white border-2 border-gray-200 min-h-[280px] sm:min-h-[320px] lg:min-h-[400px] flex flex-col hover:border-gray-700 transition-all duration-500 hover:shadow-2xl"
                >
                  {/* Service Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={service.image}
                      alt={service.fullTitle}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 group-hover:from-black/70 group-hover:via-black/50 group-hover:to-black/80 transition-all duration-500"></div>
                  </div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-brand opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-[1]"></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col justify-between h-full p-4 sm:p-6 lg:p-8">
                    <div>
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-brand flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-black mb-1 sm:mb-2 text-white drop-shadow-lg">
                        {service.title}
                      </h3>
                      <h4 className="text-base sm:text-lg lg:text-xl font-bold text-gray-200 mb-2 sm:mb-4">{service.subtitle}</h4>
                      <p className="text-gray-200 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base line-clamp-3">{service.description}</p>
                    </div>
                    <div className="inline-flex items-center text-white font-bold transition-colors group/link hover:text-gray-300 text-sm sm:text-base">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover/link:translate-x-2 transition-transform" />
                    </div>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 z-[1]"></div>
                </Link>
              );
            })}
          </StaggerAnimation>
        </div>
      </section>

    </div>
  );
}
