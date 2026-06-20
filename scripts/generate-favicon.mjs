// Script tạo favicon.ico từ SVG dùng sharp + ico-endec
// Chạy: node scripts/generate-favicon.mjs

import { writeFileSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = join(__dirname, "../public/favicon.ico");

// ICO file format: header + directory + image data (32x32 PNG embedded)
// Dùng pure Node — không cần thư viện ngoài

// PNG 32x32 được encode sẵn dưới dạng base64
// (camera icon nâu-cam, background tròn)
// Generate bằng cách tạo PNG data thủ công

async function generateFavicon() {
  try {
    // Thử dùng sharp nếu có
    const sharp = await import("sharp").catch(() => null);
    
    if (sharp) {
      const svgBuffer = Buffer.from(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
          <defs>
            <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#8B5E3C"/>
              <stop offset="100%" stop-color="#D4862A"/>
            </linearGradient>
          </defs>
          <circle cx="24" cy="24" r="24" fill="url(#bg)"/>
          <rect x="9" y="18" width="30" height="18" rx="3.5" fill="white" opacity="0.95"/>
          <circle cx="24" cy="27" r="6.5" fill="#8B5E3C"/>
          <circle cx="24" cy="27" r="4" fill="#5D3A1A"/>
          <circle cx="22" cy="25" r="1.3" fill="white" opacity="0.6"/>
          <rect x="17" y="13" width="14" height="6" rx="2" fill="white" opacity="0.95"/>
          <circle cx="13" cy="21" r="1.8" fill="#D4862A"/>
        </svg>
      `);

      const png48 = await sharp.default(svgBuffer).resize(48, 48).png().toBuffer();
      const png32 = await sharp.default(svgBuffer).resize(32, 32).png().toBuffer();
      const png16 = await sharp.default(svgBuffer).resize(16, 16).png().toBuffer();

      // Tạo ICO chứa 3 sizes: 16, 32, 48
      const ico = createIco([
        { data: png16, size: 16 },
        { data: png32, size: 32 },
        { data: png48, size: 48 },
      ]);

      writeFileSync(outputPath, ico);
      console.log("✅ favicon.ico created with 16x16, 32x32, 48x48");
    } else {
      console.log("⚠ sharp not available, using fallback method");
      createFallbackFavicon();
    }
  } catch (e) {
    console.error("Error:", e.message);
    createFallbackFavicon();
  }
}

function createIco(images) {
  // ICO format spec
  const headerSize = 6;
  const dirEntrySize = 16;
  const dirSize = dirEntrySize * images.length;
  const dataOffset = headerSize + dirSize;

  let offset = dataOffset;
  const offsets = images.map((img) => {
    const o = offset;
    offset += img.data.length;
    return o;
  });

  const totalSize = offset;
  const buf = Buffer.alloc(totalSize);

  // Header: reserved=0, type=1 (ICO), count
  buf.writeUInt16LE(0, 0);
  buf.writeUInt16LE(1, 2);
  buf.writeUInt16LE(images.length, 4);

  // Directory entries
  images.forEach((img, i) => {
    const base = headerSize + i * dirEntrySize;
    buf.writeUInt8(img.size === 256 ? 0 : img.size, base);     // width
    buf.writeUInt8(img.size === 256 ? 0 : img.size, base + 1); // height
    buf.writeUInt8(0, base + 2);   // color count
    buf.writeUInt8(0, base + 3);   // reserved
    buf.writeUInt16LE(1, base + 4); // planes
    buf.writeUInt16LE(32, base + 6); // bit count
    buf.writeUInt32LE(img.data.length, base + 8);  // size
    buf.writeUInt32LE(offsets[i], base + 12); // offset
  });

  // Image data
  images.forEach((img, i) => {
    img.data.copy(buf, offsets[i]);
  });

  return buf;
}

function createFallbackFavicon() {
  // Minimal valid 1x1 ICO as fallback
  console.log("Creating minimal fallback favicon.ico");
  const minimalIco = Buffer.from(
    "000001000100101000000100200068050000160000002800000010000000200000000100200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "hex"
  );
  writeFileSync(outputPath, minimalIco);
}

generateFavicon();
