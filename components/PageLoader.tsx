"use client";

import { useEffect, useState } from "react";
import { Construction, Hammer, Wrench, HardHat } from "lucide-react";

interface FirstVisitLoaderProps {
  children: React.ReactNode;
  minimumDelay?: number;
}

export default function FirstVisitLoader({ children, minimumDelay = 800 }: FirstVisitLoaderProps) {
  // Check localStorage immediately to avoid flash
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("verlux_has_visited") !== "true";
  });

  useEffect(() => {
    // Check if this is the first visit
    const hasVisitedBefore = typeof window !== "undefined" 
      ? localStorage.getItem("verlux_has_visited") === "true"
      : true;

    if (hasVisitedBefore) {
      // User has visited before, skip loading
      setIsLoading(false);
      return;
    }

    // First visit - show loading and preload assets
    const startTime = Date.now();

    // Preload critical assets
    const preloadAssets = async () => {
      const pathname = typeof window !== "undefined" ? window.location.pathname : "";
      
      // Base critical images that appear on most pages
      let criticalImages: string[] = [
        // About page hero
        "/assests/construction-site-danger-sign-barrier.JPG",
        // Company story image
        "/assests/masonry-restoration-brick-repointing-01.JPG",
        // Team member images
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
      ];

      // Page-specific images
      if (pathname === "/") {
        // Home page service images
        criticalImages.push(
          "/gallery/caulking/caulking-3.jpg",
          "/assests/building-exterior-textured-brick-scaffolding.JPG",
          "/assests/masonry-brick-wall-construction-01.JPG",
          "/assests/interior-wall-black-stripe-painted.JPG",
          "/assests/rooftop-davit-system-maintenance.JPG",
          "/assests/rooftop-hvac-city-skyline-view.JPG",
          // Featured projects
          "/gallery/caulking/caulking-3.jpg",
          "/assests/rooftop-davit-equipment-landscape-view.JPG"
        );
      } else if (pathname === "/projects") {
        // Projects page - preload first few project images
        criticalImages.push(
          "/gallery/caulking/caulking-3.jpg",
          "/assests/building-exterior-textured-brick-scaffolding.JPG",
          "/assests/interior-wall-black-stripe-painted.JPG",
          "/assests/rooftop-davit-equipment-landscape-view.JPG",
          "/assests/masonry-restoration-brick-repointing-02.JPG",
          "/assests/building-facade-white-blue-wall.JPG"
        );
      }

      // Preload images
      const imagePromises = criticalImages.map((src) => {
        return new Promise<void>((resolve) => {
          const img = new window.Image();
          img.src = src;
          img.onload = () => resolve();
          img.onerror = () => resolve(); // Don't block on error
        });
      });

      // Wait for Cloudinary video iframe to be ready
      const videoPromise = new Promise<void>((resolve) => {
        // Check if we're on the home page (where video is used)
        if (pathname === "/") {
          const checkVideo = () => {
            const iframe = document.querySelector('iframe[src*="cloudinary.com"]');
            if (iframe) {
              // Give iframe time to load
              setTimeout(() => resolve(), 800);
            } else {
              // If no video on this page, resolve immediately
              resolve();
            }
          };
          // Check after a short delay to allow iframe to be added to DOM
          setTimeout(checkVideo, 200);
          // Timeout after 2.5 seconds
          setTimeout(() => resolve(), 2500);
        } else {
          resolve(); // Not on home page, no video to wait for
        }
      });

      // Wait for all assets to load or timeout
      await Promise.race([
        Promise.all([...imagePromises, videoPromise]),
        new Promise((resolve) => setTimeout(resolve, 3500)), // Max 3.5 seconds
      ]);

      // Ensure minimum delay
      const elapsed = Date.now() - startTime;
      const remainingDelay = Math.max(0, minimumDelay - elapsed);
      await new Promise((resolve) => setTimeout(resolve, remainingDelay));

      // Mark as visited
      if (typeof window !== "undefined") {
        localStorage.setItem("verlux_has_visited", "true");
      }

      setIsLoading(false);
    };

    preloadAssets();
  }, [minimumDelay]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center fixed inset-0 z-50">
        <div className="text-center">
          {/* Animated Construction Icon */}
          <div className="relative mb-8">
            <div className="w-24 h-24 mx-auto relative">
              {/* Rotating Construction Icon */}
              <div className="absolute inset-0 animate-spin">
                <Construction className="w-24 h-24 text-gray-600 opacity-20" />
              </div>
              {/* Pulsing Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                  <HardHat className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Loading Text */}
          <div className="space-y-4">
            <h2 className="text-2xl font-black text-gray-900">
              Building Your Experience
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></div>
            </div>
            <p className="text-gray-600 text-sm">Preparing everything for you...</p>
          </div>

          {/* Construction Tools Animation */}
          <div className="mt-12 flex items-center justify-center gap-6 opacity-30">
            <Hammer className="w-6 h-6 text-gray-600 animate-pulse [animation-delay:-0.5s]" />
            <Wrench className="w-6 h-6 text-gray-500 animate-pulse [animation-delay:-0.3s]" />
            <HardHat className="w-6 h-6 text-gray-600 animate-pulse [animation-delay:-0.1s]" />
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

