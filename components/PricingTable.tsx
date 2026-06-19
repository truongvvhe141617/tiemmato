"use client";
import { useState } from "react";

const cameras = ["Canon EOS R50", "Fujifilm X-A2", "Fujifilm X-T30"];

const pricing = [
  {
    duration: "6 Tiếng",
    icon: "⏰",
    description: "Buổi chụp ngoại cảnh, sự kiện",
    prices: ["140.000đ", "90.000đ", "180.000đ"],
    highlight: false,
  },
  {
    duration: "1 Ngày",
    icon: "📅",
    description: "Một ngày du lịch, tham quan",
    prices: ["180.000đ", "120.000đ", "220.000đ"],
    highlight: true,
  },
  {
    duration: "3 Ngày",
    icon: "🗓️",
    description: "Chuyến du lịch ngắn ngày",
    prices: ["170.000đ/ngày", "110.000đ/ngày", "200.000đ/ngày"],
    highlight: false,
  },
  {
    duration: "5 Ngày",
    icon: "📆",
    description: "Kỳ nghỉ, chuyến công tác",
    prices: ["160.000đ/ngày", "100.000đ/ngày", "190.000đ/ngày"],
    highlight: false,
  },
];

const notes = [
  "Đặt cọc theo giá trị máy (hoàn trả khi trả máy đúng hạn)",
  "Xuất trình CCCD khi thuê",
  "Không tự ý tháo máy, mở vào nước",
  "Hỏng hóc, mất mát tự thương theo thỏa thuận",
];

export default function PricingTable() {
  const [selectedCamera, setSelectedCamera] = useState<number | null>(null);

  return (
    <section
      id="pricing"
      className="py-20"
      style={{
        background: "linear-gradient(180deg, #FDF6EE 0%, #F0DFC8 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-mato-orange/10 text-mato-orange text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider border border-mato-orange/20">
            Bảng Giá
          </span>
          <h2 className="section-title mb-4">Bảng Giá Cho Thuê</h2>
          <p className="text-mato-text-light max-w-xl mx-auto">
            Giá minh bạch, không phát sinh. Bao gồm toàn bộ phụ kiện cần thiết.
          </p>
        </div>

        {/* Mobile camera filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 md:hidden">
          <button
            onClick={() => setSelectedCamera(null)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCamera === null
                ? "bg-mato-brown text-white"
                : "bg-white text-mato-brown border border-mato-brown/30"
            }`}
          >
            Tất cả
          </button>
          {cameras.map((cam, i) => (
            <button
              key={cam}
              onClick={() => setSelectedCamera(i)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCamera === i
                  ? "bg-mato-brown text-white"
                  : "bg-white text-mato-brown border border-mato-brown/30"
              }`}
            >
              {cam}
            </button>
          ))}
        </div>

        {/* Pricing Table - Desktop */}
        <div className="hidden md:block bg-white rounded-3xl shadow-xl overflow-hidden border border-mato-cream-dark">
          {/* Table header */}
          <div className="grid grid-cols-4 bg-mato-brown text-white">
            <div className="p-5 flex items-center gap-2">
              <span>⏱️</span>
              <span className="font-semibold">Thời gian thuê</span>
            </div>
            {cameras.map((cam) => (
              <div key={cam} className="p-5 text-center border-l border-white/10">
                <p className="font-bold text-sm">{cam}</p>
                <p className="text-xs text-white/60 mt-0.5">Body + lens kit</p>
              </div>
            ))}
          </div>

          {/* Table rows */}
          {pricing.map((row, idx) => (
            <div
              key={row.duration}
              className={`grid grid-cols-4 border-t border-mato-cream-dark ${
                row.highlight
                  ? "bg-mato-orange/5"
                  : idx % 2 === 0
                  ? "bg-white"
                  : "bg-mato-cream/40"
              }`}
            >
              <div className="p-5 flex items-center gap-3">
                <span className="text-2xl">{row.icon}</span>
                <div>
                  <p className="font-bold text-mato-brown-dark">{row.duration}</p>
                  <p className="text-xs text-mato-text-light">{row.description}</p>
                </div>
                {row.highlight && (
                  <span className="ml-auto bg-mato-orange text-white text-xs px-2 py-0.5 rounded-full">
                    Hot
                  </span>
                )}
              </div>
              {row.prices.map((price, i) => (
                <div
                  key={i}
                  className="p-5 text-center border-l border-mato-cream-dark flex items-center justify-center"
                >
                  <span
                    className={`font-bold text-lg ${
                      row.highlight ? "text-mato-orange" : "text-mato-brown-dark"
                    }`}
                  >
                    {price}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Pricing Cards - Mobile */}
        <div className="md:hidden space-y-4">
          {pricing.map((row) => (
            <div
              key={row.duration}
              className={`bg-white rounded-2xl p-5 shadow-sm border ${
                row.highlight ? "border-mato-orange/40" : "border-mato-cream-dark"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{row.icon}</span>
                <div>
                  <p className="font-bold text-mato-brown-dark">{row.duration}</p>
                  <p className="text-xs text-mato-text-light">{row.description}</p>
                </div>
                {row.highlight && (
                  <span className="ml-auto bg-mato-orange text-white text-xs px-2 py-0.5 rounded-full">
                    Hot
                  </span>
                )}
              </div>
              <div className="grid grid-cols-3 gap-3">
                {cameras.map((cam, i) => (
                  <div
                    key={cam}
                    className={`rounded-xl p-3 text-center ${
                      selectedCamera === null || selectedCamera === i
                        ? "bg-mato-cream"
                        : "opacity-30 bg-mato-cream"
                    }`}
                  >
                    <p className="text-xs text-mato-text-light mb-1">{cam.split(" ").slice(-1)}</p>
                    <p className="font-bold text-mato-brown-dark text-sm">
                      {row.prices[i]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div className="mt-10 bg-white rounded-2xl p-6 border border-amber-200 shadow-sm">
          <h3 className="font-bold text-mato-brown-dark flex items-center gap-2 mb-4">
            <span className="text-amber-500">⚠️</span> Lưu Ý Khi Thuê
          </h3>
          <ul className="grid sm:grid-cols-2 gap-3">
            {notes.map((note) => (
              <li key={note} className="flex items-start gap-2 text-sm text-mato-text">
                <span className="text-amber-400 mt-0.5 flex-shrink-0">•</span>
                {note}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a href="tel:0869209674" className="btn-primary text-base mr-4">
            📞 Đặt Thuê Ngay: 0869 209 674
          </a>
          <a
            href="https://www.facebook.com/NguyenThiThoaa"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-base"
          >
            💬 Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
