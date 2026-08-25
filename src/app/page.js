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
    <main className="min-h-screen bg-slate-100 text-slate-800 pb-16">
      {/* Slider Banner Utama */}
      <section className="relative w-full max-w-7xl mx-auto mt-4 px-4">
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
            aria-label="Previous Slide"
          >
            &#10094;
          </button>

          {/* Tombol Panah Kanan */}
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white w-10 h-10 flex items-center justify-center rounded-full transition-all focus:outline-none"
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
                className={`h-2.5 rounded-full transition-all ${
                  index === currentIndex ? "bg-amber-400 w-8" : "bg-white/70 w-2.5"
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Grid Konten Utama & Sidebar */}
      <section className="max-w-7xl mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Kolom Kiri & Tengah (Konten Utama) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Editorial / Sambutan Utama */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200/80">
              <div className="flex items-center space-x-3 border-b border-slate-100 pb-4 mb-5">
                <span className="h-6 w-1.5 bg-red-800 rounded-full"></span>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Editorial & Sambutan Pimpinan
                </h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  Selamat datang di portal resmi pendidikan <strong>SMP - SMA Advent Batam</strong>. Kami berkomitmen untuk menyajikan lingkungan belajar yang holistik—mengembangkan aspek intelektual, karakter rohani, serta keterampilan fisik peserta didik secara seimbang.
                </p>
                <p>
                  Melalui kurikulum terpadu dan bimbingan tenaga pendidik yang berdedikasi, kami mempersiapkan generasi muda yang tangguh, berintegritas tinggi, dan siap menjadi terang di tengah masyarakat global.
                </p>
              </div>
            </div>

            {/* Berita & Artikel Terkini */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200/80">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <div className="flex items-center space-x-3">
                  <span className="h-6 w-1.5 bg-red-800 rounded-full"></span>
                  <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                    Berita & Aktivitas Sekolah
                  </h2>
                </div>
                <span className="text-xs font-semibold text-red-800 uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full">
                  Update Terbaru
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <article className="border border-slate-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow bg-slate-50/50">
                  <div className="h-40 bg-slate-200 overflow-hidden">
                    <img src="/slider-2.jpg" alt="Kegiatan Siswa" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-semibold text-amber-700">Kegiatan Akademik</span>
                    <h3 className="font-bold text-slate-900 mt-1 mb-2 line-clamp-2">
                      Penguatan Pembelajaran Berbasis Karakter dan Sains
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-3">
                      Peserta didik SMP dan SMA Advent Batam mengikuti serangkaian program pengayaan dan integrasi nilai-nilai moral.
                    </p>
                  </div>
                </article>

                <article className="border border-slate-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow bg-slate-50/50">
                  <div className="h-40 bg-slate-200 overflow-hidden">
                    <img src="/slider-3.jpg" alt="Ekstrakurikuler" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-semibold text-amber-700">Ekstrakurikuler</span>
                    <h3 className="font-bold text-slate-900 mt-1 mb-2 line-clamp-2">
                      Pengembangan Minat & Bakat Kepemimpinan Siswa
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-3">
                      Kegiatan rutin kepanduan dan organisasi kesiswaan dalam melatih kedisiplinan serta kerja sama tim.
                    </p>
                  </div>
                </article>
              </div>
            </div>

          </div>

          {/* Kolom Kanan (Sidebar Informasi & Yayasan) */}
          <div className="space-y-8">
            
            {/* Profil Yayasan & Pimpinan */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80">
              <div className="flex items-center space-x-3 border-b border-slate-100 pb-3 mb-4">
                <span className="h-5 w-1.5 bg-amber-500 rounded-full"></span>
                <h3 className="font-bold text-slate-900 text-lg">
                  Struktur & Pembina
                </h3>
              </div>
              <div className="space-y-4 text-sm">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-xs text-slate-400 font-medium">Yayasan Pendidikan Advent Batam</p>
                  <p className="font-bold text-slate-800 text-base mt-0.5">Badan Pengurus Sekolah</p>
                  <p className="text-xs text-slate-600 mt-1">Membina arah pendidikan berkarakter unggul dan bernilai moralitas luhur.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-xs text-slate-400 font-medium">Pimpinan Unit</p>
                  <p className="font-bold text-slate-800 text-base mt-0.5">SMP - SMA Advent Batam</p>
                  <p className="text-xs text-slate-600 mt-1">Mengawal kualitas pembelajaran holistik dan kesiapan akademik siswa.</p>
                </div>
              </div>
            </div>

            {/* Panel Pengumuman / PPDB */}
            <div className="bg-gradient-to-br from-red-900 to-red-950 text-white p-6 rounded-2xl shadow-md">
              <span className="text-xs font-bold uppercase tracking-wider bg-amber-400 text-slate-900 px-2.5 py-0.5 rounded">
                Info Pendaftaran
              </span>
              <h3 className="text-xl font-bold mt-3 mb-2">
                PPDB Tahun Pelajaran 2026/2027
              </h3>
              <p className="text-red-100 text-xs sm:text-sm leading-relaxed mb-5">
                Pendaftaran siswa baru tingkat SMP dan SMA telah dibuka. Bergabunglah bersama keluarga besar Advent Batam.
              </p>
              <Link
                href="/ppdb"
                className="inline-block w-full text-center bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold py-2.5 px-4 rounded-xl text-sm transition-colors shadow"
              >
                Informasi & Pendaftaran
              </Link>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
