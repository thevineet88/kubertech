"use client";

import { useState } from "react";

/**
 * Isolated as a client component purely for the onError initials fallback, so
 * the pages embedding it can stay server-rendered.
 */
export default function AuthorAvatar({ size }: { size: "sm" | "lg" }) {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <div
      className={`${size === "sm" ? "w-10 h-10" : "w-12 h-12"} rounded-full bg-[#8B5CF6]/10 overflow-hidden shrink-0 flex items-center justify-center`}
    >
      {photoFailed ? (
        <span
          className={`${size === "sm" ? "text-[12px]" : "text-[13px]"} font-semibold text-[#8B5CF6]`}
        >
          VB
        </span>
      ) : (
        <img
          src="/team/vinit.png"
          alt="Vinit Brahmankar"
          className="w-full h-full object-cover"
          onError={() => setPhotoFailed(true)}
        />
      )}
    </div>
  );
}
