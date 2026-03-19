import { motion } from "framer-motion";
import { Code, Brain, Users, Target, Eye } from "lucide-react";

const founders = [
  {
    icon: Code,
    name: "Cofundador",
    role: "CEO / Tecnología / IA",
    bio: "Apasionado por la tecnología con propósito. Lidera el desarrollo de Calmy combinando inteligencia artificial con sensibilidad humana para crear herramientas que realmente acompañen a quienes más lo necesitan.",
    tags: ["Tecnología", "Inteligencia Artificial", "Producto"],
    gradient: "from-primary to-primary/70",
  },
  {
    icon: Brain,
    name: "Cofundadora",
    role: "Psicología / Negocio",
    bio: "Profesional de la psicología con enfoque en neurodivergencia y bienestar familiar. Diseña la base científica y emocional de cada respuesta que Calmy brinda, asegurando calidad y calidez.",
    tags: ["Psicología", "Estrategia", "Contenido Clínico"],
    gradient: "from-secondary to-secondary/70",
  },
];

const AboutSection = () => (
  <section id="equipo" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      {/* Mission & Vision */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span className="inline-block font-body text-sm font-semibold uppercase tracking-widest text-secondary bg-secondary/10 px-5 py-2 rounded-full mb-6">Nuestra historia</span>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
          Por qué existe <span className="text-primary">NeuroCalm</span>
        </h2>
        <p className="mt-6 font-body text-xl text-muted-foreground leading-relaxed">
          Una necesidad real, un equipo comprometido, una solución humana.
        </p>
      </motion.div>

      {/* Mission & Vision cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
          transition={{ duration: 0.6, delay: 0.15 }}
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

      {/* Team header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <span className="inline-block font-body text-sm font-semibold uppercase tracking-widest text-secondary bg-secondary/10 px-5 py-2 rounded-full mb-6">Nuestro equipo</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
          Los rostros detrás de <span className="text-secondary">NeuroCalm</span>
        </h2>
        <p className="mt-5 font-body text-xl text-muted-foreground leading-relaxed">
          Profesionales comprometidos con un propósito: que ningún padre se sienta solo.
        </p>
      </motion.div>

      {/* Founder cards - large like reference */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {founders.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: [0.33, 1, 0.68, 1] }}
            className="glass-card overflow-hidden hover:shadow-[var(--shadow-hover)] transition-all duration-300"
          >
            {/* Large photo placeholder */}
            <div className={`h-64 bg-gradient-to-br ${f.gradient} flex items-center justify-center relative`}>
              <div className="w-28 h-28 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center border-4 border-primary-foreground/30">
                <f.icon className="text-primary-foreground" size={48} />
              </div>
              {/* Placeholder text */}
              <span className="absolute bottom-3 right-4 text-primary-foreground/60 font-body text-xs">Foto próximamente</span>
            </div>

            <div className="p-8">
              <span className="font-body text-sm font-bold uppercase tracking-wider text-secondary">{f.role}</span>
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

      {/* Extended team */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-14"
      >
        <div className="inline-flex items-center gap-3 bg-card rounded-full px-6 py-3 shadow-[var(--shadow-soft)] border border-border/50">
          <Users className="text-secondary" size={20} />
          <span className="font-body text-base font-semibold text-foreground">+ Equipo de asesores en psicología y neurodivergencia</span>
        </div>
        <p className="font-body text-base text-muted-foreground mt-4 max-w-lg mx-auto leading-relaxed">
          Contamos con una red de profesionales en salud mental que nos acompañan para asegurar la calidad y responsabilidad de cada orientación.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
