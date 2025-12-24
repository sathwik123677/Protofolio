import { Trophy, Target, Award, Code2, Zap, BookOpen } from "lucide-react";

const achievements = [
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "LeetCode 1800+ Rating",
    date: "2024",
    color: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100",
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Codeforces 1000+ Rating",
    date: "2024",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "NPTEL A+ Certification",
    date: "2023",
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Adobe Hackathon Certification",
    date: "2025",
    color: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-100",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Young Turks Program - Top 0.2%",
    date: "2025",
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Amazon ML Challenge - Top 2%",
    date: "2025",
    color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100",
  },
];

const rankings = [
  {
    title: "JEE Advanced",
    rank: "Top 5%",
    description: "All India Ranking",
  },
  {
    title: "JEE Main",
    rank: "Top 1.1%",
    description: "All India Ranking",
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-3">
            <h2 className="text-4xl font-bold text-foreground">Achievements & Certifications</h2>
            <p className="text-foreground/60">Recognizing excellence in competitive programming and professional development</p>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-all duration-200 group"
              >
                <div className={`inline-block p-3 rounded-lg mb-4 ${achievement.color}`}>
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-foreground/60">{achievement.date}</p>
              </div>
            ))}
          </div>

          {/* Entrance Rankings */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Entrance Examination Rankings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rankings.map((ranking, index) => (
                <div
                  key={index}
                  className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30 rounded-xl text-center"
                >
                  <div className="text-5xl font-bold text-accent mb-3">
                    {ranking.rank}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {ranking.title}
                  </h3>
                  <p className="text-sm text-foreground/60">{ranking.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Stats */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">Competitive Stats</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">800+</div>
                <div className="text-sm text-foreground/60">DSA Problems Solved</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">10+</div>
                <div className="text-sm text-foreground/60">Production Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">92%</div>
                <div className="text-sm text-foreground/60">NPTEL Grade</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">8.14</div>
                <div className="text-sm text-foreground/60">Current CGPA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
