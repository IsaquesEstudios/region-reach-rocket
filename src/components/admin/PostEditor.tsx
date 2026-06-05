import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { Upload, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import { RichEditor } from "./RichEditor";
import { slugify, calculateReadingTime } from "@/lib/blog/utils";

interface Props {
  postId?: string;
}

interface PostForm {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image_url: string;
  category_id: string | null;
  status: "draft" | "published" | "archived";
  featured: boolean;
  meta_title: string;
  meta_description: string;
  og_image_url: string;
  tag_ids: string[];
}

const empty: PostForm = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  cover_image_url: "",
  category_id: null,
  status: "draft",
  featured: false,
  meta_title: "",
  meta_description: "",
  og_image_url: "",
  tag_ids: [],
};

export function PostEditor({ postId }: Props) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [form, setForm] = useState<PostForm>(empty);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState<"cover" | "og" | null>(null);

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await supabase.from("categories").select("id,name").order("name");
      return data ?? [];
    },
  });

  const { data: allTags } = useQuery({
    queryKey: ["tags-all"],
    queryFn: async () => {
      const { data } = await supabase.from("tags").select("id,name").order("name");
      return data ?? [];
    },
  });

  const { data: existing } = useQuery({
    queryKey: ["post-edit", postId],
    queryFn: async () => {
      if (!postId) return null;
      const { data, error } = await supabase
        .from("posts")
        .select("*, posts_tags(tag_id)")
        .eq("id", postId)
        .maybeSingle();
      if (error) throw error;
      return data;
    },
    enabled: !!postId,
  });

  useEffect(() => {
    if (existing) {
      setForm({
        title: existing.title ?? "",
        slug: existing.slug ?? "",
        excerpt: existing.excerpt ?? "",
        content: existing.content ?? "",
        cover_image_url: existing.cover_image_url ?? "",
        category_id: existing.category_id,
        status: existing.status,
        featured: existing.featured,
        meta_title: existing.meta_title ?? "",
        meta_description: existing.meta_description ?? "",
        og_image_url: existing.og_image_url ?? "",
        tag_ids: (existing.posts_tags ?? []).map((pt: { tag_id: string }) => pt.tag_id),
      });
    }
  }, [existing]);

  const update = <K extends keyof PostForm>(k: K, v: PostForm[K]) => setForm((f) => ({ ...f, [k]: v }));

  const onTitleChange = (v: string) => {
    setForm((f) => ({ ...f, title: v, slug: f.slug || slugify(v) }));
  };

  const handleUpload = async (file: File, target: "cover" | "og") => {
    setUploading(target);
    try {
      const path = `${target}/${Date.now()}-${file.name}`;
      const { error } = await supabase.storage.from("blog-images").upload(path, file);
      if (error) throw error;
      const { data } = supabase.storage.from("blog-images").getPublicUrl(path);
      if (target === "cover") update("cover_image_url", data.publicUrl);
      else update("og_image_url", data.publicUrl);
    } catch (e) {
      toast.error((e as Error).message);
    } finally {
      setUploading(null);
    }
  };

  const toggleTag = (id: string) => {
    setForm((f) => ({
      ...f,
      tag_ids: f.tag_ids.includes(id) ? f.tag_ids.filter((x) => x !== id) : [...f.tag_ids, id],
    }));
  };

  const syncTags = async (postIdToSync: string) => {
    await supabase.from("posts_tags").delete().eq("post_id", postIdToSync);
    if (form.tag_ids.length) {
      await supabase.from("posts_tags").insert(form.tag_ids.map((tag_id) => ({ post_id: postIdToSync, tag_id })));
    }
  };

  const save = async (publish?: boolean) => {
    if (!user) return;
    if (!form.title) return toast.error("Adicione um título");
    setSaving(true);
    try {
      const status = publish ? "published" : form.status;
      const payload = {
        title: form.title,
        slug: form.slug || slugify(form.title),
        excerpt: form.excerpt || null,
        content: form.content || null,
        cover_image_url: form.cover_image_url || null,
        category_id: form.category_id,
        status,
        featured: form.featured,
        reading_time: calculateReadingTime(form.content),
        published_at: status === "published" ? (existing?.published_at ?? new Date().toISOString()) : existing?.published_at ?? null,
        meta_title: form.meta_title || null,
        meta_description: form.meta_description || null,
        og_image_url: form.og_image_url || null,
        author_id: existing?.author_id ?? user.id,
      };

      if (postId) {
        const { error } = await supabase.from("posts").update(payload).eq("id", postId);
        if (error) throw error;
        await syncTags(postId);
        toast.success("Post atualizado");
      } else {
        const { data, error } = await supabase.from("posts").insert(payload).select("id").maybeSingle();
        if (error) throw error;
        if (data) {
          await syncTags(data.id);
          toast.success("Post criado");
          navigate({ to: "/admin/posts/edit/$id", params: { id: data.id } });
        }
      }
    } catch (e) {
      toast.error((e as Error).message);
    } finally {
      setSaving(false);
    }
  };

  const metaTitleLen = (form.meta_title || form.title).length;
  const metaDescLen = (form.meta_description || form.excerpt).length;

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-extrabold">{postId ? "Editar post" : "Novo post"}</h1>
        <div className="flex gap-2">
          <button onClick={() => save(false)} disabled={saving} className="px-4 py-2 rounded-lg border border-border font-bold text-sm disabled:opacity-50">
            Salvar rascunho
          </button>
          <button onClick={() => save(true)} disabled={saving} className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-bold text-sm disabled:opacity-50">
            Publicar
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <input
            value={form.title}
            onChange={(e) => onTitleChange(e.target.value)}
            placeholder="Título do post"
            className="w-full text-3xl font-extrabold bg-transparent border-0 focus:outline-none placeholder:text-muted-foreground/40"
          />
          <input
            value={form.slug}
            onChange={(e) => update("slug", slugify(e.target.value))}
            placeholder="slug-do-post"
            className="w-full text-sm text-muted-foreground bg-transparent border-0 focus:outline-none"
          />
          <textarea
            value={form.excerpt}
            onChange={(e) => update("excerpt", e.target.value)}
            placeholder="Resumo curto (excerpt)…"
            rows={2}
            className="w-full px-3 py-2 rounded-lg border border-border bg-card text-sm"
          />
          <RichEditor value={form.content} onChange={(v) => update("content", v)} />
        </div>

        <aside className="space-y-4">
          <div className="bg-card border border-border rounded-xl p-4 space-y-3">
            <h3 className="font-bold text-sm">Publicação</h3>
            <select
              value={form.status}
              onChange={(e) => update("status", e.target.value as PostForm["status"])}
              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
            >
              <option value="draft">Rascunho</option>
              <option value="published">Publicado</option>
              <option value="archived">Arquivado</option>
            </select>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={form.featured} onChange={(e) => update("featured", e.target.checked)} />
              Marcar como destaque
            </label>
          </div>

          <div className="bg-card border border-border rounded-xl p-4 space-y-3">
            <h3 className="font-bold text-sm">Categoria</h3>
            <select
              value={form.category_id ?? ""}
              onChange={(e) => update("category_id", e.target.value || null)}
              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
            >
              <option value="">Sem categoria</option>
              {categories?.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>

          <div className="bg-card border border-border rounded-xl p-4 space-y-3">
            <h3 className="font-bold text-sm">Tags</h3>
            <div className="flex flex-wrap gap-1.5 max-h-40 overflow-auto">
              {allTags?.map((t) => {
                const active = form.tag_ids.includes(t.id);
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => toggleTag(t.id)}
                    className={`px-2.5 py-1 rounded-full text-xs font-medium border ${active ? "bg-primary text-primary-foreground border-primary" : "border-border hover:bg-muted"}`}
                  >
                    {t.name}
                  </button>
                );
              })}
              {!allTags?.length && <p className="text-xs text-muted-foreground">Crie tags em /admin/tags</p>}
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-4 space-y-3">
            <h3 className="font-bold text-sm">Imagem de capa</h3>
            {form.cover_image_url ? (
              <div className="relative">
                <img src={form.cover_image_url} alt="" className="w-full aspect-video object-cover rounded-lg" />
                <button onClick={() => update("cover_image_url", "")} className="absolute top-2 right-2 p-1 bg-background rounded-full"><X className="size-4" /></button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center aspect-video border-2 border-dashed border-border rounded-lg cursor-pointer hover:bg-muted/50">
                <Upload className="size-6 text-muted-foreground" />
                <span className="text-xs text-muted-foreground mt-2">{uploading === "cover" ? "Enviando…" : "Clique para enviar"}</span>
                <input type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0], "cover")} />
              </label>
            )}
          </div>

          <details className="bg-card border border-border rounded-xl p-4" open>
            <summary className="font-bold text-sm cursor-pointer">SEO / Compartilhamento</summary>
            <div className="mt-3 space-y-3">
              <div>
                <label className="text-xs font-bold flex items-center justify-between">
                  Meta title
                  <span className={`text-[10px] font-normal ${metaTitleLen > 60 ? "text-destructive" : "text-muted-foreground"}`}>{metaTitleLen}/60</span>
                </label>
                <input value={form.meta_title} onChange={(e) => update("meta_title", e.target.value)} placeholder={form.title || "Título nos motores de busca"} className="mt-1 w-full px-3 py-2 rounded-lg border border-border bg-background text-sm" />
              </div>
              <div>
                <label className="text-xs font-bold flex items-center justify-between">
                  Meta description
                  <span className={`text-[10px] font-normal ${metaDescLen > 160 ? "text-destructive" : "text-muted-foreground"}`}>{metaDescLen}/160</span>
                </label>
                <textarea value={form.meta_description} onChange={(e) => update("meta_description", e.target.value)} placeholder={form.excerpt || "Descrição que aparece no Google"} rows={3} className="mt-1 w-full px-3 py-2 rounded-lg border border-border bg-background text-sm" />
              </div>
              <div>
                <label className="text-xs font-bold">Imagem de compartilhamento (OG)</label>
                {form.og_image_url ? (
                  <div className="relative mt-1">
                    <img src={form.og_image_url} alt="" className="w-full aspect-[1200/630] object-cover rounded-lg" />
                    <button onClick={() => update("og_image_url", "")} className="absolute top-2 right-2 p-1 bg-background rounded-full"><X className="size-4" /></button>
                  </div>
                ) : (
                  <label className="mt-1 flex flex-col items-center justify-center aspect-[1200/630] border-2 border-dashed border-border rounded-lg cursor-pointer hover:bg-muted/50">
                    <Upload className="size-5 text-muted-foreground" />
                    <span className="text-[11px] text-muted-foreground mt-1">{uploading === "og" ? "Enviando…" : "1200×630px ideal"}</span>
                    <input type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0], "og")} />
                  </label>
                )}
                <p className="text-[10px] text-muted-foreground mt-1">Se vazio, usa a imagem de capa.</p>
              </div>
            </div>
          </details>

          <div className="text-xs text-muted-foreground">
            Tempo de leitura estimado: <span className="font-bold">{calculateReadingTime(form.content)} min</span>
          </div>
        </aside>
      </div>
    </div>
  );
}
