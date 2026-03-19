import { motion } from "framer-motion";
import { Check, X, ShieldCheck } from "lucide-react";

const isCalmy = [
  "Acompañamiento conversacional para padres",
  "Orientación basada en conocimiento psicológico",
  "Apoyo claro y personalizado para el día a día",
  "Una herramienta para ayudarte a organizar dudas y responder mejor a situaciones cotidianas",
];

const isNotCalmy = [
  "No reemplaza terapia",
  "No realiza diagnóstico clínico",
  "No sustituye evaluación profesional",
  "No reemplaza intervención especializada cuando se necesita",
];

const TrustSection = () => (
  <section id="confianza" className="py-24 md:py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <ShieldCheck className="text-primary" size={32} />
        </div>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
          Una herramienta para{" "}
          <span className="text-primary">acompañarte</span>, no para reemplazar al profesional
        </h2>
        <p className="mt-6 font-body text-xl text-muted-foreground leading-relaxed">
          La transparencia es parte de nuestro compromiso contigo.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Lo que sí es */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 border-l-4 border-secondary"
        >
          <h3 className="font-display text-2xl font-bold text-foreground mb-6">Lo que sí es Calmy</h3>
          <ul className="space-y-4">
            {isCalmy.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="text-secondary" size={14} />
                </div>
                <span className="font-body text-base text-muted-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Lo que no es */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card p-8 border-l-4 border-primary"
        >
          <h3 className="font-display text-2xl font-bold text-foreground mb-6">Lo que no es Calmy</h3>
          <ul className="space-y-4">
            {isNotCalmy.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X className="text-primary" size={14} />
                </div>
                <span className="font-body text-base text-muted-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default TrustSection;
