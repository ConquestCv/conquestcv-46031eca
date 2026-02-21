import { Link } from "react-router-dom";
import { Twitter, Send, Mail, MapPin, ArrowUp } from "lucide-react";
import { usePersona } from "@/hooks/use-persona";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { persona } = usePersona();
  const isWeb3 = persona === "web3";

  const accentText = isWeb3 ? "text-emerald-400" : "text-primary";
  const accentHoverText = isWeb3 ? "hover:text-emerald-400" : "hover:text-primary";
  const accentBorder = isWeb3 ? "hover:border-emerald-400/40" : "hover:border-primary/40";
  const badgeClass = isWeb3
    ? "inline-block px-2.5 py-1 text-[10px] font-medium rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25"
    : "inline-block px-2.5 py-1 text-[10px] font-medium rounded-full bg-primary/15 text-primary border border-primary/25";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <Link
              to="/"
              className={`text-xl font-heading font-bold text-foreground ${accentHoverText} transition-colors`}
            >
              ConQuest<span className={accentText}>.</span>
            </Link>
            <p className="text-muted-foreground text-xs leading-relaxed">
              {isWeb3
                ? "Web3 Operations, Research & Community Specialist. Turning complexity into clarity for decentralized teams."
                : "Remote Digital Operations & Virtual Assistance Specialist. Supporting businesses that need reliability and organization."}
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://x.com/iamconqwest"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg bg-card/50 border border-border text-muted-foreground ${accentHoverText} ${accentBorder} transition-all`}
                aria-label="Twitter @iamconqwest"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://t.me/BIG_CQ"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg bg-card/50 border border-border text-muted-foreground ${accentHoverText} ${accentBorder} transition-all`}
                aria-label="Telegram @BIG_CQ"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
            <p className="text-muted-foreground text-[10px]">
              <span className={accentText}>@iamconqwest</span> · t.me/BIG_CQ
            </p>
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
                  className={`text-muted-foreground ${accentHoverText} transition-colors text-xs w-fit`}
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
                href="mailto:conquestaisiri@gmail.com"
                className={`flex items-center gap-2 text-muted-foreground ${accentHoverText} transition-colors text-xs`}
              >
                <Mail className="w-3.5 h-3.5" />
                conquestaisiri@gmail.com
              </a>
              <div className="flex items-center gap-2 text-muted-foreground text-xs">
                <MapPin className="w-3.5 h-3.5" />
                Lagos, Nigeria
              </div>
            </div>
            <span className={badgeClass}>Remote-Ready</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {currentYear} Aisiri Conquest Samuel. All rights reserved.</p>
          <p className="text-center sm:text-right hidden sm:block">
            {isWeb3 ? "Open to Web3 remote collaborations & DAO contributions." : "Open to full-time, hybrid, or on-site roles."}
          </p>
          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card/50 text-muted-foreground ${accentHoverText} hover:border-${isWeb3 ? "emerald-400/40" : "primary/40"} transition-all hover:scale-105 text-xs`}
            aria-label="Back to top"
          >
            <ArrowUp className="w-3 h-3" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
