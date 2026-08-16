import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck, UsersRound } from "lucide-react";
import FounderGroupLink from "@/components/landing/FounderGroupLink";

const groupSteps = [
  {
    step: "01",
    title: "Conoce el propósito y los acuerdos",
    text: "Al entrar encontrarás el objetivo del piloto, las pautas de participación y recordatorios para cuidar la privacidad familiar.",
  },
  {
    step: "02",
    title: "Comparte feedback si lo deseas",
    text: "Podrás contar qué dudas aparecen en casa y qué debería comprender mejor Calmy, sin publicar datos que identifiquen a tu hijo.",
  },
  {
    step: "03",
    title: "Conoce avances y pruebas tempranas",
    text: "El equipo compartirá avances del producto y oportunidades para probar versiones iniciales cuando estén disponibles.",
  },
];

const FounderGroupSection = () => (
  <section id="grupo" className="border-b border-border/60 bg-[hsl(var(--surface-blue))] py-12 md:py-16">
    <div className="section-container">
      <div className="grid items-start gap-9 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-badge">Grupo de cocreación</span>
          <h2 className="section-title mt-4">Qué encontrarás en el grupo del piloto</h2>
          <p className="mt-4 section-subtitle">
            Un espacio para conversar con el equipo fundador y ayudar a que Calmy responda a momentos reales, no a suposiciones.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 font-body text-sm text-foreground/78">
            <span className="inline-flex items-center gap-2">
              <UsersRound size={17} className="text-secondary" /> Presencia del equipo
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={17} className="text-secondary" /> Participación voluntaria
            </span>
          </div>

          <FounderGroupLink size="xl" className="mt-7 w-full sm:w-auto">
            <MessageCircle size={18} />
            Unirme al grupo de WhatsApp
            <ArrowRight size={18} />
          </FounderGroupLink>

          <p className="mt-3 font-body text-xs leading-relaxed text-muted-foreground">
            Puedes leer sin compartir, participar cuando quieras y salir en cualquier momento. El grupo no ofrece atención clínica ni atención individual.
          </p>
        </motion.div>

        <div className="grid gap-3">
          {groupSteps.map((item, index) => (
            <motion.article
              key={item.step}
              initial={{ opacity: 0, x: 14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="grid gap-3 rounded-lg border border-border bg-card p-5 sm:grid-cols-[48px_1fr] sm:items-start"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary/10 font-display text-sm font-bold text-secondary">
                {item.step}
              </span>
              <div>
                <h3 className="font-display text-base font-bold text-foreground">{item.title}</h3>
                <p className="mt-1.5 font-body text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FounderGroupSection;
