import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, UserCheck, MessageCircle, Brain, User, Sparkles, Shield } from "lucide-react";

const WAITLIST_URL = "https://forms.gle/BfZHorebqUUiXFJp8";

const trustChips = [
  { icon: BookOpen, label: "Base psicológica real" },
  { icon: UserCheck, label: "Adaptado a tu hijo" },
  { icon: MessageCircle, label: "Orientación clara y humana" },
];

const ease = [0.33, 1, 0.68, 1] as const;

const HeroSection = () => (
  <section className="pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden">
    <div className="section-container">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left — copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-foreground leading-[1.1] tracking-tight">
            Cuando no sabes cómo ayudar a tu hijo,{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              tener orientación clara lo cambia todo
            </span>
          </h1>

          <p className="mt-6 font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
            Orientación clara en minutos, con base psicológica y pasos prácticos para actuar hoy.
          </p>

          {/* Trust chips */}
          <div className="mt-7 flex flex-wrap gap-2.5">
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
                Prueba Calmy primero <ArrowRight className="ml-1" size={18} />
              </Button>
            </a>
            <a href="#como-funciona">
              <Button variant="calm-outline" size="lg">
                Ver cómo funciona
              </Button>
            </a>
          </div>

          <p className="mt-5 font-body text-xs text-muted-foreground flex items-center gap-1.5">
            <span className="text-sm">🌿</span> Lanzamiento: 30% OFF en tus primeros 3 meses. Cupos limitados.
          </p>
        </motion.div>

        {/* Right — product mockup */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="relative flex justify-center items-center min-h-[380px] lg:min-h-[540px] mt-10 lg:mt-0"
        >
          {/* Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[320px] h-[320px] rounded-full bg-gradient-to-br from-primary/5 to-secondary/5 blur-3xl" />
          </div>

          {/* Main chat mockup */}
          <div className="relative w-[380px] lg:w-[420px] card-elevated p-0 overflow-hidden z-10">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-border/40 bg-card">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-sm">
                  <span className="text-primary-foreground text-[10px] font-bold font-display">C</span>
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-foreground leading-tight">Calmy</p>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <p className="font-body text-[10px] text-secondary font-medium">Orientación activa</p>
                  </div>
                </div>
              </div>
              <div className="w-6 h-6 rounded-lg bg-muted/40 flex items-center justify-center">
                <Shield className="text-muted-foreground" size={12} />
              </div>
            </div>

            {/* Messages */}
            <div className="px-5 py-5 space-y-4 bg-gradient-to-b from-card to-background/20 min-h-[250px]">
              <motion.div
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex justify-end"
              >
                <div className="bg-primary/8 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[270px]">
                  <p className="font-body text-[13px] text-foreground leading-relaxed">
                    Mi hijo hace berrinches cuando cambiamos la rutina. No sé si insistir o darle espacio.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex gap-2 items-start"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Sparkles className="text-primary-foreground" size={10} />
                </div>
                <div className="bg-card border border-border/40 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[270px] shadow-sm">
                  <p className="font-body text-[13px] text-foreground leading-relaxed">
                    Los cambios de rutina pueden ser especialmente difíciles para niños con su perfil. Te sugiero anticipar con apoyos visuales y validar lo que siente antes de redirigir… 💚
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Input */}
            <div className="px-5 py-3 border-t border-border/30 bg-card">
              <div className="flex items-center gap-2 bg-muted/30 rounded-xl px-3 py-1.5">
                <p className="font-body text-xs text-muted-foreground flex-1">Escribe tu consulta…</p>
                <div className="w-6 h-6 rounded-md bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <ArrowRight className="text-primary-foreground" size={10} />
                </div>
              </div>
            </div>
          </div>

          {/* Floating: Perfil del niño */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease }}
            className="absolute -left-6 top-16 z-20 card-elevated px-3.5 py-2.5 hidden sm:flex items-center gap-2.5 shadow-lg"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0">
              <User className="text-primary" size={14} />
            </div>
            <div>
              <p className="font-display text-[11px] font-bold text-foreground">Perfil del niño</p>
              <p className="font-body text-[9px] text-muted-foreground">Contexto personalizado</p>
            </div>
          </motion.div>

          {/* Floating: Base psicológica */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.1, ease }}
            className="absolute -right-6 bottom-20 z-20 card-elevated px-3.5 py-2.5 hidden sm:flex items-center gap-2.5 shadow-lg"
          >
            <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
              <Brain className="text-secondary" size={14} />
            </div>
            <div>
              <p className="font-display text-[11px] font-bold text-foreground">Base psicológica</p>
              <p className="font-body text-[9px] text-muted-foreground">Conocimiento estructurado</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
