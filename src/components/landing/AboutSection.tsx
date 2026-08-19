import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import founderTech from "@/assets/founder-tech.jpeg";
import founderPsych from "@/assets/founder-psych.webp";

const founders = [
  {
    photo: founderPsych,
    name: "Erika Rubio",
    role: "Psicóloga y responsable del enfoque psicológico de Calmy",
    bio: "Lidera la construcción de contenidos y los criterios de orientación para que la experiencia sea sensible, clara y responsable.",
  },
  {
    photo: founderTech,
    name: "César Goyzueta",
    role: "Cofundador y responsable de producto y tecnología",
    bio: "Diseña la experiencia y la arquitectura que convertirán el contexto familiar en una orientación práctica y comprensible.",
  },
];

const AboutSection = () => (
  <section id="equipo" className="border-b border-border/60 bg-[hsl(var(--surface-warm))] py-12 md:py-16">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 max-w-3xl"
      >
        <span className="section-badge">Responsables de Calmy</span>
        <h2 className="section-title mt-4">Psicología y tecnología con responsabilidades visibles</h2>
        <p className="mt-4 section-subtitle">
          Calmy se construye con liderazgo psicológico y una implementación tecnológica orientada a límites claros.
        </p>
      </motion.div>

      <div className="grid gap-4 lg:grid-cols-2">
        {founders.map((founder, index) => (
          <motion.article
            key={founder.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            className="grid overflow-hidden rounded-lg border border-border/70 bg-card shadow-[var(--shadow-soft)] sm:grid-cols-[190px_1fr]"
          >
            <div className="h-56 bg-muted sm:h-full">
              <img
                src={founder.photo}
                alt={founder.name}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-contain object-bottom"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-foreground">{founder.name}</h3>
              <p className="mt-2 font-body text-sm font-semibold leading-relaxed text-secondary">{founder.role}</p>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">{founder.bio}</p>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-7">
        <Link to="/sobre-calmy" className="inline-flex min-h-11 items-center gap-2 font-body text-sm font-semibold text-primary hover:underline">
          Conoce el proyecto y su visión <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  </section>
);

export default AboutSection;
