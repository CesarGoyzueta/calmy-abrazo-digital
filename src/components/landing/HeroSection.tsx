import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-family.jpg";

const WAITLIST_URL = "#waitlist";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card p-6 md:p-12 grid md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          >
            {/* Hook question */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-xl md:text-2xl text-primary font-medium italic leading-snug"
            >
              "¿Cómo puedo ayudar a mi hijo si a veces no lo entiendo?"
            </motion.p>

            <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
              Nos preocupamos por ello.{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Te presentamos Calmy.
              </span>
            </h1>
            <p className="mt-6 font-body text-lg text-muted-foreground leading-relaxed max-w-lg">
              Orientación emocional basada en evidencia psicológica, diseñada para acompañar a padres de niños neurodivergentes en su día a día. Con empatía, claridad y a tu ritmo.
            </p>

            {/* Early adopter badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 inline-flex items-center gap-2 bg-secondary/15 text-secondary rounded-full px-4 py-2.5 border border-secondary/25"
            >
              <Sparkles size={18} />
              <span className="font-body text-sm font-semibold">
                Los primeros usuarios obtienen descuento exclusivo
              </span>
            </motion.div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="calm" size="lg">
                  Únete a la lista de espera <ArrowRight className="ml-1" size={18} />
                </Button>
              </a>
              <a href="#como-funciona">
                <Button variant="calm-outline" size="lg">
                  Conoce más
                </Button>
              </a>
            </div>

            {/* Waitlist teaser */}
            <div className="mt-8 bg-card/90 backdrop-blur-sm rounded-2xl p-5 shadow-[var(--shadow-soft)] max-w-md border border-border/60">
              <p className="font-body text-sm font-bold text-foreground">🌿 Sé de los primeros</p>
              <p className="font-body text-sm text-muted-foreground mt-1 leading-relaxed">
                Estamos preparando algo especial. Únete a la lista de espera y obtén acceso anticipado con beneficios exclusivos.
              </p>
              <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="calm" className="w-full mt-3" size="default">
                  Quiero mi lugar
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
            className="hidden md:block"
          >
            <img
              src={heroImage}
              alt="Madre e hijo compartiendo un momento de calma y conexión"
              className="w-full rounded-3xl object-cover aspect-[4/5]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
