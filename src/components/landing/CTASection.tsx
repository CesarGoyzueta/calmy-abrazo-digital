import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WAITLIST_URL = "#waitlist";

const CTASection = () => (
  <section className="py-24 md:py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        className="rounded-[2rem] bg-gradient-to-br from-primary/8 to-secondary/8 border border-primary/10 p-12 md:p-20 text-center"
      >
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          Empieza a acompañar con más{" "}
          <span className="text-secondary">claridad, calma y confianza</span>
        </h2>
        <p className="font-body text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto mb-8">
          Únete a la lista de espera para acceder antes al lanzamiento y recibir beneficios exclusivos.
        </p>
        <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">
          <Button variant="calm" size="xl">
            Quiero acceso anticipado <ArrowRight className="ml-1" size={20} />
          </Button>
        </a>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
