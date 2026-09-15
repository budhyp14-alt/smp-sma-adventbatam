"use client";

import Link from "next/link";

export default function Butir12Page() {
  const documents = [
    {
      title: "SK & Program Kerja Tim Pencegahan dan Penanganan Kekerasan (TPPK)",
      desc: "Surat Keputusan penetapan tim penanganan kekerasan sekolah, tata tertib perlindungan siswa, dan SOP penanganan perundungan (anti-bullying).",
      badge: "SK & Kebijakan",
      code: "DOC-TPPK-01",
      status: "Terverifikasi Asesor"
    },
    {
      title: "SOP Alur Pengaduan Aman & Buku Registrasi Konseling (BK)",
      desc: "Mekanisme pengaduan kekerasan/intimidasi fisik dan psikis yang menjamin kerahasiaan pelapor, serta catatan pembinaan empati siswa.",
      badge: "Layanan Psikis & BK",
      code: "SOP-PENGADUAN-02",
      status: "Tersedia Fisik & Digital"
    },
    {
      title: "Dokumen Keselamatan Sarana Prasarana & Keamanan Fisik Kampus",
      desc: "Daftar inspeksi berkala instalasi listrik, alat pemadam api ringan (APAR), denah jalur evakuasi, titik kumpul bencana, dan sebaran kamera CCTV.",
      badge: "Keamanan Fisik",
      code: "K3-SARPRAS-03",
      status: "Terinspeksi Lapangan"
    },
    {
      title: "Laporan Kegiatan Sosialisasi Anti-Perundungan & Pembiasaan Karakter",
      desc: "Dokumentasi seminar Sekolah Ramah Anak, deklarasi komitmen anti-kekerasan, dan kebaktian pembinaan budi pekerti Kristiani.",
      badge: "Dokumentasi Kegiatan",
      code: "KEG-RAMAHANAK-04",
      status: "Arsip Portofolio"
    }
  ];

  const subIndikators = [
    {
      no: "12.1",
      label: "Pencegahan & Penanganan Perundungan (Anti-Bullying)",
      detail: "Sekolah memiliki regulasi tertulis, mekanisme penanganan aduan yang melindungi korban, serta sosialisasi rutin antikekerasan secara fisik, verbal, maupun siber."
    },
    {
      no: "12.2",
      label: "Rasa Aman Psikis & Kenyamanan Belajar",
      detail: "Terciptanya suasana interaksi sosial yang suportif, penghargaan martabat individu tanpa diskriminasi, serta tersedianya bimbingan konseling rohani dan emosional."
    },
    {
      no: "12.3",
      label: "Keamanan, Keselamatan & Kesehatan Fisik Lingkungan",
      detail: "Gedung, ruang kelas, laboratorium, dan halaman bermain bersih, aman dari potensi bahaya struktural/lingkungan, serta siap dengan mitigasi keselamatan."
    }
  ];

  return (
    <main className="min-h-screen bg-[#F3EFE4] font-sans flex flex-col text-slate-800">
      
      {/* BREADCRUMB & HEADER */}
      <section className="w-full pt-8 pb-4 px-4 sm:px-8 max-w-7xl mx-auto shrink-0">
        <div className="text-xs text-slate-600 font-semibold mb-4 flex items-center gap-1 flex-wrap">
          <span>You are here :</span>
          <Link href="/" className="text-[#047857] hover:underline ml-1">🏠 Home</Link>
          <span>-</span>
          <Link href="/akreditasi" className="text-[#047857] hover:underline">Akreditasi</Link>
          <span>-</span>
          <span className="text-slate-500">Butir 12</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-slate-300">
          <div>
            <span className="bg-[#8B0000] text-white text-[10px] sm:text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-2">
              INSTRUMEN AKREDITASI NASIONAL
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-[#1e293b] tracking-wider uppercase">
              BUKTI KINERJA BUTIR 12
            </h1>
            <p className="text-xs sm:text-sm text-slate-700 font-semibold mt-1">
              Satuan Pendidikan Mewujudkan Lingkungan Belajar yang Aman Secara Psikis dan Fisik bagi Peserta Didik, Pendidik, dan Tenaga Kependidikan
            </p>
          </div>

          <div className="bg-emerald-50 border border-emerald-300 px-4 py-2 rounded-xl text-left md:text-right shrink-0">
            <span className="text-[10px] text-emerald-800 font-bold block uppercase tracking-wider">Status Visitasi</span>
            <span className="text-sm sm:text-base font-black text-emerald-950 flex items-center gap-1.5 md:justify-end">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
              Sedang Berlangsung Visitasi
            </span>
            <span className="text-[10px] text-slate-500 block">Tim Asesor Akreditasi</span>
          </div>
        </div>
      </section>

      {/* KONTEN UTAMA DUA KOLOM */}
      <section className="w-full flex-1 pb-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* KOLOM KIRI (8 KOLOM): DETAIL INDIKATOR & DOKUMEN FISIK */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* KARTU PENGANTAR ASESOR */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl shadow-sm border-t-4 border-[#047857]">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                Pernyataan Komitmen Lingkungan Aman SMP Advent Batam
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify mb-4">
                SMP Advent Batam menempatkan perlindungan martabat manusia, keselamatan jasmani, dan ketenteraman batin peserta didik sebagai prioritas tertinggi. Melalui integrasi pendidikan karakter Kristiani, penegakan tata tertib disiplin positif, dan pengawasan fasilitas kampus yang ketat, sekolah menjamin setiap individu dapat bertumbuh, belajar, dan melayani tanpa rasa takut terhadap ancaman perundungan maupun bahaya lingkungan.
              </p>

              {/* INDIKATOR RINCIAN */}
              <div className="space-y-3 pt-2">
                {subIndikators.map((sub, idx) => (
                  <div key={idx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-[#047857] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                        Indikator {sub.no}
                      </span>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        {sub.label}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {sub.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* DAFTAR BUKTI FISIK DOKUMEN AKREDITASI */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-black text-sm text-slate-900 uppercase tracking-wide">
                  Berkas Bukti Dukung (Evidence) Butir 12
                </h3>
                <span className="text-[11px] text-slate-500 font-semibold">
                  Tersedia untuk Telaah Asesor
                </span>
              </div>

              {documents.map((doc, idx) => (
                <div key={idx} className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-emerald-600 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-amber-100 text-amber-900 font-bold text-[10px] px-2 py-0.5 rounded">
                        {doc.badge}
                      </span>
                      <span className="text-[11px] font-mono font-semibold text-slate-500">
                        {doc.code}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {doc.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {doc.desc}
                    </p>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2 shrink-0">
                    <span className="text-[10px] text-emerald-800 font-bold bg-emerald-50 px-2 py-1 rounded border border-emerald-200">
                      ✓ {doc.status}
                    </span>
                    <button 
                      type="button"
                      className="bg-[#047857] hover:bg-emerald-800 text-white font-bold text-xs px-4 py-2 rounded-lg shadow-sm transition-colors cursor-pointer"
                    >
                      Buka Dokumen ↗
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* TOMBOL NAVIGASI */}
            <div className="pt-4 flex flex-wrap gap-3">
              <Link
                href="/akreditasi"
                className="bg-[#D97706] hover:bg-amber-700 text-white font-bold text-xs py-2.5 px-6 rounded shadow-sm transition-colors"
              >
                ← Kembali ke Ringkasan Akreditasi
              </Link>
              <Link
                href="/"
                className="bg-[#8B0000] hover:bg-red-800 text-white font-bold text-xs py-2.5 px-6 rounded shadow-sm transition-colors"
              >
                Back to Home
              </Link>
            </div>

          </div>

          {/* KOLOM KANAN: SIDEBAR VISITASI & INFORMASI RESMI */}
          <aside className="lg:col-span-4 space-y-6">
            
            {/* KOTAK VISITASI ASESOR */}
            <div className="bg-[#EFEAD8] p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-300">
                <span className="bg-[#8B0000] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">🏛</span>
                <h3 className="font-bold text-sm sm:text-base text-slate-900 uppercase tracking-wide">
                  Visitasi Akreditasi
                </h3>
              </div>
              <div className="text-xs text-slate-700 space-y-2 leading-relaxed">
                <p>
                  <strong className="text-slate-900">Satuan Pendidikan:</strong> SMP Advent Batam Mas
                </p>
                <p>
                  <strong className="text-slate-900">Agenda:</strong> Visitasi Visit Lapangan & Telaah Bukti Dokumen Sekolah oleh Tim Asesor Akreditasi.
                </p>
                <p>
                  <strong className="text-slate-900">Fokus Verifikasi:</strong> Wawancara kepala sekolah, pendidik, komite, dan perwakilan peserta didik mengenai rasa aman psikis dan fisik.
                </p>
              </div>
            </div>

            {/* KOTAK NAVIGASI BUTIR LAIN */}
            <div className="bg-[#EFEAD8] p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-sm text-slate-900 mb-3 pb-2 border-b border-slate-300 uppercase tracking-wide">
                Indikator Iklim Lingkungan Belajar
              </h3>
              <ul className="text-xs space-y-2 font-medium">
                <li className="p-2.5 bg-emerald-700 text-white font-bold rounded shadow-xs">
                  ▶ Butir 12 : Lingkungan Belajar Aman (Psikis & Fisik)
                </li>
                <li className="p-2.5 bg-white hover:bg-slate-100 rounded transition-colors text-slate-700 border border-slate-200">
                  Butir 13 : Suasana Belajar yang Inklusif & Kebinekaan
                </li>
                <li className="p-2.5 bg-white hover:bg-slate-100 rounded transition-colors text-slate-700 border border-slate-200">
                  Butir 14 : Partisipasi Keluarga dan Komite Sekolah
                </li>
              </ul>
            </div>

            {/* KONTAK SEKOLAH */}
            <div className="bg-[#EFEAD8] p-5 rounded-2xl shadow-sm border border-slate-200 text-xs text-slate-700 space-y-2">
              <h4 className="font-black text-slate-900">SMP ADVENT BATAM MAS</h4>
              <p className="text-[11px] text-slate-600">
                Pusat Pembinaan Karakter, Iman, dan Ilmu Pengetahuan Unggul.
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
