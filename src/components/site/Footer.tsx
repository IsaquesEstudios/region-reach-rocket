import { Link } from "@tanstack/react-router";
import { Instagram, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { services, site, whatsappLink } from "@/lib/site";
import logo from "@/assets/chico-resolve-logo-branco.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-primary-dark text-primary-foreground pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logo.url} alt={`Logo ${site.name}`} width={200} height={40} className="h-12 w-auto mb-5" />
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              Inteligência em manutenção predial em Fortaleza/CE. Engenharia técnica para condomínios, indústrias, construtoras e arquitetos.
            </p>
            <div className="flex gap-3">
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex size-10 rounded-full bg-white/10 hover:bg-accent hover:text-accent-foreground items-center justify-center transition-colors">
                <Instagram className="size-4" aria-hidden />
              </a>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="inline-flex size-10 rounded-full bg-white/10 hover:bg-accent hover:text-accent-foreground items-center justify-center transition-colors">
                <MessageCircle className="size-4" aria-hidden />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="font-bold text-sm tracking-tight text-accent mb-5 uppercase">Serviços</h2>
            <ul className="space-y-2.5 text-sm text-white/75">
              {services.map((s) => (
                <li key={s.slug}>
                  {s.slug === "pintura" ? (
                    <Link to="/servicos/pintura" className="hover:text-white transition-colors">{s.shortTitle}</Link>
                  ) : s.slug === "eletrica" ? (
                    <Link to="/servicos/eletrica" className="hover:text-white transition-colors">{s.shortTitle}</Link>
                  ) : s.slug === "hidraulica" ? (
                    <Link to="/servicos/hidraulica" className="hover:text-white transition-colors">{s.shortTitle}</Link>
                  ) : s.slug === "drywall" ? (
                    <Link to="/servicos/drywall" className="hover:text-white transition-colors">{s.shortTitle}</Link>
                  ) : (
                    <Link to="/servicos/$slug" params={{ slug: s.slug }} className="hover:text-white transition-colors">{s.shortTitle}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h2 className="font-bold text-sm tracking-tight text-accent mb-5 uppercase">Empresa</h2>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li><Link to="/servicos" className="hover:text-white">Catálogo de serviços</Link></li>
              <li><Link to="/contato" className="hover:text-white">Contato</Link></li>
              <li>Construtoras</li>
              <li>Condomínios</li>
              <li>Indústrias e empresas</li>
              <li>Arquitetos e engenheiros</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h2 className="font-bold text-sm tracking-tight text-accent mb-5 uppercase">Contato</h2>
            <ul className="space-y-3 text-sm text-white/75">
              <li>
                <a href={`tel:${site.phoneE164}`} className="flex items-center gap-2 hover:text-white">
                  <Phone className="size-4 shrink-0" aria-hidden /> {site.phone}
                </a>
              </li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
                  <MessageCircle className="size-4 shrink-0" aria-hidden /> WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-white break-all">
                  <Mail className="size-4 shrink-0" aria-hidden /> {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1">
                <MapPin className="size-4 shrink-0 mt-0.5" aria-hidden /> {site.city}, {site.region}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {site.name} · Inteligência em Manutenção Predial
          </p>
          <Link to="/contato" className="text-xs text-white/60 hover:text-accent">
            Solicitar Orçamento →
          </Link>
        </div>
      </div>
    </footer>
  );
}
