import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { PostCard, type PostCardData } from "@/components/blog/PostCard";
import { siteUrl, whatsappLink } from "@/lib/site";
import { Mail, MessageCircle } from "lucide-react";

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
    const { data: profiles, error } = await supabase
      .from("profiles")
      .select("id, full_name, avatar_url, bio, role");
    if (error) throw error;

    const profile = (profiles ?? []).find(
      (p) => p.full_name && slugify(p.full_name) === params.slug,
    );
    if (!profile) throw notFound();

    const { data: posts } = await supabase
      .from("posts")
      .select(
        "id,title,slug,excerpt,cover_image_url,reading_time,published_at,category:categories(name,slug,color),author:profiles(full_name,avatar_url)",
      )
      .eq("author_id", profile.id)
      .eq("status", "published")
      .order("published_at", { ascending: false })
      .limit(9);

    return { profile, posts: (posts ?? []) as unknown as PostCardData[] };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const { profile } = loaderData;
    const name = profile.full_name ?? "Autor";
    const title = `${name} — Autor | Chico Resolve`;
    const description =
      profile.bio ??
      `Artigos e conteúdos publicados por ${name} no blog da Chico Resolve.`;
    const url = `${siteUrl}/autor/${params.slug}`;
    const image = profile.avatar_url ?? undefined;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "profile" },
        { property: "og:url", content: url },
        ...(image
          ? [
              { property: "og:image", content: image },
              { name: "twitter:image", content: image },
            ]
          : []),
        { name: "twitter:card", content: image ? "summary_large_image" : "summary" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name,
            description: profile.bio ?? undefined,
            image: profile.avatar_url ?? undefined,
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
  const { profile, posts } = Route.useLoaderData();
  const name = profile.full_name ?? "Autor";

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-surface to-background py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row gap-10 items-center md:items-start">
          <div className="shrink-0">
            {profile.avatar_url ? (
              <img
                src={profile.avatar_url}
                alt={`Foto de ${name}`}
                className="size-40 md:size-48 rounded-2xl object-cover border-4 border-card shadow-xl"
              />
            ) : (
              <div className="size-40 md:size-48 rounded-2xl bg-primary/10 flex items-center justify-center text-5xl font-extrabold text-primary border-4 border-card shadow-xl">
                {name[0]}
              </div>
            )}
          </div>
          <div className="text-center md:text-left flex-1">
            <span className="inline-block rounded-full bg-primary/10 text-primary px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest mb-4">
              Autor
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              {name}
            </h1>
            {profile.bio ? (
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {profile.bio}
              </p>
            ) : (
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Conteúdos sobre manutenção predial, reforma, pintura e obras em
                Teresina/PI.
              </p>
            )}
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

      {/* Posts */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-8">
            Artigos de {name}
          </h2>
          {posts.length === 0 ? (
            <p className="text-muted-foreground">Nenhum artigo publicado ainda.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post: PostCardData) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
