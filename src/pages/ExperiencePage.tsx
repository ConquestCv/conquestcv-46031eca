import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Remote Team",
    role: "Digital Operations Assistant",
    period: "Feb 2025 – Mar 2025",
    type: "Remote",
    description: "Provided operational and administrative support for a remote team.",
    responsibilities: [
      "Managed inboxes, scheduling, and task coordination",
      "Assisted with data entry, documentation, and reporting",
      "Supported content coordination and workflow execution",
      "Provided operational support for distributed team",
    ],
  },
  {
    company: "Learning Role",
    role: "Community & Content Support Intern",
    period: "May 2024 – Aug 2024",
    type: "Remote (Volunteer-Based)",
    description: "Volunteer-based learning role focused on community and content support.",
    responsibilities: [
      "Assisted with moderation of online communities on Discord and Telegram",
      "Responded to basic user questions and support messages",
      "Helped format content for community updates",
      "Assisted with engagement tracking using Google Sheets",
      "Supported announcements and coordination tasks",
    ],
  },
  {
    company: "Learning Role",
    role: "Operations & Virtual Assistance Intern",
    period: "Jan 2024 – Apr 2024",
    type: "Remote (Volunteer-Based)",
    description: "Volunteer-based learning role for operations and virtual assistance.",
    responsibilities: [
      "Supported daily administrative and digital operations tasks",
      "Assisted with inbox management, scheduling, and task follow-ups",
      "Performed data entry, documentation, and information organization",
      "Conducted online research and summarized findings",
      "Learned practical use of Google Workspace, Notion, and Trello",
    ],
  },
  {
    company: "Remote",
    role: "Digital Community Volunteer",
    period: "2023",
    type: "Remote (Volunteer)",
    description: "Assisted with online community moderation, feedback organization, and coordination support.",
    responsibilities: [
      "Assisted with community moderation",
      "Organized feedback and user data",
      "Supported coordination and event activities",
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
