import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onViewProjects: () => void;
  onGetInTouch: () => void;
}

export default function HeroSection({
  onViewProjects,
  onGetInTouch,
}: HeroSectionProps) {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href =
      "https://cdn.builder.io/api/v1/image/assets%2F94cde98f4e214a3d80796d4fabf233fa%2Fea1e4d58963b4bc6be22444446492d04?format=webp&width=800";
    link.download = "resume7.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const stats = [
    { number: "1100+", label: "Problems Solved" },
    { number: "10+", label: "Production Projects" },
    { number: "92%", label: "NPTEL A+ Grade" },
    { number: "8.50", label: "CGPA" },
  ];

  return (
    <section
      id="home"
      className="pt-20 pb-0 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Hero Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12 md:py-20">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                Welcome to my portfolio
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Pathivada <span className="text-accent">Sathwik</span>
              </h1>
              <p className="text-lg text-foreground/70">
                Computer Science Undergraduate | Full-Stack Developer | Competitive Programmer
              </p>
            </div>

            <p className="text-base text-foreground/60 leading-relaxed">
              Passionate about building scalable web applications, solving complex algorithms, and
              applying machine learning to real-world problems. Currently pursuing B.Tech at NIT Patna
              with expertise in full-stack development and competitive programming.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                onClick={onViewProjects}
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-accent/5"
                onClick={onGetInTouch}
              >
                Contact Me
              </Button>
            </div>

            {/* Stats Inline */}
            <div className="flex gap-6 pt-4 text-sm">
              <div>
                <div className="text-2xl font-bold text-accent">2000+</div>
                <div className="text-foreground/60">LeetCode Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">1200+</div>
                <div className="text-foreground/60">Codeforces Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">5+</div>
                <div className="text-foreground/60">Projects Live</div>
              </div>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F94cde98f4e214a3d80796d4fabf233fa%2Fea1e4d58963b4bc6be22444446492d04?format=webp&width=800"
                alt="Pathivada Sathwik"
                className="relative rounded-3xl w-full max-w-md object-cover shadow-2xl"
              />
              <div className="absolute bottom-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Open to work
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section Below Hero */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-16 border-t border-border">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-foreground/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
