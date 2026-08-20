import PageLayout from "@/components/PageLayout";

const Privacidad = () => (
  <PageLayout>
    <span className="section-badge">Legal</span>
    <h1 className="mt-4 mb-8 font-display text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
      Política de Privacidad
    </h1>

    <div className="prose-calm">
      <p className="font-semibold text-muted-foreground">Última actualización: agosto de 2026</p>

      <h2>1. Responsable</h2>
      <p>
        El responsable de los datos que compartas directamente con <strong>NeuroCalm</strong> es NeuroCalm,
        con domicilio en Lima, Perú. Puedes escribirnos a{" "}
        <a href="mailto:neurocalm.calmy@gmail.com">neurocalm.calmy@gmail.com</a>.
      </p>

      <h2>2. Alcance de esta etapa</h2>
      <p>
        Calmy se encuentra en una fase inicial de cocreación. Esta web no contiene un formulario comercial
        ni solicita tu correo para una lista de espera. Su finalidad es informar sobre esta etapa y, cuando
        el enlace esté disponible, permitirte abrir el grupo fundador de Calmy en WhatsApp.
      </p>
      <p>
        Al pulsar ese enlace abandonas neurocalm.work y pasas a un servicio operado por WhatsApp. El uso
        de esa plataforma también está sujeto a la{" "}
        <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
          política de privacidad de WhatsApp
        </a>.
      </p>

      <h2>3. Información que podrías compartir</h2>
      <p>Si decides entrar al grupo fundador de Calmy, podrías compartir voluntariamente:</p>
      <ul>
        <li>El nombre y la información de perfil configurados en tu cuenta de WhatsApp.</li>
        <li>Mensajes, preguntas y comentarios que publiques en el grupo.</li>
        <li>Feedback sobre la utilidad y claridad de la propuesta de Calmy.</li>
      </ul>
      <p>
        No solicitaremos nombre completo, fotografías, centro escolar, dirección ni documentos del niño.
        Te pedimos describir únicamente el contexto necesario y evitar información que permita identificarlo.
      </p>

      <h2>4. Finalidad</h2>
      <p>La información compartida directamente con NeuroCalm podrá utilizarse para:</p>
      <ul>
        <li>Organizar la participación voluntaria en el grupo fundador.</li>
        <li>Comprender qué situaciones y orientaciones resultan más útiles para las familias.</li>
        <li>Comunicar avances, convocatorias y condiciones de esta fase inicial.</li>
        <li>Moderar el espacio y mantener un entorno respetuoso.</li>
      </ul>

      <h2>5. Visibilidad dentro de WhatsApp</h2>
      <p>
        En un grupo conversacional, tu nombre, foto de perfil o número podrían ser visibles para otros
        integrantes según la configuración y las funciones vigentes de WhatsApp. No compartas información
        que no quieras hacer visible a los participantes.
      </p>

      <h2>6. Conservación y eliminación</h2>
      <p>
        Puedes salir del grupo cuando quieras y solicitar la eliminación de la información que NeuroCalm
        mantenga bajo su control escribiendo a{" "}
        <a href="mailto:neurocalm.calmy@gmail.com">neurocalm.calmy@gmail.com</a>. Las copias de mensajes que permanezcan
        en WhatsApp o en los dispositivos de otros participantes están sujetas al funcionamiento de esa
        plataforma y pueden quedar fuera del control directo de NeuroCalm.
      </p>

      <h2>7. Seguridad</h2>
      <p>
        Aplicaremos medidas razonables para limitar el acceso a la información compartida durante esta fase
        inicial y moderar el grupo. Ningún canal digital elimina por completo el riesgo, por lo que
        recomendamos compartir solo lo estrictamente necesario.
      </p>

      <h2>8. Tus derechos</h2>
      <p>
        Puedes solicitar acceso, rectificación, cancelación u oposición respecto de los datos personales
        que NeuroCalm controle. Para ejercer estos derechos, escríbenos a{" "}
        <a href="mailto:neurocalm.calmy@gmail.com">neurocalm.calmy@gmail.com</a>.
      </p>

      <h2>9. Información de menores</h2>
      <p>
        El grupo está dirigido a adultos responsables. No está diseñado para que niños o adolescentes
        participen ni compartan datos directamente. Evita publicar información identificable del menor.
      </p>

      <h2>10. Actualizaciones</h2>
      <p>
        Esta política se actualizará cuando cambien la fase de desarrollo, los canales de participación o
        el funcionamiento de Calmy. La versión vigente estará publicada en esta página.
      </p>
    </div>
  </PageLayout>
);

export default Privacidad;
