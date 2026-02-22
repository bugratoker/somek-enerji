"use client"

import { useRef, useState, useEffect } from "react"
import {
  Wrench,
  PlugZap,
  ShieldCheck,
  Cable,
  Lightbulb,
  CircuitBoard,
} from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Wrench,
    title: "Elektrik Arıza Onarımı",
    desc: "Kısa devre, sigorta atması ve elektrik kesintisi gibi arızalara hızlı müdahale.",
  },
  {
    icon: PlugZap,
    title: "Priz & Anahtar Değişimi",
    desc: "Eski veya arızalı priz ve anahtarların güvenli şekilde değişimi.",
  },
  {
    icon: ShieldCheck,
    title: "Sigorta & Pano Düzenleme",
    desc: "Elektrik panolarının düzenlenmesi, sigorta yükseltme ve etiketleme.",
  },
  {
    icon: Cable,
    title: "Elektrik Tesisatı Yenileme",
    desc: "Eski binaların elektrik tesisatının güvenlik standartlarına uygun yenilenmesi.",
  },
  {
    icon: Lightbulb,
    title: "LED & Aydınlatma Montajı",
    desc: "Modern LED aydınlatma çözümleri ve spot, şerit LED montajı.",
  },
  {
    icon: CircuitBoard,
    title: "Kaçak Akım Rölesi Kurulumu",
    desc: "Elektrik kaçaklarına karşı koruma sağlayan röle montajı ve testi.",
  },
]

function AnimatedCard({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
}) {
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
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function ServicesSection() {
  return (
    <section id="hizmetler" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            {"Ne Yapıyoruz?"}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
            {"Hizmetler"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            {"Konut ve küçük işletmeler için profesyonel elektrik hizmetleri sunuyoruz."}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <AnimatedCard key={service.title} delay={i * 100}>
              <div className="group flex h-full flex-col rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <service.icon className="size-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.desc}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}
