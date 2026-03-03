import { Link } from "react-router-dom";
import { ArrowRight, Phone, Database, MessageCircle, Settings2, Sparkles } from "lucide-react";
import LiquidMeter from "@/components/LiquidMeter";

const categoryIcons = {
  voip: Phone,
  crm: Database,
  communication: MessageCircle,
  productivity: Settings2,
  media: Sparkles,
};

const skillCategories = [
  {
    title: "VOIP & Dialers",
    iconKey: "voip" as const,
    iconColor: "from-violet-500 to-purple-600",
    skills: [
      { name: "Five9", level: 90 },
      { name: "RingCentral", level: 88 },
      { name: "8x8", level: 82 },
      { name: "Mojo Dialer", level: 80 },
    ],
  },
  {
    title: "CRM Systems",
    iconKey: "crm" as const,
    iconColor: "from-cyan-500 to-blue-600",
    skills: [
      { name: "Salesforce (Power User)", level: 92 },
      { name: "Zendesk", level: 88 },
      { name: "HubSpot", level: 85 },
      { name: "Microsoft Dynamics", level: 78 },
    ],
  },
  {
    title: "Communication Platforms",
    iconKey: "communication" as const,
    iconColor: "from-emerald-500 to-teal-600",
    skills: [
      { name: "Microsoft Teams", level: 90 },
      { name: "Slack", level: 88 },
      { name: "Zoom", level: 90 },
      { name: "Discord", level: 85 },
      { name: "Telegram", level: 85 },
    ],
  },
  {
    title: "Operational Productivity",
    iconKey: "productivity" as const,
    iconColor: "from-amber-500 to-orange-600",
    skills: [
      { name: "Google Workspace (Expert)", level: 95 },
      { name: "Notion", level: 88 },
      { name: "Trello", level: 85 },
      { name: "Microsoft Excel (Logic/Formulas)", level: 82 },
    ],
  },
  {
    title: "AI & Media",
    iconKey: "media" as const,
    iconColor: "from-pink-500 to-rose-600",
    skills: [
      { name: "AI-Assisted Productivity (Gemini/ChatGPT)", level: 90 },
      { name: "OBS Studio", level: 82 },
      { name: "Canva", level: 88 },
      { name: "CapCut", level: 85 },
    ],
  },
];

const performanceMetrics = [
  { label: "QA Score", value: "99%", description: "Consistent quality assurance across all shifts" },
  { label: "TSR Increase", value: "25%", description: "Transfer Success Rate improvement" },
  { label: "Log-in Adherence", value: "100%", description: "Perfect punctuality record for EST shifts" },
  { label: "Daily Dials", value: "200+", description: "High-volume outbound call capacity" },
];

const tools = [
  { name: "Salesforce", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg", isColored: true },
  { name: "Google Workspace", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg", isColored: true },
  { name: "HubSpot", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/hubspot.svg", isColored: false },
  { name: "Notion", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/notion.svg", isColored: false },
  { name: "Slack", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/slack.svg", isColored: false },
  { name: "Zoom", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/zoom.svg", isColored: false },
  { name: "Trello", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg", isColored: true },
  { name: "Discord", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/discord.svg", isColored: false },
  { name: "Canva", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg", isColored: true },
  { name: "OBS Studio", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/obsstudio.svg", isColored: false },
];

const SkillsPage = () => {
  return (
    <div className="relative">
      <div className="hero-glow" />

      <section className="page-header">
        <h1 className="page-title">
          Technical <span className="text-gradient">Toolkit</span>
        </h1>
        <p className="page-subtitle">
          Industry-standard software proficiency across VOIP, CRM, communication, and productivity platforms.
        </p>
      </section>

      {/* Skill Categories */}
      <section className="pb-12">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((category, index) => {
              const IconComponent = categoryIcons[category.iconKey];
              return (
                <div key={index} className="interactive-card">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.iconColor} flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-sm font-heading font-bold">{category.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="space-y-1.5">
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">{skill.name}</span>
                          <span className="text-primary font-medium">{skill.level}%</span>
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

      {/* Performance Metrics */}
      <section className="py-12 border-y border-border/50">
        <div className="section-container">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-heading font-bold mb-2">
              Performance <span className="text-gradient">Metrics</span>
            </h2>
            <p className="text-muted-foreground text-sm">
              Quantified results from high-volume BPO operations
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="interactive-card text-center !py-5">
                <p className="text-2xl md:text-3xl font-heading font-bold text-primary mb-1">{metric.value}</p>
                <p className="text-sm font-medium text-foreground mb-1">{metric.label}</p>
                <p className="text-[10px] text-muted-foreground">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-12">
        <div className="section-container">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-heading font-bold mb-2">
              Tools & Platforms
            </h2>
            <p className="text-muted-foreground text-sm">
              Software I use daily to deliver results
            </p>
          </div>

          <div className="grid grid-cols-5 sm:grid-cols-5 gap-4 max-w-2xl mx-auto">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card/50 border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 text-center group cursor-pointer hover:-translate-y-1"
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
            Ready to Put These Skills to Work?
          </h2>
          <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
            Available for immediate placement in lead qualification, BPO operations, and outbound sales roles.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-primary">
              Let's Connect
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

export default SkillsPage;
