import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

const examples = [
  {
    question: "Mi hijo se frustra mucho cuando cambia la rutina, ¿cómo puedo ayudarlo?",
    answer: "Los cambios de rutina pueden ser especialmente desafiantes. Te sugiero anticipar las transiciones con apoyos visuales y darle un espacio seguro para expresar lo que siente antes de redirigir.",
  },
  {
    question: "No sé si insistir o darle espacio cuando no quiere hablar.",
    answer: "Respetar su tiempo es clave. Puedes hacerle saber que estás ahí sin presionar: 'Cuando quieras hablar, aquí estoy'. Esto le da control y reduce la ansiedad.",
  },
  {
    question: "Siento que estoy agotada y no sé si lo estoy haciendo bien.",
    answer: "Sentir agotamiento no significa que lo estés haciendo mal. Es una señal de que necesitas apoyo. Cuidarte a ti misma es parte de cuidar bien a tu hijo.",
  },
  {
    question: "¿Cómo puedo prepararlo mejor para una situación nueva?",
    answer: "Anticipar es una de las mejores herramientas. Puedes usar historias sociales, fotos del lugar o ensayar lo que va a pasar. Esto reduce la incertidumbre.",
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
    <section className="py-20 md:py-28 bg-card/40">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="section-badge mb-4 inline-block">Ejemplos reales</span>
          <h2 className="section-title mt-2">
            Preguntas reales que podrías{" "}
            <span className="text-secondary">hacerle a Calmy</span>
          </h2>
          <p className="mt-6 section-subtitle max-w-xl mx-auto">
            Así se siente recibir orientación con contexto, empatía y claridad.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.4 }}
              className="card-elevated p-7 md:p-9"
            >
              {/* User */}
              <div className="flex justify-end mb-6">
                <div className="bg-primary/8 rounded-2xl rounded-tr-md px-4 py-3 max-w-[85%]">
                  <p className="font-body text-sm text-foreground leading-relaxed">
                    {examples[current].question}
                  </p>
                </div>
              </div>

              {/* Calmy */}
              <div className="flex gap-2.5 items-start">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <Sparkles className="text-primary-foreground" size={13} />
                </div>
                <div>
                  <p className="font-body text-[10px] font-semibold text-secondary uppercase tracking-wider mb-1.5">
                    Ejemplo de respuesta
                  </p>
                  <div className="bg-background rounded-2xl rounded-tl-md px-4 py-3 border border-border/40">
                    <p className="font-body text-sm text-foreground leading-relaxed">
                      {examples[current].answer}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots + indicator */}
          <div className="flex items-center justify-center gap-2 mt-7">
            <span className="font-body text-[10px] text-muted-foreground mr-2">
              {current + 1} / {examples.length}
            </span>
            {examples.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-secondary w-7" : "bg-muted-foreground/20 w-2 hover:bg-muted-foreground/35"
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
