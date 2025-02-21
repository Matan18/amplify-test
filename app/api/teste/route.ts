export async function GET(request: Request) {
  const url = request.url;
  const headers = Object.fromEntries(request.headers.entries());
  const method = request.method;

  const host =
    request.headers.get("x-forwarded-host") || request.headers.get("host");
  const protocol = request.headers.get("x-forwarded-proto") || "https";
  const appUrl = `${protocol}://${host}`;

  const data = {
    url,
    appUrl,
    method,
    headers,
    message: process.env.DR_CHRONO_CLIENT_ID,
  };

  return new Response(JSON.stringify(data, null, 2), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
