"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const images = [
    "/slider-1.jpg",
    "/slider-2.jpg",
    "/slider-3.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Otomatis ganti gambar slider setiap 4 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <main className="min-h-screen bg-[#F6F4E8] text-slate-900 font-sans pb-0">
      
      {/* ========================================= */}
      {/* 1. BAGIAN SLIDER (Tetap dipertahankan)    */}
      {/* ========================================= */}
      <section className="relative w-full max-w-7xl mx-auto mt-4 px-4 mb-8">
        <div className="relative w-full h-[240px] sm:h-[380px] md:h-[480px] lg:h-[540px] overflow-hidden rounded-2xl shadow-lg bg-slate-200">
          {images.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <img
                src={src}
                alt={`Foto Kegiatan ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* Tombol Panah Kiri */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white w-10 h-10 flex items-center justify-center rounded-full transition-all focus:outline-none"
          >
            &#10094;
          </button>

          {/* Tombol Panah Kanan */}
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white w-10 h-10 flex items-center justify-center rounded-full transition-all focus:outline-none"
          >
            &#10095;
          </button>

          {/* Indikator Titik Slider */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === currentIndex ? "bg-amber-400 w-8" : "bg-white/70 w-2.5"
                }`}
              />
            ))}
          </div>
        </div>
      </section>


      {/* ========================================= */}
      {/* 2. BAGIAN EDITORIAL & BERITA TERKINI      */}
      {/* ========================================= */}
      <section className="max-w-7xl mx-auto px-4 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* KOLOM KIRI: EDITORIAL (Terdapat 3 Baris) */}
          <div className="lg:col-span-2">
            <h2 className="text-center font-bold text-sm sm:text-base uppercase tracking-wider mb-6">
              EDITORIAL
            </h2>
            
            <div className="space-y-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex flex-col md:flex-row gap-4">
                  
                  {/* Kotak Foto Editorial */}
                  <div className="w-full md:w-5/12 aspect-[4/3] sm:aspect-auto sm:h-48 border border-slate-900 bg-white relative flex items-end p-3">
                    <p className="text-[11px] sm:text-xs font-semibold leading-tight text-slate-800">
                      BERISI FULL FOTO DAN NAMA<br />
                      BERADA DI ATAS FOTO<br />
                      BERADA PADA POSISI BAGIAN<br />
                      BAWAH KIRI FOTO, RATA KIRI
                    </p>
                  </div>

                  {/* Kotak Teks Editorial */}
                  <div className="w-full md:w-7/12 flex flex-col justify-start">
                    <h3 className="text-center font-bold text-sm mb-3 uppercase">
                      JUDUL EDITORIAL
                    </h3>
                    <p className="text-xs sm:text-[13px] text-justify text-slate-700 leading-relaxed">
                      ISI EDITORIAL ISI EDITORIAL ISI EDITORIAL ISI EDITORIAL ISI EDITORIAL ISI EDITORIAL ISI EDITORIAL ISI EDITORIAL ISI EDITORIAL ISI EDITORIAL ISI EDITORIAL ISI EDITORIAL ISI EDITORIAL ISI EDITORIAL ISI EDITORIAL ISI EDITORIAL ISI EDITORIAL ISI EDITORIAL
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* KOLOM KANAN: LATEST NEWS & INFO PPDB */}
          <div className="lg:col-span-1">
            <h2 className="text-left font-bold text-sm sm:text-base mb-6">
              Latest News
            </h2>
            
            {/* Daftar Berita */}
            <div className="space-y-4 mb-6">
              {[1, 2, 3].map((news) => (
                <div key={news} className="flex gap-3 h-24">
                  {/* Kotak Foto Berita */}
                  <div className="w-24 h-full border border-slate-900 bg-[#F6F4E8] flex items-center justify-center p-2 text-center text-[10px] font-semibold text-slate-600">
                    FOTO<br />BERITA
                  </div>
                  {/* Kotak Judul Berita */}
                  <div className="flex-1 border border-slate-900 bg-[#F6F4E8] p-3 flex flex-col justify-start">
                    <p className="text-[11px] uppercase mb-1">TANGGAL BERITA</p>
                    <p className="text-[12px] font-bold leading-tight">JUDUL BERITA</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Kotak Info PPDB */}
            <div className="w-full h-[320px] border border-slate-900 bg-[#F6F4E8] pt-6 flex flex-col items-center justify-start">
              <h3 className="font-bold text-sm uppercase">INFO PPDB</h3>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================= */}
      {/* 3. BAGIAN PETUAH BIJAKSANA (Background Oranye) */}
      {/* ========================================= */}
      <section className="w-full bg-[#D97706] text-white py-10 px-4 text-center">
        <h2 className="font-bold text-lg sm:text-xl mb-6 tracking-wide">
          Petuah Bijaksana
        </h2>
        <p className="max-w-4xl mx-auto text-base sm:text-lg italic leading-relaxed mb-6 font-medium">
          Nummus in Croesi divitiis obscuratur, pars est tamen divitiarum. Quamvis enim depravatae non sint, pravae tamen esse possunt
        </p>
        <p className="text-sm">
          sumber : <span className="font-bold">Konsep Otomatis</span>
        </p>
      </section>


      {/* ========================================= */}
      {/* 4. BAGIAN GURU KREATIF - INOVATIF         */}
      {/* ========================================= */}
      <section className="w-full bg-[#E5DCC3] py-10 px-4">
        <div className="max-w-7xl mx-auto">
          
          <h2 className="font-bold text-sm sm:text-base mb-6 flex items-center gap-2 text-slate-800 uppercase">
            <span className="bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
              👨‍🏫
            </span>
            GURU GURU KREATIF - INOVATIF
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            
            {/* Array Data Guru Sesuai Gambar */}
            {[
              { name: "Celli Sihombing, S.Pd", role: "Waka Kurikulum", mapel: "Guru IPA Kimia" },
              { name: "Mawar Indah Sinurat, S.Pd", role: "", mapel: "Guru IPA Biologi" },
              { name: "Paulus Padan Tampubolon, S.Th", role: "", mapel: "Guru Agama" },
              { name: "Renita Pandiangan, S.Pd", role: "", mapel: "Guru Bhs. Ind." },
              { name: "Herman, S.Pd", role: "", mapel: "Guru Conversation" },
              { name: "Kumar, S.Pd", role: "", mapel: "Guru Conversation" }
            ].map((guru, index) => (
              
              <div 
                key={index} 
                className="relative aspect-[3/4] rounded-lg overflow-hidden border border-slate-400 shadow-sm bg-slate-300 group"
              >
                {/* Gambar Placeholder Sementara menggunakan slider-1/2/3 */}
                <img 
                  src={`/slider-${(index % 3) + 1}.jpg`} 
                  alt={guru.name} 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                />
                
                {/* Efek Gradasi Hitam di Bawah agar Teks Terbaca */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                
                {/* Teks Identitas Guru */}
                <div className="absolute bottom-0 left-0 w-full p-2 sm:p-3 text-white text-[10px] sm:text-xs leading-tight">
                  {guru.role && <p className="font-semibold">{guru.role}</p>}
                  <p>{guru.mapel}</p>
                  <p className="font-bold mt-0.5 text-amber-300">{guru.name}</p>
                </div>
              </div>

            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
