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

  // Data Editorial & Berita
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
      {/* 2. EDITORIAL, BERITA TERBARU, PPDB & BLOG */}
      {/* ========================================= */}
      <section className="max-w-7xl mx-auto px-4 mb-12 shrink-0">
        <div className="flex flex-col space-y-8">
          {editorials.map((item, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {/* KIRI: EDITORIAL */}
              <div className="lg:col-span-2 flex flex-col md:flex-row gap-5 items-start">
                <div className="w-full md:w-[26%] lg:w-[30%] aspect-square relative rounded-xl overflow-hidden shadow-sm border border-slate-200 shrink-0">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <p className="text-amber-400 font-bold text-xs sm:text-sm leading-tight mb-1">{item.name}</p>
                    <p className="text-white text-[10px] sm:text-xs">{item.role}</p>
                  </div>
                </div>
                <div className="w-full md:w-[74%] lg:w-[70%] flex flex-col space-y-3 md:h-[320px] lg:h-[368px]">
                  <div className="bg-[#E3DCc3] p-4 rounded-xl shadow-sm shrink-0">
                    <h3 className="text-red-950 font-bold text-lg sm:text-xl">{item.heading}</h3>
                  </div>
                  <div className="bg-[#E3DCc3] p-4 sm:p-5 rounded-xl shadow-sm flex-1 flex flex-col justify-between items-start">
                    <p className="text-slate-700 text-sm leading-relaxed text-justify mb-4">{item.text}</p>
                    <button className="bg-red-900 hover:bg-red-800 text-white font-bold py-2 px-6 rounded-lg transition-colors text-sm shadow-sm">View All</button>
                  </div>
                </div>
              </div>

              {/* KANAN: LATEST NEWS, PPDB, BLOG GURU */}
              <div className="lg:col-span-1 flex flex-col h-full">
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
                            <p className="text-sm font-bold text-red-950 leading-tight line-clamp-2">{news.title}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {index === 1 && (
                  <div className="flex-1 w-full bg-gradient-to-br from-red-900 to-red-950 text-white rounded-xl flex flex-col justify-center p-6 sm:p-8 shadow-md">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-amber-400 text-slate-900 px-3 py-1 rounded w-max mb-3">Info Pendaftaran</span>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 leading-tight">PPDB Tahun Pelajaran 2026/2027</h3>
                    <p className="text-red-100 text-xs sm:text-sm leading-relaxed mb-6">Pendaftaran siswa baru tingkat SMP dan SMA telah dibuka. Bergabunglah bersama keluarga besar Advent Batam.</p>
                    <Link href="/ppdb" className="inline-block w-full text-center bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold py-3 px-4 rounded-xl text-sm transition-colors shadow">Informasi & Pendaftaran</Link>
                  </div>
                )}
                {index === 2 && (
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-5 h-7 shrink-0">
                      <span className="bg-slate-800 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs">💬</span>
                      <h2 className="font-bold text-xl text-red-900">Blog Guru</h2>
                    </div>
                    <div className="space-y-4 flex-1 flex flex-col justify-between">
                      {blogGuru.map((blog, idx) => (
                        <div key={idx} className="flex gap-4 items-center">
                          <div className="w-24 h-20 sm:w-28 sm:h-24 shrink-0 rounded-xl overflow-hidden border border-slate-300 shadow-sm">
                            <img src={blog.img} alt="Thumb" className="w-full h-full object-cover" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <p className="text-xs text-slate-600 mb-1">{blog.date}</p>
                            <p className="text-sm font-bold text-red-900 leading-tight line-clamp-2">{blog.title}</p>
                          </div>
                        </div>
                      ))}
                    </div>
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
      <section className="w-full bg-[#D97706] text-white py-10 px-4 text-center shrink-0">
        <h2 className="font-bold text-lg sm:text-xl mb-6 tracking-wide">Petuah Bijaksana</h2>
        <p className="max-w-4xl mx-auto text-base sm:text-lg italic leading-relaxed mb-6 font-medium">
          Nummus in Croesi divitiis obscuratur, pars est tamen divitiarum. Quamvis enim depravatae non sint, pravae tamen esse possunt
        </p>
        <p className="text-sm">sumber : <span className="font-bold">Konsep Otomatis</span></p>
      </section>

      {/* ========================================= */}
      {/* 4. BLOK KONTEN BAWAH (Beige/Krem)         */}
      {/* ========================================= */}
      <section className="w-full bg-[#E5DCC3] py-10 px-4 flex-1">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* --- BARIS 1: Guru Kreatif, Pengumuman, Agenda, Blog Guru --- */}
          <div className="mb-10">
            <h2 className="font-bold text-sm sm:text-base mb-6 flex items-center gap-2 text-slate-800 uppercase">
              <span className="bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">👨‍🏫</span>
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
                  <img src={`/slider-${(index % 3) + 1}.jpg`} alt={guru.name} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pengumuman */}
            <div>
              <h3 className="flex items-center text-red-950 font-bold mb-4 text-lg"><span className="mr-2 text-xl">📢</span> Pengumuman</h3>
              <p className="text-[11px] text-slate-500 uppercase font-semibold mb-1">TERBIT : Tuesday, 11 July 2017</p>
              <p className="font-bold text-red-900 text-sm mb-3 leading-tight">Pengumuman Daftar Siswa Baru Tahun 2017/2018</p>
              <div className="bg-[#DCE1C6] p-4 rounded-lg text-xs text-slate-700 text-justify mb-4 shadow-sm border border-[#C5CCAA]">
                Quia dolori non voluptas contraria est, sed doloris privatio. Omnia contraria, quos etiam insanos esse vultis. Quid Zeno? An vero displicuit ea, quae tributa est animi virtutibus tanta praestantia? Primum cur ista res digna odio est, nisi quod est turpis?..
              </div>
              <button className="bg-red-900 hover:bg-red-800 text-white text-xs font-bold px-4 py-2 rounded shadow-sm">Lihat Semua</button>
            </div>

            {/* Agenda Terbaru */}
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

            {/* Blog Guru Bawah */}
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

          {/* --- BARIS 2: Kegiatan, Fasilitas, Galeri --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-[#D5CCB3]">
            {/* Kegiatan */}
            <div>
              <h3 className="flex items-center text-red-950 font-bold mb-4 text-lg"><span className="mr-2 text-xl">⭐</span> Kegiatan</h3>
              <div className="w-full aspect-[4/3] rounded-lg overflow-hidden shadow-sm relative">
                <img src="/slider-1.jpg" alt="Kegiatan" className="w-full h-full object-cover" />
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span className="w-2 h-2 bg-white/50 rounded-full"></span>
                  <span className="w-2 h-2 bg-white/50 rounded-full"></span>
                  <span className="w-2 h-2 bg-white/50 rounded-full"></span>
                </div>
              </div>
            </div>

            {/* Fasilitas */}
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

            {/* Galeri */}
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

          {/* --- BARIS 3: Video --- */}
          <div className="pt-6 border-t border-[#D5CCB3]">
            <h3 className="text-red-950 font-bold mb-4 text-lg">Video</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((vid) => (
                <div key={vid} className="aspect-video relative rounded-lg overflow-hidden shadow-md group cursor-pointer">
                  <img src={`/slider-${vid}.jpg`} alt="Video" className="w-full h-full object-cover brightness-75 group-hover:brightness-50 transition-all" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-red-600 text-white w-12 h-8 rounded-lg flex items-center justify-center group-hover:bg-red-700 transition-colors">
                      ▶
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 right-2 text-white text-xs font-bold truncate drop-shadow-md">
                    Video Dokumentasi {vid}
                  </div>
                  <div className="absolute bottom-2 right-2 text-white text-[10px] bg-black/60 px-2 py-0.5 rounded">
                    Tonton di YouTube
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* ========================================= */}
      {/* 5. FOOTER ORANYE & KREDIT BAWAH MERAH     */}
      {/* ========================================= */}
      <footer className="w-full shrink-0">
        
        {/* Area Widget Oranye */}
        <div className="bg-[#D97706] py-12 px-4 text-white">
          <div className="max-w-7xl mx-auto flex flex-col items-start space-y-6">
            
            {/* Search */}
            <div className="w-full max-w-sm">
              <p className="font-bold text-sm italic mb-2">Search</p>
              <div className="flex">
                <input type="text" className="flex-1 p-1.5 text-slate-900 text-sm focus:outline-none" />
                <button className="bg-white text-slate-800 text-xs font-bold px-4 ml-1">Search</button>
              </div>
            </div>

            {/* Recent Posts */}
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

            {/* Recent Comments */}
            <div>
              <p className="font-bold text-base mb-3 mt-2">Recent Comments</p>
              <ul className="text-xs space-y-2 font-semibold max-w-md">
                <li className="hover:underline cursor-pointer">A WordPress Commenter on Hello world!</li>
                <li className="hover:underline cursor-pointer line-clamp-1">Cluss Creative on Seinima Sapientia Proficiscitur Aconti Copassuni</li>
                <li className="hover:underline cursor-pointer line-clamp-1">Cluss Creative on Seinima Sapientia Proficiscitur Aconti Copassuni</li>
                <li className="hover:underline cursor-pointer line-clamp-1">Cluss Creative on Seinima Sapientia Proficiscitur Aconti Copassuni</li>
              </ul>
            </div>

            {/* Archives & Categories */}
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

        {/* Baris Kredit Merah Marun (Sesuai Konteks User) */}
        <div className="bg-[#8B0000] text-white text-[10px] sm:text-xs text-center py-4 font-semibold tracking-wider">
          Developed by Ir. Budhy Prasetyo
        </div>

      </footer>

    </main>
  );
}
