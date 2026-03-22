import PageLayout from "@/components/PageLayout";
import founderTech from "@/assets/founder-tech.jpg";
import founderPsych from "@/assets/founder-psych.jpg";

const founders = [
  {
    photo: founderTech,
    name: "Cofundador",
    role: "Producto, IA y Tecnología",
    bio: "Apasionado por la tecnología con propósito. Lidera el desarrollo de Calmy combinando inteligencia artificial con sensibilidad humana.",
  },
  {
    photo: founderPsych,
    name: "Cofundadora",
    role: "Psicología y Contenido Clínico",
    bio: "Profesional de la psicología con enfoque en neurodivergencia. Diseña la base científica y emocional de cada respuesta de Calmy.",
  },
];

const SobreCalmy = () => (
  <PageLayout>
    <span className="section-badge mb-4 inline-block">Sobre Calmy</span>
    <h1 className="font-display text-3xl md:text-4xl font-extrabold text-foreground leading-tight mt-2 mb-8">
      Por qué existe Calmy
    </h1>

    <div className="prose-calm">
      <p>
        Calmy nace de una necesidad real: la de padres que buscan orientación clara para acompañar a sus hijos y muchas veces no la encuentran en el momento en que más la necesitan.
      </p>
      <p>
        Criar con amor es solo el punto de partida. El día a día trae dudas, momentos difíciles y situaciones que necesitan orientación clara. Y no siempre hay un profesional disponible en ese instante.
      </p>

      <h2>Qué estamos construyendo</h2>
      <p>
        Calmy es un asistente conversacional de acompañamiento emocional para padres de niños neurodivergentes o con necesidades emocionales, conductuales o de desarrollo. Combina una base de conocimiento psicológica estructurada con información relevante sobre cada niño y su entorno, para ofrecer orientación que realmente tenga sentido.
      </p>
      <p>
        No buscamos reemplazar a ningún profesional. Buscamos estar ahí cuando no hay uno disponible: en el momento de la crisis, en la duda del día a día, en la pregunta que surge a las 10 de la noche.
      </p>

      <h2>Nuestro enfoque</h2>
      <p>
        No creemos en soluciones genéricas. Creemos en herramientas que entienden el contexto, que se adaptan a cada familia y que respetan siempre los límites de lo que una herramienta tecnológica puede y debe hacer.
      </p>

      <h2>Nuestro compromiso</h2>
      <ul>
        <li>Transparencia sobre lo que Calmy es y lo que no es.</li>
        <li>Respeto por el rol del profesional de salud mental.</li>
        <li>Mejora continua basada en evidencia y retroalimentación.</li>
        <li>Accesibilidad para todas las familias que lo necesiten.</li>
      </ul>

      <h2>El equipo</h2>
      <p>
        Somos un equipo pequeño pero comprometido, formado por profesionales de tecnología, inteligencia artificial y psicología, unidos por la convicción de que el acompañamiento emocional puede ser más accesible, más humano y más útil.
      </p>
    </div>

    {/* Founders */}
    <div className="grid sm:grid-cols-2 gap-5 mt-10">
      {founders.map((f, i) => (
        <div key={i} className="card-elevated overflow-hidden">
          <div className="h-48 overflow-hidden">
            <img src={f.photo} alt={`${f.name} - ${f.role}`} className="w-full h-full object-cover object-top" />
          </div>
          <div className="p-6">
            <span className="font-body text-[11px] font-bold uppercase tracking-wider text-secondary">
              Cofundador/a · {f.role}
            </span>
            <h4 className="mt-1.5 font-display text-lg font-bold text-foreground">{f.name}</h4>
            <p className="mt-2 font-body text-sm text-muted-foreground leading-relaxed">{f.bio}</p>
          </div>
        </div>
      ))}
    </div>
  </PageLayout>
);

export default SobreCalmy;
