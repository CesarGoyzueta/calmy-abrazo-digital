import logo from "@/assets/neurocalm-logo.png";

const WAITLIST_URL = "#waitlist";

const Footer = () => (
  <footer className="py-12 px-6 border-t border-border/50">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <img src={logo} alt="NeuroCalm" className="h-8" />
      <div className="flex gap-6">
        <a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">Política de privacidad</a>
        <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">Lista de espera</a>
      </div>
      <p className="font-body text-xs text-muted-foreground">© 2026 NeuroCalm. Todos los derechos reservados.</p>
    </div>
  </footer>
);

export default Footer;
