import { Link } from "react-router-dom";
import FounderGroupLink from "@/components/landing/FounderGroupLink";
import isotipo from "@/assets/neurocalm-logo (2).png";

const Footer = () => (
  <footer className="border-t border-border bg-card py-10">
    <div className="section-container">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <img src={isotipo} alt="Calmy" className="h-8 w-auto" />
            <div className="flex flex-col leading-tight">
              <span className="font-display text-sm font-bold text-foreground">Calmy</span>
              <span className="font-body text-[11px] text-muted-foreground">por NeuroCalm</span>
            </div>
          </div>
          <p className="max-w-sm font-body text-xs leading-relaxed text-muted-foreground">
            Orientación contextual para familias de niños con diagnóstico profesional de TEA o TDAH.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div>
            <p className="mb-3 font-display text-xs font-bold text-foreground">Producto</p>
            <div className="flex flex-col items-start gap-2">
              <a href="#como-funciona" className="font-body text-xs text-muted-foreground hover:text-foreground">Cómo funcionará</a>
              <FounderGroupLink variant="link" className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground">
                Grupo de WhatsApp
              </FounderGroupLink>
            </div>
          </div>

          <div>
            <p className="mb-3 font-display text-xs font-bold text-foreground">Empresa</p>
            <div className="flex flex-col gap-2">
              <Link to="/sobre-calmy" className="font-body text-xs text-muted-foreground hover:text-foreground">Sobre Calmy</Link>
              <a href="mailto:hola@neurocalm.app" className="font-body text-xs text-muted-foreground hover:text-foreground">Contacto</a>
            </div>
          </div>

          <div>
            <p className="mb-3 font-display text-xs font-bold text-foreground">Legal</p>
            <div className="flex flex-col gap-2">
              <Link to="/privacidad" className="font-body text-xs text-muted-foreground hover:text-foreground">Privacidad</Link>
              <Link to="/terminos" className="font-body text-xs text-muted-foreground hover:text-foreground">Términos</Link>
              <Link to="/libro-reclamaciones" className="font-body text-xs text-muted-foreground hover:text-foreground">Libro de reclamaciones</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-9 flex flex-col gap-2 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-body text-xs text-muted-foreground">© 2026 Calmy. Todos los derechos reservados.</p>
        <p className="font-body text-xs text-muted-foreground">Creado para familias que buscan comprender antes de actuar.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
