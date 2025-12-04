"use client";

import Image from "next/image";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { teamMembers } from "@/lib/data/aboutData";

export default function TeamSection() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="text-sm uppercase tracking-[0.2em] text-teal-600 font-bold mb-4">Our Team</div>
                    <h2 className="text-4xl sm:text-5xl font-black mb-6 text-gray-900">
                        Meet the
                        <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent ml-3">
                            Experts
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        The passionate individuals behind our success, dedicated to bringing your vision to life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Image Container */}
                            <div className="relative h-80 w-full overflow-hidden">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                    <div className="flex gap-4">
                                        {member.socials?.linkedin && (
                                            <a href={member.socials.linkedin} className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white hover:text-teal-600 transition-colors">
                                                <Linkedin className="w-5 h-5" />
                                            </a>
                                        )}
                                        {member.socials?.twitter && (
                                            <a href={member.socials.twitter} className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white hover:text-teal-600 transition-colors">
                                                <Twitter className="w-5 h-5" />
                                            </a>
                                        )}
                                        {member.socials?.email && (
                                            <a href={`mailto:${member.socials.email}`} className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white hover:text-teal-600 transition-colors">
                                                <Mail className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                <p className="text-teal-600 font-medium mb-4">{member.role}</p>
                                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
