"use client";
import { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/lib/config";

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
      {showMenu && (
        <div className="flex flex-col gap-2 animate-slide-up">
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="flex items-center gap-3 bg-mato-orange text-white px-4 py-3 rounded-2xl shadow-lg hover:bg-mato-orange-dark transition-colors text-sm font-semibold whitespace-nowrap"
            aria-label={`Gọi điện Tiệm MATO: ${SITE_CONFIG.phoneDisplay}`}
          >
            <span>📞</span>
            <span>Gọi: {SITE_CONFIG.phoneDisplay}</span>
          </a>
          <a
            href={SITE_CONFIG.facebookProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-blue-600 text-white px-4 py-3 rounded-2xl shadow-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
            aria-label="Nhắn tin Facebook Tiệm MATO"
          >
            <span>💬</span>
            <span>Nhắn Facebook</span>
          </a>
        </div>
      )}

      <button
        onClick={() => setShowMenu(!showMenu)}
        className="w-14 h-14 bg-mato-brown rounded-full flex items-center justify-center shadow-xl hover:bg-mato-brown-dark transition-all text-2xl hover:scale-110 active:scale-95"
        aria-label={showMenu ? "Đóng liên hệ" : "Mở liên hệ Tiệm MATO"}
        aria-expanded={showMenu}
      >
        {showMenu ? "✕" : "📷"}
      </button>
    </div>
  );
}
