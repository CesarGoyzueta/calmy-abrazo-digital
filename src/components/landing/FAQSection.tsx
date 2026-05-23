import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "¿Calmy reemplaza a un psicólogo o terapeuta?",
    a: "No. Calmy es un apoyo para el día a día, especialmente en los momentos entre sesiones con un profesional. No reemplaza la evaluación, el diagnóstico ni la intervención terapéutica. Si tu hijo ya trabaja con un especialista, Calmy puede ayudarte a llegar mejor preparado a esas citas.",
  },
  {
    q: "¿Calmy puede diagnosticar?",
    a: "No. Calmy no diagnostica ni evalúa clínicamente. Está diseñado para orientar, no para emitir juicios clínicos. Cualquier diagnóstico debe realizarlo un profesional de salud mental o un especialista en desarrollo infantil.",
  },
  {
    q: "¿Qué tipo de preguntas puedo hacer?",
    a: "Preguntas cotidianas de crianza: cómo manejar una crisis emocional, cómo preparar a tu hijo para un cambio, qué hacer cuando no acepta un límite, cómo anticipar una transición difícil, o cómo ordenar lo que quieres consultar con su terapeuta.",
  },
  {
    q: "¿Qué información sobre mi hijo debo compartir?",
    a: "Solo lo necesario para que Calmy entienda la situación: edad, contexto general y la situación que te preocupa. Evita compartir datos personales identificables como nombre completo, centro escolar o información médica detallada. Menos es más.",
  },
  {
    q: "¿Qué pasa si estoy en una situación urgente?",
    a: "Calmy no es un servicio de emergencia. Si tu hijo o tú están en una situación de riesgo, acude a un profesional de salud mental o a los servicios de emergencia de tu país. Calmy es un recurso para el día a día, no para crisis agudas.",
  },
  {
    q: "¿Cuándo estará disponible?",
    a: "Estamos en fase de desarrollo. Al unirte a la lista de espera recibirás acceso anticipado cuando abramos la primera versión, junto con precio especial de lanzamiento. Te avisamos por correo cuando esté listo.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="section-badge mb-4 inline-block">Preguntas frecuentes</span>
          <h2 className="section-title mt-2">
            Lo que más nos{" "}
            <span className="text-primary">suelen preguntar</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-card rounded-2xl border border-border/50 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display text-sm font-bold text-foreground leading-snug">
                  {faq.q}
                </span>
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/6 flex items-center justify-center">
                  {open === i ? (
                    <Minus className="text-primary" size={13} />
                  ) : (
                    <Plus className="text-primary" size={13} />
                  )}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="font-body text-sm text-muted-foreground leading-relaxed px-6 pb-5">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
