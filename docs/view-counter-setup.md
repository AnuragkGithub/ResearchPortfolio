# Portfolio View Counter Setup

The counter records page loads in a shared Supabase database. Repeated visits count again; it does not identify unique people.

1. Create a Supabase project.
2. Open the Supabase SQL Editor and run [`supabase/portfolio_views.sql`](../supabase/portfolio_views.sql).
3. Copy the project URL and a server-side secret key from the project's API settings.
4. Create `.env.local` in the project root using `.env.local.example` as a reference:

   ```env
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_SECRET_KEY=your-server-only-secret-key
   ```

5. Restart the Next.js server. In production, set the same variables in the hosting provider's environment settings and redeploy.

Keep `SUPABASE_SECRET_KEY` server-side. Do not rename it to a `NEXT_PUBLIC_` variable or put the key in client code. The example file contains placeholders only.
