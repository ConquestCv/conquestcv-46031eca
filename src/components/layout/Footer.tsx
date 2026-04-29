import { Link } from "react-router-dom";
import { Mail, MapPin, ArrowUp, Linkedin, Send } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border mt-16">
      <div className="section-container py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-md bg-foreground text-background flex items-center justify-center font-mono text-xs font-bold">
                CQ
              </span>
              <span className="text-sm font-heading font-semibold text-foreground">
                Aisiri Conquest Samuel
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Customer Experience Specialist focused on resolution-first support,
              QA-grade documentation, and reducing escalations across high-volume
              omnichannel operations.
            </p>
            <div className="flex items-center gap-2">
              <span className="badge-success">
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse-dot" />
                Available 24/7 shifts
              </span>
            </div>
          </div>

          {/* Sitemap */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground">
              Sitemap
            </h3>
            <nav className="flex flex-col gap-2">
              {[
                { name: "About", path: "/about" },
                { name: "Experience", path: "/experience" },
                { name: "Skills", path: "/skills" },
                { name: "Education", path: "/education" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground">
              Contact
            </h3>
            <div className="space-y-2">
              <a
                href="mailto:conquestaisiri@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                conquestaisiri@gmail.com
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-3.5 h-3.5" />
                Lagos, Nigeria · Remote-Ready
              </div>
              <div className="flex items-center gap-2 pt-1">
                <a
                  href="https://wa.me/2347049163089"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="theme-toggle"
                  aria-label="WhatsApp"
                >
                  <Send className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://linkedin.com/in/aisiri-conquest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="theme-toggle"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground font-mono">
            © {year} Aisiri Conquest Samuel — All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors font-mono"
          >
            <ArrowUp className="w-3 h-3" /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
