import { motion } from "framer-motion";
import { UserPlus, MessageSquare, Lightbulb } from "lucide-react";

const steps = [
  { icon: UserPlus, step: "01", title: "Crea el perfil de tu hijo", desc: "Comparte información básica para que Calmy pueda entender mejor tu situación y adaptarse a tus necesidades." },
  { icon: MessageSquare, step: "02", title: "Realiza una consulta", desc: "Escribe lo que te preocupa o lo que necesitas. Sin filtros, sin juicio. Calmy te escucha." },
  { icon: Lightbulb, step: "03", title: "Recibe orientación clara", desc: "Calmy te brinda herramientas prácticas y orientación basada en evidencia psicológica, a tu ritmo." },
];

const HowItWorksSection = () => (
  <section id="como-funciona" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span className="inline-block font-body text-sm font-semibold uppercase tracking-widest text-secondary bg-secondary/10 px-5 py-2 rounded-full mb-6">Cómo funciona</span>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
          Tres pasos para <span className="text-primary">empezar</span>
        </h2>
        <p className="mt-6 font-body text-xl text-muted-foreground leading-relaxed">
          Simple, humano y sin complicaciones. Así de fácil es comenzar.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: [0.33, 1, 0.68, 1] }}
            className="glass-card p-8 text-center relative"
          >
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/40 to-secondary/40" />
            )}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-block bg-secondary text-secondary-foreground font-display text-sm font-bold px-4 py-1.5 rounded-full shadow-md">{s.step}</span>
            </div>
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center mx-auto mb-5 mt-4">
              <s.icon className="text-primary" size={30} />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground">{s.title}</h3>
            <p className="mt-3 font-body text-base text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
