import { site, whatsappLink } from "@/lib/site";

export function CtaBanner() {
  return (
    <section className="py-20 sm:py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-mono text-xs text-accent uppercase mb-4">06/ Próximo passo</p>
          <h2 className="text-4xl sm:text-5xl font-black uppercase italic tracking-tighter leading-[0.95] mb-6">
            Tem um projeto em mente?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-xl">
            Fale com um especialista agora. Visita técnica e orçamento gratuitos em Fortaleza e região metropolitana.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-accent text-accent-foreground font-bold uppercase tracking-wider px-8 py-5 text-sm hover:scale-[1.02] transition-transform"
          >
            Falar no WhatsApp
          </a>
          <a
            href={`tel:${site.phoneE164}`}
            className="inline-flex items-center justify-center border-2 border-primary-foreground/30 font-bold uppercase tracking-wider px-8 py-5 text-sm hover:bg-primary-foreground/10 transition-colors"
          >
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
