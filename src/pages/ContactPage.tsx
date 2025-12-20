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

    // Simulate form submission
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
      <section className="pb-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glow-card glow-border p-8">
              <h2 className="text-2xl font-heading font-bold mb-6">Send a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground placeholder:text-muted-foreground"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground placeholder:text-muted-foreground"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground"
                  >
                    <option value="">Select a topic</option>
                    <option value="job">Job Opportunity</option>
                    <option value="project">Project Collaboration</option>
                    <option value="freelance">Freelance Work</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground placeholder:text-muted-foreground resize-none"
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
            <div className="space-y-8">
              {/* Direct Contact */}
              <div className="glow-card p-6 space-y-6">
                <h3 className="text-xl font-heading font-bold">Direct Contact</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="font-medium text-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-medium text-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="glow-card p-6 space-y-6">
                <h3 className="text-xl font-heading font-bold">Connect Online</h3>
                <div className="space-y-4">
                  {socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <social.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{social.name}</p>
                        <p className="text-sm text-muted-foreground">{social.username}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Work Preference */}
              <div className="glow-card glow-border p-6 space-y-4">
                <h3 className="text-xl font-heading font-bold">Work Preferences</h3>
                <p className="text-muted-foreground">
                  I prefer remote roles but am open to full-time, hybrid, or on-site 
                  positions with relocation support. Currently based in Lagos, Nigeria.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm rounded-full bg-primary/20 text-primary border border-primary/30">
                    Remote Preferred
                  </span>
                  <span className="px-3 py-1 text-sm rounded-full bg-secondary text-muted-foreground">
                    Open to Hybrid
                  </span>
                  <span className="px-3 py-1 text-sm rounded-full bg-secondary text-muted-foreground">
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
