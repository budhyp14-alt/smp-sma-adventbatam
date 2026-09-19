"use client";

import { useState } from "react";
import Link from "next/link";

export default function DetailEditorialManajer() {
  // DATA LENGKAP 4 BERITA EDITORIAL MANAJER TERAKHIR
  const editorialList = [
    {
      id: "peningkatan-fasilitas-berkelanjutan",
      date: "09 September 2026",
      author: "Samuel Simatupang (Operations Manager)",
      title: "Peningkatan Fasilitas Berkelanjutan Demi Kenyamanan dan Efektivitas Belajar",
      // FOTO MANAJER OPERASIONAL YANG BARU DIUNGGAH DI FOLDER PUBLIC
      img: "/manajer-operasional01.webp",
      caption: "Foto: Bapak Samuel Simatupang, Manajer Operasional Yayasan Pendidikan Advent Batam. (dok. Istimewa)",
      lead: "Manajemen operasional sekolah memiliki tanggung jawab mendasar untuk memastikan bahwa setiap sudut lingkungan fisik sekolah berfungsi secara optimal, aman, dan nyaman bagi seluruh kegiatan belajar mengajar.",
      paragraphs: [
        "Manajemen operasional sekolah memiliki tanggung jawab mendasar untuk memastikan bahwa setiap sudut lingkungan fisik sekolah berfungsi secara optimal, aman, dan nyaman bagi seluruh kegiatan belajar mengajar. Pengembangan infrastruktur sekolah menjadi fokus utama kami tahun ini, untuk memastikan kegiatan belajar mengajar berjalan optimal dan nyaman bagi seluruh siswa.",
        "Kami telah melakukan peremajaan pada fasilitas sanitasi, penambahan kapasitas daya listrik untuk mendukung penggunaan perangkat digital di setiap kelas, serta memastikan sirkulasi udara dan pencahayaan di ruang kelas memenuhi standar kesehatan.",
        "Ke depannya, kami berkomitmen untuk terus memelihara dan meningkatkan kualitas sarana prasarana, termasuk laboratorium dan fasilitas olahraga, agar SMP-SMA Advent Batam senantiasa menjadi tempat yang kondusif untuk menunjang prestasi peserta didik."
      ]
    },
    {
      id: "optimalisasi-keamanan-lingkungan-sekolah",
      date: "20 Agustus 2026",
      author: "Samuel Simatupang (Operations Manager)",
      title: "Optimalisasi Keamanan Lingkungan Sekolah melalui Sistem Pemantauan Terpadu",
      img: "/slider-2.jpg",
      caption: "Foto: Pengecekan sistem keamanan dan instalasi CCTV di area sekolah. (dok. Istimewa)",
      lead: "Kenyamanan belajar berawal dari rasa aman. Oleh karena itu, kami telah melakukan peningkatan sistem keamanan sekolah melalui penambahan titik-titik kamera pengawas (CCTV) di area strategis.",
      paragraphs: [
        "Kenyamanan belajar berawal dari rasa aman. Oleh karena itu, kami telah melakukan peningkatan sistem keamanan sekolah melalui penambahan titik-titik kamera pengawas (CCTV) di area strategis. Hal ini bertujuan untuk mencegah terjadinya tindakan perundungan serta memantau pergerakan warga sekolah agar senantiasa tertib.",
        "Selain itu, prosedur penjagaan di gerbang utama telah diperketat. Setiap tamu yang berkunjung wajib melapor dan menukarkan identitas diri, demi memastikan tidak ada pihak luar yang tidak berkepentingan memasuki area kampus.",
        "Kami juga secara rutin memberikan pengarahan kepada tenaga keamanan (Satpam) agar senantiasa bersikap ramah, namun tetap tegas dalam menegakkan peraturan dan tata tertib keamanan sekolah."
      ]
    },
    {
      id: "pemeliharaan-sarana-olahraga-dan-ekstrakurikuler",
      date: "15 Juli 2026",
      author: "Samuel Simatupang (Operations Manager)",
      title: "Pemeliharaan Sarana Olahraga untuk Mendukung Prestasi Non-Akademik",
      img: "/slider-3.jpg",
      caption: "Foto: Lapangan olahraga SMP-SMA Advent Batam setelah proses renovasi. (dok. Istimewa)",
      lead: "Prestasi siswa tidak hanya diukur dari kemampuan akademis di dalam kelas, melainkan juga dari pencapaian mereka di bidang non-akademik, khususnya olahraga dan seni.",
      paragraphs: [
        "Prestasi siswa tidak hanya diukur dari kemampuan akademis di dalam kelas, melainkan juga dari pencapaian mereka di bidang non-akademik, khususnya olahraga dan seni. Untuk mendukung hal tersebut, kami telah menyelesaikan perbaikan lapangan multifungsi.",
        "Pengecatan ulang garis lapangan basket dan perbaikan ring, serta perawatan lapangan futsal telah dilakukan agar siswa dapat berolahraga dengan aman tanpa risiko cedera yang disebabkan oleh kondisi lapangan yang buruk.",
        "Fasilitas ruang ganti dan area penyimpanan alat olahraga juga telah ditata ulang. Kami berharap dengan fasilitas yang memadai, semangat bertanding dan sportivitas siswa akan semakin meningkat."
      ]
    },
    {
      id: "penghijauan-dan-kebersihan-lingkungan",
      date: "02 Juni 2026",
      author: "Samuel Simatupang (Operations Manager)",
      title: "Gerakan Penghijauan dan Peningkatan Standar Kebersihan Lingkungan Sekolah",
      img: "/slider-1.jpg",
      caption: "Foto: Kegiatan penghijauan dan penanaman pohon di area taman sekolah. (dok. Istimewa)",
      lead: "Sekolah yang bersih dan asri adalah cerminan dari pikiran yang jernih. Kami meluncurkan program penghijauan berkelanjutan dengan menanam berbagai tanaman peneduh dan tanaman hias di sekitar area kampus.",
      paragraphs: [
        "Sekolah yang bersih dan asri adalah cerminan dari pikiran yang jernih. Kami meluncurkan program penghijauan berkelanjutan dengan menanam berbagai tanaman peneduh dan tanaman hias di sekitar area kampus. Hal ini sejalan dengan komitmen sekolah terhadap kepedulian lingkungan.",
        "Standar operasional prosedur (SOP) kebersihan untuk para tenaga kebersihan (cleaning service) juga telah diperbarui. Pembersihan fasilitas sanitasi, ruang kelas, dan kantin dilakukan lebih sering dengan menggunakan bahan pembersih yang aman.",
        "Kami juga menyediakan lebih banyak tempat sampah terpilah untuk mengedukasi siswa tentang pentingnya membuang sampah pada tempatnya dan mendaur ulang limbah."
      ]
    }
  ];

  // STATE ARTIKEL UTAMA YANG SEDANG AKTIF DITAMPILKAN
  const [currentArticle, setCurrentArticle] = useState(editorialList[0]);

  return (
    <main className="min-h-screen bg-[#F3EFE4] font-sans flex flex-col text-slate-800">
      
      {/* BREADCRUMB */}
      <section className="w-full pt-6 pb-3 px-4 sm:px-8 max-w-7xl mx-auto shrink-0">
        <div className="text-xs text-slate-600 font-semibold flex items-center gap-1 flex-wrap">
          <span>You are here :</span>
          <Link href="/" className="text-[#047857] hover:underline ml-1">🏠 Home</Link>
          <span>-</span>
          <Link href="/editorial-manajer" className="text-[#047857] hover:underline">Operations Editorial</Link>
          <span>-</span>
          <span className="text-slate-500">Detail</span>
        </div>
      </section>

      {/* KONTEN UTAMA DUA KOLOM */}
      <section className="w-full flex-1 pb-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* KOLOM KIRI (8 KOLOM): ARTIKEL LENGKAP & JUDUL UTUH */}
          <article className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
            
            {/* BADGE KATEGORI */}
            <div className="mb-3">
              <span className="bg-[#047857] text-white text-[10px] sm:text-xs font-black px-3 py-1 rounded-md uppercase tracking-wider inline-block shadow-xs">
                OPERATIONS EDITORIAL
              </span>
            </div>

            {/* JUDUL ARTIKEL DITAMPILKAN UTUH */}
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight mb-3">
              {currentArticle.title}
            </h1>

            {/* METADATA TANGGAL & PENULIS */}
            <div className="flex items-center gap-4 text-xs text-slate-500 font-medium mb-6 pb-4 border-b border-slate-200 flex-wrap">
              <span className="flex items-center gap-1.5">
                <span>📅</span> {currentArticle.date}
              </span>
              <span className="flex items-center gap-1.5 font-bold text-slate-700">
                <span>✍️</span> {currentArticle.author}
              </span>
            </div>

            {/* FOTO UTAMA BERITA UTUH BESERTA CAPTION */}
            <figure className="mb-6">
              <div className="w-full aspect-16/9 rounded-xl overflow-hidden shadow-sm bg-slate-200">
                <img
                  src={currentArticle.img}
                  alt={currentArticle.title}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/slider-1.jpg";
                  }}
                />
              </div>
              {/* TEKS CAPTION FOTO (TEGAK DAN BOLD) */}
              {currentArticle.caption && (
                <figcaption className="text-[10px] sm:text-[11px] text-slate-700 font-bold mt-2.5 leading-relaxed text-justify px-1">
                  {currentArticle.caption}
                </figcaption>
              )}
            </figure>

            {/* PARAGRAF NASKAH BERITA LENGKAP */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
              {currentArticle.paragraphs.map((para, pIdx) => (
                <p key={pIdx}>
                  {para}
                </p>
              ))}
            </div>

            {/* NAVIGASI KEMBALI */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap gap-3">
              <Link
                href="/editorial-manajer"
                className="bg-[#D97706] hover:bg-amber-700 text-white font-bold text-xs py-2.5 px-6 rounded-lg shadow-sm transition-colors"
              >
                ← Kembali ke Arsip Editorial
              </Link>
              <Link
                href="/"
                className="bg-[#8B0000] hover:bg-red-800 text-white font-bold text-xs py-2.5 px-6 rounded-lg shadow-sm transition-colors"
              >
                Back to Home
              </Link>
            </div>

          </article>

          {/* KOLOM KANAN (4 KOLOM): 4 EDITORIAL MANAJER TERAKHIR */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-[#EFEAD8] p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-300/80">
              
              {/* HEADER SIDEBAR DALAM BAHASA INGGRIS */}
              <div className="flex items-center gap-2 pb-3 mb-5 border-b-2 border-[#8B0000]">
                <span className="bg-[#8B0000] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  ⚙️
                </span>
                <h2 className="font-black text-sm sm:text-base text-[#001c38] uppercase tracking-wide">
                  LATEST OPERATIONS EDITORIALS
                </h2>
              </div>

              {/* LIST 4 THUMBNAIL EDITORIAL TERAKHIR */}
              <div className="space-y-5">
                {editorialList.map((item, idx) => {
                  const isCurrent = currentArticle.id === item.id;

                  return (
                    <div 
                      key={idx} 
                      onClick={() => {
                        setCurrentArticle(item);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className={`flex items-start gap-3.5 p-2 rounded-xl transition-all cursor-pointer ${
                        isCurrent 
                          ? "bg-emerald-200/60 ring-1 ring-emerald-400" 
                          : "hover:bg-emerald-100/60"
                      }`}
                    >
                      
                      {/* FOTO THUMBNAIL BERUKURAN KECIL */}
                      <div className="w-24 h-20 sm:w-24 sm:h-20 shrink-0 rounded-lg overflow-hidden bg-slate-800 shadow-sm relative">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = "/slider-1.jpg";
                          }}
                        />
                      </div>

                      {/* TEKS TANGGAL, JUDUL, DAN LEAD */}
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] sm:text-[11px] text-slate-500 font-semibold block leading-tight mb-1">
                          📅 {item.date}
                        </span>
                        
                        <h3 className="text-xs sm:text-[13px] font-bold text-[#047857] hover:text-emerald-900 transition-colors leading-snug line-clamp-2 mb-1.5">
                          {item.title}
                        </h3>

                        <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed text-justify">
                          {item.lead}
                        </p>
                      </div>

                    </div>
                  );
                })}
              </div>

              {/* TOMBOL VIEW MORE */}
              <div className="pt-5 mt-3 border-t border-slate-300/80">
                <Link
                  href="/editorial-manajer"
                  className="w-full bg-[#047857] hover:bg-emerald-800 text-white text-xs font-bold py-2.5 px-4 rounded-lg shadow-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>View More</span>
                  <span>↗</span>
                </Link>
              </div>

            </div>
          </aside>

        </div>
      </section>

      {/* FOOTER WEB */}
      <footer className="w-full bg-[#8B0000] text-white text-[10px] sm:text-xs text-center py-4 font-semibold shrink-0 mt-auto">
        Developed by Ir. Budhy Prasetyo
      </footer>

    </main>
  );
}
