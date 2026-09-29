import { Logo } from "@/components/landing/Logo";
import { company, navLinks, whatsappLink } from "@/components/landing/data";

/**
 * Footer: logo, ringkasan, nav, dan baris bawah.
 * TODO: ganti data asli — teks ringkasan dan tahun berdiri
 */
export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {company.tagline}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
              Halaman
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
              Kontak
            </p>
            <address className="mt-4 space-y-2.5 text-sm not-italic text-muted-foreground">
              <p>{company.address}</p>
              <p>
                <a
                  href={`tel:${company.whatsapp}`}
                  className="underline-offset-4 hover:text-foreground hover:underline"
                >
                  {company.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${company.email}`}
                  className="break-all underline-offset-4 hover:text-foreground hover:underline"
                >
                  {company.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          {/* TODO: ganti nama usaha, tambahkan tahun berdiri bila perlu */}
          <p className="text-xs text-muted-foreground">
            {company.name}. Semua hak cipta dilindungi.
          </p>
          <p className="text-xs text-muted-foreground">
            Dibangun dengan Next.js dan Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
