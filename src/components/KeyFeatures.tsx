import { BarChart3, ShieldCheck, RefreshCw, Lock } from "lucide-react";

const KeyFeatures = () => {
  const features = [
    {
      icon: BarChart3,
      title: "P2P Lending Marketplace",
      description: "Clean, intuitive interface to list NFTs, view offers, and manage your portfolio",
    },
    {
      icon: ShieldCheck,
      title: "Asset Verification System (KYA)",
      description: "Know Your Asset process ensures every NFT is backed by legitimate, valuable real-world assets",
    },
    {
      icon: RefreshCw,
      title: "Automated Royalty Bridge",
      description: "Securely converts fiat revenue into stablecoins and distributes them on-chain transparently",
    },
    {
      icon: Lock,
      title: "Escrow Smart Contract",
      description: "Audited smart contracts ensure fair, automated asset release without manual intervention",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Key Platform Features
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-card rounded-2xl p-8 shadow-md border border-border hover:shadow-xl hover:border-accent/50 transition-all duration-300"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="h-7 w-7 text-accent-foreground" />
                  </div>

                  <h3 className="text-2xl font-bold text-card-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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

export default KeyFeatures;
