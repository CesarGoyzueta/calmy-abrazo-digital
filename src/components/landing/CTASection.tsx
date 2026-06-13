import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WAITLIST_URL = "https://forms.gle/BfZHorebqUUiXFJp8";

const CTASection = () => (
  <section className="py-16 md:py-20">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-primary/[0.08] via-card to-secondary/[0.09] border border-primary/15 p-8 md:p-12 text-center max-w-4xl mx-auto shadow-[var(--shadow-card)]"
      >
        <h2 className="section-title mb-5">
          Sé de los primeros en{" "}
          <span className="text-secondary">probar Calmy</span>
        </h2>
        <p className="section-subtitle max-w-lg mx-auto mb-7">
          Únete a la lista de espera y recibe acceso anticipado cuando abramos la primera versión.
        </p>
        <ul className="mb-7 grid sm:grid-cols-2 gap-x-8 gap-y-2.5 max-w-2xl mx-auto text-left font-body text-sm text-muted-foreground">
          <li className="flex items-center gap-2"><span className="text-secondary font-bold">✓</span> Acceso prioritario al lanzamiento</li>
          <li className="flex items-center gap-2"><span className="text-secondary font-bold">✓</span> Precio especial de lanzamiento</li>
          <li className="flex items-center gap-2"><span className="text-secondary font-bold">✓</span> Invitación a probar nuevas funciones antes que el público general</li>
          <li className="flex items-center gap-2"><span className="text-secondary font-bold">✓</span> Sin compromiso</li>
        </ul>
        <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">
          <Button variant="calm" size="xl" className="shadow-lg">
            Quiero acceso anticipado <ArrowRight className="ml-1" size={18} />
          </Button>
        </a>
        <p className="mt-5 font-body text-xs text-muted-foreground">
          Te avisamos cuando Calmy esté listo. Solo necesitas tu correo.
        </p>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
