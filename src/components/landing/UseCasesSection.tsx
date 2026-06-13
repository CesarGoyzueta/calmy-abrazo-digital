import { motion } from "framer-motion";
import { Flame, RefreshCw, Scale, School, ClipboardList } from "lucide-react";

const cases = [
  {
    icon: Flame,
    title: "Crisis emocionales",
    desc: "Qué hacer cuando tu hijo se desborda y necesitas actuar ahora.",
  },
  {
    icon: RefreshCw,
    title: "Rutinas y transiciones",
    desc: "Cómo anticipar cambios sin aumentar la tensión ni el rechazo.",
  },
  {
    icon: Scale,
    title: "Límites y frustración",
    desc: "Cómo responder sin sentirte demasiado estricto o demasiado permisivo.",
  },
  {
    icon: School,
    title: "Colegio y separación",
    desc: "Cómo entender el rechazo escolar o la angustia al separarse.",
  },
  {
    icon: ClipboardList,
    title: "Dudas entre sesiones",
    desc: "Cómo ordenar lo que quieres consultar con un profesional.",
  },
];

const UseCasesSection = () => (
  <section className="py-16 md:py-20">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-10"
      >
        <span className="section-badge mb-4 inline-block">Para tu día a día</span>
        <h2 className="section-title mt-2">
          Situaciones en las que{" "}
          <span className="text-primary">Calmy puede ayudarte</span>
        </h2>
        <p className="mt-4 section-subtitle max-w-xl mx-auto">
          No para todo, sino para los momentos donde más necesitas saber qué intentar.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mx-auto">
        {cases.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="card-elevated-hover p-5 flex flex-col items-start gap-3"
          >
            <div className="w-9 h-9 rounded-xl bg-secondary/8 flex items-center justify-center flex-shrink-0">
              <c.icon className="text-secondary" size={17} />
            </div>
            <div>
              <h3 className="font-display text-sm font-bold text-foreground mb-1 leading-snug">
                {c.title}
              </h3>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                {c.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default UseCasesSection;
