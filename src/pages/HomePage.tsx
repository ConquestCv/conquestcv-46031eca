import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Clock, Globe, ChevronRight } from "lucide-react";
import profileImage from "@/assets/conquest-profile.jpg";

const stats = [
  { icon: Clock, label: "2024-Present" },
  { icon: Briefcase, label: "3+ Roles" },
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

const services = [
  {
    title: "Virtual Assistance",
    description: "Inbox, scheduling, and administrative support.",
    icon: "📋",
  },
  {
    title: "AI-Powered Productivity",
    description: "AI tools for writing, research, and content.",
    icon: "🤖",
  },
  {
    title: "Community Support",
    description: "Discord/Telegram moderation and engagement.",
    icon: "💬",
  },
  {
    title: "Content & Media",
    description: "Video editing, graphics, and coordination.",
    icon: "🎬",
  },
];

const HomePage = () => {
  return (
    <div className="relative">
      {/* Hero Glow Effect */}
      <div className="hero-glow" />

      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center pt-28 sm:pt-24 pb-16">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-slide-up">
              <div className="space-y-3">
                <p className="text-primary font-medium tracking-wide uppercase text-xs">
                  Hello, I'm
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight">
                  Aisiri Conquest{" "}
                  <span className="text-gradient">Samuel</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Digital Operations & Virtual Assistance Support |{" "}
                  <span className="text-foreground font-medium">Content & Community Assistant</span>
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm max-w-md">
                Tech-savvy and highly adaptable remote support professional with hands-on experience 
                supporting digital operations, virtual assistance, content support, and online community management.
                Known for reliability, attention to detail, and a strong willingness to learn.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-2">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-badge">
                    <stat.icon className="w-3.5 h-3.5 text-primary" />
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 pt-2">
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
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-90" />
                
                {/* Image Container */}
                <div className="relative glow-card glow-border p-2 rounded-2xl">
                  <img
                    src={profileImage}
                    alt="Aisiri Conquest Samuel - Digital Operations Specialist"
                    className="w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[28rem] object-cover rounded-xl"
                  />
                  
                  {/* Floating Badge */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg font-semibold text-sm whitespace-nowrap">
                    Remote-Ready Professional
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-16 border-t border-border/50">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold">
              More Than Just a{" "}
              <span className="text-gradient">Virtual Assistant</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Skilled in using modern digital tools and AI-assisted productivity to improve efficiency and task execution.
              Comfortable working in remote environments, handling administrative tasks, organizing information,
              supporting content workflows, and assisting with community engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gradient-to-b from-primary/5 via-primary/3 to-transparent">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">
              What I Bring to Your Team
            </h2>
            <p className="text-muted-foreground text-sm">
              Core competencies honed through years of remote work
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="interactive-card group !py-4"
              >
                <div className="icon-container mb-2 !w-8 !h-8">
                  <span className="text-lg">{service.icon}</span>
                </div>
                <h3 className="text-sm font-heading font-semibold mb-1">{service.title}</h3>
                <p className="text-xs text-muted-foreground">{service.description}</p>
                <ChevronRight className="w-4 h-4 text-primary mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/skills" className="btn-secondary text-sm">
              View All Skills
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 border-t border-border/50">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">
              What People Say
            </h2>
            <p className="text-muted-foreground text-sm">
              Feedback from team leads and coordinators
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="interactive-card"
              >
                <div className="text-primary text-3xl mb-2">"</div>
                <p className="text-muted-foreground leading-relaxed text-sm italic mb-4">
                  {testimonial.quote}
                </p>
                <div className="pt-3 border-t border-border">
                  <p className="font-medium text-xs">{testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 rounded-3xl mx-4 lg:mx-auto lg:max-w-4xl my-8">
        <div className="section-container text-center">
          <div className="max-w-xl mx-auto space-y-4">
            <h2 className="text-2xl md:text-3xl font-heading font-bold">
              Ready to Work Together?
            </h2>
            <p className="text-muted-foreground text-sm">
              I'm currently open to remote opportunities. Let's discuss how I can support your team.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
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
