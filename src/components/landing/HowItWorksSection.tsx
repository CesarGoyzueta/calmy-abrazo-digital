import { motion } from "framer-motion";
import { UserPlus, MessageSquare, Lightbulb } from "lucide-react";

const steps = [
  { icon: UserPlus, step: "01", title: "Crea el perfil de tu hijo", desc: "Comparte información básica para que Calmy pueda entender mejor tu situación." },
  { icon: MessageSquare, step: "02", title: "Realiza una consulta", desc: "Escribe lo que te preocupa o lo que necesitas. Sin filtros, sin juicio." },
  { icon: Lightbulb, step: "03", title: "Recibe orientación clara", desc: "Calmy te brinda herramientas prácticas basadas en evidencia psicológica." },
];

const HowItWorksSection = () => (
  <section className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="font-body text-xs font-semibold uppercase tracking-widest text-secondary">Cómo funciona</span>
        <h2 className="mt-4 font-display text-3xl md:text-4xl font-medium text-foreground">
          Tres pasos para empezar
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: [0.33, 1, 0.68, 1] }}
            className="relative text-center"
          >
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-6">
              <s.icon className="text-primary" size={28} />
            </div>
            <span className="font-display text-xs font-semibold text-secondary tracking-widest">{s.step}</span>
            <h3 className="mt-2 font-display text-xl font-medium text-foreground">{s.title}</h3>
            <p className="mt-3 font-body text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
