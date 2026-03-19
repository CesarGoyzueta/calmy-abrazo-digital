import { motion } from "framer-motion";
import { CloudRain, HelpCircle, Clock, HeartCrack } from "lucide-react";

const problems = [
  {
    icon: CloudRain,
    title: "No sabes cómo responder a una crisis emocional",
    description: "Tu hijo está en pleno desbordo y necesitas saber qué hacer en ese momento, no mañana.",
  },
  {
    icon: HelpCircle,
    title: "Te preocupa una conducta y no sabes cómo interpretarla",
    description: "¿Es normal? ¿Debería preocuparme? Esa incertidumbre constante agota.",
  },
  {
    icon: Clock,
    title: "Entre sesiones te quedas con dudas",
    description: "Las citas con el profesional son puntuales, pero la vida no espera entre sesiones.",
  },
  {
    icon: HeartCrack,
    title: "Te sientes agotado y quieres hacerlo mejor",
    description: "Sentirse abrumado, confundido o solo es más común de lo que crees. Y está bien pedir apoyo.",
  },
];

const ProblemSection = () => (
  <section id="problema" className="py-24 md:py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span className="inline-block font-body text-sm font-semibold uppercase tracking-widest text-secondary bg-secondary/10 px-5 py-2 rounded-full mb-6">
          El desafío
        </span>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
          Hay momentos en los que necesitas orientación,{" "}
          <span className="text-primary">y no siempre hay a quién acudir</span>
        </h2>
        <p className="mt-6 font-body text-xl text-muted-foreground leading-relaxed">
          Criar con amor no siempre significa saber qué hacer en cada momento. Por eso pensamos Calmy para acompañarte cuando surgen dudas reales.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {problems.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card-hover p-8 flex items-start gap-5"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center flex-shrink-0">
              <p.icon className="text-primary" size={28} />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="font-body text-base text-muted-foreground leading-relaxed">{p.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
