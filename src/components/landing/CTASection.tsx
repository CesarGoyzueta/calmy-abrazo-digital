import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WAITLIST_URL = "#waitlist";

const CTASection = () => (
  <section className="py-20 md:py-28">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl bg-gradient-to-br from-primary/5 via-secondary/4 to-primary/5 border border-primary/10 p-10 md:p-16 text-center max-w-3xl mx-auto"
      >
        <h2 className="section-title mb-5">
          Empieza a acompañar a tu hijo con más{" "}
          <span className="text-secondary">claridad y confianza</span>
        </h2>
        <p className="section-subtitle max-w-md mx-auto mb-3">
          Sé de los primeros en acceder a Calmy.
        </p>
        <ul className="mb-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 font-body text-sm text-muted-foreground">
          <li className="flex items-center gap-1.5"><span className="text-secondary font-bold">✓</span> Acceso antes que nadie</li>
          <li className="flex items-center gap-1.5"><span className="text-secondary font-bold">✓</span> Precio especial de lanzamiento</li>
          <li className="flex items-center gap-1.5"><span className="text-secondary font-bold">✓</span> Sin compromiso</li>
        </ul>
        <a href={WAITLIST_URL}>
          <Button variant="calm" size="xl" className="shadow-lg">
            Quiero acceso anticipado <ArrowRight className="ml-1" size={18} />
          </Button>
        </a>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
