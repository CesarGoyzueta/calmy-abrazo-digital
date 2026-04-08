import PageLayout from "@/components/PageLayout";

const Privacidad = () => (
  <PageLayout>
    <span className="section-badge mb-4 inline-block">Legal</span>
    <h1 className="font-display text-3xl md:text-4xl font-extrabold text-foreground leading-tight mt-2 mb-8">
      Política de Privacidad
    </h1>

    <div className="prose-calm">
      <p className="text-muted-foreground font-semibold">Última actualización: abril 2026</p>

      <h2>1. Responsable del tratamiento</h2>
      <p>
        El responsable del tratamiento de tus datos personales es <strong>[TU NOMBRE COMPLETO]</strong>,
        con RUC <strong>10756714071</strong>, domiciliado en <strong>[DISTRITO], Lima, Perú</strong>,
        operando bajo el nombre comercial <strong>NeuroCalm / Calmy</strong>. Puedes contactarnos en{" "}
        <a href="mailto:hola@neurocalm.app" className="text-primary hover:underline">hola@neurocalm.app</a>.
      </p>

      <h2>2. Datos que recopilamos</h2>
      <p>
        En esta etapa, Calmy se encuentra en fase de pre-lanzamiento. Los únicos datos que recopilamos
        son los que proporcionas voluntariamente al registrarte en nuestra lista de espera:
      </p>
      <ul>
        <li><strong>Correo electrónico:</strong> para notificarte cuando el servicio esté disponible y enviarte información relevante sobre Calmy.</li>
        <li><strong>Datos técnicos básicos:</strong> dirección IP y tipo de navegador, recopilados automáticamente al visitar el sitio.</li>
      </ul>
      <p>
        No recopilamos datos sensibles, datos de menores ni información financiera en esta etapa.
      </p>

      <h2>3. Base legal del tratamiento</h2>
      <p>
        El tratamiento de tu correo electrónico se basa en el <strong>consentimiento expreso</strong> que
        otorgas al registrarte en la lista de espera, conforme al Art. 13° de la Ley N° 29733 — Ley de
        Protección de Datos Personales. Puedes revocar tu consentimiento en cualquier momento
        escribiéndonos a{" "}
        <a href="mailto:hola@neurocalm.app" className="text-primary hover:underline">hola@neurocalm.app</a>.
      </p>

      <h2>4. Finalidad del tratamiento</h2>
      <p>Utilizamos tu correo electrónico exclusivamente para:</p>
      <ul>
        <li>Notificarte cuando Calmy esté disponible.</li>
        <li>Enviarte información sobre el lanzamiento y novedades del producto.</li>
      </ul>
      <p>
        No utilizamos tus datos para ninguna otra finalidad sin informarte previamente y obtener tu
        consentimiento.
      </p>

      <h2>5. Transferencia de datos a terceros</h2>
      <p>
        No vendemos, alquilamos ni cedemos tus datos personales a terceros. El almacenamiento del correo
        electrónico se realiza a través de herramientas de gestión de lista de espera que operan bajo
        sus propias políticas de privacidad. Cuando integremos proveedores externos, actualizaremos
        esta sección con el detalle correspondiente.
      </p>

      <h2>6. Conservación de datos</h2>
      <p>
        Conservamos tu correo electrónico mientras Calmy esté en fase de pre-lanzamiento o hasta que
        solicites su eliminación. Una vez lanzado el servicio, te informaremos sobre la nueva política
        de retención de datos.
      </p>

      <h2>7. Seguridad</h2>
      <p>
        Implementamos medidas razonables para proteger tu información contra acceso no autorizado,
        pérdida o alteración, acordes al volumen y naturaleza de los datos tratados en esta etapa.
      </p>

      <h2>8. Tus derechos ARCO</h2>
      <p>
        Conforme al Art. 19° de la Ley N° 29733, tienes derecho a:
      </p>
      <ul>
        <li><strong>Acceso:</strong> saber qué datos tuyos tenemos y con qué finalidad.</li>
        <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
        <li><strong>Cancelación:</strong> solicitar la eliminación de tus datos.</li>
        <li><strong>Oposición:</strong> oponerte al tratamiento de tus datos.</li>
      </ul>
      <p>
        Para ejercer cualquiera de estos derechos, escríbenos a{" "}
        <a href="mailto:hola@neurocalm.app" className="text-primary hover:underline">hola@neurocalm.app</a>{" "}
        indicando tu nombre y el derecho que deseas ejercer. Responderemos en un plazo máximo de{" "}
        <strong>20 días hábiles</strong> conforme a la ley.
      </p>

      <h2>9. Autoridad de supervisión</h2>
      <p>
        Si consideras que el tratamiento de tus datos no cumple con la normativa vigente, tienes derecho a
        presentar una reclamación ante la{" "}
        <strong>Autoridad de Protección de Datos Personales (APDP)</strong> del Ministerio de Justicia y
        Derechos Humanos del Perú, a través de <strong>www.minjus.gob.pe</strong>.
      </p>

      <h2>10. Actualizaciones</h2>
      <p>
        Esta política evolucionará cuando Calmy lance su servicio completo. Te notificaremos sobre
        cambios significativos mediante correo electrónico con al menos 15 días de anticipación.
      </p>
    </div>
  </PageLayout>
);

export default Privacidad;
