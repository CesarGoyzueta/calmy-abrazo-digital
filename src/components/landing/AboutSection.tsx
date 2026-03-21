import { motion } from "framer-motion";
import founderTech from "@/assets/founder-tech.jpg";
import founderPsych from "@/assets/founder-psych.jpg";

const founders = [
  {
    photo: founderTech,
    name: "Cofundador",
    role: "Producto, IA y Tecnología",
    bio: "Apasionado por la tecnología con propósito. Lidera el desarrollo de Calmy combinando inteligencia artificial con sensibilidad humana.",
    tags: ["Tecnología", "IA", "Producto"],
  },
  {
    photo: founderPsych,
    name: "Cofundadora",
    role: "Psicología y Contenido Clínico",
    bio: "Profesional de la psicología con enfoque en neurodivergencia. Diseña la base científica y emocional de cada respuesta de Calmy.",
    tags: ["Psicología", "Estrategia", "Contenido"],
  },
];

const AboutSection = () => (
  <section id="equipo" className="py-20 md:py-28 bg-card/40">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="section-badge mb-4 inline-block">Nuestro equipo</span>
        <h2 className="section-title mt-2">
          Los rostros detrás de{" "}
          <span className="text-primary">Calmy</span>
        </h2>
        <p className="mt-5 section-subtitle">
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
            <div className="h-56 overflow-hidden">
              <img
                src={f.photo}
                alt={`${f.name} - ${f.role}`}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-7">
              <span className="font-body text-[11px] font-bold uppercase tracking-wider text-secondary">
                Cofundador/a · {f.role}
              </span>
              <h4 className="mt-2 font-display text-lg font-bold text-foreground">{f.name}</h4>
              <p className="mt-3 font-body text-sm text-muted-foreground leading-relaxed">{f.bio}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {f.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-[10px] font-semibold text-secondary bg-secondary/6 px-2.5 py-1 rounded-full"
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
