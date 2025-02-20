export function GET(request: Request) {
  const { origin } = new URL(request.url);
  const data = { origin, message: process.env.DR_CHRONO_CLIENT_ID };
  return new Response(JSON.stringify(data), { status: 200 });
}
