import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

const examples = [
  {
    question: "Mi hijo se frustra mucho cuando cambia la rutina, ¿cómo puedo ayudarlo?",
    answer: "Los cambios de rutina pueden ser especialmente desafiantes. Te sugiero anticipar las transiciones con apoyos visuales y darle un espacio seguro para expresar lo que siente antes de redirigir su atención.",
  },
  {
    question: "No sé si insistir o darle espacio cuando no quiere hablar.",
    answer: "Respetar su tiempo es clave. Puedes hacerle saber que estás ahí sin presionar: 'Cuando quieras hablar, aquí estoy'. Esto le da control y reduce la ansiedad de sentirse forzado.",
  },
  {
    question: "Siento que estoy agotada y no sé si lo estoy haciendo bien.",
    answer: "Sentir agotamiento no significa que lo estés haciendo mal. Es una señal de que necesitas apoyo. Cuidarte a ti misma es parte de cuidar bien a tu hijo. ¿Quieres que veamos juntas algunas estrategias de autocuidado?",
  },
  {
    question: "¿Cómo puedo prepararlo mejor para una situación nueva?",
    answer: "Anticipar es una de las mejores herramientas. Puedes usar historias sociales, fotos del lugar o ensayar lo que va a pasar. Esto reduce la incertidumbre y le da más seguridad para enfrentar lo nuevo.",
  },
];

const INTERVAL = 6000;

const ExamplesSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % examples.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block font-body text-sm font-semibold uppercase tracking-widest text-secondary bg-secondary/10 px-5 py-2 rounded-full mb-6">
            Ejemplos reales
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Preguntas reales que podrías{" "}
            <span className="text-secondary">hacerle a Calmy</span>
          </h2>
          <p className="mt-6 font-body text-xl text-muted-foreground leading-relaxed">
            Así se siente recibir orientación con contexto, empatía y claridad.
          </p>
        </motion.div>

        {/* Rotating example */}
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }}
              className="glass-card p-8 md:p-10"
            >
              {/* User question */}
              <div className="flex justify-end mb-5">
                <div className="bg-primary/10 rounded-2xl rounded-tr-md px-5 py-4 max-w-sm">
                  <p className="font-body text-base text-foreground leading-relaxed">
                    {examples[current].question}
                  </p>
                </div>
              </div>

              {/* Calmy response */}
              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground text-sm font-bold font-display">C</span>
                </div>
                <div className="bg-card rounded-2xl rounded-tl-md p-5 shadow-[var(--shadow-soft)] border border-border/30 flex-1">
                  <p className="font-body text-base text-foreground leading-relaxed">
                    {examples[current].answer}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2.5 mt-8">
            {examples.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-secondary w-8"
                    : "bg-muted-foreground/25 w-2.5 hover:bg-muted-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
