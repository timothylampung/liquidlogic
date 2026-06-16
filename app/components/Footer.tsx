export default function Footer() {
  return (
    <footer className="border-t border-black/5 py-10 bg-white">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <div className="text-sm text-muted">
          © {new Date().getFullYear()} Liquid Logic. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
