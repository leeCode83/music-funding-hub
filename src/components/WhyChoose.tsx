import { Coins, Globe, Zap, Shield, TrendingUp, Heart } from "lucide-react";

const WhyChoose = () => {
  const artistBenefits = [
    {
      icon: Coins,
      title: "Liquidity Without Selling",
      description: "Access cash without selling your master rights forever",
    },
    {
      icon: Shield,
      title: "Retain Control",
      description: "Keep full creative control - we facilitate, not take over",
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Get funding from a worldwide network of lenders",
    },
    {
      icon: Zap,
      title: "Fast & Transparent",
      description: "Smart contracts are faster and fairer than traditional systems",
    },
  ];

  const lenderBenefits = [
    {
      icon: TrendingUp,
      title: "New Asset Class",
      description: "Access music royalties uncorrelated with traditional markets",
    },
    {
      icon: Shield,
      title: "Verified Collateral",
      description: "All assets undergo strict due diligence with transparent data",
    },
    {
      icon: Coins,
      title: "Secure Passive Income",
      description: "Earn interest or receive income-generating NFTs",
    },
    {
      icon: Heart,
      title: "Support Creators",
      description: "Participate directly in artist success and the creator economy",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              The MuDING Advantage
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Designed to benefit every stakeholder in the music ecosystem
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* For Artists */}
            <div className="space-y-6">
              <div className="bg-accent/10 rounded-xl p-6 border-2 border-accent/30">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  For Musicians & Rights Holders
                </h3>
                <p className="text-muted-foreground">Borrowers</p>
              </div>

              <div className="space-y-4">
                {artistBenefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={index}
                      className="flex gap-4 p-4 bg-card rounded-lg border border-border hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-card-foreground mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* For Lenders */}
            <div className="space-y-6">
              <div className="bg-primary/10 rounded-xl p-6 border-2 border-primary/30">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  For Lenders
                </h3>
                <p className="text-muted-foreground">Investors</p>
              </div>

              <div className="space-y-4">
                {lenderBenefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={index}
                      className="flex gap-4 p-4 bg-card rounded-lg border border-border hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-card-foreground mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
