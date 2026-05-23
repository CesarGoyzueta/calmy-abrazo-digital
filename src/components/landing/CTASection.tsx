import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WAITLIST_URL = "https://forms.gle/BfZHorebqUUiXFJp8";

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
          Sé de los primeros en{" "}
          <span className="text-secondary">probar Calmy</span>
        </h2>
        <p className="section-subtitle max-w-md mx-auto mb-8">
          Únete a la lista de espera y recibe acceso anticipado cuando abramos la primera versión.
        </p>
        <ul className="mb-8 flex flex-col items-center gap-2.5 font-body text-sm text-muted-foreground">
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
