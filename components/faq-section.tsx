"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "Ne kadar sürede gelebilirsiniz?",
    a: "İzmir merkez ve yakın ilçelerde genellikle aynı gün içinde müdahale edebiliyorum. Acil durumlarda mümkün olan en kısa sürede yanınızda olurum.",
  },
  {
    q: "Fiyat nasıl belirleniyor?",
    a: "Fiyatlandırma işin kapsamına göre belirleniyor. Keşif sonrası size net bir fiyat bilgisi verilir, sürpriz ek masraf olmaz.",
  },
  {
    q: "Garantili mi çalışıyorsunuz?",
    a: "Evet, yapılan tüm işler garantili olarak teslim edilir. Kullanılan malzemeler kalitelidir ve işçilik güvencesi sağlanır.",
  },
  {
    q: "Hangi bölgelerde hizmet veriyorsunuz?",
    a: "İzmir merkez ilçeler başta olmak üzere Bornova, Karşıyaka, Konak, Buca, Bayraklı ve çevre ilçelerde hizmet veriyorum.",
  },
  {
    q: "Malzemeyi siz mi temin ediyorsunuz?",
    a: "Evet, kaliteli ve uygun fiyatlı malzemeleri ben temin edebiliyorum. Dilerseniz kendi malzemenizi de kullanabilirsiniz.",
  },
]

export function FaqSection() {
  return (
    <section id="sss" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            {"Merak Edilenler"}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
            {"Sık Sorulan Sorular"}
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-xl border border-border/50 bg-card/50 px-5 backdrop-blur-sm"
            >
              <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline md:text-base">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
