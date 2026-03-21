import PageLayout from "@/components/PageLayout";

const LibroReclamaciones = () => (
  <PageLayout>
    <span className="section-badge mb-4 inline-block">Legal</span>
    <h1 className="font-display text-3xl md:text-4xl font-extrabold text-foreground leading-tight mt-2 mb-8">
      Libro de Reclamaciones
    </h1>

    <div className="prose-calm">
      <p>
        En cumplimiento con la normativa vigente, ponemos a tu disposición nuestro Libro de Reclamaciones virtual para que puedas registrar cualquier queja o reclamo relacionado con nuestros servicios.
      </p>

      <h2>¿Qué es el Libro de Reclamaciones?</h2>
      <p>
        Es un medio a través del cual puedes expresar tu disconformidad con el servicio recibido. Tu reclamo será atendido en un plazo máximo de 30 días calendario.
      </p>

      <h2>¿Cómo presentar un reclamo?</h2>
      <p>
        Por el momento, puedes enviarnos tu reclamo directamente a nuestro correo electrónico incluyendo la siguiente información:
      </p>
      <ul>
        <li>Nombre completo</li>
        <li>Correo electrónico de contacto</li>
        <li>Descripción detallada del reclamo</li>
        <li>Fecha en que ocurrió el hecho</li>
        <li>Documentación de respaldo (si aplica)</li>
      </ul>

      <div className="mt-8 p-6 bg-primary/5 rounded-2xl border border-primary/10">
        <p className="font-display text-base font-bold text-foreground mb-2">Canal de contacto</p>
        <p className="font-body text-sm text-muted-foreground">
          Envía tu reclamo a:{" "}
          <a href="mailto:hola@neurocalm.app" className="text-primary hover:underline font-medium">hola@neurocalm.app</a>
        </p>
        <p className="font-body text-sm text-muted-foreground mt-2">
          Nos comprometemos a responderte en un plazo máximo de 30 días calendario.
        </p>
      </div>

      <p className="mt-6 text-muted-foreground text-sm">
        Próximamente habilitaremos un formulario digital integrado para facilitar el proceso de registro de reclamos.
      </p>
    </div>
  </PageLayout>
);

export default LibroReclamaciones;
