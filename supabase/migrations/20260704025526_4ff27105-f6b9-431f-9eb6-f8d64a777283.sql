
DROP TABLE IF EXISTS public.posts_tags CASCADE;
DROP FUNCTION IF EXISTS public.increment_post_views(text);
DROP TABLE IF EXISTS public.posts CASCADE;

CREATE TABLE public.posts (
  id text NOT NULL PRIMARY KEY,
  "Title" text,
  "Content" text,
  "Date" text,
  "Permalink" text,
  "Image URL" text,
  "Excerpt" text,
  "Categorias" text,
  "Author First Name" text,
  "Slug" text
);

GRANT SELECT ON public.posts TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.posts TO authenticated;
GRANT ALL ON public.posts TO service_role;

ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read posts"
  ON public.posts FOR SELECT
  USING (true);

CREATE POLICY "Admins can insert posts"
  ON public.posts FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update posts"
  ON public.posts FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete posts"
  ON public.posts FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));
