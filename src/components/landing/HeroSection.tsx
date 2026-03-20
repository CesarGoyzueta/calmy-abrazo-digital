import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, UserCheck, Clock, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-family.jpg";

const WAITLIST_URL = "#waitlist";

const trustChips = [
  { icon: BookOpen, label: "Base psicológica real" },
  { icon: UserCheck, label: "Adaptado a tu hijo" },
  { icon: Clock, label: "Disponible 24/7" },
  { icon: MessageCircle, label: "Orientación humana" },
];

const ease = [0.33, 1, 0.68, 1] as const;

const HeroSection = () => (
  <section className="pt-24 pb-16 md:pt-32 md:pb-24">
    <div className="section-container">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left — copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-body text-base md:text-lg text-secondary font-semibold leading-relaxed"
          >
            Cuando no sabes cómo acompañar a tu hijo, no deberías sentirte solo.
          </motion.p>

          <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold text-foreground leading-[1.08] tracking-tight">
            Acompañamiento emocional para padres, con{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              base psicológica y orientación personalizada
            </span>
          </h1>

          <p className="mt-5 font-body text-lg text-muted-foreground leading-relaxed max-w-lg">
            Calmy combina una base de conocimiento psicológica con el contexto de tu hijo para ofrecer orientación más clara, práctica y humana en los momentos en que más la necesitas.
          </p>

          {/* Trust chips */}
          <div className="mt-5 flex flex-wrap gap-2">
            {trustChips.map((chip) => (
              <span
                key={chip.label}
                className="inline-flex items-center gap-1.5 bg-card border border-border/60 rounded-full px-3 py-1.5 font-body text-xs font-medium text-foreground/80"
              >
                <chip.icon size={13} className="text-secondary" />
                {chip.label}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={WAITLIST_URL}>
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

          <p className="mt-4 font-body text-sm text-muted-foreground">
            🌿 Los primeros usuarios obtendrán acceso anticipado y beneficios exclusivos de lanzamiento.
          </p>
        </motion.div>

        {/* Right — image + chat overlay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="relative hidden lg:block"
        >
          <img
            src={heroImage}
            alt="Madre e hijo compartiendo un momento de calma y conexión"
            className="w-full rounded-3xl object-cover aspect-[4/5] shadow-[var(--shadow-card)]"
          />

          {/* Chat mockup overlay */}
          <div className="absolute -bottom-5 -left-6 card-elevated p-5 max-w-[280px]">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground text-xs font-bold font-display">C</span>
              </div>
              <p className="font-body text-sm text-foreground leading-relaxed">
                Entiendo tu preocupación. Esa reacción es muy común en niños con su perfil. Te sugiero intentar esto… 💚
              </p>
            </div>
          </div>

          {/* Floating stat */}
          <div className="absolute -top-3 -right-3 card-elevated px-4 py-3 text-center">
            <p className="font-display text-2xl font-extrabold text-primary">24/7</p>
            <p className="font-body text-xs text-muted-foreground font-medium">Disponible</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
