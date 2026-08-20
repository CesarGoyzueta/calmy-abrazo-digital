import { useEffect, useRef, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { Link } from "react-router-dom";
import FounderGroupLink from "@/components/landing/FounderGroupLink";
import isotipo from "@/assets/neurocalm-logo (2).png";

const navLinks = [
  { href: "#momentos", id: "momentos", label: "Momentos" },
  { href: "#ejemplos", id: "ejemplos", label: "Conversaciones" },
  { href: "#como-funciona", id: "como-funciona", label: "Cómo funcionará" },
  { href: "#grupo", id: "grupo", label: "El grupo" },
  { href: "#equipo", id: "equipo", label: "Equipo" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Con el menú abierto: cerrar con Escape, no dejar que el fondo se desplace
  // y devolver el foco al botón al cerrar.
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;

    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return undefined;

    const observer = new IntersectionObserver((entries) => {
      const visibleSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleSection) {
        setActiveSection(visibleSection.target.id);
        return;
      }

      setActiveSection((current) => (
        entries.some((entry) => entry.target.id === current && !entry.isIntersecting) ? null : current
      ));
    }, {
      rootMargin: "-30% 0px -58% 0px",
      threshold: [0.05, 0.3, 0.6],
    });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-border bg-card/95 shadow-[var(--shadow-soft)] backdrop-blur-xl" : "border-border/60 bg-card/90 backdrop-blur-md"
      }`}
    >
      <div className="section-container flex h-[68px] items-center justify-between">
        <a
          href="#"
          onClick={() => setActiveSection(null)}
          className="flex min-h-11 items-center gap-2"
          aria-label="Volver al inicio"
        >
          <img src={isotipo} alt="Calmy" className="h-9 w-auto" />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-[17px] font-bold text-foreground">Calmy</span>
            <span className="font-body text-xs text-muted-foreground">por NeuroCalm</span>
          </div>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "location" : undefined}
                onClick={() => setActiveSection(link.id)}
                className={`relative flex min-h-11 items-center rounded-sm font-body text-[13px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                  isActive ? "text-secondary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-1 bottom-0.5 h-0.5 origin-center rounded-full bg-secondary transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            );
          })}
          <FounderGroupLink size="sm">
            <MessageCircle size={15} />
            Grupo de WhatsApp
          </FounderGroupLink>
        </div>

        <button
          type="button"
          ref={menuButtonRef}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 items-center justify-center rounded-lg text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-navigation"
          className="max-h-[calc(100dvh-68px)] space-y-3 overflow-y-auto border-b border-border bg-card px-5 pb-5 shadow-[var(--shadow-soft)] lg:hidden"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "location" : undefined}
                onClick={() => {
                  setActiveSection(link.id);
                  setOpen(false);
                }}
                className={`flex min-h-11 items-center border-l-2 pl-3 font-body text-sm transition-colors ${
                  isActive
                    ? "border-secondary font-semibold text-secondary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            );
          })}
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
