import { motion } from "framer-motion";
import { Flame, RefreshCw, Scale, School } from "lucide-react";

const moments = [
  {
    icon: Flame,
    title: "Desbordes",
    description: "Cuando la intensidad sube y no está claro qué puede estar comunicando.",
    iconClass: "bg-primary/10 text-primary",
  },
  {
    icon: RefreshCw,
    title: "Rutinas",
    description: "Cuando una transición o un cambio inesperado altera todo el momento.",
    iconClass: "bg-secondary/10 text-secondary",
  },
  {
    icon: Scale,
    title: "Límites",
    description: "Cuando sostener un no activa frustración, culpa o dudas sobre cómo responder.",
    iconClass: "bg-coral/10 text-coral",
  },
  {
    icon: School,
    title: "Colegio",
    description: "Cuando las señales aparecen al salir, hacer tareas o prepararse para volver.",
    iconClass: "bg-amber-100 text-amber-700",
  },
];

const ProblemSection = () => (
  <section id="momentos" className="border-b border-border/60 bg-card py-10 md:py-12">
    <div className="section-container">
      <div className="grid items-start gap-7 lg:grid-cols-[0.68fr_1.32fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <span className="section-badge">Momentos cotidianos</span>
          <h2 className="section-title mt-4">La duda aparece antes de tener toda la información</h2>
          <p className="mt-4 section-subtitle">
            Calmy se enfocará en situaciones donde comprender el contexto puede ayudar a elegir un primer paso.
          </p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2">
          {moments.map((moment, index) => (
            <motion.article
              key={moment.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="flex min-h-[112px] items-start gap-4 rounded-lg border border-border bg-background p-4"
            >
              <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${moment.iconClass}`}>
                <moment.icon size={19} />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-foreground">{moment.title}</h3>
                <p className="mt-1 font-body text-sm leading-relaxed text-muted-foreground">{moment.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
