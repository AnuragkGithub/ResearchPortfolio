# Portfolio View Counter Setup

The counter records page loads in a shared Supabase database. Repeated visits count again; it does not identify unique people.

## Deploy the database schema

The migration at [`supabase/migrations/20261004000000_create_portfolio_views.sql`](../supabase/migrations/20261004000000_create_portfolio_views.sql) creates the counter table and atomic increment function.

For the Supabase GitHub integration, select this repository, set the working directory to `.` (the `supabase/` directory is at the repository root), and set the production branch to `main`. Enabling production deploy applies new migrations pushed to that branch. The standalone [`supabase/portfolio_views.sql`](../supabase/portfolio_views.sql) is available for manual SQL Editor setup instead.

## Connect the Next.js server

The GitHub integration deploys database migrations; it does not configure environment variables for the Next.js app. Copy the project URL and a server-side secret key from the project's API settings, then configure them in the Next.js host. For local development, create `.env.local` in the project root using `.env.local.example` as a reference:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SECRET_KEY=your-server-only-secret-key
```

Restart the Next.js server after changing local environment variables.

For the hosting provider, add the same variables in its project environment settings and redeploy.

Keep `SUPABASE_SECRET_KEY` server-side. Do not rename it to a `NEXT_PUBLIC_` variable or put the key in client code. The example file contains placeholders only.
