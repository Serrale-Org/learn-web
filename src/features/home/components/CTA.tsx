export function CTA() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-20" id="cert">
      <div className="rounded-2xl bg-white p-20 bg-gradient-to-br from-primary/5 to-secondary/5 text-center">
        <h2 className="text-2xl sm:text-4xl font-semibold mb-4 tracking-tight text-balance">
          Join the Serrale <span className="text-primary">Community</span>
        </h2>
        <p className="text-muted-foreground mb-6 text-balance max-w-lg mx-auto">
          Transform the way you learn with flexible, accessible, and engagin
          online courses designed for your success.{" "}
        </p>
        <a
          href="#courses"
          className="inline-block px-6 py-3 rounded-md bg-secondary text-secondary-foreground font-semibold"
        >
          Start Learning Now
        </a>
      </div>
    </section>
  );
}
