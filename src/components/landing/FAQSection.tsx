import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    q: "¿Necesito un diagnóstico profesional para usar Calmy?",
    a: "Sí. El piloto estará dirigido a madres, padres y cuidadores de niños con diagnóstico de TEA o TDAH emitido por un psicólogo o especialista calificado. Calmy no confirma diagnósticos. Si todavía están en proceso de evaluación, lo adecuado es continuar con un profesional.",
  },
  {
    q: "¿Calmy reemplaza a un psicólogo o terapeuta?",
    a: "No. Calmy será un apoyo para situaciones cotidianas y para ordenar dudas entre sesiones. No reemplaza la evaluación, el diagnóstico ni la intervención terapéutica.",
  },
  {
    q: "¿Cómo se personalizará la conversación?",
    a: "La familia podrá compartir edad, diagnóstico profesional, necesidades, contexto general y estrategias ya intentadas. Calmy utilizará ese perfil y la conversación para orientar cada respuesta sin pedir datos que identifiquen al niño.",
  },
  {
    q: "¿Qué información sobre mi hijo debo evitar?",
    a: "No compartas nombre completo, dirección, centro escolar, documentos, fotografías ni otros datos identificables. Describe solo la situación y el contexto necesario para comprenderla.",
  },
  {
    q: "¿Qué pasa si estoy en una situación urgente?",
    a: "Calmy no es un servicio de emergencia. Ante riesgo físico, autolesión, agresión intensa o una emergencia, acude a un profesional o a los servicios de emergencia de tu país.",
  },
  {
    q: "¿Qué ocurrirá al unirme al grupo de WhatsApp?",
    a: "Entrarás en un grupo conversacional del piloto para conocer avances y compartir feedback de forma voluntaria. Según la configuración de WhatsApp, tu nombre, foto de perfil o número podrían ser visibles para otros integrantes. Puedes salir cuando quieras.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-b border-border/60 bg-card py-12 md:py-16">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 max-w-3xl"
        >
          <span className="section-badge">Preguntas frecuentes</span>
          <h2 className="section-title mt-4">Lo importante antes de participar</h2>
        </motion.div>

        <div className="grid max-w-5xl items-start gap-3 md:grid-cols-2">
          {faqs.map((faq, index) => {
            const panelId = `faq-panel-${index}`;
            const isOpen = open === index;

            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="overflow-hidden rounded-lg border border-border bg-background"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-display text-sm font-bold leading-snug text-foreground">{faq.q}</span>
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary/8 text-primary">
                    {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 font-body text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
