import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

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

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Music Finance Platform" 
          className="w-full h-full object-cover"
        />
        <div ref={overlayRef} className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/80" />
      </div>

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
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
