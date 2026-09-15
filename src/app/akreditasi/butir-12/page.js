"use client";

import { useState } from "react";
import Link from "next/link";

export default function Butir12Page() {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [activeSkTab, setActiveSkTab] = useState("2026-2027");

  // DATA SK PROGRAM GERAKAN KELAS HARMONI 3 TAHUN PELAJARAN
  const skHarmoniData = {
    "2024-2025": {
      tp: "2024/2025",
      nomor: "058/08/SMP-YPAB/VII/2024",
      tanggal: "10 Juli 2024",
      rapat: "10 Juli 2024"
    },
    "2025-2026": {
      tp: "2025/2026",
      nomor: "059/08/SMP-YPAB/VII/2025",
      tanggal: "10 Juli 2025",
      rapat: "10 Juli 2025"
    },
    "2026-2027": {
      tp: "2026/2027",
      nomor: "060/08/SMP-YPAB/VII/2026",
      tanggal: "10 Juli 2026",
      rapat: "10 Juli 2026"
    }
  };

  // DAFTAR BUKTI FISIK EVIDENCE BUTIR 12
  const evidenceDocuments = [
    {
      id: "sk-harmoni-3tp",
      code: "SK-HARMONI-3TP",
      nomor: "No: 058 (2024) | No: 059 (2025) | No: 060 (2026)",
      title: "SK Pembentukan Program Gerakan Kelas Harmoni & Satgas Anti Perundungan (3 Tahun Berturut-turut)",
      badge: "SK Kebijakan Resmi",
      status: "Tersedia 3 Dokumen Sah",
      desc: "Surat Keputusan Kepala SMPS Advent Batam Mas tentang Program Gerakan Kelas Harmoni (Penyusunan Kesepakatan Kelas) untuk TP 2024/2025, TP 2025/2026, dan TP 2026/2027 guna menciptakan iklim belajar yang aman, tertib, dan bebas perundungan.",
      isMultiSk: true,
      isGallery: false
    },
    {
      id: "sop-penanganan",
      code: "SOP-PENANGANAN-01",
      nomor: "Bab V Prosedur Penanganan Pelanggaran",
      title: "Prosedur Penanganan Pelanggaran & Diagram Alur Eskalasi Penanganan Kasus",
      badge: "SOP Prosedural",
      status: "Terverifikasi Asesor",
      desc: "Panduan berjenjang 6 tahap penanganan (Identifikasi, Klarifikasi & Dialog Empatik, Penetapan Kategori, Pembinaan, Pendokumentasian & Komunikasi Ortu, Pemantauan Tindak Lanjut).",
      isMultiSk: false,
      isGallery: false,
      docSubtitle: "V. PROSEDUR PENANGANAN PELANGGARAN & DIAGRAM ALUR ESKALASI",
      details: [
        "5.1 Alur Umum: Identifikasi Perilaku → Klarifikasi & Dialog Empatik → Penetapan Kategori (Ringan/Sedang/Berat) → Pembinaan Sesuai Kategori → Pendokumentasian & Komunikasi Ortu → Pemantauan & Evaluasi Tindak Lanjut.",
        "5.2 Prinsip Prosedural: Asas praduga tak bersalah, jaminan kerahasiaan identitas, proporsionalitas pembinaan mendidik, konsistensi penerapan adil, dan hak didampingi orang tua/wali kelas.",
        "5.3 Diagram Alur Eskalasi: Kasus yang belum membaik dieskalasi secara terukur mengikuti kategori pembinaan yang berlaku."
      ]
    },
    {
      id: "tata-tertib",
      code: "TATA-TERTIB-2026",
      nomor: "Regulasi Disiplin Sekolah TP 2026/2027",
      title: "Dokumen Tata Tertib SMPS Advent Batam Tahun Pelajaran 2026/2027",
      badge: "Tata Tertib Siswa",
      status: "Dokumen Sah Sekolah",
      desc: "Sistem poin dan deskripsi peraturan kehadiran, upacara bendera, kerapian seragam sekolah, ketertiban proses belajar mengajar (KBM), serta larangan kekerasan fisik dan verbal.",
      isMultiSk: false,
      isGallery: false,
      docSubtitle: "TATA TERTIB DAN SISTEM POIN KEDISIPLINAN SISWA",
      details: [
        "A. Kehadiran: Hadir setiap hari efektif belajar sebelum pukul 07.15 WIB.",
        "B. Upacara Bendera: Kedisiplinan barisan dan kelengkapan atribut seragam lengkap.",
        "C. Kerapian Pakaian: Seragam putih-biru, batik, pramuka, olahraga, pakaian melayu, dan pakaian chapel ibadah.",
        "D & E. Ketertiban Belajar: Larangan mengganggu kelas, larangan pengoperasian gawai tanpa izin guru, serta sanksi tegas tindakan tidak sopan atau kekerasan antarsiswa."
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
      isMultiSk: false,
      isGallery: true,
      docSubtitle: "DOKUMENTASI FOTO KEGIATAN & VIDEO SOSIALISASI ANTI-PERUNDUNGAN",
      youtubeUrl: "https://www.youtube.com/watch?v=hviOV49zohc",
      youtubeEmbed: "https://www.youtube.com/embed/hviOV49zohc",
      photos: [
        {
          title: "Penandatanganan Papan Deklarasi oleh Pendidik",
          caption: "Pendidik dan pimpinan sekolah menandatangani komitmen deklarasi anti-perundungan di SMPS-SMAS Advent Batam Mas.",
          src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80",
          localFallback: "/akreditasi/foto-antibullying-02.jpeg"
        },
        {
          title: "Seminar Anti-Bullying & Cyber Bullying di Aula Gereja Sekolah",
          caption: "Pemberian materi edukasi pencegahan perundungan dan cyber-bullying oleh Mestika Retina Tampubolon, M.Psi.",
          src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80",
          localFallback: "/akreditasi/seminar-anti-bullying.jpg"
        },
        {
          title: "Penandatanganan Komitmen Bersama Seluruh Peserta Didik",
          caption: "Antusiasme peserta didik menandatangani Papan Deklarasi Sekolah Ramah Anak sebagai wujud saling menghormati dan menciptakan kelas yang aman.",
          src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=80",
          localFallback: "/akreditasi/penandatanganan-siswa.jpg"
        }
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
      isMultiSk: false,
      isGallery: false,
      docSubtitle: "VII. PENDOKUMENTASIAN, PELAPORAN, DAN EVALUASI BERKALA",
      details: [
        "7.1 Pendokumentasian: Menggunakan formulir baku pembinaan yang tersimpan aman dan konfidensial.",
        "7.2 Pelaporan Berkala: Rekapitulasi bulanan wali kelas kepada PKS Kesiswaan dan laporan evaluasi semester kepada Kepala Sekolah.",
        "7.3 Evaluasi Tahunan: Mengukur penurunan tingkat pelanggaran, efektivitas tindak lanjut, dan kepatuhan guru terhadap larangan kekerasan.",
        "7.4 Jadwal Penerapan: Sosialisasi pedoman, penguatan konsistensi, dan pemantapan budaya sekolah aman berkelanjutan."
      ]
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
              INSTRUMEN AKREDITASI BAN-PDM / BAN-S/M
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
          
          {/* KOLOM KIRI: DAFTAR BUKTI DUKUNG */}
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

            {/* DAFTAR KARTU BUKTI DUKUNG EVIDENCE */}
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
                      onClick={() => {
                        setSelectedDoc(doc);
                        if (doc.isMultiSk) setActiveSkTab("2026-2027");
                      }}
                      className="bg-[#047857] hover:bg-emerald-800 text-white font-bold text-xs px-4 py-2 rounded-lg shadow-sm transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap flex items-center gap-1"
                    >
                      <span>Buka Dokumen</span>
                      <span>↗</span>
                    </button>
                  </div>
                </div>
              ))}
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

          {/* KOLOM KANAN: SIDEBAR ASESOR */}
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
                  <strong className="text-slate-900">Fokus Verifikasi Butir 12:</strong> Pemeriksaan SK Satgas TPPK dan SK Program Gerakan Kelas Harmoni (3 TP), alur eskalasi penanganan kasus, buku catatan disiplin positif, serta observasi iklim interaksi kondusif di lingkungan sekolah.
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
      {/* MODAL POP-UP VIEWER DOKUMEN                                                */}
      {/* ========================================================================= */}
      {selectedDoc && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-3 sm:p-6 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-4xl max-h-[94vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200">
            
            {/* HEADER MODAL */}
            <div className="bg-[#1e293b] text-white p-4 sm:p-5 flex items-center justify-between shrink-0">
              <div>
                <span className="bg-amber-500 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                  {selectedDoc.badge}
                </span>
                <h3 className="text-sm sm:text-base font-bold mt-1 text-white leading-tight">
                  {selectedDoc.title}
                </h3>
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

            {/* TAB PILIHAN SK JIKA MULTI-SK */}
            {selectedDoc.isMultiSk && (
              <div className="bg-slate-100 border-b border-slate-300 px-4 pt-3 flex gap-2 overflow-x-auto shrink-0">
                {Object.keys(skHarmoniData).map((key) => {
                  const item = skHarmoniData[key];
                  const isActive = activeSkTab === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveSkTab(key)}
                      className={`px-4 py-2 text-xs font-bold rounded-t-lg transition-all border-t border-x cursor-pointer ${
                        isActive
                          ? "bg-white text-[#047857] border-slate-300 border-b-transparent shadow-xs"
                          : "bg-slate-200 text-slate-600 hover:bg-slate-300 border-transparent"
                      }`}
                    >
                      📄 SK TP {item.tp}
                    </button>
                  );
                })}
              </div>
            )}

            {/* BODY DOKUMEN MODAL (SCROLLABLE) */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-800 leading-relaxed bg-[#f8fafc]">
              
              {/* TAMPILAN 1: KARTU EDUKASI & SOSIALISASI (MENAMPILKAN 3 FOTO & VIDEO YOUTUBE) */}
              {selectedDoc.isGallery ? (
                <div className="space-y-6">
                  
                  {/* PENGANTAR SINGKAT */}
                  <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs">
                    <h4 className="font-black text-sm text-[#047857] uppercase mb-1">
                      Dokumentasi Bukti Fisik: Sosialisasi & Komitmen Deklarasi Anti-Perundungan
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Berikut dokumentasi otentik penyelenggaraan sosialisasi anti-bullying, seminar psiko-edukasi bersama narasumber ahli, penandatanganan papan komitmen bersama, serta video kegiatan terintegrasi.
                    </p>
                  </div>

                  {/* 3 FOTO BUKTI DOKUMENTASI */}
                  <div className="space-y-4">
                    <h5 className="font-black text-xs sm:text-sm text-slate-900 uppercase tracking-wide flex items-center gap-1.5">
                      <span>📸</span> Galeri 3 Foto Kegiatan
                    </h5>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      
                      {/* FOTO 1 */}
                      <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
                        <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
                          <img
                            src="/akreditasi/foto-antibullying-02.jpeg"
                            alt="Penandatanganan Papan Deklarasi oleh Pendidik"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              // Fallback preview SVG jika file lokal belum dipindah ke folder public
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&auto=format&fit=crop&q=80";
                            }}
                          />
                        </div>
                        <div className="p-3 flex-1 flex flex-col justify-between">
                          <h6 className="font-bold text-xs text-slate-900 leading-snug">
                            1. Komitmen Pendidik & Satgas
                          </h6>
                          <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                            Penandatanganan resmi Papan Deklarasi Stop Bullying oleh jajaran guru SMPS-SMAS Advent Batam Mas.
                          </p>
                        </div>
                      </div>

                      {/* FOTO 2 */}
                      <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
                        <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
                          <img
                            src="/akreditasi/guru&siswa-dalam seminar pelatihan anti bullying oleh Mestika Retina Tampubolon M.Psi.jpg"
                            alt="Seminar Pelatihan Anti Bullying"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80";
                            }}
                          />
                        </div>
                        <div className="p-3 flex-1 flex flex-col justify-between">
                          <h6 className="font-bold text-xs text-slate-900 leading-snug">
                            2. Pelatihan & Psiko-Edukasi
                          </h6>
                          <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                            Seminar interaktif Anti Bullying & Cyber Bullying bersama Mestika Retina Tampubolon, M.Psi di aula gereja.
                          </p>
                        </div>
                      </div>

                      {/* FOTO 3 */}
                      <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
                        <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
                          <img
                            src="/akreditasi/foto-antibullying-03.jpeg"
                            alt="Penandatanganan oleh Peserta Didik"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&auto=format&fit=crop&q=80";
                            }}
                          />
                        </div>
                        <div className="p-3 flex-1 flex flex-col justify-between">
                          <h6 className="font-bold text-xs text-slate-900 leading-snug">
                            3. Deklarasi Peserta Didik
                          </h6>
                          <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                            Peserta didik membubuhkan tanda tangan penolakan terhadap segala aksi perundungan fisik maupun verbal.
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* VIDEO YOUTUBE DOKUMENTASI TERINTEGRASI */}
                  <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200">
                      <div className="flex items-center gap-2">
                        <span className="text-red-600 text-lg">▶</span>
                        <h5 className="font-black text-xs sm:text-sm text-slate-900 uppercase tracking-wide">
                          Video Dokumentasi Kampanye Anti-Perundungan
                        </h5>
                      </div>
                      
                      <a
                        href={selectedDoc.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 hover:bg-red-700 text-white font-bold text-[11px] px-3 py-1 rounded shadow-xs transition-colors flex items-center gap-1 w-fit"
                      >
                        <span>Buka di YouTube</span>
                        <span>↗</span>
                      </a>
                    </div>

                    <p className="text-xs text-slate-600">
                      Tautan video resmi kegiatan edukasi di kanal SMPS Advent Batam Mas:{" "}
                      <a 
                        href={selectedDoc.youtubeUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 underline font-mono break-all font-semibold"
                      >
                        {selectedDoc.youtubeUrl}
                      </a>
                    </p>

                    {/* PEMUTAR VIDEO YOUTUBE EMBED */}
                    <div className="aspect-video w-full rounded-lg overflow-hidden bg-slate-900 shadow-md border border-slate-300">
                      <iframe
                        className="w-full h-full"
                        src={selectedDoc.youtubeEmbed}
                        title="Video Kampanye Anti Perundungan SMPS Advent Batam Mas"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>

                </div>
              ) : selectedDoc.isMultiSk ? (
                /* TAMPILAN 2: SK HARMONI 3 TAHUN */
                (() => {
                  const currentSk = skHarmoniData[activeSkTab];
                  return (
                    <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-300 shadow-sm max-w-3xl mx-auto space-y-4 text-justify">
                      
                      <div className="text-center pb-4 border-b-2 border-slate-800">
                        <p className="font-extrabold text-xs sm:text-sm text-slate-900 tracking-wider">
                          YAYASAN PENDIDIKAN ADVENT BATAM
                        </p>
                        <p className="font-black text-base sm:text-lg text-slate-950">
                          SMPS ADVENT BATAM MAS
                        </p>
                        <p className="text-[10px] text-slate-500">
                          AKTA No. 29 Tahun 2011 • NPSN : 70002994 • Jalan Prof. Dr. Hamka Kav. IV - Batu Aji - Batam
                        </p>
                      </div>

                      <div className="text-center py-2">
                        <h4 className="font-black text-sm sm:text-base text-slate-900 uppercase">
                          SURAT KEPUTUSAN KEPALA SEKOLAH MENENGAH PERTAMA SWASTA ADVENT BATAM MAS
                        </h4>
                        <p className="font-bold text-xs text-slate-700 mt-1">
                          Nomor : {currentSk.nomor}
                        </p>
                        <p className="font-black text-xs sm:text-sm text-[#8B0000] mt-2 uppercase tracking-wide">
                          TENTANG<br/>
                          PROGRAM GERAKAN KELAS HARMONI<br/>
                          (PENYUSUNAN KESEPAKATAN KELAS)<br/>
                          TAHUN PELAJARAN {currentSk.tp}
                        </p>
                      </div>

                      <div className="space-y-2 text-[11px] sm:text-xs text-slate-700 border-t border-slate-200 pt-3">
                        <p className="font-bold text-slate-900">Menimbang :</p>
                        <ol className="list-alpha pl-5 space-y-1">
                          <li>bahwa untuk mewujudkan iklim kelas yang aman, nyaman, dan kondusif bagi tumbuh kembang peserta didik, diperlukan kesepakatan bersama antara guru dan peserta didik mengenai norma sikap dan perilaku di dalam kelas;</li>
                          <li>bahwa Program Gerakan Kelas Harmoni merupakan upaya sekolah untuk menumbuhkan disiplin positif, sikap saling menghormati, dan tanggung jawab bersama dalam proses pembelajaran;</li>
                          <li>bahwa penyusunan kesepakatan kelas secara partisipatif terbukti mendukung optimalisasi waktu belajar yang fokus dan minim gangguan sebagaimana dipersyaratkan dalam Instrumen Akreditasi IA2024 Versi 2025;</li>
                          <li>bahwa berdasarkan pertimbangan sebagaimana dimaksud pada huruf a, b, dan c, perlu ditetapkan Surat Keputusan Kepala Sekolah tentang Program Gerakan Kelas Harmoni.</li>
                        </ol>

                        <p className="font-bold text-slate-900 pt-2">Mengingat :</p>
                        <ol className="list-decimal pl-5 space-y-1">
                          <li>Undang-Undang Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional;</li>
                          <li>Peraturan Menteri Pendidikan dan Kebudayaan Nomor 82 Tahun 2015 tentang Pencegahan dan Penanggulangan Tindak Kekerasan di Lingkungan Satuan Pendidikan;</li>
                          <li>Peraturan Menteri Pendidikan, Kebudayaan, Riset, dan Teknologi Nomor 46 Tahun 2023 tentang Pencegahan dan Penanganan Perundungan di Lingkungan Satuan Pendidikan;</li>
                          <li>Instrumen Akreditasi IA2024 Versi 2025 Badan Akreditasi Nasional Pendidikan Dasar dan Menengah (BAN-PDM);</li>
                          <li>Program Kerja Yayasan Advent Indonesia Bidang Pendidikan Tahun Pelajaran 2026/2027;</li>
                          <li>Hasil Rapat Dewan Guru SMPS Advent Batam Mas tanggal {currentSk.rapat}.</li>
                        </ol>
                      </div>

                      <div className="space-y-2 text-[11px] sm:text-xs text-slate-800 border-t border-slate-200 pt-3">
                        <p className="font-black text-center text-slate-900">MEMUTUSKAN</p>
                        <p><strong className="text-slate-900">KESATU :</strong> Memberlakukan Program Gerakan Kelas Harmoni sebagai program pembentukan kesepakatan kelas (class agreement) di setiap rombongan belajar SMPS Advent Batam Mas, mulai Tahun Pelajaran {currentSk.tp}.</p>
                        <p><strong className="text-slate-900">KEDUA :</strong> Program Gerakan Kelas Harmoni bertujuan membangun kesepakatan kelas bersama, menumbuhkan budaya disiplin positif tanpa kekerasan fisik maupun verbal, menciptakan suasana belajar fokus dan tertib, meningkatkan rasa memiliki, serta menanamkan nilai-nilai Kristiani Advent (kasih, hormat, dan tanggung jawab).</p>
                        <p><strong className="text-slate-900">KETIGA :</strong> Setiap wali kelas wajib memfasilitasi penyusunan kesepakatan kelas pada minggu pertama tahun pelajaran, mendokumentasikan dalam bentuk piagam/poster yang ditandatangani bersama, dan menempelkannya di ruang kelas.</p>
                        <p><strong className="text-slate-900">KEEMPAT :</strong> Kesepakatan kelas memuat norma sikap dan tutur kata, pengelolaan waktu belajar tertib, prosedur pengingatan (reminder), dan konsekuensi mendidik tanpa hukuman fisik atau perundungan.</p>
                        <p><strong className="text-slate-900">KELIMA :</strong> Guru BK dan Wakil Kepala Kesiswaan bertugas mendampingi, memantau, mengevaluasi berkala setiap semester, dan melaporkan hasilnya kepada Kepala Sekolah.</p>
                        <p><strong className="text-slate-900">KEENAM :</strong> Segala biaya yang timbul dibebankan pada anggaran operasional sekolah yang sesuai.</p>
                        <p><strong className="text-slate-900">KETUJUH :</strong> Surat Keputusan ini mulai berlaku sejak tanggal ditetapkan.</p>
                      </div>

                      <div className="pt-6 border-t border-slate-200 flex justify-end">
                        <div className="text-center text-xs">
                          <p>Ditetapkan di: Batam</p>
                          <p>Pada tanggal: {currentSk.tanggal}</p>
                          <p className="font-bold mt-1">Kepala SMPS Advent Batam Mas,</p>
                          <div className="py-5 font-script text-slate-400 italic font-bold">
                            [Tanda Tangan & Cap Sah Sekolah]
                          </div>
                          <p className="font-black text-slate-900 underline">
                            Tona Leon F. Situmorang, S.Pd., MA.Ed.
                          </p>
                          <p className="text-[10px] text-slate-600 font-mono">
                            NRKS. 21023L0013160241226163
                          </p>
                        </div>
                      </div>

                    </div>
                  );
                })()
              ) : (
                /* TAMPILAN 3: DOKUMEN EVIDENCE LAIN */
                <div className="bg-white p-6 rounded-xl border border-slate-300 shadow-sm max-w-3xl mx-auto space-y-4">
                  <div className="text-center pb-3 border-b-2 border-slate-800">
                    <p className="font-extrabold text-xs text-slate-900">SMPS ADVENT BATAM MAS</p>
                    <p className="font-black text-sm text-[#047857]">{selectedDoc.docSubtitle}</p>
                    <p className="text-[10px] text-slate-500">{selectedDoc.nomor}</p>
                  </div>
                  <div className="space-y-3 pt-2">
                    {selectedDoc.details?.map((item, dIdx) => (
                      <div key={dIdx} className="flex gap-2.5 items-start bg-slate-50 p-3 rounded-lg border border-slate-200">
                        <span className="text-[#047857] font-bold text-sm">✓</span>
                        <p className="text-xs text-slate-800 leading-relaxed text-justify">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* FOOTER MODAL */}
            <div className="bg-slate-100 p-3 sm:p-4 border-t border-slate-200 flex justify-between items-center flex-wrap gap-2 shrink-0">
              <span className="text-[11px] text-slate-600 font-medium">
                Arsip Resmi Terakreditasi BAN-PDM / BAN-S/M
              </span>
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

      {/* FOOTER WEB */}
      <footer className="w-full bg-[#8B0000] text-white text-[10px] sm:text-xs text-center py-4 font-semibold shrink-0 mt-auto">
        Developed by Ir. Budhy Prasetyo
      </footer>
    </main>
  );
}
