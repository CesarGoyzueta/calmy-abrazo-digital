import { useEffect, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { Link } from "react-router-dom";
import FounderGroupLink from "@/components/landing/FounderGroupLink";
import isotipo from "@/assets/neurocalm-logo (2).png";

const navLinks = [
  { href: "#momentos", label: "Momentos" },
  { href: "#ejemplos", label: "Conversaciones" },
  { href: "#como-funciona", label: "Cómo funcionará" },
  { href: "#grupo", label: "El grupo" },
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
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-border bg-card/95 shadow-[var(--shadow-soft)] backdrop-blur-xl" : "border-border/60 bg-card/90 backdrop-blur-md"
      }`}
    >
      <div className="section-container flex h-[68px] items-center justify-between">
        <a href="#" className="flex min-h-11 items-center gap-2" aria-label="Volver al inicio">
          <img src={isotipo} alt="Calmy" className="h-9 w-auto" />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-[17px] font-bold text-foreground">Calmy</span>
            <span className="font-body text-xs text-muted-foreground">por NeuroCalm</span>
          </div>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-[13px] font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <FounderGroupLink size="sm">
            <MessageCircle size={15} />
            Grupo de WhatsApp
          </FounderGroupLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 items-center justify-center rounded-lg text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div id="mobile-navigation" className="space-y-3 border-b border-border bg-card px-5 pb-5 shadow-[var(--shadow-soft)] md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center font-body text-sm text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/sobre-calmy"
            onClick={() => setOpen(false)}
            className="flex min-h-11 items-center font-body text-sm text-muted-foreground hover:text-foreground"
          >
            Sobre Calmy
          </Link>
          <FounderGroupLink size="sm" className="mt-2 min-h-11 w-full">
            <MessageCircle size={15} />
            Unirme al grupo de WhatsApp
          </FounderGroupLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
