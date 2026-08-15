import { motion } from "framer-motion";
import { ArrowRight, BookOpen, MessageCircle, Play, ShieldCheck, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import FounderGroupLink from "@/components/landing/FounderGroupLink";

const trustItems = [
  { icon: BookOpen, label: "Criterios psicológicos" },
  { icon: UserCheck, label: "Contexto familiar" },
  { icon: ShieldCheck, label: "Límites claros" },
];

const ease = [0.33, 1, 0.68, 1] as const;

const HeroSection = () => (
  <section className="relative overflow-hidden border-b border-border/60 bg-[hsl(var(--surface-warm))] pt-24 pb-12 md:pt-28 md:pb-14">
    <div className="section-container">
      <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
        >
          <span className="section-badge normal-case">
            Para familias de niños con diagnóstico profesional de TEA o TDAH
          </span>

          <h1 className="mt-5 max-w-[650px] font-display text-[2.55rem] font-extrabold leading-[1.04] text-foreground md:text-[3.35rem] lg:text-[3.7rem]">
            ¿Qué necesita mi hijo <span className="text-primary">en este momento?</span>
          </h1>

          <p className="mt-5 max-w-[620px] font-body text-base leading-relaxed text-muted-foreground md:text-lg">
            Cuando se desborda, quizá no es oposición. Quizá es sobrecarga. En el piloto, Calmy te ayudará a ordenar el contexto y elegir qué intentar primero.
          </p>

          <p className="mt-3 font-body text-sm font-semibold text-foreground">
            No diagnostica ni reemplaza la atención profesional.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {trustItems.map((item, index) => (
              <motion.span
                key={item.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.25 + index * 0.06 }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 font-body text-xs font-semibold text-foreground/80"
              >
                <item.icon size={15} className="text-secondary" />
                {item.label}
              </motion.span>
            ))}
          </div>

          <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <FounderGroupLink size="xl" className="w-full sm:w-auto">
              Unirme al grupo de WhatsApp <ArrowRight size={18} />
            </FounderGroupLink>
            <Button asChild variant="calm-outline" size="lg" className="w-full sm:w-auto">
              <a href="#como-funciona">
                Ver cómo funcionará <Play className="fill-current" size={13} />
              </a>
            </Button>
          </div>

          <p className="mt-4 max-w-[650px] font-body text-xs leading-relaxed text-muted-foreground">
            Grupo conversacional del piloto · Participación voluntaria · Puedes salir cuando quieras. Al unirte, tu nombre, foto de perfil o número podrían ser visibles para otros integrantes según la configuración de WhatsApp.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease }}
          className="mx-auto w-full max-w-[560px]"
        >
          <div className="overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-card)]">
            <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-display text-xs font-bold text-primary-foreground">C</div>
                <div>
                  <p className="font-display text-sm font-bold text-foreground">Calmy</p>
                  <p className="font-body text-xs text-secondary">Orientación para este momento</p>
                </div>
              </div>
              <ShieldCheck className="text-muted-foreground" size={18} />
            </div>

            <div className="space-y-4 bg-[#fbfcfd] px-5 py-6 md:px-6">
              <div className="flex justify-end">
                <div className="max-w-[82%] rounded-lg bg-primary/10 px-4 py-3">
                  <p className="font-body text-[13px] leading-relaxed text-foreground">
                    Mi hijo tiene TEA y se desborda cuando cambiamos la rutina. No sé si insistir o darle espacio.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <MessageCircle size={13} />
                </div>
                <div className="max-w-[86%] rounded-lg border border-border bg-card px-4 py-3">
                  <p className="font-body text-[13px] leading-relaxed text-foreground">
                    Un cambio inesperado puede generar sobrecarga. ¿Qué edad tiene y qué suele ayudarle cuando anticipan una transición?
                  </p>
                </div>
              </div>

              <div className="border-l-2 border-secondary bg-secondary/5 px-4 py-3">
                <p className="font-body text-xs font-bold text-secondary">Siguiente paso</p>
                <p className="mt-1 font-body text-[13px] leading-relaxed text-foreground">
                  Anticipa el cambio con una señal visual breve y valida su reacción antes de redirigir.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 border-t border-border/60 bg-card px-5 py-3">
              <p className="flex-1 font-body text-xs text-muted-foreground">Escribe una situación cotidiana...</p>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <ArrowRight size={13} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
