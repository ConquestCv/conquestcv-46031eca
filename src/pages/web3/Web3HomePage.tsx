import { Link } from "react-router-dom";
import {
  ArrowRight,
  Zap,
  FileText,
  Users,
  Radio,
  ChevronRight,
  Twitter,
  Shield,
  BarChart3,
  MessageCircle,
  TrendingUp,
} from "lucide-react";
import profileImage from "@/assets/conquest-profile.jpg";

const stats = [
  { label: "Ecosystem Research" },
  { label: "Community Ops" },
  { label: "Remote-Native" },
];

const capabilities = [
  {
    title: "Content & Narrative",
    description: "Threads, explainers, docs—bridging knowledge gaps in Web3.",
    icon: FileText,
  },
  {
    title: "Research & Analysis",
    description: "Protocol breakdowns, trend tracking, ecosystem mapping.",
    icon: Radio,
  },
  {
    title: "Community & Moderation",
    description: "Discord/Telegram ops, onboarding flows, clarity at scale.",
    icon: Users,
  },
  {
    title: "Cross-Team Comms",
    description: "Translating between devs, founders, and communities.",
    icon: Zap,
  },
];

const threadPreviews = [
  {
    hook: "Most people think DePIN is just another crypto narrative. They're wrong. Here's why it's the most important infrastructure shift of the decade 🧵",
    tag: "DePIN",
    link: "https://x.com/iamconqwest",
  },
  {
    hook: "RWA tokenization is breaking into the mainstream — but nobody explains WHY it matters for regular people. I did the research so you don't have to 🧵",
    tag: "RWA",
    link: "https://x.com/iamconqwest",
  },
  {
    hook: "DAOs keep failing not because of bad ideas — but because of terrible communication infrastructure. Here's the fix 🧵",
    tag: "DAOs",
    link: "https://x.com/iamconqwest",
  },
];

const modTools = [
  {
    name: "Wick Bot",
    description: "Automated moderation, anti-spam, and rule enforcement at scale.",
    icon: Shield,
  },
  {
    name: "Rose Bot",
    description: "Community management commands, welcome flows, and member filters.",
    icon: MessageCircle,
  },
  {
    name: "Collab.Land",
    description: "Token-gated access management and NFT holder verification.",
    icon: Zap,
  },
  {
    name: "Discord Dev Tools",
    description: "Custom bots, role systems, and structured channel architecture.",
    icon: Radio,
  },
];

const modMetrics = [
  { label: "Member Growth Tracked", value: "+47%", sub: "avg. month-over-month" },
  { label: "Spam Blocked", value: "2.4K+", sub: "messages filtered weekly" },
  { label: "Sentiment Score", value: "Positive", sub: "community health index" },
];

const Web3HomePage = () => {
  const scrollToProofOfWork = () => {
    document.getElementById("proof-of-work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Hero Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,_hsl(170_60%_30%_/_0.25)_0%,_transparent_55%)]" />

      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center pt-24 sm:pt-20 pb-16">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-slide-up">
              <div className="space-y-3">
                <p className="text-emerald-400 font-medium tracking-wide uppercase text-xs">
                  Web3 Operations & Content
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight">
                  Turning Complex{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                    Web3 Utility
                  </span>{" "}
                  into High-Retention Content
                </h1>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Specializing in Twitter Threads, Video Explainers, and Community Management for{" "}
                  <span className="text-foreground font-medium">DePIN, AI, and RWA projects.</span>
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                  >
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={scrollToProofOfWork}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow-[0_4px_16px_hsl(170_80%_45%_/_0.35)] hover:scale-[1.02] hover:brightness-110"
                >
                  View My Proof of Work
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="https://t.me/BIG_CQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Hire Me on Telegram
                </a>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="relative flex justify-center lg:justify-end animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full scale-90" />
                <div className="relative p-2 rounded-2xl border border-emerald-500/30 bg-card/80 backdrop-blur-sm">
                  <img
                    src={profileImage}
                    alt="Aisiri Conquest Samuel - Web3 Specialist"
                    loading="lazy"
                    className="w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[28rem] object-cover rounded-xl"
                  />
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
                className="group relative overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur-sm p-5 transition-all duration-300 cursor-pointer hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-[0_8px_32px_hsl(170_80%_45%_/_0.15)]"
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

      {/* ====== PROOF OF WORK — Thread Previews ====== */}
      <section id="proof-of-work" className="py-16 border-t border-border/50 scroll-mt-24">
        <div className="section-container">
          <div className="text-center mb-10">
            <p className="text-emerald-400 uppercase text-xs font-medium tracking-wide mb-2">Twitter / X</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">
              Thread Previews
            </h2>
            <p className="text-muted-foreground text-sm">
              High-retention content that explains complex Web3 concepts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {threadPreviews.map((thread, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur-sm p-5 transition-all duration-300 hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-[0_8px_32px_hsl(170_80%_45%_/_0.15)] flex flex-col gap-4"
              >
                {/* Tweet Header */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                    <Twitter className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">ConQuest</p>
                    <p className="text-[10px] text-muted-foreground">@iamconqwest</p>
                  </div>
                  <span className="ml-auto px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
                    #{thread.tag}
                  </span>
                </div>

                {/* Hook Text */}
                <p className="text-sm text-foreground leading-relaxed flex-1">
                  {thread.hook}
                </p>

                {/* CTA */}
                <a
                  href={thread.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors mt-auto group-hover:underline"
                >
                  Read Full Thread on X
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== COMMUNITY MANAGEMENT & MODERATION ====== */}
      <section className="py-16 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent">
        <div className="section-container">
          <div className="text-center mb-10">
            <p className="text-emerald-400 uppercase text-xs font-medium tracking-wide mb-2">Discord & Telegram</p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">
              Community Management & Moderation
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Building and managing the infrastructure that keeps Web3 communities functional, safe, and growing.
            </p>
          </div>

          {/* Mod Tech Stack */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {modTools.map((tool, index) => (
              <div
                key={index}
                className="group rounded-xl border border-border bg-card/60 backdrop-blur-sm p-5 transition-all duration-300 hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-[0_8px_32px_hsl(170_80%_45%_/_0.15)]"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-3 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-300">
                  <tool.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-sm font-heading font-bold mb-1">{tool.name}</h3>
                <p className="text-xs text-muted-foreground">{tool.description}</p>
              </div>
            ))}
          </div>

          {/* Moderation Report Graphic */}
          <div className="rounded-2xl border border-emerald-500/20 bg-card/40 backdrop-blur-sm p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-sm font-heading font-bold">Sample Moderation Report</h3>
                <p className="text-xs text-muted-foreground">30-day community health snapshot</p>
              </div>
              <span className="ml-auto px-2.5 py-1 rounded-full text-[10px] font-medium bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
                Active Community
              </span>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {modMetrics.map((metric, index) => (
                <div key={index} className="rounded-xl border border-border bg-card/50 p-4 text-center">
                  <p className="text-2xl md:text-3xl font-heading font-bold text-emerald-400 mb-1">
                    {metric.value}
                  </p>
                  <p className="text-xs font-medium text-foreground mb-0.5">{metric.label}</p>
                  <p className="text-[10px] text-muted-foreground">{metric.sub}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Spam Detection", "Onboarding Flow", "Role Management", "Sentiment Tracking", "Member Vetting"].map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-emerald-500/8 border border-emerald-500/20 text-emerald-400">
                  {tag}
                </span>
              ))}
            </div>
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
              <div
                key={index}
                className="relative overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur-sm p-5 transition-all duration-300 hover:border-emerald-500/30 hover:-translate-y-1"
              >
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
              <a
                href="https://t.me/BIG_CQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow-[0_4px_16px_hsl(170_80%_45%_/_0.35)] hover:scale-[1.02] hover:brightness-110"
              >
                Hire Me on Telegram
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:conquestaisiri@gmail.com"
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
