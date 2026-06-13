import { motion } from "framer-motion";
import { Check, X, ShieldCheck, AlertTriangle, Lock } from "lucide-react";

const isCalmy = [
  "Una guía para cuando no sabes qué hacer en un momento difícil",
  "Primeros pasos prácticos para situaciones cotidianas de crianza",
  "Apoyo útil entre sesiones con un profesional",
  "Un espacio para ordenar tus dudas y actuar con más calma",
];

const isNotCalmy = [
  "No diagnostica ni evalúa clínicamente",
  "No reemplaza terapia ni intervención profesional",
  "No sustituye la atención de un especialista",
  "No es un servicio de emergencia o crisis de riesgo",
];

const TrustSection = () => (
  <section id="confianza" className="py-16 md:py-20 bg-card/55">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-10"
      >
        <div className="w-11 h-11 rounded-2xl bg-primary/6 flex items-center justify-center mx-auto mb-4">
          <ShieldCheck className="text-primary" size={22} />
        </div>
        <h2 className="section-title">
          Honesto sobre lo que es{" "}
          <span className="text-primary">y lo que no es</span>
        </h2>
        <p className="mt-4 section-subtitle max-w-xl mx-auto">
          La confianza empieza por ser transparentes. Calmy tiene un alcance claro, y cumplirlo bien es lo que le da valor.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {/* Lo que sí es */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-[1.4rem] border border-secondary/15 p-6 md:p-7 shadow-[var(--shadow-soft)]"
        >
          <div className="flex items-center gap-3 mb-7">
            <div className="w-10 h-10 rounded-xl bg-secondary/8 flex items-center justify-center">
              <Check className="text-secondary" size={18} />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">Para qué sirve Calmy</h3>
          </div>
          <ul className="space-y-4">
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
          className="bg-card rounded-[1.4rem] border border-primary/10 p-6 md:p-7 shadow-[var(--shadow-soft)]"
        >
          <div className="flex items-center gap-3 mb-7">
            <div className="w-10 h-10 rounded-xl bg-primary/6 flex items-center justify-center">
              <X className="text-primary" size={18} />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">Para qué no es Calmy</h3>
          </div>
          <ul className="space-y-4">
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

      {/* Crisis note */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="max-w-4xl mx-auto mt-4 flex items-start gap-3 bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-800/30 rounded-2xl px-5 py-3.5"
      >
        <AlertTriangle className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" size={16} />
        <p className="font-body text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
          En situaciones de riesgo o emergencia, acude a un profesional de salud mental o a los servicios de emergencia de tu país. Calmy es un recurso para el día a día, no para crisis agudas.
        </p>
      </motion.div>

      {/* Privacy note */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.22 }}
        className="max-w-4xl mx-auto mt-3 flex items-start gap-3 bg-primary/4 border border-primary/10 rounded-2xl px-5 py-3.5"
      >
        <Lock className="text-primary flex-shrink-0 mt-0.5" size={16} />
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          <span className="font-semibold text-foreground">Sabemos que hablar de tu hijo requiere cuidado.</span>{" "}
          Calmy está pensado para orientar, no para exponer información sensible. Te recomendamos compartir solo lo necesario para describir la situación, sin datos personales identificables.
        </p>
      </motion.div>
    </div>
  </section>
);

export default TrustSection;
