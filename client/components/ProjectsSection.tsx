import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
}

const projects: Project[] = [
  {
    title: "CP Arena",
    category: "Competitive Programming Platform",
    description:
      "A full-featured competitive programming platform supporting ICPC-style contests with automated scoring, penalties, real-time leaderboards, and post-contest collaboration features.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F94cde98f4e214a3d80796d4fabf233fa%2F0d913c0ae03a43738539c3a44c804aeb?format=webp&width=800",
    technologies: ["React", "Next.js", "MongoDB", "Express.js", "Clerk", "ShadCN"],
    github: "https://github.com/sathwik123677/coding_areana",
  },
  {
    title: "Food Donor",
    category: "NGO-Integrated Food Donation Platform",
    description:
      "An innovative full-stack platform connecting surplus food donors with NGOs in real-time, enabling donation matching, tracking, and gamification for community impact.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F94cde98f4e214a3d80796d4fabf233fa%2Fc92200fb327f4bea9c515529c23b9cee?format=webp&width=800",
    technologies: ["React", "React Router", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/sathwik123677/Food_Donar",
  },
  {
    title: "Campus Events",
    category: "Campus Event Management Platform",
    description:
      "Campus event management platform enabling students and organizers to discover, create, and manage events with real-time tracking and integrated QR code system.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F94cde98f4e214a3d80796d4fabf233fa%2Fa9d104e7601c4d5abaa433ed77b3827e?format=webp&width=800",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/sathwik123677/Campus_events",
  },
  {
    title: "AgriVerse",
    category: "AI-Powered Agricultural Decision Support",
    description:
      "AI-powered agricultural decision support system leveraging machine learning for crop recommendations, yield prediction, and plant disease detection.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F94cde98f4e214a3d80796d4fabf233fa%2F52a8e8e55d5444b98cf71bfc14f2cd2e?format=webp&width=800",
    technologies: ["Python", "Machine Learning", "NumPy", "Pandas", "Scikit-Learn"],
    github: "https://github.com/sathwik123677/AgriVerse",
  },
  {
    title: "MindMate",
    category: "Interactive Memory Game",
    description:
      "Interactive motivational memory game combining gameplay mechanics with psychological insights to improve cognitive function and user engagement.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F94cde98f4e214a3d80796d4fabf233fa%2Fe3f74fb6b68a4e679c14f16a56a90d17?format=webp&width=800",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Firebase"],
    github: "https://github.com/sathwik123677/MindMate",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-3">
            <h2 className="text-4xl font-bold text-foreground">Projects & Portfolio</h2>
            <p className="text-foreground/60">
              A showcase of my recent projects demonstrating expertise in full-stack development, competitive programming, and AI
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group grid grid-cols-1 md:grid-cols-2 gap-6 border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300 bg-background"
              >
                {/* Project Image */}
                <div className="overflow-hidden h-64 md:h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6 md:p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-semibold text-accent mb-2">
                        {project.category}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                    </div>

                    <p className="text-base text-foreground/70 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* GitHub Link */}
                  <div className="pt-6 flex gap-3">
                    <Button
                      size="sm"
                      asChild
                      className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All CTA */}
          <div className="text-center pt-8">
            <p className="text-foreground/60 mb-4">10+ projects completed</p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              asChild
            >
              <a href="https://github.com/sathwik123677" target="_blank" rel="noopener noreferrer">
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
