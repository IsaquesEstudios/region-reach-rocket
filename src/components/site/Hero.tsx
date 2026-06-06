import { whatsappLink, site } from "@/lib/site";
import { Check, Phone } from "lucide-react";

export function Hero() {
  const heroImg = "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2400&auto=format&fit=crop";

  return (
    <section className="relative isolate overflow-hidden">
      {/* Background image */}
      <img
        src={heroImg}
        alt="Manutenção predial profissional em Teresina — Chico Resolve"
        width={2400}
        height={1400}
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover -z-20"
      />
      {/* Green overlay */}
      <div className="absolute inset-0 -z-10 hero-overlay" aria-hidden />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-40 sm:pb-48 lg:pb-56 relative">
        <div className="max-w-3xl animate-slide-up text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest mb-7">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden /> Engenharia & Manutenção Predial · Teresina
          </span>

          <h1 className="text-[2.6rem] sm:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight text-balance mb-7">
            Manutenção Predial Inteligente.
            <br />
            <span className="text-accent">Para o seu imóvel.</span>
          </h1>

          <p className="text-base sm:text-lg text-white/85 max-w-[55ch] leading-relaxed mb-9">
            Pintura, elétrica, hidráulica, drywall, reformas e manutenção preventiva com rigor técnico, prazos garantidos e segurança conforme NR10/NR35 — uma só empresa para toda a sua obra em Teresina.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 mb-10">
            <a
              href={whatsappLink("Olá! Gostaria de agendar uma visita técnica.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-4 font-bold text-sm hover:bg-accent/90 transition-colors shadow-lg shadow-black/20"
            >
              Agendar Visita Técnica
              <span className="group-hover:translate-x-1 transition-transform" aria-hidden>→</span>
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 text-white px-7 py-4 font-bold text-sm hover:bg-white/10 transition-colors"
            >
              WhatsApp
            </a>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-white/90">
            {["Licenciada NR10/NR35", "Garantia formal", "Orçamento sem custo"].map((t) => (
              <li key={t} className="inline-flex items-center gap-2">
                <Check className="size-4 text-accent" aria-hidden /> {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Floating contact card */}
        <a
          href={`tel:${site.phoneE164}`}
          className="hidden md:flex absolute bottom-10 right-6 lg:right-12 items-center gap-4 bg-white rounded-2xl shadow-2xl shadow-black/20 px-6 py-4 hover:scale-[1.02] transition-transform"
        >
          <span className="inline-flex size-12 rounded-full bg-primary/10 text-primary items-center justify-center">
            <Phone className="size-5" aria-hidden />
          </span>
          <span className="text-left">
            <span className="block text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Visita Técnica Gratuita</span>
            <span className="block text-lg font-extrabold text-foreground tracking-tight">{site.phone}</span>
          </span>
        </a>
      </div>
    </section>
  );
}
