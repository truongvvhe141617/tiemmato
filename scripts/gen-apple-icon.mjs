import sharp from "sharp";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8B5E3C"/>
      <stop offset="100%" stop-color="#D4862A"/>
    </linearGradient>
  </defs>
  <rect width="180" height="180" rx="40" fill="url(#g)"/>
  <rect x="27" y="63" width="126" height="76" rx="12" fill="white" opacity=".95"/>
  <circle cx="90" cy="100" r="28" fill="#8B5E3C"/>
  <circle cx="90" cy="100" r="17" fill="#5D3A1A"/>
  <circle cx="83" cy="93" r="6" fill="white" opacity=".6"/>
  <rect x="58" y="45" width="64" height="24" rx="8" fill="white" opacity=".95"/>
  <circle cx="45" cy="72" r="8" fill="#D4862A"/>
</svg>`;

await sharp(Buffer.from(svg))
  .resize(180, 180)
  .png()
  .toFile("public/apple-touch-icon.png");

console.log("✅ apple-touch-icon.png (180x180) created");
