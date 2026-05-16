-- Public bucket for gallery images: bucket "images", folder "wedding"
-- Upload via Supabase Dashboard → Storage → images → wedding/

insert into storage.buckets (id, name, public)
values ('images', 'images', true)
on conflict (id) do update set public = true;

create policy "Public read images bucket"
on storage.objects
for select
to public
using (bucket_id = 'images');

create policy "Authenticated upload images bucket"
on storage.objects
for insert
to authenticated
with check (bucket_id = 'images');
