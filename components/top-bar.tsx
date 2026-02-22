"use client"

import { Phone, MessageCircle, MapPin } from "lucide-react"

export function TopBar() {
  return (
    <div className="bg-secondary text-secondary-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
        <span className="hidden items-center gap-1.5 text-muted-foreground md:flex">
          <MapPin className="size-3.5" />
          {"İzmir ve çevresine hizmet"}
        </span>
        <div className="flex w-full items-center justify-center gap-4 md:w-auto md:justify-end">
          <a
            href="tel:+905551234567"
            className="flex items-center gap-1.5 text-foreground transition-colors hover:text-accent"
          >
            <Phone className="size-3.5" />
            <span>{"Hemen Ara"}</span>
          </a>
          <span className="text-border">|</span>
          <a
            href="https://wa.me/905551234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-foreground transition-colors hover:text-[#25D366]"
          >
            <MessageCircle className="size-3.5" />
            <span>{"WhatsApp"}</span>
          </a>
        </div>
      </div>
    </div>
  )
}
