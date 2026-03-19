import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const WAITLIST_URL = "#waitlist";

const CTASection = () => (
  <section className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        className="glass-card p-10 md:p-16 text-center bg-gradient-to-br from-primary/5 to-secondary/5"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
          Sé de los primeros en conocer a <span className="text-secondary">Calmy</span>
        </h2>
        <p className="font-body text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto mb-5">
          No estás solo en esto. Estamos construyendo algo pensado para ti. Únete a la lista de espera y obtén acceso anticipado con beneficios exclusivos.
        </p>
        <div className="inline-flex items-center gap-2 bg-secondary/15 text-secondary rounded-full px-5 py-2.5 mb-8 border border-secondary/25">
          <Sparkles size={18} />
          <span className="font-body text-sm font-bold">Descuento especial para los primeros usuarios</span>
        </div>
        <div>
          <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="calm" size="xl">
              Quiero mi lugar <ArrowRight className="ml-1" size={20} />
            </Button>
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
