export default function Hero() {
  return (
    <section
      id="accueil"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-20"
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4">
          Développeur & créateur
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
          Bonjour, je suis{" "}
          <span className="text-primary">Valentin</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Je crée des expériences web modernes et performantes. Passionné par le
          design et le code, je transforme les idées en réalité digitale.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <a
            href="#projets"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-border text-foreground font-medium hover:bg-muted transition-colors"
          >
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
}
