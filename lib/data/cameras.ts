import type { Camera } from "@/types";

// ─── Static data — sau này thay bằng: fetchFromDB() hoặc fetch("/api/cameras")
// Chỉ cần thay hàm getCameras(), toàn bộ UI tự cập nhật

export const CAMERAS: Camera[] = [
  {
    id: "canon-r50",
    slug: "canon-eos-r50",
    name: "Canon EOS R50",
    tagline: "Mirrorless nhỏ gọn, chất lượng chuyên nghiệp",
    badge: "Phổ biến",
    badgeColor: "bg-blue-500",
    image: "/images/r50.jpg",
    bgColor: "from-slate-100 to-slate-200",
    features: [
      "Body máy + lens kit 18-45mm",
      "Pin + sạc + thẻ nhớ 64GB",
      "Dây đeo + túi đựng",
    ],
    specs: [
      { label: "Cảm biến", value: "24.2MP APS-C" },
      { label: "Quay phim", value: "4K 30fps" },
      { label: "AF", value: "Dual Pixel CMOS II" },
      { label: "Màn hình", value: "Touch, xoay lật" },
    ],
    highlight: "Lý tưởng cho vlog, chân dung, du lịch",
    priceFrom: "140.000đ",
    available: true,
  },
  {
    id: "fujifilm-xa3",
    slug: "fujifilm-x-a3",
    name: "Fujifilm X-A3",
    tagline: "Màu film đặc trưng Fujifilm, selfie hoàn hảo",
    badge: "Giá tốt nhất",
    badgeColor: "bg-green-500",
    image: "/images/xa3.webp",
    bgColor: "from-amber-50 to-amber-100",
    features: [
      "Body máy + lens kit 16-50mm",
      "Pin + sạc + thẻ nhớ",
      "Dây đeo + túi đựng",
    ],
    specs: [
      { label: "Cảm biến", value: "24.2MP APS-C" },
      { label: "Quay phim", value: "Full HD 1080p" },
      { label: "Màn hình", value: 'Selfie flip 3"' },
      { label: "Film sim", value: "15 chế độ" },
    ],
    highlight: "Ảnh màu film vintage cực đẹp, dễ dùng",
    priceFrom: "90.000đ",
    available: true,
  },
  {
    id: "fujifilm-xt30",
    slug: "fujifilm-x-t30",
    name: "Fujifilm X-T30",
    tagline: "Hiệu suất cao, ảnh chất lượng đỉnh cao",
    badge: "Cao cấp",
    badgeColor: "bg-purple-500",
    image: "/images/xt30.avif",
    bgColor: "from-zinc-100 to-zinc-200",
    features: [
      "Body máy + lens kit 15-45mm",
      "Pin + sạc + thẻ nhớ",
      "Dây đeo + túi đựng",
    ],
    specs: [
      { label: "Cảm biến", value: "26.1MP X-Trans" },
      { label: "Quay phim", value: "4K 30fps" },
      { label: "AF", value: "425 điểm lấy nét" },
      { label: "Film sim", value: "17 chế độ" },
    ],
    highlight: "Chất lượng ảnh tốt nhất trong 3 dòng",
    priceFrom: "180.000đ",
    available: true,
  },
];

// Hàm này sau khi có DB, chỉ cần đổi thành:
// export async function getCameras(): Promise<Camera[]> {
//   return db.query("SELECT * FROM cameras WHERE available = true");
// }
export function getCameras(): Camera[] {
  return CAMERAS.filter((c) => c.available);
}

export function getCameraById(id: string): Camera | undefined {
  return CAMERAS.find((c) => c.id === id);
}
