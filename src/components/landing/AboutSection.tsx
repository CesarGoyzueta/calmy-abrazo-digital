import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import founderTech from "@/assets/founder-tech.jpg";
import founderPsych from "@/assets/founder-psych.jpg";

const founders = [
  {
    photo: founderTech,
    name: "Cofundador",
    role: "CEO / Tecnología / IA",
    bio: "Apasionado por la tecnología con propósito. Lidera el desarrollo de Calmy combinando inteligencia artificial con sensibilidad humana.",
    tags: ["Tecnología", "IA", "Producto"],
  },
  {
    photo: founderPsych,
    name: "Cofundadora",
    role: "Psicología / Negocio",
    bio: "Profesional de la psicología con enfoque en neurodivergencia. Diseña la base científica y emocional de cada respuesta de Calmy.",
    tags: ["Psicología", "Estrategia", "Contenido"],
  },
];

const AboutSection = () => (
  <section id="equipo" className="py-20 md:py-28 bg-card/50">
    <div className="section-container">
      {/* Mission & Vision */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="section-badge mb-5 inline-block">Nuestra historia</span>
        <h2 className="section-title">
          Por qué existe{" "}
          <span className="text-primary">NeuroCalm</span>
        </h2>
        <p className="mt-5 section-subtitle">
          Una necesidad real, un equipo comprometido, una solución humana.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card-elevated p-7 border-l-4 border-primary"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center">
              <Target className="text-primary" size={20} />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">Misión</h3>
          </div>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            Brindar acompañamiento emocional accesible, humano y basado en evidencia a padres de niños neurodivergentes, para que nunca se sientan solos en su camino.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="card-elevated p-7 border-l-4 border-secondary"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
              <Eye className="text-secondary" size={20} />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">Visión</h3>
          </div>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
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
        className="text-center max-w-2xl mx-auto mb-12"
      >
        <h3 className="section-title text-2xl md:text-3xl">
          Los rostros detrás de{" "}
          <span className="text-secondary">Calmy</span>
        </h3>
        <p className="mt-4 section-subtitle text-base">
          Profesionales comprometidos con un propósito: que ningún padre se sienta solo.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {founders.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card-elevated overflow-hidden hover:shadow-[var(--shadow-hover)] transition-all duration-300"
          >
            <div className="h-64 overflow-hidden">
              <img
                src={f.photo}
                alt={`${f.name} - ${f.role}`}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-6">
              <span className="font-body text-xs font-bold uppercase tracking-wider text-secondary">
                {f.role}
              </span>
              <h4 className="mt-1.5 font-display text-xl font-bold text-foreground">{f.name}</h4>
              <p className="mt-3 font-body text-sm text-muted-foreground leading-relaxed">{f.bio}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {f.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-[11px] font-semibold text-secondary bg-secondary/8 px-2.5 py-1 rounded-full"
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
