import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const skillCategories = [
  {
    title: "Administrative & Operations",
    icon: "📋",
    skills: [
      { name: "Virtual Assistance", level: 95 },
      { name: "Task & Workflow Management", level: 90 },
      { name: "Calendar & Inbox Management", level: 90 },
      { name: "Process Documentation", level: 85 },
      { name: "Meeting Coordination", level: 88 },
    ],
  },
  {
    title: "Data Entry & Research",
    icon: "📊",
    skills: [
      { name: "Data Validation & Entry", level: 95 },
      { name: "Spreadsheet Management", level: 90 },
      { name: "Record Keeping", level: 92 },
      { name: "Research & Analysis", level: 85 },
      { name: "Report Generation", level: 80 },
    ],
  },
  {
    title: "Communication & Support",
    icon: "💬",
    skills: [
      { name: "Customer Support", level: 90 },
      { name: "Email Communication", level: 95 },
      { name: "Community Moderation", level: 88 },
      { name: "Sentiment Analysis", level: 82 },
      { name: "Stakeholder Communication", level: 85 },
    ],
  },
  {
    title: "Digital Tools & Productivity",
    icon: "⚙️",
    skills: [
      { name: "Google Workspace", level: 95 },
      { name: "Project Management Tools", level: 90 },
      { name: "Communication Platforms", level: 92 },
      { name: "Documentation Tools", level: 88 },
      { name: "CRM Systems", level: 80 },
    ],
  },
];

const tools = [
  { name: "Google Workspace", icon: "📧" },
  { name: "Notion", icon: "📝" },
  { name: "Trello", icon: "📌" },
  { name: "Asana", icon: "✅" },
  { name: "Slack", icon: "💬" },
  { name: "Discord", icon: "🎮" },
  { name: "Telegram", icon: "📱" },
  { name: "Zoom", icon: "🎥" },
  { name: "Canva", icon: "🎨" },
  { name: "Microsoft Office", icon: "📊" },
  { name: "Airtable", icon: "📋" },
  { name: "Zapier", icon: "⚡" },
];

const web3Skills = [
  { name: "Community Management", description: "Discord/Telegram community moderation and engagement" },
  { name: "Blockchain Basics", description: "Understanding of blockchain fundamentals and ecosystems" },
  { name: "DeFi Operations", description: "Familiarity with decentralized finance protocols" },
  { name: "Web3 Communication", description: "Engaging with crypto-native audiences and terminology" },
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
          A comprehensive overview of my professional skills, tools, and competencies.
        </p>
      </section>

      {/* Skill Categories */}
      <section className="pb-16">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="glow-card glow-border p-6 space-y-6"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-heading font-bold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{skill.name}</span>
                        <span className="text-primary font-medium">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-bar-fill"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16 bg-card/50 border-y border-border">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Tools & Platforms
            </h2>
            <p className="text-muted-foreground">
              Software and platforms I use daily to deliver results
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-secondary/30 border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all text-center"
              >
                <span className="text-2xl">{tool.icon}</span>
                <span className="text-xs text-muted-foreground">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web3 Skills */}
      <section className="py-16">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Web3 & Blockchain Experience
            </h2>
            <p className="text-muted-foreground">
              Additional expertise in the blockchain and crypto space
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {web3Skills.map((skill, index) => (
              <div
                key={index}
                className="glow-card p-5 space-y-3 text-center"
              >
                <h4 className="font-heading font-semibold text-primary">{skill.name}</h4>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card/50 border-t border-border">
        <div className="section-container text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Ready to Put These Skills to Work?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            I'm available for remote roles in virtual assistance, data entry, operations support, and community management.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
