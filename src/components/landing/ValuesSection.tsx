import { motion } from "framer-motion";
import { Heart, FlaskConical, Users, Leaf } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const values = [
  { icon: Heart, label: "Empatía", summary: "Escuchamos sin juzgar.", desc: "Entendemos que cada situación es única y merece atención genuina. Calmy fue diseñada para responder con calidez, no con frialdad. Porque cuando un padre necesita apoyo, lo último que necesita es sentirse cuestionado.", color: "text-primary" },
  { icon: FlaskConical, label: "Ciencia", summary: "Fundamentada en evidencia.", desc: "Cada orientación está basada en principios psicológicos actuales, revisados y aplicados de forma accesible. No inventamos respuestas: nos apoyamos en lo que la investigación dice que funciona.", color: "text-secondary" },
  { icon: Users, label: "Inclusión", summary: "Sin etiquetas rígidas.", desc: "Cada persona y familia tiene su propio camino. No imponemos categorías ni generalizamos: respetamos la diversidad de experiencias, contextos y formas de ser familia.", color: "text-primary" },
  { icon: Leaf, label: "Calma", summary: "A tu ritmo, sin presión.", desc: "No hay respuestas incorrectas ni urgencias forzadas. Calmy acompaña al ritmo que necesites, con paciencia y comprensión. Porque el bienestar no se apura.", color: "text-secondary" },
];

const ValuesSection = () => (
  <section id="valores" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span className="inline-block font-body text-sm font-semibold uppercase tracking-widest text-secondary bg-secondary/10 px-5 py-2 rounded-full mb-6">Nuestros valores</span>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
          Lo que nos <span className="text-secondary">guía</span>
        </h2>
        <p className="mt-6 font-body text-xl text-muted-foreground leading-relaxed">
          Cada decisión que tomamos parte de estos principios.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <AccordionItem
                value={`value-${i}`}
                className="glass-card border-none px-6 py-2 data-[state=open]:shadow-[var(--shadow-hover)] data-[state=open]:border-secondary/30 data-[state=open]:border transition-all duration-300"
              >
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0">
                      <v.icon className={v.color} size={26} />
                    </div>
                    <div className="text-left">
                      <p className="font-display font-bold text-foreground text-xl">{v.label}</p>
                      <p className="font-body text-sm text-muted-foreground mt-0.5">{v.summary}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-[4.5rem] pb-5">
                  <p className="font-body text-base text-muted-foreground leading-relaxed">{v.desc}</p>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default ValuesSection;
