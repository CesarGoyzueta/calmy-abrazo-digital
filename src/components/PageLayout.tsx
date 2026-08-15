import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/neurocalm-logo.png";

interface Props {
  children: React.ReactNode;
}

const PageLayout = ({ children }: Props) => (
  <div className="min-h-screen bg-background">
    <nav className="border-b border-border/40 bg-card/80 backdrop-blur-lg">
      <div className="section-container h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Calmy" className="h-8" />
        </Link>
        <Link to="/" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
          <ArrowLeft size={14} /> Volver al inicio
        </Link>
      </div>
    </nav>

    <main className="py-16 md:py-24">
      <div className="section-container max-w-3xl">
        {children}
      </div>
    </main>

    <footer className="py-8 border-t border-border/40">
      <div className="section-container text-center">
        <p className="font-body text-[11px] text-muted-foreground">© 2026 Calmy. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
);

export default PageLayout;
