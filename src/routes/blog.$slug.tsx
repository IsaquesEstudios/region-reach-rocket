import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { formatDate } from "@/lib/blog/utils";
import { getPublicPostBySlug } from "@/lib/posts.functions";

function authorSlug(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const post = await getPublicPostBySlug({ data: { slug: params.slug } });
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const title = loaderData.title;
    const description = loaderData.excerpt ?? "";
    const image = loaderData.image_url ?? undefined;
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
        ...(loaderData.author_name ? [{ name: "author", content: loaderData.author_name }] : []),
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
            datePublished: loaderData.date,
            author: loaderData.author_name
              ? { "@type": "Person", name: loaderData.author_name }
              : undefined,
            articleSection: loaderData.categoria ?? undefined,
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
  if (!post) return null;

  return (
    <article className="pb-20">
      <div className="relative h-[40vh] min-h-[300px] bg-muted">
        {post.image_url && (
          <img src={post.image_url} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-10 w-full text-white">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold mb-4 opacity-80 hover:opacity-100">
              <ArrowLeft className="size-4" /> Blog
            </Link>
            {post.categoria && (
              <span className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full mb-3 bg-primary">
                {post.categoria}
              </span>
            )}
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">{post.title}</h1>
            {post.excerpt && <p className="mt-3 text-lg opacity-90 max-w-2xl">{post.excerpt}</p>}
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 mt-10">
        <div className="flex flex-wrap items-center gap-4 pb-6 border-b border-border">
          {post.author_name && (
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-muted flex items-center justify-center font-bold">
                {post.author_name[0]}
              </div>
              <div>
                <p className="text-sm font-bold">{post.author_name}</p>
                <p className="text-xs text-muted-foreground">{formatDate(post.date)}</p>
              </div>
            </div>
          )}
        </div>

        <div
          className="prose prose-lg max-w-none mt-8 prose-headings:font-bold prose-a:text-primary prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
        />

        {post.author_name && (
          <aside className="mt-14 p-6 sm:p-8 bg-card border border-border rounded-2xl flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <div className="size-24 sm:size-28 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl font-extrabold text-primary shrink-0">
              {post.author_name[0]}
            </div>
            <div className="flex-1 text-center sm:text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                Sobre o autor
              </p>
              <p className="text-lg font-bold">{post.author_name}</p>
              <Link
                to="/autor/$slug"
                params={{ slug: authorSlug(post.author_name) }}
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
