export default function Footer() {
  return (
    <footer className="border-t border-black/5 py-10 bg-white">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted">
          © {new Date().getFullYear()} Liquid Logic. All rights reserved.
        </div>
        <div className="flex items-center gap-6 text-sm text-muted">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          <a href="#" className="hover:text-foreground transition-colors">Support</a>
        </div>
      </div>
    </footer>
  );
}
