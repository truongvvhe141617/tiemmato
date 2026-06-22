import type { FAQItem } from "@/types";

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    q: "Tôi cần chuẩn bị gì để thuê máy?",
    a: "Bạn chỉ cần mang theo CCCD/CMND bản gốc và tiền đặt cọc theo giá trị máy. Đơn giản vậy thôi!",
    category: "camera-rental",
    order: 1,
  },
  {
    id: "faq-2",
    q: "Tiền cọc là bao nhiêu và có được hoàn lại không?",
    a: "Tiền cọc tương đương một phần giá trị máy (tiệm sẽ thông báo cụ thể khi liên hệ). Hoàn 100% khi bạn trả máy đúng hạn, đầy đủ phụ kiện và nguyên vẹn.",
    category: "camera-rental",
    order: 2,
  },
  {
    id: "faq-3",
    q: "Có thể thuê máy giao tận nơi không?",
    a: "Có thể thỏa thuận giao/nhận tận nơi trong khu vực Sóc Sơn và Hà Nội. Liên hệ tiệm để biết chi tiết phí vận chuyển (nếu có).",
    category: "camera-rental",
    order: 3,
  },
  {
    id: "faq-4",
    q: "Nếu tôi chưa biết dùng máy ảnh thì sao?",
    a: "Không vấn đề gì! Tiệm sẽ hướng dẫn cơ bản cách sử dụng máy miễn phí khi bạn nhận máy. Trong quá trình thuê nếu có thắc mắc cứ nhắn tin hỏi.",
    category: "camera-rental",
    order: 4,
  },
  {
    id: "faq-5",
    q: "Có thể thuê theo giờ không?",
    a: "Gói ngắn nhất là 6 tiếng. Nếu cần thuê ít hơn, liên hệ tiệm để được tư vấn gói phù hợp.",
    category: "camera-rental",
    order: 5,
  },
  {
    id: "faq-6",
    q: "Máy bị lỗi hoặc hỏng trong quá trình thuê thì xử lý thế nào?",
    a: "Trường hợp lỗi do máy (không phải do người dùng), tiệm sẽ hỗ trợ đổi máy khác. Nếu do tác động bên ngoài, hai bên thỏa thuận hợp lý và công bằng.",
    category: "camera-rental",
    order: 6,
  },
  {
    id: "faq-7",
    q: "Có cho thuê dài hạn hơn 5 ngày không?",
    a: "Có. Liên hệ trực tiếp để được báo giá ưu đãi cho thuê dài ngày.",
    category: "camera-rental",
    order: 7,
  },
  {
    id: "faq-8",
    q: "Thẻ nhớ đã có ảnh của người khác không?",
    a: "Thẻ nhớ luôn được format sạch trước khi đưa cho khách mới. Bạn an tâm hoàn toàn.",
    category: "camera-rental",
    order: 8,
  },
];

export function getFAQsByCategory(category: FAQItem["category"]) {
  return FAQS.filter((f) => f.category === category).sort((a, b) => a.order - b.order);
}
