import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import founderTech from "@/assets/founder-tech.jpeg";
import founderPsych from "@/assets/founder-psych.png";

const founders = [
  {
    photo: founderTech,
    name: "César Goyzueta",
    badge: "Co-Fundador · CEO & CTO",
    subtitle: "Visión de producto · IA y Tecnología",
    bio: "Lidera la visión de producto, IA y tecnología para convertir conocimiento psicológico en una experiencia simple, útil y humana para las familias.",
  },
  {
    photo: founderPsych,
    name: "Erika Rubio",
    badge: "Co-Fundadora · Psicología, contenidos y crecimiento",
    subtitle: "Enfoque psicológico · Contenidos y Marca",
    bio: "Lidera el enfoque psicológico, la construcción de contenidos y los criterios de orientación que ayudan a que Calmy responda con sensibilidad, claridad y responsabilidad.",
  },
];

const AboutSection = () => (
  <section id="equipo" className="section-warm py-16 md:py-20">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-10"
      >
        <span className="section-badge mb-4 inline-block">Nuestro equipo</span>
        <h2 className="section-title mt-2">
          Los rostros detrás de{" "}
          <span className="text-primary">Calmy</span>
        </h2>
        <p className="mt-4 section-subtitle max-w-xl mx-auto">
          Creamos Calmy porque entendemos lo difícil que puede ser acompañar sin claridad. Combinamos psicología y tecnología para ayudarte en esos momentos reales.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {founders.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card-elevated overflow-hidden hover:shadow-[var(--shadow-hover)] transition-all duration-300"
          >
            <div className="overflow-hidden bg-gradient-to-b from-primary/[0.025] to-[#f8f2e7]" style={{ height: "clamp(12rem, 28vw, 18rem)" }}>
              <img src={f.photo} alt={`${f.name} - ${f.badge}`} className="w-full h-full object-contain object-bottom" />
            </div>
            <div className="p-5">
              <div className="min-h-[2.5rem] flex items-start">
                <span className="font-body text-[11px] font-bold uppercase tracking-wider text-secondary">
                  {f.badge}
                </span>
              </div>
              <h4 className="mt-1.5 font-display text-lg font-bold text-foreground">{f.name}</h4>
              <p className="mt-0.5 font-body text-[11px] font-semibold text-muted-foreground/70 uppercase tracking-wider">{f.subtitle}</p>
              <p className="mt-2 font-body text-sm text-muted-foreground leading-relaxed">{f.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-8"
      >
        <Link
          to="/sobre-calmy"
          className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          Conoce más sobre Calmy <ArrowRight size={14} />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
