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
  <section id="problema" className="py-20 md:py-28">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="section-badge mb-4 inline-block">El desafío</span>
        <h2 className="section-title mt-2">
          Hay momentos en los que necesitas orientación,{" "}
          <span className="text-primary">y no siempre hay a quién acudir</span>
        </h2>
        <p className="mt-6 section-subtitle max-w-xl mx-auto">
          Criar con amor no siempre significa saber qué hacer. Y en esos momentos, decidir sin claridad puede sentirse abrumador.
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
            className="card-elevated-hover p-8 flex items-start gap-5"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/8 flex items-center justify-center flex-shrink-0">
              <p.icon className="text-primary" size={22} />
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-foreground mb-2">{p.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
