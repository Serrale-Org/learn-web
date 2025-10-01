export function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} SERRALE. All rights reserved.</div>
        <nav className="flex items-center gap-4">
          <a href="#" className="hover:text-black">
            Privacy
          </a>
          <a href="#" className="hover:text-black">
            Terms
          </a>
          <a href="#" className="hover:text-black">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
