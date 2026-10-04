import { randomUUID } from "crypto";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  if (!req.headers["content-type"]?.startsWith("application/json")) {
    return res.status(415).json({
      error: "Expected a JSON request",
    });
  }

  const supabaseUrl = process.env.SUPABASE_URL?.replace(/\/$/, "");
  const secretKey = process.env.SUPABASE_SECRET_KEY;

  if (!supabaseUrl || !secretKey) {
    return res.status(503).json({
      error: "Viewer counter is not configured",
    });
  }

  try {
    // Read the existing visitor cookie.
    let visitorId = req.cookies?.portfolio_visitor_id;

    // First-time visitor: create a new anonymous ID.
    if (!visitorId) {
      visitorId = randomUUID();

      const cookieParts = [
        `portfolio_visitor_id=${visitorId}`,
        "Path=/",
        "HttpOnly",
        "SameSite=Lax",
        "Max-Age=31536000",
      ];

      // Secure cookie on production HTTPS.
      if (process.env.NODE_ENV === "production") {
        cookieParts.push("Secure");
      }

      res.setHeader("Set-Cookie", cookieParts.join("; "));
    }

    // Call Supabase using the server-side secret key.
    const response = await fetch(
      `${supabaseUrl}/rest/v1/rpc/increment_portfolio_views`,
      {
        method: "POST",
        headers: {
          apikey: secretKey,
          Authorization: `Bearer ${secretKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          p_visitor_id: visitorId,
        }),
        cache: "no-store",
      }
    );

    if (!response.ok) {
      const errorText = await response.text();

      console.error(
        "Supabase portfolio counter error:",
        response.status,
        errorText
      );

      return res.status(502).json({
        error: "Viewer counter is unavailable",
      });
    }

    const count = await response.json();

    if (!Number.isSafeInteger(count) || count < 0) {
      return res.status(502).json({
        error: "Viewer counter returned an invalid count",
      });
    }

    return res.status(200).json({
      count,
    });
  } catch (error) {
    console.error("Portfolio view error:", error);

    return res.status(502).json({
      error: "Viewer counter is unavailable",
    });
  }
}