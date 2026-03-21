import PageLayout from "@/components/PageLayout";

const Vision = () => (
  <PageLayout>
    <span className="section-badge mb-4 inline-block">Nuestra visión</span>
    <h1 className="font-display text-3xl md:text-4xl font-extrabold text-foreground leading-tight mt-2 mb-8">
      Hacia dónde vamos
    </h1>

    <div className="prose-calm">
      <p>
        Nuestra visión es convertirnos en la herramienta de apoyo emocional más confiable y humana para familias en todo el mundo hispanohablante.
      </p>
      <p>
        Imaginamos un futuro donde cada padre que acompaña a un niño con necesidades específicas tenga acceso a orientación clara, personalizada y respetuosa, sin importar su ubicación, su horario o sus recursos.
      </p>
      <p>
        Queremos que Calmy sea sinónimo de claridad, calma y confianza. Un espacio donde la tecnología esté al servicio de la humanidad, donde el conocimiento psicológico sea accesible y donde ningún padre tenga que enfrentar el día a día sin apoyo.
      </p>
      <p>
        Creemos que cuando los padres reciben mejor orientación, los niños reciben mejor acompañamiento. Ese es el impacto que buscamos generar.
      </p>
    </div>
  </PageLayout>
);

export default Vision;
