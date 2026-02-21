import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import profileImage from "@/assets/conquest-profile.jpg";

const valueProps = [
  "Highly independent and self-directed in remote-first environments",
  "Strong attention to detail and execution accuracy",
  "Comfortable with ambiguity and fast-changing priorities",
  "Excellent time management across cross-border teams",
  "Curious, resourceful, disciplined, and solution-oriented",
  "Maintains high-level confidentiality and precision",
];

const coreExpertise = [
  { area: "Digital Operations", detail: "Advanced inbox management, executive scheduling, and cross-border team coordination.", icon: "📋" },
  { area: "Data Architecture", detail: "Building automated reporting dashboards and tracking systems using Google Sheets and logic-based formulas.", icon: "📊" },
  { area: "Multimedia Production", detail: "High-fidelity video editing (CapCut, After Effects) and live stream management via OBS Studio.", icon: "🎬" },
  { area: "Technical Support", detail: "Bridging users and complex digital products through clear documentation and empathetic communication.", icon: "🛠️" },
  { area: "Web3 Integration", detail: "Native understanding of DeFi protocols, wallet security, and DAO governance structures.", icon: "🌐" },
];

const interests = [
  { name: "Remote Work Systems", icon: "🌍" },
  { name: "AI Productivity Tools", icon: "🤖" },
  { name: "Multimedia Production", icon: "🎬" },
  { name: "Data & Automation", icon: "📊" },
  { name: "Online Communities", icon: "👥" },
];

const AboutPage = () => {
  return (
    <div className="relative">
      <div className="hero-glow" />

      {/* Header */}
      <section className="page-header">
        <h1 className="page-title">
          About <span className="text-gradient">Me</span>
        </h1>
        <p className="page-subtitle">
          A highly versatile Operations & Multimedia Specialist with dual-track expertise in traditional digital operations and decentralized ecosystems.
        </p>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image Side */}
            <div className="relative">
              <div className="sticky top-28">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
                  <div className="relative glow-card glow-border p-1.5 rounded-2xl max-w-sm mx-auto">
                    <img
                      src={profileImage}
                      alt="Aisiri Conquest Samuel"
                      className="w-full aspect-square object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-8">
              {/* Who I Am */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-heading font-bold">
                  Who I Am
                </h2>
                <div className="space-y-3 text-muted-foreground leading-relaxed text-sm">
                  <p>
                    I'm <span className="text-foreground font-medium">Aisiri Conquest Samuel</span>, 
                    a highly versatile Operations & Multimedia Specialist based in Lagos, Nigeria, with over 3 years 
                    of experience navigating digital tools, AI-assisted productivity, and community architecture.
                  </p>
                  <p>
                    I bridge the gap between "Real World" corporate administration and the Web3 frontier. 
                    I'm recognized for implementing structured workflows that reduce manual overhead and for 
                    maintaining high-level confidentiality and precision in fast-paced, remote-first environments.
                  </p>
                </div>
              </div>

              {/* Core Areas of Expertise */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-heading font-bold">
                  Core Areas of Expertise
                </h2>
                <div className="space-y-3">
                  {coreExpertise.map((item, index) => (
                    <div key={index} className="interactive-card !py-3 !px-4">
                      <div className="flex items-start gap-3">
                        <span className="text-lg mt-0.5">{item.icon}</span>
                        <div>
                          <h4 className="font-heading font-semibold text-sm text-foreground">{item.area}</h4>
                          <p className="text-xs text-muted-foreground mt-0.5">{item.detail}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Work Style & Strengths */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-heading font-bold">
                  Work Style & Strengths
                </h2>
                <ul className="space-y-2">
                  {valueProps.map((prop, index) => (
                    <li key={index} className="flex items-center gap-2 group">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-muted-foreground text-sm">{prop}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Work Philosophy */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-heading font-bold">
                  Work Philosophy
                </h2>
                <div className="interactive-card">
                  <p className="text-muted-foreground leading-relaxed text-sm italic">
                    "Comfortable working independently in fully remote and asynchronous teams, 
                    handling ambiguity, managing multiple priorities, and executing tasks with accuracy and consistency. 
                    I bring a strong blend of operational discipline, creative execution, technical curiosity, and AI literacy."
                  </p>
                </div>
              </div>

              {/* Interests */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-heading font-bold">
                  Interests & Focus Areas
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {interests.map((interest, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card/50 border border-border hover:border-primary/40 hover:bg-primary/5 transition-all cursor-pointer text-sm"
                    >
                      <span>{interest.icon}</span>
                      <span className="text-muted-foreground text-xs">{interest.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Work Preference */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-heading font-bold">
                  Work Preference
                </h2>
                <div className="interactive-card">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Remote roles preferred. Open to full-time, on-site, or hybrid roles with relocation, 
                    transport, and accommodation support.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-3 pt-4">
                <Link to="/experience" className="btn-primary">
                  View My Experience
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
