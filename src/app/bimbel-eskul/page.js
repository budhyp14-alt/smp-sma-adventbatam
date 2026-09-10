"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function BimbelEskulPage() {
  // STATE PENCARIAN & FILTER KATEGORI
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua"); // Default tampil semua

  const bimbels = [
    {
      id: "bimbel-matematika",
      title: "Bimbingan Belajar: Matematika",
      excerpt: "Program bimbingan intensif untuk memperdalam pemahaman konsep berhitung, logika matematika, serta persiapan menghadapi soal-soal ujian nasional dan olimpiade...",
      img: "/slider-1.jpg"
    },
    {
      id: "bimbel-bhs-indonesia",
      title: "Bimbingan Belajar: Bahasa Indonesia",
      excerpt: "Meningkatkan kemampuan literasi, pemahaman bacaan, tata bahasa baku, serta teknik penulisan esai dan karya ilmiah yang baik dan benar bagi para siswa...",
      img: "/slider-2.jpg"
    },
    {
      id: "bimbel-bhs-inggris",
      title: "Bimbingan Belajar: Bahasa Inggris",
      excerpt: "Fokus pada penguasaan vocabulary, grammar, reading comprehension, dan conversation untuk membekali siswa dengan kemampuan bahasa internasional secara aktif...",
      img: "/slider-3.jpg"
    },
    {
      id: "bimbel-pa",
      title: "Bimbingan Belajar: PA (Pendidikan Agama)",
      excerpt: "Pendalaman materi pendidikan karakter dan kerohanian untuk memperkuat iman serta pemahaman nilai-nilai Kristiani dalam kehidupan sehari-hari...",
      img: "/slider-1.jpg"
    },
    {
      id: "bimbel-ips",
      title: "Bimbingan Belajar: IPS",
      excerpt: "Pendalaman materi Ilmu Pengetahuan Sosial, mencakup sejarah, geografi, sosiologi, dan ekonomi guna meluaskan wawasan sosial peserta didik...",
      img: "/slider-2.jpg"
    }
  ];

  const eskuls = [
    {
      id: "eskul-esport",
      title: "Ekstrakurikuler: E-Sport",
      excerpt: "Wadah bagi siswa untuk mengembangkan minat dan bakat di bidang olahraga elektronik kompetitif, melatih kerja sama tim, strategi, dan sportivitas di era digital...",
      img: "/slider-3.jpg"
    },
    {
      id: "eskul-futsal",
      title: "Ekstrakurikuler: Futsal",
      excerpt: "Pembinaan fisik, ketangkasan, dan teknik permainan sepak bola dalam ruangan. Tim futsal sekolah rutin mengikuti dan menjuarai berbagai kompetisi antarpelajar...",
      img: "/slider-1.jpg"
    },
    {
      id: "eskul-badminton",
      title: "Ekstrakurikuler: Badminton",
      excerpt: "Pelatihan teknik dasar hingga lanjutan olahraga bulu tangkis untuk mencetak bibit-bibit atlet berprestasi yang siap berlaga di tingkat kota maupun provinsi...",
      img: "/slider-2.jpg"
    },
    {
      id: "eskul-dance",
      title: "Ekstrakurikuler: Dance",
      excerpt: "Mengekspresikan kreativitas seni gerak tari modern maupun kontemporer. Eskul ini sering tampil mengisi acara pentas seni dan perlombaan koreografi tingkat remaja...",
      img: "/slider-3.jpg"
    }
  ];

  // LOGIKA PENCARIAN
  const filteredBimbels = bimbels.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredEskuls = eskuls.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen flex flex-col font-sans bg-[#E5DCC3]">
      
      <section className="w-full pt-8 pb-4 px-4 sm:px-8 max-w-7xl mx-auto shrink-0">
        <div className="text-xs text-slate-700 font-semibold mb-6 flex items-center gap-1 flex-wrap">
          <span>You are here :</span>
          <Link href="/" className="text-[#047857] hover:underline ml-1">🏠 Home</Link>
          <span>-</span>
          <span className="text-slate-600">Bimbel & Eskul</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-[#1e293b] mb-8 tracking-wide uppercase">
          BIMBEL & EKSTRAKURIKULER
        </h1>
      </section>

      <section className="w-full flex-1 pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* KIRI - HASIL PROGRAM */}
          <div className="lg:col-span-8 flex flex-col space-y-16">
            
            {/* PESAN JIKA TIDAK DITEMUKAN */}
            {((activeCategory === "Semua" || activeCategory === "Bimbel") && filteredBimbels.length === 0) && 
             ((activeCategory === "Semua" || activeCategory === "Eskul") && filteredEskuls.length === 0) && (
              <div className="bg-red-100 text-red-700 p-6 rounded-lg border border-red-200 text-center font-bold shadow-sm">
                Maaf, program "{searchQuery}" tidak ditemukan. Coba kata kunci lain ya!
              </div>
            )}

            {/* BLOK BIMBEL (Tampil jika kategori Semua ATAU Bimbel) */}
            {(activeCategory === "Semua" || activeCategory === "Bimbel") && filteredBimbels.length > 0 && (
              <div className="flex flex-col space-y-10">
                <div className="border-b-2 border-[#047857] pb-2 mb-2 inline-block w-fit">
                  <h2 className="text-2xl font-black text-[#1e293b]">📚 Bimbingan Belajar (Bimbel)</h2>
                </div>
                {filteredBimbels.slice(0, 4).map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row gap-6 items-start group">
                    <Link href={`/bimbel-eskul/detail?id=${item.id}`} className="w-full sm:w-[300px] aspect-[4/3] shrink-0 bg-slate-300 overflow-hidden rounded-md shadow-sm block cursor-pointer relative">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-3 left-3 bg-white/95 text-[#047857] text-[11px] font-bold px-2.5 py-1 rounded shadow-sm flex items-center gap-1">
                        Bimbel
                      </div>
                    </Link>
                    <div className="flex flex-col flex-1 pt-1">
                      <Link href={`/bimbel-eskul/detail?id=${item.id}`}>
                        <h3 className="text-[18px] sm:text-[20px] font-bold text-[#047857] mb-3 leading-snug hover:text-emerald-800 transition-colors cursor-pointer mt-1">
                          {item.title}
                        </h3>
                      </Link>
                      <Link href={`/bimbel-eskul/detail?id=${item.id}`}>
                        <p className="text-[13px] sm:text-[14px] text-slate-700 leading-relaxed text-justify hover:text-black cursor-pointer">
                          {item.excerpt}
                        </p>
                      </Link>
                    </div>
                  </div>
                ))}
                
                {/* Tombol View More */}
                {searchQuery === "" && (
                  <div className="pt-2 border-t border-slate-400/30">
                    <Link href="/bimbel-eskul/all-bimbel" className="bg-[#D97706] hover:bg-amber-700 text-white font-bold text-xs py-2.5 px-6 rounded shadow-sm transition-colors inline-block">
                      View More Bimbel →
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* BLOK ESKUL (Tampil jika kategori Semua ATAU Eskul) */}
            {(activeCategory === "Semua" || activeCategory === "Eskul") && filteredEskuls.length > 0 && (
              <div className="flex flex-col space-y-10">
                <div className="border-b-2 border-[#047857] pb-2 mb-2 inline-block w-fit">
                  <h2 className="text-2xl font-black text-[#1e293b]">🏅 Ekstrakurikuler (Eskul)</h2>
                </div>
                {filteredEskuls.slice(0, 4).map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row gap-6 items-start group">
                    <Link href={`/bimbel-eskul/detail?id=${item.id}`} className="w-full sm:w-[300px] aspect-[4/3] shrink-0 bg-slate-300 overflow-hidden rounded-md shadow-sm block cursor-pointer relative">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-3 left-3 bg-white/95 text-[#D97706] text-[11px] font-bold px-2.5 py-1 rounded shadow-sm flex items-center gap-1">
                        Eskul
                      </div>
                    </Link>
                    <div className="flex flex-col flex-1 pt-1">
                      <Link href={`/bimbel-eskul/detail?id=${item.id}`}>
                        <h3 className="text-[18px] sm:text-[20px] font-bold text-[#047857] mb-3 leading-snug hover:text-emerald-800 transition-colors cursor-pointer mt-1">
                          {item.title}
                        </h3>
                      </Link>
                      <Link href={`/bimbel-eskul/detail?id=${item.id}`}>
                        <p className="text-[13px] sm:text-[14px] text-slate-700 leading-relaxed text-justify hover:text-black cursor-pointer">
                          {item.excerpt}
                        </p>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* KANAN - SIDEBAR */}
          <div className="lg:col-span-4 lg:border-l border-dashed border-slate-500 lg:pl-8 space-y-8">
            
            <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#047857]">
              <h3 className="text-[15px] font-bold text-slate-800 mb-4">Cari Program</h3>
              <div className="flex">
                <input 
                  type="text" 
                  placeholder="Ketik nama program..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 p-2.5 border border-slate-300 rounded-l text-xs focus:outline-none focus:border-[#047857] focus:ring-1 focus:ring-[#047857]" 
                />
                <button className="bg-[#047857] hover:bg-emerald-800 text-white font-bold px-5 text-xs rounded-r transition-colors">
                  Cari
                </button>
              </div>
            </div>

            {/* BLOK FILTER KATEGORI INTERAKTIF */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-[15px] font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">Kategori Program</h3>
              <ul className="text-[13px] font-semibold space-y-3">
                <li 
                  onClick={() => setActiveCategory("Semua")}
                  className={`cursor-pointer flex justify-between p-2 rounded transition-colors ${activeCategory === "Semua" ? "bg-[#047857] text-white" : "text-slate-600 hover:bg-slate-100"}`}
                >
                  <span>Tampilkan Semua</span>
                  <span>({bimbels.length + eskuls.length})</span>
                </li>
                <li 
                  onClick={() => setActiveCategory("Bimbel")}
                  className={`cursor-pointer flex justify-between p-2 rounded transition-colors ${activeCategory === "Bimbel" ? "bg-[#047857] text-white" : "text-slate-600 hover:bg-slate-100"}`}
                >
                  <span>Bimbingan Belajar</span>
                  <span>({bimbels.length})</span>
                </li>
                <li 
                  onClick={() => setActiveCategory("Eskul")}
                  className={`cursor-pointer flex justify-between p-2 rounded transition-colors ${activeCategory === "Eskul" ? "bg-[#047857] text-white" : "text-slate-600 hover:bg-slate-100"}`}
                >
                  <span>Ekstrakurikuler</span>
                  <span>({eskuls.length})</span>
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
                  <span className="text-right leading-tight">
                    Tona Leon Ferdinan<br/>Situmorang,<br/>S.Pd.,MA.,ED.
                  </span>
                </li>
                <li className="flex justify-between items-center gap-4">
                  <span className="font-bold shrink-0">Phone</span>
                  <span className="text-[#047857] text-right font-medium">0778-363082</span>
                </li>
                <li className="flex justify-between items-center gap-4 border-b border-dashed border-slate-400 pb-6">
                  <span className="font-bold shrink-0">Email</span>
                  <span className="text-[#047857] text-right font-medium break-all">info@adventbatam.sch.id</span>
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
