import { Link } from "react-router-dom";
import { ArrowRight, ClipboardList, BarChart3, MessageCircle, Settings2, Sparkles, Code } from "lucide-react";
import LiquidMeter from "@/components/LiquidMeter";

// Icons for each skill category
const categoryIcons = {
  admin: ClipboardList,
  ai: Sparkles,
  content: BarChart3,
  communication: MessageCircle,
  tech: Code,
  tools: Settings2,
};

const skillCategories = [
  {
    title: "Digital Operations & Virtual Assistance",
    iconKey: "admin" as const,
    iconColor: "from-violet-500 to-purple-600",
    skills: [
      { name: "Remote Virtual Assistance", level: 95 },
      { name: "Inbox & Calendar Management", level: 92 },
      { name: "Data Entry & Validation", level: 95 },
      { name: "Documentation & Reporting", level: 90 },
      { name: "SOP Adherence & Operations", level: 88 },
    ],
  },
  {
    title: "AI & Automation Skills",
    iconKey: "ai" as const,
    iconColor: "from-pink-500 to-rose-600",
    skills: [
      { name: "AI Tools for Productivity", level: 92 },
      { name: "AI-Assisted Writing", level: 90 },
      { name: "Prompt Engineering", level: 85 },
      { name: "AI Research & Summarization", level: 88 },
      { name: "AI-Assisted Design Workflows", level: 80 },
    ],
  },
  {
    title: "Content, Media & Creative",
    iconKey: "content" as const,
    iconColor: "from-cyan-500 to-blue-600",
    skills: [
      { name: "Content Coordination", level: 90 },
      { name: "Short-Form Video Editing", level: 85 },
      { name: "Motion Graphics", level: 78 },
      { name: "Graphic Design", level: 82 },
      { name: "Visual Storytelling", level: 85 },
    ],
  },
  {
    title: "Community & Customer Support",
    iconKey: "communication" as const,
    iconColor: "from-emerald-500 to-teal-600",
    skills: [
      { name: "Discord/Telegram Moderation", level: 92 },
      { name: "Customer Support", level: 90 },
      { name: "Community Engagement", level: 88 },
      { name: "AMA Coordination", level: 85 },
      { name: "Sentiment Tracking", level: 82 },
    ],
  },
  {
    title: "Tech & Web Skills",
    iconKey: "tech" as const,
    iconColor: "from-amber-500 to-orange-600",
    skills: [
      { name: "HTML, CSS, JavaScript", level: 80 },
      { name: "Portfolio & Landing Pages", level: 85 },
      { name: "GitHub Fundamentals", level: 75 },
      { name: "Google Analytics Basics", level: 78 },
      { name: "No-Code/Low-Code Tools", level: 88 },
    ],
  },
  {
    title: "Web3 & Blockchain",
    iconKey: "tools" as const,
    iconColor: "from-indigo-500 to-violet-600",
    skills: [
      { name: "Blockchain Ecosystems", level: 85 },
      { name: "Wallets & Transactions", level: 82 },
      { name: "DeFi Basics", level: 78 },
      { name: "Community Onboarding", level: 90 },
      { name: "Ambassador Representation", level: 88 },
    ],
  },
];

const tools = [
  { name: "Google Workspace", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg", isColored: true },
  { name: "Notion", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/notion.svg", isColored: false },
  { name: "Trello", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg", isColored: true },
  { name: "Discord", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/discord.svg", isColored: false },
  { name: "Telegram", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/telegram.svg", isColored: false },
  { name: "Twitter/X", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg", isColored: false },
  { name: "Canva", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg", isColored: true },
  { name: "CapCut", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/capcut.svg", isColored: false },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", isColored: true },
  { name: "After Effects", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg", isColored: true },
  { name: "OBS Studio", logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/obsstudio.svg", isColored: false },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", isColored: false },
];

const SkillsPage = () => {
  return (
    <div className="relative">
      <div className="hero-glow" />

      {/* Header */}
      <section className="page-header">
        <h1 className="page-title">
          Skills & <span className="text-gradient">Expertise</span>
        </h1>
        <p className="page-subtitle">
          A comprehensive overview of my professional skills, tools, and competencies across digital operations, AI, and Web3.
        </p>
      </section>

      {/* Skill Categories */}
      <section className="pb-12">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((category, index) => {
              const IconComponent = categoryIcons[category.iconKey];
              return (
                <div
                  key={index}
                  className="interactive-card"
                >
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
            I'm available for remote roles in virtual assistance, digital operations, community support, and more.
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
