"use client";

import { useState } from "react";
import Link from "next/link";

export default function Butir12Page() {
  const [selectedDoc, setSelectedDoc] = useState(null);

  // DATA BERKAS BUKTI FISIK LENGKAP DENGAN GAMBAR MODAL
  const evidenceDocuments = [
    {
      id: "sk-tppk",
      code: "SK-TPPK-2026",
      nomor: "Nomor: 056/08/YPAB-SMP/VII/2026",
      title: "SK Pembentukan Satuan Tugas (Satgas) Sekolah Ramah Anak & Anti Perundungan (TPPK)",
      badge: "SK Kebijakan",
      status: "Tersedia Fisik & SK Resmi",
      desc: "Surat Keputusan Kepala SMPS Advent Batam Mas tentang pembentukan Satgas TPPK guna menjamin hak perlindungan peserta didik dari kekerasan fisik, psikis, dan diskriminasi.",
      docSubtitle: "SURAT KEPUTUSAN KEPALA SEKOLAH SMPS ADVENT BATAM MAS",
      docImage: "/akreditasi/sk-tppk.jpg",
      details: [
        "Menimbang: Setiap peserta didik berhak memperoleh perlindungan dari kekerasan fisik, psikis, dan tindakan diskriminasi selama berada di lingkungan satuan pendidikan.",
        "Menimbang: Perundungan (bullying) dalam bentuk apapun dapat menghambat tumbuh kembang, rasa aman, dan prestasi belajar peserta didik.",
        "Mewujudkan prinsip Sekolah Ramah Anak (SRA) yang menjamin pemenuhan hak perlindungan dan partisipasi anak.",
        "Ditetapkan di Batam untuk Tahun Pelajaran 2025/2026 dan 2026/2027 oleh Kepala Sekolah SMPS Advent Batam Mas."
      ]
    },
    {
      id: "sop-penanganan",
      code: "SOP-PENANGANAN-01",
      nomor: "Bab V Prosedur Penanganan Pelanggaran",
      title: "Prosedur Penanganan Pelanggaran & Diagram Alur Eskalasi Penanganan Kasus",
      badge: "SOP Prosedural",
      status: "Terverifikasi Asesor",
      desc: "Panduan berjenjang 6 tahap penanganan (Identifikasi, Klarifikasi & Dialog Empatik, Penetapan Kategori, Pembinaan, Pendokumentasian & Komunikasi Ortu, Pemantauan Tindak Lanjut).",
      docSubtitle: "V. PROSEDUR PENANGANAN PELANGGARAN & DIAGRAM ALUR ESKALASI",
      docImage: "/akreditasi/sop-penanganan.jpg",
      details: [
        "5.1 Alur Umum Penanganan: Identifikasi Perilaku → Klarifikasi & Dialog Empatik → Penetapan Kategori (Ringan/Sedang/Berat) → Pembinaan Sesuai Kategori → Pendokumentasian → Komunikasi Orang Tua → Pemantauan & Evaluasi.",
        "5.2 Prinsip Prosedural: Asas praduga tak bersalah, jaminan kerahasiaan identitas, proporsionalitas pembinaan, konsistensi tanpa diskriminasi, dan hak pendampingan.",
        "5.3 Diagram Alur: Tahap 1-3 (Identifikasi hingga Kategori) dilanjutkan Tahap 4-6 (Pembinaan, Pendokumentasian hingga Evaluasi Berkala)."
      ]
    },
    {
      id: "tata-tertib",
      code: "TATA-TERTIB-2026",
      nomor: "Regulasi Disiplin Sekolah TP 2026/2027",
      title: "Dokumen Tata Tertib SMPS Advent Batam Tahun Pelajaran 2026/2027",
      badge: "Tata Tertib Siswa",
      status: "Dokumen Sah Sekolah",
      desc: "Sistem poin dan deskripsi peraturan kehadiran, upacara, kerapian seragam, ketertiban KBM, larangan membawa gawai tanpa izin, serta sanksi tegas tindakan indisipliner.",
      docSubtitle: "TATA TERTIB DAN SISTEM POIN SMPS ADVENT BATAM",
      docImage: "/akreditasi/tata-tertib.jpg",
      details: [
        "A. Kehadiran & Keterlambatan: Batas hadir pukul 07.15 WIB, prosedur izin guru piket dan wali kelas.",
        "B. Upacara Bendera: Kelengkapan atribut (topi, dasi, ikat pinggang, kaos kaki putih).",
        "C. Kerapian Pakaian: Seragam putih-biru, batik yayasan, pramuka, olahraga, busana melayu, dan pakaian ibadah chapel.",
        "D & E. Tata Tertib KBM: Disiplin kelas, larangan penggunaan alat komunikasi tanpa izin, serta penanganan tegas terhadap ketidaksopanan atau kekerasan verbal/fisik."
      ]
    },
    {
      id: "program-sosialisasi",
      code: "PROGRAM-EDUKASI-02",
      nomor: "Kegiatan Preventif Siswa",
      title: "Program Edukasi & Sosialisasi Berkala Anti-Bullying / Cyber Bullying",
      badge: "Edukasi & Sosialisasi",
      status: "Foto & Arsip Materi",
      desc: "Materi edukasi interaktif fenomena gunung es bullying, deklarasi komitmen bersama di aula gereja sekolah, dan penandatanganan papan deklarasi ramah anak.",
      docSubtitle: "DOKUMENTASI KAMPANYE ANTI PERUNDUNGAN & PAPAN DEKLARASI",
      docImage: "/akreditasi/sosialisasi-deklarasi.jpg",
      details: [
        "Sosialisasi berkala di Aula Pertemuan Sekolah membahas bahaya cyber-bullying dan perundungan verbal.",
        "Pemberian materi komprehensif tentang konsep 'Fenomena Gunung Es' kasus bullying di Indonesia.",
        "Penandatanganan Papan Deklarasi Sekolah Ramah Anak & Anti Perundungan oleh perwakilan guru, komite, dan peserta didik.",
        "Video sosialisasi publik terintegrasi di YouTube: https://www.youtube.com/watch?v=hviOV49zohc"
      ]
    },
    {
      id: "evaluasi-laporan",
      code: "LAPORAN-EVALUASI-03",
      nomor: "Bab VII Pedoman Disiplin Positif",
      title: "Dokumentasi, Pelaporan Berkala, dan Evaluasi Disiplin Positif",
      badge: "Laporan & Evaluasi",
      status: "Portofolio Lengkap",
      desc: "Rekapitulasi pembinaan bulanan wali kelas, laporan evaluasi semester wakasek kesiswaan, peninjauan tahunan kepatuhan PTK, dan jadwal penerapan budaya sekolah aman.",
      docSubtitle: "VII. PENDOKUMENTASIAN, PELAPORAN, DAN EVALUASI BERKALA",
      docImage: "/akreditasi/evaluasi-laporan.jpg",
      details: [
        "7.1 Pendokumentasian: Penggunaan formulir baku pencatatan pembinaan yang tersimpan aman dan konfidensial.",
        "7.2 Pelaporan Berkala: Laporan bulanan wali kelas kepada PKS Kesiswaan dan rekapitulasi semesteran kepada Kepala Sekolah.",
        "7.3 Evaluasi & Peninjauan Tahunan: Mengukur penurunan tingkat keparahan pelanggaran, efektivitas konseling, serta kepatuhan tenaga pendidik terhadap larangan tindak kekerasan.",
        "7.4 Jadwal Penerapan: Pelatihan pendidik mengenai disiplin positif restoratif (Juli 2025 - 2026) hingga pemantapan budaya sekolah aman berkelanjutan."
      ]
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

      {/* KONTEN UTAMA */}
      <section className="w-full flex-1 pb-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* KOLOM KIRI (8 DARI 12) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* KARTU PENGANTAR BUTIR 12 */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl shadow-sm border-t-4 border-[#047857]">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                Butir 12. Iklim Lingkungan Belajar yang Aman Secara Psikis dan Fisik
              </h2>
              
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify mb-5">
                SMPS Advent Batam Mas berkomitmen penuh menghadirkan lingkungan pendidikan yang kondusif, berkeadilan, dan bebas dari segala bentuk diskriminasi, intimidasi, maupun kekerasan fisik dan emosional. Seluruh tata kelola perlindungan warga sekolah didukung oleh regulasi tertulis yang terstruktur, satuan tugas pencegahan kekerasan yang aktif, serta program pembinaan terukur bagi peserta didik, pendidik, dan tenaga kependidikan.
              </p>

              <div className="space-y-4">
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
                    
                    {/* TOMBOL BUKA DOKUMEN AKTIF */}
                    <button 
                      type="button"
                      onClick={() => setSelectedDoc(doc)}
                      className="bg-[#047857] hover:bg-emerald-800 text-white font-bold text-xs px-4 py-2 rounded-lg shadow-sm transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap flex items-center gap-1"
                    >
                      <span>Buka Dokumen</span>
                      <span>↗</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* VIDEO DOKUMENTASI ANTI-BULLYING */}
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

            {/* NAVIGASI BAWAH */}
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

          {/* KOLOM KANAN: SIDEBAR */}
          <aside className="lg:col-span-4 space-y-6">
            
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

      {/* ========================================================================= */}
      {/* MODAL POP-UP VIEWER DOKUMEN (MUNCUL KETIKA TOMBOL "Buka Dokumen ↗" DIKLIK) */}
      {/* ========================================================================= */}
      {selectedDoc && (
        <div className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-3 sm:p-6 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-3xl max-h-[92vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200">
            
            {/* HEADER MODAL */}
            <div className="bg-[#1e293b] text-white p-4 sm:p-5 flex items-center justify-between">
              <div>
                <span className="bg-amber-500 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                  {selectedDoc.badge}
                </span>
                <h3 className="text-sm sm:text-base font-bold mt-1 text-white leading-tight">
                  {selectedDoc.title}
                </h3>
                <p className="text-[11px] text-slate-300 font-mono">
                  {selectedDoc.nomor}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedDoc(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-black transition-colors cursor-pointer ml-3 shrink-0"
                aria-label="Tutup Pratinjau Dokumen"
              >
                ✕
              </button>
            </div>

            {/* BODY DOKUMEN MODAL (SCROLLABLE) */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed bg-[#f8fafc]">
              
              {/* LEMBAR PRATINJAU DOKUMEN RESMI */}
              <div className="bg-white p-5 sm:p-6 rounded-xl border border-slate-300 shadow-xs">
                
                {/* KOP RESMI DOKUMEN */}
                <div className="text-center pb-3 border-b-2 border-slate-800 mb-4">
                  <p className="font-extrabold text-[11px] sm:text-xs text-slate-900 tracking-wider">
                    YAYASAN PENDIDIKAN ADVENT BATAM
                  </p>
                  <p className="font-black text-sm sm:text-base text-slate-950">
                    SMPS ADVENT BATAM MAS
                  </p>
                  <p className="text-[10px] text-slate-500">
                    AKTA No. 29 Tahun 2011 • NPSN : 70002994 • Jl. Prof. Dr. Hamka Kav. IV Batu Aji Batam
                  </p>
                </div>

                <div className="text-center font-bold text-xs sm:text-sm text-[#047857] pb-3 border-b border-slate-200 mb-4">
                  {selectedDoc.docSubtitle}
                </div>

                {/* BUTIR-BUTIR PASAL / POIN PERATURAN DOKUMEN */}
                <div className="space-y-2.5">
                  {selectedDoc.details.map((point, pIdx) => (
                    <div key={pIdx} className="flex gap-2 items-start bg-slate-50 p-2.5 rounded border border-slate-200">
                      <span className="text-[#047857] font-bold">✓</span>
                      <span className="text-slate-800 leading-relaxed text-justify">{point}</span>
                    </div>
                  ))}
                </div>

                {/* TANDA VERIFIKASI ASESOR */}
                <div className="mt-6 pt-4 border-t border-dashed border-slate-300 flex justify-between items-center text-[11px] text-slate-500">
                  <span>Status: Terarsip dan diverifikasi untuk Akreditasi Sekolah</span>
                  <span className="font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Dokumen Sah SMPS Advent Batam Mas
                  </span>
                </div>

              </div>

            </div>

            {/* FOOTER MODAL */}
            <div className="bg-slate-100 p-3 sm:p-4 border-t border-slate-200 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setSelectedDoc(null)}
                className="bg-slate-700 hover:bg-slate-800 text-white font-bold text-xs px-5 py-2 rounded-lg transition-colors cursor-pointer"
              >
                Tutup Dokumen
              </button>
            </div>

          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="w-full bg-[#8B0000] text-white text-[10px] sm:text-xs text-center py-4 font-semibold shrink-0 mt-auto">
        Developed by Ir. Budhy Prasetyo
      </footer>
    </main>
  );
}
