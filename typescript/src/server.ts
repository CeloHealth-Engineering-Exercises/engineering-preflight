import { readFile } from "node:fs/promises";
import { createServer } from "node:http";
import { buildGreeting } from "./greetingService.ts";

const indexHtml = await readFile(new URL("./web/index.html", import.meta.url), "utf8");
const port = Number(process.env.PORT ?? 3000);

const server = createServer((request, response) => {
  const url = new URL(request.url ?? "/", `http://${request.headers.host ?? `localhost:${port}`}`);

  if (request.method === "GET" && url.pathname === "/") {
    response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    response.end(indexHtml);
    return;
  }

  if (request.method === "GET" && url.pathname === "/hello") {
    response.writeHead(200, { "content-type": "application/json; charset=utf-8" });
    response.end(JSON.stringify({ message: buildGreeting(url.searchParams.get("name") ?? undefined) }));
    return;
  }

  response.writeHead(404, { "content-type": "application/json; charset=utf-8" });
  response.end(JSON.stringify({ error: "Not found" }));
});

server.listen(port, () => {
  console.log(`Preflight running at http://localhost:${port}`);
});
