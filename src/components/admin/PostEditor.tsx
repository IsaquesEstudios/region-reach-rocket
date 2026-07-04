import { useEffect, useState } from "react";
import { useNavigate, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { Upload, X, Eye } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import { RichEditor } from "./RichEditor";
import { slugify } from "@/lib/blog/utils";
import { getAdminPost, upsertAdminPost } from "@/lib/posts.functions";

interface Props {
  postId?: string;
}

interface PostForm {
  Title: string;
  Slug: string;
  Excerpt: string;
  Content: string;
  "Image URL": string;
  Categorias: string;
  "Author First Name": string;
  Date: string;
  Permalink: string;
}

const empty: PostForm = {
  Title: "",
  Slug: "",
  Excerpt: "",
  Content: "",
  "Image URL": "",
  Categorias: "",
  "Author First Name": "",
  Date: "",
  Permalink: "",
};

export function PostEditor({ postId }: Props) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [form, setForm] = useState<PostForm>(empty);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const { data: existing } = useQuery({
    queryKey: ["post-edit", postId],
    queryFn: async () => {
      if (!postId) return null;
      return await getAdminPost({ data: { id: postId } });
    },
    enabled: !!postId,
  });

  useEffect(() => {
    if (existing) {
      setForm({
        Title: existing.title ?? "",
        Slug: existing.slug ?? "",
        Excerpt: existing.excerpt ?? "",
        Content: existing.content ?? "",
        "Image URL": existing.image_url ?? "",
        Categorias: existing.categoria ?? "",
        "Author First Name": existing.author_name ?? "",
        Date: existing.date ?? "",
        Permalink: existing.permalink ?? "",
      });
    }
  }, [existing]);

  const update = <K extends keyof PostForm>(k: K, v: PostForm[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const onTitleChange = (v: string) => {
    setForm((f) => ({ ...f, Title: v, Slug: f.Slug || slugify(v) }));
  };

  const handleUpload = async (file: File) => {
    setUploading(true);
    try {
      const path = `cover/${Date.now()}-${file.name}`;
      const { error } = await supabase.storage.from("blog-images").upload(path, file);
      if (error) throw error;
      const { data } = supabase.storage.from("blog-images").getPublicUrl(path);
      update("Image URL", data.publicUrl);
    } catch (e) {
      toast.error((e as Error).message);
    } finally {
      setUploading(false);
    }
  };

  const save = async () => {
    if (!user) return;
    if (!form.Title) return toast.error("Adicione um título");
    setSaving(true);
    try {
      const id = postId ?? crypto.randomUUID();
      const payload = {
        id,
        Title: form.Title,
        Slug: form.Slug || slugify(form.Title),
        Excerpt: form.Excerpt || null,
        Content: form.Content || null,
        "Image URL": form["Image URL"] || null,
        Categorias: form.Categorias || null,
        "Author First Name": form["Author First Name"] || null,
        Date: form.Date || null,
        Permalink: form.Permalink || null,
      };

      await upsertAdminPost({ data: payload });

      if (postId) {
        toast.success("Post atualizado");
      } else {
        toast.success("Post criado");
        navigate({ to: "/admin/posts/edit/$id", params: { id } });
      }
    } catch (e) {
      toast.error((e as Error).message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-extrabold">{postId ? "Editar post" : "Novo post"}</h1>
        <div className="flex gap-2">
          {postId && form.Slug && (
            <Link
              to="/blog/$slug"
              params={{ slug: form.Slug }}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border font-bold text-sm hover:bg-muted"
            >
              <Eye className="size-4" /> Visualizar
            </Link>
          )}
          <button
            onClick={save}
            disabled={saving}
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-bold text-sm disabled:opacity-50"
          >
            Salvar
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <input
            value={form.Title}
            onChange={(e) => onTitleChange(e.target.value)}
            placeholder="Título do post"
            className="w-full text-3xl font-extrabold bg-transparent border-0 focus:outline-none placeholder:text-muted-foreground/40"
          />
          <input
            value={form.Slug}
            onChange={(e) => update("Slug", slugify(e.target.value))}
            placeholder="slug-do-post"
            className="w-full text-sm text-muted-foreground bg-transparent border-0 focus:outline-none"
          />
          <textarea
            value={form.Excerpt}
            onChange={(e) => update("Excerpt", e.target.value)}
            placeholder="Resumo curto (excerpt)…"
            rows={2}
            className="w-full px-3 py-2 rounded-lg border border-border bg-card text-sm"
          />
          <RichEditor value={form.Content} onChange={(v) => update("Content", v)} />
        </div>

        <aside className="space-y-4">
          <div className="bg-card border border-border rounded-xl p-4 space-y-3">
            <h3 className="font-bold text-sm">Metadados</h3>
            <div>
              <label className="text-xs font-bold">Categorias</label>
              <input
                value={form.Categorias}
                onChange={(e) => update("Categorias", e.target.value)}
                placeholder="Ex: Manutenção, Reformas"
                className="mt-1 w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
              />
            </div>
            <div>
              <label className="text-xs font-bold">Autor (primeiro nome)</label>
              <input
                value={form["Author First Name"]}
                onChange={(e) => update("Author First Name", e.target.value)}
                className="mt-1 w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
              />
            </div>
            <div>
              <label className="text-xs font-bold">Data</label>
              <input
                value={form.Date}
                onChange={(e) => update("Date", e.target.value)}
                placeholder="AAAA-MM-DD"
                className="mt-1 w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
              />
            </div>
            <div>
              <label className="text-xs font-bold">Permalink</label>
              <input
                value={form.Permalink}
                onChange={(e) => update("Permalink", e.target.value)}
                className="mt-1 w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
              />
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-4 space-y-3">
            <h3 className="font-bold text-sm">Imagem de capa (Image URL)</h3>
            {form["Image URL"] ? (
              <div className="relative">
                <img src={form["Image URL"]} alt="" className="w-full aspect-video object-cover rounded-lg" />
                <button
                  onClick={() => update("Image URL", "")}
                  className="absolute top-2 right-2 p-1 bg-background rounded-full"
                >
                  <X className="size-4" />
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center aspect-video border-2 border-dashed border-border rounded-lg cursor-pointer hover:bg-muted/50">
                <Upload className="size-6 text-muted-foreground" />
                <span className="text-xs text-muted-foreground mt-2">
                  {uploading ? "Enviando…" : "Clique para enviar"}
                </span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0])}
                />
              </label>
            )}
            <input
              value={form["Image URL"]}
              onChange={(e) => update("Image URL", e.target.value)}
              placeholder="ou cole a URL da imagem"
              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-xs"
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
