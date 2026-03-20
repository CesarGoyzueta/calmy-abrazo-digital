import { motion } from "framer-motion";
import { CloudRain, HelpCircle, Clock, HeartCrack } from "lucide-react";

const problems = [
  {
    icon: CloudRain,
    title: "Crisis emocional sin guía",
    description: "Tu hijo está en pleno desbordo y necesitas saber qué hacer ahora, no mañana.",
  },
  {
    icon: HelpCircle,
    title: "Conductas que no sabes interpretar",
    description: "¿Es normal? ¿Debería preocuparme? Esa incertidumbre constante agota.",
  },
  {
    icon: Clock,
    title: "Vacío entre sesiones",
    description: "Las citas con el profesional son puntuales, pero la vida no espera entre sesiones.",
  },
  {
    icon: HeartCrack,
    title: "Agotamiento y culpa",
    description: "Sentirse abrumado, confundido o solo es más común de lo que crees. Y está bien pedir apoyo.",
  },
];

const ProblemSection = () => (
  <section id="problema" className="py-20 md:py-28">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="section-badge mb-5 inline-block">El desafío</span>
        <h2 className="section-title">
          Hay momentos en los que necesitas orientación,{" "}
          <span className="text-primary">y no siempre hay a quién acudir</span>
        </h2>
        <p className="mt-5 section-subtitle">
          Criar con amor no siempre significa saber qué hacer en cada momento. Calmy nace para acompañarte en esas dudas reales del día a día.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {problems.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="card-elevated-hover p-7 flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/8 flex items-center justify-center flex-shrink-0">
              <p.icon className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-foreground mb-1.5">{p.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
