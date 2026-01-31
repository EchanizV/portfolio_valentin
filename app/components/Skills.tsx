const skills = [
  { category: "Frontend", items: ["React", "Next.js", "Vue.js", "HTML", "CSS", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "SQL", "PHP", "CodeIgniter"] },
  { category: "Mobile", items: ["React Native", "Expo", "React Native Web"] },
  { category: "Desktop", items: ["C#", "Java", "Python"] },
  { category: "Big Data", items: ["Python", "SQL", "Spark", "PySpark", "Pandas", "Hive"] },
  { category: "DevOps", items: ["Docker", "GitLab CI/CD"] },
  { category: "Outils", items: ["Git", "Figma", "VSCode", "Docker"] },
];

export default function Skills() {
  return (
    <section
      id="competences"
      className="py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-12">
          Compétences
        </h2>
        <div className="grid sm:grid-cols-2 gap-8">
          {skills.map((group) => (
            <div key={group.category} className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
