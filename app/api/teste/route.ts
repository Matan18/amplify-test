export function GET() {
  console.log({ env: process.env });
  const data = {
    message: process.env.MESSAGE,
  };

  return new Response(JSON.stringify(data), { status: 200 });
}
