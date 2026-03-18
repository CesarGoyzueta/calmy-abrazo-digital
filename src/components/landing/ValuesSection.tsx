import { motion } from "framer-motion";
import { Heart, FlaskConical, Users, Leaf } from "lucide-react";

const values = [
  { icon: Heart, label: "Empatía", desc: "Escuchamos sin juzgar. Entendemos que cada situación es única y merece atención genuina.", color: "bg-primary/10 text-primary" },
  { icon: FlaskConical, label: "Ciencia", desc: "Cada orientación está fundamentada en principios psicológicos con evidencia actual.", color: "bg-secondary/10 text-secondary" },
  { icon: Users, label: "Inclusión", desc: "Sin etiquetas rígidas. Cada persona y familia tiene su propio camino.", color: "bg-accent/30 text-accent-foreground" },
  { icon: Leaf, label: "Calma", desc: "A tu ritmo, sin presión. No hay respuestas incorrectas ni urgencias forzadas.", color: "bg-secondary/10 text-secondary" },
];

const ValuesSection = () => (
  <section id="valores" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="font-body text-xs font-semibold uppercase tracking-widest text-secondary">Nuestros valores</span>
        <h2 className="mt-4 font-display text-3xl md:text-4xl font-medium text-foreground">
          Lo que nos guía
        </h2>
        <p className="mt-4 font-body text-lg text-muted-foreground leading-relaxed">
          Cada decisión que tomamos parte de estos principios.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {values.map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: [0.33, 1, 0.68, 1] }}
            className="glass-card-hover p-6 flex items-start gap-5"
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${v.color}`}>
              <v.icon size={22} />
            </div>
            <div>
              <p className="font-display font-medium text-foreground text-lg">{v.label}</p>
              <p className="font-body text-sm text-muted-foreground mt-1 leading-relaxed">{v.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ValuesSection;
