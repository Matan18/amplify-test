export function GET(request: Request) {
  const host = request.headers.get("host");
  const { origin } = new URL(request.url);
  const data = { origin, host, message: process.env.DR_CHRONO_CLIENT_ID };
  return new Response(JSON.stringify(data), { status: 200 });
}
