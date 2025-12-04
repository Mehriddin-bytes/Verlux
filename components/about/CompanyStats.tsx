"use client";

import { stats } from "@/lib/data/aboutData";

export default function CompanyStats() {
    return (
        <section className="py-20 bg-teal-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div key={index} className="text-center group">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-6 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                                    <Icon className="w-8 h-8 text-teal-300" />
                                </div>
                                <div className="text-5xl font-black mb-2 bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent">
                                    {stat.value}
                                </div>
                                <div className="text-xl font-bold mb-2 text-white">{stat.label}</div>
                                <div className="text-teal-200/80 text-sm">{stat.description}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
