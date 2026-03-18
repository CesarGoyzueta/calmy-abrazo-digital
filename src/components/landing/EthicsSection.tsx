import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const EthicsSection = () => (
  <section className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        className="rounded-[32px] bg-muted/60 p-10 md:p-16 text-center"
      >
        <div className="w-14 h-14 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <ShieldCheck className="text-primary" size={28} />
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-4">
          Acompañamiento responsable
        </h2>
        <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Calmy no reemplaza a un profesional de la salud mental. Su objetivo es acompañar, orientar y brindar herramientas prácticas basadas en evidencia. Si te encuentras en crisis, busca ayuda de un especialista.
        </p>
      </motion.div>
    </div>
  </section>
);

export default EthicsSection;
