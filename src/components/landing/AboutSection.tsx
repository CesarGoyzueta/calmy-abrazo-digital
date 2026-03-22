import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import founderTech from "@/assets/founder-tech.jpg";
import founderPsych from "@/assets/founder-psych.jpg";

const founders = [
  {
    photo: founderTech,
    name: "Cofundador",
    role: "Producto, IA y Tecnología",
  },
  {
    photo: founderPsych,
    name: "Cofundadora",
    role: "Psicología y Contenido Clínico",
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
            <div className="h-52 overflow-hidden">
              <img src={f.photo} alt={`${f.name} - ${f.role}`} className="w-full h-full object-cover object-top" />
            </div>
            <div className="p-6">
              <span className="font-body text-[11px] font-bold uppercase tracking-wider text-secondary">
                Cofundador/a · {f.role}
              </span>
              <h4 className="mt-1.5 font-display text-lg font-bold text-foreground">{f.name}</h4>
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
