import PageLayout from "@/components/PageLayout";

const Mision = () => (
  <PageLayout>
    <span className="section-badge mb-4 inline-block">Nuestra misión</span>
    <h1 className="font-display text-3xl md:text-4xl font-extrabold text-foreground leading-tight mt-2 mb-8">
      Por qué hacemos lo que hacemos
    </h1>

    <div className="prose-calm">
      <p>
        En Calmy creemos que ningún padre debería sentirse solo al acompañar el desarrollo emocional de su hijo. Sabemos que criar con amor es solo el punto de partida: el día a día trae dudas, momentos difíciles y situaciones que necesitan orientación clara.
      </p>
      <p>
        Nuestra misión es brindar acompañamiento emocional accesible, humano y basado en evidencia psicológica a padres de niños neurodivergentes o con necesidades emocionales, conductuales o de desarrollo.
      </p>
      <p>
        No buscamos reemplazar a ningún profesional. Buscamos estar ahí cuando no hay un profesional disponible: en el momento de la crisis, en la duda del día a día, en la pregunta que surge a las 10 de la noche.
      </p>
      <p>
        Combinamos tecnología con sensibilidad para ofrecer orientación que realmente ayude, que se sienta humana y que respete siempre los límites éticos de nuestro rol.
      </p>
    </div>
  </PageLayout>
);

export default Mision;
