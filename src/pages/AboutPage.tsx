import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import profileImage from "@/assets/conquest-profile.jpg";

const valueProps = [
  "Highly independent and self-directed",
  "Strong attention to detail and execution accuracy",
  "Comfortable with ambiguity and fast-changing priorities",
  "Excellent time management in remote environments",
  "Curious, resourceful, disciplined, and solution-oriented",
];

const interests = [
  { name: "Remote Work Systems", icon: "🌍" },
  { name: "Technology & Digital Tools", icon: "💻" },
  { name: "AI Productivity Tools", icon: "🤖" },
  { name: "Online Communities", icon: "👥" },
  { name: "Content & Media Creation", icon: "🎬" },
];

const AboutPage = () => {
  return (
    <div className="relative">
      <div className="hero-glow" />

      {/* Header */}
      <section className="page-header">
        <h1 className="page-title">
          About <span className="text-gradient">Me</span>
        </h1>
        <p className="page-subtitle">
          A tech-savvy digital professional passionate about supporting remote operations and building functional systems.
        </p>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image Side */}
            <div className="relative">
              <div className="sticky top-28">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
                  <div className="relative glow-card glow-border p-1.5 rounded-2xl max-w-sm mx-auto">
                    <img
                      src={profileImage}
                      alt="Aisiri Conquest Samuel"
                      className="w-full aspect-square object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-8">
              {/* Who I Am */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-heading font-bold">
                  Who I Am
                </h2>
                <div className="space-y-3 text-muted-foreground leading-relaxed text-sm">
                  <p>
                    I'm <span className="text-foreground font-medium">Aisiri Conquest Samuel</span>, 
                    a Digital Operations & Virtual Assistance Support professional and Content & Community Assistant
                    based in Lagos, Nigeria.
                  </p>
                  <p>
                    Tech-savvy and highly adaptable remote support professional with hands-on experience gained through 
                    internships, volunteer-based learning roles, and a recent professional contract, supporting digital 
                    operations, virtual assistance, content support, and online community management.
                  </p>
                  <p>
                    Skilled in using modern digital tools and AI-assisted productivity to improve efficiency and task execution.
                    Known for reliability, attention to detail, and a strong willingness to learn.
                  </p>
                </div>
              </div>

              {/* What I Bring */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-heading font-bold">
                  Work Style & Strengths
                </h2>
                <ul className="space-y-2">
                  {valueProps.map((prop, index) => (
                    <li key={index} className="flex items-center gap-2 group">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-muted-foreground text-sm">{prop}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Work Philosophy */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-heading font-bold">
                  Work Philosophy
                </h2>
                <div className="interactive-card">
                  <p className="text-muted-foreground leading-relaxed text-sm italic">
                    "Comfortable working independently in fully remote and asynchronous teams, 
                    handling ambiguity, managing multiple priorities, and executing tasks with accuracy and consistency. 
                    I bring a strong blend of operational discipline, creative execution, technical curiosity, and AI literacy."
                  </p>
                </div>
              </div>

              {/* Interests */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-heading font-bold">
                  Interests & Focus Areas
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {interests.map((interest, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card/50 border border-border hover:border-primary/40 hover:bg-primary/5 transition-all cursor-pointer text-sm"
                    >
                      <span>{interest.icon}</span>
                      <span className="text-muted-foreground text-xs">{interest.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Work Preference */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-heading font-bold">
                  Work Preference
                </h2>
                <div className="interactive-card">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Remote roles preferred. Open to full-time, on-site, or hybrid roles with relocation, 
                    transport, and accommodation support.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-3 pt-4">
                <Link to="/experience" className="btn-primary">
                  View My Experience
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
