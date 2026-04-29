import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Award, FolderGit2 } from "lucide-react";

const education = [
  {
    degree: "BSc, Mass Communication",
    institution: "Lagos State University (LASU)",
    note: "Communication theory, media systems, professional writing.",
  },
  {
    degree: "HND, Mass Communication",
    institution: "Yaba College of Technology",
    note: "Production, editorial workflow and applied communication.",
  },
  {
    degree: "ND, Mass Communication",
    institution: "Lagos State Polytechnic",
    note: "Foundations in journalism, public relations and broadcasting.",
  },
];

const certifications = [
  { name: "Google Workspace Productivity", issuer: "Google" },
  { name: "Customer Support Essentials", issuer: "Professional Training" },
  { name: "Virtual Assistance Foundations", issuer: "Remote Work Track" },
];

const projects = [
  {
    name: "RIIRS — Issue Intelligence System",
    desc: "An internal system to track recurring customer issues across channels and surface resolution paths — reducing repeat tickets and shortening resolution loops for the team.",
    tags: ["Operations", "Internal Tool", "Pattern Recognition"],
  },
  {
    name: "Support Quality Framework",
    desc: "A structured interaction and QA tracking system used to maintain 95%+ performance across high-volume queues — built around Zendesk reporting and SOP-aligned scoring.",
    tags: ["QA", "SOPs", "Process Design"],
  },
  {
    name: "Personal Portfolio",
    desc: "Designed and deployed a personal portfolio site using HTML/CSS and Netlify — demonstrating digital fluency and ownership across the build-to-deploy stack.",
    tags: ["HTML/CSS", "Netlify", "Self-Directed"],
  },
];

const EducationPage = () => {
  return (
    <div>
      <section className="page-header">
        <div className="section-container">
          <span className="eyebrow mb-4">Education & Projects</span>
          <h1 className="page-title mt-4">
            Where the foundation
            <br />
            <span className="text-muted-foreground font-normal">
              came from.
            </span>
          </h1>
          <p className="page-subtitle mt-4">
            A communications background, professional certifications, and
            self-initiated projects built around customer-experience operations.
          </p>
        </div>
      </section>

      {/* Education */}
      <section className="pb-16">
        <div className="section-container">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-4 h-4 text-accent" />
            <span className="eyebrow !before:hidden">Education</span>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {education.map((e) => (
              <div key={e.degree} className="card-flat p-6">
                <h3 className="text-base font-semibold mb-1">{e.degree}</h3>
                <p className="text-sm text-accent font-medium mb-3">
                  {e.institution}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {e.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 border-t border-border">
        <div className="section-container">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-4 h-4 text-accent" />
            <span className="eyebrow !before:hidden">Certifications</span>
          </div>

          <div className="grid sm:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden border border-border">
            {certifications.map((c) => (
              <div key={c.name} className="bg-card p-5">
                <h4 className="text-sm font-semibold text-foreground mb-1">
                  {c.name}
                </h4>
                <p className="text-xs text-muted-foreground">{c.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 border-t border-border">
        <div className="section-container">
          <div className="flex items-center gap-2 mb-6">
            <FolderGit2 className="w-4 h-4 text-accent" />
            <span className="eyebrow !before:hidden">Key Projects</span>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {projects.map((p, i) => (
              <div key={p.name} className="card-interactive">
                <div className="num-marker mb-3">0{i + 1}.</div>
                <h3 className="text-base font-semibold mb-2">{p.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                  {p.tags.map((t) => (
                    <span key={t} className="mono-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border">
        <div className="section-container text-center max-w-2xl">
          <h2 className="text-2xl font-bold mb-3">
            Want to dig deeper?
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            Happy to walk through any of these projects or share the full CV.
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
