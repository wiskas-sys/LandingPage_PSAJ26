# Dian Motor — Company Profile

Halaman company profile publik untuk Dian Motor, dibangun dengan Next.js (App
Router), Tailwind CSS v4, dan shadcn/ui.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve hasil build
npm run lint     # eslint
```

## Struktur Route

| Route         | Keterangan                                                          |
| ------------- | ------------------------------------------------------------------- |
| `/`           | Company profile publik. Tidak butuh login.                           |
| `/dashboard`  | Pratinjau dashboard dengan tema dan komponen yang sama dengan PSAJ_26. |

> **Catatan penting.** Repo ini dibuat dari nol, jadi **belum ada** logic
> Supabase, dashboard/POS, atau middleware auth yang perlu dipindahkan. Route
> `/dashboard` sengaja masih terbuka. Saat aplikasi internal ditambahkan,
> pasang middleware dengan matcher hanya untuk route tersebut supaya halaman
> publik di `/` tidak ikut terlindungi:
>
> ```js
> export const config = {
>   matcher: ["/dashboard/:path*"],
> }
> ```

## Design System

Token dan kelas bersama disalin dari repo `wiskas-sys/PSAJ_26` supaya landing
page dan dashboard memakai bahasa visual yang sama. Token ada di
`app/globals.css` pada blok `:root` (light) dan `.dark` (dark, default).
Tema diatur oleh `next-themes` melalui `components/theme-provider.jsx`.

| Token              | Light     | Dark      | Dipakai untuk               |
| ------------------ | --------- | --------- | --------------------------- |
| `--background`     | `#F6F7F9` | `#09090B` | Latar halaman               |
| `--card`           | `#FFFFFF` | `#111113` | Permukaan kartu             |
| `--border`         | `#DFE3E8` | `#27272A` | Garis 1px                   |
| `--foreground`     | `#111318` | `#FAFAFA` | Teks utama                  |
| `--muted-foreground` | `#667085` | `#A1A1AA` | Teks sekunder             |
| `--primary`        | `#DC2626` | `#DC2626` | CTA, aksen, brand           |
| `--accent`         | `#FDECEC` | `#241C1C` | Permukaan aksen halus       |
| `--accent-dark`    | `#B91C1C` | `#B91C1C` | Hover CTA                   |
| `--radius`         | `0.625rem` | `0.625rem` | Basis radius kartu        |

Font dimuat lewat `next/font/google` di `app/layout.js`: Geist untuk teks dan
judul (`font-heading` juga memetakan ke Geist), Geist Mono untuk label teknis.

Kelas bersama yang bisa dipakai di kedua sisi: `.surface`, `.metric-card`,
`.table-surface`, `.stock-chip`, `.eyebrow`, `.brand-mark`, `.status-pill`,
`.terminal-card`, `.page-heading`, `.fx-grid`, dan `.input-with-icon`.

## Struktur Komponen

```
app/
  layout.js                 font + metadata + ThemeProvider
  page.js                   company profile publik
  dashboard/page.js         pratinjau dashboard bergaya PSAJ_26
  globals.css               token design system + kelas bersama
components/
  ui/                       komponen shadcn/ui (button, card, accordion, badge)
  theme-provider.jsx        next-themes, default dark
  theme-toggle.jsx          tombol ganti tema (dipakai header & dashboard)
  landing/
    data.js                 SEMUA data placeholder terkumpul di sini
    Section.jsx             wrapper section + judul + eyebrow
    Logo.jsx                brand mark "DM" + wordmark DIAN MOTOR
    Header.jsx              sticky, nav, tombol dashboard, ganti tema
    Hero.jsx                headline, subheadline, 2 tombol, panel spesifikasi
    StatsBar.jsx            4 angka pencapaian
    About.jsx               2 paragraf bengkel + sistem inventori
    Services.jsx            grid 4 kartu layanan + estimasi harga
    ProcessSteps.jsx        4 langkah bernomor
    WhyUs.jsx               4 keunggulan
    Testimonials.jsx        3 kutipan
    Gallery.jsx             4 foto placeholder via next/image
    FAQ.jsx                 3 Q&A (shadcn/ui Accordion)
    Contact.jsx             alamat, telp/WA, jam buka, email, peta
    Footer.jsx
public/
  gallery-1..4.jpg          foto placeholder (1200x800)
```

## Mengganti Data Placeholder

Semua data dummy ditandai `TODO: ganti data asli`. Cari sisa placeholder:

```bash
# di PowerShell
Select-String -Path "components\landing\*","app\*.js","app\**\*.js" -Pattern "TODO: ganti data asli"

# atau dengan ripgrep
rg -n "TODO: ganti data asli"
```

Data terstruktur (alamat, nomor WA, harga, angka, testimoni, FAQ, jam buka)
semuanya terpusat di `components/landing/data.js` — ubah di satu tempat saja.
Copy yang ditulis langsung di JSX (headline hero, paragraf About, catatan
kaki section) ditandai komentar TODO di atas baris masing-masing.

Peta memakai iframe Google Maps tanpa API key, dengan `q` berisi alamat
placeholder. Ganti nilainya di `company.mapsEmbed` dan `company.mapsLink`.

## Catatan Teknis

- Semua komponen aman untuk SSR di App Router. `Header.jsx` memakai
  `"use client"` karena punya state menu mobile, dan `ThemeToggle.jsx`,
  `ThemeProvider.jsx`, serta komponen UI interaktif juga client component.
- Semua section ter-*prerender* sebagai static content.
- `images.remotePatterns` belum dikonfigurasi karena galeri memakai gambar lokal.
  Tambahkan bila nanti memakai gambar dari CDN.
- `scripts/scan-corruption.ps1` adalah utilitas bantu untuk memeriksa file
  sumber dari karakter rusak/sisipan bahasa lain setelah menyunting teks.
