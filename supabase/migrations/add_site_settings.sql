-- Run if site_settings does not exist yet
create table if not exists site_settings (
  key text primary key,
  value text not null,
  updated_at timestamptz default now()
);

alter table site_settings enable row level security;

drop policy if exists "Public read site_settings" on site_settings;
create policy "Public read site_settings"
  on site_settings for select
  to anon, authenticated
  using (true);

drop policy if exists "Admin write site_settings" on site_settings;
create policy "Admin write site_settings"
  on site_settings for all
  to authenticated
  using (true)
  with check (true);

insert into site_settings (key, value)
values ('certifications_section_title', 'Certifications')
on conflict (key) do nothing;
