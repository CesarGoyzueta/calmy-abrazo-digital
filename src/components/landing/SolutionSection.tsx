import { motion } from "framer-motion";
import { CircleHelp, Compass, MessageCircle, Stethoscope } from "lucide-react";

const orientationBlocks = [
  {
    icon: CircleHelp,
    label: "Qué podría influir",
    text: "El cambio reciente de rutina puede estar aumentando la carga de anticipación y frustración.",
  },
  {
    icon: Compass,
    label: "Primer paso",
    text: "Anticipa una sola transición con una señal visual y mantén una frase breve y estable.",
  },
  {
    icon: Stethoscope,
    label: "Cuándo consultar",
    text: "Si el cambio es intenso, persistente o afecta sueño, alimentación o colegio, coméntalo con su profesional.",
  },
];

const SolutionSection = () => (
  <section id="solucion" className="border-b border-border/60 bg-[hsl(var(--surface-warm))] py-12 md:py-16">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 max-w-3xl"
      >
        <span className="section-badge">Una orientación de ejemplo</span>
        <h2 className="section-title mt-4">
          Primero comprende el momento. Después elige el siguiente paso.
        </h2>
        <p className="mt-4 section-subtitle">
          Así se verá una conversación del piloto: Calmy pedirá contexto antes de orientar y mostrará los límites de su respuesta.
        </p>
      </motion.div>

      <div className="grid items-stretch gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-card)]"
        >
          <div className="flex items-center gap-3 border-b border-border px-5 py-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <MessageCircle size={16} />
            </div>
            <div>
              <p className="font-display text-sm font-bold text-foreground">Conversación ilustrativa</p>
              <p className="font-body text-xs text-muted-foreground">Perfil: 7 años · diagnóstico profesional de TDAH</p>
            </div>
          </div>

          <div className="space-y-4 bg-[#fbfcfd] p-5 md:p-6">
            <div className="flex justify-end">
              <div className="max-w-[86%] rounded-lg bg-primary/10 px-4 py-3">
                <p className="font-body text-sm leading-relaxed text-foreground">
                  Mi hija llora cuando termina el tiempo de pantalla. Ya no sé si soy muy estricta o si debería darle más tiempo.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-secondary font-display text-[11px] font-bold text-secondary-foreground">C</div>
              <div className="max-w-[88%] rounded-lg border border-border bg-card px-4 py-3">
                <p className="font-body text-sm leading-relaxed text-foreground">
                  Que le cueste detener una actividad atractiva no significa que estés fallando. ¿Desde cuándo ocurre y cómo le avisas que el tiempo está por terminar?
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="max-w-[82%] rounded-lg bg-primary/10 px-4 py-3">
                <p className="font-body text-sm leading-relaxed text-foreground">
                  Empezó al cambiar el horario del colegio. Normalmente le aviso justo cuando debe apagarla.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-3">
          {orientationBlocks.map((block, index) => (
            <motion.article
              key={block.label}
              initial={{ opacity: 0, x: 14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="flex items-start gap-4 rounded-lg border border-border bg-card p-5"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                <block.icon size={19} />
              </div>
              <div>
                <h3 className="font-display text-sm font-bold text-foreground">{block.label}</h3>
                <p className="mt-1.5 font-body text-sm leading-relaxed text-muted-foreground">{block.text}</p>
              </div>
            </motion.article>
          ))}
          <p className="border-l-2 border-primary px-4 py-2 font-body text-xs leading-relaxed text-muted-foreground">
            El ejemplo es informativo. Una orientación real dependerá del perfil y de la conversación; no constituye diagnóstico ni indicación terapéutica.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default SolutionSection;
