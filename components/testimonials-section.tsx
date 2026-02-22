"use client"

import { useRef, useState, useEffect } from "react"
import { Star, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "Ahmet Y.",
    location: "Bornova, İzmir",
    text: "Zamanında geldi ve sorunu hızlıca çözdü. Pano düzenlemesi çok temiz oldu. Kesinlikle tavsiye ederim.",
    rating: 5,
  },
  {
    name: "Elif K.",
    location: "Karşıyaka, İzmir",
    text: "Fiyatı baştan söyledi, hiçbir sürpriz olmadı. Prizleri ve anahtarları tek seferde değiştirdi. Çok memnun kaldık.",
    rating: 5,
  },
  {
    name: "Murat D.",
    location: "Konak, İzmir",
    text: "Temiz ve düzenli çalıştı. İşini bitirdikten sonra her şeyi toparlayıp teslim etti. Profesyonel bir usta.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="yorumlar" className="bg-muted/30 px-4 py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            {"Görüşler"}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
            {"Müşteri Yorumları"}
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={cn(
                "flex flex-col rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-700",
                visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <Quote className="mb-4 size-8 text-primary/30" />
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="size-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                {`"${t.text}"`}
              </p>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
