import { ExternalLink, Music2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { TIKTOK_URL } from "@/config/socialLinks";
import { cn } from "@/lib/utils";

const TikTokSection = () => (
  <section className="border-b border-border/60 bg-[hsl(var(--surface-warm))] py-8 md:py-10">
    <div className="section-container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-foreground text-white">
          <Music2 size={20} />
        </div>
        <div>
          <p className="font-display text-xl font-bold text-foreground">Conoce Calmy en contenido breve</p>
          <p className="mt-1 max-w-2xl font-body text-sm leading-relaxed text-muted-foreground">
            Compartimos ideas para comprender antes de actuar y avances del proyecto.
          </p>
        </div>
      </div>

      <a
        href={TIKTOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(buttonVariants({ variant: "calm-outline", size: "lg" }), "w-full bg-card md:w-auto")}
      >
        Seguir a @neurocalmy.calm en TikTok
        <ExternalLink size={16} />
      </a>
    </div>
  </section>
);

export default TikTokSection;
