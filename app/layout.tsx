import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/config";

// ─── Viewport & theme color (tách riêng theo Next.js 14+) ───────────────────
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#8B5E3C",
};

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),

  // Title template: các sub-page sẽ tự động thành "Tên trang | Tiệm MATO"
  title: {
    default: "Tiệm MATO - Cho Thuê Máy Ảnh Giá Rẻ Tại Sóc Sơn, Hà Nội | Canon, Fujifilm",
    template: "%s | Tiệm MATO",
  },
  description:
    "Tiệm MATO cho thuê máy ảnh chuyên nghiệp tại Sóc Sơn, Hà Nội. Canon EOS R50, Fujifilm X-A3, Fujifilm X-T30. Giá chỉ từ 90.000đ/6 tiếng. Đầy đủ phụ kiện, thủ tục đơn giản.",
  keywords: [
    "cho thuê máy ảnh Sóc Sơn",
    "thuê máy ảnh Sóc Sơn Hà Nội",
    "cho thuê máy ảnh Hà Nội",
    "thuê máy ảnh giá rẻ Sóc Sơn",
    "Canon EOS R50 cho thuê Sóc Sơn",
    "Fujifilm X-A3 cho thuê",
    "Fujifilm X-T30 cho thuê",
    "tiệm MATO Sóc Sơn",
    "thuê máy ảnh mirrorless Sóc Sơn",
    "thuê máy ảnh theo ngày Sóc Sơn",
    "máy ảnh cho thuê giá rẻ Hà Nội",
    "cho thuê máy ảnh gần sân bay Nội Bài",
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,

  // ─── Open Graph ─────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "Tiệm MATO - Cho Thuê Máy Ảnh Giá Rẻ Tại Sóc Sơn, Hà Nội",
    description:
      "Cho thuê máy ảnh Canon EOS R50, Fujifilm X-A3, Fujifilm X-T30 tại Sóc Sơn, Hà Nội. Giá từ 90.000đ/6 tiếng. Đầy đủ phụ kiện, thủ tục đơn giản.",
  },

  // ─── Twitter / X card ────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Tiệm MATO - Cho Thuê Máy Ảnh Giá Rẻ Tại Sóc Sơn, Hà Nội",
    description:
      "Cho thuê máy ảnh Canon EOS R50, Fujifilm X-A3, Fujifilm X-T30 tại Sóc Sơn. Giá từ 90.000đ/6 tiếng.",
  },

  // ─── Robots ──────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ─── Canonical ───────────────────────────────────────────────────────────
  alternates: {
    canonical: SITE_CONFIG.url,
    languages: { "vi-VN": SITE_CONFIG.url },
  },

  // ─── Google Search Console verification ─────────────────────────────────
  // Thay "your-google-verification-code" bằng code thật sau khi verify
  verification: {
    google: "your-google-verification-code",
  },

  // ─── App icons ───────────────────────────────────────────────────────────
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// ─── JSON-LD Structured Data ─────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_CONFIG.url}/#business`,
  name: SITE_CONFIG.name,
  description:
    "Cho thuê máy ảnh chuyên nghiệp tại Sóc Sơn, Hà Nội - Canon EOS R50, Fujifilm X-A3, Fujifilm X-T30",
  url: SITE_CONFIG.url,
  telephone: SITE_CONFIG.phone,
  image: `${SITE_CONFIG.url}/opengraph-image`,
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE_CONFIG.district,
    addressRegion: SITE_CONFIG.city,
    addressCountry: "VN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE_CONFIG.geoLat,
    longitude: SITE_CONFIG.geoLng,
  },
  sameAs: [
    SITE_CONFIG.facebookProfile,
  ],
  openingHours: SITE_CONFIG.hoursSchema,
  priceRange: SITE_CONFIG.priceRange,
  currenciesAccepted: "VND",
  paymentAccepted: "Cash",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Dịch vụ cho thuê máy ảnh",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Canon EOS R50", description: "Máy ảnh mirrorless Canon EOS R50 24.2MP, quay 4K" },
        price: "140000",
        priceCurrency: "VND",
        description: "Giá thuê 6 tiếng, bao gồm body + lens kit 18-45mm",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Fujifilm X-A3", description: "Máy ảnh mirrorless Fujifilm X-A3 24.2MP, màu film đẹp" },
        price: "90000",
        priceCurrency: "VND",
        description: "Giá thuê 6 tiếng, bao gồm body + lens kit 16-50mm",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: "Fujifilm X-T30", description: "Máy ảnh mirrorless Fujifilm X-T30 26.1MP X-Trans, 4K" },
        price: "180000",
        priceCurrency: "VND",
        description: "Giá thuê 6 tiếng, bao gồm body + lens kit 15-45mm",
        availability: "https://schema.org/InStock",
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "100",
    bestRating: "5",
  },
};

// ─── Layout ──────────────────────────────────────────────────────────────────
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        {/* Google Fonts — preconnect trước để giảm latency */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
