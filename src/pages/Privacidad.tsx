import PageLayout from "@/components/PageLayout";

const Privacidad = () => (
  <PageLayout>
    <span className="section-badge mb-4 inline-block">Legal</span>
    <h1 className="font-display text-3xl md:text-4xl font-extrabold text-foreground leading-tight mt-2 mb-8">
      Política de Privacidad
    </h1>

    <div className="prose-calm">
      <p className="text-muted-foreground font-semibold">Última actualización: marzo 2025</p>

      <h2>1. Introducción</h2>
      <p>
        En Calmy nos comprometemos a proteger tu privacidad y la de tu familia. Esta Política de Privacidad describe qué información podríamos recopilar, cómo la utilizamos y qué derechos tienes al respecto.
      </p>

      <h2>2. Datos que podríamos recopilar</h2>
      <ul>
        <li><strong>Datos de contacto:</strong> nombre, correo electrónico y otros datos proporcionados al registrarte en la lista de espera o al crear una cuenta.</li>
        <li><strong>Datos del perfil del niño:</strong> edad, necesidades, antecedentes y contexto familiar que compartas voluntariamente para personalizar la orientación.</li>
        <li><strong>Datos de uso:</strong> interacciones con la plataforma, consultas realizadas y preferencias de navegación.</li>
        <li><strong>Datos técnicos:</strong> dirección IP, tipo de dispositivo, navegador y sistema operativo.</li>
      </ul>

      <h2>3. Finalidad del tratamiento</h2>
      <p>Utilizamos tus datos para:</p>
      <ul>
        <li>Proporcionarte orientación personalizada a través de Calmy.</li>
        <li>Mejorar y optimizar el servicio.</li>
        <li>Comunicarte actualizaciones relevantes sobre el producto.</li>
        <li>Garantizar la seguridad de la plataforma.</li>
      </ul>

      <h2>4. Conservación de datos</h2>
      <p>
        Conservaremos tus datos personales únicamente durante el tiempo necesario para cumplir con las finalidades descritas o según lo exija la legislación aplicable. Puedes solicitar la eliminación de tus datos en cualquier momento.
      </p>

      <h2>5. Confidencialidad y seguridad</h2>
      <p>
        Implementamos medidas técnicas y organizativas para proteger tu información contra acceso no autorizado, pérdida o alteración. Las conversaciones dentro de Calmy son tratadas con estricta confidencialidad.
      </p>

      <h2>6. Tus derechos</h2>
      <p>Tienes derecho a:</p>
      <ul>
        <li>Acceder a tus datos personales.</li>
        <li>Rectificar información inexacta.</li>
        <li>Solicitar la eliminación de tus datos.</li>
        <li>Oponerte al tratamiento de tus datos.</li>
        <li>Solicitar la portabilidad de tus datos.</li>
      </ul>

      <h2>7. Contacto</h2>
      <p>
        Para ejercer tus derechos o resolver dudas sobre esta política, puedes escribirnos a:{" "}
        <a href="mailto:hola@neurocalm.app" className="text-primary hover:underline">hola@neurocalm.app</a>
      </p>

      <h2>8. Actualizaciones</h2>
      <p>
        Nos reservamos el derecho de actualizar esta Política de Privacidad. Te notificaremos sobre cambios significativos a través de los canales disponibles.
      </p>
    </div>
  </PageLayout>
);

export default Privacidad;
