import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Award, Folder } from "lucide-react";

const education = [
  {
    degree: "BSc Mechanical Engineering",
    institution: "University of Lagos (UNILAG)",
    period: "Graduated",
    description: "Developed strong analytical, problem-solving, and systematic thinking skills.",
  },
  {
    degree: "Higher National Diploma (HND)",
    institution: "Yaba College of Education",
    period: "Completed",
    description: "Advanced technical education building on foundational knowledge.",
  },
  {
    degree: "National Diploma (ND)",
    institution: "Lagos State Polytechnic",
    period: "Completed",
    description: "Foundation in technical education with practical application emphasis.",
  },
];

const certifications = [
  { name: "Google Digital Skills for Africa", issuer: "Google", category: "Digital Skills" },
  { name: "Google Workspace Productivity", issuer: "Google", category: "Productivity" },
  { name: "Data Entry & Information Management", issuer: "Professional Development", category: "Data Skills" },
  { name: "Virtual Assistance Foundations", issuer: "Online Learning", category: "VA Skills" },
  { name: "Customer Support & Email Handling", issuer: "Professional Training", category: "Communication" },
  { name: "Blockchain Basics", issuer: "Coursera", category: "Web3" },
  { name: "Web3 Fundamentals", issuer: "Alchemy University", category: "Web3" },
  { name: "Video Editing Essentials", issuer: "Udemy", category: "Creative" },
  { name: "Project Management Basics", issuer: "Online Certification", category: "Management" },
];

const projects = [
  {
    title: "Professional Portfolio Website",
    description: "Designed and developed a personal portfolio to showcase skills and professional journey.",
    tags: ["Web Development", "Design", "Branding"],
  },
  {
    title: "Community Analytics Dashboard",
    description: "Created tracking systems for community engagement metrics across platforms.",
    tags: ["Analytics", "Community", "Reporting"],
  },
];

const EducationPage = () => {
  return (
    <div className="relative">
      <div className="hero-glow" />

      {/* Header */}
      <section className="page-header">
        <h1 className="page-title">
          Education & <span className="text-gradient">Certifications</span>
        </h1>
        <p className="page-subtitle">
          My academic background and professional certifications.
        </p>
      </section>

      {/* Education */}
      <section className="pb-12">
        <div className="section-container max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="icon-container">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-xl md:text-2xl font-heading font-bold">Education</h2>
          </div>

          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="interactive-card">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="text-base font-heading font-bold">{edu.degree}</h3>
                    <p className="text-primary font-medium text-sm">{edu.institution}</p>
                  </div>
                  <span className="stat-badge">{edu.period}</span>
                </div>
                <p className="text-muted-foreground text-sm">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 border-y border-border/50">
        <div className="section-container">
          <div className="flex items-center gap-2 mb-6">
            <div className="icon-container">
              <Award className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-xl md:text-2xl font-heading font-bold">Certifications</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {certifications.map((cert, index) => (
              <div key={index} className="interactive-card">
                <span className="inline-block px-2 py-0.5 text-[10px] font-medium rounded bg-primary/15 text-primary mb-2">
                  {cert.category}
                </span>
                <h4 className="font-heading font-semibold text-sm mb-1">{cert.name}</h4>
                <p className="text-xs text-muted-foreground">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-12">
        <div className="section-container max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="icon-container">
              <Folder className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-xl md:text-2xl font-heading font-bold">Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <div key={index} className="interactive-card">
                <h3 className="text-base font-heading font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[10px] rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 border-t border-border/50">
        <div className="section-container text-center">
          <h2 className="text-xl md:text-2xl font-heading font-bold mb-2">
            Want to Know More?
          </h2>
          <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
            Explore my experience or get in touch to discuss how I can contribute to your team.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-primary">
              Contact Me
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

export default EducationPage;
