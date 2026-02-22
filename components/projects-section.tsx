"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const projects = [
  { src: "/images/project-1.jpg", alt: "Pano düzenleme projesi", label: "Pano Düzenleme" },
  { src: "/images/project-2.jpg", alt: "LED aydınlatma projesi", label: "LED Aydınlatma" },
  { src: "/images/project-3.jpg", alt: "Tesisat yenileme projesi", label: "Tesisat Yenileme" },
  { src: "/images/project-4.jpg", alt: "Priz montajı projesi", label: "Priz Montajı" },
  { src: "/images/project-5.jpg", alt: "Kaçak röle montajı", label: "Kaçak Röle Montajı" },
  { src: "/images/project-6.jpg", alt: "Sensörlü aydınlatma", label: "Sensörlü Aydınlatma" },
]

export function ProjectsSection() {
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
    <section id="referanslar" className="px-4 py-20 md:py-28">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            {"Portfolyo"}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
            {"Referans İşler"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            {"Tamamladığımız projelerden bazı örnekler."}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={project.label}
              className={cn(
                "group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/50 transition-all duration-700",
                visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="p-5">
                  <span className="text-sm font-semibold text-foreground">
                    {project.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
