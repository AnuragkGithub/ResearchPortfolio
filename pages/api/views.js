export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!req.headers["content-type"]?.startsWith("application/json")) {
    return res.status(415).json({ error: "Expected a JSON request" });
  }

  const supabaseUrl = process.env.SUPABASE_URL?.replace(/\/$/, "");
  const secretKey = process.env.SUPABASE_SECRET_KEY;

  if (!supabaseUrl || !secretKey) {
    return res.status(503).json({ error: "Viewer counter is not configured" });
  }

  try {
    const response = await fetch(
      `${supabaseUrl}/rest/v1/rpc/increment_portfolio_views`,
      {
        method: "POST",
        headers: {
          apikey: secretKey,
          Authorization: `Bearer ${secretKey}`,
          "Content-Type": "application/json",
        },
        body: "{}",
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return res.status(502).json({ error: "Viewer counter is unavailable" });
    }

    const count = await response.json();
    if (!Number.isSafeInteger(count) || count < 1) {
      return res.status(502).json({ error: "Viewer counter returned an invalid count" });
    }

    return res.status(200).json({ count });
  } catch {
    return res.status(502).json({ error: "Viewer counter is unavailable" });
  }
}
