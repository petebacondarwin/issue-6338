export async function onRequestGet(context) {
  const url = new URL(context.request.url);
  const res = new Response(`GET request to ${url.pathname}`);
  res.headers.set("Content-Type", "text/plain");
  return res;
}

export async function onRequestPost(context) {
  const url = new URL(context.request.url);
  const res = new Response(`POST request to ${url.pathname}`);
  res.headers.set("Content-Type", "text/plain");
  return res;
}
