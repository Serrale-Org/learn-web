export function Header() {
  return (
    <header className="w-full border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="font-semibold tracking-tight text-xl">
          Serrale Learn
        </a>
        <nav className="hidden sm:flex items-center gap-6  text-muted-foreground">
          <a href="#courses" className="hover:text-foreground">
            Courses
          </a>
          <a href="#how" className="hover:text-foreground">
            How it works
          </a>
          <a href="#cert" className="hover:text-foreground">
            Certification
          </a>
          <a href="#faq" className="hover:text-foreground">
            FAQ
          </a>
        </nav>
        <div className="flex items-center gap-6">
          <a
            href="/login"
            className="t text-muted-foreground hover:text-foreground"
          >
            Sign in
          </a>
          <a
            href="#courses"
            className=" px-3 py-2 rounded-md bg-primary text-primary-foreground"
          >
            Browse courses
          </a>
        </div>
      </div>
    </header>
  );
}
