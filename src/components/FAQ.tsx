import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What happens if I default on the loan?",
      answer:
        "If the loan is not repaid by the due date, the escrow smart contract will automatically transfer ownership of your NFT to the lender. This is final. The lender will then own the rights to the royalty percentage of that track.",
    },
    {
      question: "How does MuDING ensure royalty revenue is actually distributed?",
      answer:
        "Through a binding legal agreement at the start, 100% of the revenue from the distributor is redirected to us. We then use smart contracts to split it automatically. The artist never holds 100% of the revenue upfront, eliminating the risk of fraud.",
    },
    {
      question: "Do I have to tokenize 100% of my song?",
      answer:
        "No. You have full flexibility. You can decide to tokenize only 10%, 25%, or any other percentage of your song's revenue, depending on your funding needs.",
    },
    {
      question: "Is this safe?",
      answer:
        "Our security is multi-layered. We use real-world legal agreements to secure revenue streams, and professionally audited smart contracts on the blockchain to automate lending and distribution, removing human error or manipulation.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-card-foreground hover:text-accent py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
