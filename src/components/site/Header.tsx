import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { drywallSubservices, eletricaSubservices, hidraulicaSubservices, pinturaSubservices, services, site, whatsappLink } from "@/lib/site";
import logo from "@/assets/logo-chico-resolve.png";

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3" aria-label={`${site.name} — início`}>
          <img
            src={logo}
            alt={`Logo ${site.name}`}
            width={180}
            height={36}
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1 text-sm font-semibold" aria-label="Navegação principal">
          <Link to="/" className="px-4 py-2 rounded-full hover:text-primary transition-colors" activeOptions={{ exact: true }} activeProps={{ className: "text-primary" }}>
            Home
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              to="/servicos"
              className="px-4 py-2 rounded-full hover:text-primary transition-colors inline-flex items-center gap-1"
              activeProps={{ className: "text-primary" }}
            >
              Serviços
              <ChevronDown className="size-3.5" aria-hidden />
            </Link>
            {servicesOpen && (
              <div className="absolute left-0 top-full pt-3 w-80">
                <ul className="bg-card border border-border shadow-xl rounded-2xl p-2 overflow-hidden">
                  {services.map((s) => (
                    <li key={s.slug}>
                      {s.slug === "pintura" ? (
                        <Link to="/servicos/pintura" className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-xl hover:bg-surface">
                          <span className="text-primary text-xs font-bold w-7">{s.code}</span>
                          <span>{s.shortTitle}</span>
                        </Link>
                      ) : s.slug === "eletrica" ? (
                        <Link to="/servicos/eletrica" className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-xl hover:bg-surface">
                          <span className="text-primary text-xs font-bold w-7">{s.code}</span>
                          <span>{s.shortTitle}</span>
                        </Link>
                      ) : s.slug === "hidraulica" ? (
                        <Link to="/servicos/hidraulica" className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-xl hover:bg-surface">
                          <span className="text-primary text-xs font-bold w-7">{s.code}</span>
                          <span>{s.shortTitle}</span>
                        </Link>
                      ) : s.slug === "drywall" ? (
                        <Link to="/servicos/drywall" className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-xl hover:bg-surface">
                          <span className="text-primary text-xs font-bold w-7">{s.code}</span>
                          <span>{s.shortTitle}</span>
                        </Link>
                      ) : (
                        <Link to="/servicos/$slug" params={{ slug: s.slug }} className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-xl hover:bg-surface">
                          <span className="text-primary text-xs font-bold w-7">{s.code}</span>
                          <span>{s.shortTitle}</span>
                        </Link>
                      )}
                      {s.slug === "pintura" && (
                        <ul className="pl-10 pb-2 space-y-0.5 border-l border-border ml-4 mt-1">
                          {pinturaSubservices.map((p) => (
                            <li key={p.slug}>
                              <Link to="/servicos/pintura/$pinturaSlug" params={{ pinturaSlug: p.slug }} className="block px-3 py-1.5 text-xs text-muted-foreground hover:text-primary">
                                {p.shortTitle}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                      {s.slug === "eletrica" && (
                        <ul className="pl-10 pb-2 space-y-0.5 border-l border-border ml-4 mt-1">
                          {eletricaSubservices.map((e) => (
                            <li key={e.slug}>
                              <Link to="/servicos/eletrica/$eletricaSlug" params={{ eletricaSlug: e.slug }} className="block px-3 py-1.5 text-xs text-muted-foreground hover:text-primary">
                                {e.shortTitle}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                      {s.slug === "hidraulica" && (
                        <ul className="pl-10 pb-2 space-y-0.5 border-l border-border ml-4 mt-1">
                          {hidraulicaSubservices.map((h) => (
                            <li key={h.slug}>
                              <Link to="/servicos/hidraulica/$hidraulicaSlug" params={{ hidraulicaSlug: h.slug }} className="block px-3 py-1.5 text-xs text-muted-foreground hover:text-primary">
                                {h.shortTitle}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                      {s.slug === "drywall" && (
                        <ul className="pl-10 pb-2 space-y-0.5 border-l border-border ml-4 mt-1">
                          {drywallSubservices.map((d) => (
                            <li key={d.slug}>
                              <Link to="/servicos/drywall/$drywallSlug" params={{ drywallSlug: d.slug }} className="block px-3 py-1.5 text-xs text-muted-foreground hover:text-primary">
                                {d.shortTitle}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <Link to="/contato" className="px-4 py-2 rounded-full hover:text-primary transition-colors" activeProps={{ className: "text-primary" }}>
            Contato
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${site.phoneE164}`}
            className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
          >
            <Phone className="size-4" aria-hidden />
            {site.phone}
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-xs font-bold hover:bg-primary-dark transition-colors"
          >
            Agendar Visita
          </a>
          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={open}
            className="lg:hidden p-2 rounded-full hover:bg-surface"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1 text-sm" aria-label="Navegação mobile">
            <Link to="/" onClick={() => setOpen(false)} className="block px-3 py-2.5 rounded-lg hover:bg-surface">Home</Link>
            <Link to="/servicos" onClick={() => setOpen(false)} className="block px-3 py-2.5 rounded-lg hover:bg-surface font-semibold">Serviços</Link>
            <ul className="pl-3 border-l border-border ml-3 space-y-0.5">
              {services.map((s) => (
                <li key={s.slug}>
                  {s.slug === "pintura" ? (
                    <Link to="/servicos/pintura" onClick={() => setOpen(false)} className="block px-3 py-2 text-muted-foreground hover:text-primary">
                      <span className="text-primary text-xs font-bold mr-3">{s.code}</span>{s.shortTitle}
                    </Link>
                  ) : s.slug === "eletrica" ? (
                    <Link to="/servicos/eletrica" onClick={() => setOpen(false)} className="block px-3 py-2 text-muted-foreground hover:text-primary">
                      <span className="text-primary text-xs font-bold mr-3">{s.code}</span>{s.shortTitle}
                    </Link>
                  ) : s.slug === "hidraulica" ? (
                    <Link to="/servicos/hidraulica" onClick={() => setOpen(false)} className="block px-3 py-2 text-muted-foreground hover:text-primary">
                      <span className="text-primary text-xs font-bold mr-3">{s.code}</span>{s.shortTitle}
                    </Link>
                  ) : s.slug === "drywall" ? (
                    <Link to="/servicos/drywall" onClick={() => setOpen(false)} className="block px-3 py-2 text-muted-foreground hover:text-primary">
                      <span className="text-primary text-xs font-bold mr-3">{s.code}</span>{s.shortTitle}
                    </Link>
                  ) : (
                    <Link to="/servicos/$slug" params={{ slug: s.slug }} onClick={() => setOpen(false)} className="block px-3 py-2 text-muted-foreground hover:text-primary">
                      <span className="text-primary text-xs font-bold mr-3">{s.code}</span>{s.shortTitle}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <Link to="/contato" onClick={() => setOpen(false)} className="block px-3 py-2.5 rounded-lg hover:bg-surface">Contato</Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-3 mt-2 rounded-full bg-primary text-primary-foreground text-center font-bold text-xs"
            >
              Agendar Visita no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
