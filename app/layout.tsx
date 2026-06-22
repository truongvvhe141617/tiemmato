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

  // ─── App icons — tự động detect từ app/icon.tsx và app/apple-icon.tsx ──────
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
};

// ─── JSON-LD Structured Data ─────────────────────────────────────────────────
// Mảng 2 schema: LocalBusiness + ItemList (Product)
const jsonLd = [
  // Schema 1: LocalBusiness — cho Google Maps / local search
  {
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
    sameAs: [SITE_CONFIG.facebookProfile],
    openingHours: SITE_CONFIG.hoursSchema,
    priceRange: SITE_CONFIG.priceRange,
    currenciesAccepted: "VND",
    paymentAccepted: "Cash",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "3",
      bestRating: "5",
      worstRating: "1",
    },
  },
  // Schema 2: ItemList chứa 3 Product — mỗi Product có offers đầy đủ
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Máy ảnh cho thuê tại Tiệm MATO",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Product",
          "@id": `${SITE_CONFIG.url}/#canon-r50`,
          name: "Canon EOS R50",
          description: "Máy ảnh mirrorless Canon EOS R50 24.2MP APS-C, quay 4K 30fps, AF Dual Pixel CMOS II, màn hình touch xoay lật",
          image: `${SITE_CONFIG.url}/images/r50.jpg`,
          brand: { "@type": "Brand", name: "Canon" },
          offers: {
            "@type": "Offer",
            seller: { "@type": "Organization", name: SITE_CONFIG.name },
            price: "140000",
            priceCurrency: "VND",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "140000",
              priceCurrency: "VND",
              unitText: "6 tiếng",
            },
            availability: "https://schema.org/InStock",
            itemCondition: "https://schema.org/UsedCondition",
            description: "Bao gồm body + lens kit 18-45mm, pin, sạc, thẻ nhớ, dây đeo, túi đựng",
            hasMerchantReturnPolicy: {
              "@type": "MerchantReturnPolicy",
              applicableCountry: "VN",
              returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
              merchantReturnDays: 0,
              returnMethod: "https://schema.org/ReturnInStore",
              returnFees: "https://schema.org/FreeReturn",
            },
            shippingDetails: {
              "@type": "OfferShippingDetails",
              shippingRate: {
                "@type": "MonetaryAmount",
                value: "0",
                currency: "VND",
              },
              shippingDestination: {
                "@type": "DefinedRegion",
                addressCountry: "VN",
                addressRegion: "Hà Nội",
              },
              deliveryTime: {
                "@type": "ShippingDeliveryTime",
                handlingTime: {
                  "@type": "QuantitativeValue",
                  minValue: 0,
                  maxValue: 1,
                  unitCode: "DAY",
                },
                transitTime: {
                  "@type": "QuantitativeValue",
                  minValue: 0,
                  maxValue: 0,
                  unitCode: "DAY",
                },
              },
            },
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Product",
          "@id": `${SITE_CONFIG.url}/#fujifilm-xa3`,
          name: "Fujifilm X-A3",
          description: "Máy ảnh mirrorless Fujifilm X-A3 24.2MP APS-C, màn hình selfie flip 3 inch, 15 chế độ film simulation, màu film vintage đẹp",
          image: `${SITE_CONFIG.url}/images/xa3.webp`,
          brand: { "@type": "Brand", name: "Fujifilm" },
          offers: {
            "@type": "Offer",
            seller: { "@type": "Organization", name: SITE_CONFIG.name },
            price: "90000",
            priceCurrency: "VND",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "90000",
              priceCurrency: "VND",
              unitText: "6 tiếng",
            },
            availability: "https://schema.org/InStock",
            itemCondition: "https://schema.org/UsedCondition",
            description: "Bao gồm body + lens kit 16-50mm, pin, sạc, thẻ nhớ, dây đeo, túi đựng",
            hasMerchantReturnPolicy: {
              "@type": "MerchantReturnPolicy",
              applicableCountry: "VN",
              returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
              merchantReturnDays: 0,
              returnMethod: "https://schema.org/ReturnInStore",
              returnFees: "https://schema.org/FreeReturn",
            },
            shippingDetails: {
              "@type": "OfferShippingDetails",
              shippingRate: {
                "@type": "MonetaryAmount",
                value: "0",
                currency: "VND",
              },
              shippingDestination: {
                "@type": "DefinedRegion",
                addressCountry: "VN",
                addressRegion: "Hà Nội",
              },
              deliveryTime: {
                "@type": "ShippingDeliveryTime",
                handlingTime: {
                  "@type": "QuantitativeValue",
                  minValue: 0,
                  maxValue: 1,
                  unitCode: "DAY",
                },
                transitTime: {
                  "@type": "QuantitativeValue",
                  minValue: 0,
                  maxValue: 0,
                  unitCode: "DAY",
                },
              },
            },
          },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Product",
          "@id": `${SITE_CONFIG.url}/#fujifilm-xt30`,
          name: "Fujifilm X-T30",
          description: "Máy ảnh mirrorless Fujifilm X-T30 26.1MP X-Trans CMOS 4, quay 4K, 425 điểm lấy nét, 17 chế độ film simulation",
          image: `${SITE_CONFIG.url}/images/xt30.avif`,
          brand: { "@type": "Brand", name: "Fujifilm" },
          offers: {
            "@type": "Offer",
            seller: { "@type": "Organization", name: SITE_CONFIG.name },
            price: "180000",
            priceCurrency: "VND",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "180000",
              priceCurrency: "VND",
              unitText: "6 tiếng",
            },
            availability: "https://schema.org/InStock",
            itemCondition: "https://schema.org/UsedCondition",
            description: "Bao gồm body + lens kit 15-45mm, pin, sạc, thẻ nhớ, dây đeo, túi đựng",
            hasMerchantReturnPolicy: {
              "@type": "MerchantReturnPolicy",
              applicableCountry: "VN",
              returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
              merchantReturnDays: 0,
              returnMethod: "https://schema.org/ReturnInStore",
              returnFees: "https://schema.org/FreeReturn",
            },
            shippingDetails: {
              "@type": "OfferShippingDetails",
              shippingRate: {
                "@type": "MonetaryAmount",
                value: "0",
                currency: "VND",
              },
              shippingDestination: {
                "@type": "DefinedRegion",
                addressCountry: "VN",
                addressRegion: "Hà Nội",
              },
              deliveryTime: {
                "@type": "ShippingDeliveryTime",
                handlingTime: {
                  "@type": "QuantitativeValue",
                  minValue: 0,
                  maxValue: 1,
                  unitCode: "DAY",
                },
                transitTime: {
                  "@type": "QuantitativeValue",
                  minValue: 0,
                  maxValue: 0,
                  unitCode: "DAY",
                },
              },
            },
          },
        },
      },
    ],
  },
  // Schema 3: FAQPage — Google hiển thị rich snippet câu hỏi trực tiếp trên SERP
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Thuê máy ảnh tại Tiệm MATO cần chuẩn bị gì?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Chỉ cần mang theo CCCD/CMND bản gốc và tiền đặt cọc theo giá trị máy. Đơn giản vậy thôi!",
        },
      },
      {
        "@type": "Question",
        name: "Tiền cọc thuê máy ảnh là bao nhiêu và có được hoàn lại không?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tiền cọc tương đương một phần giá trị máy. Hoàn 100% khi bạn trả máy đúng hạn, đầy đủ phụ kiện và nguyên vẹn.",
        },
      },
      {
        "@type": "Question",
        name: "Tiệm MATO có giao máy ảnh tận nơi tại Sóc Sơn không?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Có thể thỏa thuận giao/nhận tận nơi trong khu vực Sóc Sơn và Hà Nội. Liên hệ 0869 209 674 để biết chi tiết.",
        },
      },
      {
        "@type": "Question",
        name: "Chưa biết dùng máy ảnh có thuê được không?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hoàn toàn được! Tiệm MATO hướng dẫn cơ bản cách sử dụng máy miễn phí khi nhận máy. Trong quá trình thuê có thắc mắc cứ nhắn tin hỏi.",
        },
      },
      {
        "@type": "Question",
        name: "Giá thuê máy ảnh tại Tiệm MATO là bao nhiêu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Giá thuê từ 90.000đ/6 tiếng cho Fujifilm X-A3, 140.000đ/6 tiếng cho Canon EOS R50, và 200.000đ/6 tiếng cho Fujifilm X-T30. Bao gồm đầy đủ body, lens kit, pin, sạc, thẻ nhớ, dây đeo và túi đựng.",
        },
      },
      {
        "@type": "Question",
        name: "Tiệm MATO cho thuê những loại máy ảnh nào?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tiệm MATO cho thuê 3 dòng máy ảnh mirrorless: Canon EOS R50, Fujifilm X-A3 và Fujifilm X-T30. Tất cả đều kèm đầy đủ phụ kiện.",
        },
      },
      {
        "@type": "Question",
        name: "Có thể thuê máy ảnh hơn 5 ngày không?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Có. Liên hệ trực tiếp qua số 0869 209 674 để được báo giá ưu đãi cho thuê dài ngày tại Sóc Sơn, Hà Nội.",
        },
      },
    ],
  },
];

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
