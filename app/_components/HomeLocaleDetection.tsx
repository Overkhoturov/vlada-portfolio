"use client";

import useDetectLocale from "@/utils/i18n/useDetectLocale";

export default function HomeLocaleDetection() {
  useDetectLocale();

  return (
    <div className="flex justify-center items-center h-[100vh] text-lg">
      Loading...
    </div>
  );
}
