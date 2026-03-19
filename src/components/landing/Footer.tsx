import logo from "@/assets/neurocalm-logo.png";

const WAITLIST_URL = "#waitlist";

const Footer = () => (
  <footer className="py-12 px-6 border-t border-border/40">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <img src={logo} alt="NeuroCalm" className="h-8" />
      <div className="flex gap-6">
        <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">Política de privacidad</a>
        <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">Lista de espera</a>
        <a href="mailto:hola@neurocalm.app" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">Contacto</a>
      </div>
      <p className="font-body text-xs text-muted-foreground">© 2025 NeuroCalm. Todos los derechos reservados.</p>
    </div>
  </footer>
);

export default Footer;
