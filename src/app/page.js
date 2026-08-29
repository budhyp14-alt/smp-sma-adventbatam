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

  const latestNews = [
    { date: "Tuesday, 12 August 2025", title: "KTT G20 Bali", img: "/slider-1.jpg" },
    { date: "Tuesday, 12 August 2025", title: "BAB 1 Badan Usaha dalam Perekonomian", img: "/slider-2.jpg" },
    { date: "Monday, 11 August 2025", title: "BAB 1 INFORMATIKA & PEMBELAJARANNYA", img: "/slider-3.jpg" }
  ];

  const fasilitas = [
    { title: "Ruang Laboratorium Bahasa", text: "Dilengkapi perangkat audio visual modern...", img: "/slider-1.jpg" },
    { title: "Karate, Judo, Silat", text: "Fasilitas olahraga beladiri untuk melatih fisik...", img: "/slider-2.jpg" },
    { title: "Masjid At-Taqwa", text: "Sarana ibadah yang nyaman bagi siswa...", img: "/slider-3.jpg" }
  ];

  return (
    <main className="min-h-screen bg-[#F3EFE4] text-slate-900 font-sans pb-0 flex flex-col">
      
      <section className="relative w-full max-w-7xl mx-auto mt-4 px-4 mb-10 shrink-0">
        <div className="relative w-full h-[240px] sm:h-[380px] md:h-[480px] lg:h-[540px] overflow-hidden rounded-2xl shadow-lg bg-slate-200">
          {images.map((src, index) => (
            <div key={src} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
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

      <section className="max-w-7xl mx-auto px-4 mb-8 shrink-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="w-full sm:w-[40%] aspect-[4/5] relative rounded-xl overflow-hidden shadow-sm shrink-0">
              <img src="/slider-1.jpg" alt="Rima Melati Hutagalung" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <p className="text-[#E5B55C] font-bold text-sm sm:text-base leading-tight mb-1">Rima Melati Hutagalung</p>
                <p className="text-[#E5B55C] text-xs sm:text-sm">Chairman of the Foundation</p>
              </div>
            </div>
            <div className="w-full sm:w-[60%] flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#4D524F] text-white rounded-full w-7 h-7 flex items-center justify-center text-[10px] tracking-widest">•••</span>
                <h2 className="font-bold text-lg text-[#4D524F]">Foundation Chairman's Editorial</h2>
              </div>
              <div className="bg-[#E2DECA] p-4 rounded-t-xl shadow-sm mb-2">
                <h3 className="text-red-900 font-bold text-base sm:text-lg leading-snug">Visi Jangka Panjang YPAB</h3>
              </div>
              <div className="bg-[#E2DECA] p-4 rounded-b-xl shadow-sm mb-4 flex-1">
                <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed text-justify line-clamp-6">Yayasan Pendidikan Advent Batam terus berkomitmen untuk memberikan standar pendidikan terbaik yang selaras dengan nilai-nilai moral dan spiritual bagi generasi masa depan...</p>
              </div>
              <div>
                <button className="bg-[#8B0000] hover:bg-red-800 text-white font-bold py-2.5 px-6 rounded shadow-sm text-sm">View All</button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-5">
            <div className="w-full sm:w-[40%] aspect-[4/5] relative rounded-xl overflow-hidden shadow-sm shrink-0">
              <img src="/slider-2.jpg" alt="Samuel Simatupang" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <p className="text-[#E5B55C] font-bold text-sm sm:text-base leading-tight mb-1">Samuel Simatupang</p>
                <p className="text-[#E5B55C] text-xs sm:text-sm">Operations Manager</p>
              </div>
            </div>
            <div className="w-full sm:w-[60%] flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#4D524F] text-white rounded-full w-7 h-7 flex items-center justify-center text-[10px] tracking-widest">•••</span>
                <h2 className="font-bold text-lg text-[#4D524F]">Operations Manager's Editorial</h2>
              </div>
              <div className="bg-[#E2DECA] p-4 rounded-t-xl shadow-sm mb-2">
                <h3 className="text-red-900 font-bold text-base sm:text-lg leading-snug">Peningkatan Fasilitas Berkelanjutan</h3>
              </div>
              <div className="bg-[#E2DECA] p-4 rounded-b-xl shadow-sm mb-4 flex-1">
                <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed text-justify line-clamp-6">Pengembangan infrastruktur sekolah menjadi fokus utama kami tahun ini, untuk memastikan kegiatan belajar mengajar berjalan optimal dan nyaman bagi seluruh siswa...</p>
              </div>
              <div>
                <button className="bg-[#8B0000] hover:bg-red-800 text-white font-bold py-2.5 px-6 rounded shadow-sm text-sm">View All</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 mb-12 shrink-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          <div className="lg:col-span-2 flex flex-col md:flex-row gap-5 items-start">
            <div className="w-full md:w-[35%] lg:w-[30%] aspect-square relative rounded-xl overflow-hidden shadow-sm shrink-0">
              <img src="/slider-3.jpg" alt="Tona Leon F. Situmorang" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <p className="text-[#E5B55C] font-bold text-xs sm:text-sm leading-tight mb-1">Tona Leon F. Situmorang, S.Pd.,MA.,ED.</p>
                <p className="text-[#E5B55C] text-[10px] sm:text-xs">Principal</p>
              </div>
            </div>
            <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col h-full">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#4D524F] text-white rounded-full w-7 h-7 flex items-center justify-center text-[10px] tracking-widest">•••</span>
                <h2 className="font-bold text-lg text-[#4D524F]">Principal's Editorial</h2>
              </div>
              
              <Link href="/editorial/detail" className="bg-[#E2DECA] p-4 rounded-t-xl shadow-sm mb-2 hover:bg-[#d6d1bc] transition-colors cursor-pointer block">
                <h3 className="text-red-900 font-bold text-base sm:text-lg">Sambutan Kepala Sekolah: Menyongsong Masa Depan Melalui Website Resmi SMP & SMA Advent Batam</h3>
              </Link>
              
              <Link href="/editorial/detail" className="bg-[#E2DECA] p-4 rounded-b-xl shadow-sm mb-4 flex-1 hover:bg-[#d6d1bc] transition-colors cursor-pointer block">
                <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed text-justify">Kepala Sekolah SMP & SMA Advent Batam, Bapak Tona Leon F. Situmorang, S.Pd., MA.Ed. menyambut dengan sukacita dan antusiasme tinggi atas selesainya pembuatan website resmi sekolah. Beliau tidak hanya mengucap syukur kepada Tuhan, tetapi juga menaruh harapan besar agar seluruh civitas akademika dapat mendayagunakan platform digital ini secara maksimal...</p>
              </Link>
              
              <div>
                <Link href="/editorial" className="bg-[#8B0000] hover:bg-red-800 text-white font-bold py-2 px-6 rounded shadow-sm text-sm inline-block">
                  View All
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 flex flex-col h-full">
            <div className="flex items-center gap-2 mb-3 h-7 shrink-0">
              <span className="bg-slate-800 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs">💬</span>
              <h2 className="font-bold text-xl text-slate-800">Latest News</h2>
            </div>
            <div className="space-y-4 flex-1 flex flex-col justify-between">
              {latestNews.map((news, idx) => (
                <div key={idx} className="flex gap-4 items-center">
                  <div className="w-20 h-16 sm:w-24 sm:h-20 shrink-0 rounded-xl overflow-hidden shadow-sm">
                    <img src={news.img} alt="Thumb" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[10px] sm:text-xs text-slate-600 mb-1">{news.date}</p>
                    <p className="text-xs sm:text-sm font-bold text-red-950 leading-tight line-clamp-2">{news.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Bagian Bawah Diabaikan demi keterbacaan, strukturnya SAMA dengan kode yang sebelumnya */}
    </main>
  );
}
