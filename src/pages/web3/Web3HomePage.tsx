import { Link } from "react-router-dom";
import { ArrowRight, Zap, FileText, Users, Radio, ChevronRight } from "lucide-react";
import profileImage from "@/assets/conquest-profile.jpg";

const stats = [
  { label: "Ecosystem Experience" },
  { label: "Research-Driven" },
  { label: "Remote-Native" },
];

const capabilities = [
  {
    title: "Content & Narrative",
    description: "Threads, explainers, docs—bridging knowledge gaps.",
    icon: FileText,
  },
  {
    title: "Research & Analysis",
    description: "Protocol breakdowns, trend tracking, ecosystem mapping.",
    icon: Radio,
  },
  {
    title: "Community & Coordination",
    description: "Discord/Telegram ops, information flow, clarity at scale.",
    icon: Users,
  },
  {
    title: "Cross-Team Communication",
    description: "Translating between devs, founders, and users.",
    icon: Zap,
  },
];

const Web3HomePage = () => {
  return (
    <div className="relative">
      {/* Hero Glow - Web3 themed */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,_hsl(170_60%_30%_/_0.25)_0%,_transparent_55%)]" />

      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center pt-16">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-slide-up">
              <div className="space-y-3">
                <p className="text-emerald-400 font-medium tracking-wide uppercase text-xs">
                  Web3 Operations
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight">
                  Clarity in{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                    Chaos
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Web3 Research, Content & Coordination |{" "}
                  <span className="text-foreground font-medium">Making decentralized teams move faster</span>
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm max-w-md">
                I work inside Web3 ecosystems, helping teams communicate, research, and coordinate 
                clearly in fast-moving, decentralized environments. Not hype—function.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-2">
                {stats.map((stat, index) => (
                  <div key={index} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Link to="/experience" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow-[0_4px_16px_hsl(170_80%_45%_/_0.35)] hover:scale-[1.02] hover:brightness-110">
                  View Experience
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Let's Talk
                </Link>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="relative flex justify-center lg:justify-end animate-fade-in">
              <div className="relative">
                {/* Glow behind image - Web3 themed */}
                <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full scale-90" />
                
                {/* Image Container */}
                <div className="relative p-2 rounded-2xl border border-emerald-500/30 bg-card/80 backdrop-blur-sm">
                  <img
                    src={profileImage}
                    alt="Aisiri Conquest Samuel - Web3 Specialist"
                    className="w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[28rem] object-cover rounded-xl"
                  />
                  
                  {/* Floating Badge */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full shadow-lg font-semibold text-sm whitespace-nowrap">
                    Web3 Native
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning Statement */}
      <section className="py-16 border-t border-border/50">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold">
              Where Things Need to Be{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
                Explained, Aligned, or Organized
              </span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              I operate at the intersection of information, communication, and execution. 
              Turning chaos into structure. Turning ideas into readable narratives. 
              Turning communities into coordinated groups.
            </p>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16 bg-gradient-to-b from-emerald-500/5 via-emerald-500/3 to-transparent">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">
              What I Do Inside Web3
            </h2>
            <p className="text-muted-foreground text-sm">
              Core capabilities for decentralized teams
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((cap, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur-sm p-5 transition-all duration-300 cursor-pointer hover:border-emerald-500/40 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center transition-all duration-300 group-hover:bg-emerald-500/20 group-hover:scale-110 mb-3">
                  <cap.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-sm font-heading font-semibold mb-1">{cap.title}</h3>
                <p className="text-xs text-muted-foreground">{cap.description}</p>
                <ChevronRight className="w-4 h-4 text-emerald-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/skills" className="btn-secondary text-sm">
              View All Skills
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-16 border-t border-border/50">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">
              How I Work
            </h2>
            <p className="text-muted-foreground text-sm">
              Reliability is rare in Web3. Here's how I signal it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              {
                title: "Fast Onboarding",
                desc: "I understand ecosystem context quickly. No hand-holding required.",
              },
              {
                title: "Async-Native",
                desc: "Distributed teams, different timezones, async-first communication.",
              },
              {
                title: "Outcome-Focused",
                desc: "Research supports decisions. Content bridges gaps. Nothing academic.",
              },
            ].map((item, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur-sm p-5">
                <div className="text-emerald-400 text-3xl mb-2">"</div>
                <h3 className="font-heading font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-cyan-500/10 rounded-3xl mx-4 lg:mx-auto lg:max-w-4xl my-8">
        <div className="section-container text-center">
          <div className="max-w-xl mx-auto space-y-4">
            <h2 className="text-2xl md:text-3xl font-heading font-bold">
              Building in Web3?
            </h2>
            <p className="text-muted-foreground text-sm">
              If you need clarity, structure, or communication support—let's talk.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow-[0_4px_16px_hsl(170_80%_45%_/_0.35)] hover:scale-[1.02] hover:brightness-110">
                Let's Talk
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:conquestsammy5@gmail.com"
                className="btn-secondary"
              >
                Email Directly
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Web3HomePage;
