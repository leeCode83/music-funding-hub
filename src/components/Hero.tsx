import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Pause } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import MusicParticles from "./MusicParticles";
import { AudioAnalyzer } from "@/utils/audioAnalyzer";

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const analyzerRef = useRef<AudioAnalyzer | null>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioData, setAudioData] = useState<Uint8Array>(new Uint8Array(0));

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(overlayRef.current, {
        opacity: 0,
        duration: 1,
      })
      .from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
      }, "-=0.5")
      .from(subheadingRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, "-=0.6")
      .from(buttonsRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
      }, "-=0.5");
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      if (analyzerRef.current) {
        analyzerRef.current.cleanup();
      }
    };
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const updateAudioData = () => {
      if (analyzerRef.current) {
        const data = analyzerRef.current.getFrequencyData();
        setAudioData(data);
      }
      requestAnimationFrame(updateAudioData);
    };

    updateAudioData();
  }, [isPlaying]);

  const toggleAudio = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      if (!analyzerRef.current) {
        analyzerRef.current = new AudioAnalyzer();
        await analyzerRef.current.initialize(audioRef.current);
      }
      
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('Error playing audio:', error);
      }
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* 3D Particle Background */}
      <MusicParticles audioData={audioData} />
      <div ref={overlayRef} className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/50 to-primary/40 z-[1]" />
      
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        loop
        crossOrigin="anonymous"
      />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 ref={headingRef} className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            Unlock the True Value of Your Music
          </h1>
          <p ref={subheadingRef} className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            MuDING is a P2P lending platform that empowers you to turn your Master Recording Rights into collateral for instant funding, without selling your ownership.
          </p>
          
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              size="lg" 
              variant="hero"
              className="w-full sm:w-auto min-w-[240px]"
            >
              Start Asset Verification
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="hero-outline"
              className="w-full sm:w-auto min-w-[240px]"
            >
              Explore Marketplace
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={toggleAudio}
              className="w-full sm:w-auto min-w-[180px]"
            >
              {isPlaying ? (
                <>
                  <Pause className="mr-2 h-5 w-5" />
                  Pause Music
                </>
              ) : (
                <>
                  <Play className="mr-2 h-5 w-5" />
                  Play Music
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
