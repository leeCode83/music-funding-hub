import { Music, Mail, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Left: Brand & Contact */}
            <div className="space-y-6">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <Music className="h-6 w-6 text-accent-foreground" />
                </div>
                <span className="text-2xl font-bold">MuDING</span>
              </div>

              {/* Navigation Links */}
              <nav className="flex gap-8 text-sm">
                <a href="#" className="hover:text-accent transition-colors underline">About us</a>
                <a href="#" className="hover:text-accent transition-colors underline">Services</a>
                <a href="#" className="hover:text-accent transition-colors underline">Use Cases</a>
                <a href="#" className="hover:text-accent transition-colors underline">Pricing</a>
                <a href="#" className="hover:text-accent transition-colors underline">Blog</a>
              </nav>

              {/* Social Icons */}
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors">
                  <Github className="h-5 w-5" />
                </a>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <div className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-md font-semibold mb-2">
                  Contact us:
                </div>
                <p>Email: info@muding.com</p>
                <p>Phone: 555-567-8901</p>
                <p>Address: 1234 Main St</p>
                <p>Moonstone City, Stardust State 12345</p>
              </div>
            </div>

            {/* Right: Newsletter */}
            <div className="flex items-start justify-end">
              <div className="bg-primary-foreground/5 rounded-2xl p-8 w-full max-w-md border border-primary-foreground/10">
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Email"
                    className="flex-1 bg-transparent border-2 border-primary-foreground/20 rounded-xl px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent transition-colors"
                  />
                  <button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-xl transition-colors whitespace-nowrap">
                    Subscribe to news
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary-foreground/10 mb-8"></div>

          {/* Bottom */}
          <div className="flex justify-between items-center text-sm text-primary-foreground/60">
            <p>&copy; 2025 MuDING. All Rights Reserved.</p>
            <a href="#" className="hover:text-accent transition-colors underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;