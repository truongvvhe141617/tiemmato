import Image from "next/image";
import { getCameras } from "@/lib/data/cameras";

const cameras = getCameras();

export default function CameraShowcase() {
  return (
    <section id="cameras" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-mato-cream text-mato-brown text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Kho Máy
          </span>
          <h2 className="section-title mb-4">Các Dòng Máy Cho Thuê</h2>
          <p className="text-mato-text-light max-w-xl mx-auto">
            Tất cả máy đều được vệ sinh, kiểm tra kỹ trước khi cho thuê. Đầy đủ
            phụ kiện đi kèm, sẵn sàng để bạn sáng tạo ngay.
          </p>
        </div>

        {/* Camera Cards — mobile 1 cột, tablet 2 cột, desktop 3 cột */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cameras.map((camera) => (
            <article
              key={camera.id}
              className="bg-mato-cream rounded-3xl overflow-hidden card-hover border border-mato-cream-dark shadow-sm flex flex-col"
            >
              {/* Camera image area — fixed height */}
              <div
                className={`relative h-56 flex-shrink-0 bg-gradient-to-br ${camera.bgColor} overflow-hidden`}
              >
                <Image
                  src={camera.image}
                  alt={`${camera.name} - máy ảnh cho thuê tại Tiệm MATO`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-6 drop-shadow-lg transition-transform duration-500 hover:scale-105 mix-blend-multiply"
                  priority={camera.id === "canon-r50"}
                />
                {/* Badge */}
                <span
                  className={`absolute top-4 right-4 z-10 ${camera.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow`}
                >
                  {camera.badge}
                </span>
                {/* Price tag */}
                <div className="absolute bottom-4 left-4 z-10 bg-white/95 backdrop-blur rounded-xl px-3 py-1.5 shadow-md">
                  <p className="text-xs text-mato-text-light leading-none mb-0.5">Từ</p>
                  <p className="text-base font-bold text-mato-orange leading-none">
                    {camera.priceFrom}
                  </p>
                  <p className="text-xs text-mato-text-light leading-none mt-0.5">/6 tiếng</p>
                </div>
              </div>

              {/* Content — flex-col để button luôn ở dưới cùng */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-mato-brown-dark mb-1">
                  {camera.name}
                </h3>
                <p className="text-sm text-mato-text-light mb-4">{camera.tagline}</p>

                {/* Highlight */}
                <div className="bg-mato-orange/10 border border-mato-orange/20 rounded-xl px-3 py-2 mb-4">
                  <p className="text-xs text-mato-orange font-semibold">
                    ✓ {camera.highlight}
                  </p>
                </div>

                {/* Included */}
                <div className="mb-4">
                  <p className="text-xs font-bold text-mato-brown uppercase tracking-wide mb-2">
                    Bao gồm:
                  </p>
                  <ul className="space-y-1.5">
                    {camera.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-mato-text"
                      >
                        <span className="text-mato-orange mt-0.5 flex-shrink-0">•</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specs — flex-1 đẩy button xuống đáy */}
                <div className="border-t border-mato-cream-dark pt-4 flex-1">
                  <p className="text-xs font-bold text-mato-brown uppercase tracking-wide mb-2">
                    Thông số:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {camera.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="bg-white rounded-lg px-2 py-1.5"
                      >
                        <p className="text-xs text-mato-text-light">{spec.label}</p>
                        <p className="text-xs font-semibold text-mato-brown-dark">
                          {spec.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button luôn ở dưới cùng */}
                <a
                  href="#pricing"
                  className="mt-5 w-full block text-center bg-mato-brown text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-mato-brown-dark transition-colors"
                >
                  Xem giá thuê →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
