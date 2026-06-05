import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Toaster } from "sonner";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { AuthProvider } from "@/hooks/use-auth";
import { site } from "@/lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-widest">Erro 404</p>
        <h1 className="mt-4 text-5xl font-extrabold tracking-tight">Página não encontrada</h1>
        <p className="mt-3 text-sm text-muted-foreground">A página que você procura não existe ou foi movida.</p>
        <a href="/" className="mt-6 inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-foreground transition-colors">
          Voltar ao início
        </a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight">Algo deu errado ao carregar a página</h1>
        <p className="mt-2 text-sm text-muted-foreground">Tente recarregar ou volte ao início.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="bg-primary text-primary-foreground px-5 py-2.5 text-xs font-bold uppercase tracking-wider">Tentar novamente</button>
          <a href="/" className="border border-border px-5 py-2.5 text-xs font-bold uppercase tracking-wider">Ir para Home</a>
        </div>
      </div>
    </div>
  );
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description: site.description,
  image: "/og-default.jpg",
  telephone: site.phoneE164,
  email: site.email,
  url: "/",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  areaServed: {
    "@type": "City",
    name: "Teresina",
  },
  sameAs: [site.instagramUrl],
  priceRange: "$$",
  serviceType: [
    "Pintura predial",
    "Serviços elétricos",
    "Hidráulica",
    "Drywall e gesso",
    "Juntas de dilatação",
    "Segurança eletrônica",
    "Reformas",
    "Manutenção predial",
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#064e3b" },
      { title: `${site.name} — ${site.tagline} | Teresina` },
      { name: "description", content: site.description },
      { name: "author", content: site.name },
      { property: "og:site_name", content: site.name },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/og-default.jpg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationJsonLd),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppShell />
        <Toaster richColors position="top-right" />
      </AuthProvider>
    </QueryClientProvider>
  );
}

function AppShell() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isAdmin = pathname.startsWith("/admin");
  if (isAdmin) {
    return <Outlet />;
  }
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
