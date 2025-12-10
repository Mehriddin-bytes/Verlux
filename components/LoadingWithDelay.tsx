"use client";

import { useEffect, useState } from "react";
import { Construction, Hammer, Wrench, HardHat } from "lucide-react";

interface LoadingWithDelayProps {
  minimumDelay?: number; // Minimum delay in milliseconds
}

export default function LoadingWithDelay({ minimumDelay = 800 }: LoadingWithDelayProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const startTime = Date.now();

    // Preload critical images and videos
    const preloadAssets = async () => {
      // Video is now hosted on Cloudinary, no need to preload locally
      const assets: string[] = [];

      const preloadPromises = assets.map((src) => {
        return new Promise<void>((resolve) => {
          if (src.endsWith(".mp4")) {
            const video = document.createElement("video");
            video.preload = "auto";
            video.src = src;
            video.oncanplaythrough = () => resolve();
            video.onerror = () => resolve(); // Resolve even on error to not block
            video.load();
          } else {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve();
            img.onerror = () => resolve(); // Resolve even on error to not block
          }
        });
      });

      // Wait for all assets to load or timeout
      await Promise.race([
        Promise.all(preloadPromises),
        new Promise((resolve) => setTimeout(resolve, 3000)), // Max 3 seconds
      ]);

      // Ensure minimum delay
      const elapsed = Date.now() - startTime;
      const remainingDelay = Math.max(0, minimumDelay - elapsed);
      await new Promise((resolve) => setTimeout(resolve, remainingDelay));

      setShowContent(true);
    };

    preloadAssets();
  }, [minimumDelay]);

  if (!showContent) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-teal-50/30 flex items-center justify-center fixed inset-0 z-50">
        <div className="text-center">
          {/* Animated Construction Icon */}
          <div className="relative mb-8">
            <div className="w-24 h-24 mx-auto relative">
              {/* Rotating Construction Icon */}
              <div className="absolute inset-0 animate-spin">
                <Construction className="w-24 h-24 text-teal-600 opacity-20" />
              </div>
              {/* Pulsing Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-cyan-500 rounded-full flex items-center justify-center shadow-xl animate-pulse">
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
              <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce"></div>
            </div>
            <p className="text-gray-600 text-sm">Preparing everything for you...</p>
          </div>

          {/* Construction Tools Animation */}
          <div className="mt-12 flex items-center justify-center gap-6 opacity-30">
            <Hammer className="w-6 h-6 text-teal-600 animate-pulse [animation-delay:-0.5s]" />
            <Wrench className="w-6 h-6 text-cyan-500 animate-pulse [animation-delay:-0.3s]" />
            <HardHat className="w-6 h-6 text-teal-600 animate-pulse [animation-delay:-0.1s]" />
          </div>
        </div>
      </div>
    );
  }

  return null;
}

