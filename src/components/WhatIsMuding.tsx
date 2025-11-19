import { Music, Lock, TrendingUp, Zap } from "lucide-react";

const WhatIsMuding = () => {
  const features = [
    {
      icon: Music,
      title: "Tokenize",
      description: "Convert your master recording rights into unique NFTs",
    },
    {
      icon: Lock,
      title: "Collateralize",
      description: "Use your NFT as collateral on our global marketplace",
    },
    {
      icon: TrendingUp,
      title: "Secure Loans",
      description: "Get stablecoins quickly from a network of lenders",
    },
    {
      icon: Zap,
      title: "Keep Control",
      description: "Maintain full ownership while accessing liquidity",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              MuDING: Bridging Music and Decentralized Finance
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A revolutionary peer-to-peer lending protocol built on blockchain technology
            </p>
          </div>

          {/* Main Description */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border">
            <p className="text-lg text-card-foreground leading-relaxed mb-6">
              MuDING (Music Lending) solves one of the biggest problems for musicians and copyright holders: <span className="font-semibold text-accent">illiquid assets</span>.
            </p>
            <p className="text-lg text-card-foreground leading-relaxed mb-6">
              Your most valuable asset—your master recording rights—generates income, but it cannot easily be used to access cash. <span className="font-semibold">MuDING changes this.</span>
            </p>
            <p className="text-lg text-card-foreground leading-relaxed">
              We give you financial power over your work, allowing you to fund your next project, tour, or personal needs while maintaining full control over your music.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsMuding;
