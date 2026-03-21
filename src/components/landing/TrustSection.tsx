import { motion } from "framer-motion";
import { Check, X, ShieldCheck } from "lucide-react";

const isCalmy = [
  "Acompañamiento conversacional para padres",
  "Orientación basada en conocimiento psicológico",
  "Apoyo claro y personalizado para el día a día",
  "Una herramienta para organizar dudas y responder mejor",
];

const isNotCalmy = [
  "No reemplaza terapia",
  "No realiza diagnóstico clínico",
  "No sustituye evaluación profesional",
  "No reemplaza intervención especializada",
];

const TrustSection = () => (
  <section id="confianza" className="py-20 md:py-28">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <div className="w-14 h-14 rounded-2xl bg-primary/6 flex items-center justify-center mx-auto mb-5">
          <ShieldCheck className="text-primary" size={28} />
        </div>
        <h2 className="section-title">
          Para{" "}
          <span className="text-primary">acompañarte</span>, no para reemplazar al profesional
        </h2>
        <p className="mt-6 section-subtitle max-w-xl mx-auto">
          La transparencia es parte de nuestro compromiso contigo.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Lo que sí es */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-3xl border border-secondary/15 p-9 md:p-10"
        >
          <div className="flex items-center gap-3 mb-7">
            <div className="w-10 h-10 rounded-xl bg-secondary/8 flex items-center justify-center">
              <Check className="text-secondary" size={18} />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">Lo que sí es Calmy</h3>
          </div>
          <ul className="space-y-5">
            {isCalmy.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-secondary/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="text-secondary" size={11} />
                </div>
                <span className="font-body text-sm text-muted-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Lo que no es */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="bg-card rounded-3xl border border-primary/10 p-9 md:p-10"
        >
          <div className="flex items-center gap-3 mb-7">
            <div className="w-10 h-10 rounded-xl bg-primary/6 flex items-center justify-center">
              <X className="text-primary" size={18} />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">Lo que no es Calmy</h3>
          </div>
          <ul className="space-y-5">
            {isNotCalmy.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/6 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X className="text-primary" size={11} />
                </div>
                <span className="font-body text-sm text-muted-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default TrustSection;
