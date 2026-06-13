import { motion } from "framer-motion";
import { UserPlus, Brain, Lightbulb, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Cuéntale qué está pasando",
    desc: "Describe la situación, la edad de tu hijo y lo que ya intentaste. Cuanto más concreto, más útil será la respuesta.",
    highlight: false,
  },
  {
    icon: Brain,
    step: "02",
    title: "Calmy ordena el contexto",
    desc: "Relaciona tu consulta con información psicológica estructurada para darte una respuesta con sentido, no genérica.",
    highlight: true,
  },
  {
    icon: Lightbulb,
    step: "03",
    title: "Recibe un primer paso",
    desc: "Obtén orientación breve, humana y aplicable para actuar con más calma. Sin esperar a la próxima cita.",
    highlight: false,
  },
];

const HowItWorksSection = () => (
  <section id="como-funciona" className="py-16 md:py-20 bg-card/45">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-10"
      >
        <span className="section-badge mb-4 inline-block">Cómo funciona</span>
        <h2 className="section-title mt-2">
          Un proceso diseñado para{" "}
          <span className="text-primary">darte respuestas con sentido</span>
        </h2>
        <p className="mt-4 section-subtitle max-w-xl mx-auto">
          No es solo preguntar y responder. Es un flujo que transforma tu contexto en orientación personalizada.
        </p>
      </motion.div>

      {/* Pipeline */}
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-4 items-stretch">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex flex-col"
            >
              {/* Connector arrow */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 z-10 w-8 h-8 rounded-full bg-card border border-border/60 shadow-sm items-center justify-center -translate-y-1/2">
                  <ArrowRight className="text-secondary" size={14} />
                </div>
              )}

              <div
                className={`flex-1 p-8 rounded-3xl text-center transition-all duration-300 ${
                  s.highlight
                    ? "bg-gradient-to-b from-primary/6 via-secondary/5 to-primary/4 border border-secondary/25 shadow-[var(--shadow-card)]"
                    : "card-elevated"
                }`}
              >
                <span
                  className={`inline-block font-display text-xs font-bold px-3 py-1 rounded-full mb-5 ${
                    s.highlight
                      ? "bg-secondary text-secondary-foreground shadow-sm"
                      : "bg-primary/8 text-primary"
                  }`}
                >
                  {s.step}
                </span>

                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                    s.highlight ? "bg-secondary/12" : "bg-primary/6"
                  }`}
                >
                  <s.icon className={s.highlight ? "text-secondary" : "text-primary"} size={26} />
                </div>

                <h3 className="font-display text-sm font-bold text-foreground leading-snug mb-2">{s.title}</h3>
                <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed">{s.desc}</p>

                {s.highlight && (
                  <span className="inline-block mt-4 font-body text-[10px] font-bold text-secondary uppercase tracking-wider">
                    ✦ Aquí está la diferencia
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Microcopy */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10 font-body text-sm text-muted-foreground italic"
        >
          De "no sé qué hacer" a "sé qué intentar ahora". En tres pasos.
        </motion.p>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
