"use client"

import { useState, useEffect } from "react"
import { Menu, X, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#anasayfa", label: "Ana Sayfa" },
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#referanslar", label: "Referans İşler" },
  { href: "#hakkimda", label: "Hakkımda" },
  { href: "#yorumlar", label: "Yorumlar" },
  { href: "#sss", label: "S.S.S." },
  { href: "#iletisim", label: "İletişim" },
]

export function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/95 shadow-lg shadow-primary/5 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="#anasayfa" className="flex items-center gap-2">
          <div className="flex size-9 items-center justify-center rounded-lg bg-accent">
            <Zap className="size-5 text-accent-foreground" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold tracking-tight text-foreground">
              {"Somek"}
            </span>
            <span className="-mt-1 text-xs font-medium tracking-widest text-accent">
              {"ENERJİ"}
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/905551234567"
          target="_blank"
          rel="noopener noreferrer"
          className="glow-blue hidden rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 lg:inline-flex"
        >
          {"Teklif İste"}
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="text-foreground lg:hidden"
          aria-label="Menüyü aç/kapat"
        >
          {isMobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="border-t border-border bg-background/98 backdrop-blur-lg lg:hidden">
          <ul className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="https://wa.me/905551234567"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileOpen(false)}
                className="block rounded-lg bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground"
              >
                {"Teklif İste"}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
