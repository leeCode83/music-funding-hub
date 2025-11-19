import { Check, X } from "lucide-react";

const Comparison = () => {
  const comparisonData = [
    {
      feature: "Asset Ownership",
      muding: "Artist Retains",
      labels: "Often Taken Over",
      banks: "Irrelevant",
    },
    {
      feature: "Creative Control",
      muding: "100% Artist's",
      labels: "Often Lost / Restricted",
      banks: "100% Artist's",
    },
    {
      feature: "Speed of Funds",
      muding: "Fast (Days/Hours)",
      labels: "Slow (Months)",
      banks: "Very Slow (Months)",
    },
    {
      feature: "Process",
      muding: "Transparent & Automated",
      labels: "Opaque & Complex",
      banks: "Bureaucratic",
    },
    {
      feature: "Access",
      muding: "Global, 24/7",
      labels: "Very Limited",
      banks: "Limited Locally",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              MuDING vs. Traditional
            </h2>
            <p className="text-lg text-muted-foreground">
              See how we compare to conventional funding methods
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
            {/* Header Row */}
            <div className="grid grid-cols-4 gap-4 p-6 bg-primary/5 border-b border-border">
              <div className="font-semibold text-card-foreground">Feature</div>
              <div className="font-semibold text-accent text-center">MuDING</div>
              <div className="font-semibold text-muted-foreground text-center">Record Labels</div>
              <div className="font-semibold text-muted-foreground text-center">Banks</div>
            </div>

            {/* Data Rows */}
            {comparisonData.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-4 gap-4 p-6 border-b border-border last:border-b-0 hover:bg-muted/30 transition-colors ${
                  index % 2 === 0 ? "bg-background" : "bg-muted/10"
                }`}
              >
                <div className="font-medium text-card-foreground">{row.feature}</div>
                <div className="text-center">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold text-sm">
                    <Check className="h-4 w-4" />
                    {row.muding}
                  </span>
                </div>
                <div className="text-center text-muted-foreground text-sm flex items-center justify-center">
                  {row.labels}
                </div>
                <div className="text-center text-muted-foreground text-sm flex items-center justify-center">
                  {row.banks}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
