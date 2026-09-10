"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function NewsPage() {
  // STATE PENCARIAN & FILTER KATEGORI
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Categories"); // Default tampil semua

  // DATA DUMMY BERITA
  const newsList = [
    {
      id: "upacara-kemerdekaan-ri",
      title: "Upacara Peringatan Hari Kemerdekaan RI di SMP-SMA Advent Batam",
      date: "August 17, 2026",
      category: "School Activities",
      excerpt: "Seluruh guru, staf, dan siswa-siswi SMP-SMA Advent Batam melaksanakan upacara bendera dengan khidmat untuk memperingati kemerdekaan Republik Indonesia...",
      img: "/slider-1.jpg"
    },
    {
      id: "juara-olimpiade-matematika",
      title: "Siswa SMA Advent Batam Meraih Juara 1 Olimpiade Matematika Tingkat Kota",
      date: "September 05, 2026",
      category: "Student Achievements",
      excerpt: "Prestasi membanggakan kembali ditorehkan oleh siswa SMA Advent Batam yang berhasil menyingkirkan puluhan peserta lain dalam ajang Olimpiade Matematika...",
      img: "/slider-2.jpg"
    },
    {
      id: "bakti-sosial-panti-asuhan",
      title: "Kegiatan Bakti Sosial OSIS di Panti Asuhan Kasih",
      date: "August 28, 2026",
      category: "Social & Spiritual",
      excerpt: "Sebagai wujud nyata dari nilai-nilai Kristiani, pengurus OSIS menyelenggarakan kegiatan bakti sosial dan penyerahan bantuan ke panti asuhan setempat...",
      img: "/slider-3.jpg"
    },
    {
      id: "sosialisasi-bahaya-narkoba",
      title: "Sosialisasi Bahaya Narkoba Bersama BNN Kota Batam",
      date: "September 10, 2026",
      category: "Seminar & Education",
      excerpt: "Sekolah bekerja sama dengan BNN Kota Batam memberikan edukasi pencegahan bahaya narkotika kepada seluruh siswa guna menciptakan generasi bebas narkoba...",
      img: "/slider-1.jpg"
    }
  ];

  // LOGIKA PENCARIAN & FILTER KATEGORI BERITA
  const filteredNews = newsList.filter(item => {
    // 1. Cek kecocokan kata kunci pencarian
    const matchSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    // 2. Cek kecocokan kategori yang dipilih
    const matchCategory = activeCategory === "All Categories" || item.category === activeCategory;
    
    // Tampilkan jika cocok keduanya
    return matchSearch && matchCategory;
  });

  return (
    <main className="min-h-screen flex flex-col font-sans bg-[#E5DCC3]">
      
      {/* BREADCRUMB & HEADER */}
      <section className="w-full pt-8 pb-4 px-4 sm:px-8 max-w-7xl mx-auto shrink-0">
        <div className="text-xs text-slate-700 font-semibold mb-6 flex items-center gap-1 flex-wrap">
          <span>You are here :</span>
          <Link href="/" className="text-[#047857] hover:underline ml-1">🏠 Home</Link>
          <span>-</span>
          <span className="text-slate-600">News</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-black text-[#1e293b] mb-8 tracking-wide uppercase">
          SCHOOL NEWS & ARTICLES
        </h1>
      </section>

      {/* KONTEN UTAMA */}
      <section className="w-full flex-1 pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* KIRI - DAFTAR BERITA */}
          <div className="lg:col-span-8 flex flex-col space-y-10">
            
            {filteredNews.length === 0 ? (
              <div className="bg-red-100 text-red-700 p-6 rounded-lg border border-red-200 text-center font-bold shadow-sm">
                Sorry, no news found for "{searchQuery}". Please try another keyword!
              </div>
            ) : (
              filteredNews.map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row gap-6 items-start group pb-8 border-b border-slate-300 last:border-0">
                  
                  {/* GAMBAR BERITA */}
                  <Link href={`/news/detail?id=${item.id}`} className="w-full sm:w-[300px] aspect-[4/3] shrink-0 bg-slate-300 overflow-hidden rounded-md shadow-sm block cursor-pointer relative">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3 bg-white/95 text-[#8B0000] text-[11px] font-bold px-2.5 py-1 rounded shadow-sm">
                      {item.category}
                    </div>
                  </Link>

                  {/* TEKS BERITA */}
                  <div className="flex flex-col flex-1 pt-1">
                    <div className="text-xs text-slate-500 font-medium mb-2 flex items-center gap-2">
                      <span>📅 {item.date}</span>
                    </div>
                    <Link href={`/news/detail?id=${item.id}`}>
                      <h3 className="text-[18px] sm:text-[20px] font-bold text-[#047857] mb-3 leading-snug hover:text-emerald-800 transition-colors cursor-pointer mt-1">
                        {item.title}
                      </h3>
                    </Link>
                    <Link href={`/news/detail?id=${item.id}`}>
                      <p className="text-[13px] sm:text-[14px] text-slate-700 leading-relaxed text-justify hover:text-black cursor-pointer">
                        {item.excerpt}
                      </p>
                    </Link>
                    
                    {/* TOMBOL READ MORE (SUDAH DIUBAH) */}
                    <div className="mt-4">
                      <Link href={`/news/detail?id=${item.id}`} className="text-[#8B0000] font-bold text-xs hover:underline flex items-center gap-1">
                        Read More <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* KANAN - SIDEBAR PERMANEN */}
          <div className="lg:col-span-4 lg:border-l border-dashed border-slate-500 lg:pl-8 space-y-8">
            
            {/* KOTAK PENCARIAN (SUDAH DIBAHASA-INGGRISKAN) */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#8B0000]">
              <h3 className="text-[15px] font-bold text-slate-800 mb-4">Search News</h3>
              <div className="flex">
                <input 
                  type="text" 
                  placeholder="Type keyword..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 p-2.5 border border-slate-300 rounded-l text-xs focus:outline-none focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000]" 
                />
                <button className="bg-[#8B0000] hover:bg-red-950 text-white font-bold px-5 text-xs rounded-r transition-colors">
                  Search
                </button>
              </div>
            </div>

            {/* KOTAK FILTER KATEGORI (SUDAH DIBAHASA-INGGRISKAN) */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-[15px] font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">News Categories</h3>
              <ul className="text-[13px] font-semibold space-y-3">
                <li 
                  onClick={() => setActiveCategory("All Categories")}
                  className={`cursor-pointer flex justify-between p-2 rounded transition-colors ${activeCategory === "All Categories" ? "bg-[#8B0000] text-white" : "text-slate-600 hover:bg-slate-100"}`}
                >
                  <span>Show All</span>
                  <span>(34)</span>
                </li>
                <li 
                  onClick={() => setActiveCategory("School Activities")}
                  className={`cursor-pointer flex justify-between p-2 rounded transition-colors ${activeCategory === "School Activities" ? "bg-[#8B0000] text-white" : "text-slate-600 hover:bg-slate-100"}`}
                >
                  <span>School Activities</span>
                  <span>(12)</span>
                </li>
                <li 
                  onClick={() => setActiveCategory("Student Achievements")}
                  className={`cursor-pointer flex justify-between p-2 rounded transition-colors ${activeCategory === "Student Achievements" ? "bg-[#8B0000] text-white" : "text-slate-600 hover:bg-slate-100"}`}
                >
                  <span>Student Achievements</span>
                  <span>(8)</span>
                </li>
                <li 
                  onClick={() => setActiveCategory("Seminar & Education")}
                  className={`cursor-pointer flex justify-between p-2 rounded transition-colors ${activeCategory === "Seminar & Education" ? "bg-[#8B0000] text-white" : "text-slate-600 hover:bg-slate-100"}`}
                >
                  <span>Seminar & Education</span>
                  <span>(5)</span>
                </li>
                <li 
                  onClick={() => setActiveCategory("Social & Spiritual")}
                  className={`cursor-pointer flex justify-between p-2 rounded transition-colors ${activeCategory === "Social & Spiritual" ? "bg-[#8B0000] text-white" : "text-slate-600 hover:bg-slate-100"}`}
                >
                  <span>Social & Spiritual</span>
                  <span>(9)</span>
                </li>
              </ul>
            </div>

            {/* BLOK INFO SEKOLAH */}
            <div className="pt-6 border-t border-dashed border-slate-400">
              <div className="flex flex-col items-center lg:items-end text-center lg:text-right mb-6">
                <h3 className="text-[22px] font-black text-[#1e293b] mb-1">SMP - SMA ADVENT BATAM</h3>
                <p className="text-[12px] text-slate-800 font-medium">
                  Prof. DR. Hamka St., Kav 4, Kibing Village, Batu Aji District
                </p>
              </div>
              <ul className="text-[13px] text-slate-800 space-y-4">
                <li className="flex justify-between items-start gap-4">
                  <span className="font-bold shrink-0">NSPN</span>
                  <span className="text-right">70002994</span>
                </li>
                <li className="flex justify-between items-start gap-4">
                  <span className="font-bold shrink-0">Principal</span>
                  <span className="text-right leading-tight">Tona Leon Ferdinan<br/>Situmorang,<br/>S.Pd.,MA.,ED.</span>
                </li>
                <li className="flex justify-between items-center gap-4 border-b border-dashed border-slate-400 pb-6">
                  <span className="font-bold shrink-0">Phone</span>
                  <span className="text-[#047857] text-right font-medium">0778-363082</span>
                </li>
              </ul>
            </div>
          </div>
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
