export function GET() {
  const data = {
    message: process.env.MESSAGE,
  };

  return new Response(JSON.stringify(data), { status: 200 });
}
