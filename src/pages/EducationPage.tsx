import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Award, Folder } from "lucide-react";

const education = [
  {
    degree: "BSc Mechanical Engineering",
    institution: "University of Lagos (UNILAG)",
    period: "Graduated",
    description: "Developed strong analytical, problem-solving, and systematic thinking skills applicable to operations and process optimization.",
  },
  {
    degree: "Higher National Diploma (HND)",
    institution: "Yaba College of Education",
    period: "Completed",
    description: "Advanced technical education building on foundational knowledge and practical skills.",
  },
  {
    degree: "National Diploma (ND)",
    institution: "Lagos State Polytechnic",
    period: "Completed",
    description: "Foundation in technical education with emphasis on practical application.",
  },
];

const certifications = [
  {
    name: "Google Digital Skills for Africa",
    issuer: "Google",
    category: "Digital Skills",
  },
  {
    name: "Google Workspace Productivity",
    issuer: "Google",
    category: "Productivity",
  },
  {
    name: "Data Entry & Information Management",
    issuer: "Professional Development",
    category: "Data Skills",
  },
  {
    name: "Virtual Assistance Foundations",
    issuer: "Online Learning Platform",
    category: "VA Skills",
  },
  {
    name: "Customer Support & Email Handling",
    issuer: "Professional Training",
    category: "Communication",
  },
  {
    name: "Blockchain Basics",
    issuer: "Coursera",
    category: "Web3",
  },
  {
    name: "Web3 Fundamentals",
    issuer: "Alchemy University",
    category: "Web3",
  },
  {
    name: "Video Editing Essentials",
    issuer: "Udemy",
    category: "Creative",
  },
  {
    name: "Project Management Basics",
    issuer: "Online Certification",
    category: "Management",
  },
];

const projects = [
  {
    title: "Professional Portfolio Website",
    description: "Designed and developed a personal portfolio website to showcase skills, experience, and professional journey.",
    tags: ["Web Development", "Design", "Personal Branding"],
  },
  {
    title: "Community Analytics Dashboard",
    description: "Created tracking and reporting systems for community engagement metrics across multiple platforms.",
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
          My academic background and professional certifications that support my career in digital operations.
        </p>
      </section>

      {/* Education */}
      <section className="pb-16">
        <div className="section-container max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-heading font-bold">Education</h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="glow-card glow-border p-6 space-y-3"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-heading font-bold">{edu.degree}</h3>
                    <p className="text-primary font-medium">{edu.institution}</p>
                  </div>
                  <span className="stat-badge text-xs">{edu.period}</span>
                </div>
                <p className="text-muted-foreground">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-card/50 border-y border-border">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-heading font-bold">Certifications</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="glow-card p-5 space-y-2 hover:scale-105 transition-transform"
              >
                <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-primary/20 text-primary">
                  {cert.category}
                </span>
                <h4 className="font-heading font-semibold">{cert.name}</h4>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16">
        <div className="section-container max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Folder className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-heading font-bold">Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glow-card glow-border p-6 space-y-4"
              >
                <h3 className="text-xl font-heading font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
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
      <section className="py-16 bg-card/50 border-t border-border">
        <div className="section-container text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Want to Know More?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Explore my experience or get in touch to discuss how I can contribute to your team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
