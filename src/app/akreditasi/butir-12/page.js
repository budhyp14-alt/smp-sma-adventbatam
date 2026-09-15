"use client";

import Link from "next/link";

export default function Butir12Page() {
  const documents = [
    {
      title: "Rencana Pelaksanaan Pembelajaran (RPP / Modul Ajar)",
      desc: "Perencanaan pembelajaran aktif yang memuat penguatan literasi digital, nalar kritis, dan pembentukan karakter.",
      badge: "Dokumen Kurikulum",
      format: "PDF Document"
    },
    {
      title: "Lembar Kerja Peserta Didik (LKPD) & Portofolio Penugasan",
      desc: "Kumpulan tugas berbasis pemecahan masalah (Problem-Based Learning) dan proyek kolaboratif siswa.",
      badge: "Hasil Karya Siswa",
      format: "Portofolio Digital"
    },
    {
      title: "Instrumen & Rubrik Penilaian Kinerja Proses",
      desc: "Lembar observasi evaluasi sikap, keaktifan diskusi, dan penilaian autentik berbasis rubrik terstandar.",
      badge: "Instrumen Asesmen",
      format: "Rubrik Penilaian"
    },
    {
      title: "Dokumentasi & Video Kegiatan Pembelajaran Interaktif",
      desc: "Foto serta rekaman suasana pembelajaran di kelas dan laboratorium komputer terintegrasi.",
      badge: "Dokumentasi Empiris",
      format: "Media Dokumentasi"
    }
  ];

  return (
    <main className="min-h-screen bg-[#F3EFE4] font-sans flex flex-col text-slate-800">
      {/* BREADCRUMB */}
      <section className="w-full pt-8 pb-4 px-4 sm:px-8 max-w-7xl mx-auto shrink-0">
        <div className="text-xs text-slate-600 font-semibold mb-4 flex items-center gap-1 flex-wrap">
          <span>You are here :</span>
          <Link href="/" className="text-[#047857] hover:underline ml-1">🏠 Home</Link>
          <span>-</span>
          <Link href="/akreditasi" className="text-[#047857] hover:underline">Akreditasi</Link>
          <span>-</span>
          <span className="text-slate-500">Butir 12</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-[#1e293b] tracking-wider uppercase mb-2">
          BUKTI FISIK AKREDITASI : BUTIR 12
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl">
          Komponen Penilaian Standar Proses: Pelaksanaan Proses Pembelajaran yang Efektif, Menyenangkan, dan Berorientasi pada Pengembangan Daya Pikir Kritis Peserta Didik.
        </p>
      </section>

      {/* KONTEN UTAMA */}
      <section className="w-full flex-1 pb-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* KOLOM KIRI (8 DARI 12 KOLOM) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* KARTU DESKRIPSI INDIKATOR */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-[#047857]">
              <span className="bg-[#047857] text-white text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider inline-block mb-2">
                INDIKATOR KINERJA BUTIR 12
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mb-3">
                Proses Pembelajaran yang Mendorong Siswa Berpikir Kritis, Kreatif, dan Kolaboratif
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify mb-3">
                Butir 12 instrumen akreditasi menilai sejauh mana guru di SMP-SMA Advent Batam mengelola kelas secara interaktif dengan memanfaatkan sarana teknologi informasi, memfasilitasi komunikasi dua arah yang santun, serta memberikan umpan balik (*feedback*) konstruktif demi tercapainya ketuntasan belajar.
              </p>
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs p-3 rounded-xl font-semibold">
                ✓ Seluruh kelengkapan administrasi dan bukti karya portofolio siswa terarsip secara terpusat untuk verifikasi asesor BAN-S/M.
              </div>
            </div>

            {/* DAFTAR DOKUMEN DAN BUKTI FISIK */}
            <div className="space-y-4">
              <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wide">
                Daftar Dokumen Pendukung Butir 12
              </h3>

              {documents.map((doc, idx) => (
                <div key={idx} className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-amber-100 text-amber-900 font-bold text-[10px] px-2 py-0.5 rounded">
                        {doc.badge}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">
                        {doc.format}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {doc.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">
                      {doc.desc}
                    </p>
                  </div>

                  <button className="bg-[#047857] hover:bg-emerald-800 text-white font-bold text-xs px-4 py-2 rounded-lg shadow-sm transition-colors shrink-0 cursor-pointer">
                    Lihat Berkas ↗
                  </button>
                </div>
              ))}
            </div>

            {/* NAVIGASI KEMBALI */}
            <div className="pt-4 flex gap-3">
              <Link
                href="/akreditasi"
                className="bg-[#D97706] hover:bg-amber-700 text-white font-bold text-xs py-2.5 px-6 rounded shadow-sm transition-colors"
              >
                ← Overview Akreditasi
              </Link>
              <Link
                href="/"
                className="bg-[#8B0000] hover:bg-red-800 text-white font-bold text-xs py-2.5 px-6 rounded shadow-sm transition-colors"
              >
                Back to Home
              </Link>
            </div>

          </div>

          {/* KOLOM KANAN: SIDEBAR */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-[#EFEAD8] p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-sm text-slate-900 mb-3 pb-2 border-b border-slate-300 uppercase tracking-wide">
                Navigasi Butir Akreditasi
              </h3>
              <ul className="text-xs space-y-2 font-medium">
                <li className="p-2 bg-emerald-100 text-emerald-900 font-bold rounded">
                  ▶ Butir 12 : Pembelajaran Aktif & Kritis
                </li>
                <li className="p-2 hover:bg-white rounded transition-colors text-slate-600 cursor-pointer">
                  Butir 13 : Suasana Pembelajaran Menyenangkan
                </li>
                <li className="p-2 hover:bg-white rounded transition-colors text-slate-600 cursor-pointer">
                  Butir 14 : Pemanfaatan Sarana & Digitalisasi
                </li>
                <li className="p-2 hover:bg-white rounded transition-colors text-slate-600 cursor-pointer">
                  Butir 15 : Asesmen & Penilaian Autentik
                </li>
              </ul>
            </div>

            <div className="bg-[#EFEAD8] p-5 rounded-2xl shadow-sm border border-slate-200 text-xs text-slate-700 space-y-2">
              <h4 className="font-bold text-slate-900">SMP - SMA ADVENT BATAM</h4>
              <p className="text-[11px] text-slate-600">
                Pusat penjaminan mutu dan dokumen akreditasi resmi sekolah.
              </p>
              <p className="font-semibold text-[#047857] pt-1">📞 0778-363082</p>
            </div>
          </aside>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#8B0000] text-white text-[10px] sm:text-xs text-center py-4 font-semibold shrink-0 mt-auto">
        Developed by Ir. Budhy Prasetyo
      </footer>
    </main>
  );
}
