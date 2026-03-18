import { motion } from "framer-motion";
import { Code, Brain } from "lucide-react";

const founders = [
  {
    icon: Code,
    name: "Cofundador",
    role: "CEO / Tecnología / IA",
    color: "from-primary to-primary/60",
  },
  {
    icon: Brain,
    name: "Cofundadora",
    role: "Psicología / Negocio",
    color: "from-secondary to-secondary/60",
  },
];

const AboutSection = () => (
  <section id="equipo" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="font-body text-xs font-semibold uppercase tracking-widest text-secondary">Quiénes somos</span>
        <h2 className="mt-4 font-display text-3xl md:text-4xl font-medium text-foreground">
          Un equipo con propósito
        </h2>
        <p className="mt-4 font-body text-lg text-muted-foreground leading-relaxed">
          Combinamos tecnología y psicología para crear soluciones accesibles y humanas.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
        {founders.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: [0.33, 1, 0.68, 1] }}
            className="glass-card-hover p-8 text-center"
          >
            <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${f.color} flex items-center justify-center mx-auto mb-5`}>
              <f.icon className="text-primary-foreground" size={28} />
            </div>
            <h3 className="font-display text-lg font-medium text-foreground">{f.name}</h3>
            <p className="font-body text-sm text-muted-foreground mt-1">{f.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
