"use client";

import Image from "next/image";

export default function AboutHero() {
    return (
        <section className="relative h-[60vh] min-h-[580px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                    alt="Construction site at sunset"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/40"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-24 sm:mt-20">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-300 mb-6 backdrop-blur-sm">
                        <span className="text-sm font-bold tracking-wider uppercase">About Verlux</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white">
                        Building More Than Just
                        <br />
                        <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
                            Structures
                        </span>
                    </h1>

                    <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
                        We are a team of dedicated builders, architects, and visionaries committed to transforming the way people live and work through exceptional construction.
                    </p>
                </div>
            </div>
        </section>
    );
}
