import { motion } from "framer-motion";
import { CloudRain, HelpCircle, Clock, HeartCrack } from "lucide-react";

const problems = [
  {
    icon: CloudRain,
    title: "Cuando se desborda",
    description: "Puede haber sobrecarga, frustración o una necesidad que todavía no logra expresar.",
  },
  {
    icon: HelpCircle,
    title: "Señales difíciles de leer",
    description: "No siempre es fácil identificar qué cambió, qué lo activó o qué necesita.",
  },
  {
    icon: Clock,
    title: "Dudas entre sesiones",
    description: "Las preguntas aparecen en casa, en el colegio y durante las transiciones.",
  },
  {
    icon: HeartCrack,
    title: "Cansancio sin claridad",
    description: "Sentirte confundido no significa que estés fallando. Acompañar también requiere apoyo.",
  },
];

const ProblemSection = () => (
  <section id="problema" className="border-b border-border/60 bg-card py-12 md:py-16">
    <div className="section-container">
      <div className="grid items-start gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-badge">El desafío cotidiano</span>
          <h2 className="section-title mt-4">
            Antes de decidir qué hacer, ayuda entender qué está pasando
          </h2>
          <p className="mt-4 section-subtitle">
            En familias de niños con TEA o TDAH, una conducta visible puede comunicar sobrecarga, emoción, necesidad o contexto.
          </p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2">
          {problems.map((problem, index) => (
            <motion.article
              key={problem.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex min-h-[132px] items-start gap-4 rounded-lg border border-border bg-background p-5"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/8 text-primary">
                <problem.icon size={19} />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-foreground">{problem.title}</h3>
                <p className="mt-1.5 font-body text-sm leading-relaxed text-muted-foreground">{problem.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
