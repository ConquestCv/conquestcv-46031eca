import { Link } from "react-router-dom";
import { ArrowRight, Phone, Wifi, Zap, Globe, Shield, Headphones, Clock, ChevronRight, TrendingUp, Target, Users } from "lucide-react";
import profileImage from "@/assets/conquest-profile.jpg";

const stats = [
  { icon: TrendingUp, label: "99% QA Score" },
  { icon: Target, label: "25% TSR Increase" },
  { icon: Clock, label: "200+ Daily Dials" },
];

const whyMe = [
  {
    title: "Tonality Architecture",
    description: "Advanced use of Descending Tonality to establish instant expert authority and bypass 'gatekeeper' resistance on the first hello.",
    icon: Phone,
  },
  {
    title: "Lead Integrity",
    description: "The '0% Waste' philosophy. Every lead is vetted for Address, DOB, and Banking Status with surgical precision before senior hand-off.",
    icon: Shield,
  },
  {
    title: "Cross-Border Fluency",
    description: "Navigating cultural nuances in American and International markets while maintaining a neutral, professional accent that resonates.",
    icon: Globe,
  },
];

const infrastructure = [
  { icon: Zap, title: "Power Redundancy", detail: "24/7 Uptime via Dedicated Inverter & Generator Backup" },
  { icon: Wifi, title: "Network Stability", detail: "Dual-ISP Configuration (Fiber Optic Primary + 5G High-Speed Backup)" },
  { icon: Headphones, title: "Hardware", detail: "Professional Noise-Canceling USB-C Headset & Dedicated Quiet Home Office" },
  { icon: Clock, title: "Global Operations Ready", detail: "Infrastructure and schedule optimized for seamless synchronization with International Business Hours (EST, GMT, AEST)" },
];

const testimonials = [
  {
    quote: "Conquest maintained elite energy levels and a consistent 99% QA score across demanding 12-hour shifts. His verbal clarity and strict adherence to SOPs set the standard for the team.",
    author: "QA Operations Manager",
  },
  {
    quote: "His warm transfers were consistently clean and well-briefed. Senior advisors never had to re-qualify — he did the work upfront, every single time.",
    author: "Senior Advisor Team Lead",
  },
  {
    quote: "Coachable, punctual, and resilient. Even after high volumes of rejection, Conquest maintained a positive, persuasive tone that converted skeptical leads.",
    author: "Campaign Director",
  },
];

const HomePage = () => {
  return (
    <div className="relative">
      <div className="hero-glow" />

      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center pt-28 sm:pt-24 pb-16">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6 animate-slide-up">
              <div className="space-y-3">
                {/* Availability Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  AVAILABLE FOR IMMEDIATE PLACEMENT
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight">
                  Senior Lead Discovery &{" "}
                  <span className="text-gradient">Qualification Expert</span>
                </h1>
                <p className="text-base md:text-lg text-muted-foreground">
                  Bridging the Gap Between Cold Outreach and High-Value Conversions Through Mastery of Tonality, Rapport, and Meticulous Data Verification.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-badge">
                    <stat.icon className="w-3.5 h-3.5 text-primary" />
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link to="/experience" className="btn-primary">
                  View My Experience
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Get in Touch
                </Link>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-90" />
                <div className="relative glow-card glow-border p-2 rounded-2xl">
                  <img
                    src={profileImage}
                    alt="Aisiri Conquest Samuel - Senior Lead Discovery & Qualification Expert"
                    className="w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[28rem] object-cover rounded-xl"
                  />
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg font-semibold text-sm whitespace-nowrap">
                    US-Market Specialist
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Me Section */}
      <section className="py-16 border-t border-border/50">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">
              Why <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground text-sm">
              The differentiators that set my qualification process apart
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {whyMe.map((item, index) => (
              <div key={index} className="interactive-card group !py-6">
                <div className="icon-container mb-3">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-heading font-semibold mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulletproof Infrastructure */}
      <section className="py-16 bg-gradient-to-b from-primary/5 via-primary/3 to-transparent">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">
              Bulletproof <span className="text-gradient">Infrastructure</span>
            </h2>
            <p className="text-muted-foreground text-sm">
              100% reliability for remote operations — no excuses, no downtime
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {infrastructure.map((item, index) => (
              <div key={index} className="interactive-card group !py-4">
                <div className="icon-container mb-2 !w-8 !h-8">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-sm font-heading font-semibold mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 border-t border-border/50">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">
              What Stakeholders <span className="text-gradient">Say</span>
            </h2>
            <p className="text-muted-foreground text-sm">
              Feedback on resilience, coachability, and transfer quality
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="interactive-card">
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
              Ready to Bring Veteran-Level Qualification to Your Next Campaign?
            </h2>
            <p className="text-muted-foreground text-sm">
              Let's discuss how I can maximize your lead conversion pipeline.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Link to="/contact" className="btn-primary">
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:conquestaisiri@gmail.com"
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
