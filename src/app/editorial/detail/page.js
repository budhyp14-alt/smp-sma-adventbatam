"use client";

import { useState } from "react";
import Link from "next/link";

export default function DetailEditorialKepsek() {
  // DATA LENGKAP 4 BERITA EDITORIAL KEPALA SEKOLAH TERAKHIR
  const editorialList = [
    {
      id: "integrasi-ekosistem-digital",
      date: "10 September 2026",
      author: "Tona Leon Ferdinan Situmorang, S.Pd., MA., ED. (Principal)",
      title: "Menyongsong Masa Depan Melalui Integrasi Ekosistem Digital di SMP-SMA Advent Batam",
      // MENGGUNAKAN FOTO BARU
      img: "/program-sekolah2025-2026.webp",
      caption: "Foto: Pemaparan Program Strategis Sekolah Tahun Pelajaran 2025/2026 oleh Kepala Sekolah. (dok. Istimewa)",
      lead: "Pendidikan sejati tidak sekadar mengisi pikiran dengan fakta, melainkan melatih budi pekerti untuk berinovasi. Menyambut era Society 5.0, SMP-SMA Advent Batam resmi meluncurkan integrasi platform digital sebagai pusat ekosistem pembelajaran modern.",
      paragraphs: [
        "Pendidikan sejati tidak sekadar mengisi pikiran dengan fakta, melainkan melatih budi pekerti untuk berinovasi. Menyambut era Society 5.0, SMP-SMA Advent Batam resmi meluncurkan integrasi platform digital sebagai pusat ekosistem pembelajaran modern. Langkah ini bukan sekadar mengikuti tren teknologi, melainkan komitmen institusi untuk memberikan layanan pendidikan yang transparan, cepat, dan terukur bagi siswa maupun orang tua.",
        "Kehadiran website resmi sekolah dan portal e-Perpus merupakan wujud nyata transformasi digital kami. Melalui platform ini, siswa dapat mengakses modul pembelajaran interaktif, memantau transparansi penilaian akademik, serta mendapatkan pembaruan informasi secara real-time. Guru pun difasilitasi dengan sistem manajemen tugas terpadu yang meminimalkan beban administratif konvensional.",
        "Di balik kemajuan teknologi ini, kami tetap menempatkan nilai-nilai karakter luhur dan kasih Kristiani sebagai fondasi utama. Teknologi hanyalah alat; kearifan dan integritas manusialah yang akan mengendalikannya. Mari bersama kita wujudkan sekolah yang cakap digital, unggul secara moral, dan tangguh menghadapi tantangan globalisasi."
      ]
    },
    {
      id: "merdeka-belajar-kurikulum-mendalam",
      date: "18 Agustus 2026",
      author: "Tona Leon Ferdinan Situmorang, S.Pd., MA., ED. (Principal)",
      title: "Implementasi Kurikulum Merdeka dan Pembelajaran Mendalam (Deep Learning)",
      img: "/slider-2.jpg",
      caption: "Foto: Pelatihan implementasi kurikulum merdeka bagi para pendidik. (dok. Istimewa)",
      lead: "Paradigma pendidikan kini bergeser dari sekadar penguasaan materi hafalan menuju pemahaman konseptual yang mendalam. Kami mendorong terciptanya ruang kelas yang memerdekakan nalar kritis siswa.",
      paragraphs: [
        "Paradigma pendidikan kini bergeser dari sekadar penguasaan materi hafalan menuju pemahaman konseptual yang mendalam. Kami mendorong terciptanya ruang kelas yang memerdekakan nalar kritis siswa, di mana setiap anak didik diberikan kesempatan untuk mengeksplorasi minat dan bakat unik mereka secara optimal.",
        "Melalui penerapan pendekatan SOLO Taxonomy dan pemecahan masalah berbasis proyek (Project-Based Learning), siswa dilatih untuk tidak sekadar tahu (knowing), tetapi mampu menganalisis (analyzing) dan menciptakan solusi (creating) atas permasalahan di dunia nyata.",
        "Peran guru pun bertransformasi dari sekadar penceramah menjadi fasilitator dan mentor. Kami percaya, pendidikan yang memerdekakan akan melahirkan generasi pemimpin yang tidak hanya cerdas secara akademis, tetapi juga memiliki empati dan daya juang (resiliensi) yang tinggi."
      ]
    },
    {
      id: "penguatan-literasi-dan-numerasi",
      date: "05 Juli 2026",
      author: "Tona Leon Ferdinan Situmorang, S.Pd., MA., ED. (Principal)",
      title: "Budaya Literasi dan Numerasi sebagai Kunci Kecakapan Abad 21",
      img: "/slider-3.jpg",
      caption: "Foto: Suasana pojok baca dan perpustakaan digital sekolah. (dok. Istimewa)",
      lead: "Membaca adalah membuka jendela dunia, namun memahami makna di balik bacaan adalah kunci untuk menaklukkannya. Penguatan literasi dan numerasi kini menjadi urat nadi dalam setiap mata pelajaran di SMP-SMA Advent Batam.",
      paragraphs: [
        "Membaca adalah membuka jendela dunia, namun memahami makna di balik bacaan adalah kunci untuk menaklukkannya. Penguatan literasi dan numerasi kini menjadi urat nadi dalam setiap mata pelajaran di SMP-SMA Advent Batam. Kami tidak lagi melihat literasi sebagai ranah eksklusif pelajaran bahasa, melainkan tanggung jawab seluruh disiplin ilmu.",
        "Program 'Membaca Hening' selama 15 menit sebelum jam pelajaran pertama dimulai telah menunjukkan hasil positif dalam meningkatkan konsentrasi dan minat baca siswa. Didukung dengan fasilitas e-Perpus yang dapat diakses dari mana saja, siswa memiliki keleluasaan mengeksplorasi berbagai literatur fiksi maupun non-fiksi bermutu.",
        "Kemampuan menganalisis data (numerasi) juga diintegrasikan secara lintas sektoral. Kami menargetkan lulusan sekolah ini tidak hanya pandai merangkai kata, tetapi juga logis dalam berargumen dan tajam dalam membaca data statistik kehidupan nyata."
      ]
    },
    {
      id: "kedisiplinan-dan-sekolah-anti-perundungan",
      date: "20 Juni 2026",
      author: "Tona Leon Ferdinan Situmorang, S.Pd., MA., ED. (Principal)",
      title: "Menegakkan Disiplin Positif dan Mewujudkan Zona Bebas Perundungan",
      img: "/slider-1.jpg",
      caption: "Foto: Deklarasi Sekolah Ramah Anak dan Anti-Perundungan oleh seluruh civitas akademika. (dok. Istimewa)",
      lead: "Sekolah yang hebat bukan dinilai dari seberapa banyak trofi yang dipajang, melainkan seberapa aman dan nyaman setiap siswanya merasa diterima. Zero Tolerance terhadap perundungan adalah komitmen harga mati.",
      paragraphs: [
        "Sekolah yang hebat bukan dinilai dari seberapa banyak trofi yang dipajang, melainkan seberapa aman dan nyaman setiap siswanya merasa diterima. 'Zero Tolerance' terhadap segala bentuk perundungan (bullying)—baik verbal, fisik, maupun siber—adalah komitmen harga mati yang tidak bisa ditawar di institusi ini.",
        "Kami menerapkan pendekatan disiplin positif (Positive Discipline), di mana setiap pelanggaran tata tertib diselesaikan melalui restitusi, bukan sekadar hukuman punitif. Anak didik diajak menyadari kesalahannya, memperbaiki kerusakan yang ditimbulkan, dan memulihkan hubungan sosialnya.",
        "Dukungan proaktif dari Tim Pencegahan dan Penanganan Kekerasan (TPPK) serta kolaborasi erat bersama orang tua memastikan bahwa setiap potensi konflik antar siswa dapat dideteksi dini dan diselesaikan secara kekeluargaan namun tegas."
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
          <Link href="/editorial" className="text-[#047857] hover:underline">Principal Editorial</Link>
          <span>-</span>
          <span className="text-slate-500">Detail</span>
        </div>
      </section>

      {/* KONTEN UTAMA DUA KOLOM */}
      <section className="w-full flex-1 pb-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* KOLOM KIRI (8 KOLOM): ARTIKEL LENGKAP & JUDUL UTUH APA ADANYA */}
          <article className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
            
            {/* BADGE KATEGORI: MERAH GELAP UNTUK KEPSEK */}
            <div className="mb-3">
              <span className="bg-[#8B0000] text-white text-[10px] sm:text-xs font-black px-3 py-1 rounded-md uppercase tracking-wider inline-block shadow-xs">
                PRINCIPAL EDITORIAL
              </span>
            </div>

            {/* JUDUL ARTIKEL DITAMPILKAN UTUH TANPA TERPOTONG */}
            <h1 className="text-2xl sm:text-3xl font-black text-[#001c38] leading-tight mb-3">
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
              {/* TEKS CAPTION FOTO PERSIS DI BAWAH FOTO (TEGAK DAN BOLD) */}
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
                href="/editorial"
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

          {/* KOLOM KANAN (4 KOLOM): 4 EDITORIAL KEPSEK TERAKHIR */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-[#EFEAD8] p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-300/80">
              
              {/* HEADER SIDEBAR */}
              <div className="flex items-center gap-2 pb-3 mb-5 border-b-2 border-[#8B0000]">
                <span className="bg-[#8B0000] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  🏫
                </span>
                <h2 className="font-black text-sm sm:text-base text-[#001c38] uppercase tracking-wide">
                  LATEST PRINCIPAL EDITORIALS
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
                          ? "bg-amber-200/60 ring-1 ring-amber-400" 
                          : "hover:bg-amber-100/60"
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

                      {/* TEKS TANGGAL, JUDUL UTUH, DAN LEAD PARAGRAF */}
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] sm:text-[11px] text-slate-500 font-semibold block leading-tight mb-1">
                          📅 {item.date}
                        </span>
                        
                        {/* JUDUL UTUH APA ADANYA */}
                        <h3 className="text-xs sm:text-[13px] font-bold text-[#8B0000] hover:text-red-700 transition-colors leading-snug line-clamp-2 mb-1.5">
                          {item.title}
                        </h3>

                        {/* LEAD ASLI */}
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
                  href="/editorial"
                  className="w-full bg-[#D97706] hover:bg-amber-700 text-white text-xs font-bold py-2.5 px-4 rounded-lg shadow-xs transition-colors flex items-center justify-center gap-1.5"
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
