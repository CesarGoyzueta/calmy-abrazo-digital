import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
          Empieza a acompañarte con Calmy
        </h2>
        <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto mb-8">
          No estás solo en esto. Vamos paso a paso, juntos.
        </p>
        <Button variant="calm" size="xl">
          Probar ahora <ArrowRight className="ml-1" size={20} />
        </Button>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
