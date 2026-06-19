"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#cameras", label: "Máy Ảnh" },
    { href: "#pricing", label: "Bảng Giá" },
    { href: "#how-to-rent", label: "Cách Thuê" },
    { href: "#why-us", label: "Tại Sao Chọn Chúng Tôi" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Liên Hệ" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-mato-brown rounded-full flex items-center justify-center shadow-md group-hover:bg-mato-orange transition-colors">
            <span className="text-white text-lg">📷</span>
          </div>
          <div>
            <span className="font-serif font-bold text-xl text-mato-brown-dark leading-none block">
              Tiệm MATO
            </span>
            <span className="text-xs text-mato-text-light leading-none">
              Máy ảnh cho thuê
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-mato-text hover:text-mato-orange transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:0869209674"
            className="btn-primary text-sm py-2 px-5"
          >
            📞 Thuê Ngay
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-mato-brown"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-mato-cream-dark">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-6 py-3 text-mato-text hover:bg-mato-cream hover:text-mato-orange transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="px-6 pt-3">
              <a
                href="tel:0869209674"
                className="btn-primary text-sm py-2 px-5 block text-center"
              >
                📞 Thuê Ngay
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
