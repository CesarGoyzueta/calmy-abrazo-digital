import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/neurocalm-logo.png";

const WAITLIST_URL = "#waitlist";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src={logo} alt="NeuroCalm" className="h-9" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#problema" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body">Problema</a>
          <a href="#solucion" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body">Solución</a>
          <a href="#como-funciona" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body">Cómo funciona</a>
          <a href="#valores" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body">Valores</a>
          <a href="#equipo" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body">Equipo</a>
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
          <a href="#problema" onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground font-body">Problema</a>
          <a href="#solucion" onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground font-body">Solución</a>
          <a href="#como-funciona" onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground font-body">Cómo funciona</a>
          <a href="#valores" onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground font-body">Valores</a>
          <a href="#equipo" onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground font-body">Equipo</a>
          <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="calm" size="sm" className="w-full">Únete a la waitlist</Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
