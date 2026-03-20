import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, UserCheck, Clock, MessageCircle, Brain, User, Sparkles } from "lucide-react";
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
  <section className="pt-28 pb-16 md:pt-36 md:pb-24">
    <div className="section-container">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
            className="font-body text-sm md:text-base text-secondary font-semibold tracking-wide"
          >
            Cuando no sabes cómo acompañar a tu hijo, no deberías sentirte solo.
          </motion.p>

          <h1 className="mt-5 font-display text-[2.5rem] md:text-5xl font-extrabold text-foreground leading-[1.1] tracking-tight max-w-md">
            Más claridad para{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              acompañar a tu hijo
            </span>
          </h1>

          <p className="mt-6 font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
            Calmy combina conocimiento psicológico con el contexto de tu hijo para darte orientación más clara, práctica y humana.
          </p>

          {/* Trust chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {trustChips.map((chip) => (
              <span
                key={chip.label}
                className="inline-flex items-center gap-1.5 bg-card border border-border/60 rounded-full px-3.5 py-1.5 font-body text-xs font-medium text-foreground/80"
              >
                <chip.icon size={13} className="text-secondary" />
                {chip.label}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
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

          <p className="mt-5 font-body text-sm text-muted-foreground">
            🌿 Los primeros usuarios obtendrán acceso anticipado y beneficios exclusivos.
          </p>
        </motion.div>

        {/* Right — product mockup composition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="relative hidden lg:flex justify-center"
        >
          {/* Main chat mockup */}
          <div className="w-[340px] card-elevated p-0 overflow-hidden">
            {/* Chat header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-border/50">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-primary-foreground text-sm font-bold font-display">C</span>
              </div>
              <div>
                <p className="font-display text-sm font-bold text-foreground">Calmy</p>
                <p className="font-body text-[11px] text-secondary font-medium">En línea · Orientación activa</p>
              </div>
            </div>

            {/* Chat messages */}
            <div className="px-5 py-5 space-y-4">
              {/* User message */}
              <div className="flex justify-end">
                <div className="bg-primary/8 rounded-2xl rounded-tr-md px-4 py-2.5 max-w-[230px]">
                  <p className="font-body text-[13px] text-foreground leading-relaxed">
                    Mi hijo se frustra mucho cuando cambia la rutina, ¿cómo puedo ayudarlo?
                  </p>
                </div>
              </div>

              {/* Calmy response */}
              <div className="flex gap-2.5">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Sparkles className="text-primary-foreground" size={12} />
                </div>
                <div className="bg-card border border-border/60 rounded-2xl rounded-tl-md px-4 py-3 max-w-[230px]">
                  <p className="font-body text-[13px] text-foreground leading-relaxed">
                    Entiendo tu preocupación. Para niños con su perfil, los cambios pueden generar ansiedad. Te sugiero anticipar con apoyo visual… 💚
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating card: Perfil del niño */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease }}
            className="absolute -left-4 top-16 card-elevated px-4 py-3 flex items-center gap-3 max-w-[180px]"
          >
            <div className="w-9 h-9 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0">
              <User className="text-primary" size={16} />
            </div>
            <div>
              <p className="font-display text-xs font-bold text-foreground">Perfil del niño</p>
              <p className="font-body text-[10px] text-muted-foreground">Contexto personalizado</p>
            </div>
          </motion.div>

          {/* Floating card: Base psicológica */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.65, ease }}
            className="absolute -right-4 bottom-20 card-elevated px-4 py-3 flex items-center gap-3 max-w-[190px]"
          >
            <div className="w-9 h-9 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
              <Brain className="text-secondary" size={16} />
            </div>
            <div>
              <p className="font-display text-xs font-bold text-foreground">Base psicológica</p>
              <p className="font-body text-[10px] text-muted-foreground">Conocimiento estructurado</p>
            </div>
          </motion.div>

          {/* Small hero image accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8, ease }}
            className="absolute -bottom-3 -left-8 w-24 h-24 rounded-2xl overflow-hidden shadow-[var(--shadow-card)] border-2 border-card"
          >
            <img
              src={heroImage}
              alt="Madre e hijo"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
