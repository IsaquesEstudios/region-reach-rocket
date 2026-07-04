import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { mapRawPost, type Post, type PostListItem, type RawPost } from "./posts.types";

/**
 * Cria um client para o Supabase EXTERNO usando a publishable key.
 * Usado em leituras públicas.
 */
function createExternalPublicClient() {
  const url = process.env.EXTERNAL_SUPABASE_URL;
  const key = process.env.EXTERNAL_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) {
    throw new Error(
      "Missing EXTERNAL_SUPABASE_URL or EXTERNAL_SUPABASE_PUBLISHABLE_KEY env vars.",
    );
  }
  return createClient(url, key, {
    auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
  });
}

/**
 * Cria um client para o Supabase EXTERNO usando service_role.
 * Usado APENAS em fluxos administrativos, sempre depois de validar has_role('admin') no Cloud.
 */
function createExternalAdminClient() {
  const url = process.env.EXTERNAL_SUPABASE_URL;
  const key = process.env.EXTERNAL_SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error(
      "Missing EXTERNAL_SUPABASE_URL or EXTERNAL_SUPABASE_SERVICE_ROLE_KEY env vars.",
    );
  }
  return createClient(url, key, {
    auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
  });
}

const POST_COLUMNS =
  'id,"Title","Content","Date","Permalink","Image URL","Excerpt","Categorias","Author First Name","Slug"';

const LIST_COLUMNS =
  'id,"Title","Date","Permalink","Image URL","Excerpt","Categorias","Author First Name","Slug"';

// ---------- Leitura pública ----------

export const listPublicPosts = createServerFn({ method: "GET" }).handler(
  async (): Promise<PostListItem[]> => {
    const sb = createExternalPublicClient();
    const { data, error } = await sb
      .from("posts")
      .select(LIST_COLUMNS)
      .order("Date", { ascending: false, nullsFirst: false });
    if (error) throw new Error(error.message);
    const rows = (data ?? []) as unknown as RawPost[];
    return rows.map((r) => {
      const p = mapRawPost(r);
      return {
        id: p.id,
        title: p.title,
        slug: p.slug,
        excerpt: p.excerpt,
        image_url: p.image_url,
        date: p.date,
        categoria: p.categoria,
        author_name: p.author_name,
      };
    });
  },
);

export const getPublicPostBySlug = createServerFn({ method: "GET" })
  .inputValidator((input: unknown) =>
    z.object({ slug: z.string().min(1) }).parse(input),
  )
  .handler(async ({ data }): Promise<Post | null> => {
    const sb = createExternalPublicClient();
    const { data: row, error } = await sb
      .from("posts")
      .select(POST_COLUMNS)
      .eq("Slug", data.slug)
      .maybeSingle();
    if (error) throw new Error(error.message);
    if (!row) return null;
    return mapRawPost(row as unknown as RawPost);
  });

// ---------- Admin ----------

async function assertAdmin(context: {
  supabase: ReturnType<typeof createExternalAdminClient>;
  userId: string;
}) {
  // context.supabase é o client autenticado do CLOUD (do middleware) — valida role lá.
  const { data, error } = await (
    context.supabase as unknown as {
      rpc: (
        name: string,
        args: Record<string, unknown>,
      ) => Promise<{ data: boolean | null; error: { message: string } | null }>;
    }
  ).rpc("has_role", { _user_id: context.userId, _role: "admin" });
  if (error) throw new Error(error.message);
  if (!data) throw new Error("Forbidden: admin role required");
}

export const listAdminPosts = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }): Promise<PostListItem[]> => {
    await assertAdmin(context);
    const sb = createExternalAdminClient();
    const { data, error } = await sb
      .from("posts")
      .select(LIST_COLUMNS)
      .order("Date", { ascending: false, nullsFirst: false });
    if (error) throw new Error(error.message);
    const rows = (data ?? []) as unknown as RawPost[];
    return rows.map((r) => {
      const p = mapRawPost(r);
      return {
        id: p.id,
        title: p.title,
        slug: p.slug,
        excerpt: p.excerpt,
        image_url: p.image_url,
        date: p.date,
        categoria: p.categoria,
        author_name: p.author_name,
      };
    });
  });

export const getAdminPost = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z.object({ id: z.string().min(1) }).parse(input),
  )
  .handler(async ({ context, data }): Promise<Post | null> => {
    await assertAdmin(context);
    const sb = createExternalAdminClient();
    const { data: row, error } = await sb
      .from("posts")
      .select(POST_COLUMNS)
      .eq("id", data.id)
      .maybeSingle();
    if (error) throw new Error(error.message);
    if (!row) return null;
    return mapRawPost(row as unknown as RawPost);
  });

const postInputSchema = z.object({
  id: z.string().min(1),
  Title: z.string().nullable().optional(),
  Slug: z.string().nullable().optional(),
  Content: z.string().nullable().optional(),
  Excerpt: z.string().nullable().optional(),
  "Image URL": z.string().nullable().optional(),
  Categorias: z.string().nullable().optional(),
  "Author First Name": z.string().nullable().optional(),
  Date: z.string().nullable().optional(),
  Permalink: z.string().nullable().optional(),
});

export const upsertAdminPost = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => postInputSchema.parse(input))
  .handler(async ({ context, data }) => {
    await assertAdmin(context);
    const sb = createExternalAdminClient();
    const { error } = await sb.from("posts").upsert(data as Record<string, unknown>, {
      onConflict: "id",
    });
    if (error) throw new Error(error.message);
    return { ok: true, id: data.id };
  });

export const deleteAdminPost = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) =>
    z.object({ id: z.string().min(1) }).parse(input),
  )
  .handler(async ({ context, data }) => {
    await assertAdmin(context);
    const sb = createExternalAdminClient();
    const { error } = await sb.from("posts").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true };
  });
