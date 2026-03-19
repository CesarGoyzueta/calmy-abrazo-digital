import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, UserCheck, Clock, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-family.jpg";

const WAITLIST_URL = "#waitlist";

const trustChips = [
  { icon: BookOpen, label: "Basado en conocimiento psicológico" },
  { icon: UserCheck, label: "Adaptado al contexto de tu hijo" },
  { icon: Clock, label: "Disponible cuando lo necesites" },
  { icon: MessageCircle, label: "Orientación clara y humana" },
];

const HeroSection = () => (
  <section className="pt-28 pb-20 md:pt-36 md:pb-28 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-body text-lg md:text-xl text-secondary font-medium leading-relaxed"
          >
            Cuando no sabes cómo acompañar a tu hijo, no deberías sentirte solo.
          </motion.p>

          <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.1] tracking-tight">
            Acompañamiento emocional para padres, con{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              base psicológica y orientación personalizada
            </span>
          </h1>

          <p className="mt-6 font-body text-lg text-muted-foreground leading-relaxed max-w-xl">
            Calmy te ayuda a afrontar dudas, momentos difíciles y decisiones cotidianas con más claridad, empatía y contexto. Combina orientación basada en evidencia con información relevante sobre tu hijo para ofrecer apoyo más útil y humano.
          </p>

          {/* Trust chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {trustChips.map((chip) => (
              <span
                key={chip.label}
                className="inline-flex items-center gap-1.5 bg-card border border-border/60 rounded-full px-3.5 py-1.5 font-body text-xs font-medium text-foreground/80"
              >
                <chip.icon size={14} className="text-secondary" />
                {chip.label}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="calm" size="lg">
                Únete a la waitlist <ArrowRight className="ml-1" size={18} />
              </Button>
            </a>
            <a href="#como-funciona">
              <Button variant="calm-outline" size="lg">
                Ver cómo funciona
              </Button>
            </a>
          </div>

          {/* Early adopter note */}
          <p className="mt-5 font-body text-sm text-muted-foreground">
            🌿 Los primeros usuarios obtendrán acceso anticipado y beneficios de lanzamiento.
          </p>
        </motion.div>

        {/* Right — image + chat mockup overlay */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
          className="relative hidden lg:block"
        >
          <img
            src={heroImage}
            alt="Madre e hijo compartiendo un momento de calma y conexión"
            className="w-full rounded-3xl object-cover aspect-[4/5] shadow-[var(--shadow-soft)]"
          />
          {/* Chat mockup overlay */}
          <div className="absolute -bottom-6 -left-8 bg-card rounded-2xl p-5 shadow-[var(--shadow-hover)] border border-border/40 max-w-xs">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground text-xs font-bold font-display">C</span>
              </div>
              <div>
                <p className="font-body text-sm text-foreground leading-relaxed">
                  Entiendo tu preocupación. Esa reacción es muy común en niños con su perfil. Te sugiero intentar esto… 💚
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
