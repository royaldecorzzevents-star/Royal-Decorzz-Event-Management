-- Run once in Supabase → SQL Editor
-- Fixes empty gallery when images exist in Storage → images → wedding/

-- 1. Ensure bucket is public
insert into storage.buckets (id, name, public)
values ('images', 'images', true)
on conflict (id) do update set public = true;

-- 2. Allow anyone to list/read files in the images bucket
drop policy if exists "Public read images bucket" on storage.objects;

create policy "Public read images bucket"
on storage.objects
for select
to public
using (bucket_id = 'images');
