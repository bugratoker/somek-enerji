import { Zap, Phone, Mail, MapPin } from "lucide-react"

const quickLinks = [
  { href: "#anasayfa", label: "Ana Sayfa" },
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#referanslar", label: "Referans İşler" },
  { href: "#hakkimda", label: "Hakkımda" },
  { href: "#yorumlar", label: "Yorumlar" },
  { href: "#sss", label: "S.S.S." },
  { href: "#iletisim", label: "İletişim" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30 px-4 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <a href="#anasayfa" className="mb-4 flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-accent">
              <Zap className="size-4 text-accent-foreground" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-bold text-foreground">{"Somek"}</span>
              <span className="-mt-0.5 text-[10px] font-medium tracking-widest text-accent">
                {"ENERJİ"}
              </span>
            </div>
          </a>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            {"İzmir ve çevresinde konut ve küçük işletmelere güvenilir, temiz ve zamanında elektrik hizmeti sunuyoruz."}
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
            {"Hızlı Menü"}
          </h3>
          <ul className="flex flex-col gap-2.5">
            {quickLinks.map((link) => (
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
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
            {"İletişim Bilgileri"}
          </h3>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 text-muted-foreground" />
              <a
                href="tel:+905551234567"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {"0555 123 45 67"}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="size-4 text-muted-foreground" />
              <a
                href="mailto:info@somekenerji.com"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {"info@somekenerji.com"}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="size-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{"İzmir ve çevresi"}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-border/50 pt-6">
        <p className="text-center text-xs text-muted-foreground">
          {"© 2026 Somek Enerji. Tüm hakları saklıdır."}
        </p>
      </div>
    </footer>
  )
}
