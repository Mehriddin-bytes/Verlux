"use client";

import Image from "next/image";
import { companyStory } from "@/lib/data/aboutData";

export default function CompanyStory() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src={companyStory.image}
                                alt="Verlux History"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-50 rounded-full -z-10 blur-3xl"></div>
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-50 rounded-full -z-10 blur-3xl"></div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                        <div className="text-sm uppercase tracking-[0.2em] text-teal-600 font-bold mb-4">Our Story</div>
                        <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-tight text-gray-900">
                            {companyStory.title}
                        </h2>
                        <h3 className="text-xl font-bold text-gray-800 mb-8 border-l-4 border-teal-500 pl-4">
                            {companyStory.subtitle}
                        </h3>

                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                            {companyStory.description.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>

                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-teal-200 transition-colors">
                                <h4 className="text-lg font-bold text-gray-900 mb-3">Our Mission</h4>
                                <p className="text-gray-600">{companyStory.mission}</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-teal-200 transition-colors">
                                <h4 className="text-lg font-bold text-gray-900 mb-3">Our Vision</h4>
                                <p className="text-gray-600">{companyStory.vision}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
