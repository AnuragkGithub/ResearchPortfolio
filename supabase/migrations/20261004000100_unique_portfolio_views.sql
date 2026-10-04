-- Add anonymous unique visitor tracking
create table if not exists public.portfolio_visitors (
  visitor_id text primary key,
  first_seen timestamptz not null default now(),
  last_seen timestamptz not null default now()
);

-- Protect the table from direct public access
alter table public.portfolio_visitors enable row level security;

revoke all on public.portfolio_visitors from public, anon, authenticated;


-- Replace the old increment function with unique-visitor logic
create or replace function public.increment_portfolio_views(
  p_visitor_id text
)
returns bigint
language plpgsql
security definer
set search_path = ''
as $$
declare
  inserted_count integer;
  current_count bigint;
begin

  -- Try to register this visitor.
  -- If the visitor already exists, nothing is inserted.
  insert into public.portfolio_visitors (
    visitor_id
  )
  values (
    p_visitor_id
  )
  on conflict (visitor_id) do nothing;

  -- Check whether a new visitor was actually inserted.
  get diagnostics inserted_count = row_count;

  -- Update the last-seen time for an existing visitor.
  if inserted_count = 0 then
    update public.portfolio_visitors
    set last_seen = now()
    where visitor_id = p_visitor_id;
  end if;

  -- Only a NEW visitor increases the counter.
  if inserted_count = 1 then

    insert into public.portfolio_metrics as metrics (
      metric,
      total_views
    )
    values (
      'portfolio',
      1
    )
    on conflict (metric)
    do update
      set total_views = metrics.total_views + 1;

  end if;

  -- Return the current total.
  select total_views
  into current_count
  from public.portfolio_metrics
  where metric = 'portfolio';

  return coalesce(current_count, 0);

end;
$$;


-- Keep the function server-side only.
revoke all on function public.increment_portfolio_views(text)
from public, anon, authenticated;

grant execute on function public.increment_portfolio_views(text)
to service_role;