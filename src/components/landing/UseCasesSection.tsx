import { motion } from "framer-motion";
import { Flame, RefreshCw, Scale, School, ClipboardList } from "lucide-react";

const cases = [
  {
    icon: Flame,
    title: "Desbordes y sobrecarga",
    desc: "Bajar la intensidad y observar qué puede estar comunicando.",
  },
  {
    icon: RefreshCw,
    title: "Rutinas y transiciones",
    desc: "Anticipar cambios sin aumentar la tensión o el rechazo.",
  },
  {
    icon: Scale,
    title: "Límites y frustración",
    desc: "Responder con claridad sin actuar desde la culpa.",
  },
  {
    icon: School,
    title: "Colegio y separación",
    desc: "Ordenar señales y preparar preguntas para el profesional.",
  },
  {
    icon: ClipboardList,
    title: "Dudas entre sesiones",
    desc: "Registrar lo ocurrido y llegar mejor preparado a la siguiente cita.",
  },
];

const UseCasesSection = () => (
  <section className="border-b border-border/60 bg-[hsl(var(--surface-warm))] py-12 md:py-16">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 max-w-3xl"
      >
        <span className="section-badge">Para el día a día</span>
        <h2 className="section-title mt-4">
          Momentos frecuentes en familias con TEA o TDAH
        </h2>
        <p className="mt-4 section-subtitle">
          Calmy se enfocará en situaciones cotidianas donde comprender el contexto ayuda a elegir un primer paso.
        </p>
      </motion.div>

      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-6">
        {cases.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className={`rounded-lg border border-border bg-card p-5 ${index < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/8 text-primary">
              <item.icon size={19} />
            </div>
            <h3 className="mt-4 font-display text-base font-bold text-foreground">{item.title}</h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default UseCasesSection;
