import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import { QuoteForm } from "@/components/site/QuoteForm";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Chico Resolve | Manutenção Predial Fortaleza" },
      { name: "description", content: "Fale com a Chico Resolve em Fortaleza/CE. WhatsApp (86) 98154-7477, email contato@chicoresolve.com.br ou Instagram @chico.resolve. Visita técnica gratuita." },
      { property: "og:title", content: "Contato — Chico Resolve" },
      { property: "og:description", content: "WhatsApp, email e visita técnica gratuita em Fortaleza." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <>
      <section className="pt-16 pb-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="font-mono text-xs text-primary uppercase tracking-widest">Fale com a engenharia</p>
          <h1 className="mt-4 text-5xl sm:text-6xl font-black uppercase italic tracking-tighter">
            Vamos <span className="text-primary">conversar</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Visita técnica e orçamento gratuitos em Fortaleza e região metropolitana. Resposta em até 24h úteis.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="group bg-card border border-border p-6 hover:border-primary transition-colors">
              <MessageCircle className="size-7 text-primary mb-4" aria-hidden />
              <h2 className="font-black uppercase mb-2">WhatsApp</h2>
              <p className="text-sm text-muted-foreground mb-4">Mais rápido. Resposta em minutos durante o horário comercial.</p>
              <span className="text-[11px] font-mono text-primary uppercase group-hover:underline">{site.phone} →</span>
            </a>
            <a href={`tel:${site.phoneE164}`} className="group bg-card border border-border p-6 hover:border-primary transition-colors">
              <Phone className="size-7 text-primary mb-4" aria-hidden />
              <h2 className="font-black uppercase mb-2">Telefone</h2>
              <p className="text-sm text-muted-foreground mb-4">Para conversas técnicas mais longas.</p>
              <span className="text-[11px] font-mono text-primary uppercase group-hover:underline">{site.phone} →</span>
            </a>
            <a href={`mailto:${site.email}`} className="group bg-card border border-border p-6 hover:border-primary transition-colors">
              <Mail className="size-7 text-primary mb-4" aria-hidden />
              <h2 className="font-black uppercase mb-2">E-mail</h2>
              <p className="text-sm text-muted-foreground mb-4">Para envio de projetos, plantas e orçamentos formais.</p>
              <span className="text-[11px] font-mono text-primary uppercase group-hover:underline break-all">{site.email} →</span>
            </a>
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="group bg-card border border-border p-6 hover:border-primary transition-colors">
              <Instagram className="size-7 text-primary mb-4" aria-hidden />
              <h2 className="font-black uppercase mb-2">Instagram</h2>
              <p className="text-sm text-muted-foreground mb-4">Veja projetos e antes/depois recentes.</p>
              <span className="text-[11px] font-mono text-primary uppercase group-hover:underline">{site.instagram} →</span>
            </a>

            <div className="sm:col-span-2 bg-surface border border-border p-6">
              <MapPin className="size-7 text-primary mb-4" aria-hidden />
              <h2 className="font-black uppercase mb-2">Atendimento</h2>
              <p className="text-sm text-muted-foreground">{site.city}, {site.region} — Brasil. Atendemos toda a região metropolitana de Fortaleza.</p>
            </div>
          </div>

          <aside className="lg:col-span-2">
            <div className="bg-surface p-7 border border-border lg:sticky lg:top-28">
              <h2 className="text-xl font-black uppercase mb-2">Solicitar orçamento</h2>
              <p className="text-xs text-muted-foreground mb-5">Resposta em até 24h úteis</p>
              <QuoteForm />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
