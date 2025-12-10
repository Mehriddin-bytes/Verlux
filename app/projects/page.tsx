"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Filter, MapPin, Calendar, Ruler, DollarSign, CheckCircle } from "lucide-react";
import { allProjects, projectCategories, type Project } from "@/lib/data/projectsData";

function ProjectsContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") {
      return allProjects;
    }
    return allProjects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-teal-50/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-cyan-500 to-teal-700 text-white pt-32 pb-20">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] [background-size:24px_24px]"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-lg">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-bold tracking-wide">Our Portfolio</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              Featured
              <br />
              <span className="bg-gradient-to-r from-teal-100 via-cyan-100 to-teal-100 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-teal-50/90 max-w-2xl mx-auto leading-relaxed">
              Explore our completed projects showcasing excellence in construction, renovation, and design across residential and commercial spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-teal-600 to-cyan-500 text-white shadow-lg shadow-teal-500/30 scale-105"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-teal-300 hover:bg-teal-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Count */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Showing <span className="font-bold text-teal-600">{filteredProjects.length}</span> project
              {filteredProjects.length !== 1 ? "s" : ""}
            </p>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden bg-white border-2 border-gray-200 rounded-3xl hover:border-teal-500 transition-all duration-500 cursor-pointer hover:shadow-2xl flex flex-col"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden flex-shrink-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={`object-cover transition-transform duration-700 ${
                        hoveredProject === project.id ? "scale-110" : "scale-100"
                      }`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ${
                        hoveredProject === project.id ? "opacity-90" : "opacity-70"
                      }`}
                    ></div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-3 py-1.5 bg-teal-600 text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                        {project.category}
                      </span>
                    </div>

                    {/* Year Badge */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="px-3 py-1.5 bg-white/20 backdrop-blur-md text-white rounded-full text-xs font-semibold">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-xl font-black text-gray-900 mb-1.5 group-hover:text-teal-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-3">
                      <MapPin className="w-3.5 h-3.5" />
                      <span className="text-xs font-medium">{project.location}</span>
                    </div>

                    <p className="text-gray-600 text-xs mb-4 line-clamp-2">{project.description}</p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3 mb-3 pb-3 border-b border-gray-200">
                      <div className="flex items-center gap-1.5">
                        <Ruler className="w-3.5 h-3.5 text-teal-600" />
                        <div>
                          <p className="text-xs text-gray-500">Size</p>
                          <p className="text-xs font-bold text-gray-900">{project.stats.size}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-teal-600" />
                        <div>
                          <p className="text-xs text-gray-500">Duration</p>
                          <p className="text-xs font-bold text-gray-900">{project.stats.duration}</p>
                        </div>
                      </div>
                    </div>

                    {/* Features Preview */}
                    {project.features && project.features.length > 0 && (
                      <div className="mb-3">
                        <div className="flex flex-wrap gap-1.5">
                          {project.features.slice(0, 3).map((feature, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1 px-2 py-0.5 bg-teal-50 text-teal-700 rounded-full text-xs font-semibold"
                            >
                              <CheckCircle className="w-2.5 h-2.5" />
                              {feature}
                            </span>
                          ))}
                          {project.features.length > 3 && (
                            <span className="inline-flex items-center px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">
                              +{project.features.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* View Details Button - Pushed to bottom */}
                    <div className="mt-auto pt-3">
                      <Button
                        variant="outline"
                        className="w-full border-2 border-gray-200 text-gray-700 hover:bg-teal-600 hover:border-teal-600 hover:text-white rounded-full font-bold text-sm py-2 transition-all duration-300 group/btn"
                      >
                        View Details
                        <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>

                  {/* Hover Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600 mb-4">No projects found in this category.</p>
              <Button
                onClick={() => setSelectedCategory("All")}
                className="bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-700 hover:to-cyan-600 text-white rounded-full px-6 py-3 font-bold"
              >
                View All Projects
              </Button>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-12 md:mt-20 text-center">
            <div className="bg-gradient-to-br from-teal-600 to-cyan-500 rounded-3xl p-6 sm:p-8 lg:p-12 text-white">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4">Ready to Start Your Project?</h2>
              <p className="text-base sm:text-lg lg:text-xl text-teal-50/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Let&apos;s bring your vision to life. Get a free quote today and join our portfolio of satisfied clients.
              </p>
              <Button
                size="lg"
                className="bg-white text-teal-600 hover:bg-gray-100 rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-black shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="/quote">
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ProjectsPage() {
  return <ProjectsContent />;
}

