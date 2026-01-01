import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import profileImage from "@/assets/conquest-profile.jpg";

const workPrinciples = [
  "Clarity over hype",
  "Substance over noise",
  "Long-term trust over short-term attention",
  "Communication as infrastructure",
  "Reliability in volatility",
];

const understandings = [
  { name: "Market Cycles", icon: "📈" },
  { name: "Fast Pivots", icon: "⚡" },
  { name: "Narrative Shifts", icon: "🎯" },
  { name: "Limited Structure", icon: "🏗️" },
  { name: "Resource Constraints", icon: "💎" },
];

const Web3AboutPage = () => {
  return (
    <div className="relative">
      {/* Hero Glow - Web3 themed */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,_hsl(170_60%_30%_/_0.25)_0%,_transparent_55%)]" />

      {/* Header */}
      <section className="page-header">
        <h1 className="page-title">
          About <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">Me</span>
        </h1>
        <p className="page-subtitle">
          Operating inside Web3 ecosystems with clarity, structure, and practical execution.
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
                  <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full" />
                  <div className="relative p-1.5 rounded-2xl border border-emerald-500/30 bg-card/80 backdrop-blur-sm max-w-sm mx-auto">
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
              {/* Core Purpose */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-heading font-bold">
                  What I Do
                </h2>
                <div className="space-y-3 text-muted-foreground leading-relaxed text-sm">
                  <p>
                    I help Web3 teams <span className="text-foreground font-medium">think clearly, communicate sharply, and execute reliably</span> in chaotic, fast-moving crypto environments.
                  </p>
                  <p>
                    Not "passionate about decentralization." Everyone says that. My edge is that I translate complexity, organize disorder, create clarity where others create noise, and operate calmly inside volatility.
                  </p>
                  <p>
                    I sit where things need to be explained, aligned, or organized—bridging information gaps between technical work and human understanding.
                  </p>
                </div>
              </div>

              {/* Positioning */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-heading font-bold">
                  My Role in Web3 Teams
                </h2>
                <div className="relative overflow-hidden rounded-xl border border-emerald-500/30 bg-card/60 backdrop-blur-sm p-5">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    I'm not "just a writer," "just a community manager," or "just a researcher." 
                    I'm a <span className="text-emerald-400 font-medium">connector role</span>—operating at the intersection of information, communication, and execution.
                  </p>
                  <div className="mt-4 space-y-2 text-sm">
                    <p className="text-muted-foreground">• Turning <span className="text-foreground">chaos into structure</span></p>
                    <p className="text-muted-foreground">• Turning <span className="text-foreground">ideas into readable narratives</span></p>
                    <p className="text-muted-foreground">• Turning <span className="text-foreground">communities into coordinated groups</span></p>
                    <p className="text-muted-foreground">• Turning <span className="text-foreground">technical work into understandable output</span></p>
                  </div>
                </div>
              </div>

              {/* Work Principles */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-heading font-bold">
                  Working Principles
                </h2>
                <ul className="space-y-2">
                  {workPrinciples.map((principle, index) => (
                    <li key={index} className="flex items-center gap-2 group">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-muted-foreground text-sm">{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Web3 Understanding */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-heading font-bold">
                  I Understand Web3 Realities
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {understandings.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card/50 border border-emerald-500/20 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all cursor-pointer text-sm"
                    >
                      <span>{item.icon}</span>
                      <span className="text-muted-foreground text-xs">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-3 pt-4">
                <Link to="/experience" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow-[0_4px_16px_hsl(170_80%_45%_/_0.35)] hover:scale-[1.02] hover:brightness-110">
                  View Experience
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Let's Talk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Web3AboutPage;
