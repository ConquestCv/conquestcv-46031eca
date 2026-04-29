import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import profileImage from "@/assets/conquest-profile.jpg";

const competencies = [
  {
    title: "Omnichannel support",
    body: "Live chat, voice and email handled without dropping context — managing 50–80+ daily interactions with consistent tone.",
  },
  {
    title: "De-escalation",
    body: "Diffusing high-emotion tickets through structured empathy, accurate diagnosis and clear next-step communication.",
  },
  {
    title: "Technical troubleshooting",
    body: "Root-causing payment, account and platform issues end-to-end — not just escalating them upward.",
  },
  {
    title: "Zendesk fluency",
    body: "Macros, SOPs, ticket hygiene and reporting workflows that keep the queue clean and the QA team happy.",
  },
  {
    title: "Salesforce CRM",
    body: "Real-time data entry, pipeline notes and follow-up tracking with 95%+ accuracy across global accounts.",
  },
  {
    title: "FCR & AHT optimisation",
    body: "Reduced AHT by 12% at Turing while protecting quality — through workflow tuning and conversation design.",
  },
  {
    title: "CSAT / NPS sensitivity",
    body: "Every interaction tuned for the survey that follows it — clear language, ownership, follow-through.",
  },
  {
    title: "Operational discipline",
    body: "100% log-in adherence, structured shift handovers, calm under high-volume pressure.",
  },
];

const principles = [
  "Close the ticket — don't just touch it.",
  "Documentation is a deliverable, not a chore.",
  "Calm voice, sharp diagnosis, clean handoff.",
  "Volume is no excuse to drop quality.",
];

const AboutPage = () => {
  return (
    <div>
      <section className="page-header">
        <div className="section-container">
          <span className="eyebrow mb-4">About</span>
          <h1 className="page-title mt-4">
            I keep customer queues calm,
            <br />
            <span className="text-muted-foreground font-normal">
              clean and resolved.
            </span>
          </h1>
          <p className="page-subtitle mt-4">
            Customer Experience Specialist with 2+ years in high-volume,
            remote-first support environments. Strong ownership mindset, QA-grade
            documentation, and a track record of cutting escalations and AHT.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left — portrait + quick facts */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 space-y-5">
                <div className="card-flat overflow-hidden">
                  <img
                    src={profileImage}
                    alt="Aisiri Conquest Samuel"
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>

                <div className="card-flat p-5 space-y-3">
                  <div className="text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground">
                    Quick facts
                  </div>
                  {[
                    ["Based", "Lagos, Nigeria"],
                    ["Mode", "Remote · 24/7 shifts"],
                    ["Tools", "Zendesk · Salesforce"],
                    ["QA", "95%+ sustained"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{k}</span>
                      <span className="text-foreground font-medium">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* Right — content */}
            <div className="lg:col-span-8 space-y-14">
              <div className="space-y-4">
                <span className="eyebrow">Background</span>
                <div className="space-y-4 text-foreground/85 text-base leading-relaxed">
                  <p>
                    I'm{" "}
                    <span className="text-foreground font-medium">
                      Aisiri Conquest Samuel
                    </span>
                    , a Customer Experience Specialist with 2+ years handling
                    high-volume omnichannel support across chat, voice and
                    email in fast-paced remote environments.
                  </p>
                  <p>
                    My focus is resolution-first outcomes: improving First
                    Contact Resolution (FCR), reducing escalations, and
                    maintaining 95%+ QA performance through disciplined
                    documentation in Zendesk, Salesforce and marketplace
                    support systems.
                  </p>
                  <p>
                    I bring a strong ownership mindset and operational
                    discipline — calm under pressure, structured under volume,
                    and dependable across 24/7 shift coverage.
                  </p>
                </div>
              </div>

              {/* Competencies */}
              <div className="space-y-5">
                <span className="eyebrow">Core Competencies</span>
                <div className="grid sm:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden border border-border">
                  {competencies.map((c) => (
                    <div key={c.title} className="bg-card p-5">
                      <h4 className="text-sm font-semibold text-foreground mb-1.5">
                        {c.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {c.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operating principles */}
              <div className="space-y-5">
                <span className="eyebrow">Operating Principles</span>
                <ul className="space-y-3">
                  {principles.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3 text-foreground/90"
                    >
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span className="text-sm">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <Link to="/experience" className="btn-primary">
                  View Experience
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
