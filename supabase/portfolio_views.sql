-- ============================================================
-- Portfolio View Counter
-- Unique visitor version
-- ============================================================


-- ============================================================
-- 1. Portfolio counter
-- ============================================================

create table if not exists public.portfolio_metrics (
  metric text primary key,
  total_views bigint not null default 0 check (total_views >= 0)
);


-- ============================================================
-- 2. Anonymous visitor tracking
-- ============================================================

create table if not exists public.portfolio_visitors (
  visitor_id text primary key,
  first_seen timestamptz not null default now(),
  last_seen timestamptz not null default now()
);


-- ============================================================
-- 3. Security
-- ============================================================

alter table public.portfolio_metrics enable row level security;
alter table public.portfolio_visitors enable row level security;

revoke all on public.portfolio_metrics
from public, anon, authenticated;

revoke all on public.portfolio_visitors
from public, anon, authenticated;


-- ============================================================
-- 4. Unique visitor counter function
-- ============================================================

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

  -- Register the visitor only if they are new.
  insert into public.portfolio_visitors (
    visitor_id
  )
  values (
    p_visitor_id
  )
  on conflict (visitor_id) do nothing;

  -- 1 = new visitor
  -- 0 = existing visitor
  get diagnostics inserted_count = row_count;

  -- Update activity time for an existing visitor.
  if inserted_count = 0 then
    update public.portfolio_visitors
    set last_seen = now()
    where visitor_id = p_visitor_id;
  end if;

  -- Only count new visitors.
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

  -- Return current total.
  select total_views
  into current_count
  from public.portfolio_metrics
  where metric = 'portfolio';

  return coalesce(current_count, 0);

end;
$$;


-- ============================================================
-- 5. Function permissions
-- ============================================================

revoke all on function public.increment_portfolio_views(text)
from public, anon, authenticated;

grant execute on function public.increment_portfolio_views(text)
to service_role;