import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect } from "react";
import { Clock, Eye, ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { formatDate } from "@/lib/blog/utils";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const { data, error } = await supabase
      .from("posts")
      .select("id,title,slug,content,excerpt,cover_image_url,reading_time,published_at,updated_at,views,meta_title,meta_description,og_image_url,category:categories(name,slug,color),author:profiles(id,full_name,avatar_url,bio)")
      .eq("slug", params.slug)
      .eq("status", "published")
      .maybeSingle();
    if (error) throw error;
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const title = loaderData.meta_title || loaderData.title;
    const description = loaderData.meta_description || loaderData.excerpt || "";
    const image = loaderData.og_image_url || loaderData.cover_image_url || undefined;
    const url = `/blog/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        ...(image ? [{ property: "og:image", content: image }, { name: "twitter:image", content: image }] : []),
        { name: "twitter:card", content: image ? "summary_large_image" : "summary" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        ...(loaderData.author?.full_name ? [{ name: "author", content: loaderData.author.full_name }] : []),
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: loaderData.title,
            description,
            image: image ? [image] : undefined,
            datePublished: loaderData.published_at,
            dateModified: loaderData.updated_at ?? loaderData.published_at,
            author: loaderData.author?.full_name
              ? { "@type": "Person", name: loaderData.author.full_name }
              : undefined,
            articleSection: loaderData.category?.name,
          }),
        },
      ],
    };
  },
  component: PostPage,
  errorComponent: ({ error }) => (
    <div className="max-w-3xl mx-auto py-20 px-4 text-center">
      <h1 className="text-2xl font-bold">Erro ao carregar artigo</h1>
      <p className="text-muted-foreground mt-2">{error.message}</p>
    </div>
  ),
  notFoundComponent: () => (
    <div className="max-w-3xl mx-auto py-20 px-4 text-center">
      <h1 className="text-2xl font-bold">Artigo não encontrado</h1>
      <Link to="/blog" className="text-primary mt-4 inline-block">Voltar ao blog</Link>
    </div>
  ),
});

function PostPage() {
  const post = Route.useLoaderData();

  useEffect(() => {
    if (post?.slug) supabase.rpc("increment_post_views", { post_slug: post.slug });
  }, [post?.slug]);

  if (!post) return null;

  return (
    <article className="pb-20">
      <div className="relative h-[40vh] min-h-[300px] bg-muted">
        {post.cover_image_url && (
          <img src={post.cover_image_url} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-10 w-full text-white">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold mb-4 opacity-80 hover:opacity-100">
              <ArrowLeft className="size-4" /> Blog
            </Link>
            {post.category && (
              <span
                className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full mb-3"
                style={{ backgroundColor: post.category.color ?? "#3B82F6" }}
              >
                {post.category.name}
              </span>
            )}
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">{post.title}</h1>
            {post.excerpt && <p className="mt-3 text-lg opacity-90 max-w-2xl">{post.excerpt}</p>}
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 mt-10">
        <div className="flex flex-wrap items-center gap-4 pb-6 border-b border-border">
          <div className="flex items-center gap-3">
            {post.author?.avatar_url ? (
              <img src={post.author.avatar_url} alt="" className="size-10 rounded-full object-cover" />
            ) : (
              <div className="size-10 rounded-full bg-muted flex items-center justify-center font-bold">
                {post.author?.full_name?.[0] ?? "?"}
              </div>
            )}
            <div>
              <p className="text-sm font-bold">{post.author?.full_name ?? "Autor"}</p>
              <p className="text-xs text-muted-foreground">{formatDate(post.published_at)}</p>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1"><Clock className="size-3.5" /> {post.reading_time} min</span>
            <span className="inline-flex items-center gap-1"><Eye className="size-3.5" /> {post.views}</span>
          </div>
        </div>

        <div
          className="prose prose-lg max-w-none mt-8 prose-headings:font-bold prose-a:text-primary prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
        />

        {post.author?.full_name && (
          <aside className="mt-14 p-6 sm:p-8 bg-card border border-border rounded-2xl flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            {post.author.avatar_url ? (
              <img
                src={post.author.avatar_url}
                alt={`Foto de ${post.author.full_name}`}
                className="size-24 sm:size-28 rounded-2xl object-cover shrink-0"
              />
            ) : (
              <div className="size-24 sm:size-28 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl font-extrabold text-primary shrink-0">
                {post.author.full_name[0]}
              </div>
            )}
            <div className="flex-1 text-center sm:text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                Sobre o autor
              </p>
              <p className="text-lg font-bold">{post.author.full_name}</p>
              {post.author.bio && (
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {post.author.bio}
                </p>
              )}
              <Link
                to="/autor/$slug"
                params={{ slug: authorSlug(post.author.full_name) }}
                className="inline-flex items-center gap-1 mt-4 text-sm font-bold text-primary hover:underline"
              >
                Ver página do autor →
              </Link>
            </div>
          </aside>
        )}
      </div>
    </article>
  );
}

function authorSlug(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
