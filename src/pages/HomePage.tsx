import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  MessageSquare,
  Headphones,
  Mail,
  ShieldCheck,
  Gauge,
  TrendingDown,
  Clock,
} from "lucide-react";
import profileImage from "@/assets/conquest-profile.jpg";

const stats = [
  { value: "95%+", label: "QA Performance" },
  { value: "20%", label: "Escalation Reduction" },
  { value: "12%", label: "AHT Improvement" },
  { value: "70+", label: "Daily Interactions" },
];

const channels = [
  { icon: MessageSquare, label: "Live Chat" },
  { icon: Headphones, label: "Voice" },
  { icon: Mail, label: "Email" },
];

const pillars = [
  {
    num: "01",
    title: "Resolution-first mindset",
    body: "Every ticket is closed with a real fix — not a holding pattern. I optimise for First Contact Resolution and clean handoffs, not vanity metrics.",
    icon: ShieldCheck,
  },
  {
    num: "02",
    title: "QA-grade documentation",
    body: "Structured Zendesk macros, accurate Salesforce records and SOP-aligned notes — so the next agent (or auditor) can pick up without friction.",
    icon: Gauge,
  },
  {
    num: "03",
    title: "Built for high volume",
    body: "Calm under pressure across 50–80+ daily interactions. Tuned workflows that drop AHT without dropping CSAT.",
    icon: TrendingDown,
  },
];

const HomePage = () => {
  return (
    <div>
      {/* HERO */}
      <section className="pt-28 sm:pt-32 pb-20 lg:pb-28">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left */}
            <div className="lg:col-span-7 space-y-7 animate-slide-up">
              <span className="badge-success">
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse-dot" />
                Available now · 24/7 shift-ready
              </span>

              <div className="space-y-5">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
                  Customer Experience
                  <br />
                  <span className="accent-underline">Specialist.</span>{" "}
                  <span className="text-muted-foreground font-normal">
                    Resolution-first.
                  </span>
                </h1>
                <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
                  2+ years running high-volume omnichannel support — chat, voice
                  and email — for remote-first teams. I close tickets cleanly,
                  hold a 95%+ QA score, and reduce escalations through accurate
                  diagnosis and disciplined documentation.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link to="/contact" className="btn-primary">
                  Hire Me
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/experience" className="btn-secondary">
                  See Experience
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Channels */}
              <div className="pt-4 flex items-center gap-5 flex-wrap">
                <span className="text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground">
                  Channels
                </span>
                {channels.map((c) => (
                  <div
                    key={c.label}
                    className="flex items-center gap-1.5 text-sm text-foreground"
                  >
                    <c.icon className="w-3.5 h-3.5 text-accent" />
                    {c.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — profile + stats card */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="relative card-flat overflow-hidden">
                  <img
                    src={profileImage}
                    alt="Aisiri Conquest Samuel"
                    className="w-full aspect-[4/5] object-cover"
                  />
                  <div className="absolute top-4 left-4 mono-pill bg-background/90 backdrop-blur-sm">
                    Lagos, NG · Remote
                  </div>
                </div>

                {/* Floating KPI card */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 card-flat bg-card p-4 shadow-lg max-w-[220px]">
                  <div className="text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground mb-2">
                    Last 12 months
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="text-sm text-muted-foreground">QA score</span>
                      <span className="font-mono text-sm font-semibold text-foreground">
                        95%+
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="text-sm text-muted-foreground">Escalations</span>
                      <span className="font-mono text-sm font-semibold text-accent">
                        −20%
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="text-sm text-muted-foreground">AHT</span>
                      <span className="font-mono text-sm font-semibold text-accent">
                        −12%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-y border-border bg-secondary/40">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-5 py-7 ${i === 0 ? "border-l border-border" : ""}`}
              >
                <div className="stat-value text-foreground">{s.value}</div>
                <div className="text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground mt-2">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow mb-4">How I Work</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-3">
              Support that actually closes the loop.
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Three things shape every interaction: resolution, documentation
              quality, and operational discipline. Founders care about the same
              three.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {pillars.map((p) => (
              <div key={p.num} className="card-interactive group">
                <div className="flex items-center justify-between mb-5">
                  <span className="num-marker">{p.num}.</span>
                  <p.icon className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK SETUP STRIP */}
      <section className="py-16 border-t border-border">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <span className="eyebrow mb-4">Tech Setup</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-4">
                Ready to plug in. Day one.
              </h2>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden border border-border">
              {[
                { k: "Hardware", v: "HP ProBook · Ryzen 5 · 16GB RAM" },
                { k: "Connection", v: "50 Mbps Fiber · 5G failover" },
                { k: "Power", v: "Inverter + Generator backup" },
                { k: "Audio", v: "Noise-cancelling USB-C headset" },
                { k: "Workspace", v: "Dedicated quiet home office" },
                { k: "Availability", v: "24/7 shift coverage" },
              ].map((row) => (
                <div key={row.k} className="bg-card p-5">
                  <div className="text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground mb-1.5">
                    {row.k}
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    {row.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="section-container">
          <div className="card-flat p-10 lg:p-14 text-center max-w-3xl mx-auto">
            <Clock className="w-5 h-5 text-accent mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Need a dependable hand on your support queue?
            </h2>
            <p className="text-muted-foreground text-base mb-7 max-w-xl mx-auto">
              I respond within the same business day. Send a brief — role,
              channels, volume — and I'll come back with a clear plan.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="btn-primary">
                Start a Conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:conquestaisiri@gmail.com"
                className="btn-secondary"
              >
                <Mail className="w-4 h-4" />
                conquestaisiri@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
