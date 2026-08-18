import { motion } from "framer-motion";
import { ArrowRight, CircleHelp, Compass, MessageCircle, Play, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import FounderGroupLink from "@/components/landing/FounderGroupLink";
import heroDesktop from "@/assets/hero-family-photo-desktop.jpg";
import heroChatDesktop from "@/assets/hero-family-photo-chat-desktop.jpg";
import heroMobile from "@/assets/hero-family-photo-mobile.jpg";
import { cn } from "@/lib/utils";

const responseSignals = [
  {
    icon: CircleHelp,
    title: "Qué podría influir",
    text: "La transición puede necesitar anticipación.",
    iconClass: "bg-primary/10 text-primary",
    rowClass: "bg-primary/[0.045]",
  },
  {
    icon: MessageCircle,
    title: "Calmy pregunta antes",
    text: "¿Cómo le avisas que el tiempo está por terminar?",
    iconClass: "bg-primary/10 text-primary",
    rowClass: "bg-[hsl(var(--surface-blue))]",
  },
  {
    icon: Compass,
    title: "Primer paso",
    text: "Avísale cinco minutos antes y ofrece una opción de cierre.",
    iconClass: "bg-secondary/10 text-secondary",
    rowClass: "bg-secondary/[0.045]",
  },
  {
    icon: Stethoscope,
    title: "Cuándo consultar",
    text: "Si ocurre en más contextos, aumenta o hay riesgo físico.",
    iconClass: "bg-coral/10 text-coral",
    rowClass: "bg-coral/[0.045]",
  },
];

const HeroResponsePreview = ({ className }: { className?: string }) => (
  <aside
    aria-label="Ejemplo de conversación de Calmy"
    className={cn(
      "overflow-hidden rounded-lg border border-white/90 bg-card/95 shadow-[0_18px_44px_-24px_hsl(var(--foreground)/0.32)] backdrop-blur-sm",
      className,
    )}
  >
    <div className="flex items-center justify-between border-b border-border/50 px-4 py-3 xl:px-3.5 xl:py-2.5">
      <div className="flex items-center gap-2.5">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground xl:h-8 xl:w-8">
          <MessageCircle size={16} />
        </div>
        <div>
          <p className="font-display text-base font-bold text-foreground xl:text-[15px]">Así preguntará Calmy</p>
          <p className="font-body text-xs text-muted-foreground">Ejemplo ilustrativo</p>
        </div>
      </div>
      <span className="rounded-full bg-secondary/10 px-2.5 py-1 font-body text-xs font-bold text-secondary xl:px-2 xl:py-0.5">
        Piloto
      </span>
    </div>

    <div className="p-3.5 xl:p-3">
      <div className="rounded-lg bg-primary/[0.08] px-3.5 py-3 xl:px-3 xl:py-2.5">
        <p className="font-body text-xs font-bold uppercase text-primary">Tu situación</p>
        <p className="mt-1 font-body text-sm leading-relaxed text-foreground">
          “Se frustra y grita cuando toca dejar la tablet.”
        </p>
      </div>

      <div className="mt-2.5 grid gap-1.5 sm:grid-cols-2 xl:mt-2 xl:grid-cols-1 xl:gap-1">
        {responseSignals.map((signal) => (
          <div
            key={signal.title}
            className={cn("flex items-start gap-3 rounded-lg px-2.5 py-2.5 xl:gap-2.5 xl:px-2.5 xl:py-2", signal.rowClass)}
          >
            <div className={cn("flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg xl:h-7 xl:w-7", signal.iconClass)}>
              <signal.icon size={16} />
            </div>
            <div>
              <p className="font-display text-sm font-bold leading-tight text-foreground">{signal.title}</p>
              <p className="mt-1 font-body text-sm leading-snug text-muted-foreground">{signal.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </aside>
);

const ease = [0.33, 1, 0.68, 1] as const;

const HeroSection = () => (
  <section className="relative isolate overflow-hidden border-b border-border/60 bg-background pt-[68px] xl:min-h-[720px]">
    <div className="section-container relative xl:min-h-[652px]">
      <picture className="absolute right-0 top-6 hidden h-[570px] w-[60%] overflow-hidden rounded-lg xl:block">
        <img
          src={heroChatDesktop}
          alt="Madre acompañando a su hijo mientras dibujan juntos en casa"
          width={2048}
          height={1152}
          {...({ fetchpriority: "high" } as Record<string, string>)}
          decoding="async"
          className="h-full w-full object-cover object-left"
        />
      </picture>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease }}
        className="max-w-[660px] pb-6 pt-8 sm:pb-8 sm:pt-12 xl:max-w-[540px] xl:pb-0 xl:pt-12"
      >
        <span className="section-badge normal-case shadow-[var(--shadow-soft)]">
          Para familias de niños con diagnóstico profesional de TEA o TDAH
        </span>

        <h1 className="mt-4 max-w-[620px] font-display text-[2.4rem] font-extrabold leading-[1.04] text-foreground sm:mt-5 md:text-[3.35rem] xl:text-[3.1rem]">
          ¿Qué necesita mi hijo <span className="text-primary">en este momento?</span>
        </h1>

        <p className="mt-4 max-w-[660px] font-body text-base leading-relaxed text-muted-foreground sm:mt-5 md:text-lg xl:max-w-[520px] xl:text-foreground/72">
          Cuando se desborda, quizá no es oposición. Quizá es sobrecarga. En el piloto, Calmy preguntará antes de orientar para ayudarte a leer el contexto y elegir qué intentar primero.
        </p>

        <p className="mt-2.5 font-body text-sm font-semibold text-foreground sm:mt-3">
          No diagnostica ni reemplaza la atención profesional.
        </p>

        <div className="mt-5 flex flex-col items-stretch gap-2.5 sm:mt-7 sm:flex-row sm:items-center sm:gap-3">
          <FounderGroupLink size="xl" className="w-full sm:w-auto">
            Unirme al grupo de WhatsApp <ArrowRight size={18} />
          </FounderGroupLink>
          <Button asChild variant="calm-outline" size="lg" className="w-full bg-card/85 sm:w-auto">
            <a href="#ejemplos">
              Ver un ejemplo <Play className="fill-current" size={13} />
            </a>
          </Button>
        </div>

        <p className="mt-3 max-w-[620px] font-body text-xs leading-relaxed text-muted-foreground sm:mt-4 xl:max-w-[500px] xl:text-foreground/58">
          Grupo de cocreación del piloto · Participación voluntaria · Puedes salir cuando quieras. Tu nombre, foto de perfil o número podrían ser visibles según la configuración de WhatsApp.
        </p>
      </motion.div>

      <picture className="-mx-5 block aspect-[4/3] overflow-hidden sm:-mx-8 sm:aspect-[16/10] lg:-mx-10 lg:aspect-[16/9] xl:hidden">
        <source media="(max-width: 767px)" srcSet={heroMobile} />
        <img
          src={heroDesktop}
          alt="Madre acompañando a su hijo mientras dibujan juntos en casa"
          width={1672}
          height={941}
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover object-[center_62%]"
        />
      </picture>

      <motion.div
        id="hero-demo"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease }}
        className="relative z-10 mb-8 sm:mx-auto sm:max-w-3xl xl:absolute xl:right-10 xl:top-[72px] xl:mb-0 xl:w-[312px]"
      >
        <HeroResponsePreview />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
