import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-family.jpg";

const HeroSection = () => {
  const [nombre, setNombre] = useState("");
  const [contacto, setContacto] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lead capture placeholder
    console.log("Lead:", { nombre, contacto });
  };

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
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-secondary">
              Bienvenido a NeuroCalm
            </span>
            <h1 className="mt-4 font-display text-4xl md:text-5xl font-medium text-foreground leading-tight tracking-tight">
              Acompañamiento emocional{" "}
              <span className="text-primary">accesible</span> y{" "}
              <span className="text-secondary">humano</span>
            </h1>
            <p className="mt-6 font-body text-lg text-muted-foreground leading-relaxed max-w-lg">
              Calmy es tu compañera de bienestar emocional. Brinda orientación basada en evidencia psicológica con empatía y claridad.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="calm" size="lg">
                Probar Calmy <ArrowRight className="ml-1" size={18} />
              </Button>
              <Button variant="calm-outline" size="lg">
                Cómo funciona
              </Button>
            </div>

            {/* Lead form */}
            <form onSubmit={handleSubmit} className="mt-8 bg-card/80 backdrop-blur-sm rounded-2xl p-5 shadow-[var(--shadow-soft)] space-y-3 max-w-md">
              <p className="font-body text-sm font-semibold text-foreground">Empieza tu camino</p>
              <input
                type="text"
                placeholder="Tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full bg-background/80 border-none rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
              <input
                type="text"
                placeholder="WhatsApp o Email"
                value={contacto}
                onChange={(e) => setContacto(e.target.value)}
                className="w-full bg-background/80 border-none rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              />
              <Button type="submit" variant="calm" className="w-full" size="default">
                Empezar camino
              </Button>
            </form>
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
              alt="Madre e hijo compartiendo un momento de alegría y conexión"
              className="w-full rounded-3xl object-cover aspect-[4/5] sepia-[0.15]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
