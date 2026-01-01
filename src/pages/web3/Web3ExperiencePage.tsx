import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Aptos Labs",
    role: "Content & Research Contributor",
    period: "2024",
    type: "Remote (Ecosystem)",
    description: "Contributed to ecosystem content and research for the Aptos Layer 1 blockchain.",
    responsibilities: [
      "Created educational content explaining Aptos technology",
      "Researched ecosystem developments and summarized findings",
      "Supported community understanding of technical concepts",
      "Translated complex protocol information for broader audiences",
    ],
  },
  {
    company: "Elliptic",
    role: "Research & Content Support",
    period: "2024",
    type: "Remote (Learning Role)",
    description: "Blockchain analytics and compliance research support.",
    responsibilities: [
      "Assisted with research on blockchain analytics topics",
      "Supported content formatting and documentation",
      "Learned compliance and risk analysis frameworks",
      "Organized research findings and summaries",
    ],
  },
  {
    company: "Fireblocks",
    role: "Community & Content Assistant",
    period: "2023-2024",
    type: "Remote (Learning Role)",
    description: "Digital asset infrastructure platform community and content support.",
    responsibilities: [
      "Assisted with community engagement and user support",
      "Helped format and organize technical documentation",
      "Supported communication workflows",
      "Tracked community feedback and questions",
    ],
  },
  {
    company: "Anchorage Digital",
    role: "Operations Support Volunteer",
    period: "2023",
    type: "Remote (Volunteer)",
    description: "Institutional crypto platform operations and coordination support.",
    responsibilities: [
      "Supported administrative and operational tasks",
      "Assisted with documentation and information organization",
      "Learned institutional-grade crypto operations workflows",
      "Contributed to coordination and tracking efforts",
    ],
  },
];

const Web3ExperiencePage = () => {
  return (
    <div className="relative">
      {/* Hero Glow - Web3 themed */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,_hsl(170_60%_30%_/_0.25)_0%,_transparent_55%)]" />

      {/* Header */}
      <section className="page-header">
        <h1 className="page-title">
          Web3 <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">Experience</span>
        </h1>
        <p className="page-subtitle">
          Real ecosystem work across research, content, community, and coordination in decentralized environments.
        </p>
      </section>

      {/* Timeline */}
      <section className="pb-20">
        <div className="section-container max-w-3xl">
          <div className="relative">
            {/* Timeline Line - Web3 themed */}
            <div className="absolute left-3 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 via-emerald-500/50 to-transparent" />

            {/* Experience Cards */}
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-10 md:pl-16 animate-slide-up"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  {/* Timeline Dot - Web3 themed */}
                  <div className="absolute left-2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-background transition-all duration-300 top-5" style={{ boxShadow: "0 0 16px hsl(170 80% 45% / 0.5)" }} />

                  {/* Card */}
                  <div className="relative overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur-sm p-5 transition-all duration-300 hover:border-emerald-500/40 hover:-translate-y-1">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-lg font-heading font-bold">{exp.role}</h3>
                        <p className="text-emerald-400 font-medium text-sm">{exp.company}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-card/80 border border-border">
                          <MapPin className="w-3 h-3" />
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-3">{exp.description}</p>

                    {/* Responsibilities */}
                    <div>
                      <h4 className="text-xs font-medium text-foreground mb-2">Key Contributions:</h4>
                      <ul className="grid sm:grid-cols-2 gap-1.5">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <Briefcase className="w-3 h-3 text-emerald-400 mt-0.5 flex-shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground text-sm mb-4">
              Building something in Web3?
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow-[0_4px_16px_hsl(170_80%_45%_/_0.35)] hover:scale-[1.02] hover:brightness-110">
                Let's Talk
                <ArrowRight className="w-4 h-4" />
              </Link>
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
