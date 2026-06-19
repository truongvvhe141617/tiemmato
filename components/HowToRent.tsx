const steps = [
  {
    step: "01",
    icon: "💬",
    title: "Liên Hệ & Chọn Máy",
    description:
      "Nhắn tin Facebook hoặc gọi điện cho tiệm. Cho biết loại máy, thời gian và mục đích sử dụng để tiệm tư vấn phù hợp nhất.",
    detail: "Phản hồi trong vòng 15 phút",
  },
  {
    step: "02",
    icon: "📋",
    title: "Xác Nhận & Đặt Cọc",
    description:
      "Xuất trình CCCD/CMND. Đặt cọc theo giá trị máy (hoàn trả 100% khi trả máy đúng hạn và nguyên vẹn).",
    detail: "CCCD + đặt cọc",
  },
  {
    step: "03",
    icon: "📷",
    title: "Nhận Máy & Phụ Kiện",
    description:
      "Nhận máy tại tiệm hoặc thỏa thuận giao nhận. Máy kèm đầy đủ: body, lens kit, pin, sạc, thẻ nhớ, dây đeo, túi đựng.",
    detail: "Bắc Từ Liêm, Hà Nội",
  },
  {
    step: "04",
    icon: "🎨",
    title: "Chụp Thỏa Thích",
    description:
      "Tự do sáng tạo với máy ảnh chất lượng cao. Tiệm hỗ trợ hướng dẫn cơ bản nếu bạn chưa quen máy.",
    detail: "Hỗ trợ 24/7 nếu cần",
  },
  {
    step: "05",
    icon: "🔄",
    title: "Trả Máy",
    description:
      "Trả máy đúng hạn, tiệm kiểm tra và hoàn cọc ngay. Muốn thuê thêm? Gia hạn dễ dàng qua tin nhắn.",
    detail: "Hoàn cọc ngay lập tức",
  },
];

export default function HowToRent() {
  return (
    <section id="how-to-rent" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-mato-cream text-mato-brown text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Quy Trình
          </span>
          <h2 className="section-title mb-4">Cách Thuê Máy Đơn Giản</h2>
          <p className="text-mato-text-light max-w-xl mx-auto">
            Chỉ 5 bước đơn giản để có ngay máy ảnh chuyên nghiệp trong tay.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — canh giữa icon tròn */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-mato-cream-dark" style={{ marginLeft: "10%", marginRight: "10%" }} />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 lg:items-stretch">
            {steps.map((step, idx) => (
              <div
                key={step.step}
                className="relative flex flex-col items-center text-center"
              >
                {/* Circle — fixed size, không bị lệch */}
                <div className="relative z-10 w-16 h-16 flex-shrink-0 bg-mato-brown rounded-full flex items-center justify-center shadow-lg mb-4">
                  <span className="text-2xl">{step.icon}</span>
                </div>

                {/* Step number */}
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 bg-mato-orange text-white text-xs font-bold rounded-full flex items-center justify-center -mt-1 z-20">
                  {idx + 1}
                </span>

                {/* Title — fixed min-height để các title align nhau */}
                <h3 className="font-bold text-mato-brown-dark text-sm mb-2 min-h-[2.5rem] flex items-center justify-center leading-tight">
                  {step.title}
                </h3>

                {/* Description — flex-1 đẩy badge xuống đáy */}
                <p className="text-xs text-mato-text-light leading-relaxed mb-3 flex-1">
                  {step.description}
                </p>

                <span className="inline-block bg-mato-cream text-mato-brown text-xs px-2 py-1 rounded-full border border-mato-brown/10 mt-auto">
                  {step.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick action */}
        <div className="mt-14 text-center bg-mato-cream rounded-3xl p-8 border border-mato-cream-dark">
          <p className="text-lg font-semibold text-mato-brown-dark mb-2">
            Bắt đầu ngay hôm nay?
          </p>
          <p className="text-mato-text-light text-sm mb-6">
            Nhắn tin hoặc gọi ngay — tiệm phản hồi nhanh trong vòng 15 phút
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:0869209674"
              className="btn-primary"
              aria-label="Gọi điện đặt thuê máy ảnh"
            >
              📞 Gọi: 0869 209 674
            </a>
            <a
              href="https://m.me/NguyenThiThoaa"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              💬 Nhắn Messenger
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
