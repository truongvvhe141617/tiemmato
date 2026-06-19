import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tiemmato.vercel.app"),
  title: "Tiệm MATO - Cho Thuê Máy Ảnh Giá Rẻ Tại Hà Nội | Canon, Fujifilm",
  description:
    "Tiệm MATO cho thuê máy ảnh chuyên nghiệp tại Bắc Từ Liêm, Hà Nội. Canon EOS R50, Fujifilm X-A2, Fujifilm X-T30. Giá chỉ từ 90.000đ/6 tiếng. Lưu giữ khoảnh khắc đẹp với chi phí tiết kiệm.",
  keywords: [
    "cho thuê máy ảnh Hà Nội",
    "thuê máy ảnh giá rẻ",
    "Canon EOS R50 cho thuê",
    "Fujifilm X-A2 cho thuê",
    "Fujifilm X-T30 cho thuê",
    "tiệm MATO",
    "thuê máy ảnh Bắc Từ Liêm",
    "cho thuê máy ảnh mirrorless",
    "thuê máy ảnh theo ngày Hà Nội",
    "máy ảnh cho thuê giá rẻ",
  ],
  authors: [{ name: "Tiệm MATO" }],
  creator: "Tiệm MATO",
  publisher: "Tiệm MATO",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://tiemmato.vercel.app",
    siteName: "Tiệm MATO",
    title: "Tiệm MATO - Cho Thuê Máy Ảnh Giá Rẻ Tại Hà Nội",
    description:
      "Cho thuê máy ảnh Canon EOS R50, Fujifilm X-A2, Fujifilm X-T30 tại Hà Nội. Giá từ 90.000đ/6 tiếng. Đầy đủ phụ kiện, thủ tục đơn giản.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tiệm MATO - Cho Thuê Máy Ảnh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiệm MATO - Cho Thuê Máy Ảnh Giá Rẻ Tại Hà Nội",
    description:
      "Cho thuê máy ảnh Canon EOS R50, Fujifilm X-A2, Fujifilm X-T30. Giá từ 90.000đ/6 tiếng.",
    images: ["/og-image.jpg"],
  },
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
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://tiemmato.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Tiệm MATO",
              description:
                "Cho thuê máy ảnh chuyên nghiệp tại Hà Nội - Canon EOS R50, Fujifilm X-A2, Fujifilm X-T30",
              url: "https://tiemmato.vercel.app",
              telephone: "0869209674",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bắc Từ Liêm",
                addressRegion: "Hà Nội",
                addressCountry: "VN",
              },
              sameAs: [
                "",
              ],
              openingHours: "Mo-Su 07:00-21:00",
              priceRange: "90.000đ - 220.000đ",
              image: "/og-image.jpg",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Dịch vụ cho thuê máy ảnh",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Canon EOS R50",
                    },
                    price: "140000",
                    priceCurrency: "VND",
                    description: "Giá thuê 6 tiếng",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Fujifilm X-A2",
                    },
                    price: "90000",
                    priceCurrency: "VND",
                    description: "Giá thuê 6 tiếng",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Fujifilm X-T30",
                    },
                    price: "180000",
                    priceCurrency: "VND",
                    description: "Giá thuê 6 tiếng",
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
