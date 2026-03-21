import PageLayout from "@/components/PageLayout";

const Terminos = () => (
  <PageLayout>
    <span className="section-badge mb-4 inline-block">Legal</span>
    <h1 className="font-display text-3xl md:text-4xl font-extrabold text-foreground leading-tight mt-2 mb-8">
      Términos y Condiciones
    </h1>

    <div className="prose-calm">
      <p className="text-muted-foreground font-semibold">Última actualización: marzo 2025</p>

      <h2>1. Objeto</h2>
      <p>
        Estos Términos y Condiciones regulan el acceso y uso del sitio web y los servicios de Calmy, una herramienta de acompañamiento emocional conversacional para padres.
      </p>

      <h2>2. Naturaleza del servicio</h2>
      <p>
        Calmy es una herramienta de orientación emocional basada en conocimiento psicológico estructurado. Ofrece acompañamiento conversacional personalizado para padres de niños con necesidades emocionales, conductuales o de desarrollo.
      </p>

      <h2>3. Exclusión expresa</h2>
      <p className="font-semibold text-foreground">
        Calmy NO constituye ni reemplaza:
      </p>
      <ul>
        <li>Terapia psicológica o psiquiátrica.</li>
        <li>Diagnóstico clínico de ningún tipo.</li>
        <li>Evaluación profesional de salud mental.</li>
        <li>Intervención especializada cuando esta se requiere.</li>
      </ul>
      <p>
        El uso de Calmy no establece una relación terapéutica. Si necesitas atención profesional, te recomendamos consultar con un especialista calificado.
      </p>

      <h2>4. Uso permitido</h2>
      <p>El usuario se compromete a:</p>
      <ul>
        <li>Utilizar el servicio de forma responsable y respetuosa.</li>
        <li>No utilizar Calmy como sustituto de atención profesional.</li>
        <li>Proporcionar información veraz cuando sea necesario para la personalización del servicio.</li>
        <li>No intentar vulnerar la seguridad o integridad de la plataforma.</li>
      </ul>

      <h2>5. Limitaciones</h2>
      <p>
        Calmy ofrece orientación general basada en conocimiento psicológico. Las respuestas no deben interpretarse como prescripciones médicas, diagnósticos ni recomendaciones clínicas individualizadas. El uso del servicio es bajo la responsabilidad del usuario.
      </p>

      <h2>6. Propiedad intelectual</h2>
      <p>
        Todos los contenidos, diseños, textos, logotipos, marcas y elementos del sitio web y la plataforma son propiedad de Calmy o de sus licenciantes, y están protegidos por las leyes de propiedad intelectual aplicables.
      </p>

      <h2>7. Modificaciones</h2>
      <p>
        Nos reservamos el derecho de modificar estos Términos y Condiciones, así como las características del servicio, en cualquier momento. Los cambios serán comunicados a los usuarios a través de los canales disponibles.
      </p>

      <h2>8. Contacto</h2>
      <p>
        Para consultas sobre estos términos, escríbenos a:{" "}
        <a href="mailto:hola@neurocalm.app" className="text-primary hover:underline">hola@neurocalm.app</a>
      </p>
    </div>
  </PageLayout>
);

export default Terminos;
