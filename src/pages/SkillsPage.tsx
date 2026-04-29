import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const skillGroups = [
  {
    label: "Support Platforms",
    items: [
      { name: "Zendesk", note: "Macros · SOPs · Triggers · QA reporting" },
      { name: "Salesforce CRM", note: "Cases · pipeline notes · 95%+ data accuracy" },
      { name: "Intercom", note: "Inbox routing · saved replies" },
      { name: "Marketplace tools", note: "Multi-region context handling" },
    ],
  },
  {
    label: "Communication",
    items: [
      { name: "Live Chat", note: "Concurrent ticket handling" },
      { name: "Voice", note: "De-escalation · clear US/UK tone" },
      { name: "Email", note: "Structured · QA-graded responses" },
      { name: "Slack", note: "Cross-team escalations · shift handovers" },
    ],
  },
  {
    label: "Productivity",
    items: [
      { name: "Google Workspace", note: "Sheets dashboards · Docs SOPs" },
      { name: "Notion", note: "Knowledge base ownership" },
      { name: "Trello", note: "Sprint visibility · ticket tracking" },
      { name: "Microsoft Excel", note: "Reporting · pivot logic" },
    ],
  },
  {
    label: "CX Practices",
    items: [
      { name: "FCR Optimisation", note: "Reducing repeat contacts" },
      { name: "AHT Reduction", note: "−12% achieved at Turing" },
      { name: "CSAT / NPS", note: "Survey-conscious phrasing" },
      { name: "De-escalation", note: "Structured empathy frameworks" },
    ],
  },
];

const metrics = [
  { value: "95%+", label: "QA score" },
  { value: "−20%", label: "Escalations" },
  { value: "−12%", label: "AHT" },
  { value: "+25%", label: "Task visibility" },
];

const SkillsPage = () => {
  return (
    <div>
      <section className="page-header">
        <div className="section-container">
          <span className="eyebrow mb-4">Capabilities</span>
          <h1 className="page-title mt-4">
            The toolkit behind the
            <br />
            <span className="text-muted-foreground font-normal">
              QA scores.
            </span>
          </h1>
          <p className="page-subtitle mt-4">
            Platforms, channels and CX practices used daily across Outsource
            Global, Turing and Flutterwave engagements.
          </p>
        </div>
      </section>

      {/* Metrics strip */}
      <section className="border-y border-border bg-secondary/40">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className={`px-5 py-7 ${i === 0 ? "border-l border-border" : ""}`}
              >
                <div className="stat-value text-foreground">{m.value}</div>
                <div className="text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground mt-2">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill groups */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-5">
            {skillGroups.map((group) => (
              <div key={group.label} className="card-flat p-6">
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-border">
                  <h3 className="text-base font-semibold">{group.label}</h3>
                  <span className="text-xs font-mono text-muted-foreground">
                    {String(group.items.length).padStart(2, "0")} items
                  </span>
                </div>
                <ul className="space-y-3.5">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-start justify-between gap-4"
                    >
                      <div className="flex items-start gap-3 min-w-0">
                        <span className="font-mono text-[10px] text-accent mt-1.5 flex-shrink-0">
                          ▸
                        </span>
                        <div className="min-w-0">
                          <div className="text-sm font-medium text-foreground">
                            {item.name}
                          </div>
                          <div className="text-xs text-muted-foreground mt-0.5">
                            {item.note}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border">
        <div className="section-container text-center max-w-2xl">
          <h2 className="text-2xl font-bold mb-3">
            Looking for a steady operator?
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            Available for immediate placement — full-time, contract or shift-based.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-primary">
              Let's Talk
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

export default SkillsPage;
