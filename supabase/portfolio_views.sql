create table if not exists public.portfolio_metrics (
  metric text primary key,
  total_views bigint not null default 0 check (total_views >= 0)
);

alter table public.portfolio_metrics enable row level security;
revoke all on public.portfolio_metrics from public, anon, authenticated;

create or replace function public.increment_portfolio_views()
returns bigint
language sql
security definer
set search_path = ''
as $$
  insert into public.portfolio_metrics as metrics (metric, total_views)
  values ('portfolio', 1)
  on conflict (metric)
  do update set total_views = metrics.total_views + 1
  returning total_views;
$$;

revoke all on function public.increment_portfolio_views() from public, anon, authenticated;
grant execute on function public.increment_portfolio_views() to service_role;
