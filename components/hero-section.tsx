"use client"

import { useState, useEffect, useCallback } from "react"
import { Phone, MessageCircle, Shield, Clock, BadgeCheck, Banknote } from "lucide-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    h1: "İzmir'de Güvenilir Elektrikçi Hizmeti",
    sub: "Arıza tespit, tesisat ve pano işleriniz için hızlı ve güvenli çözümler.",
    cta1: { label: "WhatsApp'tan Yaz", href: "https://wa.me/905551234567", icon: MessageCircle },
    cta2: { label: "Hemen Ara", href: "tel:+905551234567", icon: Phone },
  },
  {
    h1: "Elektrik Arızası mı Var?",
    sub: "Sigorta atıyor, priz çalışmıyor ya da kaçak mı var? Aynı gün içinde müdahale.",
    cta1: { label: "Arıza Bildir", href: "https://wa.me/905551234567?text=Merhaba%2C%20elektrik%20ar%C4%B1zam%20var", icon: MessageCircle },
    cta2: null,
  },
  {
    h1: "Temiz ve Garantili İşçilik",
    sub: "Ev ve küçük işletmeler için düzenli, güvenli ve uzun ömürlü elektrik çözümleri.",
    cta1: { label: "Ücretsiz Keşif İste", href: "https://wa.me/905551234567?text=Merhaba%2C%20ücretsiz%20keşif%20istiyorum", icon: MessageCircle },
    cta2: null,
  },
]

const badges = [
  { icon: BadgeCheck, label: "Tek Usta, Tek Muhatap" },
  { icon: Banknote, label: "Şeffaf Fiyatlandırma" },
  { icon: Shield, label: "Garantili İşçilik" },
  { icon: Clock, label: "Zamanında Hizmet" },
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToSlide = useCallback(
    (index: number) => {
      if (index === current) return
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrent(index)
        setIsTransitioning(false)
      }, 400)
    },
    [current]
  )

  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide((current + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [current, goToSlide])

  const slide = slides[current]

  return (
    <section
      id="anasayfa"
      className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-4 py-20 md:min-h-[90vh]"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-background/85" />
      </div>

      {/* Animated glow orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/4 size-80 rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 size-80 rounded-full bg-accent/10 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div
          className={cn(
            "transition-all duration-400",
            isTransitioning ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
          )}
        >
          <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {slide.h1}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {slide.sub}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href={slide.cta1.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-blue inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 sm:w-auto"
            >
              <slide.cta1.icon className="size-4" />
              {slide.cta1.label}
            </a>
            {slide.cta2 && (
              <a
                href={slide.cta2.href}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-muted/50 px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-muted sm:w-auto"
              >
                <slide.cta2.icon className="size-4" />
                {slide.cta2.label}
              </a>
            )}
          </div>
        </div>

        {/* Slide indicators */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                current === i
                  ? "w-8 bg-accent"
                  : "w-4 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              aria-label={`Slayt ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Trust badges */}
      <div className="relative z-10 mx-auto mt-16 grid w-full max-w-5xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {badges.map((badge) => (
          <div
            key={badge.label}
            className="flex flex-col items-center gap-2.5 rounded-xl border border-border/50 bg-card/50 px-4 py-5 text-center backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card/70"
          >
            <badge.icon className="size-6 text-accent" />
            <span className="text-sm font-medium text-foreground">{badge.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
