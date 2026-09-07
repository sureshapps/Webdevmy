import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PORT, API_PREFIX } from "../shared/const";

/**
 * Optional local/Node host for RI/OS.
 *
 * Note: this file is NOT used by the Vercel deployment described in
 * README.md — Vercel serves the Vite build output (`dist/`) directly as a
 * static single-page app. This server exists only if you want to run RI/OS
 * behind a plain Node process (e.g. on your own VPS with PM2 or systemd),
 * matching the workflow already used for other self-hosted projects.
 */

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");

const app = express();

app.get(`${API_PREFIX}/health`, (_req, res) => {
  res.json({ status: "ok" });
});

app.use(express.static(distDir));

app.get("*", (_req, res) => {
  res.sendFile(path.join(distDir, "index.html"));
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`RI/OS static server listening on http://localhost:${PORT}`);
});
