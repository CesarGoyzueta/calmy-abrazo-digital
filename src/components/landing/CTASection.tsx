import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";
import FounderGroupLink from "@/components/landing/FounderGroupLink";

const benefits = [
  "Conversar con el equipo fundador",
  "Influir en las prioridades del piloto",
  "Conocer oportunidades de prueba temprana",
  "Participar o salir cuando quieras",
];

const CTASection = () => (
  <section className="bg-foreground py-12 text-primary-foreground md:py-16">
    <div className="section-container">
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-body text-sm font-bold text-secondary">Tu experiencia puede darle dirección al piloto</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold leading-tight text-white md:text-4xl">
            Ayúdanos a construir Calmy con situaciones reales, no con suposiciones
          </h2>
          <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-white/72">
            Buscamos madres, padres y cuidadores de niños con diagnóstico profesional de TEA o TDAH que quieran conocer el proyecto y compartir feedback voluntariamente.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <ul className="grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2.5 font-body text-sm leading-relaxed text-white/78">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <Check size={12} />
                </span>
                {benefit}
              </li>
            ))}
          </ul>

          <FounderGroupLink size="xl" className="mt-7 w-full bg-secondary text-white hover:bg-secondary/90 sm:w-auto">
            <MessageCircle size={18} />
            Unirme al grupo de WhatsApp
          </FounderGroupLink>

          <p className="mt-4 font-body text-xs leading-relaxed text-white/58">
            El grupo es para cocrear el piloto; no ofrece atención clínica ni individual. Tu nombre, foto de perfil o número podrían ser visibles para otros integrantes según la configuración de WhatsApp.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CTASection;
