import type { PricingRow, PricingCamera } from "@/types";

// Camera order phải khớp với PricingRow.prices index
export const PRICING_CAMERAS: PricingCamera[] = [
  { name: "Canon EOS R50", image: "/images/r50.jpg", cameraId: "canon-r50" },
  { name: "Fujifilm X-A3", image: "/images/xa3.webp", cameraId: "fujifilm-xa3" },
  { name: "Fujifilm X-T30", image: "/images/xt30.avif", cameraId: "fujifilm-xt30" },
];

export const PRICING_ROWS: PricingRow[] = [
  {
    duration: "6 Tiếng",
    durationKey: "6h",
    icon: "⏰",
    description: "Buổi chụp ngoại cảnh, sự kiện",
    prices: ["140.000đ", "90.000đ", "200.000đ"],
    highlight: false,
  },
  {
    duration: "1 Ngày",
    durationKey: "1d",
    icon: "📅",
    description: "Một ngày du lịch, tham quan",
    prices: ["180.000đ", "120.000đ", "250.000đ"],
    highlight: true,
  },
  {
    duration: "3 Ngày",
    durationKey: "3d",
    icon: "🗓️",
    description: "Chuyến du lịch ngắn ngày",
    prices: ["170.000đ/ngày", "110.000đ/ngày", "240.000đ/ngày"],
    highlight: false,
  },
  {
    duration: "5 Ngày",
    durationKey: "5d",
    icon: "📆",
    description: "Kỳ nghỉ, chuyến công tác",
    prices: ["160.000đ/ngày", "100.000đ/ngày", "230.000đ/ngày"],
    highlight: false,
  },
];

export const RENTAL_NOTES: string[] = [
  "Đặt cọc theo giá trị máy (hoàn trả khi trả máy đúng hạn)",
  "Xuất trình CCCD khi thuê",
  "Không tự ý tháo máy, mở vào nước",
  "Hỏng hóc, mất mát tự thương theo thỏa thuận",
];
