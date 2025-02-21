export function GET(request: Request) {
  const data = { request, message: process.env.DR_CHRONO_CLIENT_ID };
  return new Response(JSON.stringify(data), { status: 200 });
}
