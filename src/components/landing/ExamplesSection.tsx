import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, HelpCircle, Lightbulb, ArrowRight } from "lucide-react";

const examples = [
  {
    question: "Mi hijo de 5 años llora cada mañana antes de ir al colegio. Ya no sé si insistir o dejarlo en casa.",
    whatMightBeHappening: "Puede haber ansiedad de separación, dificultad con la rutina o algo específico en el entorno escolar que le genera rechazo.",
    firstStep: "Explorar qué cambió recientemente y validar su emoción antes de insistir.",
    response: "Antes de asumir que es capricho, intenta entender qué parte le genera rechazo. Puedes decirle: \"Veo que ir al colegio se está sintiendo difícil. ¿Qué es lo que menos te gusta?\" Luego observa si hay patrones: días, momentos o personas específicas.",
  },
  {
    question: "Mi hija llora cada vez que le digo que no, aunque sea algo pequeño. No sé si soy muy estricta o muy permisiva.",
    whatMightBeHappening: "A esta edad es frecuente una baja tolerancia a la frustración. No necesariamente refleja un problema de disciplina, sino una habilidad que todavía se está desarrollando.",
    firstStep: "Nombrar su emoción antes de redirigir: primero valida, luego pones el límite.",
    response: "Esa reacción intensa ante los límites es muy frecuente y no significa que estés fallando. Antes de cambiar tu respuesta, prueba validar lo que siente: \"Entiendo que te da rabia cuando digo que no. Es normal sentirse así.\" Después mantén el límite con calma.",
  },
  {
    question: "¿Cómo puedo preparar a mi hijo para algo nuevo sin que lo pase tan mal?",
    whatMightBeHappening: "La incertidumbre ante lo desconocido genera ansiedad anticipatoria en muchos niños, especialmente aquellos con más sensibilidad a los cambios.",
    firstStep: "Anticipar con información concreta antes del evento, no justo antes.",
    response: "Anticipar es una de las herramientas más efectivas. Puedes usar fotos del lugar, contarle qué va a pasar en orden, o ensayarlo juntos con juego. Cuanto más concreto, mejor. La incertidumbre es lo que más les pesa, no el evento en sí.",
  },
  {
    question: "Siento que estoy agotada y que no lo estoy haciendo bien. ¿Es normal?",
    whatMightBeHappening: "El agotamiento es una señal de que estás dando mucho sin recibir suficiente apoyo. No indica que seas mala madre o padre.",
    firstStep: "Reconocer que necesitas apoyo es el primer paso, no un signo de debilidad.",
    response: "Sentirte agotada no significa que lo estés haciendo mal. Muchas veces indica lo contrario: estás invirtiendo mucho. Identificar una sola cosa pequeña que puedas aliviar esta semana, o pedir ayuda en algo concreto, puede marcar una diferencia real.",
  },
];

const INTERVAL = 7000;

const ExamplesSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % examples.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const ex = examples[current];

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
            Mira el tipo de orientación{" "}
            <span className="text-secondary">que recibirías</span>
          </h2>
          <p className="mt-6 section-subtitle max-w-xl mx-auto">
            Situaciones cotidianas convertidas en primeros pasos concretos.
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
              className="card-elevated overflow-hidden"
            >
              {/* Pregunta del padre/madre */}
              <div className="p-6 md:p-7 border-b border-border/40">
                <div className="flex justify-end">
                  <div className="bg-primary/8 rounded-2xl rounded-tr-md px-4 py-3 max-w-[90%]">
                    <p className="font-body text-sm text-foreground leading-relaxed">
                      {ex.question}
                    </p>
                  </div>
                </div>
              </div>

              {/* Análisis estructurado */}
              <div className="p-6 md:p-7 space-y-4">
                {/* Qué puede estar pasando */}
                <div className="flex gap-3 items-start">
                  <div className="w-7 h-7 rounded-lg bg-primary/6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HelpCircle className="text-primary" size={13} />
                  </div>
                  <div>
                    <p className="font-body text-[10px] font-bold text-primary uppercase tracking-wider mb-1">
                      Qué puede estar pasando
                    </p>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {ex.whatMightBeHappening}
                    </p>
                  </div>
                </div>

                {/* Primer paso */}
                <div className="flex gap-3 items-start">
                  <div className="w-7 h-7 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Lightbulb className="text-secondary" size={13} />
                  </div>
                  <div>
                    <p className="font-body text-[10px] font-bold text-secondary uppercase tracking-wider mb-1">
                      Primer paso
                    </p>
                    <p className="font-body text-sm text-foreground font-medium leading-relaxed">
                      {ex.firstStep}
                    </p>
                  </div>
                </div>

                {/* Respuesta de Calmy */}
                <div className="flex gap-3 items-start pt-1">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Sparkles className="text-primary-foreground" size={11} />
                  </div>
                  <div>
                    <p className="font-body text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1.5">
                      Orientación de Calmy
                    </p>
                    <div className="bg-background rounded-2xl rounded-tl-md px-4 py-3 border border-border/40">
                      <p className="font-body text-sm text-foreground leading-relaxed">
                        {ex.response}
                      </p>
                    </div>
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

          <p className="text-center mt-5 font-body text-xs text-muted-foreground">
            Estas son orientaciones de ejemplo. Calmy adapta cada respuesta al contexto real de tu hijo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
