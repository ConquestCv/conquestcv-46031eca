import { Link } from "react-router-dom";
import { ArrowRight, FileText, Radio, Users, Zap, MessageCircle, Settings2 } from "lucide-react";
import LiquidMeter from "@/components/LiquidMeter";

const categoryIcons = {
  content: FileText,
  research: Radio,
  community: Users,
  coordination: Zap,
  communication: MessageCircle,
  tools: Settings2,
};

const skillCategories = [
  {
    title: "Web3 Content & Narrative",
    iconKey: "content" as const,
    iconColor: "from-emerald-500 to-teal-600",
    description: "Bridging knowledge gaps, not just writing content.",
    skills: [
      { name: "Twitter Threads & Explainers", level: 88 },
      { name: "Documentation & Technical Writing", level: 85 },
      { name: "Educational Content", level: 90 },
      { name: "Protocol Explainers", level: 82 },
    ],
  },
  {
    title: "Web3 Research & Analysis",
    iconKey: "research" as const,
    iconColor: "from-cyan-500 to-blue-600",
    description: "Research that supports decisions, not academic exercises.",
    skills: [
      { name: "Protocol Breakdowns", level: 85 },
      { name: "Ecosystem Mapping", level: 80 },
      { name: "Trend & Narrative Tracking", level: 88 },
      { name: "Competitive Analysis", level: 82 },
    ],
  },
  {
    title: "Community & Coordination",
    iconKey: "community" as const,
    iconColor: "from-violet-500 to-purple-600",
    description: "Operational communication infrastructure, not just moderation.",
    skills: [
      { name: "Discord/Telegram Operations", level: 88 },
      { name: "Information Flow Management", level: 85 },
      { name: "Community Engagement", level: 82 },
      { name: "User Support & FAQs", level: 90 },
    ],
  },
  {
    title: "Cross-Team Communication",
    iconKey: "coordination" as const,
    iconColor: "from-amber-500 to-orange-600",
    description: "Reducing friction between devs, founders, and users.",
    skills: [
      { name: "Async Communication", level: 90 },
      { name: "Update Translation", level: 85 },
      { name: "Stakeholder Alignment", level: 80 },
      { name: "Clear Written Communication", level: 92 },
    ],
  },
];

const tools = [
  { name: "Discord", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/discord.svg", isColored: false },
  { name: "Telegram", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/telegram.svg", isColored: false },
  { name: "Notion", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/notion.svg", isColored: false },
  { name: "Twitter/X", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg", isColored: false },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", isColored: false },
  { name: "Dune", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/dune.svg", isColored: false },
];

const Web3SkillsPage = () => {
  return (
    <div className="relative">
      {/* Hero Glow - Web3 themed */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,_hsl(170_60%_30%_/_0.25)_0%,_transparent_55%)]" />

      {/* Header */}
      <section className="page-header">
        <h1 className="page-title">
          Web3 <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">Skills</span>
        </h1>
        <p className="page-subtitle">
          Capabilities that reduce chaos and increase clarity in decentralized teams.
        </p>
      </section>

      {/* Skill Categories */}
      <section className="pb-12">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-5">
            {skillCategories.map((category, index) => {
              const IconComponent = categoryIcons[category.iconKey];
              return (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur-sm p-5 transition-all duration-300 hover:border-emerald-500/40 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.iconColor} flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-heading font-bold">{category.title}</h3>
                      <p className="text-xs text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mt-4">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="space-y-1.5">
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">{skill.name}</span>
                          <span className="text-emerald-400 font-medium">{skill.level}%</span>
                        </div>
                        <LiquidMeter level={skill.level} />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-12 border-y border-border/50">
        <div className="section-container">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-heading font-bold mb-2">
              Tools & Environments
            </h2>
            <p className="text-muted-foreground text-sm">
              Where I operate daily
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 max-w-2xl mx-auto">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card/50 border border-emerald-500/20 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all duration-300 text-center group cursor-pointer hover:-translate-y-1"
              >
                <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <img 
                    src={tool.logo} 
                    alt={tool.name}
                    className={`w-8 h-8 object-contain ${!tool.isColored ? 'dark:invert' : ''}`}
                  />
                </div>
                <span className="text-[10px] text-muted-foreground font-medium leading-tight">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="section-container text-center">
          <h2 className="text-xl md:text-2xl font-heading font-bold mb-2">
            Need These Skills on Your Team?
          </h2>
          <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
            I help Web3 teams communicate, research, and coordinate clearly.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow-[0_4px_16px_hsl(170_80%_45%_/_0.35)] hover:scale-[1.02] hover:brightness-110">
              Let's Talk
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/experience" className="btn-secondary">
              View Experience
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Web3SkillsPage;
