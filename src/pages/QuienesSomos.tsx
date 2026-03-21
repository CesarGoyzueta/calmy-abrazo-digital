import PageLayout from "@/components/PageLayout";

const QuienesSomos = () => (
  <PageLayout>
    <span className="section-badge mb-4 inline-block">Quiénes somos</span>
    <h1 className="font-display text-3xl md:text-4xl font-extrabold text-foreground leading-tight mt-2 mb-8">
      Un equipo con propósito
    </h1>

    <div className="prose-calm">
      <p>
        Calmy nace de una necesidad real: la de padres que buscan orientación clara para acompañar a sus hijos y muchas veces no la encuentran en el momento en que más la necesitan.
      </p>
      <p>
        Somos un equipo pequeño pero comprometido, formado por profesionales de tecnología, inteligencia artificial y psicología, unidos por la convicción de que el acompañamiento emocional puede ser más accesible, más humano y más útil.
      </p>

      <h2>Nuestro enfoque</h2>
      <p>
        No creemos en soluciones genéricas. Creemos en herramientas que entienden el contexto, que se adaptan a cada familia y que respetan siempre los límites de lo que una herramienta tecnológica puede y debe hacer.
      </p>
      <p>
        Por eso Calmy combina una base de conocimiento psicológica estructurada con información relevante sobre cada niño y su entorno, para ofrecer orientación que realmente tenga sentido.
      </p>

      <h2>Nuestro compromiso</h2>
      <ul>
        <li>Transparencia sobre lo que Calmy es y lo que no es.</li>
        <li>Respeto por el rol del profesional de salud mental.</li>
        <li>Mejora continua basada en evidencia y retroalimentación.</li>
        <li>Accesibilidad para todas las familias que lo necesiten.</li>
      </ul>
    </div>
  </PageLayout>
);

export default QuienesSomos;
