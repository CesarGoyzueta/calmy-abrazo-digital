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
    className="section-container py-2"
  >
    <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-primary/6 via-secondary/5 to-primary/6 border border-primary/12 rounded-2xl px-7 py-5">
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
