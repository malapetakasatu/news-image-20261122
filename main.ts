/**
 * make.fun news-image-20261122 entrypoint
 * Sunday 22 November 2026 World News Broadsheet
 * 
 * Delivers verified single-day news broadsheet image to /output/entry.png
 */

import { copyFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const SOURCE_IMAGE = new URL('./entry.png', import.meta.url);
const TARGET_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const TARGET_FILE = join(TARGET_DIR, 'entry.png');

if (!existsSync(SOURCE_IMAGE)) {
  console.error('Source image entry.png not found');
  process.exit(1);
}

const stats = statSync(SOURCE_IMAGE);
console.log(`Copying broadsheet (${stats.size} bytes) to ${TARGET_FILE}...`);
copyFileSync(SOURCE_IMAGE, TARGET_FILE);
console.log('Successfully written entry.png');
