import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* For Musicians */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20 hover:border-accent/50 transition-all duration-300">
              <h3 className="text-3xl font-bold text-primary-foreground mb-4">
                For Musicians
              </h3>
              <p className="text-primary-foreground/90 text-lg mb-6 leading-relaxed">
                Your work has value. Don't let it stay locked. Start your asset verification process today and get the funding you deserve.
              </p>
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Learn Verification Criteria
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* For Lenders */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20 hover:border-accent/50 transition-all duration-300">
              <h3 className="text-3xl font-bold text-primary-foreground mb-4">
                For Lenders
              </h3>
              <p className="text-primary-foreground/90 text-lg mb-6 leading-relaxed">
                Be part of the music finance revolution. Diversify your portfolio with assets backed by real revenue and support talented creators.
              </p>
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                View Available Assets
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
