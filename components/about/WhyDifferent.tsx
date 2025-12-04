"use client";

import { values } from "@/lib/data/aboutData";

export default function WhyDifferent() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="text-sm uppercase tracking-[0.2em] text-teal-600 font-bold mb-4">Our Values</div>
                    <h2 className="text-4xl sm:text-5xl font-black mb-6 text-gray-900">
                        Why Choose
                        <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent ml-3">
                            Verlux
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Our core values guide every decision we make and every project we undertake.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <div
                                key={index}
                                className="flex gap-6 p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300 group"
                            >
                                <div className="shrink-0">
                                    <div className="w-14 h-14 rounded-xl bg-teal-100 flex items-center justify-center group-hover:bg-teal-600 transition-colors duration-300">
                                        <Icon className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
