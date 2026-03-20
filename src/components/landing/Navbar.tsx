import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/neurocalm-logo.png";

const WAITLIST_URL = "#waitlist";

const navLinks = [
  { href: "#problema", label: "El desafío" },
  { href: "#solucion", label: "Solución" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#confianza", label: "Transparencia" },
  { href: "#equipo", label: "Equipo" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/90 backdrop-blur-xl shadow-[var(--shadow-soft)] border-b border-border/40"
          : "bg-transparent"
      }`}
    >
      <div className="section-container h-16 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src={logo} alt="NeuroCalm" className="h-8" />
        </a>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body font-medium"
            >
              {l.label}
            </a>
          ))}
          <a href={WAITLIST_URL}>
            <Button variant="calm" size="sm">
              Únete a la waitlist
            </Button>
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card/95 backdrop-blur-xl border-b border-border/50 px-5 pb-5 space-y-3 shadow-[var(--shadow-soft)]">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-muted-foreground hover:text-foreground font-body py-1"
            >
              {l.label}
            </a>
          ))}
          <a href={WAITLIST_URL}>
            <Button variant="calm" size="sm" className="w-full mt-2">
              Únete a la waitlist
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
