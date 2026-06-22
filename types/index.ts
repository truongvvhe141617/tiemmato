// ============================================================
// TYPES — Tiệm MATO
// Định nghĩa tại đây, dùng cho cả static data và DB sau này
// ============================================================

// ─── Dịch vụ (Service Category) ────────────────────────────
export type ServiceCategory =
  | "camera-rental"   // Cho thuê máy ảnh (hiện tại)
  | "studio"          // Studio chụp ảnh (sắp tới)
  | "makeup"          // Makeup (sắp tới)
  | "photography";    // Chụp ảnh dịch vụ (sắp tới)

// ─── Máy ảnh ───────────────────────────────────────────────
export interface CameraSpec {
  label: string;
  value: string;
}

export interface Camera {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  badgeColor: string;
  image: string;
  bgColor: string;
  features: string[];
  specs: CameraSpec[];
  highlight: string;
  priceFrom: string;
  available: boolean;      // Trạng thái sẵn có (DB sẽ cập nhật real-time)
  slug: string;            // URL-friendly ID
}

// ─── Giá thuê ──────────────────────────────────────────────
export interface PricingRow {
  duration: string;
  durationKey: string;     // Dùng cho DB query
  icon: string;
  description: string;
  prices: string[];
  highlight: boolean;
}

export interface PricingCamera {
  name: string;
  image: string;
  cameraId: string;        // Ref đến Camera.id
}

// ─── Đánh giá ──────────────────────────────────────────────
export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  camera: string;
  serviceCategory: ServiceCategory;
  createdAt?: string;      // ISO date string từ DB
  verified?: boolean;      // Xác nhận đã thuê (DB)
}

// ─── FAQ ───────────────────────────────────────────────────
export interface FAQItem {
  id: string;
  q: string;
  a: string;
  category: ServiceCategory;
  order: number;
}

// ─── Dịch vụ Studio (sắp tới) ──────────────────────────────
export interface StudioPackage {
  id: string;
  name: string;
  description: string;
  duration: string;        // "1 tiếng", "2 tiếng"...
  price: string;
  includes: string[];
  image?: string;
  available: boolean;
}

// ─── Dịch vụ Makeup (sắp tới) ──────────────────────────────
export interface MakeupService {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  artist?: string;
  styles: string[];        // ["Tự nhiên", "Cô dâu", "Sự kiện"...]
  available: boolean;
}

// ─── Đặt lịch (sắp tới) ────────────────────────────────────
export type BookingStatus = "pending" | "confirmed" | "cancelled" | "completed";

export interface Booking {
  id: string;
  customerName: string;
  phone: string;
  serviceCategory: ServiceCategory;
  itemId: string;          // Camera.id, StudioPackage.id, MakeupService.id...
  startDate: string;       // ISO date
  endDate: string;         // ISO date
  status: BookingStatus;
  deposit: number;
  totalPrice: number;
  notes?: string;
  createdAt: string;
}
