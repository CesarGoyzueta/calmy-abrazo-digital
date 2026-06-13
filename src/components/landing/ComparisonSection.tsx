import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const withoutCalmy = [
  "Buscas consejos sueltos y no sabes cuál aplicar.",
  "No sabes si estás exagerando o minimizando lo que pasa.",
  "Llegas a la sesión con muchas dudas mezcladas.",
  "Reaccionas desde el cansancio o la culpa.",
];

const withCalmy = [
  "Ordenas lo que está pasando antes de actuar.",
  "Tienes un primer paso claro para ese momento.",
  "Preparas mejor tus preguntas para el profesional.",
  "Respondes con más calma cuando más lo necesitas.",
];

const ComparisonSection = () => (
  <section className="py-16 md:py-20">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-10"
      >
        <span className="section-badge mb-4 inline-block">El día a día</span>
        <h2 className="section-title mt-2">
          Entre la duda y la próxima cita,{" "}
          <span className="text-secondary">Calmy te ayuda a avanzar</span>
        </h2>
        <p className="mt-5 section-subtitle max-w-xl mx-auto">
          Calmy no reemplaza al profesional. Te ayuda en el tiempo que pasa entre sesiones, cuando la vida no espera.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {/* Sin Calmy */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-[1.4rem] border border-border/70 p-6 md:p-7 shadow-[var(--shadow-soft)]"
        >
          <p className="font-display text-sm font-bold text-muted-foreground uppercase tracking-widest mb-6">
            Sin Calmy
          </p>
          <ul className="space-y-4">
            {withoutCalmy.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/6 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X className="text-primary/50" size={10} />
                </div>
                <span className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Con Calmy */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="bg-gradient-to-b from-secondary/[0.07] to-card rounded-[1.4rem] border border-secondary/25 p-6 md:p-7 shadow-[var(--shadow-soft)]"
        >
          <p className="font-display text-sm font-bold text-secondary uppercase tracking-widest mb-6">
            Con Calmy
          </p>
          <ul className="space-y-4">
            {withCalmy.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="text-secondary" size={10} />
                </div>
                <span className="font-body text-sm text-foreground leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-8 font-body text-xs text-muted-foreground italic"
      >
        Calmy es un apoyo para el día a día, no un sustituto de la atención profesional.
      </motion.p>
    </div>
  </section>
);

export default ComparisonSection;
