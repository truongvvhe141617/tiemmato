import { ImageResponse } from "next/og";

export const alt = "Tiệm MATO - Cho Thuê Máy Ảnh Giá Rẻ Tại Sóc Sơn, Hà Nội";
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
          position: "relative",
        }}
      >
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
            marginBottom: 20,
          }}
        >
          📷
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            gap: 12,
            marginBottom: 8,
          }}
        >
          <span
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#5D3A1A",
            }}
          >
            Tiệm
          </span>
          <span
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#D4862A",
              fontStyle: "italic",
            }}
          >
            MATO
          </span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#7A5C45",
            letterSpacing: 4,
            marginBottom: 28,
          }}
        >
          Máy Ảnh Cho Thuê · Sóc Sơn, Hà Nội
        </div>

        {/* Price badge */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            background: "rgba(139,94,60,0.12)",
            borderRadius: 16,
            padding: "12px 32px",
            marginBottom: 28,
          }}
        >
          <span style={{ fontSize: 34, fontWeight: 700, color: "#D4862A" }}>
            Từ 90.000đ
          </span>
          <span style={{ fontSize: 18, color: "#7A5C45" }}>/6 tiếng</span>
        </div>

        {/* 3 cameras */}
        <div style={{ display: "flex", flexDirection: "row", gap: 12 }}>
          {["Canon EOS R50", "Fujifilm X-A3", "Fujifilm X-T30"].map((cam) => (
            <div
              key={cam}
              style={{
                display: "flex",
                background: "white",
                borderRadius: 12,
                padding: "8px 18px",
                fontSize: 15,
                color: "#5D3A1A",
                fontWeight: 600,
              }}
            >
              {cam}
            </div>
          ))}
        </div>

        {/* Phone — bottom */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 28,
            fontSize: 18,
            color: "#8B5E3C",
            fontWeight: 600,
          }}
        >
          📞 0869 209 674 · Sóc Sơn, Hà Nội
        </div>
      </div>
    ),
    { ...size }
  );
}
