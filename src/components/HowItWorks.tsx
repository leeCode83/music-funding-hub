import { Shield, Users, RefreshCw } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Shield,
      title: "Verification & Tokenization",
      subtitle: "Off-Chain",
      points: [
        "Submit master rights with proof of ownership and 2+ years of revenue reports",
        "Legal and analyst teams verify all documents",
        "Sign binding agreement including Royalty Assignment Agreement",
        "Receive unique NFT representing specific percentage of income rights",
      ],
    },
    {
      icon: Users,
      title: "P2P Lending Process",
      subtitle: "On-Chain",
      points: [
        "List NFTs on MuDING marketplace to auction loan requests",
        "Global lenders view revenue data and place offers",
        "Accept best offer - funds sent instantly to your wallet",
        "NFT automatically locked in secure escrow smart contract",
      ],
    },
    {
      icon: RefreshCw,
      title: "Distribution & Settlement",
      subtitle: "Automated",
      points: [
        "Royalty income arrives and converts to stablecoins",
        "Smart contract instantly splits payments automatically",
        "Repayment: NFT returns to your wallet",
        "Default: NFT transfers to lender with income rights",
      ],
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              How Does It Work?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Verified in the Real World, Automated on Blockchain
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl font-bold shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mt-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-accent font-semibold mb-6">
                    {step.subtitle}
                  </p>

                  {/* Points */}
                  <ul className="space-y-3">
                    {step.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="block w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
