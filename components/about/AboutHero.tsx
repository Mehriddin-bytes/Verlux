"use client";

import Image from "next/image";

export default function AboutHero() {
    return (
        <section className="relative h-[50vh] sm:h-[60vh] min-h-[350px] sm:min-h-[400px] lg:min-h-[500px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/gallery/background/background-1.jpg"
                    alt="Building exterior"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-16 sm:mt-20 lg:mt-24">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 bg-white/10 backdrop-blur-md border border-white/20 mb-4 sm:mb-6">
                        <span className="text-xs sm:text-sm font-bold tracking-wide text-white uppercase">About Verlux</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-tight text-white">
                        Building More Than
                        <br />
                        <span className="text-white/90">
                            Structures
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg lg:text-xl text-white/80 mb-6 sm:mb-8 leading-relaxed max-w-2xl">
                        We are a team of dedicated builders and visionaries committed to transforming the way people live and work through exceptional construction.
                    </p>
                </div>
            </div>
        </section>
    );
}
