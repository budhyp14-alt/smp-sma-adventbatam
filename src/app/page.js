"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  // DATA SLIDER UTAMA
  const images = [
    "/slider-1.jpg",
    "/slider-2.jpg",
    "/slider-3.jpg"
  ];

  // DATA ACTIVITIES (5 Foto Kegiatan)
  const activityImages = [
    "/slider-1.jpg",
    "/slider-2.jpg",
    "/slider-3.jpg",
    "/slider-1.jpg",
    "/slider-2.jpg"
  ];

  // DATA WORDS OF WISDOM
  const wisdomQuotes = [
    {
      quote: "Ketika engkau memutuskan untuk mengampuni dengan setulusnya maka engkau meraih kemenangan mendapatkan sifat yang makin mirip sifat Tuhan",
      source: "Menang tanpa membalas"
    },
    {
      quote: "Pendidikan adalah senjata paling mematikan yang bisa Anda gunakan untuk mengubah dunia.",
      source: "Nelson Mandela"
    },
    {
      quote: "Tujuan pendidikan itu untuk mempertajam kecerdasan, memperkukuh kemauan serta memperhalus perasaan.",
      source: "Tan Malaka"
    },
    {
      quote: "Hiduplah seolah-olah Anda akan mati besok. Belajarlah seolah-olah Anda akan hidup selamanya.",
      source: "Mahatma Gandhi"
    },
    {
      quote: "Kesuksesan bukanlah kunci kebahagiaan. Kebahagiaanlah kunci kesuksesan. Jika Anda mencintai apa yang Anda kerjakan, Anda akan sukses.",
      source: "Albert Schweitzer"
    }
  ];

  // DATA 15 GURU KREATIF
  const teachersList = [
    { name: "Renita Pandiangan, S.Pd", role: "Guru Bhs. Ind.", img: "/slider-1.jpg" },
    { name: "Herman, S.Pd", role: "Guru Conversation", img: "/slider-2.jpg" },
    { name: "Kumar, S.Pd", role: "Guru Conversation", img: "/slider-3.jpg" },
    { name: "Tiurma Febryanti, S.Pd", role: "Guru IPA Fisika", img: "/slider-1.jpg" },
    { name: "Ir. Budhy Prasetyo", role: "Guru Informatika", img: "/slider-2.jpg" },
    { name: "Asna Rumondang S., S.Pd.", role: "Guru", img: "/slider-3.jpg" },
    { name: "Lourens Syahartian, S.Pd", role: "Guru Bhs. Inggris", img: "/slider-1.jpg" },
    { name: "Ernast Simanjuntak, S.Pd", role: "Guru Sosiologi", img: "/slider-2.jpg" },
    { name: "Sarlen Naibaho, S.Pd., M.Pd.", role: "Guru IPS", img: "/slider-3.jpg" },
    { name: "Endang Januar S., S.Kom", role: "Bendahara BOS", img: "/slider-1.jpg" },
    { name: "Celli Sihombing, S.Pd", role: "Guru IPA Kimia", img: "/slider-2.jpg" },
    { name: "Mawar Indah Sinurat, S.Pd", role: "Guru IPA Biologi", img: "/slider-3.jpg" },
    { name: "Drs. Andi Mulyono", role: "Guru Matematika", img: "/slider-1.jpg" },
    { name: "Rini Wulandari, S.Pd", role: "Guru Sejarah", img: "/slider-2.jpg" },
    { name: "Kevin Pratama, S.Or", role: "Guru Penjaskes", img: "/slider-3.jpg" }
  ];

  const extendedTeachers = [...teachersList, ...teachersList.slice(0, 6)];

  // STATE MANAJEMEN
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wisdomIndex, setWisdomIndex] = useState(0);
  const [teacherIndex, setTeacherIndex] = useState(0);
  const [activityIndex, setActivityIndex] = useState(0);
  const [isTeacherTransitioning, setIsTeacherTransitioning] = useState(true);

  // EFEK SLIDER UTAMA
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  // EFEK SLIDER WORDS OF WISDOM
  useEffect(() => {
    const wisdomTimer = setInterval(() => {
      setWisdomIndex((prevIndex) => (prevIndex + 1) % wisdomQuotes.length);
    }, 5000);
    return () => clearInterval(wisdomTimer);
  }, [wisdomQuotes.length]);

  // EFEK SLIDER ACTIVITIES
  useEffect(() => {
    const activityTimer = setInterval(() => {
      setActivityIndex((prevIndex) => (prevIndex + 1) % activityImages.length);
    }, 3500);
    return () => clearInterval(activityTimer);
  }, [activityImages.length]);

  // EFEK SLIDER 15 GURU
  useEffect(() => {
    const teacherTimer = setInterval(() => {
      setIsTeacherTransitioning(true);
      setTeacherIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(teacherTimer);
  }, []);

  const handleTeacherTransitionEnd = () => {
    if (teacherIndex >= teachersList.length) {
      setIsTeacherTransitioning(false);
      setTeacherIndex(0);
    }
  };

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
    { title: "Ruang Laboratorium Bahasa", text: "An potest, inquit ille, quicquam esse suavius quam..", img: "/slider-1.jpg" },
    { title: "Karate, Judo, Silat", text: "An potest, inquit ille, quicquam esse suavius quam..", img: "/slider-2.jpg" },
    { title: "Masjid At-Taqwa", text: "An potest, inquit ille, quicquam esse suavius quam..", img: "/slider-3.jpg" }
  ];

  return (
    <main className="min-h-screen bg-[#F3EFE4] text-slate-900 font-sans pb-0 flex flex-col overflow-x-hidden">
      
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
          <div className="flex flex-col sm:flex-row gap-5">
            <Link href="/editorial-yayasan/detail" className="w-full sm:w-[40%] aspect-[4/5] relative rounded-xl overflow-hidden shadow-sm shrink-0 block group cursor-pointer">
              <img src="/slider-1.jpg" alt="Rima Melati Hutagalung" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <p className="text-[#E5B55C] font-bold text-sm sm:text-base leading-tight mb-1 group-hover:text-amber-300 transition-colors">Rima Melati Hutagalung</p>
                <p className="text-[#E5B55C] text-xs sm:text-sm">Chairman of the Foundation</p>
              </div>
            </Link>
            <div className="w-full sm:w-[60%] flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#4D524F] text-white rounded-full w-7 h-7 flex items-center justify-center text-[10px] tracking-widest">•••</span>
                <h2 className="font-bold text-lg text-[#4D524F]">Foundation Chairman's Editorial</h2>
              </div>
              <Link href="/editorial-yayasan/detail" className="bg-[#E2DECA] p-4 rounded-t-xl shadow-sm mb-2 hover:bg-[#d6d1bc] transition-colors cursor-pointer block">
                <h3 className="text-red-900 font-bold text-base sm:text-lg leading-snug">Visi Jangka Panjang YPAB</h3>
              </Link>
              <Link href="/editorial-yayasan/detail" className="bg-[#E2DECA] p-4 rounded-b-xl shadow-sm mb-4 flex-1 hover:bg-[#d6d1bc] transition-colors cursor-pointer block">
                <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed text-justify line-clamp-6">Yayasan Pendidikan Advent Batam terus berkomitmen untuk memberikan standar pendidikan terbaik yang selaras dengan nilai-nilai moral dan spiritual bagi generasi masa depan...</p>
              </Link>
              <div>
                <Link href="/editorial-yayasan" className="bg-[#8B0000] hover:bg-red-800 text-white font-bold py-2.5 px-6 rounded shadow-sm text-sm inline-block">
                  View All
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-5">
            <Link href="/editorial-manajer/detail" className="w-full sm:w-[40%] aspect-[4/5] relative rounded-xl overflow-hidden shadow-sm shrink-0 block group cursor-pointer">
              <img src="/slider-2.jpg" alt="Samuel Simatupang" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <p className="text-[#E5B55C] font-bold text-sm sm:text-base leading-tight mb-1 group-hover:text-amber-300 transition-colors">Samuel Simatupang</p>
                <p className="text-[#E5B55C] text-xs sm:text-sm">Operations Manager</p>
              </div>
            </Link>
            <div className="w-full sm:w-[60%] flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-[#4D524F] text-white rounded-full w-7 h-7 flex items-center justify-center text-[10px] tracking-widest">•••</span>
                <h2 className="font-bold text-lg text-[#4D524F]">Operations Manager's Editorial</h2>
              </div>
              <Link href="/editorial-manajer/detail" className="bg-[#E2DECA] p-4 rounded-t-xl shadow-sm mb-2 hover:bg-[#d6d1bc] transition-colors cursor-pointer block">
                <h3 className="text-red-900 font-bold text-base sm:text-lg leading-snug">Peningkatan Fasilitas Berkelanjutan</h3>
              </Link>
              <Link href="/editorial-manajer/detail" className="bg-[#E2DECA] p-4 rounded-b-xl shadow-sm mb-4 flex-1 hover:bg-[#d6d1bc] transition-colors cursor-pointer block">
                <p className="text-slate-600 text-[13px] sm:text-sm leading-relaxed text-justify line-clamp-6">Pengembangan infrastruktur sekolah menjadi fokus utama kami tahun ini, untuk memastikan kegiatan belajar mengajar berjalan optimal dan nyaman bagi seluruh siswa...</p>
              </Link>
              <div>
                <Link href="/editorial-manajer" className="bg-[#8B0000] hover:bg-red-800 text-white font-bold py-2.5 px-6 rounded shadow-sm text-sm inline-block">
                  View All
                </Link>
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
          <div className="lg:col-span-2 flex flex-col md:flex-row gap-5 items-start">
            <Link href="/editorial/detail" className="w-full md:w-[35%] lg:w-[30%] aspect-square relative rounded-xl overflow-hidden shadow-sm shrink-0 block group cursor-pointer">
              <img src="/slider-3.jpg" alt="Tona Leon F. Situmorang" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <p className="text-[#E5B55C] font-bold text-xs sm:text-sm leading-tight mb-1 group-hover:text-amber-300 transition-colors">Tona Leon F. Situmorang, S.Pd.,MA.,ED.</p>
                <p className="text-[#E5B55C] text-[10px] sm:text-xs">Principal</p>
              </div>
            </Link>
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

      {/* ========================================= */}
      {/* 4. WORDS OF WISDOM (SLIDER 5 QUOTES)      */}
      {/* ========================================= */}
      <section className="w-full bg-[#D97706] text-white py-14 px-4 shrink-0">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <h2 className="font-bold text-xl sm:text-2xl mb-8">Words of Wisdom</h2>
          <div className="relative w-full h-[160px] sm:h-[120px] flex items-center justify-center overflow-hidden">
            {wisdomQuotes.map((item, index) => (
              <div 
                key={index}
                className={`absolute w-full px-4 transition-all duration-700 ease-in-out ${
                  index === wisdomIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12 pointer-events-none'
                }`}
              >
                <p className="font-bold text-lg sm:text-xl md:text-2xl leading-relaxed italic mb-4">
                  "{item.quote}"
                </p>
                <p className="text-sm font-semibold text-amber-200">
                  sumber : {item.source}
                </p>
              </div>
            ))}
          </div>
          <div className="flex space-x-2.5 mt-8">
            {wisdomQuotes.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setWisdomIndex(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === wisdomIndex ? "w-8 h-2.5 bg-white" : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
                }`} 
                aria-label={`Go to wisdom ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 5. GURU KREATIF SLIDER (Krem Gelap)       */}
      {/* ========================================= */}
      <section className="w-full bg-[#DCC690] py-10 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-bold text-sm sm:text-base mb-6 flex items-center gap-2 text-slate-800 uppercase">
            <span className="bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">👨‍🏫</span>
            CREATIVE - INNOVATIVE TEACHERS
          </h2>
          <style dangerouslySetInnerHTML={{ __html: `
            :root { --visible-teachers: 2; }
            @media (min-width: 640px) { :root { --visible-teachers: 3; } }
            @media (min-width: 1024px) { :root { --visible-teachers: 6; } }
            .teacher-slide { flex: 0 0 calc(100% / var(--visible-teachers)); max-width: calc(100% / var(--visible-teachers)); }
          `}} />
          <div className="w-full overflow-hidden">
            <div 
              className={`flex ${isTeacherTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
              style={{ transform: `translateX(calc(-${teacherIndex} * (100% / var(--visible-teachers))))` }}
              onTransitionEnd={handleTeacherTransitionEnd}
            >
              {extendedTeachers.map((guru, index) => (
                <div key={index} className="teacher-slide px-1.5 sm:px-2 pb-2">
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-slate-400 shadow-md bg-slate-300 group cursor-pointer hover:-translate-y-1 transition-all duration-300">
                    <img src={guru.img} alt={guru.name} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full p-2 sm:p-3 text-white text-[10px] sm:text-xs leading-tight">
                      <p className="font-semibold text-white/90">{guru.role}</p>
                      <p className="font-bold mt-0.5 text-amber-300 drop-shadow">{guru.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 6. PENGUMUMAN, AGENDA, BLOG (Krem Terang) */}
      {/* ========================================= */}
      <section className="w-full bg-[#E5DCC3] py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="flex items-center text-slate-800 font-bold mb-4 text-xl">
              <span className="bg-slate-800 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm mr-2 pb-0.5">📢</span> 
              Announcements
            </h3>
            <p className="text-[11px] text-slate-500 uppercase font-semibold mb-1">TERBIT : Tuesday, 11 July 2017</p>
            <p className="font-bold text-red-900 text-sm mb-3 leading-tight">Pengumuman Daftar Siswa Baru Tahun 2017/2018</p>
            <div className="bg-[#DCE1C6] p-4 rounded-lg text-xs text-slate-700 text-justify mb-4 shadow-sm border border-[#C5CCAA]">
              Quia dolori non voluptas contraria est, sed doloris privatio. Omnia contraria, quos etiam insanos esse vultis. Quid Zeno? An vero displicuit ea, quae tributa est animi virtutibus tanta praestantia? Primum cur ista res digna odio est, nisi quod est turpis?..
            </div>
            <button className="bg-red-900 hover:bg-red-800 text-white text-xs font-bold px-4 py-2 rounded shadow-sm">View All</button>
          </div>
          <div>
            <h3 className="flex items-center text-slate-800 font-bold mb-4 text-xl">
              <span className="bg-slate-800 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm mr-2 pb-0.5">📅</span> 
              Latest Agenda
            </h3>
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
            <h3 className="flex items-center text-slate-800 font-bold mb-4 text-xl">
              <span className="bg-slate-800 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm mr-2 pb-0.5">💬</span> 
              Teachers' Blog
            </h3>
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
      </section>

      {/* ========================================= */}
      {/* 7. KEGIATAN, FASILITAS, GALERI (Krem Gelap)*/}
      {/* ========================================= */}
      <section className="w-full bg-[#DCC690] py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* ACTIVITIES SLIDER (Single Full Image) */}
          <div className="flex flex-col h-full">
            <h3 className="flex items-center text-slate-800 font-bold mb-5 text-xl">
              <span className="bg-slate-800 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm mr-2 pb-0.5">★</span> 
              Kegiatan
            </h3>
            <div className="w-full flex-1 rounded-lg overflow-hidden shadow-sm relative bg-slate-800 min-h-[260px]">
              {activityImages.map((src, idx) => (
                <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === activityIndex ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                  <img src={src} className="w-full h-full object-cover" alt={`Kegiatan ${idx + 1}`} />
                </div>
              ))}
              {/* Dots Indicator di Tengah Bawah */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {activityImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivityIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full shadow transition-all ${idx === activityIndex ? "bg-white" : "bg-white/50 hover:bg-white/80"}`}
                    aria-label={`Go to activity ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* FACILITIES */}
          <div className="flex flex-col h-full">
            <h3 className="flex items-center text-slate-800 font-bold mb-5 text-xl">
              <span className="bg-slate-800 text-white rounded-full w-7 h-7 flex items-center justify-center text-lg font-bold pb-0.5 mr-2">+</span> 
              Fasilitas
            </h3>
            {/* Menggunakan flex dan justify-between agar rata atas bawah */}
            <div className="flex flex-col justify-between flex-1">
              {fasilitas.map((fas, idx) => (
                <div key={idx} className="flex gap-4 items-center">
                  {/* Foto Thumbnail Fasilitas - diperkecil (w-[28%]) agar jaraknya lega */}
                  <div className="w-[28%] lg:w-[30%] aspect-[4/3] shrink-0 rounded-md overflow-hidden shadow-sm">
                    <img src={fas.img} alt={fas.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-center flex-1">
                    <p className="text-sm font-bold text-red-900 leading-tight mb-1">{fas.title}</p>
                    <p className="text-[11px] sm:text-xs text-slate-700 leading-tight">{fas.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GALLERY (9 FOTO GRID 3x3) */}
          <div className="flex flex-col h-full">
            <h3 className="flex items-center text-slate-800 font-bold mb-5 text-xl">
              <span className="bg-slate-800 text-white rounded-full w-7 h-7 flex items-center justify-center p-1.5 mr-2">
                <svg className="w-full h-full fill-current" viewBox="0 0 24 24"><path d="M4 4h6v6H4zm8 0h8v6h-8zm-8 8h6v8H4zm8 0h8v8h-8z"/></svg>
              </span> 
              Galeri
            </h3>
            {/* Gap diperbesar (gap-4 lg:gap-5) agar thumbnail mengecil proporsional */}
            <div className="grid grid-cols-3 gap-4 lg:gap-5 flex-1 content-between">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <div key={num} className="w-full aspect-[4/3] rounded-md overflow-hidden shadow-sm">
                  <img src={`/slider-${(num % 3) + 1}.jpg`} alt={`Galeri ${num}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer" />
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* ========================================= */}
      {/* 8. VIDEO (Krem Terang)                    */}
      {/* ========================================= */}
      <section className="w-full bg-[#E5DCC3] py-10 px-4 flex-1">
        <div className="max-w-7xl mx-auto">
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
      </section>

      {/* ========================================= */}
      {/* 9. FOOTER ORANYE & KREDIT BAWAH MERAH     */}
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
