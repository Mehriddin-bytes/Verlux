"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const qualityFeatures = [
  {
    title: "Premium Materials",
    description: "We source only the finest materials from trusted suppliers, ensuring durability and longevity in every project.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Skilled Craftsmanship",
    description: "Our master craftsmen bring years of experience and attention to detail to every aspect of construction.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Modern Technology",
    description: "We leverage the latest construction technology and tools to ensure precision, efficiency, and superior results.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
  },
];

const guarantees = [
  "10-Year Structural Warranty",
  "100% Satisfaction Guarantee",
  "Licensed & Bonded",
  "24/7 Emergency Support",
  "Free Post-Construction Inspections",
  "Transparent Pricing",
];

export default function QualityExcellenceSection() {
  return (
    <section className="relative py-32 px-8 lg:px-16 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="text-sm uppercase tracking-[0.2em] text-teal-600 font-bold mb-4">Quality & Excellence</div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            Uncompromising
            <br />
            <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
              Quality Standards
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We don&apos;t just build structures—we create lasting legacies. Every project reflects our commitment to excellence and your vision.
          </p>
        </div>

        {/* Quality Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {qualityFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white border-2 border-gray-200 rounded-3xl hover:border-teal-500 transition-all duration-500 hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantees Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
              alt="Quality construction work"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-cyan-500/20"></div>
          </div>

          {/* Guarantees List */}
          <div>
            <h3 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8">
              Our Guarantees
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We stand behind our work with comprehensive guarantees and warranties that protect your investment for years to come.
            </p>

            <div className="space-y-4 mb-8">
              {guarantees.map((guarantee, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-teal-50 transition-colors group"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                    {guarantee}
                  </span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="group text-lg px-8 py-6 bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-700 hover:to-cyan-600 text-white border-0 rounded-full font-bold shadow-2xl hover:shadow-teal-500/50 hover:scale-105 transition-all duration-300"
            >
              Learn More About Our Quality
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

