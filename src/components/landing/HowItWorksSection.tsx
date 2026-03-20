import { motion } from "framer-motion";
import { UserPlus, Brain, Lightbulb, ChevronRight } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Comparte el contexto de tu hijo",
    desc: "Edad, necesidades, antecedentes y situaciones que te preocupan. Esto ayuda a que Calmy entienda mejor el contexto familiar.",
    highlight: false,
  },
  {
    icon: Brain,
    step: "02",
    title: "Calmy consulta una base psicológica estructurada",
    desc: "El sistema combina tu consulta con conocimiento psicológico confiable para responder con mayor claridad, coherencia y sustento.",
    highlight: true,
  },
  {
    icon: Lightbulb,
    step: "03",
    title: "Recibe orientación personalizada",
    desc: "Obtén respuestas adaptadas a tu situación, con sugerencias alineadas al perfil de tu hijo y al momento que estás viviendo.",
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
        <span className="section-badge mb-5 inline-block">Cómo funciona</span>
        <h2 className="section-title">
          Un proceso diseñado para{" "}
          <span className="text-primary">darte respuestas con sentido</span>
        </h2>
        <p className="mt-5 section-subtitle">
          No es solo preguntar y responder. Es un flujo que transforma tu contexto en orientación personalizada.
        </p>
      </motion.div>

      {/* Pipeline */}
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-0 items-stretch">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex flex-col"
            >
              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-3 z-10 w-6 h-6 rounded-full bg-secondary/20 items-center justify-center -translate-y-1/2">
                  <ChevronRight className="text-secondary" size={14} />
                </div>
              )}

              <div
                className={`flex-1 mx-1.5 mb-4 md:mb-0 p-7 rounded-3xl text-center transition-all duration-300 ${
                  s.highlight
                    ? "bg-gradient-to-b from-primary/8 to-secondary/8 border-2 border-secondary/25 shadow-[var(--shadow-card)] scale-[1.03]"
                    : "card-elevated"
                }`}
              >
                <span
                  className={`inline-block font-display text-xs font-bold px-3.5 py-1 rounded-full mb-4 ${
                    s.highlight
                      ? "bg-secondary text-secondary-foreground shadow-md"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {s.step}
                </span>

                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                    s.highlight ? "bg-secondary/15" : "bg-primary/8"
                  }`}
                >
                  <s.icon className={s.highlight ? "text-secondary" : "text-primary"} size={26} />
                </div>

                <h3 className="font-display text-base font-bold text-foreground leading-snug">{s.title}</h3>
                <p className="mt-2.5 font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>

                {s.highlight && (
                  <span className="inline-block mt-3 font-body text-[11px] font-bold text-secondary uppercase tracking-wider">
                    ✦ Aquí está la diferencia
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
