import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Dashboard
          </h1>
          <p className="text-xl text-muted-foreground">
            Manage your assets, loans, and portfolio.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
