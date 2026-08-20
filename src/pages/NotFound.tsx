import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const NotFound = () => (
  <PageLayout>
    <span className="section-badge mb-4 inline-block">Error 404</span>
    <h1 className="mt-2 font-display text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
      No encontramos esta página
    </h1>
    <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-muted-foreground md:text-lg">
      Puede que el enlace haya cambiado o que la dirección esté mal escrita. Desde el inicio puedes
      volver a encontrar todo el contenido de Calmy.
    </p>
    <Link
      to="/"
      className="mt-7 inline-flex min-h-11 items-center gap-1.5 rounded-sm font-body text-sm font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <ArrowLeft size={15} />
      Volver al inicio
    </Link>
  </PageLayout>
);

export default NotFound;
