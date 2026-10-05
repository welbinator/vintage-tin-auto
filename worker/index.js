// Static assets + contact form handler. No DB; accepts + echoes ok.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/contact" && request.method === "POST") {
      try {
        const data = await request.json();
        if (!data || !data.name || (!data.phone && !data.email)) {
          return new Response(JSON.stringify({ ok: false, error: "Please include your name and a phone or email." }), { status: 400, headers: { "Content-Type": "application/json" } });
        }
        console.log("LEAD", JSON.stringify(data));
        return new Response(JSON.stringify({ ok: true }), { headers: { "Content-Type": "application/json" } });
      } catch {
        return new Response(JSON.stringify({ ok: false, error: "Bad request." }), { status: 400, headers: { "Content-Type": "application/json" } });
      }
    }
    return env.ASSETS.fetch(request);
  }
};
