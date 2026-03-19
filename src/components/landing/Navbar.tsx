import { useState } from "react";
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src={logo} alt="NeuroCalm" className="h-9" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body font-medium">
              {l.label}
            </a>
          ))}
          <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="calm" size="sm">Únete a la waitlist</Button>
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/50 px-6 pb-6 space-y-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground font-body">
              {l.label}
            </a>
          ))}
          <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="calm" size="sm" className="w-full">Únete a la waitlist</Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
