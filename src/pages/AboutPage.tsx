import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import profileImage from "@/assets/conquest-profile.jpg";

const valueProps = [
  "Reliable execution on every task",
  "Clear and proactive communication",
  "Organized workflow and documentation",
  "Adaptable to new tools and processes",
  "Self-motivated remote work discipline",
];

const interests = [
  { name: "Digital Operations", icon: "⚙️" },
  { name: "Community Building", icon: "👥" },
  { name: "Web3 & Blockchain", icon: "🔗" },
  { name: "Tech Trends", icon: "📱" },
  { name: "Process Optimization", icon: "📈" },
  { name: "Remote Work Culture", icon: "🌍" },
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
          A dedicated remote professional passionate about helping businesses succeed through reliable operations support.
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
                    a Remote Digital Operations and Virtual Assistance Specialist based in Lagos, Nigeria. 
                    With over 3 years of experience supporting distributed teams, I bring a combination 
                    of technical proficiency and strong communication skills to every role.
                  </p>
                  <p>
                    My background spans virtual assistance, data entry, community support, and 
                    operations coordination across both Web2 and Web3 organizations. I've worked 
                    with companies like Aptos Labs, Elliptic, Fireblocks, and Anchorage Digital.
                  </p>
                  <p>
                    I hold a BSc in Mechanical Engineering from the University of Lagos, which 
                    has given me strong analytical and problem-solving skills.
                  </p>
                </div>
              </div>

              {/* What I Bring */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-heading font-bold">
                  What I Bring
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
                    "I believe in doing work that matters and doing it well. Remote work 
                    requires discipline, initiative, and clear communication — qualities I 
                    prioritize in every engagement. When you work with me, you get someone 
                    who takes ownership and meets deadlines."
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
