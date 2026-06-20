const reasons = [
  {
    icon: "💰",
    title: "Giá Cực Kỳ Tiết Kiệm",
    description:
      "Chỉ từ 90.000đ/6 tiếng thay vì bỏ ra hàng chục triệu mua máy. Trải nghiệm máy ảnh xịn mà không tốn nhiều.",
  },
  {
    icon: "🎁",
    title: "Đầy Đủ Phụ Kiện",
    description:
      "Body + lens kit + pin + sạc + thẻ nhớ + dây đeo + túi đựng. Mọi thứ sẵn sàng, bạn chỉ cần chụp.",
  },
  {
    icon: "✅",
    title: "Máy Sạch, Chất Lượng",
    description:
      "Mỗi lần cho thuê đều vệ sinh cảm biến, kiểm tra hoạt động. Máy luôn trong tình trạng tốt nhất.",
  },
  {
    icon: "⚡",
    title: "Thủ Tục Đơn Giản",
    description:
      "Chỉ cần CCCD + đặt cọc là xong. Không rườm rà, không hợp đồng phức tạp.",
  },
  {
    icon: "🤝",
    title: "Hỗ Trợ Tận Tình",
    description:
      "Chưa quen máy? Tiệm hướng dẫn cơ bản miễn phí. Trong suốt quá trình thuê, có vấn đề gì tiệm hỗ trợ ngay.",
  },
  {
    icon: "📍",
    title: "Địa Điểm Thuận Tiện",
    description:
      "Tọa lạc tại Sóc Sơn, Hà Nội. Dễ đặt, dễ nhận máy. Có thể thỏa thuận giao nhận tận nơi.",
  },
];

const reviews = [
  {
    name: "Minh Anh",
    avatar: "👩",
    rating: 5,
    text: "Máy chụp đẹp lắm, phụ kiện đầy đủ. Bạn chủ tiệm nhiệt tình hướng dẫn mình dùng. Sẽ thuê lại!",
    camera: "Fujifilm X-T30",
  },
  {
    name: "Hoàng Nam",
    avatar: "👨",
    rating: 5,
    text: "Giá hợp lý, máy sạch bóng. Thuê 3 ngày đi Đà Lạt về ảnh cực đẹp. Highly recommend!",
    camera: "Canon EOS R50",
  },
  {
    name: "Thu Hương",
    avatar: "👩‍🦱",
    rating: 5,
    text: "Lần đầu thuê máy ảnh, chủ tiệm hướng dẫn rất tỉ mỉ. Ảnh Fujifilm màu film đẹp không chê được.",
    camera: "Fujifilm X-A3",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-20"
      style={{
        background: "linear-gradient(180deg, #F0DFC8 0%, #FDF6EE 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-white text-mato-brown text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider border border-mato-brown/20">
            Điểm Nổi Bật
          </span>
          <h2 className="section-title mb-4">Tại Sao Chọn Tiệm MATO?</h2>
          <p className="text-mato-text-light max-w-xl mx-auto">
            Chúng tôi cam kết mang lại trải nghiệm thuê máy ảnh tốt nhất —
            tiện lợi, uy tín và tiết kiệm.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white rounded-2xl p-6 card-hover border border-mato-cream-dark shadow-sm"
            >
              <div className="w-12 h-12 bg-mato-cream rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-sm">
                {reason.icon}
              </div>
              <h3 className="font-bold text-mato-brown-dark mb-2">{reason.title}</h3>
              <p className="text-sm text-mato-text-light leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Reviews */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-mato-brown-dark">
            Khách Hàng Nói Gì?
          </h3>
          <div className="flex items-center justify-center gap-1 mt-2">
            {"★★★★★".split("").map((star, i) => (
              <span key={i} className="text-yellow-400 text-xl">
                {star}
              </span>
            ))}
            <span className="ml-2 text-sm text-mato-text-light">4.9/5 (100+ đánh giá)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-2xl p-6 border border-mato-cream-dark shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{review.avatar}</span>
                <div>
                  <p className="font-semibold text-mato-brown-dark text-sm">
                    {review.name}
                  </p>
                  <p className="text-xs text-mato-text-light">{review.camera}</p>
                </div>
                <div className="ml-auto flex">
                  {Array(review.rating)
                    .fill("★")
                    .map((s, i) => (
                      <span key={i} className="text-yellow-400 text-sm">
                        {s}
                      </span>
                    ))}
                </div>
              </div>
              <p className="text-sm text-mato-text leading-relaxed italic">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
