import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Apple Touch Icon — hiển thị khi user "Add to Home Screen" trên iOS
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 40,
          background: "linear-gradient(135deg, #8B5E3C 0%, #D4862A 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
        }}
      >
        <div style={{ fontSize: 90, display: "flex" }}>📷</div>
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "white",
            letterSpacing: 1,
            display: "flex",
          }}
        >
          MATO
        </div>
      </div>
    ),
    { ...size }
  );
}
