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
    desc: "Las respuestas se construyen sobre conocimiento psicológico estructurado para dar mayor claridad y consistencia.",
  },
  {
    icon: UserCheck,
    title: "Personalización con contexto",
    desc: "Calmy considera el perfil del niño, antecedentes relevantes y preocupaciones frecuentes para orientar mejor cada respuesta.",
  },
];

const SolutionSection = () => (
  <section id="solucion" className="py-24 md:py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span className="inline-block font-body text-sm font-semibold uppercase tracking-widest text-secondary bg-secondary/10 px-5 py-2 rounded-full mb-6">
          La solución
        </span>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
          Más que un chatbot:{" "}
          <span className="text-secondary">orientación con contexto y sustento psicológico</span>
        </h2>
        <p className="mt-6 font-body text-xl text-muted-foreground leading-relaxed">
          Calmy combina una base de conocimiento psicológica estructurada con información relevante sobre tu hijo y tu situación, para ofrecer respuestas más claras, útiles y personalizadas.
        </p>
      </motion.div>

      {/* Chat preview */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto glass-card p-8 mb-16"
      >
        <div className="space-y-4">
          {/* User message */}
          <div className="flex justify-end">
            <div className="bg-primary/10 rounded-2xl rounded-tr-md p-4 max-w-sm">
              <p className="font-body text-sm text-foreground leading-relaxed">
                Mi hijo se frustra mucho cuando cambia la rutina. No sé cómo ayudarlo.
              </p>
            </div>
          </div>
          {/* Calmy response */}
          <div className="flex gap-3 items-start">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
              <span className="text-primary-foreground text-sm font-bold font-display">C</span>
            </div>
            <div className="bg-card rounded-2xl rounded-tl-md p-4 shadow-[var(--shadow-soft)] max-w-md border border-border/30">
              <p className="font-body text-sm text-foreground leading-relaxed">
                Es muy común que los cambios de rutina generen frustración en niños con su perfil. Te sugiero anticipar los cambios con apoyos visuales y validar su emoción antes de redirigir. ¿Te gustaría que profundicemos en estrategias específicas? 💚
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Feature cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="glass-card-hover p-8 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center mx-auto mb-5">
              <f.icon className="text-secondary" size={28} />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground">{f.title}</h3>
            <p className="font-body text-base text-muted-foreground mt-3 leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
