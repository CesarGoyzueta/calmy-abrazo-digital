import { Link } from "react-router-dom";
import isotipo from "@/assets/neurocalm-logo (2).png";

const WAITLIST_URL = "https://forms.gle/BfZHorebqUUiXFJp8";

const Footer = () => (
  <footer className="py-10 px-5 border-t border-border/50 bg-card/65">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={isotipo} alt="Calmy" className="h-8 w-auto" />
            <div className="flex flex-col leading-tight">
              <span className="font-display text-sm font-bold text-foreground tracking-tight">Calmy</span>
              <span className="font-body text-[11px] text-muted-foreground">por NeuroCalm</span>
            </div>
          </div>
          <p className="font-body text-xs text-muted-foreground max-w-xs">
            Orientación práctica para padres y madres en los momentos difíciles del día a día con sus hijos.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-8">
          <div>
            <p className="font-display text-xs font-bold text-foreground uppercase tracking-wider mb-3">Producto</p>
            <div className="flex flex-col gap-2">
              <a href="#como-funciona" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
                Cómo funciona
              </a>
              <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
                Lista de espera
              </a>
            </div>
          </div>

          <div>
            <p className="font-display text-xs font-bold text-foreground uppercase tracking-wider mb-3">Empresa</p>
            <div className="flex flex-col gap-2">
              <Link to="/sobre-calmy" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
                Sobre Calmy
              </Link>
              <a href="mailto:hola@neurocalm.app" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
                Contacto
              </a>
            </div>
          </div>

          <div>
            <p className="font-display text-xs font-bold text-foreground uppercase tracking-wider mb-3">Legal</p>
            <div className="flex flex-col gap-2">
              <Link to="/privacidad" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
                Política de privacidad
              </Link>
              <Link to="/terminos" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
                Términos y condiciones
              </Link>
              <Link to="/libro-reclamaciones" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
                Libro de reclamaciones
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-body text-[11px] text-muted-foreground">© 2026 Calmy. Todos los derechos reservados.</p>
        <p className="font-body text-[11px] text-muted-foreground">Hecho con 💚 para familias que buscan claridad.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
