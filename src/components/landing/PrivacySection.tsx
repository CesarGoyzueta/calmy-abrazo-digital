import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Eraser, EyeOff, ListChecks, ShieldCheck } from "lucide-react";

const commitments = [
  {
    icon: ListChecks,
    title: "Tú decides qué compartir",
    text: "No pedimos nombre completo, fotografías, centro escolar, dirección ni documentos del niño. Solo el contexto necesario para comprender la situación.",
  },
  {
    icon: EyeOff,
    title: "Sabes dónde ocurre la conversación",
    text: "En esta fase el grupo funciona en WhatsApp. Tu nombre, foto o número podrían ser visibles para otros integrantes según la configuración de esa plataforma.",
  },
  {
    icon: Eraser,
    title: "Puedes pedir que se elimine",
    text: "Puedes salir del grupo cuando quieras y solicitar la eliminación de la información que NeuroCalm mantenga bajo su control.",
  },
  {
    icon: ShieldCheck,
    title: "Sin formularios ni datos comerciales",
    text: "Esta web no solicita tu correo, no incluye formulario comercial y no realiza seguimiento publicitario.",
  },
];

const PrivacySection = () => (
  <section id="privacidad-resumen" className="border-b border-border/60 bg-background py-12 md:py-16">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 max-w-3xl"
      >
        <span className="section-badge">Privacidad</span>
        <h2 className="section-title mt-4">Tu información merece cuidado</h2>
        <p className="section-subtitle mt-3">
          Qué se comparte, dónde queda y cómo pedir que se elimine, explicado antes de que decidas participar.
        </p>
      </motion.div>

      <div className="grid gap-3 sm:grid-cols-2">
        {commitments.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="card-elevated flex items-start gap-3 px-5 py-4"
          >
            <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <item.icon size={17} />
            </span>
            <div>
              <h3 className="font-display text-sm font-bold text-foreground">{item.title}</h3>
              <p className="mt-1.5 font-body text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          </motion.article>
        ))}
      </div>

      <Link
        to="/privacidad"
        className="mt-5 inline-flex min-h-11 items-center gap-1.5 rounded-sm font-body text-sm font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Leer la política de privacidad completa
        <ArrowRight size={15} />
      </Link>
    </div>
  </section>
);

export default PrivacySection;
