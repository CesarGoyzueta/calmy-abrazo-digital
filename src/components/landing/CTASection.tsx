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
        className="rounded-3xl bg-gradient-to-br from-primary/6 via-secondary/4 to-primary/6 border border-primary/10 p-10 md:p-16 text-center"
      >
        <h2 className="section-title mb-5">
          Empieza a acompañar con más{" "}
          <span className="text-secondary">claridad, calma y confianza</span>
        </h2>
        <p className="section-subtitle max-w-lg mx-auto mb-7">
          Únete a la lista de espera para acceder antes al lanzamiento y recibir beneficios exclusivos.
        </p>
        <a href={WAITLIST_URL}>
          <Button variant="calm" size="xl">
            Quiero acceso anticipado <ArrowRight className="ml-1" size={20} />
          </Button>
        </a>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
