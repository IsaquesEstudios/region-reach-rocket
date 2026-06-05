import { site, whatsappLink } from "@/lib/site";
import { Phone } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto rounded-3xl bg-primary-dark text-primary-foreground px-8 sm:px-12 lg:px-16 py-14 sm:py-16 grid lg:grid-cols-2 gap-10 items-center relative overflow-hidden">
        {/* decorative circle */}
        <div className="absolute -right-32 -bottom-32 size-96 rounded-full bg-accent/15 blur-3xl" aria-hidden />
        <div className="relative">
          <span className="inline-block rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest mb-4">
            Próximo passo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-5">
            Tem um projeto em mente?
          </h2>
          <p className="text-lg text-white/85 max-w-xl leading-relaxed">
            Fale com um especialista agora. Visita técnica e orçamento gratuitos em Teresina e Grande Teresina.
          </p>
        </div>
        <div className="relative flex flex-col sm:flex-row gap-4 lg:justify-end">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-accent text-accent-foreground font-bold tracking-tight px-8 py-4 text-sm hover:bg-accent/90 transition-colors shadow-lg shadow-black/20"
          >
            Falar no WhatsApp
          </a>
          <a
            href={`tel:${site.phoneE164}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 font-bold tracking-tight px-8 py-4 text-sm hover:bg-white/10 transition-colors"
          >
            <Phone className="size-4" aria-hidden /> {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
