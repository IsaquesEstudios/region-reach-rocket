
-- Revoke broad EXECUTE from helper functions
REVOKE EXECUTE ON FUNCTION public.has_role(UUID, public.user_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(UUID, public.user_role) TO authenticated, service_role;

REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.set_updated_at() FROM PUBLIC, anon, authenticated;

REVOKE EXECUTE ON FUNCTION public.increment_post_views(TEXT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.increment_post_views(TEXT) TO anon, authenticated;

-- Storage policies for blog-images bucket (private bucket, public read of files)
CREATE POLICY "Blog images publicly readable" ON storage.objects FOR SELECT
  USING (bucket_id = 'blog-images');
CREATE POLICY "Authenticated users can upload blog images" ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'blog-images');
CREATE POLICY "Authenticated users can update blog images" ON storage.objects FOR UPDATE TO authenticated
  USING (bucket_id = 'blog-images');
CREATE POLICY "Authenticated users can delete blog images" ON storage.objects FOR DELETE TO authenticated
  USING (bucket_id = 'blog-images');
