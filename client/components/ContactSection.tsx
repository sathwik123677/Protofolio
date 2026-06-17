import { useState } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      toast.error("Please enter a valid email");
      return;
    }
    if (!formData.message.trim()) {
      toast.error("Please enter a message");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "sathwikp06@gmail.com",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to send email");
      }

      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      label: "Email",
      value: "sathwikp06@gmail.com",
      href: "mailto:sathwikp06@gmail.com",
      color: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100",
    },
    {
      icon: <Linkedin className="w-8 h-8" />,
      label: "LinkedIn",
      value: "Pathivada Sathwik",
      href: "https://www.linkedin.com/in/pathivada-sathwik",
      color: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-100",
    },
    {
      icon: <Github className="w-8 h-8" />,
      label: "GitHub",
      value: "GitHub Profile",
      href: "https://github.com/sathwik123677",
      color: "bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-100",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-3">
            <h2 className="text-4xl font-bold text-foreground">Get in Touch</h2>
            <p className="text-foreground/60">
              I'm always interested in hearing about new opportunities and collaborations. Feel free to reach out!
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-all duration-200 flex flex-col items-center text-center group"
              >
                <div className={`p-3 rounded-lg mb-4 ${method.color}`}>
                  {method.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-1">{method.label}</h3>
                <p className="text-sm text-foreground/60">{method.value}</p>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto w-full">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Send me a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-card border-border focus:border-accent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="bg-card border-border focus:border-accent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or inquiry..."
                    rows={5}
                    className="bg-card border-border focus:border-accent resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  size="lg"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
