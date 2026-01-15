"use client";

import Image from "next/image";
import { CheckCircle2, Shield, Award, Users, Clock, DollarSign } from "lucide-react";
import ScrollAnimation from "@/components/ui/scroll-animation";
import StaggerAnimation from "@/components/ui/stagger-animation";

const features = [
  // {
  //   icon: Shield,
  //   title: "Licensed & Insured",
  //   description: "Fully licensed and insured for your peace of mind. We carry comprehensive coverage to protect your investment.",
  //   image: "/assests/exterior-wall-brick-patterning-scaffolding.JPG",
  //   gradient: "from-blue-500 to-gray-500",
  // },
  {
    icon: Award,
    title: "Award-Winning Quality",
    description: "Recognized excellence in construction with multiple industry awards and certifications for outstanding workmanship.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
    gradient: "from-amber-500 to-yellow-500",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our skilled craftsmen bring decades of combined experience to every project, ensuring superior results.",
    image: "/assests/bricklaying-worker-scaffolding-suspended.JPG",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your time. Our projects are completed on schedule with transparent communication throughout.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: DollarSign,
    title: "Fair Pricing",
    description: "Transparent, competitive pricing with no hidden fees. We provide detailed quotes and work within your budget.",
    image: "/assests/construction-site-danger-sign-barrier.JPG",
    gradient: "from-gray-600 to-gray-500",
  },
  {
    icon: CheckCircle2,
    title: "Satisfaction Guaranteed",
    description: "We stand behind our work with comprehensive warranties and a commitment to your complete satisfaction.",
    image: "/gallery/coating/coating-8.jpg",
    gradient: "from-gray-700 to-red-500",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-32 px-8 lg:px-16 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="text-sm uppercase tracking-[0.2em] text-gray-600 font-bold mb-4">Why Choose Us</div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              Building Trust,
              <br />
              <span className="text-gray-600">
                One Project at a Time
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Experience the difference that comes from working with a construction company that truly cares about your vision and your investment.
            </p>
          </div>
        </ScrollAnimation>

        {/* Features Grid */}
        <StaggerAnimation
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.1}
          direction="up"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden bg-white border-2 border-gray-200 rounded-3xl hover:border-gray-600 transition-all duration-500 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 p-4 rounded-full bg-gray-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </StaggerAnimation>
      </div>
    </section>
  );
}

