import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { siteUrl, whatsappLink } from "@/lib/site";
import { Mail, MessageCircle } from "lucide-react";
import { PostCard } from "@/components/blog/PostCard";
import { listPublicPosts } from "@/lib/posts.functions";

function slugify(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const Route = createFileRoute("/autor/$slug")({
  loader: async ({ params }) => {
    const posts = await listPublicPosts();
    const byAuthor = posts.filter(
      (p) => p.author_name && slugify(p.author_name) === params.slug,
    );
    const name = byAuthor[0]?.author_name;
    if (!name) throw notFound();
    return { name, posts: byAuthor.slice(0, 9) };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const { name } = loaderData;
    const title = `${name} — Autor | Chico Resolve`;
    const description = `Artigos e conteúdos publicados por ${name} no blog da Chico Resolve.`;
    const url = `${siteUrl}/autor/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "profile" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name,
            url,
          }),
        },
      ],
    };
  },
  component: AutorPage,
  errorComponent: ({ error }) => (
    <div className="max-w-3xl mx-auto py-20 px-4 text-center">
      <h1 className="text-2xl font-bold">Erro ao carregar autor</h1>
      <p className="text-muted-foreground mt-2">{error.message}</p>
    </div>
  ),
  notFoundComponent: () => (
    <div className="max-w-3xl mx-auto py-20 px-4 text-center">
      <h1 className="text-2xl font-bold">Autor não encontrado</h1>
      <Link to="/blog" className="text-primary mt-4 inline-block">
        Voltar ao blog
      </Link>
    </div>
  ),
});

function AutorPage() {
  const { name, posts } = Route.useLoaderData();

  return (
    <>
      <section className="bg-gradient-to-b from-surface to-background py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row gap-10 items-center md:items-start">
          <div className="shrink-0">
            <div className="size-40 md:size-48 rounded-2xl bg-primary/10 flex items-center justify-center text-5xl font-extrabold text-primary border-4 border-card shadow-xl">
              {name[0]}
            </div>
          </div>
          <div className="text-center md:text-left flex-1">
            <span className="inline-block rounded-full bg-primary/10 text-primary px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest mb-4">
              Autor
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              {name}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Conteúdos sobre manutenção predial, reforma, pintura e obras em
              Teresina/PI.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href={whatsappLink(`Olá ${name}, gostaria de falar sobre um serviço.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-bold hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="size-4" /> WhatsApp
              </a>
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-bold hover:bg-surface transition-colors"
              >
                <Mail className="size-4" /> Entrar em contato
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-8">
            Artigos de {name}
          </h2>
          {posts.length === 0 ? (
            <p className="text-muted-foreground">Nenhum artigo publicado ainda.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
