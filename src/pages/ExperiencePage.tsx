import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Outsource Global",
    role: "Customer Success Specialist",
    period: "Nov 2024 – Oct 2025",
    type: "Remote",
    summary:
      "Owned end-to-end resolution for a high-volume support queue, with structured Zendesk documentation and 95%+ QA throughout the engagement.",
    achievements: [
      "Managed 50–70+ daily customer interactions across chat, voice and email — resolving complex platform and payment issues to closure.",
      "Reduced escalation rates by 20% through accurate first-touch diagnosis and proactive resolution paths.",
      "Maintained 95%+ QA performance with structured Zendesk documentation, macros and SOP adherence.",
      "Trained two junior agents on de-escalation tonality and ticket hygiene during ramp-up.",
    ],
    tags: ["Zendesk", "Voice + Chat", "Payments", "QA Lead"],
  },
  {
    company: "Turing",
    role: "Support Operations Associate",
    period: "Sept 2023 – Aug 2024",
    type: "Remote",
    summary:
      "Marketplace support across a global customer base — focused on workflow optimisation, data accuracy in Salesforce, and shrinking AHT without sacrificing CSAT.",
    achievements: [
      "Handled 60–80+ daily global support interactions in a marketplace environment with multi-region context-switching.",
      "Reduced Average Handle Time (AHT) by 12% by optimising conversation flows, response templates and triage routing.",
      "Improved Salesforce data accuracy by 95%+, reducing follow-up gaps and re-contact rates by 20%.",
      "Authored internal SOPs for common edge cases — adopted across the wider support pod.",
    ],
    tags: ["Salesforce", "Marketplace", "AHT", "SOPs"],
  },
  {
    company: "Flutterwave",
    role: "Digital Operations Intern",
    period: "Jan 2023 – Jun 2023",
    type: "Remote · Internship",
    summary:
      "Operations support for distributed teams — focused on visibility, documentation and lightweight workflow automation.",
    achievements: [
      "Built Google Sheets dashboards that improved task visibility by 25% across the operations pod.",
      "Streamlined internal documentation and workflow consistency across remote teams.",
      "Supported cross-departmental coordination and meeting hygiene for senior operations leads.",
    ],
    tags: ["Operations", "Sheets", "Documentation"],
  },
];

const ExperiencePage = () => {
  return (
    <div>
      <section className="page-header">
        <div className="section-container">
          <span className="eyebrow mb-4">Experience</span>
          <h1 className="page-title mt-4">
            Two years of high-volume,
            <br />
            <span className="text-muted-foreground font-normal">
              high-quality support work.
            </span>
          </h1>
          <p className="page-subtitle mt-4">
            Roles at Outsource Global, Turing and Flutterwave — focused on
            resolution rates, QA performance, and clean operational handovers.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="relative pl-7">
              <div className="timeline-rail" />

              <div className="space-y-10">
                {experiences.map((exp, i) => (
                  <div
                    key={i}
                    className="relative animate-slide-up"
                    style={{ animationDelay: `${i * 0.06}s` }}
                  >
                    <div className="timeline-marker top-7" />

                    <div className="card-flat p-6 lg:p-7">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <span className="num-marker">
                            0{i + 1}.
                          </span>
                          <h3 className="text-xl font-semibold mt-1">
                            {exp.role}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-0.5">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="stat-badge">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </span>
                          <span className="stat-badge">
                            <MapPin className="w-3 h-3" />
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-foreground/85 leading-relaxed mb-5">
                        {exp.summary}
                      </p>

                      <ul className="space-y-2.5 mb-5">
                        {exp.achievements.map((a, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm text-muted-foreground"
                          >
                            <span className="font-mono text-[10px] text-accent mt-1.5 flex-shrink-0">
                              ▸
                            </span>
                            <span className="leading-relaxed">{a}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                        {exp.tags.map((t) => (
                          <span key={t} className="mono-pill">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border">
        <div className="section-container text-center max-w-2xl">
          <h2 className="text-2xl font-bold mb-3">
            Want the full version?
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            Happy to share the detailed CV, references, or jump on a quick call.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-primary">
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/skills" className="btn-secondary">
              View Skills
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
