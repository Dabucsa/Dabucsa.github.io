import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted2">
              Hecho con ❤️ por tu anfitrión en{" "}
              <span className="text-foreground font-medium">Pucón Andino</span>
            </p>
            <p className="text-xs text-muted mt-1">
              Tu guía para explorar Pucón y sus alrededores
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted">
            <Link
              href="https://zeroaustral.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-muted2 transition-colors"
            >
              Desarrollado por ZeroAustral
            </Link>
            <span>·</span>
            <span>Pucón, Chile 🇨🇱</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
