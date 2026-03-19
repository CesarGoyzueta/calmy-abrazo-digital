import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import founderTech from "@/assets/founder-tech.jpg";
import founderPsych from "@/assets/founder-psych.jpg";

const founders = [
  {
    photo: founderTech,
    name: "Cofundador",
    role: "CEO / Tecnología / IA",
    bio: "Apasionado por la tecnología con propósito. Lidera el desarrollo de Calmy combinando inteligencia artificial con sensibilidad humana para crear herramientas que realmente acompañen a quienes más lo necesitan.",
    tags: ["Tecnología", "Inteligencia Artificial", "Producto"],
    gradient: "from-primary to-primary/70",
  },
  {
    photo: founderPsych,
    name: "Cofundadora",
    role: "Psicología / Negocio",
    bio: "Profesional de la psicología con enfoque en neurodivergencia y bienestar familiar. Diseña la base científica y emocional de cada respuesta que Calmy brinda, asegurando calidad y calidez.",
    tags: ["Psicología", "Estrategia", "Contenido Clínico"],
    gradient: "from-secondary to-secondary/70",
  },
];

const AboutSection = () => (
  <section id="equipo" className="py-24 md:py-32 px-6">
    <div className="max-w-7xl mx-auto">
      {/* Mission & Vision */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span className="inline-block font-body text-sm font-semibold uppercase tracking-widest text-secondary bg-secondary/10 px-5 py-2 rounded-full mb-6">
          Nuestra historia
        </span>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
          Por qué existe{" "}
          <span className="text-primary">NeuroCalm</span>
        </h2>
        <p className="mt-6 font-body text-xl text-muted-foreground leading-relaxed">
          Una necesidad real, un equipo comprometido, una solución humana.
        </p>
      </motion.div>

      {/* Mission & Vision cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 border-l-4 border-primary"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Target className="text-primary" size={24} />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground">Misión</h3>
          </div>
          <p className="font-body text-base text-muted-foreground leading-relaxed">
            Brindar acompañamiento emocional accesible, humano y basado en evidencia a padres de niños neurodivergentes, para que nunca se sientan solos en su camino.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card p-8 border-l-4 border-secondary"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center">
              <Eye className="text-secondary" size={24} />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground">Visión</h3>
          </div>
          <p className="font-body text-base text-muted-foreground leading-relaxed">
            Ser la herramienta de apoyo emocional más confiable y humana para familias en todo el mundo hispanohablante, combinando tecnología y psicología con responsabilidad.
          </p>
        </motion.div>
      </div>

      {/* Team */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <span className="inline-block font-body text-sm font-semibold uppercase tracking-widest text-secondary bg-secondary/10 px-5 py-2 rounded-full mb-6">
          Nuestro equipo
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
          Los rostros detrás de{" "}
          <span className="text-secondary">Calmy</span>
        </h2>
        <p className="mt-5 font-body text-xl text-muted-foreground leading-relaxed">
          Profesionales comprometidos con un propósito: que ningún padre se sienta solo.
        </p>
      </motion.div>

      {/* Founder cards with photos */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {founders.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="glass-card overflow-hidden hover:shadow-[var(--shadow-hover)] transition-all duration-300"
          >
            {/* Photo */}
            <div className="h-72 overflow-hidden">
              <img
                src={f.photo}
                alt={`${f.name} - ${f.role}`}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="p-8">
              <span className="font-body text-sm font-bold uppercase tracking-wider text-secondary">
                {f.role}
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold text-foreground">{f.name}</h3>
              <p className="mt-4 font-body text-base text-muted-foreground leading-relaxed">{f.bio}</p>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {f.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1.5 rounded-full border border-secondary/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
