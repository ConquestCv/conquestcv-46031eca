import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Aptos Labs",
    role: "Ambassador",
    period: "Jan 2025 – Present",
    type: "Remote",
    description: "Representing and advocating for the Aptos blockchain ecosystem.",
    responsibilities: [
      "Community engagement and education",
      "Event coordination and outreach",
      "Content creation and social advocacy",
      "Ecosystem feedback and reporting",
    ],
  },
  {
    company: "Elliptic",
    role: "Community Support Specialist",
    period: "Oct 2024 – Dec 2024",
    type: "Remote",
    description: "Provided community support for blockchain analytics and compliance solutions.",
    responsibilities: [
      "User inquiry handling and resolution",
      "Community moderation and engagement",
      "Documentation and FAQ updates",
      "Sentiment analysis and reporting",
    ],
  },
  {
    company: "Fireblocks",
    role: "Operations Assistant",
    period: "Jun 2024 – Aug 2024",
    type: "Remote",
    description: "Supported operational workflows for enterprise digital asset infrastructure.",
    responsibilities: [
      "Administrative task management",
      "Data entry and validation",
      "Process documentation",
      "Team coordination support",
    ],
  },
  {
    company: "Anchorage Digital",
    role: "VA & Content Coordinator",
    period: "Feb 2024 – May 2024",
    type: "Remote",
    description: "Virtual assistance and content coordination for crypto-native financial services.",
    responsibilities: [
      "Inbox and calendar management",
      "Content scheduling and coordination",
      "Research and data compilation",
      "Cross-team communication support",
    ],
  },
  {
    company: "PixelHub Studios",
    role: "VA & Operations Support",
    period: "Oct 2023 – Jan 2024",
    type: "Remote",
    description: "Operations and virtual assistance for a creative technology studio.",
    responsibilities: [
      "Project coordination and tracking",
      "Client communication support",
      "File management and organization",
      "Meeting scheduling and notes",
    ],
  },
  {
    company: "Lyfe Marketing",
    role: "Community & Customer Support",
    period: "Jul 2023 – Sep 2023",
    type: "Remote",
    description: "Community management and customer support for digital marketing services.",
    responsibilities: [
      "Customer inquiry response",
      "Social media community management",
      "Support ticket handling",
      "Customer feedback documentation",
    ],
  },
  {
    company: "Global Digital Services",
    role: "VA/Admin Support",
    period: "Apr 2023 – Jun 2023",
    type: "Remote",
    description: "General virtual assistance and administrative support.",
    responsibilities: [
      "Email management and filtering",
      "Data entry and spreadsheet work",
      "Research and information gathering",
      "General administrative tasks",
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
      <section className="pb-24">
        <div className="section-container max-w-4xl">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {/* Experience Cards */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-12 md:pl-20 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-2 md:left-6 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-glow-sm" />

                  {/* Card */}
                  <div className="glow-card glow-border p-6 space-y-4">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-heading font-bold">{exp.role}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="stat-badge text-xs">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                        <span className="stat-badge text-xs">
                          <MapPin className="w-3 h-3" />
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground">{exp.description}</p>

                    {/* Responsibilities */}
                    <div className="pt-2">
                      <h4 className="text-sm font-medium text-foreground mb-2">Key Responsibilities:</h4>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Briefcase className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
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
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Interested in working together?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
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
