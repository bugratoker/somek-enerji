"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { MapPin, PackageCheck, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

const highlights = [
  { icon: MapPin, label: "Yerinde keşif" },
  { icon: PackageCheck, label: "Kaliteli malzeme" },
  { icon: CheckCircle2, label: "İş bitiminde kontrol" },
]

export function AboutSection() {
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
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="hakkimda" className="px-4 py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            {"Beni Tanıyın"}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
            {"Hakkımda"}
          </h2>
        </div>

        <div
          className={cn(
            "flex flex-col items-center gap-10 transition-all duration-700 lg:flex-row lg:gap-16",
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          {/* Portrait */}
          <div className="relative shrink-0">
            <div className="relative size-64 overflow-hidden rounded-2xl border-2 border-border/50 md:size-80">
              <Image
                src="/images/portrait.jpg"
                alt="Somek Enerji ustası"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 256px, 320px"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 rounded-xl bg-accent px-4 py-2 text-sm font-bold text-accent-foreground shadow-lg">
              {"10+ Yıl"}
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {"Somek Enerji'nin ustasıyım. İzmir ve çevresinde konut ve küçük işletmelere elektrik arıza, tesisat ve pano işleri konusunda hizmet veriyorum. Her işi güvenli, temiz ve düzenli şekilde teslim etmeye özen gösteririm."}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="flex items-center gap-2 rounded-lg border border-border/50 bg-muted/50 px-4 py-2.5"
                >
                  <h.icon className="size-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{h.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
