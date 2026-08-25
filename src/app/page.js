"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const images = [
    "/slider-1.jpg",
    "/slider-2.jpg",
    "/slider-3.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Otomatis ganti gambar setiap 4 detik
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
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Slider Banner Utama */}
      <section className="relative w-full max-w-7xl mx-auto mt-4 px-4">
        <div className="relative w-full h-[220px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-2xl shadow-xl bg-slate-200">
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
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all focus:outline-none"
            aria-label="Previous Slide"
          >
            &#10094;
          </button>

          {/* Tombol Panah Kanan */}
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all focus:outline-none"
            aria-label="Next Slide"
          >
            &#10095;
          </button>

          {/* Indikator Titik Slider */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-blue-600 w-6" : "bg-white/70"
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Konten Utama Sekolah */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sambutan */}
          <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-blue-950 mb-4 border-b pb-3">
              Selamat Datang di SMP - SMA Advent Batam
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Mewujudkan generasi yang berkarakter unggul, cerdas secara holistik, serta berlandaskan nilai-nilai iman dan moral yang kokoh.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Kami berkomitmen menghadirkan ekosistem belajar yang modern, inklusif, dan inspiratif untuk mempersiapkan peserta didik menghadapi tantangan masa depan.
            </p>
          </div>

          {/* Pengumuman Singkat */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-blue-950 mb-4 border-b pb-3">
              Informasi Terkini
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="p-3 bg-blue-50/50 rounded-lg border border-blue-100">
                Penerimaan Peserta Didik Baru (PPDB) Tahun Ajaran Aktif telah dibuka.
              </li>
              <li className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                Jadwal kegiatan akademik dan ekstrakurikuler semester ini.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
