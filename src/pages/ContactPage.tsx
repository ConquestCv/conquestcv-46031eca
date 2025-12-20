import { useState } from "react";
import { Mail, Phone, MapPin, Twitter, Send, ArrowRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "conquestsammy5@gmail.com",
    href: "mailto:conquestsammy5@gmail.com",
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
    value: "Lagos, Nigeria",
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

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="relative">
      <div className="hero-glow" />

      {/* Header */}
      <section className="page-header">
        <h1 className="page-title">
          Get in <span className="text-gradient">Touch</span>
        </h1>
        <p className="page-subtitle">
          I'm available for remote opportunities. Let's discuss how I can support your team.
        </p>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="interactive-card !p-6">
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
                      className="w-full px-3 py-2 rounded-lg bg-muted/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all text-sm text-foreground placeholder:text-muted-foreground"
                      placeholder="John Doe"
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
                      className="w-full px-3 py-2 rounded-lg bg-muted/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all text-sm text-foreground placeholder:text-muted-foreground"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-medium text-foreground">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded-lg bg-muted/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all text-sm text-foreground"
                  >
                    <option value="">Select a topic</option>
                    <option value="job">Job Opportunity</option>
                    <option value="project">Project Collaboration</option>
                    <option value="freelance">Freelance Work</option>
                    <option value="general">General Inquiry</option>
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
                    className="w-full px-3 py-2 rounded-lg bg-muted/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all text-sm text-foreground placeholder:text-muted-foreground resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-5">
              {/* Direct Contact */}
              <div className="interactive-card !p-5">
                <h3 className="text-base font-heading font-bold mb-4">Direct Contact</h3>
                <div className="space-y-3">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="icon-container">
                        <info.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="font-medium text-sm text-foreground hover:text-primary transition-colors"
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
              <div className="interactive-card !p-5">
                <h3 className="text-base font-heading font-bold mb-4">Connect Online</h3>
                <div className="space-y-3">
                  {socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border hover:border-primary/40 hover:bg-primary/5 transition-all group"
                    >
                      <div className="icon-container">
                        <social.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-foreground">{social.name}</p>
                        <p className="text-xs text-muted-foreground">{social.username}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Work Preference */}
              <div className="interactive-card !p-5">
                <h3 className="text-base font-heading font-bold mb-3">Work Preferences</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  I prefer remote roles but am open to hybrid or on-site with relocation support.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 text-xs rounded-full bg-primary/15 text-primary border border-primary/25">
                    Remote Preferred
                  </span>
                  <span className="px-2.5 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                    Open to Hybrid
                  </span>
                  <span className="px-2.5 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                    Relocation OK
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

export default ContactPage;
