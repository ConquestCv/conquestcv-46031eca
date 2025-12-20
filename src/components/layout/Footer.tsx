import { Link } from "react-router-dom";
import { Twitter, Send, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              to="/"
              className="text-2xl font-heading font-bold text-foreground"
            >
              ConQuest<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Remote Digital Operations & Virtual Assistance Specialist. 
              Supporting businesses that need reliability, execution, and organization.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://x.com/iamconqwest"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/BIG_CQ"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">Quick Links</h3>
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
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:conquestsammy5@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                conquestsammy5@gmail.com
              </a>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4" />
                Lagos, Nigeria
              </div>
            </div>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30">
                Remote-Ready
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Aisiri Conquest Samuel. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Open to full-time, hybrid, or on-site roles with relocation support.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
