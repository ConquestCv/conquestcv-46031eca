import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Aptos Labs",
    role: "Ambassador",
    period: "Jan 2025 – Present",
    type: "Remote",
    description: "Representing and advocating for the Aptos blockchain ecosystem across global Web3 communities.",
    responsibilities: [
      "Represent Aptos Labs across global Web3 communities",
      "Promote ecosystem initiatives and onboard new users",
      "Assist with community campaigns, AMAs, and engagement activities",
      "Manage social interactions and feedback collection",
      "Report community sentiment and engagement trends",
      "Collaborate with internal teams and fellow ambassadors",
    ],
  },
  {
    company: "Elliptic",
    role: "Community Support Specialist",
    period: "Oct 2024 – Dec 2024",
    type: "Remote, Part-Time",
    description: "Provided community support for blockchain analytics and compliance solutions.",
    responsibilities: [
      "Moderated and managed Discord and Telegram communities",
      "Responded to user inquiries and support requests",
      "Maintained community engagement and professionalism",
      "Compiled weekly sentiment and activity reports using Google Sheets",
      "Assisted with AMAs and educational webinars",
    ],
  },
  {
    company: "Fireblocks",
    role: "Operations Assistant",
    period: "Jun 2024 – Aug 2024",
    type: "Remote, Full-Time",
    description: "Supported operational workflows for enterprise digital asset infrastructure.",
    responsibilities: [
      "Managed data entry and validation for digital asset transaction records",
      "Maintained accuracy across operational datasets",
      "Tracked workflows using Trello",
      "Provided administrative and reporting support to operations teams",
      "Supported distributed teams across time zones",
    ],
  },
  {
    company: "Anchorage Digital",
    role: "Virtual Assistant & Content Coordinator",
    period: "Feb 2024 – May 2024",
    type: "Remote, Full-Time",
    description: "Virtual assistance and content coordination for crypto-native financial services.",
    responsibilities: [
      "Managed inboxes, scheduling, and administrative workflows",
      "Coordinated educational and social content",
      "Supported market and industry research",
      "Assisted with internal documentation and reporting",
    ],
  },
  {
    company: "PixelHub Studios",
    role: "Virtual Assistant & Operations Support",
    period: "Oct 2023 – Jan 2024",
    type: "Remote",
    description: "Operations and virtual assistance for a creative technology studio.",
    responsibilities: [
      "Managed scheduling and email correspondence",
      "Organized documents and operational files",
      "Conducted structured research for projects and content",
      "Maintained task trackers in Notion and Trello",
      "Assisted with content timelines and basic video editing",
    ],
  },
  {
    company: "Lyfe Marketing",
    role: "Community & Customer Support Assistant",
    period: "Jul 2023 – Sep 2023",
    type: "Remote, Part-Time",
    description: "Community management and customer support for digital marketing services.",
    responsibilities: [
      "Provided chat and email support to 1,000+ clients",
      "Moderated community forums",
      "Prepared customer support documentation",
      "Assisted with onboarding and engagement reporting",
    ],
  },
  {
    company: "Global Digital Services",
    role: "Virtual Assistant / Admin Support",
    period: "Apr 2023 – Jun 2023",
    type: "Remote",
    description: "General virtual assistance and administrative support.",
    responsibilities: [
      "Managed inboxes, scheduling, and communications",
      "Supported multiple clients and projects",
      "Assisted with document formatting and presentations",
      "Conducted research and compiled decision-support reports",
    ],
  },
];

const ExperiencePage = () => {
  return (
    <div className="relative">
      <div className="hero-glow" />

      {/* Header */}
      <section className="page-header">
        <h1 className="page-title">
          Work <span className="text-gradient">Experience</span>
        </h1>
        <p className="page-subtitle">
          A timeline of my professional journey across remote operations, virtual assistance, and community support roles.
        </p>
      </section>

      {/* Timeline */}
      <section className="pb-20">
        <div className="section-container max-w-3xl">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-3 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {/* Experience Cards */}
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-10 md:pl-16 animate-slide-up"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="timeline-dot top-5" />

                  {/* Card */}
                  <div className="interactive-card">
                    {/* Header */}
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

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-3">{exp.description}</p>

                    {/* Responsibilities */}
                    <div>
                      <h4 className="text-xs font-medium text-foreground mb-2">Key Responsibilities:</h4>
                      <ul className="grid sm:grid-cols-2 gap-1.5">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <Briefcase className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
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
              Interested in working together?
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
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
