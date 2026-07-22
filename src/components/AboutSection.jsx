import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    "Passionate full-stack developer with expertise in modern web technologies",
    "Competitive programmer with strong problem-solving skills",
    "Hands-on experience building scalable systems and applications",
    "Strong expertise in machine learning and AI-driven solutions",
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Bio */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
              <div className="h-1 w-16 bg-accent rounded-full"></div>
            </div>

            <div className="space-y-4 text-base text-foreground/70 leading-relaxed">
              <p>
                I'm a Computer Science and Engineering undergraduate at the National Institute of Technology, Patna, with a passion for building innovative solutions through code.
              </p>

              <p>
                My journey in software development has been driven by a genuine interest in understanding how things work and the desire to create systems that solve real-world problems.
              </p>

              <p>
                Whether it's developing full-stack applications, optimizing algorithms, or implementing advanced machine learning models, I approach every project with dedication and a commitment to clean, maintainable code.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3 pt-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span className="text-sm text-foreground/70">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Education & Achievements */}
          <div className="space-y-6">
            {/* Education */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold text-foreground">Bachelor of Technology</div>
                  <div className="text-sm text-accent">Computer Science Engineering</div>
                  <div className="text-sm text-foreground/60 mt-1">
                    National Institute of Technology, Patna
                  </div>
                </div>
                <div className="pt-2 border-t border-border">
                  <div className="text-sm text-foreground/60">
                    <span className="font-semibold text-foreground">CGPA:</span> 8.50
                  </div>
                  <div className="text-sm text-foreground/60">
                    <span className="font-semibold text-foreground">Graduation:</span> 2027
                  </div>
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Key Achievements</h3>
              <ul className="space-y-3 text-sm text-foreground/70">
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>
                    <span className="font-semibold text-foreground">LeetCode rating 2000+</span> rating with 1500+ problems solved
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>
                    <span className="font-semibold text-foreground">Codeforces 1500+</span> rating
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>
                    <span className="font-semibold text-foreground">NPTEL A+</span> certification in "The Joy of Computing using Python" with 92%
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>
                    <span className="font-semibold text-foreground">Adobe Hackathon</span> Certification 2025
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
