"use client";

import Link from "next/link";

export default function Butir12Page() {
  // BUKTI DUKUNG DOKUMEN FISIK SESUAI BUTIR-12-OKE POOL.docx
  const evidenceDocuments = [
    {
      code: "SK-TPPK-2026",
      title: "SK Pembentukan Satuan Tugas (Satgas) Sekolah Ramah Anak & Anti Perundungan (TPPK)",
      nomor: "Nomor: 056/08/YPAB-SMP/VII/2026",
      desc: "Surat Keputusan Kepala SMPS Advent Batam Mas tentang pembentukan Satgas TPPK guna menjamin hak perlindungan peserta didik dari kekerasan fisik, psikis, dan diskriminasi.",
      badge: "SK Kebijakan",
      status: "Tersedia Fisik & SK Resmi"
    },
    {
      code: "SOP-PENANGANAN-01",
      title: "Prosedur Penanganan Pelanggaran & Diagram Alur Eskalasi Penanganan Kasus",
      nomor: "Bab V Dokumen SOP Penanganan",
      desc: "Panduan berjenjang 6 tahap penanganan (Identifikasi, Klarifikasi & Dialog Empatik, Penetapan Kategori, Pembinaan, Pendokumentasian & Komunikasi Ortu, Pemantauan Tindak Lanjut).",
      badge: "SOP Prosedural",
      status: "Terverifikasi Asesor"
    },
    {
      code: "TATA-TERTIB-2026",
      title: "Dokumen Tata Tertib SMPS Advent Batam Tahun Pelajaran 2026/2027",
      nomor: "Regulasi Disiplin Sekolah",
      desc: "Sistem poin dan deskripsi peraturan kehadiran, upacara, kerapian seragam, ketertiban KBM, larangan membawa gawai tanpa izin, serta sanksi tegas tindakan indisipliner.",
      badge: "Tata Tertib Siswa",
      status: "Dokumen Sah Sekolah"
    },
    {
      code: "PROGRAM-EDUKASI-02",
      title: "Program Edukasi & Sosialisasi Berkala Anti-Bullying / Cyber Bullying",
      nomor: "Kegiatan Preventif Siswa",
      desc: "Materi edukasi interaktif fenomena gunung es bullying, deklarasi komitmen bersama di aula gereja sekolah, dan penandatanganan papan deklarasi ramah anak.",
      badge: "Edukasi & Sosialisasi",
      status: "Foto & Arsip Materi"
    },
    {
      code: "LAPORAN-EVALUASI-03",
      title: "Dokumentasi, Pelaporan Berkala, dan Evaluasi Disiplin Positif",
      nomor: "Bab VII Pedoman Disiplin Positif",
      desc: "Rekapitulasi pembinaan bulanan wali kelas, laporan evaluasi semester wakasek kesiswaan, peninjauan tahunan kepatuhan PTK, dan jadwal penerapan budaya sekolah aman.",
      badge: "Laporan & Evaluasi",
      status: "Portofolio Lengkap"
    }
  ];

  return (
    <main className="min-h-screen bg-[#F3EFE4] font-sans flex flex-col text-slate-800">
      
      {/* BREADCRUMB & JUDUL HALAMAN */}
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
              INSTRUMEN AKREDITASI BAN-S/M
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-[#1e293b] tracking-wider uppercase">
              BUKTI KINERJA BUTIR 12
            </h1>
            <p className="text-xs sm:text-sm text-slate-700 font-semibold mt-1 max-w-4xl leading-relaxed">
              Satuan pendidikan mewujudkan iklim lingkungan belajar yang aman secara psikis dan fisik bagi peserta didik, pendidik, dan tenaga kependidikan.
            </p>
          </div>

          <div className="bg-emerald-50 border border-emerald-300 px-4 py-2 rounded-xl text-left md:text-right shrink-0">
            <span className="text-[10px] text-emerald-800 font-bold block uppercase tracking-wider">Status Akreditasi</span>
            <span className="text-sm sm:text-base font-black text-emerald-950 flex items-center gap-1.5 md:justify-end">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
              Visitasi Lapangan Asesor
            </span>
            <span className="text-[10px] text-slate-500 block">SMPS Advent Batam Mas</span>
          </div>
        </div>
      </section>

      {/* KONTEN UTAMA DUA KOLOM */}
      <section className="w-full flex-1 pb-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* KOLOM KIRI (8 DARI 12 KOLOM) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* KARTU PENGANTAR BUTIR 12 (SESUAI DOKUMEN BUTIR-12-OKE POOL.docx) */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl shadow-sm border-t-4 border-[#047857]">
              
              <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                Butir 12. Iklim Lingkungan Belajar yang Aman Secara Psikis dan Fisik
              </h2>
              
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify mb-5">
                SMPS Advent Batam Mas berkomitmen penuh menghadirkan lingkungan pendidikan yang kondusif, berkeadilan, dan bebas dari segala bentuk diskriminasi, intimidasi, maupun kekerasan fisik dan emosional. Seluruh tata kelola perlindungan warga sekolah didukung oleh regulasi tertulis yang terstruktur, satuan tugas pencegahan kekerasan yang aktif, serta program pembinaan terukur bagi peserta didik, pendidik, dan tenaga kependidikan.
              </p>

              {/* INDIKATOR 3.12.1 & 3.12.2 DARI DOKUMEN */}
              <div className="space-y-4">
                
                {/* INDIKATOR 3.12.1 */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className="bg-[#047857] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      Indikator 3.12.1
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      Kebijakan dalam Pencegahan dan Penanganan Perundungan dan Kekerasan
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify">
                    Sekolah memiliki kebijakan tertulis dan mekanisme yang jelas untuk mencegah dan menangani kasus perundungan (bullying) dan kekerasan di lingkungan sekolah, termasuk pembentukan Tim Pencegahan dan Penanganan Kekerasan (TPPK).
                  </p>
                </div>

                {/* INDIKATOR 3.12.2 */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className="bg-[#047857] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      Indikator 3.12.2
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      Program bagi Warga Sekolah dalam Pencegahan dan Penanganan Perundungan dan Kekerasan
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify">
                    Sekolah melaksanakan program sosialisasi dan edukasi anti-perundungan dan kekerasan secara berkala kepada guru, murid, dan orang tua sebagai upaya preventif membangun lingkungan sekolah yang aman.
                  </p>
                </div>

              </div>
            </div>

            {/* DAFTAR BUKTI FISIK EVIDENCE */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-black text-sm text-slate-900 uppercase tracking-wide">
                  Berkas Bukti Dukung (Evidence) Butir 12
                </h3>
                <span className="text-[11px] text-slate-500 font-semibold">
                  Tersedia untuk Telaah Asesor
                </span>
              </div>

              {evidenceDocuments.map((doc, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-emerald-600 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="bg-amber-100 text-amber-900 font-bold text-[10px] px-2 py-0.5 rounded">
                        {doc.badge}
                      </span>
                      <span className="text-[11px] font-mono font-semibold text-slate-500">
                        {doc.nomor}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {doc.title}
                    </h4>

                    <p className="text-xs text-slate-600 mt-1 leading-relaxed text-justify">
                      {doc.desc}
                    </p>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2 shrink-0">
                    <span className="text-[10px] text-emerald-800 font-bold bg-emerald-50 px-2 py-1 rounded border border-emerald-200 whitespace-nowrap">
                      ✓ {doc.status}
                    </span>
                    <button 
                      type="button"
                      className="bg-[#047857] hover:bg-emerald-800 text-white font-bold text-xs px-4 py-2 rounded-lg shadow-sm transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Buka Dokumen ↗
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* VIDEO DOKUMENTASI SOSIALISASI ANTI-PERUNDUNGAN */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="text-red-600 text-base">▶</span>
                  <h3 className="font-bold text-sm text-slate-900">
                    Video Dokumentasi Kampanye & Sosialisasi Anti-Bullying
                  </h3>
                </div>
                <a 
                  href="https://www.youtube.com/watch?v=hviOV49zohc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-red-700 hover:underline font-bold"
                >
                  Tonton di YouTube ↗
                </a>
              </div>
              <p className="text-xs text-slate-600 mb-3">
                Dokumentasi tayangan kegiatan edukasi dan komitmen bersama seluruh siswa SMPS Advent Batam Mas dalam menghentikan perundungan di lingkungan sekolah.
              </p>
              <div className="aspect-video w-full rounded-lg overflow-hidden bg-slate-900 shadow">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/hviOV49zohc" 
                  title="Sosialisasi Anti-Bullying SMPS Advent Batam Mas"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* TOMBOL NAVIGASI BAWAH */}
            <div className="pt-2 flex flex-wrap gap-3">
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

          {/* KOLOM KANAN: SIDEBAR ASESMEN & LEMBAGA */}
          <aside className="lg:col-span-4 space-y-6">
            
            {/* KOTAK VISITASI AKREDITASI */}
            <div className="bg-[#EFEAD8] p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-300">
                <span className="bg-[#8B0000] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">🏛</span>
                <h3 className="font-bold text-sm sm:text-base text-slate-900 uppercase tracking-wide">
                  Visitasi Akreditasi
                </h3>
              </div>
              <div className="text-xs text-slate-700 space-y-2 leading-relaxed">
                <p>
                  <strong className="text-slate-900">Satuan Pendidikan:</strong> SMPS Advent Batam Mas
                </p>
                <p>
                  <strong className="text-slate-900">NPSN:</strong> 70002994
                </p>
                <p>
                  <strong className="text-slate-900">Fokus Verifikasi Butir 12:</strong> Pemeriksaan SK Satgas TPPK, bukti alur eskalasi penanganan kasus, buku catatan disiplin positif, serta observasi iklim interaksi kondusif di lingkungan sekolah.
                </p>
              </div>
            </div>

            {/* KOTAK TAHAPAN ESKALASI PENANGANAN KASUS (DARI DOKUMEN) */}
            <div className="bg-[#EFEAD8] p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-sm text-slate-900 mb-3 pb-2 border-b border-slate-300 uppercase tracking-wide">
                Alur Eskalasi Penanganan
              </h3>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="bg-white p-2.5 rounded border border-slate-200">
                  <strong className="text-[#047857] block">Tahap 1 - 3:</strong>
                  <span>Identifikasi Perilaku → Klarifikasi & Dialog Empatik → Penetapan Kategori</span>
                </div>
                <div className="bg-white p-2.5 rounded border border-slate-200">
                  <strong className="text-[#047857] block">Tahap 4 - 6:</strong>
                  <span>Pembinaan Sesuai Kategori → Pendokumentasian & Komunikasi Ortu → Pemantauan & Evaluasi</span>
                </div>
              </div>
            </div>

            {/* KONTAK SEKOLAH */}
            <div className="bg-[#EFEAD8] p-5 rounded-2xl shadow-sm border border-slate-200 text-xs text-slate-700 space-y-2">
              <h4 className="font-black text-slate-900">SMPS ADVENT BATAM MAS</h4>
              <p className="text-[11px] text-slate-600">
                Jalan Prof. Dr. Hamka Kav. IV - Batu Aji - Batam (Kode Pos: 29432)
              </p>
              <p className="text-[11px] text-slate-600">
                Email: smpadventbmas@gmail.com
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
