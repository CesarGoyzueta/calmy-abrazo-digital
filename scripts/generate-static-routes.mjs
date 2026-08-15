import { copyFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const routes = ["sobre-calmy", "privacidad", "terminos", "libro-reclamaciones"];
const dist = new URL("../dist/", import.meta.url);
const source = new URL("index.html", dist);

await Promise.all(
  routes.map(async (route) => {
    const directory = new URL(`${route}/`, dist);
    await mkdir(directory, { recursive: true });
    await copyFile(source, new URL("index.html", directory));
  }),
);

console.log(`Generated static entry points: ${routes.map((route) => join("/", route, "/")).join(", ")}`);
