const placeholderProjects = [
  {
    title: "Projet à venir",
    description: "Vos futurs projets seront affichés ici. Un design de portfolio épuré prêt à être personnalisé.",
    tags: ["React", "Next.js"],
  },
  {
    title: "Projet à venir",
    description: "Ajoutez vos réalisations pour mettre en valeur votre parcours et vos compétences.",
    tags: ["TypeScript", "Tailwind"],
  },
];

export default function Projects() {
  return (
    <section
      id="projets"
      className="py-24 px-6 bg-muted/30"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-12">
          Projets
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {placeholderProjects.map((project, index) => (
            <article
              key={index}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-colors"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
