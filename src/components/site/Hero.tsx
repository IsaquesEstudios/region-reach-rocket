import { whatsappLink } from "@/lib/site";
import heroImg from "@/assets/hero-fachada.jpg";

export function Hero() {
  return (
    <section className="relative pt-16 sm:pt-20 pb-20 sm:pb-28 border-b border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-7 animate-slide-up">
          <div className="inline-block px-3 py-1 bg-primary/5 border border-primary/10 text-primary text-[10px] font-mono mb-6 uppercase tracking-widest">
            Engenharia & Manutenção Predial · Fortaleza/CE
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.92] text-balance mb-8 uppercase italic">
            Transformando Espaços com <span className="text-primary">Inteligência</span> em Manutenção
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-[52ch] mb-10 leading-relaxed">
            Serviços especializados de pintura, elétrica, hidráulica, drywall, reformas e manutenção preventiva — com rigor técnico, prazos garantidos e segurança conforme NR10/NR35.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a
              href={whatsappLink("Olá! Gostaria de agendar uma visita técnica.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-primary text-primary-foreground px-6 sm:px-8 py-4 font-bold uppercase tracking-wider text-xs sm:text-sm inline-flex items-center gap-3 hover:bg-foreground transition-colors"
            >
              Agendar Visita Técnica
              <span className="text-accent group-hover:translate-x-1 transition-transform" aria-hidden>→</span>
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary text-primary px-6 sm:px-8 py-4 font-bold uppercase tracking-wider text-xs sm:text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative animate-slide-up [animation-delay:120ms]">
          <img
            src={heroImg}
            alt="Profissional Chico Resolve em manutenção de fachada predial em Fortaleza"
            width={1080}
            height={1350}
            fetchPriority="high"
            className="w-full aspect-[4/5] object-cover outline-1 -outline-offset-1 outline-black/5 relative z-10"
          />
          <div className="absolute -bottom-5 -left-5 bg-card p-6 border border-border shadow-2xl z-20 hidden md:block">
            <p className="font-mono text-[10px] text-muted-foreground uppercase mb-1.5">Status operacional</p>
            <p className="text-xl font-black text-primary uppercase italic tracking-tighter">100% Ativo</p>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/[0.02] -z-10 border-l border-primary/5" aria-hidden />
    </section>
  );
}
