import { motion } from "framer-motion";
import { Zap, BookOpen, UserCheck } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Orientación inmediata",
    desc: "Recibe apoyo cuando surge una duda o un momento difícil, sin esperar a la próxima cita.",
  },
  {
    icon: BookOpen,
    title: "Base psicológica sólida",
    desc: "Las respuestas se construyen sobre conocimiento psicológico estructurado para dar claridad y consistencia.",
  },
  {
    icon: UserCheck,
    title: "Personalización con contexto",
    desc: "Calmy considera el perfil del niño, antecedentes y preocupaciones frecuentes para orientar cada respuesta.",
  },
];

const chatMessages = [
  {
    type: "user" as const,
    text: "Mi hijo se frustra mucho cuando cambia la rutina. No sé cómo ayudarlo.",
  },
  {
    type: "bot" as const,
    text: "Es muy común que los cambios de rutina generen frustración en niños con su perfil. Te sugiero anticipar los cambios con apoyos visuales y validar su emoción antes de redirigir. ¿Quieres que profundicemos en estrategias específicas? 💚",
  },
];

const SolutionSection = () => (
  <section id="solucion" className="py-20 md:py-28 bg-card/50">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="section-badge mb-5 inline-block">La solución</span>
        <h2 className="section-title">
          Más que un chatbot:{" "}
          <span className="text-secondary">orientación con contexto y sustento psicológico</span>
        </h2>
        <p className="mt-5 section-subtitle">
          Calmy combina una base de conocimiento psicológica estructurada con información relevante sobre tu hijo y tu situación.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
        {/* Chat mockup */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card-elevated p-6 md:p-8 order-2 lg:order-1"
        >
          <div className="flex items-center gap-2 mb-5 pb-4 border-b border-border/40">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-primary-foreground text-xs font-bold font-display">C</span>
            </div>
            <span className="font-display text-sm font-bold text-foreground">Calmy</span>
            <span className="ml-auto w-2 h-2 rounded-full bg-secondary animate-pulse" />
          </div>

          <div className="space-y-4">
            {chatMessages.map((msg, i) =>
              msg.type === "user" ? (
                <div key={i} className="flex justify-end">
                  <div className="bg-primary/8 rounded-2xl rounded-tr-md px-4 py-3 max-w-[85%]">
                    <p className="font-body text-sm text-foreground leading-relaxed">{msg.text}</p>
                  </div>
                </div>
              ) : (
                <div key={i} className="flex gap-2.5 items-start">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-[10px] font-bold font-display">C</span>
                  </div>
                  <div className="bg-background rounded-2xl rounded-tl-md px-4 py-3 border border-border/40 max-w-[90%]">
                    <p className="font-body text-sm text-foreground leading-relaxed">{msg.text}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </motion.div>

        {/* Feature cards */}
        <div className="flex flex-col gap-4 order-1 lg:order-2">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="card-elevated-hover p-6 flex items-start gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <f.icon className="text-secondary" size={22} />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-foreground mb-1">{f.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SolutionSection;
