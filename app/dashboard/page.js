/**
 * Placeholder untuk route aplikasi internal.
 *
 * CATATAN: repo ini dibuat dari nol, jadi belum ada dashboard/POS, Supabase,
 * maupun middleware auth yang perlu dipindahkan. Halaman ini sengaja dibuat
 * terbuka supaya struktur /dashboard tersedia.
 *
 * Saat aplikasi internal ditambahkan:
 * 1. Pindahkan logic auth ke middleware (atau proxy) yang hanya.matcher = ["/dashboard/:path*"].
 * 2. Pastikan route publik di "/" tidak ikut terlindungi.
 */
import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 py-24 sm:px-8">
      <p className="eyebrow">Placeholder</p>
      <h1 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Dashboard
      </h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
        Halaman ini akan diisi modul inventori, servis, dan POS. Belum ada logic
        Supabase atau autentikasi yang terpasang di repo ini.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex w-fit items-center text-sm text-accent underline-offset-4 hover:underline"
      >
        Kembali ke halaman company profile
      </Link>
    </main>
  );
}
