import { useState } from "react";
import { Mail, Phone, MapPin, Twitter, Send, ArrowRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "conquestaisiri@gmail.com",
    href: "mailto:conquestaisiri@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 704 916 3089",
    href: "tel:+2347049163089",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lagos, Nigeria (Remote-First)",
    href: null,
  },
];

const socials = [
  {
    name: "Twitter / X",
    icon: Twitter,
    href: "https://x.com/iamconqwest",
    username: "@iamconqwest",
  },
  {
    name: "Telegram",
    icon: Send,
    href: "https://t.me/BIG_CQ",
    username: "@BIG_CQ",
  },
];

const Web3ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subjectText = formData.subject 
      ? `Web3 Inquiry: ${formData.subject}` 
      : "Web3 Portfolio Inquiry";
    
    const bodyText = `Hi Conquest,

${formData.message}

---
From: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}`;

    const mailtoLink = `mailto:conquestaisiri@gmail.com?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;
    
    window.open(mailtoLink, '_self');
    
    toast({
      title: "Opening your email app...",
      description: "Complete sending the email in your mail application.",
    });
  };

  return (
    <div className="relative">
      {/* Hero Glow - Web3 themed */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,_hsl(170_60%_30%_/_0.25)_0%,_transparent_55%)]" />

      {/* Header */}
      <section className="page-header">
        <h1 className="page-title">
          Let's <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">Talk</span>
        </h1>
        <p className="page-subtitle">
          Building in Web3 and need clarity, structure, or communication support? Let's connect.
        </p>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="relative overflow-hidden rounded-xl border border-emerald-500/30 bg-card/60 backdrop-blur-sm p-6">
              <h2 className="text-lg font-heading font-bold mb-5">Send a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-medium text-foreground">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      className="w-full px-3 py-2 rounded-lg bg-background border border-border focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all text-sm text-foreground placeholder:text-muted-foreground"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-foreground">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      className="w-full px-3 py-2 rounded-lg bg-background border border-border focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all text-sm text-foreground placeholder:text-muted-foreground"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-medium text-foreground">
                    What's this about?
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded-lg bg-background border border-border focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all text-sm text-foreground cursor-pointer"
                  >
                    <option value="">Select a topic</option>
                    <option value="content">Content & Writing</option>
                    <option value="research">Research Support</option>
                    <option value="community">Community Work</option>
                    <option value="coordination">Coordination Role</option>
                    <option value="other">Something Else</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 rounded-lg bg-background border border-border focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all text-sm text-foreground placeholder:text-muted-foreground resize-none"
                    placeholder="Tell me about your project or what you're building..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 text-white bg-gradient-to-r from-emerald-500 to-teal-500 shadow-[0_4px_16px_hsl(170_80%_45%_/_0.35)] hover:scale-[1.02] hover:brightness-110"
                >
                  Send Message
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-5">
              {/* Direct Contact */}
              <div className="relative overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur-sm p-5">
                <h3 className="text-base font-heading font-bold mb-4">Direct Contact</h3>
                <div className="space-y-3">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                        <info.icon className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="font-medium text-sm text-foreground hover:text-emerald-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-medium text-sm text-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="relative overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur-sm p-5">
                <h3 className="text-base font-heading font-bold mb-4">Connect Online</h3>
                <div className="space-y-3">
                  {socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-emerald-500/20 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                        <social.icon className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-foreground">{social.name}</p>
                        <p className="text-xs text-muted-foreground">{social.username}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="relative overflow-hidden rounded-xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-teal-500/5 backdrop-blur-sm p-5">
                <h3 className="text-base font-heading font-bold mb-3">Availability</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Remote-first. Available for Web3 content, research, community, and coordination roles.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 text-xs rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                    Remote-First
                  </span>
                  <span className="px-2.5 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                    Async-Native
                  </span>
                  <span className="px-2.5 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                    Flexible Timezone
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Web3ContactPage;
