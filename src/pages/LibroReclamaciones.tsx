import PageLayout from "@/components/PageLayout";

const LibroReclamaciones = () => (
  <PageLayout>
    <span className="section-badge mb-4 inline-block">Legal</span>
    <h1 className="font-display text-3xl md:text-4xl font-extrabold text-foreground leading-tight mt-2 mb-2">
      Libro de Reclamaciones
    </h1>
    <p className="font-body text-sm text-muted-foreground mb-8">
      En cumplimiento con el Art. 150° de la Ley N° 29571 — Código de Protección y Defensa del Consumidor y el D.S. N° 011-2011-PCM.
    </p>

    <div className="prose-calm">

      <div className="not-prose mb-8 p-5 bg-amber-50 border border-amber-200 rounded-2xl">
        <p className="font-body text-sm text-amber-800 leading-relaxed">
          <strong>Importante:</strong> El registro de tu reclamo o queja <strong>no impide</strong> que puedas acudir al INDECOPI u otras instancias legales disponibles. Calmy atenderá tu solicitud en un plazo máximo de <strong>30 días calendario</strong> desde su recepción.
        </p>
      </div>

      <h2>¿Qué es un reclamo y qué es una queja?</h2>
      <ul>
        <li>
          <strong>Reclamo:</strong> Disconformidad relacionada con el servicio contratado o adquirido (ej.: servicio no funcionó correctamente, cobro indebido, problema de acceso a la plataforma).
        </li>
        <li>
          <strong>Queja:</strong> Disconformidad referida a la mala atención recibida, al trato inadecuado por parte de la empresa o a conductas del proveedor que no implican directamente el servicio contratado.
        </li>
      </ul>

      <h2>¿Qué información debes tener lista?</h2>
      <p>Al completar el formulario, necesitarás proporcionar:</p>
      <ul>
        <li><strong>Tipo de registro:</strong> Reclamo o queja (obligatorio)</li>
        <li><strong>Nombre completo y DNI o Carné de Extranjería</strong> (obligatorio)</li>
        <li><strong>Correo electrónico de contacto</strong> — aquí recibirás la respuesta (obligatorio)</li>
        <li><strong>Servicio involucrado y fecha del hecho</strong> (obligatorio)</li>
        <li><strong>Descripción detallada</strong> de lo sucedido (obligatorio)</li>
        <li><strong>Solución que esperas</strong> de nuestra parte (obligatorio)</li>
        <li>Teléfono, monto involucrado y archivos adjuntos (opcional)</li>
      </ul>

      <h2>Cómo presentar tu reclamo o queja</h2>
      <p>
        Completa el formulario a continuación. Recibirás un correo de confirmación con tu número de registro. Calmy responderá dentro del plazo legal establecido.
      </p>

      {/* Aquí va el iframe de Google Forms — reemplaza el src con tu enlace */}
      <div className="not-prose my-8 rounded-2xl overflow-hidden border border-border/40 shadow-sm">
        <iframe
          src="https://forms.gle/8z53XYEbzMfaguXdA"
          width="100%"
          height="950"
          frameBorder="0"
          title="Formulario de Libro de Reclamaciones"
        >
          Cargando formulario...
        </iframe>
      </div>

      <h2>Canal alternativo de contacto</h2>
      <p>
        Si prefieres enviarnos tu reclamo por correo electrónico, escríbenos a{" "}
        <a href="mailto:neurocalm.calmy@gmail.com" className="text-primary hover:underline">neurocalm.calmy@gmail.com</a>{" "}
        incluyendo la misma información indicada arriba.
      </p>

      <h2>¿No quedaste conforme con nuestra respuesta?</h2>
      <p>
        Si la respuesta de Calmy no resuelve satisfactoriamente tu reclamo, puedes acudir al{" "}
        <strong>Instituto Nacional de Defensa de la Competencia y de la Propiedad Intelectual (INDECOPI)</strong>{" "}
        a través de:
      </p>
      <ul>
        <li>Línea gratuita: <strong>0800-4-4040</strong></li>
        <li>Web: <strong>www.indecopi.gob.pe</strong></li>
        <li>Aplicativo: <strong>Reclama Virtual</strong> (disponible en Play Store y App Store)</li>
      </ul>

    </div>
  </PageLayout>
);

export default LibroReclamaciones;
