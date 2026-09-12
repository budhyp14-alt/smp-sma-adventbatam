"use client";

import { useState } from "react";
import Link from "next/link";

export default function NewsIndex() {
  // Kumpulan Berita Sekolah
  const allNews = [
    {
      id: "ktt-g20-bali",
      title: "KTT G20 Bali: Wawasan Global bagi Siswa SMP-SMA Advent Batam",
      date: "Tuesday, 12 August 2025",
      author: "Admin Sekolah",
      img: "/slider-1.jpg",
      lead: "Penyelenggaraan KTT G20 di Bali menjadi momentum edukasi bagi para siswa dalam mendalami isu-isu transformasi ekonomi hijau, digitalisasi global, dan kepemimpinan internasional."
    },
    {
      id: "bab-1-badan-usaha-dalam-perekonomian",
      title: "BAB 1 Badan Usaha dalam Perekonomian: Pembelajaran Terpadu Ekonomi",
      date: "Tuesday, 12 August 2025",
      author: "Guru Ekonomi",
      img: "/slider-2.jpg",
      lead: "Siswa SMA Advent Batam mendalami materi bentuk-bentuk badan usaha di Indonesia (BUMN, BUMS, dan Koperasi) melalui simulasi pendirian usaha rintisan secara berkelompok."
    },
    {
      id: "bab-1-informatika-dan-pembelajarannya",
      title: "BAB 1 INFORMATIKA & PEMBELAJARANNYA: Adaptasi Era Industri 4.0",
      date: "Monday, 11 August 2025",
      author: "Guru Informatika",
      img: "/slider-3.jpg",
      lead: "Kurikulum Informatika di SMP-SMA Advent Batam memadukan pemahaman computational thinking, logika pemrograman dasar, dan etika berinternet secara cerdas."
    },
    {
      id: "upacara-kemerdekaan-ri",
      title: "Upacara Peringatan Hari Kemerdekaan RI Berlangsung Khidmat",
      date: "Sunday, 17 August 2025",
      author: "Kesiswaan",
      img: "/slider-1.jpg",
      lead: "Seluruh civitas akademika SMP-SMA Advent Batam memperingati hari ulang tahun kemerdekaan Republik Indonesia dengan semangat memperkokoh persatuan dan nasionalisme."
    },
    {
      id: "juara-olimpiade-sains",
      title: "Prestasi Membanggakan di Olimpiade Sains Pelajar Tingkat Kota",
      date: "Wednesday, 20 August 2025",
      author: "Koordinator Prestasi",
      img: "/slider-2.jpg",
      lead: "Tim delegasi sains sekolah berhasil memboyong medali emas dan perak pada ajang kompetisi sains pelajar berkat latihan intensif dan pendampingan guru pembimbing."
    },
    {
      id: "bakti-sosial-osis",
      title: "Aksi Nyata Kepedulian Kasih: Pengurus OSIS Kunjungi Panti Asuhan",
      date: "Friday, 29 August 2025",
      author: "Pembina OSIS",
      img: "/slider-3.jpg",
      lead: "Pengurus OSIS menyalurkan paket bantuan sembako dan perlengkapan sekolah ke panti asuhan sebagai perwujudan karakter Kristiani yang berempati kepada sesama."
    },
    {
      id: "renovasi-sarana-olahraga",
      title: "Peremajaan Lapangan Olahraga Multifungsi Selesai Dilaksanakan",
      date: "Thursday, 04 September 2025",
      author: "Humas Operasional",
      img: "/slider-1.jpg",
      lead: "Fasilitas lapangan olahraga luar ruang kini telah rampung diperbarui dengan pelapisan anti-selip guna menjamin kenyamanan dan keselamatan siswa saat berolahraga."
    }
  ];

  // Batasi awal maksimal 4 berita
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const displayedNews = allNews.slice(0, visibleCount);

  return (
    <main className="min-h-screen bg-[#E5DCC3] font-sans flex flex-col">
      {/* BREADCRUMB & HEADER */}
      <section className="w-full pt-8 pb-4 px-4 sm:px-8 max-w-7xl mx-auto shrink-0">
        <div className="text-xs text-slate-700 font-semibold mb-6 flex items-center gap-1 flex-wrap">
          <span>You are here :</span>
          <Link href="/" className="text-[#047857] hover:underline ml-1">🏠 Home</Link>
          <span>-</span>
          <span className="text-slate-600">News</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-[#1e293b] mb-8 tracking-wide uppercase">
          LATEST SCHOOL NEWS
        </h1>
      </section>

      {/* DAFTAR BERITA THUMBNAIL (MAKS 4 AWAL) */}
      <section className="w-full flex-1 pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {displayedNews.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#047857] flex flex-col md:flex-row gap-6 items-start group"
            >
              {/* 1. FOTO THUMBNAIL */}
              <Link 
                href={`/news/detail?id=${item.id}`} 
                className="w-full md:w-[280px] aspect-[4/3] bg-slate-200 rounded-lg overflow-hidden shrink-0 block cursor-pointer"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </Link>

              {/* 2. KONTEN TEKS & LEAD */}
              <div className="flex-1 flex flex-col">
                <span className="text-xs text-slate-500 font-semibold mb-1">
                  📅 {item.date} | ✍️ {item.author}
                </span>

                {/* JUDUL */}
                <Link href={`/news/detail?id=${item.id}`}>
                  <h2 className="text-xl font-bold text-red-950 mb-3 hover:text-[#047857] transition-colors cursor-pointer leading-snug">
                    {item.title}
                  </h2>
                </Link>

                {/* LEAD BERITA */}
                <Link href={`/news/detail?id=${item.id}`}>
                  <p className="text-sm text-slate-600 leading-relaxed text-justify mb-4 line-clamp-3 hover:text-slate-900 transition-colors cursor-pointer">
                    {item.lead}
                  </p>
                </Link>

                {/* TOMBOL READ MORE */}
                <div>
                  <Link 
                    href={`/news/detail?id=${item.id}`} 
                    className="bg-[#8B0000] hover:bg-red-800 text-white font-bold text-xs py-2.5 px-6 rounded shadow-sm inline-block transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* TOMBOL VIEW MORE JIKA MASIH ADA BERITA SEBELUMNYA */}
          {visibleCount < allNews.length && (
            <div className="pt-6 flex justify-center">
              <button
                onClick={handleLoadMore}
                className="bg-[#D97706] hover:bg-amber-700 text-white font-bold text-sm py-3 px-8 rounded-full shadow-md transition-transform transform hover:scale-105 flex items-center gap-2 cursor-pointer"
              >
                <span>View More News</span>
                <span>↓</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full shrink-0">
        <div className="bg-[#D97706] py-12 px-4 text-white">
          <div className="max-w-7xl mx-auto flex flex-col items-start space-y-6">
            <div className="text-xs font-semibold">
              <p>© 2026 SMP SMA Advent Batam. Mendidik Generasi Cerdas dan Berkarakter Kristus.</p>
            </div>
          </div>
        </div>
        <div className="bg-[#8B0000] text-white text-[10px] sm:text-xs text-center py-4 font-semibold tracking-wider">
          Developed by Ir. Budhy Prasetyo
        </div>
      </footer>
    </main>
  );
}
