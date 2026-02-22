"use client"

import { MessageCircle } from "lucide-react"

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/905551234567"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-all hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 md:hidden"
      aria-label="WhatsApp ile iletişime geç"
    >
      <MessageCircle className="size-6" />
    </a>
  )
}
