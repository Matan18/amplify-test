export function GET(request: Request) {
  const host = request.headers.get("host");
  const redirectUrl = `http://localhost:3000/api/teste`;

  return Response.redirect(redirectUrl, 301);
}
