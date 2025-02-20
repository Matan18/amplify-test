const data = { message: process.env.DR_CHRONO_CLIENT_ID };

export function GET() {
  return new Response(JSON.stringify(data), { status: 200 });
}
