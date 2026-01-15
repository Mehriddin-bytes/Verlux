import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Mail, MapPin, Shield } from "lucide-react";
import { services, stats } from "@/lib/data/homeData";

const pillars = [
  { title: "Clear Communication", description: "Transparent updates throughout your project" },
  { title: "Honest Transactions", description: "No hidden fees or surprise costs" },
  { title: "Quality Craftsmanship", description: "Premium materials and expert techniques" },
  { title: "Safety First", description: "Protecting employees and customers alike" },
  { title: "On Time Delivery", description: "Strict adherence to budget and timelines" },
  { title: "Professionalism", description: "Utmost respect and expertise" },
];

export default function Home() {
  const featuredServices = services.slice(0, 6);

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Hero Section - Full viewport with video */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden bg-gray-900 cloudinary-video-container">
          <iframe
            src="https://player.cloudinary.com/embed/?cloud_name=abdulgafar4&public_id=overview_igxyad&profile=cld-looping&autoplay=true&muted=true&loop=true&controls=false"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover pointer-events-none"
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 pointer-events-none" style={{ zIndex: 1 }}></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 mb-8">
              <span className="text-sm font-bold tracking-wide text-white uppercase">Since 2020 • Ontario&apos;s Trusted Contractor</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white">
              Quality Comes First
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
              Expert building restoration and construction services for commercial, industrial, and residential properties.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center bg-brand hover:bg-brand-hover text-white px-8 py-4 font-semibold transition-all duration-200"
              >
                Get Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 font-semibold border-2 border-white text-white hover:bg-white hover:text-brand transition-all duration-200"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-brand py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-black text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm lg:text-base text-white/70 uppercase tracking-wider font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Images Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-[200px] overflow-hidden">
                    <Image
                      src="/assests/masonry-restoration-brick-repointing-01.JPG"
                      alt="Masonry restoration work"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[280px] overflow-hidden">
                    <Image
                      src="/assests/building-facade-construction-worker.JPG"
                      alt="Construction worker on facade"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-[280px] overflow-hidden">
                    <Image
                      src="/assests/exterior-wall-stucco-worker-scaffolding.JPG"
                      alt="Stucco work"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[200px] overflow-hidden">
                    <Image
                      src="/gallery/balcony/balcony-3.jpg"
                      alt="Balcony restoration"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-6 bg-brand text-white px-8 py-6 shadow-xl">
                <div className="text-4xl font-black">6+</div>
                <div className="text-sm uppercase tracking-wider">Years Experience</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="text-sm uppercase tracking-[0.2em] text-brand font-bold mb-4">About Verlux</div>
              <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-tight text-gray-900">
                Building Excellence Since 2020
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our team of qualified and experienced professionals can be trusted with all your Commercial, Industrial, and Residential projects. When you choose Verlux, you are getting experienced, qualified, and innovative expertise.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We have the knowledge and creativity to turn your ideas into a reality. Your satisfaction is our number one priority. We strongly believe in building relationships that last.
              </p>
              
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 font-semibold border-2 border-brand text-brand hover:bg-brand hover:text-white transition-all duration-200"
              >
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-[0.2em] text-brand font-bold mb-4">Our Services</div>
            <h2 className="text-4xl sm:text-5xl font-black mb-6 text-gray-900">
              What We Build
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive construction and restoration solutions tailored to your unique needs and vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredServices.map((service, index) => (
              <Link
                key={index}
                href={`/services/${service.slug}`}
                className="group relative overflow-hidden bg-white border-2 border-gray-200 hover:border-brand transition-all duration-300"
              >
                <div className="relative h-[220px]">
                  <Image
                    src={service.image}
                    alt={service.fullTitle}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                  <p className="text-white/80 text-sm">{service.subtitle}</p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center bg-brand hover:bg-brand-hover text-white px-8 py-4 font-semibold transition-all duration-200"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <div className="text-sm uppercase tracking-[0.2em] text-brand font-bold mb-4">Why Choose Us</div>
              <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-tight text-gray-900">
                What Makes Us Different
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Since 2020, Verlux has been committed to doing things differently. We&apos;ve identified the common challenges in the construction industry and built our company around solving them.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {pillars.map((pillar, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 border-l-4 border-brand">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{pillar.title}</h4>
                      <p className="text-sm text-gray-600">{pillar.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/quote"
                className="inline-flex items-center bg-brand hover:bg-brand-hover text-white px-8 py-4 font-semibold transition-all duration-200"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative h-[600px] overflow-hidden">
                <Image
                  src="/gallery/coating/coating-8.jpg"
                  alt="Construction scaffolding"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Overlay card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-2xl max-w-xs">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-brand flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">All Under One Roof</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  We offer a comprehensive range of services, eliminating the hassle of calling multiple contractors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-[0.2em] text-white/70 font-bold mb-4">Our Work</div>
            <h2 className="text-4xl sm:text-5xl font-black mb-6 text-white">
              Featured Projects
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Browse through our completed projects showcasing quality craftsmanship across all our services.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="relative h-[200px] md:h-[300px] overflow-hidden group">
              <Image
                src="/gallery/masonry/masonry-1.jpg"
                alt="Masonry project"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>
            </div>
            <div className="relative h-[200px] md:h-[300px] overflow-hidden group">
              <Image
                src="/gallery/coating/coating-2.jpg"
                alt="Coating project"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>
            </div>
            <div className="relative h-[200px] md:h-[300px] overflow-hidden group">
              <Image
                src="/gallery/garage/garage-4.jpg"
                alt="Garage project"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>
            </div>
            <div className="relative h-[200px] md:h-[300px] overflow-hidden group">
              <Image
                src="/gallery/roof/roof-1.jpg"
                alt="Roof project"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center px-8 py-4 font-semibold border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-200"
            >
              View Full Gallery
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <div className="text-sm uppercase tracking-[0.2em] text-brand font-bold mb-4">Get In Touch</div>
              <h2 className="text-4xl sm:text-5xl font-black mb-6 text-gray-900">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Contact us today for a free consultation and estimate. Our team is ready to help bring your vision to life.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gray-100 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider">Phone</div>
                    <a href="tel:+14374520850" className="text-xl font-bold text-gray-900 hover:text-brand transition-colors">
                      +1 (437) 452-0850
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gray-100 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider">Email</div>
                    <a href="mailto:info@verlux.com" className="text-xl font-bold text-gray-900 hover:text-brand transition-colors">
                      info@verlux.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gray-100 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider">Address</div>
                    <p className="text-xl font-bold text-gray-900">
                      8 McKee Ave, North York, ON M2N 7E5
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Quote Form */}
            <div className="bg-gray-50 p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Request a Free Quote
              </h3>
              <form action="/api/quote" method="POST" className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 focus:border-brand focus:outline-none transition-colors bg-white"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full px-4 py-4 border-2 border-gray-200 focus:border-brand focus:outline-none transition-colors bg-white"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 focus:border-brand focus:outline-none transition-colors bg-white"
                />
                <select
                  name="service"
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 focus:border-brand focus:outline-none transition-colors bg-white"
                >
                  <option value="">Select a Service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service.slug}>{service.fullTitle}</option>
                  ))}
                  <option value="other">Other</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={4}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-200 focus:border-brand focus:outline-none transition-colors bg-white resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-brand hover:bg-brand-hover text-white px-8 py-4 font-semibold transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Submit Request
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
