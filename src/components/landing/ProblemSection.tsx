import { motion } from "framer-motion";
import { CloudRain, HelpCircle, Clock, HeartCrack } from "lucide-react";

const problems = [
  {
    icon: CloudRain,
    title: "Crisis emocional sin guía",
    description: "Tu hijo está en pleno desbordo y necesitas saber qué hacer ahora, no mañana. La urgencia no espera.",
  },
  {
    icon: HelpCircle,
    title: "Conductas que no sabes interpretar",
    description: "¿Es normal? ¿Debería preocuparme? Esa incertidumbre constante agota y paraliza.",
  },
  {
    icon: Clock,
    title: "Vacío entre sesiones",
    description: "Las citas con el profesional son puntuales, pero la vida no espera. Necesitas apoyo continuo.",
  },
  {
    icon: HeartCrack,
    title: "Agotamiento y culpa",
    description: "Sentirse abrumado, confundido o solo es más común de lo que crees. La carga emocional pesa.",
  },
];

const ProblemSection = () => (
  <section id="problema" className="py-16 md:py-20">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-10"
      >
        <span className="section-badge mb-4 inline-block">El desafío</span>
        <h2 className="section-title mt-2">
          Hay momentos en los que necesitas orientación,{" "}
          <span className="text-primary">y no siempre hay a quién acudir</span>
        </h2>
        <p className="mt-4 section-subtitle max-w-2xl mx-auto">
          Criar con amor no siempre significa tener respuestas. Cuando la duda aparece, necesitas una guía clara para actuar mejor.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {problems.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="card-elevated-hover p-5 flex items-start gap-3.5"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/[0.07] flex items-center justify-center flex-shrink-0">
              <p.icon className="text-primary" size={18} />
            </div>
            <div>
              <h3 className="font-display text-sm font-bold text-foreground mb-1">{p.title}</h3>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">{p.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
