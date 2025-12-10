"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  ArrowRight,
  Play,
} from "lucide-react";

export default function HeroSection() {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-20 pb-20">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden bg-gray-900">
        <iframe
          src="https://player.cloudinary.com/embed/?cloud_name=abdulgafar4&public_id=overview_igxyad&profile=cld-default&autoplay=true&loop=true&muted=true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover"
          style={{
            width: '100vw',
            height: '56.25vw',
            minHeight: '100vh',
            minWidth: '177.77777778vh',
            zIndex: 0,
            border: 'none',
          }}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        {/* Fallback gradient if video doesn't load */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pointer-events-none" style={{ zIndex: -1 }}></div>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 pointer-events-none" style={{ zIndex: 1 }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-teal-600 to-cyan-500 text-white mb-8 shadow-lg shadow-teal-500/30">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-bold tracking-wider uppercase">Award-Winning Excellence</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white">
            Building Your Dreams,
            <br />
            <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
              One Brick at a Time
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-gray-100 mb-12 leading-relaxed font-medium">
            Transform your vision into reality with precision, passion, and unparalleled expertise in construction.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="group cursor-pointer text-base sm:text-lg px-6 sm:px-8 lg:px-10 py-5 sm:py-6 lg:py-7 bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-700 hover:to-cyan-600 text-white border-0 rounded-full font-bold shadow-2xl hover:shadow-teal-500/50 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              asChild
            >
              <Link href="/quote">
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer text-base sm:text-lg px-6 sm:px-8 lg:px-10 py-5 sm:py-6 lg:py-7 border-2 border-white text-white bg-transparent hover:bg-white hover:text-gray-900 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg w-full sm:w-auto"
            >
              <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
