import { Link } from "@tanstack/react-router";
import { formatDate } from "@/lib/blog/utils";

export interface PostCardData {
  slug: string;
  title: string;
  excerpt: string | null;
  image_url: string | null;
  date: string | null;
  categoria: string | null;
  author_name: string | null;
}

export function PostCard({ post, featured = false }: { post: PostCardData; featured?: boolean }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className={`group block overflow-hidden rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow ${featured ? "md:grid md:grid-cols-2 md:gap-0" : ""}`}
    >
      <div className={`relative bg-muted ${featured ? "aspect-[4/3] md:aspect-auto md:h-full" : "aspect-[16/10]"}`}>
        {post.image_url ? (
          <img
            src={post.image_url}
            alt={post.title}
            className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
        )}
        {post.categoria && (
          <span className="absolute top-3 left-3 px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full text-white bg-primary">
            {post.categoria}
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col gap-3">
        <h3 className={`font-bold leading-tight group-hover:text-primary transition-colors ${featured ? "text-2xl md:text-3xl" : "text-lg"}`}>
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
        )}
        <div className="mt-auto flex items-center gap-3 pt-2 text-xs text-muted-foreground">
          {post.author_name && (
            <>
              <div className="size-7 rounded-full bg-muted flex items-center justify-center text-[10px] font-bold">
                {post.author_name[0]}
              </div>
              <span className="font-medium">{post.author_name}</span>
              <span>·</span>
            </>
          )}
          <span>{formatDate(post.date)}</span>
        </div>
      </div>
    </Link>
  );
}
