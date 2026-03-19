import { motion } from "framer-motion";
import { UserPlus, Brain, Lightbulb, ArrowRight } from "lucide-react";

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
    title: "Recibe orientación personalizada y práctica",
    desc: "Obtén respuestas adaptadas a tu situación, con sugerencias más alineadas al perfil de tu hijo y al momento que estás viviendo.",
    highlight: false,
  },
];

const HowItWorksSection = () => (
  <section id="como-funciona" className="py-24 md:py-32 px-6 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <span className="inline-block font-body text-sm font-semibold uppercase tracking-widest text-secondary bg-secondary/10 px-5 py-2 rounded-full mb-6">
          Cómo funciona
        </span>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
          Un proceso diseñado para{" "}
          <span className="text-primary">darte respuestas con sentido</span>
        </h2>
        <p className="mt-6 font-body text-xl text-muted-foreground leading-relaxed">
          No es solo preguntar y responder. Es un flujo que transforma tu contexto en orientación personalizada.
        </p>
      </motion.div>

      {/* Pipeline flow */}
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-0 items-stretch">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative flex flex-col"
            >
              {/* Connector arrow (between cards) */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-3 z-10 w-6 h-6 rounded-full bg-secondary/20 items-center justify-center -translate-y-1/2">
                  <ArrowRight className="text-secondary" size={14} />
                </div>
              )}

              <div
                className={`flex-1 mx-2 mb-4 md:mb-0 p-8 rounded-3xl text-center transition-all duration-300 ${
                  s.highlight
                    ? "bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-secondary/30 shadow-[var(--shadow-hover)]"
                    : "glass-card"
                }`}
              >
                <span className="inline-block bg-secondary text-secondary-foreground font-display text-sm font-bold px-4 py-1.5 rounded-full shadow-md mb-5">
                  {s.step}
                </span>
                <div className={`w-16 h-16 rounded-3xl ${s.highlight ? "bg-secondary/15" : "bg-gradient-to-br from-primary/15 to-secondary/15"} flex items-center justify-center mx-auto mb-5`}>
                  <s.icon className={s.highlight ? "text-secondary" : "text-primary"} size={30} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground leading-snug">{s.title}</h3>
                <p className="mt-3 font-body text-base text-muted-foreground leading-relaxed">{s.desc}</p>
                {s.highlight && (
                  <span className="inline-block mt-4 font-body text-xs font-bold text-secondary uppercase tracking-wider">
                    Aquí está la diferencia
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
