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
  <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
    <div className="section-container">
      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 lg:gap-20 items-center">
        {/* Left — copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-2 mb-7"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="font-body text-sm text-secondary font-semibold">
              Acompañamiento con base psicológica
            </span>
          </motion.div>

          <h1 className="font-display text-[2.75rem] md:text-[3.5rem] lg:text-[3.75rem] font-extrabold text-foreground leading-[1.05] tracking-tight">
            Orientación clara{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              para acompañar
            </span>{" "}
            a tu hijo
          </h1>

          <p className="mt-7 font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[520px]">
            Calmy combina conocimiento psicológico con el contexto de tu hijo para darte orientación más clara, práctica y humana.
          </p>

          {/* Trust chips */}
          <div className="mt-8 flex flex-wrap gap-2.5">
            {trustChips.map((chip, i) => (
              <motion.span
                key={chip.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="inline-flex items-center gap-2 bg-card border border-border/70 rounded-full px-4 py-2 font-body text-sm font-medium text-foreground/85 shadow-sm"
              >
                <chip.icon size={15} className="text-secondary" />
                {chip.label}
              </motion.span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href={WAITLIST_URL}>
              <Button variant="calm" size="xl" className="shadow-lg">
                Únete a la waitlist <ArrowRight className="ml-1.5" size={20} />
              </Button>
            </a>
            <a href="#como-funciona">
              <Button variant="calm-outline" size="lg">
                Ver cómo funciona
              </Button>
            </a>
          </div>

          <p className="mt-6 font-body text-sm text-muted-foreground flex items-center gap-1.5">
            <span className="text-base">🌿</span> Los primeros usuarios obtendrán acceso anticipado y beneficios exclusivos.
          </p>
        </motion.div>

        {/* Right — product mockup composition */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="relative hidden lg:flex justify-center items-center min-h-[520px]"
        >
          {/* Subtle glow behind mockup */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[380px] h-[380px] rounded-full bg-gradient-to-br from-primary/8 to-secondary/8 blur-3xl" />
          </div>

          {/* Main chat mockup — larger and more prominent */}
          <div className="relative w-[380px] card-elevated p-0 overflow-hidden z-10">
            {/* Chat header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border/50 bg-card">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
                  <span className="text-primary-foreground text-sm font-bold font-display">C</span>
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-foreground">Calmy</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <p className="font-body text-[11px] text-secondary font-medium">Orientación activa</p>
                  </div>
                </div>
              </div>
              <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center">
                <Shield className="text-muted-foreground" size={14} />
              </div>
            </div>

            {/* Chat messages */}
            <div className="px-6 py-6 space-y-5 bg-gradient-to-b from-card to-background/30">
              {/* User message */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex justify-end"
              >
                <div className="bg-primary/10 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[260px]">
                  <p className="font-body text-[13px] text-foreground leading-relaxed">
                    Mi hijo se frustra mucho cuando cambia la rutina, ¿cómo puedo ayudarlo?
                  </p>
                </div>
              </motion.div>

              {/* Calmy response */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <Sparkles className="text-primary-foreground" size={13} />
                </div>
                <div className="bg-card border border-border/60 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[260px] shadow-sm">
                  <p className="font-body text-[13px] text-foreground leading-relaxed">
                    Entiendo tu preocupación. Para niños con su perfil, los cambios inesperados pueden generar mucha ansiedad. Te sugiero anticipar con apoyo visual y validar su emoción antes de redirigir… 💚
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Input bar */}
            <div className="px-6 py-4 border-t border-border/40 bg-card">
              <div className="flex items-center gap-3 bg-muted/40 rounded-xl px-4 py-2.5">
                <p className="font-body text-xs text-muted-foreground flex-1">Escribe tu consulta…</p>
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <ArrowRight className="text-primary-foreground" size={13} />
                </div>
              </div>
            </div>
          </div>

          {/* Floating card: Perfil del niño */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease }}
            className="absolute -left-6 top-24 z-20 card-elevated px-5 py-4 flex items-center gap-3 shadow-lg"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <User className="text-primary" size={18} />
            </div>
            <div>
              <p className="font-display text-sm font-bold text-foreground">Perfil del niño</p>
              <p className="font-body text-[11px] text-muted-foreground mt-0.5">Contexto personalizado</p>
            </div>
          </motion.div>

          {/* Floating card: Base psicológica */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 1.15, ease }}
            className="absolute -right-6 bottom-28 z-20 card-elevated px-5 py-4 flex items-center gap-3 shadow-lg"
          >
            <div className="w-11 h-11 rounded-xl bg-secondary/12 flex items-center justify-center flex-shrink-0">
              <Brain className="text-secondary" size={18} />
            </div>
            <div>
              <p className="font-display text-sm font-bold text-foreground">Base psicológica</p>
              <p className="font-body text-[11px] text-muted-foreground mt-0.5">Conocimiento estructurado</p>
            </div>
          </motion.div>

          {/* Hero image accent — repositioned */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.3, ease }}
            className="absolute -bottom-2 -left-10 w-28 h-28 rounded-2xl overflow-hidden shadow-lg border-[3px] border-card z-20"
          >
            <img
              src={heroImage}
              alt="Madre e hijo compartiendo un momento"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
