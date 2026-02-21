import { Link } from "react-router-dom";
import { ArrowRight, ClipboardList, BarChart3, MessageCircle, Settings2, Sparkles, Code } from "lucide-react";
import LiquidMeter from "@/components/LiquidMeter";

const categoryIcons = {
  productivity: ClipboardList,
  multimedia: Sparkles,
  data: BarChart3,
  communication: MessageCircle,
  dev: Code,
  web3: Settings2,
};

const skillCategories = [
  {
    title: "Productivity & Operations",
    iconKey: "productivity" as const,
    iconColor: "from-violet-500 to-purple-600",
    skills: [
      { name: "Google Workspace (Docs, Sheets, Forms, Drive)", level: 92 },
      { name: "Notion", level: 88 },
      { name: "Trello", level: 85 },
      { name: "Executive Scheduling & Inbox Management", level: 90 },
      { name: "Cross-Border Team Coordination", level: 85 },
    ],
  },
  {
    title: "Multimedia Production",
    iconKey: "multimedia" as const,
    iconColor: "from-pink-500 to-rose-600",
    skills: [
      { name: "After Effects", level: 78 },
      { name: "CapCut", level: 88 },
      { name: "Canva", level: 90 },
      { name: "OBS Studio (Live Streaming)", level: 82 },
      { name: "Figma", level: 75 },
    ],
  },
  {
    title: "Data Architecture & Reporting",
    iconKey: "data" as const,
    iconColor: "from-cyan-500 to-blue-600",
    skills: [
      { name: "Google Sheets (Dashboards & Formulas)", level: 90 },
      { name: "Automated Reporting Systems", level: 85 },
      { name: "Engagement Tracking Dashboards", level: 88 },
      { name: "Data Entry & Documentation", level: 92 },
    ],
  },
  {
    title: "Communication & Support",
    iconKey: "communication" as const,
    iconColor: "from-emerald-500 to-teal-600",
    skills: [
      { name: "Discord (Admin/Mod)", level: 88 },
      { name: "Telegram (Admin/Mod)", level: 88 },
      { name: "Slack", level: 85 },
      { name: "Technical Documentation", level: 85 },
      { name: "Customer Support (Chat/Email)", level: 90 },
    ],
  },
  {
    title: "Development Fundamentals",
    iconKey: "dev" as const,
    iconColor: "from-amber-500 to-orange-600",
    skills: [
      { name: "HTML5", level: 78 },
      { name: "CSS3", level: 75 },
      { name: "JavaScript (Core Fundamentals)", level: 70 },
    ],
  },
  {
    title: "Web3 / Crypto",
    iconKey: "web3" as const,
    iconColor: "from-indigo-500 to-blue-600",
    skills: [
      { name: "Wallet Management (MetaMask/Trust)", level: 85 },
      { name: "Blockchain Explorers", level: 82 },
      { name: "CEX/DEX UI Navigation", level: 80 },
      { name: "DeFi Protocols & DAO Governance", level: 78 },
    ],
  },
];

const tools = [
  { name: "Google Workspace", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg", isColored: true },
  { name: "Notion", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/notion.svg", isColored: false },
  { name: "Trello", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg", isColored: true },
  { name: "Discord", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/discord.svg", isColored: false },
  { name: "Telegram", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/telegram.svg", isColored: false },
  { name: "Slack", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/slack.svg", isColored: false },
  { name: "After Effects", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg", isColored: true },
  { name: "CapCut", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/capcut.svg", isColored: false },
  { name: "Canva", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg", isColored: true },
  { name: "OBS Studio", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/obsstudio.svg", isColored: false },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", isColored: true },
  { name: "MetaMask", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/metamask.svg", isColored: false },
];

const SkillsPage = () => {
  return (
    <div className="relative">
      <div className="hero-glow" />

      <section className="page-header">
        <h1 className="page-title">
          Skills & <span className="text-gradient">Technical Toolkit</span>
        </h1>
        <p className="page-subtitle">
          A comprehensive overview of my professional skills across digital operations, multimedia production, data architecture, and Web3 integration.
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

      {/* Tools Grid */}
      <section className="py-12 border-y border-border/50">
        <div className="section-container">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-heading font-bold mb-2">
              Tools & Platforms
            </h2>
            <p className="text-muted-foreground text-sm">
              Software I use daily to deliver results
            </p>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 gap-4 max-w-3xl mx-auto">
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
            I'm available for remote roles in digital operations, multimedia production, data architecture, and more.
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
