"use client";
import { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded menu */}
      {showMenu && (
        <div className="flex flex-col gap-2 animate-slide-up">
          <a
            href="tel:0869209674"
            className="flex items-center gap-3 bg-mato-orange text-white px-4 py-3 rounded-2xl shadow-lg hover:bg-mato-orange-dark transition-colors text-sm font-semibold"
            aria-label="Gọi điện Tiệm MATO"
          >
            <span>📞</span>
            <span>Gọi: 0869 209 674</span>
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-blue-600 text-white px-4 py-3 rounded-2xl shadow-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
            aria-label="Facebook Tiệm MATO"
          >
            <span>💬</span>
            <span>Nhắn Facebook</span>
          </a>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="w-14 h-14 bg-mato-brown rounded-full flex items-center justify-center shadow-xl hover:bg-mato-brown-dark transition-all text-2xl hover:scale-110 active:scale-95"
        aria-label="Liên hệ Tiệm MATO"
      >
        {showMenu ? "✕" : "📷"}
      </button>
    </div>
  );
}
