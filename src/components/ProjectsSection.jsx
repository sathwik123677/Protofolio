import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Codeforces Question Recommender",
    category: "Personalized Recommendation System",
    description:
      "A personalized problem recommendation system for Codeforces that suggests challenges based on user profile analysis. Features topic filtering and custom recommendations powered by a Hugging Face Python backend querying the Codeforces API.",
    image: "/codeforces-recommender.png",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Python", "Hugging Face", "Codeforces API", "Axios"],
    github: "https://github.com/sathwik123677/Codeforce_Question_Recomendation",
    demo: "https://codeforce-question-recomendation.vercel.app/",
  },
  {
    title: "AI Interview Mocker",
    category: "AI-Powered Mock Interview Platform",
    description:
      "An interactive mock interview platform utilizing Google Gemini AI to generate custom role-based questions. Features speech-to-text response capturing and saves rating evaluations and feedback into a PostgreSQL database.",
    image: "/ai-interview-mocker.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "Google Gemini AI", "Clerk Auth", "PostgreSQL", "Drizzle ORM"],
    github: "https://github.com/sathwik123677/AI-Interview-Mocker",
    demo: "https://ai-interview-mocker-pgcs.vercel.app/",
  },
  {
    title: "AgriVerse",
    category: "AI-Powered Agricultural Decision Support",
    description:
      "AI-powered agricultural decision support system leveraging machine learning. Features crop recommendations, yield prediction, and plant disease detection models.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F94cde98f4e214a3d80796d4fabf233fa%2F52a8e8e55d5444b98cf71bfc14f2cd2e?format=webp&width=800",
    technologies: ["Python", "Machine Learning", "NumPy", "Pandas", "Scikit-Learn"],
    github: "https://github.com/sathwik123677/AgriVerse",
    demo: "https://agriverse-livid.vercel.app/",
  },
  {
    title: "Campus Events",
    category: "Campus Event Management Platform",
    description:
      "A campus event management platform enabling students and organizers to discover, create, and manage events. Features real-time tracking and integrated QR code check-in.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F94cde98f4e214a3d80796d4fabf233fa%2Fa9d104e7601c4d5abaa433ed77b3827e?format=webp&width=800",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/sathwik123677/Campus_events",
    demo: "https://github.com/sathwik123677/Campus_events",
  },
  {
    title: "Car Rental Platform",
    category: "Full-Stack Vehicle Rental System",
    description:
      "A full-stack vehicle rental system featuring live availability checks and online booking. Includes JWT authorization and an owner dashboard to manage vehicle listings.",
    image: "/car-rental.png",
    technologies: ["MongoDB", "Express", "React", "Node.js", "JWT Auth", "Tailwind CSS", "ImageKit CDN"],
    github: "https://github.com/sathwik123677/Car_Rental_platfrom",
    demo: "https://car-rental-sathwik.vercel.app/",
  },
  {
    title: "MindMate",
    category: "Interactive Memory Game",
    description:
      "Interactive memory game combining gameplay mechanics with motivational elements. Built to improve cognitive function, track progress, and boost user engagement.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F94cde98f4e214a3d80796d4fabf233fa%2Fe3f74fb6b68a4e679c14f16a56a90d17?format=webp&width=800",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Firebase"],
    github: "https://github.com/sathwik123677/MindMate",
    demo: "https://mind-mate-tau.vercel.app/",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-3">
            <h2 className="text-4xl font-bold text-foreground">Projects</h2>
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

                  {/* GitHub & Live Demo Links */}
                  <div className="pt-6 flex flex-wrap gap-5">
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
                    {project.demo && (
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="border-accent text-accent hover:bg-accent/10 gap-2"
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      </Button>
                    )}
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
