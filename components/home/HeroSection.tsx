"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  ArrowRight,
  Play,
} from "lucide-react";

interface YouTubePlayer {
  getCurrentTime: () => number;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  playVideo: () => void;
}

interface YouTubeEvent {
  data: number;
  target: YouTubePlayer;
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function HeroSection() {
  const playerRef = useRef<YouTubePlayer | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        if (iframeRef.current) {
          playerRef.current = new window.YT.Player(iframeRef.current, {
            events: {
              onStateChange: (event: YouTubeEvent) => {
                if (event.data === window.YT.PlayerState.PLAYING) {
                  checkVideoTime();
                }
              },
              onReady: () => {
                // Start checking time once video is ready
                checkVideoTime();
              },
            },
          });
        }
      };
    } else {
      // API already loaded
      if (iframeRef.current && !playerRef.current) {
        playerRef.current = new window.YT.Player(iframeRef.current, {
          events: {
            onStateChange: (event: YouTubeEvent) => {
              if (event.data === window.YT.PlayerState.PLAYING) {
                checkVideoTime();
              }
            },
            onReady: () => {
              checkVideoTime();
            },
          },
        });
      }
    }

    let intervalId: NodeJS.Timeout;

    const checkVideoTime = () => {
      if (intervalId) clearInterval(intervalId);

      intervalId = setInterval(() => {
        if (playerRef.current) {
          try {
            const currentTime = playerRef.current.getCurrentTime();
            // 1:30 = 90 seconds
            if (currentTime >= 90) {
              playerRef.current.seekTo(0, true);
              playerRef.current.playVideo();
            }
          } catch (error) {
            // Player might not be ready yet
            console.error('Error checking video time:', error);
          }
        }
      }, 1000); // Check every second
    };

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-20 pb-20">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden bg-gray-900">
        <iframe
          ref={iframeRef}
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/ko_OMynE3Bo?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&start=0&enablejsapi=1"
          title="Construction Overview"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          frameBorder="0"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            border: 'none',
            width: '100vw',
            height: '56.25vw',
            minHeight: '100vh',
            minWidth: '177.77777778vh',
            zIndex: 0,
          }}
        />
        {/* Fallback gradient if video doesn't load */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pointer-events-none" style={{ zIndex: -1 }}></div>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 pointer-events-none" style={{ zIndex: 1 }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-teal-600 to-cyan-500 text-white mb-8 shadow-lg shadow-teal-500/30">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-bold tracking-wider uppercase">Award-Winning Excellence</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white">
            Building Your Dreams,
            <br />
            <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
              One Brick at a Time
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-gray-100 mb-12 leading-relaxed font-medium">
            Transform your vision into reality with precision, passion, and unparalleled expertise in construction.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="group text-base sm:text-lg px-6 sm:px-8 lg:px-10 py-5 sm:py-6 lg:py-7 bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-700 hover:to-cyan-600 text-white border-0 rounded-full font-bold shadow-2xl hover:shadow-teal-500/50 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base sm:text-lg px-6 sm:px-8 lg:px-10 py-5 sm:py-6 lg:py-7 border-2 border-white text-white bg-transparent hover:bg-white hover:text-gray-900 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg w-full sm:w-auto"
            >
              <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
