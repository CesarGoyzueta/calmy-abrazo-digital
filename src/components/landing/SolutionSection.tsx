import { motion } from "framer-motion";
import { Zap, BookOpen, UserCheck, Sparkles } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Saber qué hacer primero",
    desc: "Cuando surge una duda o un momento difícil, Calmy te da un primer paso concreto para actuar con más calma, sin esperar a la próxima cita.",
    accent: false,
  },
  {
    icon: BookOpen,
    title: "Respuestas con sustento real",
    desc: "Cada orientación está construida sobre conocimiento psicológico estructurado. No respuestas genéricas: información que puedes aplicar hoy.",
    accent: true,
  },
  {
    icon: UserCheck,
    title: "Adaptado a tu situación",
    desc: "Calmy considera la edad, el perfil y las situaciones frecuentes de tu hijo para que la orientación tenga sentido en tu contexto real.",
    accent: false,
  },
];

const chatMessages = [
  { type: "user" as const, text: "Mi hija llora cada vez que le digo que no, aunque sea algo pequeño. Ya no sé si soy muy estricta o muy permisiva." },
  { type: "bot" as const, text: "Esa reacción intensa ante los límites es muy frecuente a esta edad y no significa que estés fallando. Lo que describes parece más una dificultad para tolerar la frustración que un problema de disciplina. ¿Cuántos años tiene y cómo sueles manejar esos momentos? 💚" },
];

const SolutionSection = () => (
  <section id="solucion" className="section-warm py-16 md:py-20">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-10"
      >
        <span className="section-badge mb-4 inline-block">La solución</span>
        <h2 className="section-title mt-2">
          Primeros pasos claros cuando la crianza{" "}
          <span className="text-secondary">se vuelve difícil</span>
        </h2>
        <p className="mt-4 section-subtitle max-w-2xl mx-auto">
          Comparte tu duda, cuéntale sobre tu hijo y Calmy te devuelve orientación breve y accionable para ese momento. También puedes usarla para llegar mejor preparado a una sesión con un profesional.
        </p>
        <p className="mt-3 font-body text-xs font-medium text-secondary/80 tracking-wide uppercase">
          ✦ Diseñado con enfoque en evidencia psicológica aplicada al día a día
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6 items-stretch max-w-5xl mx-auto">
        {/* Chat mockup */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card-elevated p-5 md:p-6 order-2 lg:order-1"
        >
          <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-border/40">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-sm">
              <Sparkles className="text-primary-foreground" size={13} />
            </div>
            <div>
              <span className="font-display text-sm font-bold text-foreground">Calmy</span>
              <p className="font-body text-[10px] text-muted-foreground">Ejemplo de conversación</p>
            </div>
            <span className="ml-auto w-2 h-2 rounded-full bg-secondary animate-pulse" />
          </div>

          <div className="space-y-4">
            {chatMessages.map((msg, i) =>
              msg.type === "user" ? (
                <div key={i} className="flex justify-end">
                  <div className="bg-primary/8 rounded-2xl rounded-tr-md px-4 py-3 max-w-[85%]">
                    <p className="font-body text-[13px] text-foreground leading-relaxed">{msg.text}</p>
                  </div>
                </div>
              ) : (
                <div key={i} className="flex gap-2.5 items-start">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-[10px] font-bold font-display">C</span>
                  </div>
                  <div className="bg-background rounded-2xl rounded-tl-md px-4 py-3 border border-border/40 max-w-[90%]">
                    <p className="font-body text-[13px] text-foreground leading-relaxed">{msg.text}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </motion.div>

        {/* Feature cards */}
        <div className="flex flex-col gap-3 order-1 lg:order-2">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className={`card-elevated-hover p-5 flex items-start gap-3.5 ${
                f.accent ? "border-secondary/25 ring-1 ring-secondary/10 bg-gradient-to-br from-card to-[#fbf8f1]" : ""
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                f.accent ? "bg-secondary/12" : "bg-secondary/8"
              }`}>
                <f.icon className="text-secondary" size={20} />
              </div>
              <div>
                <h3 className="font-display text-sm font-bold text-foreground mb-1">{f.title}</h3>
                <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                {f.accent && (
                  <span className="inline-block mt-2 font-body text-[10px] font-bold text-secondary uppercase tracking-wider">
                    ✦ Diferencial clave
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SolutionSection;
