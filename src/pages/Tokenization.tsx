import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Tokenization = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Asset Tokenization
          </h1>
          <p className="text-xl text-muted-foreground">
            Transform your master recording rights into verified digital assets.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tokenization;
