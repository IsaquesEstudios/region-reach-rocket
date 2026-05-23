import { Link } from "@tanstack/react-router";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import { pinturaSubservices, services, site, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="font-black text-2xl tracking-tighter mb-4">
              <span className="italic">Chico</span>
              <span className="text-accent">·</span>
              Resolve
            </div>
            <p className="text-sm text-background/70 leading-relaxed mb-6">
              Inteligência em manutenção predial em Fortaleza/CE. Engenharia técnica para condomínios, indústrias, construtoras e arquitetos.
            </p>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-background/70 hover:text-accent uppercase"
            >
              <Instagram className="size-4" aria-hidden /> {site.instagram}
            </a>
          </div>

          <div>
            <h2 className="font-bold uppercase text-xs tracking-widest text-accent mb-5">Serviços</h2>
            <ul className="space-y-2.5 text-sm text-background/70">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    to={s.slug === "pintura" ? "/servicos/pintura" : "/servicos/$slug"}
                    params={s.slug === "pintura" ? undefined : { slug: s.slug }}
                    className="hover:text-background transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-bold uppercase text-xs tracking-widest text-accent mb-5">Pintura</h2>
            <ul className="space-y-2.5 text-sm text-background/70">
              {pinturaSubservices.map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/servicos/pintura/$pinturaSlug"
                    params={{ pinturaSlug: p.slug }}
                    className="hover:text-background transition-colors"
                  >
                    {p.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <h2 className="font-bold uppercase text-xs tracking-widest text-accent mb-5">Segmentos</h2>
            <ul className="space-y-2.5 text-sm text-background/70">
              <li>Construtoras</li>
              <li>Arquitetos e Engenheiros</li>
              <li>Indústrias e Empresas</li>
              <li>Condomínios</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold uppercase text-xs tracking-widest text-accent mb-5">Contato</h2>
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <a href={`tel:${site.phoneE164}`} className="flex items-center gap-2 hover:text-background font-mono">
                  <Phone className="size-4 shrink-0" aria-hidden /> {site.phone}
                </a>
              </li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-background">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-background">
                  <Mail className="size-4 shrink-0" aria-hidden /> {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2 pt-2 text-xs">
                <MapPin className="size-4 shrink-0 mt-0.5" aria-hidden /> {site.city}, {site.region}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-background/10 pt-8 gap-4">
          <p className="text-[10px] font-mono text-background/40 uppercase tracking-widest">
            © {new Date().getFullYear()} {site.name} · Inteligência em Manutenção Predial
          </p>
          <Link to="/contato" className="text-[10px] font-mono text-background/40 uppercase tracking-widest hover:text-accent">
            Solicitar Orçamento
          </Link>
        </div>
      </div>
    </footer>
  );
}
