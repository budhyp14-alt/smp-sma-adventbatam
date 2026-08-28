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

  const blogGuru = [
    { date: "Tuesday, 11 July 2017", title: "Seinima Sapientia Proficiscitur Aconti Copassuni", img: "/slider-1.jpg" },
    { date: "Tuesday, 11 July 2017", title: "Quicquid Enima Sapientia Proficiscitur, Idconti", img: "/slider-2.jpg" },
    { date: "Tuesday, 11 July 2017", title: "Adeas Enimres Abrpicuro Praecepta Dantur. Quicquid Enim", img: "/slider-3.jpg" }
  ];

  const fasilitas = [
    { title: "Ruang Laboratorium Bahasa", text: "An potest, inquit ille, quicquam esse suavius quam...", img: "/slider-1.jpg" },
    { title: "Karate, Judo, Silat", text: "An potest, inquit ille, quicquam esse suavius quam...", img: "/slider-2.jpg" },
    { title: "Masjid At-Taqwa", text: "An potest, inquit ille, quicquam esse suavius quam...", img: "/slider-3.jpg" }
  ];

  return (
    <main className="min-h-screen bg-[#F3EFE4] text-slate-900 font-sans pb-0 flex flex-col">
      
      {/* ========================================= */}
      {/* 1. BAGIAN SLIDER UTAMA                    */}
      {/* ========================================= */}
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

      {/* ========================================= */}
      {/* 2. DUA BLOK EDITORIAL BERSEBELAHAN        */}
      {/* ========================================= */}
      <section className="max-w-7xl mx-auto px-4 mb-8 shrink-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* KIRI: Ketua Yayasan */}
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="w-full sm:w-[40%] aspect-[4/5] relative rounded-xl overflow-hidden shadow-sm shrink-0">
              <img src="/slider-1.jpg" alt="Rima Melati Hutagalung" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <p className="text-[#E5B55C] font-bold text-sm sm:text-base leading-tight mb-1">Rima Melati Hutagalung</p>
                <p className="text-[#E5B55C] text-xs sm:text-sm">Ketua Yayasan</p>
              </div>
            </div>
            <div className="w-full sm:w-[60%] flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#4D524F] text-white rounded-full w-7 h-7 flex items-center justify-center text-[10px] tracking-widest">•••</span>
                <h2 className="font-bold text-lg text-[#4D524F]">Editorial Ketua Yayasan</h2>
              </div>
              <div className="bg-[#E2DECA] p-4 rounded-t-xl shadow-sm mb-2">
                <h3 className="text-red-900 font-bold text-base sm:text-lg leading-snug">Pelajaran Serta Keteladanan Dari Para Pahlawan</h3>
              </div>
              <div className="bg-[#E2DECA] p-4 rounded-b-xl shadow-sm mb-4 flex-1">
                <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed text-justify line-clamp-6">An potest, inquit ille, quicquam esse suavius quam nihil dolere? Contemnit enim disserendi elegantiam, confuse loquitur. An est aliquid per se ipsum flagitiosum, etiamsi nulla comitetur infamia? Ab hoc autem quaedam non melius quam veteres, quaedam omnino relicta. Quia...</p>
              </div>
              <div>
                <button className="bg-[#8B0000] hover:bg-red-800 text-white font-bold py-2.5 px-6 rounded shadow-sm text-sm">Lihat Semua</button>
              </div>
            </div>
          </div>

          {/* KANAN: Manajer Operasional */}
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="w-full sm:w-[40%] aspect-[4/5] relative rounded-xl overflow-hidden shadow-sm shrink-0">
              <img src="/slider-2.jpg" alt="Samuel Simatupang" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <p className="text-[#E5B55C] font-bold text-sm sm:text-base leading-tight mb-1">Samuel Simatupang</p>
                <p className="text-[#E5B55C] text-xs sm:text-sm">Manajer Operasional</p>
              </div>
            </div>
            <div className="w-full sm:w-[60%] flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#4D524F] text-white rounded-full w-7 h-7 flex items-center justify-center text-[10px] tracking-widest">•••</span>
                <h2 className="font-bold text-lg text-[#4D524F]">Manajer Operasional</h2>
              </div>
              <div className="bg-[#E2DECA] p-4 rounded-t-xl shadow-sm mb-2">
                <h3 className="text-red-900 font-bold text-base sm:text-lg leading-snug">Pelajaran Serta Keteladanan Dari Para Pahlawan</h3>
              </div>
              <div className="bg-[#E2DECA] p-4 rounded-b-xl shadow-sm mb-4 flex-1">
                <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed text-justify line-clamp-6">An potest, inquit ille, quicquam esse suavius quam nihil dolere? Contemnit enim disserendi elegantiam, confuse loquitur. An est aliquid per se ipsum flagitiosum, etiamsi nulla comitetur infamia? Ab hoc autem quaedam non melius quam veteres, quaedam omnino relicta. Quia...</p>
              </div>
              <div>
                <button className="bg-[#8B0000] hover:bg-red-800 text-white font-bold py-2.5 px-6 rounded shadow-sm text-sm">Lihat Semua</button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================= */}
      {/* 3. EDITORIAL KEPALA SEKOLAH & BERITA      */}
      {/* ========================================= */}
      <section className="max-w-7xl mx-auto px-4 mb-12 shrink-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* KIRI (2/3): Editorial Kepala Sekolah */}
          <div className="lg:col-span-2 flex flex-col md:flex-row gap-5 items-start">
            <div className="w-full md:w-[35%] lg:w-[30%] aspect-square relative rounded-xl overflow-hidden shadow-sm shrink-0">
              <img src="/slider-3.jpg" alt="Tona Leon F. Situmorang" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <p className="text-[#E5B55C] font-bold text-xs sm:text-sm leading-tight mb-1">Tona Leon Ferdinan Situmorang, S.Pd.,MA.,ED.</p>
                <p className="text-[#E5B55C] text-[10px] sm:text-xs">Kepala Sekolah</p>
              </div>
            </div>
            <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col h-full">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#4D524F] text-white rounded-full w-7 h-7 flex items-center justify-center text-[10px] tracking-widest">•••</span>
                <h2 className="font-bold text-lg text-[#4D524F]">Editorial Kepala Sekolah</h2>
              </div>
              <div className="bg-[#E2DECA] p-4 rounded-t-xl shadow-sm mb-2">
                <h3 className="text-red-900 font-bold text-base sm:text-lg">Pelajaran Serta Keteladanan Dari Para Pahlawan</h3>
              </div>
              <div className="bg-[#E2DECA] p-4 rounded-b-xl shadow-sm mb-4 flex-1">
                <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed text-justify">An potest, inquit ille, quicquam esse suavius quam nihil dolere? Contemnit enim disserendi elegantiam, confuse loquitur. An est aliquid per se ipsum flagitiosum, etiamsi nulla comitetur infamia? Ab hoc autem quaedam non melius quam veteres, quaedam omnino relicta. Quia...</p>
              </div>
              <div>
                <button className="bg-[#8B0000] hover:bg-red-800 text-white font-bold py-2 px-6 rounded shadow-sm text-sm">Lihat Semua</button>
              </div>
            </div>
          </div>

          {/* KANAN (1/3): Berita Terbaru */}
          <div className="lg:col-span-1 flex flex-col h-full">
            <div className="flex items-center gap-2 mb-3 h-7 shrink-0">
              <span className="bg-slate-800 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs">💬</span>
              <h2 className="font-bold text-xl text-slate-800">Berita Terbaru</h2>
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

      {/* ========================================= */}
      {/* 4. BAGIAN PETUAH BIJAKSANA (Oranye)       */}
      {/* ========================================= */}
      <section className="w-full bg-[#D97706] text-white py-12 px-4 shrink-0">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="font-bold text-lg sm:text-xl mb-6">Petuah Bijaksana</h2>
          <div className="flex flex-col sm:flex-row w-full justify-between gap-8 mb-6">
            <div className="flex-1 text-left sm:pr-8 border-b sm:border-b-0 sm:border-r border-white/30 pb-4 sm:pb-0">
              <p className="font-bold text-base sm:text-lg leading-relaxed italic">
                "tuskan untuk mengampuni dengan u meraih kemenangan mendapatkan makin mirip sifat Tuhan"
              </p>
              <p className="text-sm font-semibold mt-3 text-amber-200">Menang tanpa membalas</p>
            </div>
            <div className="flex-1 text-left sm:text-right sm:pl-8">
              <p className="font-bold text-base sm:text-lg leading-relaxed italic">
                "Omnia contraria, quos e An vero disp"
              </p>
              <p className="text-sm font-semibold mt-3 text-amber-200">sunt</p>
            </div>
          </div>
          <div className="flex space-x-2 mt-2">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="w-2 h-2 bg-white/50 rounded-full"></span>
            <span className="w-2 h-2 bg-white/50 rounded-full"></span>
            <span className="w-2 h-2 bg-white/50 rounded-full"></span>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 5. BLOK KONTEN BAWAH (Beige/Krem)         */}
      {/* ========================================= */}
      <section className="w-full bg-[#E5DCC3] py-10 px-4 flex-1">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Guru Kreatif */}
          <div className="mb-10">
            <h2 className="font-bold text-sm sm:text-base mb-6 flex items-center gap-2 text-slate-800 uppercase">
              <span className="bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">👨‍🏫</span>
              GURU GURU KREATIF - INOVATIF
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {[
                { name: "Lourens Syahartian, S.Pd", role: "Guru Bhs. Inggris" },
                { name: "Ernast Simanjuntak, S.Pd", role: "Guru Sosiologi" },
                { name: "Sarlen Naibaho, S.Pd., M.Pd.", role: "Guru IPS" },
                { name: "Endang Januar Silitonga, S.Kom", role: "Bendahara BOS / Operator Dapodik" },
                { name: "Celli Sihombing, S.Pd", role: "Waka Kurikulum / Guru IPA Kimia" },
                { name: "Mawar Indah Sinurat, S.Pd", role: "Guru IPA Biologi" }
              ].map((guru, index) => (
                <div key={index} className="relative aspect-[3/4] rounded-lg overflow-hidden border border-slate-400 shadow-sm bg-slate-300 group">
                  <img src={`/slider-${(index % 3) + 1}.jpg`} alt={guru.name} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-2 sm:p-3 text-white text-[10px] sm:text-xs leading-tight">
                    <p className="font-semibold text-white/90">{guru.role}</p>
                    <p className="font-bold mt-0.5 text-amber-300">{guru.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pengumuman, Agenda, Blog Guru */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="flex items-center text-red-950 font-bold mb-4 text-lg"><span className="mr-2 text-xl">📢</span> Pengumuman</h3>
              <p className="text-[11px] text-slate-500 uppercase font-semibold mb-1">TERBIT : Tuesday, 11 July 2017</p>
              <p className="font-bold text-red-900 text-sm mb-3 leading-tight">Pengumuman Daftar Siswa Baru Tahun 2017/2018</p>
              <div className="bg-[#DCE1C6] p-4 rounded-lg text-xs text-slate-700 text-justify mb-4 shadow-sm border border-[#C5CCAA]">
                Quia dolori non voluptas contraria est, sed doloris privatio. Omnia contraria, quos etiam insanos esse vultis. Quid Zeno? An vero displicuit ea, quae tributa est animi virtutibus tanta praestantia? Primum cur ista res digna odio est, nisi quod est turpis?..
              </div>
              <button className="bg-red-900 hover:bg-red-800 text-white text-xs font-bold px-4 py-2 rounded shadow-sm">Lihat Semua</button>
            </div>
            <div>
              <h3 className="flex items-center text-red-950 font-bold mb-4 text-lg"><span className="mr-2 text-xl">📅</span> Agenda Terbaru</h3>
              <div className="flex gap-4 items-start">
                <div className="bg-red-900 text-white w-10 h-10 flex items-center justify-center rounded text-2xl font-bold shrink-0">+</div>
                <div>
                  <p className="font-bold text-red-900 text-sm mb-2">Tidak Ada Agenda Baru</p>
                  <div className="bg-[#DCE1C6] p-4 rounded-lg text-xs text-slate-700 shadow-sm border border-[#C5CCAA]">
                    Belum ada Agenda dalam waktu dekat ini, untuk melihat agenda yang telah lewat silahkan cek di halaman Arsip Agenda
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="flex items-center text-red-950 font-bold mb-4 text-lg"><span className="mr-2 text-xl">💬</span> Blog Guru</h3>
              <div className="space-y-4">
                {blogGuru.map((blog, idx) => (
                  <div key={idx} className="flex gap-3 items-center">
                    <div className="w-20 h-16 shrink-0 rounded overflow-hidden shadow-sm">
                      <img src={blog.img} alt="Thumb" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-[10px] text-slate-500">{blog.date}</p>
                      <p className="text-xs font-bold text-red-900 leading-tight line-clamp-2">{blog.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Kegiatan, Fasilitas, Galeri */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-[#D5CCB3]">
            <div>
              <h3 className="flex items-center text-red-950 font-bold mb-4 text-lg"><span className="mr-2 text-xl">⭐</span> Kegiatan</h3>
              <div className="w-full aspect-[4/3] rounded-lg overflow-hidden shadow-sm relative">
                <img src="/slider-1.jpg" alt="Kegiatan" className="w-full h-full object-cover" />
                <div className="absolute bottom-3 left-4 flex space-x-1.5">
                  <span className="w-2 h-2 bg-white rounded-full shadow"></span>
                  <span className="w-2 h-2 bg-white/50 rounded-full shadow"></span>
                  <span className="w-2 h-2 bg-white/50 rounded-full shadow"></span>
                  <span className="w-2 h-2 bg-white/50 rounded-full shadow"></span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="flex items-center text-red-950 font-bold mb-4 text-lg"><span className="mr-2 text-xl">➕</span> Fasilitas</h3>
              <div className="space-y-4">
                {fasilitas.map((fas, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="w-20 h-14 shrink-0 rounded overflow-hidden shadow-sm">
                      <img src={fas.img} alt={fas.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-red-950 leading-tight">{fas.title}</p>
                      <p className="text-[10px] text-slate-600 leading-tight mt-1">{fas.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="flex items-center text-red-950 font-bold mb-4 text-lg"><span className="mr-2 text-xl">🖼️</span> Galeri</h3>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div key={num} className="aspect-square rounded overflow-hidden shadow-sm">
                    <img src={`/slider-${(num % 3) + 1}.jpg`} alt={`Galeri ${num}`} className="w-full h-full object-cover hover:scale-110 transition-transform" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="pt-6 border-t border-[#D5CCB3]">
            <h3 className="text-red-950 font-bold mb-4 text-lg">Video</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((vid) => (
                <div key={vid} className="aspect-video relative rounded-lg overflow-hidden shadow-md group cursor-pointer">
                  <img src={`/slider-${vid}.jpg`} alt="Video" className="w-full h-full object-cover brightness-75 group-hover:brightness-50 transition-all" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-red-600 text-white w-12 h-8 rounded-lg flex items-center justify-center group-hover:bg-red-700 transition-colors">▶</div>
                  </div>
                  <div className="absolute top-2 left-2 right-2 text-white text-xs font-bold truncate drop-shadow-md">Video Dokumentasi {vid}</div>
                  <div className="absolute bottom-2 right-2 text-white text-[10px] bg-black/60 px-2 py-0.5 rounded">Tonton di YouTube</div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* ========================================= */}
      {/* 6. FOOTER ORANYE & KREDIT BAWAH MERAH     */}
      {/* ========================================= */}
      <footer className="w-full shrink-0">
        <div className="bg-[#D97706] py-12 px-4 text-white">
          <div className="max-w-7xl mx-auto flex flex-col items-start space-y-6">
            <div className="w-full max-w-sm">
              <p className="font-bold text-sm italic mb-2">Search</p>
              <div className="flex">
                <input type="text" className="flex-1 p-1.5 text-slate-900 text-sm focus:outline-none" />
                <button className="bg-white text-slate-800 text-xs font-bold px-4 ml-1">Search</button>
              </div>
            </div>
            <div>
              <p className="font-bold text-base mb-3">Recent Posts</p>
              <ul className="text-xs space-y-1.5 font-semibold">
                <li className="hover:underline cursor-pointer">KTT G20 Bali</li>
                <li className="hover:underline cursor-pointer">BAB 1 Badan Usaha dalam Perekonomian</li>
                <li className="hover:underline cursor-pointer">BAB 1 INFORMATIKA & PEMBELAJARANNYA</li>
                <li className="hover:underline cursor-pointer">TIK</li>
                <li className="hover:underline cursor-pointer">Hello world!</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-base mb-3 mt-2">Recent Comments</p>
              <ul className="text-xs space-y-2 font-semibold max-w-md">
                <li className="hover:underline cursor-pointer">A WordPress Commenter on Hello world!</li>
                <li className="hover:underline cursor-pointer line-clamp-1">Cluss Creative on Seinima Sapientia Proficiscitur Aconti Copassuni</li>
                <li className="hover:underline cursor-pointer line-clamp-1">Cluss Creative on Seinima Sapientia Proficiscitur Aconti Copassuni</li>
              </ul>
            </div>
            <div className="flex gap-16 mt-2">
              <div>
                <p className="font-bold text-base mb-3">Archives</p>
                <ul className="text-xs space-y-1.5 font-semibold">
                  <li className="hover:underline cursor-pointer">August 2025</li>
                  <li className="hover:underline cursor-pointer">June 2025</li>
                  <li className="hover:underline cursor-pointer">July 2021</li>
                  <li className="hover:underline cursor-pointer">May 2021</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-base mb-3">Categories</p>
                <ul className="text-xs space-y-1.5 font-semibold">
                  <li className="hover:underline cursor-pointer">Grade-07</li>
                  <li className="hover:underline cursor-pointer">Uncategorized</li>
                </ul>
              </div>
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
