-- Revoga as permissões que dispararam avisos do linter
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.user_role) FROM anon;

-- Substitui a policy única que chamava has_role() para todos por duas policies segregadas
DROP POLICY IF EXISTS "Published posts readable by everyone" ON public.posts;

CREATE POLICY "Anyone can read published posts"
ON public.posts
FOR SELECT
TO anon, authenticated
USING (status = 'published'::post_status);

CREATE POLICY "Authors and admins read own and all"
ON public.posts
FOR SELECT
TO authenticated
USING ((auth.uid() = author_id) OR has_role(auth.uid(), 'admin'::user_role));