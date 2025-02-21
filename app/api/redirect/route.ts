export function GET(request: Request) {
  const host = request.headers.get("host");
  const redirectUrl = `https://develop.d1tibgpadd1t33.amplifyapp.com/api/teste`;

  return Response.redirect(redirectUrl, 301);
}
