import { motion } from "framer-motion";
import { BookOpen, Brain, ShieldCheck } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import founderTech from "@/assets/founder-tech.jpeg";
import founderPsych from "@/assets/founder-psych.webp";

const founders = [
  {
    photo: founderPsych,
    name: "Erika Rubio",
    badge: "Co-Fundadora · CMO & Head of Psychology",
    subtitle: "Psicología · Contenidos y crecimiento",
    bio: "Lidera la construcción de contenidos y los criterios de orientación para que la experiencia sea sensible, clara y responsable.",
  },
  {
    photo: founderTech,
    name: "César Goyzueta",
    badge: "Co-Fundador · CEO & CTO",
    subtitle: "Visión de producto · IA y tecnología",
    bio: "Diseña la experiencia y la arquitectura que convertirán el contexto familiar en una orientación práctica y comprensible.",
  },
];

const pillars = [
  {
    icon: BookOpen,
    title: "Contenido definido por una psicóloga",
    text: "Los criterios de orientación y el contenido de Calmy los define y revisa Erika Rubio, responsable del enfoque psicológico del proyecto.",
  },
  {
    icon: Brain,
    title: "Personalización con contexto",
    text: "Calmy tomará en cuenta el perfil que la familia decida compartir (edad, necesidades y estrategias ya intentadas) para orientar cada respuesta.",
  },
  {
    icon: ShieldCheck,
    title: "Respeto por los límites",
    text: "Calmy acompañará, orientará y ayudará a organizar dudas. No reemplaza terapia, diagnóstico ni evaluación profesional.",
  },
];

const commitments = [
  "Transparencia sobre lo que Calmy es y lo que no es",
  "Respeto por el rol de los profesionales de salud mental",
  "Mejora continua a partir del feedback de las familias del grupo fundador",
  "Accesibilidad para familias que necesitan apoyo",
];

const fade = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.5 },
};

const SobreCalmy = () => (
  <PageLayout>
    {/* ── SECCIÓN 1: INTRO ── */}
    <motion.section {...fade} className="mb-20">
      <span className="section-badge mb-4 inline-block">Sobre Calmy</span>
      <h1 className="font-display text-3xl md:text-4xl font-extrabold text-foreground leading-tight mt-2 mb-6">
        Por qué existe Calmy
      </h1>
      <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
        Calmy nace para madres, padres y cuidadores de niños con diagnóstico profesional de TEA o TDAH que buscan orientación clara y contextual en momentos cotidianos.
      </p>
      <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mt-4">
        Criar con amor no siempre significa saber qué hacer. El día a día trae dudas, momentos difíciles e incertidumbre. Calmy nace para estar ahí en esos momentos, con acompañamiento más claro, humano y útil.
      </p>
    </motion.section>

    {/* ── SECCIÓN 2: QUIÉNES SOMOS ── */}
    <motion.section {...fade} className="mb-20">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
        Quiénes somos
      </h2>
      <p className="font-body text-sm md:text-base text-muted-foreground mb-10 max-w-xl">
        Un equipo que combina psicología y tecnología para acompañar a familias en momentos reales.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {founders.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="bg-card rounded-2xl border border-border/60 overflow-hidden shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-all duration-300"
          >
            <div className="overflow-hidden" style={{ height: "22rem" }}>
              <img
                src={f.photo}
                alt={`${f.name} – ${f.badge}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-7">
              <div className="min-h-[2.5rem] flex items-start">
                <span className="font-body text-[11px] font-bold uppercase tracking-wider text-secondary">
                  {f.badge}
                </span>
              </div>
              <h4 className="mt-2 font-display text-lg font-bold text-foreground">
                {f.name}
              </h4>
              <p className="mt-0.5 font-body text-[11px] font-semibold text-muted-foreground/70 uppercase tracking-wider">{f.subtitle}</p>
              <p className="mt-2.5 font-body text-sm text-muted-foreground leading-relaxed">
                {f.bio}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>

    {/* ── SECCIÓN 3: QUÉ ESTAMOS CONSTRUYENDO ── */}
    <motion.section {...fade} className="mb-20">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-5">
        Qué estamos construyendo
      </h2>
      <div className="space-y-4 max-w-2xl">
        <p className="font-body text-base text-muted-foreground leading-relaxed">
          Calmy será un asistente conversacional diseñado para orientar a familias de niños con diagnóstico profesional de TEA o TDAH en su día a día.
        </p>
        <p className="font-body text-base text-muted-foreground leading-relaxed">
          Combinará conocimiento psicológico estructurado con el contexto que la familia decida compartir para ofrecer orientación más clara, práctica y humana.
        </p>
        <p className="font-body text-base text-muted-foreground leading-relaxed">
          No busca reemplazar a ningún profesional. Busca acompañar cuando más lo necesitas: en la duda cotidiana, en la incertidumbre y en esos momentos en que no sabes cómo actuar.
        </p>
      </div>
    </motion.section>

    {/* ── SECCIÓN 4: CÓMO LO HACEMOS ── */}
    <motion.section {...fade} className="mb-20">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
        Cómo lo hacemos
      </h2>
      <div className="grid sm:grid-cols-3 gap-5">
        {pillars.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="bg-card rounded-2xl border border-border/60 p-7 shadow-[var(--shadow-soft)]"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center mb-4">
              <p.icon className="text-primary" size={20} />
            </div>
            <h4 className="font-display text-base font-bold text-foreground mb-2">
              {p.title}
            </h4>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {p.text}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>

    {/* ── SECCIÓN 5: NUESTRO COMPROMISO ── */}
    <motion.section {...fade}>
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
        Nuestro compromiso
      </h2>
      <ul className="space-y-4 max-w-2xl">
        {commitments.map((c, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <ShieldCheck className="text-secondary" size={12} />
            </div>
            <span className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
              {c}
            </span>
          </li>
        ))}
      </ul>
    </motion.section>
  </PageLayout>
);

export default SobreCalmy;
