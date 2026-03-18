import { motion } from "framer-motion";
import { CloudRain, HelpCircle, Clock } from "lucide-react";

const problems = [
  {
    icon: CloudRain,
    title: "Situaciones difíciles en el día a día",
    description: "Los padres enfrentan momentos intensos sin tener a quién recurrir en ese instante.",
  },
  {
    icon: HelpCircle,
    title: "La duda de no saber cómo actuar",
    description: "No siempre hay claridad sobre qué decir o hacer cuando tu hijo más te necesita.",
  },
  {
    icon: Clock,
    title: "La soledad entre sesiones",
    description: "Las sesiones psicológicas son puntuales, pero la vida no espera entre citas.",
  },
];

const ProblemSection = () => (
  <section id="problema" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="font-body text-xs font-semibold uppercase tracking-widest text-secondary">El desafío</span>
        <h2 className="mt-4 font-display text-3xl md:text-4xl font-medium text-foreground">
          El acompañamiento emocional no siempre está disponible cuando más se necesita
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {problems.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: [0.33, 1, 0.68, 1] }}
            className="glass-card-hover p-8 text-center"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <p.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-display text-lg font-medium text-foreground mb-3">{p.title}</h3>
            <p className="font-body text-muted-foreground leading-relaxed">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
