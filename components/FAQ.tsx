"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Tôi cần chuẩn bị gì để thuê máy?",
    a: "Bạn chỉ cần mang theo CCCD/CMND bản gốc và tiền đặt cọc theo giá trị máy. Đơn giản vậy thôi!",
  },
  {
    q: "Tiền cọc là bao nhiêu và có được hoàn lại không?",
    a: "Tiền cọc tương đương một phần giá trị máy (tiệm sẽ thông báo cụ thể khi liên hệ). Hoàn 100% khi bạn trả máy đúng hạn, đầy đủ phụ kiện và nguyên vẹn.",
  },
  {
    q: "Có thể thuê máy giao tận nơi không?",
    a: "Có thể thỏa thuận giao/nhận tận nơi trong khu vực Hà Nội. Liên hệ tiệm để biết chi tiết phí vận chuyển (nếu có).",
  },
  {
    q: "Nếu tôi chưa biết dùng máy ảnh thì sao?",
    a: "Không vấn đề gì! Tiệm sẽ hướng dẫn cơ bản cách sử dụng máy miễn phí khi bạn nhận máy. Trong quá trình thuê nếu có thắc mắc cứ nhắn tin hỏi.",
  },
  {
    q: "Có thể thuê theo giờ không?",
    a: "Gói ngắn nhất là 6 tiếng. Nếu cần thuê ít hơn, liên hệ tiệm để được tư vấn gói phù hợp.",
  },
  {
    q: "Máy bị lỗi hoặc hỏng trong quá trình thuê thì xử lý thế nào?",
    a: "Trường hợp lỗi do máy (không phải do người dùng), tiệm sẽ hỗ trợ đổi máy khác. Nếu do tác động bên ngoài, hai bên thỏa thuận hợp lý và công bằng.",
  },
  {
    q: "Có cho thuê dài hạn hơn 5 ngày không?",
    a: "Có. Liên hệ trực tiếp để được báo giá ưu đãi cho thuê dài ngày.",
  },
  {
    q: "Thẻ nhớ đã có ảnh của người khác không?",
    a: "Thẻ nhớ luôn được format sạch trước khi đưa cho khách mới. Bạn an tâm hoàn toàn.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-mato-cream text-mato-brown text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="section-title mb-4">Câu Hỏi Thường Gặp</h2>
          <p className="text-mato-text-light">
            Chưa thấy câu trả lời? Nhắn tin hoặc gọi cho tiệm nhé.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                openIdx === idx
                  ? "border-mato-brown/40 shadow-md"
                  : "border-mato-cream-dark"
              }`}
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center gap-3 p-5 text-left hover:bg-mato-cream/50 transition-colors"
                aria-expanded={openIdx === idx}
                aria-controls={`faq-answer-${idx}`}
                id={`faq-question-${idx}`}
              >
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    openIdx === idx
                      ? "bg-mato-orange text-white"
                      : "bg-mato-cream text-mato-brown"
                  }`}
                >
                  {openIdx === idx ? "−" : "+"}
                </span>
                <span className="font-semibold text-mato-brown-dark text-sm">
                  {faq.q}
                </span>
              </button>

              {openIdx === idx && (
                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-question-${idx}`}
                  className="px-5 pb-5 pt-0 text-sm text-mato-text leading-relaxed border-t border-mato-cream-dark"
                >
                  <p className="pt-3">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-10 text-center bg-mato-cream rounded-2xl p-6 border border-mato-cream-dark">
          <p className="font-semibold text-mato-brown-dark mb-1">
            Còn thắc mắc khác?
          </p>
          <p className="text-sm text-mato-text-light mb-4">
            Tiệm luôn sẵn sàng giải đáp
          </p>
          <a
            href="tel:0869209674"
            className="btn-primary text-sm"
          >
            📞 Gọi Ngay: 0869 209 674
          </a>
        </div>
      </div>
    </section>
  );
}
