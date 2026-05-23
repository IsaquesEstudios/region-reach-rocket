import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { services, site, whatsappLink } from "@/lib/site";
import logo from "@/assets/logo-chico-resolve.png";

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label={`${site.name} — início`}>
          <img
            src={logo}
            alt={`Logo ${site.name}`}
            width={180}
            height={36}
            className="h-7 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium" aria-label="Navegação principal">
          <Link to="/" className="hover:text-primary transition-colors" activeOptions={{ exact: true }} activeProps={{ className: "text-primary" }}>
            Home
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              to="/servicos"
              className="hover:text-primary transition-colors inline-flex items-center gap-1"
              activeProps={{ className: "text-primary" }}
            >
              Serviços
              <span className="text-xs">↓</span>
            </Link>
            {servicesOpen && (
              <div className="absolute left-0 top-full pt-3 w-72">
                <ul className="bg-card border border-border shadow-xl p-2">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to="/servicos/$slug"
                        params={{ slug: s.slug }}
                        className="flex items-center gap-3 px-3 py-2.5 text-sm hover:bg-surface rounded-xs"
                      >
                        <span className="font-mono text-[10px] text-primary w-7">{s.code}</span>
                        <span>{s.shortTitle}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <Link to="/contato" className="hover:text-primary transition-colors" activeProps={{ className: "text-primary" }}>
            Contato
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${site.phoneE164}`}
            className="hidden md:inline-flex items-center gap-2 text-sm font-mono font-bold text-primary hover:underline"
          >
            <Phone className="size-4" aria-hidden />
            {site.phone}
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex bg-primary text-primary-foreground px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-foreground transition-colors"
          >
            Agendar Visita
          </a>
          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={open}
            className="lg:hidden p-2"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1 text-sm" aria-label="Navegação mobile">
            <Link to="/" onClick={() => setOpen(false)} className="block px-3 py-2.5 hover:bg-surface">Home</Link>
            <Link to="/servicos" onClick={() => setOpen(false)} className="block px-3 py-2.5 hover:bg-surface font-medium">Serviços</Link>
            <ul className="pl-3 border-l border-border ml-3 space-y-1">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/servicos/$slug"
                    params={{ slug: s.slug }}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 text-muted-foreground hover:text-primary"
                  >
                    <span className="font-mono text-[10px] text-primary mr-3">{s.code}</span>
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/contato" onClick={() => setOpen(false)} className="block px-3 py-2.5 hover:bg-surface">Contato</Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-3 mt-2 bg-primary text-primary-foreground text-center font-bold uppercase text-xs tracking-wider"
            >
              Agendar Visita no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
