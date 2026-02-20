import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Zap } from "lucide-react";

const experiences = [
  {
    title: "Web3 Research & Ecosystem Analysis",
    category: "Portfolio Work · Ongoing",
    period: "2023 – Present",
    type: "Self-Directed / Ecosystem",
    context:
      "Web3 moves fast and communicates poorly. Most protocols produce technical documentation that their own communities cannot understand. I identified this as the core gap and built a research practice around bridging it.",
    whatIDid: [
      "Mapped DePIN, AI, and RWA ecosystems—identifying key players, incentive structures, and communication breakdowns.",
      "Produced written protocol breakdowns that translated whitepaper-level content into readable summaries for non-technical readers.",
      "Tracked narrative shifts across Twitter, Discord, and research forums to understand how sentiment moves before price does.",
      "Built structured research frameworks for evaluating new projects: team, token design, community health, and documentation quality.",
    ],
    outcome:
      "Developed a repeatable research and content workflow that can be deployed immediately for any Web3 team needing ecosystem clarity.",
  },
  {
    title: "Community Infrastructure Design",
    category: "Portfolio Work · Discord & Telegram",
    period: "2023 – Present",
    type: "Remote / Community",
    context:
      "Most Web3 communities are not communities—they are announcement channels with comment sections. The difference between a community that retains members and one that hemorrhages them is structural. I studied this structure and built the skillset to fix it.",
    whatIDid: [
      "Designed Discord server architectures: channel hierarchies, role structures, and onboarding flows that reduce confusion for new members.",
      "Implemented Wick Bot, Rose Bot, and Collab.Land configurations for automated moderation and token-gated access control.",
      "Created welcome and onboarding message sequences that orient new members without requiring manual mod effort.",
      "Developed community health tracking systems: monitoring sentiment, engagement drop-off points, and spam influx.",
    ],
    outcome:
      "Proven ability to build community infrastructure from scratch or audit and repair broken systems for existing Web3 projects.",
  },
  {
    title: "Narrative & Content Development",
    category: "Portfolio Work · Threads & Explainers",
    period: "2024 – Present",
    type: "Remote / Content",
    context:
      "Twitter threads are the primary communication tool in Web3. A project's ability to retain followers and convert them to users is almost entirely determined by the quality of its content. I specialize in making technical ideas readable without making them wrong.",
    whatIDid: [
      "Wrote Twitter thread frameworks for DePIN, RWA, and AI-adjacent protocols—structured for retention, not just reach.",
      "Produced explainer content that breaks down token mechanisms, governance processes, and protocol architecture for general audiences.",
      "Developed content calendars and narrative arcs that build community understanding progressively over time.",
      "Translated technical documentation into community-facing announcements that reduce confusion and support questions.",
    ],
    outcome:
      "Positioned as a reliable translator between technical Web3 teams and the general crypto-aware public.",
  },
  {
    title: "Operational Coordination in Distributed Teams",
    category: "Portfolio Work · Async Operations",
    period: "2023 – Present",
    type: "Remote / Operations",
    context:
      "Decentralized teams fail at coordination, not at building. Async communication, timezone fragmentation, and unclear ownership of tasks create operational paralysis. I understand this failure mode and know how to reduce it.",
    whatIDid: [
      "Maintained structured async communication workflows using Notion, Discord, and Telegram to keep distributed contributors aligned.",
      "Organized research outputs, community updates, and content drafts into searchable, shareable documentation systems.",
      "Supported team coordination tasks: tracking deliverables, flagging blockers, and ensuring information reached the right people at the right time.",
      "Operated independently across different time zones without requiring synchronous check-ins or micromanagement.",
    ],
    outcome:
      "Demonstrated that Web3 operations can run cleanly when information flow is treated as infrastructure, not an afterthought.",
  },
];

const Web3ExperiencePage = () => {
  return (
    <div className="relative">
      {/* Hero Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,_hsl(170_60%_30%_/_0.25)_0%,_transparent_55%)]" />

      {/* Header */}
      <section className="page-header">
        <p className="text-emerald-400 uppercase text-xs font-medium tracking-wide mb-3">
          Web3 CV · Detailed View
        </p>
        <h1 className="page-title">
          Web3{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
            Experience
          </span>
        </h1>
        <p className="page-subtitle">
          Web3 hires thinking, not credentials. Below is a breakdown of how I think, what I've built, and why it matters to your team.
        </p>
      </section>

      {/* Profile Summary */}
      <section className="pb-8">
        <div className="section-container max-w-3xl">
          <div className="rounded-2xl border border-emerald-500/20 bg-card/40 backdrop-blur-sm p-6 space-y-3">
            <h2 className="text-sm font-heading font-bold text-emerald-400 uppercase tracking-wide">
              Extensive Web3 Professional Profile
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I operate within decentralized ecosystems where clarity, communication, and coordination are critical.
              My work focuses on supporting Web3 teams through research, narrative development, community structure,
              and operational execution. This role bridges technical ideas with human understanding.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {["Research & Ecosystem Analysis", "Community Infrastructure", "Narrative & Content", "Operational Coordination", "Async-Native"].map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-20">
        <div className="section-container max-w-3xl">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-3 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 via-emerald-500/50 to-transparent" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-10 md:pl-16 animate-slide-up"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  {/* Timeline Dot */}
                  <div
                    className="absolute left-2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-background transition-all duration-300 top-5"
                    style={{ boxShadow: "0 0 16px hsl(170 80% 45% / 0.5)" }}
                  />

                  {/* Card */}
                  <div className="relative overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur-sm p-5 transition-all duration-300 hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-[0_8px_32px_hsl(170_80%_45%_/_0.15)]">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <p className="text-[10px] font-medium text-emerald-400 uppercase tracking-wide mb-1">
                          {exp.category}
                        </p>
                        <h3 className="text-lg font-heading font-bold">{exp.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-card/80 border border-border">
                          <MapPin className="w-3 h-3" />
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Context — Why this work mattered */}
                    <div className="mb-4 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/15">
                      <p className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wide mb-1">
                        Context
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{exp.context}</p>
                    </div>

                    {/* What I Did */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-foreground mb-2">What I Did:</h4>
                      <ul className="space-y-2">
                        {exp.whatIDid.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <Zap className="w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcome */}
                    <div className="pt-3 border-t border-border/50">
                      <p className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wide mb-1">
                        Outcome
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{exp.outcome}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Principles */}
          <div className="mt-12 rounded-2xl border border-emerald-500/20 bg-card/40 backdrop-blur-sm p-6">
            <h3 className="text-sm font-heading font-bold mb-4">Web3 Work Principles</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Clarity over hype",
                "Structure over noise",
                "Long-term trust over short-term attention",
                "Communication as core infrastructure",
              ].map((principle, index) => (
                <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                  {principle}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground text-sm mb-4">Building something in Web3?</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://t.me/BIG_CQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow-[0_4px_16px_hsl(170_80%_45%_/_0.35)] hover:scale-[1.02] hover:brightness-110"
              >
                Hire Me on Telegram
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link to="/skills" className="btn-secondary">
                View Skills
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Web3ExperiencePage;
