import { motion } from "framer-motion";
import { UserPlus, Brain, Lightbulb, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Comparte el contexto de tu hijo",
    desc: "Edad, necesidades, antecedentes y situaciones que te preocupan. Esto permite que Calmy personalice cada respuesta a tu realidad familiar.",
    highlight: false,
  },
  {
    icon: Brain,
    step: "02",
    title: "Calmy consulta una base psicológica estructurada",
    desc: "El sistema combina tu consulta con conocimiento psicológico real y confiable para responder con mayor claridad, coherencia y sustento.",
    highlight: true,
  },
  {
    icon: Lightbulb,
    step: "03",
    title: "Sabes qué hacer primero",
    desc: "Recibes orientación breve, adaptada a tu hijo y a ese momento concreto. Un primer paso claro para actuar con más calma.",
    highlight: false,
  },
];

const HowItWorksSection = () => (
  <section id="como-funciona" className="py-20 md:py-28">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="section-badge mb-4 inline-block">Cómo funciona</span>
        <h2 className="section-title mt-2">
          Un proceso diseñado para{" "}
          <span className="text-primary">darte respuestas con sentido</span>
        </h2>
        <p className="mt-6 section-subtitle max-w-xl mx-auto">
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
                    ? "bg-gradient-to-b from-primary/6 via-secondary/5 to-primary/4 border-2 border-secondary/20 shadow-[var(--shadow-card)] md:scale-[1.04]"
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
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 ${
                    s.highlight ? "bg-secondary/12" : "bg-primary/6"
                  }`}
                >
                  <s.icon className={s.highlight ? "text-secondary" : "text-primary"} size={26} />
                </div>

                <h3 className="font-display text-base font-bold text-foreground leading-snug mb-3">{s.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>

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
          De "no sé qué hacer" a "sé cuál es el primer paso". Eso es lo que busca Calmy.
        </motion.p>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
