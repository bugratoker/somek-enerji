"use client"

import { useRef, useState, useEffect } from "react"
import { MessageSquare, ShieldCheck, Sparkles, CalendarCheck } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: MessageSquare,
    title: "Net ve Açık İletişim",
    desc: "İşin kapsamı ve maliyeti hakkında önceden bilgilendirilirsiniz.",
  },
  {
    icon: ShieldCheck,
    title: "Güvenlik Önceliği",
    desc: "Tüm çalışmalar güvenlik standartlarına uygun yapılır.",
  },
  {
    icon: Sparkles,
    title: "Temiz ve Düzenli Çalışma",
    desc: "İş bitiminde alanınız temiz ve düzenli bırakılır.",
  },
  {
    icon: CalendarCheck,
    title: "Zamanında Randevu",
    desc: "Söz verilen saatte kapınızda oluruz, zamanınıza saygı duyarız.",
  },
]

export function WhyChooseSection() {
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
    <section className="bg-muted/30 px-4 py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            {"Farkımız"}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
            {"Neden Somek Enerji?"}
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={cn(
                "flex flex-col items-center rounded-2xl border border-border/50 bg-card/50 p-8 text-center backdrop-blur-sm transition-all duration-700 hover:border-accent/30 hover:bg-card/70",
                visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <f.icon className="size-7" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 rounded-2xl border border-accent/20 bg-accent/5 px-8 py-8 text-center sm:flex-row sm:text-left">
          <p className="text-lg font-semibold text-foreground">
            {"Elektrik işinizi ertelemeyin."}
          </p>
          <a
            href="https://wa.me/905551234567?text=Merhaba%2C%20teklif%20almak%20istiyorum"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-orange inline-flex shrink-0 items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:brightness-110"
          >
            {"Teklif İste"}
          </a>
        </div>
      </div>
    </section>
  )
}
