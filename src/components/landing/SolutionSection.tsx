import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, BookOpen, UserCheck, MessageCircle, Shield, Clock } from "lucide-react";

const features = [
  { icon: Zap, title: "Respuestas en tiempo real", desc: "Calmy responde cuando más lo necesitas, sin esperas ni turnos. Siempre disponible." },
  { icon: BookOpen, title: "Basado en evidencia", desc: "Orientación fundamentada en psicología actual y revisada por profesionales." },
  { icon: UserCheck, title: "Adaptado a tu hijo", desc: "Calmy se ajusta al perfil, edad y necesidades específicas de tu hijo." },
  { icon: MessageCircle, title: "Lenguaje claro y humano", desc: "Sin tecnicismos. Comunicación empática, cálida y práctica para tu día a día." },
  { icon: Shield, title: "Responsable y ético", desc: "No diagnostica ni reemplaza profesionales. Acompaña con responsabilidad." },
  { icon: Clock, title: "Disponible 24/7", desc: "A cualquier hora del día o la noche, cuando la preocupación no puede esperar." },
];

const CARDS_PER_VIEW = 3;
const INTERVAL = 4000;

const SolutionSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(features.length / CARDS_PER_VIEW);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const visibleFeatures = features.slice(
    currentIndex * CARDS_PER_VIEW,
    currentIndex * CARDS_PER_VIEW + CARDS_PER_VIEW
  );

  return (
    <section id="solucion" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block font-body text-sm font-semibold uppercase tracking-widest text-secondary bg-secondary/10 px-5 py-2 rounded-full mb-6">La solución</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Un apoyo <span className="text-secondary">constante</span>, cuando lo necesitas
          </h2>
          <p className="mt-6 font-body text-xl text-muted-foreground leading-relaxed">
            Calmy te acompaña en el día a día con orientación basada en evidencia, adaptada a tu situación.
          </p>
        </motion.div>

        {/* Chat preview */}
        <div className="max-w-2xl mx-auto glass-card p-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex gap-3 items-start"
          >
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
              <span className="text-primary-foreground text-sm font-bold font-display">C</span>
            </div>
            <div className="bg-card rounded-2xl rounded-tl-md p-5 shadow-[var(--shadow-soft)] max-w-md border border-border/30">
              <p className="font-body text-base text-foreground leading-relaxed">
                ¡Hola! Soy Calmy 🌿 Tu compañera de bienestar emocional. Estoy aquí para acompañarte y escucharte con toda la calma del mundo. Cuéntame, ¿cómo te sientes hoy? 💚
              </p>
            </div>
          </motion.div>
        </div>

        {/* Auto-rotating feature carousel */}
        <div className="relative min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
              className="grid md:grid-cols-3 gap-6"
            >
              {visibleFeatures.map((f) => (
                <div key={f.title} className="glass-card-hover p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center mx-auto mb-5">
                    <f.icon className="text-secondary" size={28} />
                  </div>
                  <p className="font-display text-xl font-semibold text-foreground">{f.title}</p>
                  <p className="font-body text-base text-muted-foreground mt-3 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2.5 mt-10">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "bg-secondary w-10"
                    : "bg-muted-foreground/25 w-3 hover:bg-muted-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
