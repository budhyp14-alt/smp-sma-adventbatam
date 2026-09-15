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
      desc: "SMP Advent Batam telah terakreditasi resmi dengan predikat 'A' Unggul, memenuhi 8 Standar Nasional Pendidikan (SNP) meliputi mutu kelulusan, proses pembelajaran aktif, sarana prasarana digital, dan tata kelola akuntabel."
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
      desc: "SMA Advent Batam menyandang status akreditasi 'A' Unggul dari BAN-S/M dengan capaian mutu menyeluruh pada kualifikasi pendidik, laboratorium IPA dan TIK terintegrasi, serta pembinaan budi pekerti Kristiani."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F3EFE4] font-sans flex flex-col text-slate-800">
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
          Bukti formal komitmen SMP-SMA Advent Batam dalam menjaga standar mutu pendidikan nasional.
        </p>
      </section>

      <section className="w-full flex-1 pb-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-8 space-y-8">
            {accreditationData.map((item, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border-t-4 border-[#047857]">
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
                    <span className="text-slate-500 font-semibold block">Nomor SK:</span>
                    <span className="font-mono font-bold text-slate-800">{item.skNumber}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 font-semibold block">Masa Berlaku:</span>
                    <span className="font-bold text-slate-800">Hingga Tahun {item.validUntil}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify mb-5">
                  {item.desc}
                </p>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#047857]">
                    <span>✓</span> Terverifikasi Resmi Kemendikbudristek & BAN-S/M
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

          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-[#EFEAD8] p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-3 pb-2 border-b border-slate-300 uppercase tracking-wide">
                8 Standar Mutu Pendidikan
              </h3>
              <ul className="text-xs space-y-2 text-slate-700 font-medium">
                <li>1. Standar Kompetensi Lulusan</li>
                <li>2. Standar Isi Kurikulum</li>
                <li>3. Standar Proses Pembelajaran</li>
                <li>4. Standar Penilaian Pendidikan</li>
                <li>5. Standar Pendidik & Tenaga Kependidikan</li>
                <li>6. Standar Sarana & Prasarana</li>
                <li>7. Standar Pengelolaan</li>
                <li>8. Standar Pembiayaan</li>
              </ul>
            </div>

            <div className="bg-[#EFEAD8] p-5 rounded-2xl shadow-sm border border-slate-200 text-xs text-slate-700 space-y-2">
              <h4 className="font-bold text-slate-900">SMP - SMA ADVENT BATAM</h4>
              <p className="text-[11px] text-slate-600">Prof. DR. Hamka St., Kav 4, Kibing Village, Batu Aji District, Batam</p>
              <p className="font-semibold text-[#047857] pt-1">📞 0778-363082</p>
            </div>
          </aside>

        </div>
      </section>

      <footer className="w-full bg-[#8B0000] text-white text-[10px] sm:text-xs text-center py-4 font-semibold shrink-0 mt-auto">
        Developed by Ir. Budhy Prasetyo
      </footer>
    </main>
  );
}
