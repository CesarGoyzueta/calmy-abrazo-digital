import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const WAITLIST_URL = "#waitlist"; // TODO: Reemplazar con link real

const CTASection = () => (
  <section className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        className="glass-card p-10 md:p-16 text-center"
      >
        <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4">
          Sé de los primeros en conocer a Calmy
        </h2>
        <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto mb-4">
          No estás solo en esto. Estamos construyendo algo pensado para ti. Únete a la lista de espera y obtén acceso anticipado con beneficios exclusivos.
        </p>
        <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary rounded-full px-4 py-2 mb-8">
          <Sparkles size={16} />
          <span className="font-body text-sm font-medium">Descuento especial para los primeros usuarios</span>
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
