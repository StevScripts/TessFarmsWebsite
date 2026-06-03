"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp({ phone }: { phone: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message George on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25d366] text-white rounded-full shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
