import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Tiệm MATO - Cho Thuê Máy Ảnh Giá Rẻ Tại Hà Nội";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #FDF6EE 0%, #F5E6D3 40%, #EDD5B3 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Background decoration */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 60,
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "rgba(139,94,60,0.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 60,
            width: 180,
            height: 180,
            borderRadius: "50%",
            background: "rgba(212,134,42,0.1)",
          }}
        />

        {/* Logo icon */}
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "#8B5E3C",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 40,
            marginBottom: 24,
            boxShadow: "0 8px 32px rgba(93,58,26,0.3)",
          }}
        >
          📷
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#5D3A1A",
            marginBottom: 8,
            letterSpacing: "-1px",
          }}
        >
          Tiệm{" "}
          <span style={{ color: "#D4862A", fontStyle: "italic" }}>MATO</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: "#7A5C45",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: 32,
          }}
        >
          Máy Ảnh Cho Thuê · Hà Nội
        </div>

        {/* Price badge */}
        <div
          style={{
            background: "rgba(139,94,60,0.12)",
            borderRadius: 16,
            padding: "12px 32px",
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 36,
          }}
        >
          <span style={{ fontSize: 36, fontWeight: 700, color: "#D4862A" }}>
            Từ 90.000đ
          </span>
          <span style={{ fontSize: 18, color: "#7A5C45" }}>/6 tiếng</span>
        </div>

        {/* 3 cameras */}
        <div style={{ display: "flex", gap: 16 }}>
          {["Canon EOS R50", "Fujifilm X-A3", "Fujifilm X-T30"].map((cam) => (
            <div
              key={cam}
              style={{
                background: "white",
                borderRadius: 12,
                padding: "8px 20px",
                fontSize: 16,
                color: "#5D3A1A",
                fontWeight: 600,
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              {cam}
            </div>
          ))}
        </div>

        {/* Phone */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            fontSize: 18,
            color: "#8B5E3C",
            fontWeight: 600,
          }}
        >
          📞 0869 209 674 · Bắc Từ Liêm, Hà Nội
        </div>
      </div>
    ),
    { ...size }
  );
}
