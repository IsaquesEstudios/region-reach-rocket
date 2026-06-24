#!/usr/bin/env node
// Baixa os assets do CDN Lovable (/__l5e/assets-v1/...) para public/,
// para que funcionem em ambientes self-hosted (Coolify) onde o CDN
// proprietário do Lovable não existe.
import { readdir, readFile, mkdir, writeFile, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, dirname } from "node:path";

const ASSETS_DIR = "src/assets";
const PUBLIC_DIR = "public";
const CDN_HOSTS = [
  "https://region-reach-rocket.lovable.app",
  "https://id-preview--ce6964cb-e37b-4cd2-851d-915523b391c5.lovable.app",
];

async function findAssetJsons(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await findAssetJsons(p)));
    else if (entry.name.endsWith(".asset.json")) out.push(p);
  }
  return out;
}

async function download(url) {
  for (const host of CDN_HOSTS) {
    const full = host + url;
    const res = await fetch(full);
    if (res.ok) return Buffer.from(await res.arrayBuffer());
  }
  throw new Error(`Falha ao baixar ${url}`);
}

const files = existsSync(ASSETS_DIR) ? await findAssetJsons(ASSETS_DIR) : [];
console.log(`[assets] ${files.length} pointer(s) encontrados`);

let downloaded = 0;
for (const file of files) {
  const meta = JSON.parse(await readFile(file, "utf8"));
  if (!meta.url) continue;
  const dest = join(PUBLIC_DIR, meta.url);
  if (existsSync(dest)) {
    const st = await stat(dest);
    if (st.size === meta.size) continue;
  }
  await mkdir(dirname(dest), { recursive: true });
  const buf = await download(meta.url);
  await writeFile(dest, buf);
  downloaded++;
  console.log(`[assets] ✓ ${meta.url} (${buf.length} bytes)`);
}
console.log(`[assets] concluído (${downloaded} baixados)`);
