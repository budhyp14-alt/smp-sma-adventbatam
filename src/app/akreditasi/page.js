"use client";

import Link from "next/link";

export default function AkreditasiPage() {
  const accreditationData = [
    {
      level: "SMP ADVENT BATAM",
      npsn: "10404499",
      status: "TERAKREDITASI A (UNGGUL)",
      grade: "A",
      score: "92",
      skNumber: "1347/BAN-SM/SK/2021",
      validUntil: "2026",
      badan: "Badan Akreditasi Nasional Sekolah/Madrasah (BAN-S/M)",
      desc: "SMP Advent Batam telah terakreditasi secara resmi dengan predikat 'A' Unggul, membuktikan keterpenuhan seluruh 8 Standar Nasional Pendidikan (SNP) meliputi standar mutu kelulusan, proses pembelajaran interaktif, sarana prasarana digital, dan tata kelola manajemen sekolah yang transparan."
    },
    {
      level: "SMA ADVENT BATAM",
      npsn: "70002994",
      status: "TERAKREDITASI A (UNGGUL)",
      grade: "A",
      score: "93",
      skNumber: "1857/BAN-SM/SK/2022",
      validUntil: "2027",
      badan: "Badan Akreditasi Nasional Sekolah/Madrasah (BAN-S/M)",
      desc: "SMA Advent Batam menyandang status akreditasi 'A' Unggul dari BAN-S/M dengan capaian mutu komprehensif pada kualifikasi pendidik, fasilitas laboratorium IPA dan TIK terintegrasi, serta prestasi akademik dan pembinaan budi pekerti Kristiani peserta didik."
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
          <span className="text-slate-500">Akreditasi</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-[#1e293b] tracking-wider uppercase mb-2">
          STATUS AKREDITASI RESMI SEKOLAH
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl">
          Bukti formal komitmen SMP-SMA Advent Batam dalam menjaga standar mutu pendidikan nasional dan keterbukaan publik.
        </p>
      </section>

      {/* KONTEN UTAMA */}
      <section className="w-full flex-1 pb-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* KOLOM KIRI (8 KOLOM): DETAIL SERTIFIKAT AKREDITASI */}
          <div className="lg:col-span-8 space-y-8">
            {accreditationData.map((item, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border-t-4 border-[#047857]">
                
                {/* HEADER KARTU */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
                  <div>
                    <span className="bg-[#047857] text-white text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider inline-block mb-1">
                      NPSN : {item.npsn}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                      {item.level}
                    </h2>
                  </div>
                  <div className="bg-amber-50 border border-amber-300 px-4 py-2 rounded-xl text-center shrink-0">
                    <span className="text-[10px] uppercase font-bold text-amber-800 block">Peringkat</span>
                    <span className="text-2xl font-black text-amber-900">{item.grade}</span>
                    <span className="text-[10px] text-slate-600 block">Nilai: {item.score}</span>
                  </div>
                </div>

                {/* TABEL SPESIFIKASI DOKUMEN RESMI */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div>
                    <span className="text-slate-500 font-semibold block">Status Akreditasi:</span>
                    <span className="font-bold text-[#047857] text-sm">{item.status}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 font-semibold block">Lembaga Akreditasi:</span>
                    <span className="font-semibold text-slate-800">{item.badan}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 font-semibold block">Nomor SK Penetapan:</span>
                    <span className="font-mono font-bold text-slate-800">{item.skNumber}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 font-semibold block">Masa Berlaku Hingga:</span>
                    <span className="font-bold text-slate-800">Tahun {item.validUntil}</span>
                  </div>
                </div>

                {/* DESKRIPSI STANDAR PENDIDIKAN */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify mb-5">
                  {item.desc}
                </p>

                {/* AREA TAUTAN DOKUMEN / SERTIFIKAT */}
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#047857]">
                    <span>✓</span> Terdaftar Resmi di Kemendikbudristek & BAN-S/M
                  </div>
                  <Link
                    href="/"
                    className="bg-[#8B0000] hover:bg-red-800 text-white font-bold text-xs py-2 px-5 rounded shadow-sm transition-colors"
                  >
                    Back to Home
                  </Link>
                </div>

              </div>
            ))}
          </div>

          {/* KOLOM KANAN (4 KOLOM): SIDEBAR LEMBAGA & KONTAK SEKOLAH */}
          <aside className="lg:col-span-4 space-y-6">
            
            {/* KOTAK 1: 8 STANDAR NASIONAL PENDIDIKAN */}
            <div className="bg-[#EFEAD8] p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-3 pb-2 border-b border-slate-300 uppercase tracking-wide">
                8 Standar Mutu Pendidikan
              </h3>
              <ul className="text-xs space-y-2 text-slate-700 font-medium">
                <li className="flex items-center gap-2"><span>1.</span> Standar Kompetensi Lulusan</li>
                <li className="flex items-center gap-2"><span>2.</span> Standar Isi Kurikulum</li>
                <li className="flex items-center gap-2"><span>3.</span> Standar Proses Pembelajaran</li>
                <li className="flex items-center gap-2"><span>4.</span> Standar Penilaian Pendidikan</li>
                <li className="flex items-center gap-2"><span>5.</span> Standar Pendidik & Tenaga Kependidikan</li>
                <li className="flex items-center gap-2"><span>6.</span> Standar Sarana & Prasarana</li>
                <li className="flex items-center gap-2"><span>7.</span> Standar Pengelolaan</li>
                <li className="flex items-center gap-2"><span>8.</span> Standar Pembiayaan</li>
              </ul>
            </div>

            {/* KOTAK 2: KONTAK RESMI SEKOLAH */}
            <div className="bg-[#EFEAD8] p-6 rounded-2xl shadow-sm border border-slate-200 text-xs text-slate-700 space-y-3">
              <div>
                <h4 className="font-black text-sm text-slate-900 tracking-wide">SMP - SMA ADVENT BATAM</h4>
                <p className="text-[11px] text-slate-600">Prof. DR. Hamka St., Kav 4, Kibing Village, Batu Aji District, Batam</p>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-dashed border-slate-300 text-[11px]">
                <div className="flex justify-between">
                  <span className="text-slate-600">NSPN SMA:</span>
                  <span className="font-bold text-slate-900">70002994</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Principal:</span>
                  <span className="font-bold text-slate-900">Tona Leon F. Situmorang, S.Pd.,MA.,ED.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Telepon:</span>
                  <span className="font-bold text-[#047857]">0778-363082</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Email:</span>
                  <span className="font-bold text-slate-900">info@adventbatam.sch.id</span>
                </div>
              </div>
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
