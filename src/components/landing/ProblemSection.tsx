import { motion } from "framer-motion";
import { CloudRain, HelpCircle, Clock, HeartCrack } from "lucide-react";

const problems = [
  {
    icon: CloudRain,
    title: "Situaciones difíciles en el día a día",
    description: "Los padres enfrentan momentos emocionalmente intensos sin tener a quién recurrir en ese instante.",
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
  {
    icon: HeartCrack,
    title: "El agotamiento emocional",
    description: "Sentirse abrumado, confundido o solo es más común de lo que crees. Y está bien pedir apoyo.",
  },
];

const ProblemSection = () => (
  <section id="problema" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span className="inline-block font-body text-sm font-semibold uppercase tracking-widest text-secondary bg-secondary/10 px-5 py-2 rounded-full mb-6">El desafío</span>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
          El acompañamiento emocional{" "}
          <span className="text-primary">no siempre está disponible</span>{" "}
          cuando más se necesita
        </h2>
        <p className="mt-6 font-body text-xl text-muted-foreground leading-relaxed">
          Sabemos lo que se siente. Por eso creamos algo pensado para esos momentos.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {problems.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.33, 1, 0.68, 1] }}
            className="glass-card-hover p-8 flex items-start gap-5"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center flex-shrink-0">
              <p.icon className="text-primary" size={28} />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="font-body text-base text-muted-foreground leading-relaxed">{p.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
