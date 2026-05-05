"use client";

import useDetectLocale from "@/utils/i18n/useDetectLocale";

export const metadata = {
  title: "Portfolio Prys",
  description: "UX/UI designer Vlada Prys",
  openGraph: {
    title: "Portfolio Vlada Prys",
    description: "UX/UI designer Vlada Prys",
    url: "https://vlada-prys.vercel.app",
    siteName: "Portfolio Vlada Prys",
    images: [
      {
        url: "https://vlada-prys.vercel.app/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Preview image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Vlada Prys",
    description: "UX/UI designer Vlada Prys",
    images: ["https://vlada-prys.vercel.app/og-preview.png"],
  },
};

export default function Home() {
  useDetectLocale();

  return (
    <div className="flex justify-center items-center h-[100vh] text-lg">
      Loading...
    </div>
  );
}
