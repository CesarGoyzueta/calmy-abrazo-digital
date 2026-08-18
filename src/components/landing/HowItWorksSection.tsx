import { motion } from "framer-motion";
import { ClipboardCheck, MessagesSquare, Route, UserRound } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Partimos de un diagnóstico profesional",
    desc: "El padre indica si el diagnóstico de TEA o TDAH fue emitido por un psicólogo o especialista calificado.",
  },
  {
    icon: UserRound,
    step: "02",
    title: "Construimos un perfil inicial",
    desc: "Añade voluntariamente edad, necesidades, contexto y estrategias que ya intentaron.",
  },
  {
    icon: MessagesSquare,
    step: "03",
    title: "Conversas sobre una situación real",
    desc: "Calmy utilizará ese perfil y lo que se hable para comprender mejor cada momento.",
  },
  {
    icon: Route,
    step: "04",
    title: "Recibes orientación contextual",
    desc: "Obtienes un siguiente paso y una señal clara de cuándo corresponde consultar al profesional.",
  },
];

const HowItWorksSection = () => (
  <section id="como-funciona" className="border-b border-border/60 bg-card py-12 md:py-16">
    <div className="section-container">
      <div className="grid items-start gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-badge">Cómo funcionará</span>
          <h2 className="section-title mt-4">
            Personalización con contexto, no con suposiciones
          </h2>
          <p className="mt-4 section-subtitle">
            El diagnóstico lo realiza un profesional. Calmy no lo confirma ni lo interpreta de forma clínica: lo usa, junto con el contexto familiar, para orientar la conversación.
          </p>
          <div className="mt-6 border-l-2 border-secondary bg-secondary/5 px-4 py-3">
            <p className="font-body text-sm font-semibold text-foreground">¿Aún no cuentan con diagnóstico?</p>
            <p className="mt-1 font-body text-sm leading-relaxed text-muted-foreground">
              Lo adecuado es iniciar una evaluación con un psicólogo o especialista en desarrollo infantil antes de usar Calmy como apoyo contextual.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2">
          {steps.map((step, index) => (
            <motion.article
              key={step.step}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="rounded-lg border border-border/70 bg-card p-5 shadow-[var(--shadow-soft)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/8 text-primary">
                  <step.icon size={19} />
                </div>
                <span className="font-display text-sm font-bold text-primary">{step.step}</span>
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
