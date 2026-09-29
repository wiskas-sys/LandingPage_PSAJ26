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
| `/dashboard`  | Placeholder untuk aplikasi internal (inventori, servis, POS).         |

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

Semua token ada di `app/globals.css` pada blok `:root` dan `.dark` (nilainya
sama karena tema ini dark-only). Font dimuat lewat `next/font/google` di
`app/layout.js`.

| Token            | Nilai       | Dipakai untuk                        |
| ---------------- | ----------- | ------------------------------------ |
| `--background`   | `#0E1012`   | Latar halaman                        |
| `--card`         | `#17191C`   | Permukaan kartu                      |
| `--border`       | `#26292D`   | Garis 1px                            |
| `--foreground`   | `#EDEEF0`   | Teks utama                           |
| `--muted-foreground` | `#8D9298` | Teks sekunder                     |
| `--accent`       | `#9C2B2B`   | CTA dan aksen (penggunaan terbatas)  |
| `--accent-dark`  | `#6B1E1E`   | Hover CTA                            |
| `--radius`       | `0.5rem`    | Basis radius kartu                   |
| `--shadow-card`  | —           | Elevasi halus kartu                  |

Utility `.eyebrow` (kelas komponen di `globals.css`) dipakai untuk label
kecil uppercase berwarna accent dengan garis pendek di sebelah kiri. Utility
`font-heading` memakai Space Grotesk; sisanya Inter.

## Struktur Komponen

```
app/
  layout.js                 font + metadata
  page.js                   company profile publik
  dashboard/page.js         placeholder aplikasi internal
  globals.css               token design system
components/
  ui/                       komponen shadcn/ui (button, card, accordion, badge)
  landing/
    data.js                 SEMUA data placeholder terkumpul di sini
    Section.jsx             wrapper section + judul + eyebrow
    Logo.jsx                logo mark "D"
    Header.jsx              sticky, garis aksen 2px, nav + menu mobile
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

- Semua komponen aman untuk SSR di App Router. Hanya `Header.jsx` yang memakai
  `"use client"` karena punya state untuk menu mobile; sisanya server component.
- Semua section ter-*prerender* sebagai static content.
- `images.remotePatterns` belum dikonfigurasi karena galeri memakai gambar lokal.
  Tambahkan bila nanti memakai gambar dari CDN.
- `scripts/scan-corruption.ps1` adalah utilitas bantu untuk memeriksa file
  sumber dari karakter rusak/sisipan bahasa lain setelah menyunting teks.
