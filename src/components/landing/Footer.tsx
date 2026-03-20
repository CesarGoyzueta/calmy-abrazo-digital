import logo from "@/assets/neurocalm-logo.png";

const WAITLIST_URL = "#waitlist";

const Footer = () => (
  <footer className="py-10 px-5 border-t border-border/40">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
      <img src={logo} alt="NeuroCalm" className="h-7" />
      <div className="flex gap-5">
        <a href="#" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
          Política de privacidad
        </a>
        <a href={WAITLIST_URL} className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
          Lista de espera
        </a>
        <a href="mailto:hola@neurocalm.app" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
          Contacto
        </a>
      </div>
      <p className="font-body text-[11px] text-muted-foreground">© 2025 NeuroCalm. Todos los derechos reservados.</p>
    </div>
  </footer>
);

export default Footer;
