import { allServices } from '@/lib/data/services';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function generateStaticParams() {
    return allServices.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;
    const service = allServices.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    const Icon = service.icon;

    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl animate-fade-in-up">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-600/20 backdrop-blur-sm border border-teal-500/30 text-teal-300 font-bold uppercase tracking-wider text-sm mb-6">
                                <Icon className="w-4 h-4" />
                                <span>Our Services</span>
                            </div>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                                {service.title}
                            </h1>
                            <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                                {service.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-black text-gray-900 mb-8 flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-600 to-cyan-500 flex items-center justify-center text-white shadow-lg">
                                <Icon className="w-6 h-6" />
                            </div>
                            Service Overview
                        </h2>
                        <div className="prose prose-lg text-gray-600 leading-relaxed mb-12">
                            <p>{service.content}</p>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {service.features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-teal-200 transition-colors duration-300"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                                    <span className="font-medium text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8 lg:sticky lg:top-24 h-fit">
                        {/* CTA Box */}
                        <div className="bg-gray-900 rounded-2xl p-8 text-white relative overflow-hidden shadow-2xl group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-600 rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-black mb-4">Ready to Start?</h3>
                                <p className="text-gray-400 mb-8 leading-relaxed">
                                    Get a comprehensive quote for your {service.title.toLowerCase()} project today.
                                </p>
                                <Button
                                    className="w-full bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-700 hover:to-cyan-600 text-white font-bold py-6 shadow-lg rounded-xl transition-transform hover:scale-[1.02]"
                                    asChild
                                >
                                    <Link href="/quote">
                                        Get Free Quote
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        {/* Other Services Navigation */}
                        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xl shadow-gray-100/50">
                            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <div className="w-1 h-6 bg-gradient-to-b from-teal-500 to-cyan-500 rounded-full"></div>
                                Other Services
                            </h3>
                            <div className="space-y-3">
                                {allServices
                                    .filter(s => s.slug !== service.slug)
                                    .map((s) => {
                                        const ServiceIcon = s.icon;
                                        return (
                                            <Link
                                                key={s.slug}
                                                href={`/services/${s.slug}`}
                                                className="group flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-teal-200 hover:bg-teal-50/50 transition-all duration-300"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-teal-600 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                                        <ServiceIcon className="w-4 h-4" />
                                                    </div>
                                                    <span className="font-bold text-gray-700 group-hover:text-teal-700 text-sm transition-colors">
                                                        {s.title}
                                                    </span>
                                                </div>
                                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-teal-500 group-hover:translate-x-1 transition-all" />
                                            </Link>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
