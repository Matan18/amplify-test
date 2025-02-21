export function GET(request: Request) {
  const redirectUrl = `https://develop.d1tibgpadd1t33.amplifyapp.com/api/teste`;

  return Response.redirect(redirectUrl, 301);
}
