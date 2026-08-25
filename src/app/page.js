"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const images = [
    "/slider-1.jpg",
    "/slider-2.jpg",
    "/slider-3.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

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

  // Data Editorial
  const editorials = [
    {
      name: "Ibu Rima Melati Hutagalung",
      role: "Ketua YPAB",
      heading: "Web yang Professional",
      text: "An potest, inquit ille, quicquam esse suavius quam nihil dolere? Contemnit enim disserendi elegantiam, confuse loquitur. An est aliquid per se ipsum flagitiosum, etiamsi nulla comitetur infamia? Ab hoc autem quaedam non melius quam veteres, quaedam omnino relicta. Quia...",
      img: "/slider-1.jpg"
    },
    {
      name: "Bapak Samuel Simatupang",
      role: "Manager Operasional",
      heading: "Web yang Professional",
      text: "An potest, inquit ille, quicquam esse suavius quam nihil dolere? Contemnit enim disserendi elegantiam, confuse loquitur. An est aliquid per se ipsum flagitiosum, etiamsi nulla comitetur infamia? Ab hoc autem quaedam non melius quam veteres, quaedam omnino relicta. Quia...",
      img: "/slider-2.jpg"
    },
    {
      name: "Tona Leon F. Situmorang, S.Pd., M.A.Ed.",
      role: "Kepala Sekolah",
      heading: "Web yang Professional",
      text: "An potest, inquit ille, quicquam esse suavius quam nihil dolere? Contemnit enim disserendi elegantiam, confuse loquitur. An est aliquid per se ipsum flagitiosum, etiamsi nulla comitetur infamia? Ab hoc autem quaedam non melius quam veteres, quaedam omnino relicta. Quia...",
      img: "/slider-3.jpg"
    }
  ];

  // Data Berita Terbaru
  const latestNews = [
    { date: "Tuesday, 12 August 2025", title: "KTT G20 Bali", img: "/slider-1.jpg" },
    { date: "Tuesday, 12 August 2025", title: "BAB 1 Badan Usaha dalam Perekonomian", img: "/slider-2.jpg" },
    { date: "Monday, 11 August 2025", title: "BAB 1 INFORMATIKA & PEMBELAJARANNYA", img: "/slider-3.jpg" }
  ];

  return (
    <main className="min-h-screen bg-[#F3EFE4] text-slate-900 font-sans pb-0">
      
      {/* ========================================= */}
      {/* 1. BAGIAN SLIDER UTAMA                    */}
      {/* ========================================= */}
      <section className="relative w-full max-w-7xl mx-auto mt-4 px-4 mb-10">
        <div className="relative w-full h-[240px] sm:h-[380px] md:h-[480px] lg:h-[540px] overflow-hidden rounded-2xl shadow-lg bg-slate-200">
          {images.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <img src={src} alt={`Foto Kegiatan ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
          <button onClick={prevSlide} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white w-10 h-10 flex items-center justify-center rounded-full transition-all">&#10094;</button>
          <button onClick={nextSlide} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white w-10 h-10 flex items-center justify-center rounded-full transition-all">&#10095;</button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button key={index} onClick={() => setCurrentIndex(index)} className={`h-2.5 rounded-full transition-all ${index === currentIndex ? "bg-amber-400 w-8" : "bg-white/70 w-2.5"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 2. EDITORIAL, BERITA TERBARU, PPDB & BLOG */}
      {/* ========================================= */}
      <section className="max-w-7xl mx-auto px-4 mb-12">
        <div className="flex flex-col space-y-8">
          
          {editorials.map((item, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              
              {/* === KIRI (2/3): EDITORIAL === */}
              <div className="lg:col-span-2 flex flex-col md:flex-row gap-5 items-start">
                
                {/* Foto Profil (Diperkecil 75%) */}
                <div className="w-full md:w-[26%] lg:w-[30%] aspect-square relative rounded-xl overflow-hidden shadow-sm border border-slate-200 shrink-0">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <p className="text-amber-400 font-bold text-xs sm:text-sm leading-tight mb-1">
                      {item.name}
                    </p>
                    <p className="text-white text-[10px] sm:text-xs">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Teks Judul & Lead Berita */}
                <div className="w-full md:w-[74%] lg:w-[70%] flex flex-col space-y-3 md:h-[320px] lg:h-[368px]">
                  {/* Kotak Judul */}
                  <div className="bg-[#E3DCc3] p-4 rounded-xl shadow-sm shrink-0">
                    <h3 className="text-red-950 font-bold text-lg sm:text-xl">
                      {item.heading}
                    </h3>
                  </div>
                  
                  {/* Kotak Lead Teks & Tombol */}
                  <div className="bg-[#E3DCc3] p-4 sm:p-5 rounded-xl shadow-sm flex-1 flex flex-col justify-between items-start">
                    <p className="text-slate-700 text-sm leading-relaxed text-justify mb-4">
                      {item.text}
                    </p>
                    <button className="bg-red-900 hover:bg-red-800 text-white font-bold py-2 px-6 rounded-lg transition-colors text-sm shadow-sm">
                      View All
                    </button>
                  </div>
                </div>
              </div>

              {/* === KANAN (1/3): KONTEN DINAMIS === */}
              <div className="lg:col-span-1 flex flex-col h-full">
                
                {/* Baris 1: Menampilkan Berita Terbaru */}
                {index === 0 && (
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-5 h-7 shrink-0">
                      <span className="bg-slate-800 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs">💬</span>
                      <h2 className="font-bold text-xl text-slate-800">Berita Terbaru</h2>
                    </div>
                    <div className="space-y-4 flex-1 flex flex-col justify-between">
                      {latestNews.map((news, idx) => (
                        <div key={idx} className="flex gap-4 items-center">
                          <div className="w-24 h-20 sm:w-28 sm:h-24 shrink-0 rounded-xl overflow-hidden border border-slate-300 shadow-sm">
                            <img src={news.img} alt="Thumb" className="w-full h-full object-cover" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <p className="text-xs text-slate-600 mb-1">{news.date}</p>
                            <p className="text-sm font-bold text-red-950 leading-tight line-clamp-2">
                              {news.title}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Baris 2: Menampilkan INFO PPDB (Sejajar presisi) */}
                {index === 1 && (
                  <div className="flex-1 w-full border border-slate-300 bg-[#E3DCc3] rounded-xl flex flex-col items-center justify-center p-6 shadow-sm">
                    <h3 className="font-bold text-lg text-slate-800 uppercase tracking-widest mb-2">INFO PPDB</h3>
                    <p className="text-sm text-slate-600 text-center">Area informasi Pendaftaran Peserta Didik Baru</p>
                  </div>
                )}

                {/* Baris 3: Menampilkan BLOG GURU (Sejajar presisi) */}
                {index === 2 && (
                  <div className="flex-1 w-full border border-slate-300 bg-[#E3DCc3] rounded-xl flex flex-col items-center justify-center p-6 shadow-sm">
                    <h3 className="font-bold text-lg text-slate-800 uppercase tracking-widest mb-2">BLOG GURU</h3>
                    <p className="text-sm text-slate-600 text-center">Kumpulan artikel, opini, dan karya inspiratif tenaga pendidik</p>
                  </div>
                )}

              </div>
            </div>
          ))}
          
        </div>
      </section>

      {/* ========================================= */}
      {/* 3. BAGIAN PETUAH BIJAKSANA (Oranye)       */}
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
            {[
              { name: "Celli Sihombing, S.Pd", role: "Waka Kurikulum", mapel: "Guru IPA Kimia" },
              { name: "Mawar Indah Sinurat, S.Pd", role: "", mapel: "Guru IPA Biologi" },
              { name: "Paulus Padan Tampubolon, S.Th", role: "", mapel: "Guru Agama" },
              { name: "Renita Pandiangan, S.Pd", role: "", mapel: "Guru Bhs. Ind." },
              { name: "Herman, S.Pd", role: "", mapel: "Guru Conversation" },
              { name: "Kumar, S.Pd", role: "", mapel: "Guru Conversation" }
            ].map((guru, index) => (
              <div key={index} className="relative aspect-[3/4] rounded-lg overflow-hidden border border-slate-400 shadow-sm bg-slate-300 group">
                <img 
                  src={`/slider-${(index % 3) + 1}.jpg`} 
                  alt={guru.name} 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
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
