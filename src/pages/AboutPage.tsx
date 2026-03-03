import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Phone, Shield, Target, BarChart3, Database, Scale, Wifi, Clock } from "lucide-react";
import profileImage from "@/assets/conquest-profile.jpg";

const coreCompetencies = [
  { area: "High-Volume Call Control", detail: "Mastery of maintaining authoritative yet empathetic communication throughout 200+ daily outbound dials.", icon: Phone },
  { area: "US-Market Eligibility Verification", detail: "Expert-level verification of sensitive consumer profiles, ensuring alignment with state-approved insurance and financial criteria.", icon: Shield },
  { area: "Strategic Rebuttals & Pacing", detail: "Specialized in the 'Memory Pivot' and 'Inflation Gap' techniques to re-engage skeptical leads on past-dated enquiries.", icon: Target },
  { area: "Tonality Management", detail: "Advanced use of Descending Tonality to establish instant expert authority and bypass 'gatekeeper' resistance.", icon: BarChart3 },
  { area: "CRM & Data Hygiene", detail: "Proficient in real-time data entry and lead management using Salesforce, Zendesk, and HubSpot.", icon: Database },
  { area: "Performance Metrics (KPIs)", detail: "Focused on optimizing Average Handle Time (AHT), Transfer Success Rates (TSR), and First Call Resolution (FCR).", icon: BarChart3 },
  { area: "Compliance & TCPA Standards", detail: "Deep understanding of US telemarketing regulations and professional disclosure and recording protocols.", icon: Scale },
  { area: "Remote Operational Excellence", detail: "Proven ability to maintain 100% uptime with high-speed fiber-optic infrastructure and professional-grade audio hardware.", icon: Wifi },
];

const strengths = [
  { label: "Punctuality", detail: "100% record of log-in adherence for early-morning EST shifts" },
  { label: "Resilience", detail: "Maintains a positive, persuasive tone even after high volumes of rejection" },
  { label: "Coachability", detail: "Actively seeks feedback from QA managers to sharpen rebuttals and tonality" },
  { label: "Self-Starter", detail: "Fully equipped with quiet home office, noise-canceling USB headset, and high-fiber internet" },
];

const AboutPage = () => {
  return (
    <div className="relative">
      <div className="hero-glow" />

      <section className="page-header">
        <h1 className="page-title">
          About <span className="text-gradient">Me</span>
        </h1>
        <p className="page-subtitle">
          Results-oriented Lead Qualification Specialist with proven expertise in high-volume BPO operations and US-market outbound campaigns.
        </p>
      </section>

      <section className="pb-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
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

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-heading font-bold">
                  Professional Summary
                </h2>
                <div className="space-y-3 text-muted-foreground leading-relaxed text-sm">
                  <p>
                    I'm <span className="text-foreground font-medium">Aisiri Conquest Samuel</span>, a highly disciplined and results-oriented Lead Qualification Specialist with a proven track record in high-volume outbound sales environments and international BPO operations.
                  </p>
                  <p>
                    I possess native-level mastery of American English verbal communication, specializing in Descending Tonality, psychological rapport-building, and advanced objection-handling frameworks specifically tailored for the North American market.
                  </p>
                  <p>
                    Expert at managing the end-to-end "Cold-to-Warm" lead transition, ensuring absolute data integrity through thorough eligibility checks prior to senior-level hand-offs. Recognized for maintaining elite energy levels and a consistent 99% QA score across demanding 12-hour shifts.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-heading font-bold">
                  Core Competencies
                </h2>
                <div className="space-y-3">
                  {coreCompetencies.map((item, index) => (
                    <div key={index} className="interactive-card !py-3 !px-4">
                      <div className="flex items-start gap-3">
                        <div className="icon-container !w-8 !h-8 flex-shrink-0 mt-0.5">
                          <item.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-heading font-semibold text-sm text-foreground">{item.area}</h4>
                          <p className="text-xs text-muted-foreground mt-0.5">{item.detail}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-heading font-bold">
                  Personal Attributes
                </h2>
                <ul className="space-y-3">
                  {strengths.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 group">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <div>
                        <span className="text-foreground font-medium text-sm">{item.label}</span>
                        <span className="text-muted-foreground text-sm"> — {item.detail}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-heading font-bold">
                  Work Philosophy
                </h2>
                <div className="interactive-card">
                  <p className="text-muted-foreground leading-relaxed text-sm italic">
                    "Tech-savvy professional proficient in CRM hygiene, automated workflow documentation, and strategic follow-up protocols aimed at maximizing lead retention and minimizing user churn. KPI-driven, EST-synced, and compliance-focused."
                  </p>
                </div>
              </div>

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
