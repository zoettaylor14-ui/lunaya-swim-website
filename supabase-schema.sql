-- Optional Supabase schema for Lunaya Swim

create table if not exists waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  first_name text,
  email text not null,
  phone text,
  zodiac_sign text,
  instagram_handle text,
  interest text,
  source text default 'website',
  created_at timestamptz not null default now()
);

create table if not exists custom_bikini_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  instagram_handle text,
  zodiac_sign text,
  bikini_color text,
  top_style text,
  bottom_style text,
  crystal_color text,
  crystal_placement text,
  top_size text,
  bottom_size text,
  coverage_preference text,
  deadline date,
  budget_range text,
  notes text,
  inspiration_file_url text,
  status text default 'new',
  created_at timestamptz not null default now()
);

create table if not exists contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text not null,
  reason text,
  order_number text,
  message text,
  created_at timestamptz not null default now()
);
