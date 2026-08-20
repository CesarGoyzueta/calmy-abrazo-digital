import PageLayout from "@/components/PageLayout";

const Terminos = () => (
  <PageLayout>
    <span className="section-badge">Legal</span>
    <h1 className="mt-4 mb-8 font-display text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
      Términos y Condiciones
    </h1>

    <div className="prose-calm">
      <p className="font-semibold text-muted-foreground">Última actualización: agosto de 2026</p>

      <h2>1. Identificación</h2>
      <p>
        Este sitio es operado por <strong>NeuroCalm</strong>, con domicilio en Lima, Perú. Para consultas
        puedes escribir a <a href="mailto:neurocalm.calmy@gmail.com">neurocalm.calmy@gmail.com</a>.
      </p>

      <h2>2. Objeto y estado actual</h2>
      <p>
        Calmy está en una fase inicial de cocreación. Esta web informa sobre la visión del producto y
        permite, cuando el enlace esté disponible, acceder voluntariamente al grupo fundador de Calmy en
        WhatsApp. La web no incluye actualmente un formulario comercial ni una lista de espera por correo.
      </p>

      <h2>3. Audiencia de la fase inicial</h2>
      <p>
        La primera versión de Calmy estará dirigida a madres, padres y cuidadores de niños con diagnóstico
        de TEA o TDAH emitido por un psicólogo o especialista calificado. Calmy no confirma diagnósticos. Si
        el niño todavía está en evaluación, corresponde continuar ese proceso con un profesional.
      </p>

      <h2>4. Naturaleza de Calmy</h2>
      <p>
        Calmy se está diseñando como una herramienta de orientación contextual para situaciones cotidianas.
        Podrá ayudar a ordenar información, identificar un siguiente paso y preparar preguntas para una
        consulta profesional.
      </p>

      <h2>5. Exclusiones</h2>
      <p className="font-semibold text-foreground">Calmy no constituirá ni reemplazará:</p>
      <ul>
        <li>Terapia psicológica o psiquiátrica.</li>
        <li>Diagnóstico o evaluación clínica.</li>
        <li>Intervención profesional especializada.</li>
        <li>Indicaciones sobre medicación o tratamiento.</li>
        <li>Servicios de emergencia o atención de crisis de riesgo.</li>
      </ul>

      <h2>6. Participación en WhatsApp</h2>
      <p>
        La participación en el grupo será voluntaria y podrá finalizarse en cualquier momento. Al abrir el
        enlace abandonas neurocalm.work y utilizas un servicio de terceros sujeto a sus propias condiciones.
        Según la configuración de WhatsApp, tu nombre, foto de perfil o número podrían ser visibles para
        otros integrantes.
      </p>
      <p>Quienes participen se comprometen a:</p>
      <ul>
        <li>Mantener un trato respetuoso y no publicar información identificable de menores.</li>
        <li>No presentar experiencias personales como diagnóstico o indicación profesional.</li>
        <li>No difundir fuera del grupo información privada compartida por otras familias.</li>
        <li>Atender las indicaciones de moderación del equipo.</li>
      </ul>

      <h2>7. Situaciones urgentes</h2>
      <p>
        Ante riesgo físico, autolesión, agresión intensa o una emergencia, no utilices Calmy ni el grupo
        como canal de atención. Busca inmediatamente ayuda profesional o los servicios de emergencia
        correspondientes.
      </p>

      <h2>8. Derechos del consumidor</h2>
      <p>
        Puedes presentar consultas, quejas o reclamos ante NeuroCalm. El{" "}
        <a href="/libro-reclamaciones">Libro de Reclamaciones</a> permanece disponible en esta web.
      </p>

      <h2>9. Propiedad intelectual</h2>
      <p>
        Los contenidos, diseños, textos, logotipos y elementos del sitio pertenecen a NeuroCalm o a sus
        licenciantes. No pueden reproducirse o utilizarse sin la autorización correspondiente.
      </p>

      <h2>10. Cambios y contacto</h2>
      <p>
        Estos términos podrán actualizarse conforme evolucione esta fase inicial. La versión vigente estará
        publicada en esta página. Para consultas escribe a{" "}
        <a href="mailto:neurocalm.calmy@gmail.com">neurocalm.calmy@gmail.com</a>.
      </p>
    </div>
  </PageLayout>
);

export default Terminos;
