import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    q: "¿Cómo se construirán las respuestas de Calmy?",
    a: "Calmy parte del contexto que la familia decide compartir (edad, diagnóstico profesional, necesidades y estrategias ya intentadas) y lo organiza junto con criterios psicológicos definidos por el equipo. El enfoque psicológico y los criterios de orientación los define y revisa Erika Rubio, psicóloga responsable del enfoque de Calmy. Cuando falta información o aparece una señal de riesgo, Calmy lo indica y remite al profesional en lugar de completar el vacío.",
  },
  {
    q: "¿Necesito un diagnóstico profesional para usar Calmy?",
    a: "Sí. La primera versión de Calmy estará dirigida a madres, padres y cuidadores de niños con diagnóstico de TEA o TDAH emitido por un psicólogo o especialista calificado. Calmy no confirma diagnósticos. Si todavía están en proceso de evaluación, lo adecuado es continuar con un profesional.",
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
    a: "Calmy no es un servicio de emergencia. Ante riesgo físico, autolesión, agresión intensa o una emergencia, busca ayuda de inmediato. En Perú puedes llamar a la Línea 113, opción 5, orientación en salud mental del MINSA, gratuita las 24 horas. Si existe riesgo para la vida, llama al 106 (SAMU) o acude a la emergencia más cercana.",
  },
  {
    q: "¿Qué ocurrirá al unirme al grupo de WhatsApp?",
    a: "Calmy está en una fase inicial de cocreación. Entrarás en el grupo fundador para conocer avances, conversar con el equipo y compartir feedback de forma voluntaria. No es un espacio de atención clínica ni individual. Según la configuración de WhatsApp, tu nombre, foto de perfil o número podrían ser visibles para otros integrantes. Puedes leer sin participar y salir cuando quieras.",
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
            const buttonId = `faq-button-${index}`;
            const isOpen = open === index;

            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="overflow-hidden rounded-lg border border-border/70 bg-card shadow-[var(--shadow-soft)]"
              >
                <button
                  type="button"
                  id={buttonId}
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-4 rounded-lg px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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
                      aria-labelledby={buttonId}
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
