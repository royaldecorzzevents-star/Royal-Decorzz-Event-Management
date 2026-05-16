-- Allow anyone to read files from public storage buckets (required for gallery images).
-- Run this in Supabase SQL Editor if images do not load.

create policy "Public read for public buckets"
on storage.objects
for select
to public
using (
  bucket_id in (
    select id from storage.buckets where public = true
  )
);
