"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const phone = formData.get("phone") as string
    const district = formData.get("district") as string
    const service = formData.get("service") as string
    const message = formData.get("message") as string

    const whatsappText = `Merhaba, ben ${name}.%0A📞 ${phone}%0A📍 ${district}%0A🔧 ${service}%0A💬 ${message}`
    window.open(`https://wa.me/905551234567?text=${whatsappText}`, "_blank")
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="iletisim" className="bg-muted/30 px-4 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            {"Bize Ulaşın"}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
            {"İletişim"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            {"Elektrik ihtiyaçlarınız için bize hemen ulaşın. En kısa sürede dönüş yaparız."}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4 rounded-xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Phone className="size-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{"Telefon"}</p>
                <a
                  href="tel:+905551234567"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {"0555 123 45 67"}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/10">
                <MessageCircle className="size-5 text-[#25D366]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{"WhatsApp"}</p>
                <a
                  href="https://wa.me/905551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-[#25D366]"
                >
                  {"0555 123 45 67"}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <Mail className="size-5 text-accent" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{"E-posta"}</p>
                <a
                  href="mailto:info@somekenerji.com"
                  className="text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  {"info@somekenerji.com"}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="size-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{"Hizmet Alanı"}</p>
                <p className="text-sm text-muted-foreground">{"İzmir ve çevresi"}</p>
              </div>
            </div>

            <a
              href="https://wa.me/905551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-blue mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-7 py-4 text-base font-semibold text-accent-foreground transition-all hover:brightness-110"
            >
              <MessageCircle className="size-5" />
              {"WhatsApp ile İletişime Geç"}
            </a>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm md:p-8"
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                {"Ad Soyad"}
              </label>
              <Input
                id="name"
                name="name"
                required
                placeholder="Adınız Soyadınız"
                className="h-11 border-border/50 bg-muted/30 text-foreground placeholder:text-muted-foreground/60"
              />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
                {"Telefon"}
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="05XX XXX XX XX"
                className="h-11 border-border/50 bg-muted/30 text-foreground placeholder:text-muted-foreground/60"
              />
            </div>
            <div>
              <label htmlFor="district" className="mb-1.5 block text-sm font-medium text-foreground">
                {"İlçe"}
              </label>
              <Input
                id="district"
                name="district"
                placeholder="Örn: Bornova"
                className="h-11 border-border/50 bg-muted/30 text-foreground placeholder:text-muted-foreground/60"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                {"Hizmet"}
              </label>
              <Select name="service">
                <SelectTrigger className="h-11 w-full border-border/50 bg-muted/30 text-foreground">
                  <SelectValue placeholder="Hizmet seçin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ariza">{"Elektrik Arıza Onarımı"}</SelectItem>
                  <SelectItem value="priz">{"Priz & Anahtar Değişimi"}</SelectItem>
                  <SelectItem value="pano">{"Sigorta & Pano Düzenleme"}</SelectItem>
                  <SelectItem value="tesisat">{"Elektrik Tesisatı Yenileme"}</SelectItem>
                  <SelectItem value="aydinlatma">{"LED & Aydınlatma Montajı"}</SelectItem>
                  <SelectItem value="kacak">{"Kaçak Akım Rölesi Kurulumu"}</SelectItem>
                  <SelectItem value="diger">{"Diğer"}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                {"Mesaj"}
              </label>
              <Textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Sorununuzu kısaca açıklayın..."
                className="border-border/50 bg-muted/30 text-foreground placeholder:text-muted-foreground/60"
              />
            </div>
            <button
              type="submit"
              disabled={submitted}
              className="glow-blue mt-2 flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 disabled:opacity-60"
            >
              <Send className="size-4" />
              {submitted ? "Gönderildi!" : "Mesaj Gönder"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
