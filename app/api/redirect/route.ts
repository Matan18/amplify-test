export function GET(request: Request) {
  const redirectUrl = `https://develop.d1ve6l3zrsm3pf.amplifyapp.com/api/teste`;

  return Response.redirect(redirectUrl, 301);
}
