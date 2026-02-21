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
  { name: "Blockchain Basics", issuer: "Coursera", category: "Web3" },
  { name: "Digital Marketing Fundamentals", issuer: "Google Digital Skills for Africa", category: "Digital Marketing" },
  { name: "Email Marketing Certificate", issuer: "GAOTek Inc.", category: "Marketing" },
  { name: "Google Workspace Productivity Training", issuer: "Google", category: "Productivity" },
  { name: "Virtual Assistance & Customer Support Essentials", issuer: "Professional Training", category: "VA Skills" },
];

const projects = [
  {
    title: "Workflow Automation & Logic",
    description: "Engineered automated trade logic on-chain using API integrations and built semi-automated reporting dashboards to reduce manual data entry by 60%.",
    tags: ["Automation", "API Integration", "Data Architecture"],
  },
  {
    title: "Personal Digital Headquarters",
    description: "Developed a custom portfolio website using HTML, CSS, and JavaScript to host professional assets and showcase technical capabilities.",
    tags: ["Web Development", "HTML/CSS/JS", "Design"],
  },
  {
    title: "Independent Market Analysis",
    description: "Authored detailed studies on liquidity behavior and community traction models within the decentralized finance (DeFi) space.",
    tags: ["Research", "DeFi", "Analytics"],
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
          My academic background, professional certifications, and key projects.
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
            <h2 className="text-xl md:text-2xl font-heading font-bold">Certifications & Training</h2>
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
            <h2 className="text-xl md:text-2xl font-heading font-bold">Key Projects & Achievements</h2>
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
