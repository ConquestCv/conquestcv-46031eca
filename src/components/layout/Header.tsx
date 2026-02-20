import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Twitter, Send, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { usePersona } from "@/hooks/use-persona";
import PersonaToggle from "@/components/PersonaToggle";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Skills", path: "/skills" },
  { name: "Education", path: "/education" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { persona } = usePersona();

  const isWeb3 = persona === "web3";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const accentHover = isWeb3
    ? "hover:text-emerald-400"
    : "hover:text-primary";

  const activeNavClass = isWeb3
    ? "text-foreground [&::after]:bg-emerald-400"
    : "text-foreground";

  const ctaClass = isWeb3
    ? "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow-[0_4px_16px_hsl(170_80%_45%_/_0.35)] hover:scale-[1.02] hover:brightness-110"
    : "btn-primary";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Row 1: Logo | Toggle (center) | Actions */}
      <div className="section-container">
        <div className="flex items-center justify-between h-14 gap-4">
          {/* Logo */}
          <Link
            to="/"
            className={`text-xl font-heading font-bold text-foreground ${accentHover} transition-colors flex-shrink-0`}
          >
            ConQuest<span className={isWeb3 ? "text-emerald-400" : "text-primary"}>.</span>
          </Link>

          {/* Persona Toggle — absolute center on desktop */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
            <PersonaToggle />
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-foreground" />
              ) : (
                <Moon className="w-4 h-4 text-foreground" />
              )}
            </button>

            <a
              href="https://x.com/iamconqwest"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 text-muted-foreground ${accentHover} transition-all duration-300 hover:scale-110`}
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://t.me/BIG_CQ"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 text-muted-foreground ${accentHover} transition-all duration-300 hover:scale-110`}
              aria-label="Telegram"
            >
              <Send className="w-4 h-4" />
            </a>
            <Link to="/contact" className={ctaClass}>
              Let's Talk
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-foreground" />
              ) : (
                <Moon className="w-4 h-4 text-foreground" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground hover:bg-card/50 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Row 2: Desktop Nav Links — centered below the top row */}
      <div className="hidden md:block border-t border-border/40">
        <div className="section-container">
          <nav className="flex items-center justify-center gap-6 h-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${
                  location.pathname === item.path
                    ? `active ${activeNavClass}`
                    : ""
                } ${isWeb3 ? "[&::after]:bg-emerald-400 hover:text-foreground" : ""}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <nav className="section-container py-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium py-2 px-3 rounded-lg transition-all ${
                location.pathname === item.path
                  ? isWeb3
                    ? "text-emerald-400 bg-emerald-500/10"
                    : "text-primary bg-primary/10"
                  : isWeb3
                  ? "text-muted-foreground hover:text-emerald-400 hover:bg-emerald-500/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-card/50"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-3 border-t border-border mt-2">
            <a
              href="https://x.com/iamconqwest"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 text-muted-foreground ${accentHover} transition-colors`}
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://t.me/BIG_CQ"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 text-muted-foreground ${accentHover} transition-colors`}
              aria-label="Telegram"
            >
              <Send className="w-4 h-4" />
            </a>
          </div>
          <Link to="/contact" className={`${ctaClass} text-center mt-2`}>
            Let's Talk
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
