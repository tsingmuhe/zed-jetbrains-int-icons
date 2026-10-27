import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { getTheme } from './theme';
import { getManifest } from './manifest';
import type { IconTheme } from './types';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const iconThemesDir = join(projectRoot, 'icon_themes');

const themeManifest = (themes: IconTheme[]) => ({
  $schema: 'https://zed.dev/schema/icon_themes/v0.2.0.json',
  name: 'JetBrains Int Icons Theme',
  author: 'tsingmuhe',
  themes
});

mkdirSync(iconThemesDir, { recursive: true });

const outputs = [
  { fileName: 'dark-theme.json', manifest: getManifest('dark') },
  { fileName: 'light-theme.json', manifest: getManifest('light') }
] as const;

for (const { fileName, manifest } of outputs) {
  writeFileSync(
    join(iconThemesDir, fileName),
    `${JSON.stringify(themeManifest([getTheme(manifest)]), null, 2)}\n`
  );
}

console.log('JetBrains Int Icons Theme built successfully.');
