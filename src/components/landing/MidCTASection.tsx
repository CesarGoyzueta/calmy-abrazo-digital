import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WAITLIST_URL = "https://forms.gle/BfZHorebqUUiXFJp8";

const MidCTASection = () => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="section-container py-4"
  >
    <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 bg-gradient-to-r from-primary/[0.07] via-secondary/[0.07] to-primary/[0.07] border border-primary/15 rounded-[1.4rem] px-7 py-6 shadow-[var(--shadow-soft)]">
      <p className="font-display text-sm font-bold text-foreground text-center sm:text-left leading-snug">
        ¿Quieres probar Calmy cuando abramos la primera versión?
      </p>
      <div className="flex flex-col items-center gap-1 flex-shrink-0">
        <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">
          <Button variant="calm" size="sm" className="whitespace-nowrap">
            Quiero acceso anticipado <ArrowRight className="ml-1" size={14} />
          </Button>
        </a>
        <span className="font-body text-[10px] text-muted-foreground">Lista de espera · Sin compromiso</span>
      </div>
    </div>
  </motion.div>
);

export default MidCTASection;
