import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, UserCheck, Clock, MessageCircle, Brain, User, Sparkles, Shield } from "lucide-react";
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
  <section className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
    <div className="section-container">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left — copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-body text-sm md:text-base text-muted-foreground leading-relaxed max-w-md mb-6"
          >
            Cuando no sabes cómo acompañar a tu hijo, no deberías sentirte solo.
          </motion.p>

          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold text-foreground leading-[1.08] tracking-tight">
            Orientación clara{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              para acompañar
            </span>{" "}
            a tu hijo
          </h1>

          <p className="mt-6 font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
            Calmy combina conocimiento psicológico con el contexto de tu hijo para darte orientación más clara, práctica y humana.
          </p>

          {/* Trust chips */}
          <div className="mt-7 flex flex-wrap gap-2">
            {trustChips.map((chip, i) => (
              <motion.span
                key={chip.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                className="inline-flex items-center gap-1.5 bg-card border border-border/60 rounded-full px-3.5 py-1.5 font-body text-xs font-medium text-foreground/80 shadow-sm"
              >
                <chip.icon size={13} className="text-secondary" />
                {chip.label}
              </motion.span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href={WAITLIST_URL}>
              <Button variant="calm" size="xl" className="shadow-lg">
                Únete a la waitlist <ArrowRight className="ml-1" size={18} />
              </Button>
            </a>
            <a href="#como-funciona">
              <Button variant="calm-outline" size="lg">
                Ver cómo funciona
              </Button>
            </a>
          </div>

          <p className="mt-5 font-body text-xs text-muted-foreground flex items-center gap-1.5">
            <span className="text-sm">🌿</span> Los primeros usuarios obtendrán acceso anticipado y beneficios exclusivos.
          </p>
        </motion.div>

        {/* Right — product mockup composition */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="relative hidden lg:flex justify-center items-center min-h-[500px]"
        >
          {/* Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[340px] h-[340px] rounded-full bg-gradient-to-br from-primary/6 to-secondary/6 blur-3xl" />
          </div>

          {/* Main chat mockup */}
          <div className="relative w-[360px] card-elevated p-0 overflow-hidden z-10">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-border/50 bg-card">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-sm">
                  <span className="text-primary-foreground text-xs font-bold font-display">C</span>
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-foreground leading-tight">Calmy</p>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <p className="font-body text-[10px] text-secondary font-medium">Orientación activa</p>
                  </div>
                </div>
              </div>
              <div className="w-7 h-7 rounded-lg bg-muted/40 flex items-center justify-center">
                <Shield className="text-muted-foreground" size={13} />
              </div>
            </div>

            {/* Messages */}
            <div className="px-5 py-5 space-y-4 bg-gradient-to-b from-card to-background/20">
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex justify-end"
              >
                <div className="bg-primary/8 rounded-2xl rounded-tr-sm px-3.5 py-2.5 max-w-[240px]">
                  <p className="font-body text-[12px] text-foreground leading-relaxed">
                    Mi hijo se frustra mucho cuando cambia la rutina, ¿cómo puedo ayudarlo?
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex gap-2.5"
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <Sparkles className="text-primary-foreground" size={12} />
                </div>
                <div className="bg-card border border-border/50 rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[240px] shadow-sm">
                  <p className="font-body text-[12px] text-foreground leading-relaxed">
                    Entiendo tu preocupación. Para niños con su perfil, los cambios inesperados pueden generar mucha ansiedad. Te sugiero anticipar con apoyo visual y validar su emoción antes de redirigir… 💚
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Input */}
            <div className="px-5 py-3 border-t border-border/30 bg-card">
              <div className="flex items-center gap-2.5 bg-muted/30 rounded-xl px-3.5 py-2">
                <p className="font-body text-[11px] text-muted-foreground flex-1">Escribe tu consulta…</p>
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <ArrowRight className="text-primary-foreground" size={11} />
                </div>
              </div>
            </div>
          </div>

          {/* Floating: Perfil del niño */}
          <motion.div
            initial={{ opacity: 0, x: -24, y: 8 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease }}
            className="absolute -left-4 top-20 z-20 card-elevated px-4 py-3 flex items-center gap-2.5 shadow-lg"
          >
            <div className="w-9 h-9 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0">
              <User className="text-primary" size={16} />
            </div>
            <div>
              <p className="font-display text-xs font-bold text-foreground">Perfil del niño</p>
              <p className="font-body text-[10px] text-muted-foreground">Contexto personalizado</p>
            </div>
          </motion.div>

          {/* Floating: Base psicológica */}
          <motion.div
            initial={{ opacity: 0, x: 24, y: -8 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1, ease }}
            className="absolute -right-4 bottom-24 z-20 card-elevated px-4 py-3 flex items-center gap-2.5 shadow-lg"
          >
            <div className="w-9 h-9 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
              <Brain className="text-secondary" size={16} />
            </div>
            <div>
              <p className="font-display text-xs font-bold text-foreground">Base psicológica</p>
              <p className="font-body text-[10px] text-muted-foreground">Conocimiento estructurado</p>
            </div>
          </motion.div>

          {/* Small photo accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.25, ease }}
            className="absolute -bottom-1 -left-6 w-20 h-20 rounded-2xl overflow-hidden shadow-md border-2 border-card z-20"
          >
            <img src={heroImage} alt="Familia" className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
