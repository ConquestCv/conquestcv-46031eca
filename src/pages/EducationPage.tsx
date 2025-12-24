import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Award, Folder, Heart } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science (BSc)",
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
  { name: "Google Digital Skills for Africa", issuer: "Google", category: "Digital Marketing" },
  { name: "Google Workspace Productivity Training", issuer: "Google", category: "Productivity" },
  { name: "Data Entry & Information Management Fundamentals", issuer: "Professional Development", category: "Data Skills" },
  { name: "Virtual Assistance Foundations", issuer: "Online Learning", category: "VA Skills" },
  { name: "Customer Support & Email Handling Essentials", issuer: "Professional Training", category: "Communication" },
  { name: "Blockchain Basics", issuer: "Coursera", category: "Web3" },
  { name: "Web3 Fundamentals", issuer: "Alchemy University", category: "Web3" },
  { name: "Video Editing Essentials", issuer: "Udemy", category: "Creative" },
];

const projects = [
  {
    title: "Personal Portfolio Website",
    description: "Designed and developed a personal portfolio using HTML, CSS, and JavaScript to showcase skills, experience, and projects with a clean and responsive layout.",
    tags: ["Web Development", "Design", "Branding"],
  },
  {
    title: "Community Analytics & Reporting System",
    description: "Independently built a structured analytics and reporting workflow for Discord and Telegram communities using Google Sheets and Forms. Collected engagement data, categorized feedback, and generated weekly insights simulating real client reporting environments.",
    tags: ["Analytics", "Community", "Reporting"],
  },
  {
    title: "Independent Skill Development",
    description: "Continuous hands-on experimentation with AI tools, content creation, video editing, motion graphics, Web3 systems, automation, and digital workflows.",
    tags: ["AI Tools", "Automation", "Self-Learning"],
  },
];

const volunteerExperience = [
  {
    role: "Digital Community Volunteer",
    period: "Jan 2023 – Dec 2023",
    type: "Remote",
    description: "Assisted with community moderation, data organization, and event coordination.",
  },
  {
    role: "Administrative Support Volunteer",
    period: "Jun 2022 – Dec 2022",
    type: "Remote",
    description: "Supported documentation, email handling, and basic reporting for a local NGO.",
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
          My academic background, professional certifications, and projects.
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
            <h2 className="text-xl md:text-2xl font-heading font-bold">Certifications & Online Training</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
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
        <div className="section-container max-w-4xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="icon-container">
              <Folder className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-xl md:text-2xl font-heading font-bold">Projects & Practical Work</h2>
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

      {/* Volunteer Experience */}
      <section className="py-12 border-t border-border/50">
        <div className="section-container max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="icon-container">
              <Heart className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-xl md:text-2xl font-heading font-bold">Volunteer Experience</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {volunteerExperience.map((vol, index) => (
              <div key={index} className="interactive-card">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                  <h3 className="text-base font-heading font-bold">{vol.role}</h3>
                  <span className="stat-badge">{vol.period}</span>
                </div>
                <p className="text-muted-foreground text-sm">{vol.description}</p>
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
