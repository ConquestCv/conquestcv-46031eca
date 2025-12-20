import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Clock, Globe } from "lucide-react";
import profileImage from "@/assets/conquest-profile.jpg";

const stats = [
  { icon: Clock, label: "3+ Years Experience" },
  { icon: Briefcase, label: "6+ Remote Roles" },
  { icon: Globe, label: "Remote-Ready" },
];

const testimonials = [
  {
    quote: "Conquest consistently delivered accurate data entry and thorough documentation. His attention to detail made him valuable to our distributed operations team.",
    author: "Former Operations Supervisor",
  },
  {
    quote: "Working with Conquest on community moderation was seamless. He handled user inquiries professionally and always met deadlines.",
    author: "Community Team Lead",
  },
  {
    quote: "Reliable, organized, and communicative. Conquest managed multiple administrative tasks effectively and adapted quickly to new workflows.",
    author: "Project Coordinator",
  },
];

const HomePage = () => {
  return (
    <div className="relative">
      {/* Hero Glow Effect */}
      <div className="hero-glow" />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-4">
                <p className="text-primary font-medium tracking-wide uppercase text-sm">
                  Hello, I'm
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                  Aisiri Conquest{" "}
                  <span className="text-gradient">Samuel</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground">
                  Remote Digital Operations &{" "}
                  <span className="text-foreground">Virtual Assistance</span>{" "}
                  Specialist
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed max-w-lg">
                Supporting businesses that need reliability. Execution you can count on.
                Organized, remote, and ready to help your operations run smoothly.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-3">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-badge">
                    <stat.icon className="w-4 h-4 text-primary" />
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link to="/experience" className="btn-primary">
                  View My Experience
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Contact Me
                </Link>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="relative flex justify-center lg:justify-end animate-fade-in">
              <div className="relative">
                {/* Glow behind image */}
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />
                
                {/* Image Container */}
                <div className="relative glow-card glow-border p-2 rounded-2xl">
                  <img
                    src={profileImage}
                    alt="Aisiri Conquest Samuel - Remote Digital Operations Specialist"
                    className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-xl"
                  />
                  
                  {/* Floating Badge */}
                  <div className="floating-badge animate-pulse-glow">
                    3+ Years of Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-24 border-t border-border">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
              More Than Just a{" "}
              <span className="text-gradient">Virtual Assistant</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in keeping remote operations running smoothly. From data entry 
              and documentation to community management and administrative support, 
              I bring structure, reliability, and clear communication to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-card/50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              What I Bring to Your Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Core competencies honed through years of remote work experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Virtual Assistance",
                description: "Task management, scheduling, inbox handling, and administrative support.",
                icon: "📋",
              },
              {
                title: "Data Entry & Research",
                description: "Accurate data validation, record management, and thorough documentation.",
                icon: "📊",
              },
              {
                title: "Community Support",
                description: "User inquiries, moderation, sentiment reporting, and engagement.",
                icon: "💬",
              },
              {
                title: "Operations Coordination",
                description: "Workflow optimization, team coordination, and process documentation.",
                icon: "⚙️",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="glow-card glow-border p-6 space-y-4 hover:scale-105 transition-transform duration-300"
              >
                <span className="text-4xl">{service.icon}</span>
                <h3 className="text-lg font-heading font-semibold">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/skills" className="btn-secondary">
              View All Skills
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              What People Say
            </h2>
            <p className="text-muted-foreground">
              Feedback from team leads and project coordinators
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glow-card p-6 space-y-4"
              >
                <div className="text-primary text-4xl">"</div>
                <p className="text-muted-foreground leading-relaxed italic">
                  {testimonial.quote}
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="font-medium text-sm">{testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card/50 border-t border-border">
        <div className="section-container text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Ready to Work Together?
            </h2>
            <p className="text-muted-foreground">
              I'm currently open to remote opportunities. Let's discuss how I can support your team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:conquestsammy5@gmail.com"
                className="btn-secondary"
              >
                Email Me Directly
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
