"use client"

import { useRef, useState, useEffect } from "react"

const stats = [
  { value: 350, suffix: "+", label: "Tamamlanan İş" },
  { value: 120, suffix: "+", label: "Mutlu Müşteri" },
  { value: 10, suffix: "+", label: "Yıl Deneyim" },
  { value: 100, suffix: "%", label: "Memnuniyet Odaklı" },
]

function AnimatedCounter({
  target,
  suffix,
  isVisible,
}: {
  target: number
  suffix: string
  isVisible: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    let start = 0
    const duration = 2000
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isVisible, target])

  return (
    <span className="text-4xl font-bold text-foreground md:text-5xl">
      {count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
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
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-muted/30 px-4 py-20 md:py-28">
      <div ref={ref} className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
            <AnimatedCounter
              target={stat.value}
              suffix={stat.suffix}
              isVisible={visible}
            />
            <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
