import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import isotipo from "@/assets/neurocalm-logo (2).png";

const WAITLIST_URL = "https://forms.gle/BfZHorebqUUiXFJp8";

const navLinks = [
  { href: "#problema", label: "El desafío" },
  { href: "#solucion", label: "Solución" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#confianza", label: "Transparencia" },
  { href: "/sobre-calmy", label: "Quiénes somos", isRoute: true },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-card/90 backdrop-blur-xl shadow-[var(--shadow-soft)] border-border/60"
          : "bg-card/75 backdrop-blur-md border-border/35"
      }`}
    >
      <div className="section-container h-[68px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src={isotipo} alt="Calmy" className="h-9 w-auto" />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-[17px] font-bold text-foreground tracking-tight">Calmy</span>
            <span className="font-body text-xs text-muted-foreground">por NeuroCalm</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) =>
            l.isRoute ? (
              <Link
                key={l.href}
                to={l.href}
                className="text-[13px] text-muted-foreground hover:text-foreground transition-colors font-body font-semibold"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] text-muted-foreground hover:text-foreground transition-colors font-body font-semibold"
              >
                {l.label}
              </a>
            )
          )}
          <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="calm" size="sm">
              Acceso anticipado
            </Button>
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card/95 backdrop-blur-xl border-b border-border/50 px-5 pb-5 space-y-3 shadow-[var(--shadow-soft)]">
          {navLinks.map((l) =>
            l.isRoute ? (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm text-muted-foreground hover:text-foreground font-body py-1"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm text-muted-foreground hover:text-foreground font-body py-1"
              >
                {l.label}
              </a>
            )
          )}
          <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="calm" size="sm" className="w-full mt-2">
              Acceso anticipado
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
