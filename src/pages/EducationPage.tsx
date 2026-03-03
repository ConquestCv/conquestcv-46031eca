import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Award, Folder } from "lucide-react";

const education = [
  {
    degree: "Higher National Diploma (HND)",
    institution: "Yaba College of Education",
    period: "Completed",
    description: "Advanced technical education with focus on practical skills and professional development.",
  },
  {
    degree: "National Diploma (ND)",
    institution: "Lagos State Polytechnic",
    period: "Completed",
    description: "Foundation in technical education with practical application emphasis.",
  },
];

const certifications = [
  { name: "Customer Support & Email Handling Essentials", issuer: "Professional Training (Distinction)", category: "Support" },
  { name: "Google Workspace Productivity Training", issuer: "Google", category: "Productivity" },
  { name: "Virtual Assistance Foundations", issuer: "Remote Work Optimization", category: "VA Skills" },
  { name: "Digital Marketing Specialist", issuer: "Google Digital Skills for Africa", category: "Marketing" },
  { name: "Email Marketing Certificate", issuer: "Advanced Outreach Strategies", category: "Marketing" },
  { name: "Blockchain Basics", issuer: "Coursera (Financial Technology Foundation)", category: "FinTech" },
];

const projects = [
  {
    title: "KPI-Driven Performance Systems & Script Engineering",
    description: "Engineered logic-based reporting systems that transformed raw call data into actionable performance insights. Built a comprehensive 'Library of Rebuttals' for training junior qualifiers and deployed task-tracking dashboards using complex Google Sheets formulas.",
    tags: ["Automation", "Script Engineering", "KPI Reporting"],
  },
  {
    title: "Advanced Full-Stack Professional Portfolio",
    description: "Independently engineered a professional web presence using HTML, CSS, and JavaScript to showcase digital literacy and the ability to troubleshoot technical platforms.",
    tags: ["Web Development", "HTML/CSS/JS", "Technical Literacy"],
  },
  {
    title: "Independent Market Analysis",
    description: "Authored detailed studies on liquidity behavior and community traction models within the decentralized finance (DeFi) space, supporting executive-level sales strategies.",
    tags: ["Research", "DeFi", "Analytics"],
  },
];

const EducationPage = () => {
  return (
    <div className="relative">
      <div className="hero-glow" />

      <section className="page-header">
        <h1 className="page-title">
          Education & <span className="text-gradient">Certifications</span>
        </h1>
        <p className="page-subtitle">
          Academic background, professional certifications, and strategic project initiatives.
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
            <h2 className="text-xl md:text-2xl font-heading font-bold">Certifications & Specialized Training</h2>
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

      {/* Key Projects */}
      <section className="py-12">
        <div className="section-container max-w-4xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="icon-container">
              <Folder className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-xl md:text-2xl font-heading font-bold">Strategic Projects & Initiatives</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
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
