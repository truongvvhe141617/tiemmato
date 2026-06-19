import Image from "next/image";

const contactCameras = [
  { label: "Canon EOS R50", price: "Từ 140.000đ/6 tiếng", image: "/images/r50.jpg" },
  { label: "Fujifilm X-A2", price: "Từ 90.000đ/6 tiếng", image: "/images/xa3.webp" },
  { label: "Fujifilm X-T30", price: "Từ 180.000đ/6 tiếng", image: "/images/xt30.avif" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20"
      style={{
        background: "linear-gradient(135deg, #5D3A1A 0%, #8B5E3C 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Info */}
          <div className="text-white">
            <span className="inline-block bg-white/10 text-white/80 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              Liên Hệ
            </span>
            <h2 className="font-serif text-4xl font-bold mb-4">
              Đặt Thuê Máy Ảnh
            </h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              Liên hệ ngay để được tư vấn và đặt máy. Tiệm phản hồi nhanh trong
              vòng 15 phút trong giờ làm việc.
            </p>

            <div className="space-y-4">
              <a
                href="tel:0869209674"
                className="flex items-center gap-4 bg-white/10 hover:bg-white/20 rounded-2xl p-4 transition-colors group"
                aria-label="Gọi điện cho Tiệm MATO"
              >
                <div className="w-12 h-12 bg-mato-orange rounded-xl flex items-center justify-center text-xl shadow-md">
                  📞
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wide">
                    Điện thoại / Zalo
                  </p>
                  <p className="text-white font-bold text-lg group-hover:text-mato-brown-light transition-colors">
                    0869 209 674
                  </p>
                </div>
              </a>

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white/10 hover:bg-white/20 rounded-2xl p-4 transition-colors group"
                aria-label="Facebook Tiệm MATO"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-xl shadow-md">
                  📘
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wide">
                    Facebook
                  </p>
                  <p className="text-white font-bold group-hover:text-blue-300 transition-colors">
                    Nguyen Thi Thoaa
                  </p>
                </div>
              </a>

              <a
                href="https://www.facebook.com/TiemMato"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white/10 hover:bg-white/20 rounded-2xl p-4 transition-colors group"
                aria-label="Fanpage Tiệm MATO"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-xl shadow-md">
                  🏪
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wide">
                    Fanpage
                  </p>
                  <p className="text-white font-bold group-hover:text-blue-300 transition-colors">
                    Tiệm Mato - Thuê/chụp giá rẻ
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-white/10 rounded-2xl p-4">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-xl shadow-md">
                  📍
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wide">
                    Địa chỉ
                  </p>
                  <p className="text-white font-bold">
                    Bắc Từ Liêm, Hà Nội
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-6 bg-white/10 rounded-2xl p-4">
              <p className="text-white/60 text-xs uppercase tracking-wide mb-2">
                ⏰ Giờ Hoạt Động
              </p>
              <p className="text-white font-semibold">
                Thứ 2 – Chủ Nhật: 7:00 – 21:00
              </p>
            </div>
          </div>

          {/* Right: Quick contact card */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="font-serif text-2xl font-bold text-mato-brown-dark mb-2">
              Đặt Ngay
            </h3>
            <p className="text-mato-text-light text-sm mb-6">
              Chụp ảnh đẹp không cần mua máy đắt tiền
            </p>

            <div className="space-y-3 mb-6">
              {contactCameras.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 py-3 border-b border-mato-cream-dark last:border-0"
                >
                  {/* Ảnh máy nhỏ */}
                  <div className="relative w-14 h-10 rounded-lg overflow-hidden bg-mato-cream flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      sizes="56px"
                      className="object-contain p-1"
                    />
                  </div>
                  <span className="text-sm font-semibold text-mato-brown-dark flex-1">
                    {item.label}
                  </span>
                  <span className="text-sm font-bold text-mato-orange">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <a
                href="tel:0869209674"
                className="btn-primary w-full block text-center"
              >
                📞 Gọi: 0869 209 674
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors"
              >
                💬 Nhắn Facebook
              </a>
            </div>

            <p className="text-center text-xs text-mato-text-light mt-4">
              Phản hồi trong vòng 15 phút ⚡
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
