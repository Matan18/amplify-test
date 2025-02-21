export function GET(request: Request) {
  const host = request.headers.get("host");
  const redirectUrl = `https://${host}/api/teste`;

  return Response.redirect(redirectUrl, 301);
}
