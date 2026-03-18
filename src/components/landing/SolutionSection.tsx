import { motion } from "framer-motion";
import { Zap, BookOpen, UserCheck, MessageCircle } from "lucide-react";

const features = [
  { icon: Zap, title: "Tiempo real", desc: "Calmy responde cuando más lo necesitas, sin esperas." },
  { icon: BookOpen, title: "Basado en evidencia", desc: "Orientación fundamentada en psicología actual." },
  { icon: UserCheck, title: "Adaptado al contexto", desc: "Calmy se ajusta al perfil y necesidades de tu hijo." },
  { icon: MessageCircle, title: "Lenguaje claro y humano", desc: "Sin tecnicismos. Comunicación empática y práctica." },
];

const SolutionSection = () => (
  <section id="solucion" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="font-body text-xs font-semibold uppercase tracking-widest text-secondary">La solución</span>
        <h2 className="mt-4 font-display text-3xl md:text-4xl font-medium text-foreground">
          Un apoyo constante, cuando lo necesitas
        </h2>
        <p className="mt-4 font-body text-lg text-muted-foreground leading-relaxed">
          Calmy te acompaña en el día a día con orientación basada en evidencia, adaptada a tu situación.
        </p>
      </motion.div>

      {/* Chat-like visual */}
      <div className="max-w-2xl mx-auto glass-card p-8 space-y-6">
        {/* Calmy message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
          className="flex gap-3 items-start"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
            <span className="text-primary-foreground text-xs font-bold font-display">C</span>
          </div>
          <div className="bg-card rounded-2xl rounded-tl-md p-4 shadow-[var(--shadow-soft)] max-w-md">
            <p className="font-body text-sm text-foreground leading-relaxed">
              ¡Hola! Soy Calmy 🌿 Tu compañera de bienestar emocional. Estoy aquí para acompañarte y escucharte con toda la calma del mundo. Cuéntame, ¿cómo te sientes hoy? 💚
            </p>
          </div>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-2 gap-4 pt-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1, ease: [0.33, 1, 0.68, 1] }}
              className="flex gap-3 items-start"
            >
              <div className="w-8 h-8 rounded-xl bg-accent/30 flex items-center justify-center flex-shrink-0">
                <f.icon className="text-secondary" size={16} />
              </div>
              <div>
                <p className="font-display text-sm font-medium text-foreground">{f.title}</p>
                <p className="font-body text-xs text-muted-foreground mt-0.5">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SolutionSection;
