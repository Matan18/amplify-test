const data = { message: process.env.MESSAGE };

export function GET() {
  return new Response(JSON.stringify(data), { status: 200 });
}
