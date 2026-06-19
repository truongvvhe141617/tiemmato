import { SITE_CONFIG } from "@/lib/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-mato-brown-dark text-white/70 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-mato-orange rounded-full flex items-center justify-center" aria-hidden="true">
                <span className="text-white text-lg">📷</span>
              </div>
              <div>
                <p className="font-serif font-bold text-white text-lg leading-none">
                  {SITE_CONFIG.name}
                </p>
                <p className="text-xs">Máy ảnh cho thuê</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Cho thuê máy ảnh chuyên nghiệp tại Hà Nội. Lưu giữ khoảnh khắc
              đẹp với chi phí tiết kiệm.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-3 uppercase text-xs tracking-wider">
              Điều Hướng
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                ["#cameras", "Máy Ảnh"],
                ["#pricing", "Bảng Giá"],
                ["#how-to-rent", "Cách Thuê"],
                ["#why-us", "Vì Sao Chọn Mato"],
                ["#faq", "Câu Hỏi Thường Gặp"],
                ["#contact", "Liên Hệ"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3 uppercase text-xs tracking-wider">
              Liên Hệ
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="hover:text-white transition-colors"
                >
                  📞 {SITE_CONFIG.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.facebookProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  📘 Nguyen Thi Thoaa
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.facebookPage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  🏪 Tiệm Mato - Thuê/chụp giá rẻ
                </a>
              </li>
              <li className="text-white/50">📍 {SITE_CONFIG.address}</li>
              <li className="text-white/50">⏰ T2–CN: 7:00 – 21:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <p>© {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
          <p>Cho thuê máy ảnh Canon EOS R50 · Fujifilm X-A3 · Fujifilm X-T30</p>
        </div>
      </div>
    </footer>
  );
}
