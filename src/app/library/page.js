"use client";

import Link from "next/link";

export default function LibraryPage() {
  const targetUrl = "https://e-perpus-batam-mas.vercel.app/";

  return (
    <main className="min-h-screen bg-[#F3EFE4] font-sans flex flex-col text-slate-800">
      <section className="w-full pt-6 pb-3 px-4 sm:px-8 max-w-7xl mx-auto shrink-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="text-xs text-slate-600 font-semibold mb-2 flex items-center gap-1">
            <span>You are here :</span>
            <Link href="/" className="text-[#047857] hover:underline ml-1">🏠 Home</Link>
            <span>-</span>
            <span className="text-slate-500">Perpustakaan Digital</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-[#1e293b] uppercase">
            E-PERPUSTAKAAN SMP - SMA ADVENT BATAM
          </h1>
        </div>

        <a
          href={targetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#047857] hover:bg-emerald-800 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-sm transition-all flex items-center gap-1.5 w-fit"
        >
          <span>Buka di Tab Penuh</span>
          <span>↗</span>
        </a>
      </section>

      <section className="w-full flex-1 px-4 sm:px-8 max-w-7xl mx-auto pb-10">
        <div className="w-full h-[80vh] bg-white rounded-2xl shadow-md border border-slate-300 overflow-hidden">
          <iframe
            src={targetUrl}
            title="E-Perpustakaan SMPS Advent Batam Mas"
            className="w-full h-full border-0"
            allowFullScreen
          />
        </div>
      </section>

      <footer className="w-full bg-[#8B0000] text-white text-[10px] sm:text-xs text-center py-4 font-semibold shrink-0 mt-auto">
        Developed by Ir. Budhy Prasetyo
      </footer>
    </main>
  );
}
