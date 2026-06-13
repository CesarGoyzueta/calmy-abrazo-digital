import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, UserCheck, MessageCircle, Brain, User, Sparkles, Shield, Sprout, Play } from "lucide-react";

const WAITLIST_URL = "https://forms.gle/BfZHorebqUUiXFJp8";

const trustChips = [
  { icon: BookOpen, label: "Base psicológica real" },
  { icon: UserCheck, label: "Contexto de tu hijo" },
  { icon: MessageCircle, label: "Primeros pasos concretos" },
];

const ease = [0.33, 1, 0.68, 1] as const;

const HeroSection = () => (
  <section className="relative overflow-hidden pt-28 pb-14 md:pt-[118px] md:pb-16">
    <div className="absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(circle_at_70%_35%,rgba(42,157,143,0.08),transparent_32%),radial-gradient(circle_at_25%_25%,rgba(59,123,178,0.06),transparent_30%)] pointer-events-none" />
    <div className="section-container">
      <div className="relative grid lg:grid-cols-[1.08fr_0.92fr] gap-10 lg:gap-16 items-center">
        {/* Left — copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary/[0.09] px-3.5 py-2 font-body text-xs font-semibold text-secondary">
            <Sprout size={14} />
            Orientación práctica para padres y madres
          </span>

          <h1 className="mt-5 max-w-[650px] font-display text-[2.65rem] md:text-[3.4rem] lg:text-[3.65rem] font-extrabold text-foreground leading-[1.02] tracking-[-0.035em]">
            Cuando no sabes qué hacer,{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Calmy te ayuda a dar el primer paso
            </span>
          </h1>

          <p className="mt-5 font-body text-base text-muted-foreground leading-relaxed max-w-[580px]">
            Orientación práctica para padres y madres. Calmy transforma tus dudas del día a día en primeros pasos claros, con base psicológica y el contexto de tu hijo.
          </p>

          {/* Trust chips */}
          <div className="mt-5 flex flex-wrap gap-2">
            {trustChips.map((chip, i) => (
              <motion.span
                key={chip.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                className="inline-flex items-center gap-1.5 bg-card/90 border border-border/70 rounded-full px-3.5 py-2 font-body text-xs font-semibold text-foreground/75 shadow-[var(--shadow-soft)]"
              >
                <chip.icon size={15} className="text-secondary" />
                {chip.label}
              </motion.span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="calm" size="xl">
                Quiero acceso anticipado <ArrowRight className="ml-1" size={18} />
              </Button>
            </a>
            <a href="#como-funciona">
              <Button variant="calm-outline" size="lg">
                Ver cómo funciona <Play className="ml-1 fill-current" size={13} />
              </Button>
            </a>
          </div>

          <p className="mt-5 font-body text-xs text-muted-foreground flex items-center gap-1.5">
            <span className="text-sm">🌿</span> Acceso prioritario · Precio especial de lanzamiento · Sin compromiso.
          </p>
        </motion.div>

        {/* Right — product mockup */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="relative flex justify-center items-center min-h-[400px] lg:min-h-[455px] mt-8 lg:mt-0"
        >
          {/* Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[430px] h-[430px] rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-3xl" />
          </div>

          {/* Main chat mockup — wider and taller */}
          <div className="relative w-full max-w-[470px] card-elevated p-0 overflow-hidden z-10 shadow-[0_24px_70px_-36px_rgba(32,81,95,0.45)]">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-border/40 bg-card">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-sm">
                  <span className="text-primary-foreground text-xs font-bold font-display">C</span>
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-foreground leading-tight">Calmy</p>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <p className="font-body text-xs text-secondary font-medium">Orientación activa</p>
                  </div>
                </div>
              </div>
              <div className="w-7 h-7 rounded-lg bg-muted/40 flex items-center justify-center">
                <Shield className="text-muted-foreground" size={14} />
              </div>
            </div>

            {/* Messages */}
            <div className="px-5 py-5 space-y-4 bg-gradient-to-b from-card to-secondary/[0.025]">
              <motion.div
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex justify-end"
              >
                <div className="bg-primary/8 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[78%]">
                  <p className="font-body text-[13px] text-foreground leading-relaxed">
                    Mi hijo hace berrinches cuando cambiamos la rutina. No sé si insistir o darle espacio.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="flex gap-2.5 items-start"
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Sparkles className="text-primary-foreground" size={12} />
                </div>
                <div className="bg-card border border-border/40 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[78%] shadow-sm">
                  <p className="font-body text-[13px] text-foreground leading-relaxed">
                    Los cambios de rutina suelen ser difíciles para niños con su perfil. Te sugiero anticiparlos con apoyos visuales y validar lo que siente antes de redirigir. 💚
                  </p>
                </div>
              </motion.div>

              {/* Primer paso pill */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.3 }}
                className="flex justify-center"
              >
                <span className="inline-flex items-center gap-1.5 bg-secondary/10 border border-secondary/20 rounded-full px-3 py-1.5 font-body text-xs font-semibold text-secondary">
                  <Sparkles size={11} />
                  Primer paso: avísale antes con un pictograma o imagen
                </span>
              </motion.div>
            </div>

            {/* Input */}
            <div className="px-5 py-3 border-t border-border/30 bg-card">
              <div className="flex items-center gap-2 bg-muted/30 rounded-xl px-3.5 py-2">
                <p className="font-body text-xs text-muted-foreground flex-1">Escribe tu consulta…</p>
                <div className="w-6 h-6 rounded-md bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <ArrowRight className="text-primary-foreground" size={12} />
                </div>
              </div>
            </div>
          </div>

          {/* Floating: Perfil del niño — bottom-left */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2, ease }}
            className="absolute left-0 -bottom-1 z-20 card-elevated px-3.5 py-2.5 hidden lg:flex items-center gap-2.5 shadow-lg"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0">
              <User className="text-primary" size={14} />
            </div>
            <div>
              <p className="font-display text-xs font-bold text-foreground">Perfil del niño</p>
              <p className="font-body text-[11px] text-muted-foreground">Contexto personalizado</p>
            </div>
          </motion.div>

          {/* Floating: Base psicológica — top-right, inset del borde */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3, ease }}
            className="absolute -right-2 top-0 z-20 card-elevated px-3.5 py-2.5 hidden lg:flex items-center gap-2.5 shadow-lg"
          >
            <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
              <Brain className="text-secondary" size={14} />
            </div>
            <div>
              <p className="font-display text-xs font-bold text-foreground">Base psicológica</p>
              <p className="font-body text-[11px] text-muted-foreground">Conocimiento estructurado</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
