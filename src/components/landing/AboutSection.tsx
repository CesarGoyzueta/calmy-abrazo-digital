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
    subtitle: "Visión estratégica · IA y Tecnología",
    bio: "Construye tecnología con propósito y lidera el desarrollo de Calmy para que la experiencia sea útil, clara y humana.",
  },
  {
    photo: founderPsych,
    name: "Erika Rubio",
    badge: "Co-Fundadora · CMO & Head of Psychology",
    subtitle: "Sustento clínico · Marca y crecimiento",
    bio: "Aporta el enfoque psicológico y diseña la base científica y emocional que guía cada respuesta de Calmy.",
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
        <p className="mt-5 section-subtitle max-w-lg mx-auto">
          Creamos Calmy porque entendemos lo difícil que puede ser acompañar sin claridad. Combinamos psicología y tecnología para ayudarte en esos momentos reales.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {founders.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card-elevated overflow-hidden hover:shadow-[var(--shadow-hover)] transition-all duration-300"
          >
            <div className="overflow-hidden" style={{ height: "22rem" }}>
              <img src={f.photo} alt={`${f.name} - ${f.badge}`} className="w-full h-full object-contain" />
            </div>
            <div className="p-6">
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
