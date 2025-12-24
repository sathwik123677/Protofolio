import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  title: string;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Python", "JavaScript", "TypeScript", "MySQL"],
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  },
  {
    title: "Web Development",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Docker"],
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  },
  {
    title: "Machine Learning",
    skills: ["Regression Models", "ANN", "CNN", "RNN", "Data Analysis", "Scikit-Learn"],
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Clerk", "MongoDB Compass", "Docker", "Linux"],
    color: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  },
  {
    title: "Coursework",
    skills: ["DSA", "OOPs", "Operating Systems", "DBMS", "Computer Networks", "AI", "Software Engineering"],
    color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  },
  {
    title: "Soft Skills",
    skills: ["Creative Thinking", "Teamwork", "Communication", "Problem Solving", "Leadership"],
    color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-3">
            <h2 className="text-4xl font-bold text-foreground">Skills</h2>
            <p className="text-foreground/60">Technologies and expertise I work with</p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="space-y-4 p-6 bg-background rounded-xl border border-border hover:border-accent/50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className={`${category.color} font-medium`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
