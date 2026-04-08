import PageLayout from "@/components/PageLayout";

const Terminos = () => (
  <PageLayout>
    <span className="section-badge mb-4 inline-block">Legal</span>
    <h1 className="font-display text-3xl md:text-4xl font-extrabold text-foreground leading-tight mt-2 mb-8">
      Términos y Condiciones
    </h1>

    <div className="prose-calm">
      <p className="text-muted-foreground font-semibold">Última actualización: abril 2026</p>

      <h2>1. Identificación del proveedor</h2>
      <p>
        El presente sitio web es operado por <strong>[TU NOMBRE COMPLETO]</strong>, con RUC{" "}
        <strong>10756714071</strong>, domiciliado en <strong>[DISTRITO], Lima, Perú</strong>, bajo el
        nombre comercial <strong>NeuroCalm / Calmy</strong>. Contacto:{" "}
        <a href="mailto:hola@neurocalm.app" className="text-primary hover:underline">hola@neurocalm.app</a>.
      </p>

      <h2>2. Objeto y estado actual</h2>
      <p>
        Estos Términos y Condiciones regulan el acceso y uso del sitio web de Calmy, actualmente en{" "}
        <strong>fase de pre-lanzamiento</strong>. En esta etapa, el sitio tiene como único fin informar
        sobre el producto y recopilar correos electrónicos de personas interesadas en la lista de espera.
        Estos términos se actualizarán cuando el servicio completo esté disponible.
      </p>
      <p>
        Son aplicables la <strong>Ley N° 29571 — Código de Protección y Defensa del Consumidor</strong>{" "}
        y la legislación peruana vigente.
      </p>

      <h2>3. Naturaleza del servicio</h2>
      <p>
        Calmy será una herramienta de orientación emocional basada en conocimiento psicológico
        estructurado, diseñada para acompañar a padres de niños con necesidades emocionales,
        conductuales o de desarrollo.
      </p>

      <h2>4. Exclusión expresa</h2>
      <p className="font-semibold text-foreground">
        Calmy NO constituirá ni reemplazará:
      </p>
      <ul>
        <li>Terapia psicológica o psiquiátrica.</li>
        <li>Diagnóstico clínico de ningún tipo.</li>
        <li>Evaluación profesional de salud mental.</li>
        <li>Intervención especializada cuando esta se requiere.</li>
      </ul>
      <p>
        El uso de Calmy no establecerá una relación terapéutica. Si necesitas atención profesional,
        te recomendamos consultar con un especialista calificado.
      </p>

      <h2>5. Uso del sitio web</h2>
      <p>Al acceder a este sitio, el usuario se compromete a:</p>
      <ul>
        <li>Hacer un uso responsable y lícito del sitio.</li>
        <li>Proporcionar información veraz al registrarse en la lista de espera.</li>
        <li>No intentar vulnerar la seguridad o integridad del sitio.</li>
      </ul>

      <h2>6. Derechos del consumidor</h2>
      <p>
        Conforme a la <strong>Ley N° 29571</strong>, tienes derecho a recibir información veraz y
        suficiente sobre el servicio, a la protección de tus datos personales y a presentar reclamos
        o quejas ante Calmy o ante el <strong>INDECOPI</strong> en caso de disconformidad.
      </p>
      <p>
        Puedes acceder a nuestro{" "}
        <a href="/libro-reclamaciones" className="text-primary hover:underline">Libro de Reclamaciones</a>{" "}
        en cualquier momento.
      </p>

      <h2>7. Propiedad intelectual</h2>
      <p>
        Todos los contenidos, diseños, textos, logotipos y elementos del sitio son propiedad de
        NeuroCalm o de sus licenciantes, protegidos por la legislación peruana (D. Leg. N° 822) y
        convenios internacionales aplicables. Queda prohibida su reproducción sin autorización expresa.
      </p>

      <h2>8. Modificaciones</h2>
      <p>
        Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento.
        Los cambios serán comunicados mediante aviso en el sitio web o por correo electrónico con
        al menos <strong>15 días de anticipación</strong>.
      </p>

      <h2>9. Ley aplicable y jurisdicción</h2>
      <p>
        Estos Términos se rigen por la legislación de la <strong>República del Perú</strong>. Para
        cualquier controversia, las partes se someten a la competencia de los{" "}
        <strong>Juzgados y Tribunales de Lima</strong>, sin perjuicio del derecho del usuario a
        acudir al INDECOPI conforme a la Ley N° 29571.
      </p>

      <h2>10. Contacto</h2>
      <p>
        Para consultas sobre estos términos:{" "}
        <a href="mailto:hola@neurocalm.app" className="text-primary hover:underline">hola@neurocalm.app</a>
      </p>
    </div>
  </PageLayout>
);

export default Terminos;
