import { CircleHelp, LockKeyhole, ShieldCheck, UserCheck } from "lucide-react";

const highlights = [
  {
    icon: CircleHelp,
    title: "Pregunta antes de orientar",
    description: "Busca el contexto que cambia el siguiente paso.",
    iconClass: "bg-primary/10 text-primary",
  },
  {
    icon: UserCheck,
    title: "Usa el contexto que decides compartir",
    description: "Edad, necesidades y estrategias previas, sin datos innecesarios.",
    iconClass: "bg-secondary/10 text-secondary",
  },
  {
    icon: ShieldCheck,
    title: "No reemplaza al profesional",
    description: "Complementa la conversación y señala cuándo consultar.",
    iconClass: "bg-amber-100 text-amber-700",
  },
  {
    icon: LockKeyhole,
    title: "Cuida la información que compartes",
    description: "Evita nombres, colegio, dirección y otros datos identificables.",
    iconClass: "bg-coral/10 text-coral",
  },
];

const TrustHighlightsBand = () => (
  <section aria-label="Diferencias de Calmy" className="border-b border-border/60 bg-card">
    <div className="section-container grid sm:grid-cols-2 xl:grid-cols-4">
      {highlights.map((highlight, index) => (
        <article
          key={highlight.title}
          className={`flex min-h-[128px] items-start gap-3.5 py-5 sm:px-5 xl:min-h-[138px] xl:px-6 ${
            index > 0 ? "border-t border-border/60 sm:border-t-0" : ""
          } ${index % 2 === 1 ? "sm:border-l sm:border-border/60" : ""} ${index > 1 ? "sm:border-t sm:border-border/60 xl:border-t-0" : ""} ${index > 0 ? "xl:border-l xl:border-border/60" : ""}`}
        >
          <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${highlight.iconClass}`}>
            <highlight.icon size={19} />
          </div>
          <div>
            <h2 className="font-display text-sm font-bold leading-snug text-foreground">{highlight.title}</h2>
            <p className="mt-1.5 font-body text-xs leading-relaxed text-muted-foreground">{highlight.description}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default TrustHighlightsBand;
