/**
 * Pixel size of an image in `public/`, read at build time from the file
 * header, so components can write `width` and `height` on an `<img>` and the
 * browser reserves the space before the file arrives. Without that, a photo
 * loading into a course page shoves everything below it down.
 *
 * Handles the three formats the site ships: JPEG, PNG and WebP (lossy, lossless
 * and extended). Anything else, or a missing file, returns null and the
 * component simply omits the attributes, which is what it did before.
 *
 * Only ever runs in Node during `astro build` / `astro dev`, never in the
 * browser: the importing components are `.astro` frontmatter.
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

export interface Size {
  width: number;
  height: number;
}

const cache = new Map<string, Size | null>();

export function imageSize(publicPath: string): Size | null {
  if (cache.has(publicPath)) return cache.get(publicPath)!;
  let size: Size | null = null;
  try {
    const buf = readFileSync(join(process.cwd(), 'public', publicPath.replace(/^\//, '')));
    size = png(buf) ?? webp(buf) ?? jpeg(buf);
  } catch {
    size = null;
  }
  cache.set(publicPath, size);
  return size;
}

function png(b: Buffer): Size | null {
  if (b.length < 24 || b.toString('ascii', 1, 4) !== 'PNG') return null;
  return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
}

function webp(b: Buffer): Size | null {
  if (b.length < 30 || b.toString('ascii', 0, 4) !== 'RIFF' || b.toString('ascii', 8, 12) !== 'WEBP') return null;
  const chunk = b.toString('ascii', 12, 16);
  if (chunk === 'VP8 ') {
    // Lossy: 14-bit width and height at byte 26, top two bits are scaling.
    return { width: b.readUInt16LE(26) & 0x3fff, height: b.readUInt16LE(28) & 0x3fff };
  }
  if (chunk === 'VP8L') {
    // Lossless: 14-bit values minus one, packed from byte 21.
    const bits = b.readUInt32LE(21);
    return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
  }
  if (chunk === 'VP8X') {
    // Extended: 24-bit canvas size minus one at byte 24.
    const w = b.readUIntLE(24, 3) + 1;
    const h = b.readUIntLE(27, 3) + 1;
    return { width: w, height: h };
  }
  return null;
}

function jpeg(b: Buffer): Size | null {
  if (b.length < 4 || b[0] !== 0xff || b[1] !== 0xd8) return null;
  let i = 2;
  while (i + 9 < b.length) {
    if (b[i] !== 0xff) { i++; continue; }
    const marker = b[i + 1];
    // Start-of-frame markers carry the dimensions (all SOFn except DHT, JPG, DAC).
    if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
      return { height: b.readUInt16BE(i + 5), width: b.readUInt16BE(i + 7) };
    }
    if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) { i += 2; continue; }
    i += 2 + b.readUInt16BE(i + 2);
  }
  return null;
}
