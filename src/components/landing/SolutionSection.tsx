import { motion } from "framer-motion";
import { CircleHelp, Compass, MessageCircle, Stethoscope } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ChatRole = "caregiver" | "calmy";

interface ChatMessage {
  role: ChatRole;
  text: string;
}

interface ChatExample {
  id: string;
  tabLabel: string;
  title: string;
  profile: string;
  messages: ChatMessage[];
  possibleContext: string;
  firstStep: string;
  whenToConsult: string;
}

const chatExamples: ChatExample[] = [
  {
    id: "rutinas",
    tabLabel: "Rutinas",
    title: "Un cambio sin anticipación",
    profile: "6 años · diagnóstico profesional de TEA",
    messages: [
      {
        role: "caregiver",
        text: "Si cambiamos el orden de la tarde, mi hijo se tapa los oídos y empieza a gritar. No sé si insistir para que se acostumbre.",
      },
      {
        role: "calmy",
        text: "Que una transición inesperada le cueste no significa que estés cediendo. ¿Qué cambia justo antes del desborde y cómo se lo anticipan?",
      },
      {
        role: "caregiver",
        text: "Suele pasar cuando salimos sin avisarle. Le explico el cambio cuando ya tenemos que irnos.",
      },
    ],
    possibleContext: "La poca anticipación puede aumentar la carga de una transición que ya exige reorganizar expectativas y estímulos.",
    firstStep: "Anticipa una sola salida con una señal visual breve y repite la misma frase antes del cambio.",
    whenToConsult: "Si las reacciones aumentan, aparecen en varios contextos o existe riesgo físico, coméntalo con su profesional.",
  },
  {
    id: "pantallas",
    tabLabel: "Pantallas",
    title: "Cerrar una actividad muy atractiva",
    profile: "8 años · diagnóstico profesional de TDAH",
    messages: [
      {
        role: "caregiver",
        text: "Cuando termina el tiempo de pantalla, mi hija llora y discute. Ya no sé si soy muy estricta o si debería darle más tiempo.",
      },
      {
        role: "calmy",
        text: "Que le cueste detener una actividad atractiva no significa que estés fallando. ¿Cómo le avisas que el tiempo está por terminar?",
      },
      {
        role: "caregiver",
        text: "Normalmente le aviso justo cuando debe apagarla y enseguida pasamos a cenar.",
      },
    ],
    possibleContext: "Detener una fuente de alta estimulación y pasar de inmediato a otra tarea puede volver más difícil la transición.",
    firstStep: "Acordar antes una señal visible de cierre y una actividad breve de transición entre la pantalla y la cena.",
    whenToConsult: "Si el conflicto altera de forma persistente el sueño, la alimentación o la convivencia, llévalo a la siguiente consulta.",
  },
  {
    id: "colegio",
    tabLabel: "Colegio",
    title: "Llegar a casa con la carga acumulada",
    profile: "9 años · diagnóstico profesional de TEA y TDAH",
    messages: [
      {
        role: "caregiver",
        text: "Al volver del colegio se irrita por cualquier cosa y no quiere hablar. Si le pregunto qué pasó, se enfada más.",
      },
      {
        role: "calmy",
        text: "Llegar a casa puede ser el momento en que aparece la carga acumulada. ¿Qué suele ocurrir durante los primeros minutos después de entrar?",
      },
      {
        role: "caregiver",
        text: "Le pido que se cambie, ordene la mochila y empiece las tareas antes de descansar.",
      },
    ],
    possibleContext: "Varias demandas seguidas pueden coincidir con cansancio, hambre o necesidad de bajar estímulos después de la jornada.",
    firstStep: "Prueba una llegada predecible con una sola indicación y un breve tiempo de transición antes de pedir otra tarea.",
    whenToConsult: "Consulta si aparecen cambios persistentes en asistencia, sueño, alimentación, aislamiento o conductas de riesgo.",
  },
];

const insightBlocks = [
  { key: "possibleContext", icon: CircleHelp, label: "Qué podría influir" },
  { key: "firstStep", icon: Compass, label: "Primer paso" },
  { key: "whenToConsult", icon: Stethoscope, label: "Cuándo consultar" },
] as const;

const SolutionSection = () => (
  <section id="ejemplos" className="border-b border-border/60 bg-[hsl(var(--surface-mint))] py-12 md:py-16">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-7 max-w-3xl"
      >
        <span className="section-badge">Así preguntará antes de orientar</span>
        <h2 className="section-title mt-4">Tres momentos. Tres conversaciones con contexto.</h2>
        <p className="mt-4 section-subtitle">
          Explora cómo una pregunta de seguimiento puede cambiar el siguiente paso. Los ejemplos son ilustrativos y no constituyen indicación terapéutica.
        </p>
      </motion.div>

      <Tabs defaultValue={chatExamples[0].id} className="w-full">
        <div className="-mx-5 overflow-x-auto px-5 pb-1 md:mx-0 md:px-0">
          <TabsList className="h-auto min-w-max justify-start gap-2 rounded-none bg-transparent p-0" aria-label="Ejemplos de conversaciones">
            {chatExamples.map((example) => (
              <TabsTrigger
                key={example.id}
                value={example.id}
                className="min-h-11 rounded-lg border border-border bg-card px-4 py-2.5 font-body text-sm font-semibold data-[state=active]:border-primary/30 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {example.tabLabel}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {chatExamples.map((example) => (
          <TabsContent key={example.id} value={example.id} className="mt-5">
            <div className="grid items-stretch gap-5 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-card)]">
                <div className="flex items-center gap-3 border-b border-border px-5 py-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-foreground">{example.title}</p>
                    <p className="font-body text-xs text-muted-foreground">{example.profile}</p>
                  </div>
                </div>

                <div className="min-h-[350px] space-y-4 bg-[#fbfcfd] p-5 md:p-6">
                  {example.messages.map((message, index) => (
                    <div key={`${example.id}-${index}`} className={message.role === "caregiver" ? "flex justify-end" : "flex items-start gap-2.5"}>
                      {message.role === "calmy" && (
                        <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-secondary font-display text-[11px] font-bold text-secondary-foreground">
                          C
                        </div>
                      )}
                      <div
                        className={message.role === "caregiver"
                          ? "max-w-[86%] rounded-lg bg-primary/10 px-4 py-3"
                          : "max-w-[88%] rounded-lg border border-border bg-card px-4 py-3"}
                      >
                        <p className="font-body text-sm leading-relaxed text-foreground">{message.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-3">
                {insightBlocks.map((block, index) => (
                  <motion.article
                    key={`${example.id}-${block.key}`}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start gap-4 rounded-lg border border-border bg-card p-5"
                  >
                    <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${index === 1 ? "bg-secondary/10 text-secondary" : index === 2 ? "bg-coral/10 text-coral" : "bg-primary/10 text-primary"}`}>
                      <block.icon size={19} />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-bold text-foreground">{block.label}</h3>
                      <p className="mt-1.5 font-body text-sm leading-relaxed text-muted-foreground">{example[block.key]}</p>
                    </div>
                  </motion.article>
                ))}
                <p className="border-l-2 border-primary px-4 py-2 font-body text-xs leading-relaxed text-muted-foreground">
                  La orientación real dependerá de lo que la familia decida compartir y de los límites de seguridad del piloto.
                </p>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  </section>
);

export default SolutionSection;
