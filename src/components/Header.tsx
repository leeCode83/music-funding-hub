import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg">
              <Music className="h-6 w-6 text-accent-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">MuDING</span>
          </NavLink>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink
              to="/"
              className="text-foreground/70 hover:text-foreground transition-colors"
              activeClassName="text-foreground font-medium"
            >
              Home
            </NavLink>
            <NavLink
              to="/tokenization"
              className="text-foreground/70 hover:text-foreground transition-colors"
              activeClassName="text-foreground font-medium"
            >
              Tokenization
            </NavLink>
            <NavLink
              to="/marketplace"
              className="text-foreground/70 hover:text-foreground transition-colors"
              activeClassName="text-foreground font-medium"
            >
              Marketplace
            </NavLink>
            <NavLink
              to="/dashboard"
              className="text-foreground/70 hover:text-foreground transition-colors"
              activeClassName="text-foreground font-medium"
            >
              Dashboard
            </NavLink>
          </nav>

          {/* CTA Button */}
          <Button variant="default" size="default">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;