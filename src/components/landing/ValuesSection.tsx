import { motion } from "framer-motion";

const values = [
  { label: "Empatía", desc: "Escuchamos sin juzgar.", color: "bg-primary/10 text-primary" },
  { label: "Ciencia", desc: "Basado en evidencia.", color: "bg-secondary/10 text-secondary" },
  { label: "Inclusión", desc: "Sin etiquetas rígidas.", color: "bg-accent/30 text-accent-foreground" },
  { label: "Calma", desc: "A tu ritmo, sin presión.", color: "bg-secondary/10 text-secondary" },
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
      </motion.div>

      {/* Chat bubble style */}
      <div className="max-w-xl mx-auto space-y-4">
        {values.map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.12, ease: [0.33, 1, 0.68, 1] }}
            className={`glass-card-hover p-6 flex items-center gap-5 ${i % 2 === 1 ? "ml-auto max-w-md" : "max-w-md"}`}
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${v.color}`}>
              <span className="font-display font-semibold text-lg">{v.label[0]}</span>
            </div>
            <div>
              <p className="font-display font-medium text-foreground">{v.label}</p>
              <p className="font-body text-sm text-muted-foreground">{v.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ValuesSection;
