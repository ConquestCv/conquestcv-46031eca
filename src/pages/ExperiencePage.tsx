import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Briefcase, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "Tek Experts (International Operations Hub)",
    role: "Technical Support & Communication Specialist",
    period: "Sept 2024 – Nov 2025",
    type: "Remote",
    description: "Orchestrated complex multi-channel communication workflows for high-value North American stakeholders in a global BPO environment.",
    achievements: [
      "Strategic Stakeholder Management: Ensured 100% alignment with global professional standards and communication etiquette for North American clients",
      "Operational Reporting: Directed comprehensive documentation of critical performance metrics, aligning daily output with aggressive growth targets",
      "Data Integrity & Compliance: Managed verification logs ensuring full compliance with international data handling standards — reduced data errors by 15%",
      "Systems Proficiency: Utilized advanced CRM systems to resolve complex client inquiries with surgical precision, maintaining detailed audit trails",
      "Process Optimization: Implemented logic-based tracking systems resulting in a 20% improvement in workflow visibility for remote project managers",
      "Quality Assurance: Consistently achieved top-tier rankings in internal QA audits through superior verbal clarity and strict SOP adherence",
    ],
    badges: ["Crisis Management"],
    crisisNote: "Managed critical escalation events with clear, logical communication — de-escalated high-stakes situations while maintaining stakeholder confidence and compliance integrity.",
  },
  {
    company: "Teleperformance (Global Outbound Operations)",
    role: "Lead Qualification Specialist (US Insurance Division)",
    period: "Jan 2024 – Aug 2024",
    type: "Remote",
    description: "High-volume outbound dialing campaigns for US Final Expense and Fintech sectors, converting cold leads into qualified warm transfers.",
    achievements: [
      "Outbound Lead Discovery: Managed 200+ daily dials identifying high-intent prospects through strategic discovery questions",
      "Tone & Rapport Mastery: Utilized American English tonality and professional rebuttals — achieved a 25% increase in successful Warm Transfers",
      "Eligibility Deep-Dives: Conducted rigorous screening verifying residence, DOB, and checking/savings account compatibility for automated premiums",
      "Script Engineering: Identified funnel bottlenecks and collaborated with management to refine scripts and 'Objection Cheat Sheets'",
      "Cold-to-Warm Conversion: Re-engaged forgotten-enquiry leads using social proof and legacy-framing techniques",
      "KPI Achievement: Exceeded monthly transfer quotas by an average of 15% with a neutral, professional accent for the US demographic",
    ],
  },
  {
    company: "Global Remote Hub (International Sales Projects)",
    role: "Digital Operations & Sales Support Intern",
    period: "Jan 2023 – Dec 2023",
    type: "Remote (Internship)",
    description: "Intensive year-long internship focusing on US/UK communication standards and high-volume digital sales support foundations.",
    achievements: [
      "Foundational Training: Immersive US/UK communication standards and high-volume digital sales support training",
      "Workflow Automation: Engineered reusable documentation templates and automated response systems — improved team efficiency by 30%",
      "Market Research: Deep-dive research into financial ecosystem structures and user engagement patterns for executive-level strategies",
      "Digital Organization: Managed executive inbox workflows and cross-departmental scheduling across global time zones",
      "Technical Dashboarding: Developed custom task-tracking dashboards in Google Sheets and Trello for project milestone management",
      "Rapport Building: Developed foundational trust-building techniques over digital channels for high-stakes outbound calling",
    ],
  },
];

const workPrinciples = [
  "Every lead receives surgical-grade verification before hand-off — zero waste tolerance",
  "Maintain 99% QA standard regardless of call volume or shift length",
  "Proactive script iteration based on real-time conversion data",
  "100% log-in adherence synced to international business hours",
];

const ExperiencePage = () => {
  return (
    <div className="relative">
      <div className="hero-glow" />

      <section className="page-header">
        <h1 className="page-title">
          Professional <span className="text-gradient">Experience</span>
        </h1>
        <p className="page-subtitle">
          A proven track record in high-volume BPO operations, US-market lead qualification, and international stakeholder management.
        </p>
      </section>

      <section className="pb-12">
        <div className="section-container max-w-3xl">
          <div className="relative">
            <div className="absolute left-3 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-10 md:pl-16 animate-slide-up"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="timeline-dot top-5" />

                  <div className="interactive-card">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-lg font-heading font-bold">{exp.role}</h3>
                        <p className="text-primary font-medium text-sm">{exp.company}</p>
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

                    <p className="text-muted-foreground text-sm mb-3">{exp.description}</p>

                    {/* Badges */}
                    {exp.badges && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {exp.badges.map((badge, idx) => (
                          <Badge key={idx} variant="outline" className="text-[10px] border-amber-500/40 text-amber-600 dark:text-amber-400 bg-amber-500/10">
                            <AlertTriangle className="w-3 h-3 mr-1" />
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    )}

                    {exp.crisisNote && (
                      <div className="mb-3 p-2.5 rounded-lg bg-amber-500/5 border border-amber-500/20">
                        <p className="text-xs text-muted-foreground italic">{exp.crisisNote}</p>
                      </div>
                    )}

                    <div>
                      <h4 className="text-xs font-medium text-foreground mb-2">Key Achievements:</h4>
                      <ul className="space-y-1.5">
                        {exp.achievements.map((ach, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <Briefcase className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                            {ach}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Operational Commitments */}
      <section className="py-12 border-t border-border/50">
        <div className="section-container max-w-3xl">
          <h2 className="text-xl md:text-2xl font-heading font-bold mb-4">
            Operational Commitments
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {workPrinciples.map((principle, index) => (
              <div key={index} className="interactive-card !py-3 !px-4">
                <p className="text-xs text-muted-foreground">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="section-container text-center">
          <p className="text-muted-foreground text-sm mb-4">
            Ready to bring veteran-level qualification to your next campaign?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-primary">
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/skills" className="btn-secondary">
              View My Skills
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
