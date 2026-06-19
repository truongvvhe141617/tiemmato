import { SITE_CONFIG } from "@/lib/config";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Giới thiệu Tiệm MATO"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FDF6EE 0%, #F5E6D3 40%, #EDD5B3 100%)",
      }}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-mato-brown/5 blur-2xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-mato-orange/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-mato-brown/5 blur-3xl" />
        <span className="absolute top-24 right-20 text-4xl opacity-10 rotate-12">✦</span>
        <span className="absolute top-40 left-16 text-2xl opacity-10 -rotate-6">✦</span>
        <span className="absolute bottom-32 left-24 text-3xl opacity-10 rotate-45">✦</span>
        <span className="absolute bottom-24 right-32 text-2xl opacity-10">📷</span>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 pt-28 pb-20 text-center w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-mato-brown/20 rounded-full px-4 py-2 mb-6 shadow-sm animate-fade-in">
          <span className="text-mato-orange text-sm" aria-hidden="true">📷</span>
          <span className="text-sm font-medium text-mato-brown">
            Lưu giữ khoảnh khắc đẹp
          </span>
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-mato-brown-dark mb-4 leading-tight animate-slide-up">
          Tiệm{" "}
          <span className="text-mato-orange italic">MATO</span>
        </h1>

        <p className="text-base md:text-xl text-mato-text-light font-medium mb-3 uppercase tracking-widest">
          Máy Ảnh Cho Thuê Tại Hà Nội
        </p>

        <p className="text-sm md:text-lg text-mato-text max-w-2xl mx-auto mb-8 leading-relaxed px-2">
          Sở hữu những bức ảnh đẹp không cần bỏ ra hàng triệu đồng mua máy.
          Thuê Canon EOS R50, Fujifilm X-A3, X-T30 — đầy đủ phụ kiện,
          thủ tục đơn giản.
        </p>

        {/* Price highlight */}
        <div className="inline-flex items-center gap-3 bg-mato-brown/10 rounded-2xl px-5 py-3 mb-8">
          <span className="text-2xl md:text-4xl font-bold text-mato-orange">
            Từ {SITE_CONFIG.priceFrom}
          </span>
          <div className="text-left">
            <p className="text-sm font-semibold text-mato-brown-dark">/6 tiếng</p>
            <p className="text-xs text-mato-text-light">Đầy đủ body + lens kit</p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12 px-4">
          <a href="#pricing" className="btn-primary text-base">
            Xem Bảng Giá
          </a>
          <a
            href={SITE_CONFIG.facebookProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-base"
          >
            💬 Nhắn Tin Ngay
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
          {[
            { value: "3", label: "Dòng máy" },
            { value: "100+", label: "Khách hài lòng" },
            { value: "4.9★", label: "Đánh giá" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-xl md:text-2xl font-bold text-mato-brown-dark">
                {stat.value}
              </div>
              <div className="text-xs text-mato-text-light mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40" aria-hidden="true">
        <span className="text-xs text-mato-text-light">Cuộn xuống</span>
        <div className="w-5 h-8 border-2 border-mato-brown/30 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-mato-brown/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
