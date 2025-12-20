import { Link } from "react-router-dom";
import { Twitter, Send, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <Link
              to="/"
              className="text-xl font-heading font-bold text-foreground hover:text-primary transition-colors"
            >
              ConQuest<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Remote Digital Operations & Virtual Assistance Specialist. 
              Supporting businesses that need reliability and organization.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://x.com/iamconqwest"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://t.me/BIG_CQ"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="font-heading font-semibold text-foreground text-sm">Quick Links</h3>
            <nav className="flex flex-col gap-1.5">
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
                  className="text-muted-foreground hover:text-primary transition-colors text-xs w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="font-heading font-semibold text-foreground text-sm">Get in Touch</h3>
            <div className="space-y-2">
              <a
                href="mailto:conquestsammy5@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-xs"
              >
                <Mail className="w-3.5 h-3.5" />
                conquestsammy5@gmail.com
              </a>
              <div className="flex items-center gap-2 text-muted-foreground text-xs">
                <MapPin className="w-3.5 h-3.5" />
                Lagos, Nigeria
              </div>
            </div>
            <span className="inline-block px-2.5 py-1 text-[10px] font-medium rounded-full bg-primary/15 text-primary border border-primary/25">
              Remote-Ready
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {currentYear} Aisiri Conquest Samuel. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Open to full-time, hybrid, or on-site roles.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
