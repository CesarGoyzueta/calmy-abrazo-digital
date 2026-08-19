import { motion } from "framer-motion";
import { AlertTriangle, Check, LockKeyhole, ShieldCheck, X } from "lucide-react";

const isCalmy = [
  "Orientación para situaciones cotidianas de crianza",
  "Contexto basado en el perfil que la familia decide compartir",
  "Un siguiente paso y preguntas para preparar la consulta profesional",
  "Límites explícitos cuando falta información o aparece una señal de riesgo",
];

const isNotCalmy = [
  "No diagnostica ni confirma un diagnóstico previo",
  "No reemplaza terapia, evaluación ni intervención profesional",
  "No indica cambios de medicación o tratamiento",
  "No es un servicio de emergencia ni atiende crisis de riesgo",
];

const TrustSection = () => (
  <section id="confianza" className="border-b border-border/60 bg-[hsl(var(--surface-mint))] py-12 md:py-16">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 max-w-3xl"
      >
        <span className="section-badge">Alcance responsable</span>
        <h2 className="section-title mt-4">
          La confianza empieza por explicar qué hará Calmy y dónde se detendrá
        </h2>
        <p className="mt-4 section-subtitle">
          Calmy combinará contexto familiar, criterios psicológicos organizados y límites de seguridad. No presentará una orientación como evaluación clínica.
        </p>
      </motion.div>

      <div className="grid gap-5 lg:grid-cols-2">
        <motion.article
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="rounded-lg border border-secondary/30 bg-secondary/5 p-6"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/12 text-secondary">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">Para qué servirá Calmy</h3>
          </div>
          <ul className="mt-5 space-y-3">
            {isCalmy.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <Check size={12} />
                </div>
                <span className="font-body text-sm leading-relaxed text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.07 }}
          className="rounded-lg border border-border bg-background p-6"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/8 text-primary">
              <X size={20} />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">Para qué no es Calmy</h3>
          </div>
          <ul className="mt-5 space-y-3">
            {isNotCalmy.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/8 text-primary">
                  <X size={11} />
                </div>
                <span className="font-body text-sm leading-relaxed text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </motion.article>
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-2">
        <div className="flex items-start gap-3 rounded-lg border border-amber-200/70 bg-amber-50/70 px-5 py-4">
          <AlertTriangle className="mt-0.5 flex-shrink-0 text-amber-700" size={18} />
          <p className="font-body text-sm leading-relaxed text-amber-900">
            Ante riesgo físico, autolesión, agresión intensa o una emergencia, busca atención profesional o los servicios de emergencia de tu país.
          </p>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-primary/15 bg-primary/5 px-5 py-4">
          <LockKeyhole className="mt-0.5 flex-shrink-0 text-primary" size={18} />
          <p className="font-body text-sm leading-relaxed text-muted-foreground">
            Comparte solo lo necesario: evita nombres completos, centro escolar, direcciones o información que identifique al niño.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default TrustSection;
