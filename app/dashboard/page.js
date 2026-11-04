import Link from "next/link";
import {
  ArrowDownToLine,
  ArrowUpFromLine,
  Bell,
  Boxes,
  ChevronDown,
  Clock3,
  CreditCard,
  LayoutDashboard,
  PackageSearch,
  ReceiptText,
  Settings,
  ShoppingCart,
  TrendingUp,
  Wrench,
} from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";

export const metadata = {
  title: "Dashboard",
  description:
    "Pratinjau dashboard DIAN MOTOR dengan tema dan komponen yang sama dengan aplikasi PSAJ_26.",
};

const nav = [
  ["Dashboard", "/dashboard", LayoutDashboard],
  ["Kasir / Terminal POS", "/dashboard#kasir", ShoppingCart],
  ["Penjualan & Transaksi", "/dashboard#transaksi", ReceiptText],
  ["Stok & Inventori", "/dashboard#stok", Boxes],
  ["Servis & Perbaikan", "/dashboard#servis", Wrench],
  ["Pembayaran & Gateway", "/dashboard#pembayaran", CreditCard],
  ["Laporan Shift Harian", "/dashboard#laporan", Clock3],
  ["Pengaturan Sistem", "/dashboard#pengaturan", Settings],
];

const stats = [
  ["Penjualan Hari Ini", "Rp 1.850.000", "dari 12 transaksi hari ini", TrendingUp],
  ["Transaksi Hari Ini", "12", "transaksi tercatat hari ini", ReceiptText],
  ["Total Produk", "248", "18 kategori", Boxes],
  ["Stok Menipis", "3", "perlu tindakan", PackageSearch],
  ["Barang Masuk", "18", "bulan ini", ArrowDownToLine],
  ["Barang Keluar", "27", "bulan ini", ArrowUpFromLine],
];

const lowStock = [
  ["OM", "Oli Mesin 10W-40", "Tersisa 4 botol", "low"],
  ["KR", "Kampas Rem Depan", "Tersisa 2 set", "low"],
  ["BI", "Busi Iridium", "Habis", "out"],
];

const transactions = [
  ["TRX-2601", "04 Nov 2026, 10:24", "Pelanggan Umum", "Tunai", "Selesai", "Rp 185.000"],
  ["TRX-2600", "04 Nov 2026, 09:51", "Budi Santoso", "QRIS", "Selesai", "Rp 420.000"],
  ["TRX-2599", "04 Nov 2026, 09:12", "Pelanggan Umum", "Tunai", "Menunggu", "Rp 95.000"],
  ["TRX-2598", "03 Nov 2026, 16:40", "Siti Aminah", "Transfer", "Selesai", "Rp 760.000"],
];

const statusChip = (status) =>
  status === "Selesai"
    ? "stock-chip"
    : status === "Menunggu" || status === "Dibatalkan"
      ? "stock-chip low"
      : "stock-chip out";

const today = new Date().toLocaleDateString("id-ID", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

export default function DashboardPage() {
  return (
    <div className="relative min-h-screen bg-background lg:grid lg:grid-cols-[250px_minmax(0,1fr)]">
      <div className="fx-grid" aria-hidden="true" />

      <aside className="relative z-40 hidden border-r border-border bg-sidebar lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col">
        <div className="flex h-[76px] items-center border-b border-border px-4">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <span className="brand-mark">
              <span>DM</span>
            </span>
            <span className="min-w-0">
              <strong className="block truncate text-[15px] font-extrabold tracking-tight">
                DIAN MOTOR
              </strong>
              <small className="block font-mono text-[8px] tracking-[0.18em] text-muted-foreground">
                WORKSHOP OPERATIONS
              </small>
            </span>
          </Link>
        </div>

        <nav className="grid gap-1.5 overflow-y-auto px-[9px] py-5" aria-label="Navigasi dashboard">
          {nav.map(([label, href, Icon]) => {
            const active = label === "Dashboard";
            return (
              <Link
                key={label}
                href={href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "flex min-h-11 items-center gap-3 rounded-[10px] bg-primary px-3 text-sm font-semibold text-white shadow-[0_2px_6px_rgba(220,38,38,.15)]"
                    : "flex min-h-11 items-center gap-3 rounded-[10px] px-3 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                }
              >
                <Icon className="size-[18px]" aria-hidden="true" />
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="terminal-card">
          <p>
            <span>Status sistem</span>
            <strong className="text-[#34d399]">
              <span className="live-dot" />
              ONLINE
            </strong>
          </p>
          <p>
            <span>Terminal</span>
            <strong>POS-01</strong>
          </p>
          <p>
            <span>Versi</span>
            <strong>V2.4.0</strong>
          </p>
        </div>
      </aside>

      <div className="relative z-10 min-w-0">
        <header className="sticky top-0 z-30 flex min-h-[76px] items-center gap-3 border-b border-border bg-background/90 px-4 backdrop-blur-xl md:px-5">
          <Link href="/" className="flex items-center gap-2.5 lg:hidden">
            <span className="brand-mark size-9 rounded-[10px] text-[11px]">
              <span>DM</span>
            </span>
            <strong className="text-sm font-extrabold tracking-tight">
              DIAN MOTOR
            </strong>
          </Link>

          <time className="hidden font-mono text-[11px] text-muted-foreground md:block">
            {today} • 10.24 WIB
          </time>

          <div className="ml-auto" />

          <button
            type="button"
            aria-label="Notifikasi"
            className="relative grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:text-foreground"
          >
            <Bell className="size-4" />
            <span className="absolute -top-1.5 -right-1.5 grid size-[17px] place-items-center rounded-full bg-primary text-[9px] font-bold text-white">
              2
            </span>
          </button>

          <ThemeToggle className="shrink-0" />

          <div className="flex shrink-0 items-center gap-2.5 rounded-xl p-1 pr-2">
            <span className="grid size-9 place-items-center rounded-full bg-primary text-[11px] font-extrabold text-white">
              OP
            </span>
            <span className="hidden max-w-[150px] sm:block">
              <strong className="block truncate text-[13px]">Operator</strong>
              <small className="block truncate text-[10px] text-muted-foreground">
                Admin
              </small>
            </span>
            <ChevronDown className="hidden size-3.5 text-muted-foreground sm:block" />
          </div>
        </header>

        <nav
          aria-label="Navigasi cepat"
          className="sticky top-[76px] z-20 flex gap-1.5 overflow-x-auto border-b border-border bg-background/95 px-3 py-2.5 backdrop-blur-xl lg:hidden"
        >
          {[
            ["Kasir", "/dashboard#kasir"],
            ["Transaksi", "/dashboard#transaksi"],
            ["Stok", "/dashboard#stok"],
            ["Servis", "/dashboard#servis"],
            ["Laporan", "/dashboard#laporan"],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="flex h-9 shrink-0 items-center rounded-lg bg-muted px-3 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </nav>

        <main className="relative p-4 md:p-6 xl:p-8">
          <div className="mx-auto flex max-w-[1400px] flex-col gap-5">
            <div className="surface flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold">Pratinjau dashboard</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Tampilan ini memakai tema dan komponen yang sama dengan
                  aplikasi PSAJ_26. Angka di bawah masih data contoh.
                </p>
              </div>
              <Link
                href="/"
                className="inline-flex h-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background px-3 text-xs font-semibold transition-colors hover:bg-muted"
              >
                Kembali ke landing page
              </Link>
            </div>

            <div className="page-heading">
              <div>
                <p className="eyebrow">OPERATION OVERVIEW</p>
                <h1>Dashboard</h1>
                <p className="mt-1 text-sm text-muted-foreground">
                  Selamat datang kembali di sistem DIAN MOTOR
                </p>
              </div>
              <time>{today}</time>
            </div>

            <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {stats.map(([label, value, note, Icon], index) => (
                <div
                  key={label}
                  className={`metric-card ${index === 3 ? "warning" : ""}`}
                >
                  <div className="flex items-start justify-between">
                    <p className="text-sm text-muted-foreground">{label}</p>
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                  </div>
                  <strong className="mt-1 block text-2xl font-bold tracking-[-.03em]">
                    {value}
                  </strong>
                  <p
                    className={`mt-1 text-xs ${
                      index === 3
                        ? "font-medium text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {note}
                  </p>
                </div>
              ))}
            </section>

            <section className="grid gap-4 xl:grid-cols-[1.65fr_1fr]">
              <div className="table-surface p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold">Ringkasan Penjualan</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      Performa penjualan 7 hari terakhir
                    </p>
                  </div>
                  <span className="rounded-full border border-border bg-secondary px-2.5 py-1 text-[10px] font-semibold text-secondary-foreground">
                    Minggu Ini
                  </span>
                </div>

                <div className="mt-5 flex h-[220px] items-stretch gap-2 rounded-xl border border-dashed border-border p-4">
                  {[42, 68, 54, 82, 61, 92, 74].map((height, index) => (
                    <div
                      key={index}
                      className="flex h-full flex-1 flex-col items-center justify-end gap-2"
                    >
                      <div
                        className="w-full rounded-t-md bg-primary/80"
                        style={{ height: `${height}%` }}
                      />
                      <span className="font-mono text-[9px] text-muted-foreground">
                        {["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"][index]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="table-surface p-5">
                <p className="font-semibold">Perhatian Stok</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Produk yang perlu segera ditindaklanjuti
                </p>

                <div className="mt-5 flex flex-col gap-4">
                  {lowStock.map(([code, name, note, chip]) => (
                    <div key={code} className="flex items-center justify-between gap-3">
                      <div className="part-cell min-w-0">
                        <span>{code}</span>
                        <span className="min-w-0">
                          <strong className="block truncate text-[13px]">
                            {name}
                          </strong>
                          <small className="block text-[11px] text-muted-foreground">
                            {note}
                          </small>
                        </span>
                      </div>
                      <span className={`stock-chip ${chip}`}>
                        {chip === "out" ? "Habis" : "Menipis"}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/dashboard#stok"
                  className="mt-5 inline-flex h-9 w-full items-center justify-center rounded-lg border border-border bg-background text-xs font-semibold transition-colors hover:bg-muted"
                >
                  Lihat Semua Stok
                </Link>
              </div>
            </section>

            <div className="table-surface">
              <div className="flex items-center justify-between gap-4 px-5 pt-5">
                <div>
                  <p className="font-semibold">Transaksi Terbaru</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Aktivitas penjualan terkini
                  </p>
                </div>
                <Link
                  href="/dashboard#transaksi"
                  className="text-xs font-semibold text-primary hover:underline"
                >
                  Lihat Semua
                </Link>
              </div>

              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[720px] border-collapse">
                  <thead>
                    <tr className="border-y border-border text-left">
                      <th className="px-5 py-2.5 font-semibold">ID Transaksi</th>
                      <th className="px-5 py-2.5 font-semibold">Tanggal</th>
                      <th className="px-5 py-2.5 font-semibold">Pelanggan</th>
                      <th className="px-5 py-2.5 font-semibold">Metode</th>
                      <th className="px-5 py-2.5 font-semibold">Status</th>
                      <th className="px-5 py-2.5 text-right font-semibold">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((row) => (
                      <tr key={row[0]} className="border-b border-border/60 last:border-b-0">
                        <td className="px-5 py-3 font-mono text-[11px]">{row[0]}</td>
                        <td className="px-5 py-3">{row[1]}</td>
                        <td className="px-5 py-3">{row[2]}</td>
                        <td className="px-5 py-3">{row[3]}</td>
                        <td className="px-5 py-3">
                          <span className={statusChip(row[4])}>{row[4]}</span>
                        </td>
                        <td className="px-5 py-3 text-right font-semibold">
                          {row[5]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
