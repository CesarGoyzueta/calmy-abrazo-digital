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
  <section className="py-20 md:py-28">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="section-badge mb-4 inline-block">Para tu día a día</span>
        <h2 className="section-title mt-2">
          Situaciones en las que{" "}
          <span className="text-primary">Calmy puede ayudarte</span>
        </h2>
        <p className="mt-5 section-subtitle max-w-lg mx-auto">
          No para todo, sino para los momentos donde más necesitas un primer paso claro.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {cases.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="card-elevated-hover p-7 flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-secondary/8 flex items-center justify-center flex-shrink-0 mt-0.5">
              <c.icon className="text-secondary" size={19} />
            </div>
            <div>
              <h3 className="font-display text-sm font-bold text-foreground mb-1 leading-snug">
                {c.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {c.desc}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Sixth slot — closing note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.45 }}
          className="card-elevated p-7 flex items-center justify-center bg-gradient-to-br from-primary/4 to-secondary/4 border-dashed border-primary/15"
        >
          <p className="font-body text-sm text-muted-foreground italic text-center leading-relaxed">
            Si lo vives como padre o madre,<br />
            probablemente Calmy puede orientarte.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default UseCasesSection;
