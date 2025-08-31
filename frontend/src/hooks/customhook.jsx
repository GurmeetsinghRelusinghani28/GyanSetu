// src/hooks/customhook.jsx
import { useState, useEffect } from "react";

export default function useIsMediumUp() {
  const [isMd, setIsMd] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(min-width: 768px)").matches : false
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handler = (e) => setIsMd(e.matches);

    // Initial check
    setIsMd(mediaQuery.matches);

    // Add listener
    mediaQuery.addEventListener("change", handler);

    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  }, []);

  return isMd;
}
