"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { announcementsData, agendaData } from "../data/schoolUpdates";

export default function Home() {
  // 1. DATA 4 FOTO HERO SLIDER
  const baseSlides = [
    {
      src: "/slider-1.jpg",
      tag: "CAMPUS ENVIRONMENT",
      title: "Gedung Pembelajaran Modern & Asri SMP-SMA Advent Batam",
      desc: "Lingkungan sekolah yang representatif, aman, dan kondusif untuk menunjang tumbuh kembang karakter serta akademik peserta didik."
    },
    {
      src: "/slider-2.jpg",
      tag: "DIGITAL LEARNING & INNOVATION",
      title: "Pusat Pembelajaran Berbasis Teknologi & Literasi Digital",
      desc: "Mempersiapkan generasi masa depan yang cakap teknologi melalui fasilitas komputasi terintegrasi dan kurikulum adaptif."
    },
    {
      src: "/slider-3.jpg",
      tag: "SPIRITUAL & CHARACTER BUILDING",
      title: "Pendidikan Holistik Berlandaskan Nilai-Nilai Kristiani",
      desc: "Membina hati dan budi pekerti luhur melalui persekutuan doa, kebaktian berkala, dan pembiasaan kasih dalam keseharian."
    },
    {
      src: "/slider-1.jpg",
      tag: "STUDENT TALENTS & CO-CURRICULAR",
      title: "Eksplorasi Bakat, Prestasi Atletik, dan Jiwa Kepemimpinan",
      desc: "Mewadahi antusiasme dan daya juang siswa melalui program ekstrakurikuler dinamis serta pembinaan prestasi berstandar nasional."
    }
  ];

  const extendedSlides = [
    baseSlides[baseSlides.length - 1],
    ...baseSlides,
    baseSlides[0]
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // 2. DATA WORDS OF WISDOM
  const baseWisdomQuotes = [
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

  const extendedWisdom = [
    baseWisdomQuotes[baseWisdomQuotes.length - 1],
    ...baseWisdomQuotes,
    baseWisdomQuotes[0]
  ];

  const [wisdomIndex, setWisdomIndex] = useState(1);
  const [isWisdomTransitioning, setIsWisdomTransitioning] = useState(true);

  // 3. DATA 15 GURU KREATIF
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

  const CLONE_COUNT = 6;
  const extendedTeachers = [
    ...teachersList.slice(-CLONE_COUNT),
    ...teachersList,
    ...teachersList.slice(0, CLONE_COUNT)
  ];

  const [teacherIndex, setTeacherIndex] = useState(CLONE_COUNT);
  const [isTeacherTransitioning, setIsTeacherTransitioning] = useState(true);

  // 4. DATA ACTIVITIES (TERHUBUNG KE DETAIL KEGIATAN)
  const baseActivities = [
    {
      id: "class-meeting-porseni",
      src: "/slider-1.jpg",
      tag: "OLAHRAGA & PRESTASI",
      title: "Pekan Olahraga Antarkelas (Class Meeting)",
      desc: "Menjunjung sportivitas, kebugaran jasmani, dan daya juang tinggi antarsiswa."
    },
    {
      id: "perkemahan-latihan-kepemimpinan",
      src: "/slider-2.jpg",
      tag: "PRAMUKA & OUTDOOR",
      title: "Perkemahan & Latihan Kepemimpinan Siswa",
      desc: "Membentuk kemandirian, kekompakan tim, dan ketahanan mental di alam terbuka."
    },
    {
      id: "praktikum-komputasi-sains-cbt",
      src: "/slider-3.jpg",
      tag: "SAINS & TEKNOLOGI",
      title: "Praktikum Laboratorium Komputasi & CBT",
      desc: "Mengasah nalar analitis melalui simulasi pemrograman dan riset digital terpadu."
    },
    {
      id: "kebaktian-padang-bina-rohani",
      src: "/slider-1.jpg",
      tag: "SPIRITUAL & IBADAH",
      title: "Kebaktian Padang & Bina Rohani Siswa",
      desc: "Menjalin kebersamaan serta memperdalam karakter takut akan Tuhan sejak dini."
    },
    {
      id: "pentas-seni-paduan-suara",
      src: "/slider-2.jpg",
      tag: "SENI & KREATIVITAS",
      title: "Pentas Seni & Paduan Suara Sekolah",
      desc: "Mewadahi talenta artistik, harmoni vokal, dan kepercayaan diri di atas panggung."
    }
  ];

  const extendedActivities = [
    baseActivities[baseActivities.length - 1],
    ...baseActivities,
    baseActivities[0]
  ];

  const [activityIndex, setActivityIndex] = useState(1);
  const [isActivityTransitioning, setIsActivityTransitioning] = useState(true);

  // SLIDER UTAMA AUTO PLAY
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= extendedSlides.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    } else if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(baseSlides.length);
    }
  };

  // WORDS OF WISDOM AUTO PLAY
  useEffect(() => {
    const wisdomTimer = setInterval(() => {
      handleWisdomNext();
    }, 6000);
    return () => clearInterval(wisdomTimer);
  }, [wisdomIndex]);

  const handleWisdomNext = () => {
    setIsWisdomTransitioning(true);
    setWisdomIndex((prev) => prev + 1);
  };

  const handleWisdomPrev = () => {
    setIsWisdomTransitioning(true);
    setWisdomIndex((prev) => prev - 1);
  };

  const handleWisdomTransitionEnd = () => {
    if (wisdomIndex >= extendedWisdom.length - 1) {
      setIsWisdomTransitioning(false);
      setWisdomIndex(1);
    } else if (wisdomIndex <= 0) {
      setIsWisdomTransitioning(false);
      setWisdomIndex(baseWisdomQuotes.length);
    }
  };

  // TEACHERS SLIDER AUTO PLAY
  useEffect(() => {
    const teacherTimer = setInterval(() => {
      handleTeacherNext();
    }, 5000);
    return () => clearInterval(teacherTimer);
  }, [teacherIndex]);

  const handleTeacherNext = () => {
    setIsTeacherTransitioning(true);
    setTeacherIndex((prev) => prev + 1);
  };

  const handleTeacherPrev = () => {
    setIsTeacherTransitioning(true);
    setTeacherIndex((prev) => prev - 1);
  };

  const handleTeacherTransitionEnd = () => {
    if (teacherIndex >= teachersList.length + CLONE_COUNT) {
      setIsTeacherTransitioning(false);
      setTeacherIndex(CLONE_COUNT);
    } else if (teacherIndex <= 0) {
      setIsTeacherTransitioning(false);
      setTeacherIndex(teachersList.length);
    }
  };

  // ACTIVITIES SLIDER AUTO PLAY
  useEffect(() => {
    const activityTimer = setInterval(() => {
      handleActivityNext();
    }, 5000);
    return () => clearInterval(activityTimer);
  }, [activityIndex]);

  const handleActivityNext = () => {
    setIsActivityTransitioning(true);
    setActivityIndex((prev) => prev + 1);
  };

  const handleActivityPrev = () => {
    setIsActivityTransitioning(true);
    setActivityIndex((prev) => prev - 1);
  };

  const handleActivityTransitionEnd = () => {
    if (activityIndex >= extendedActivities.length - 1) {
      setIsActivityTransitioning(false);
      setActivityIndex(1);
    } else if (activityIndex <= 0) {
      setIsActivityTransitioning(false);
      setActivityIndex(baseActivities.length);
    }
  };

  // DATA LATEST NEWS
  const latestNews = [
    { 
      id: "ktt-g20-bali", 
      date: "Tuesday, 12 August 2025", 
      title: "KTT G20 Bali", 
      img: "/slider-1.jpg" 
    },
    { 
      id: "bab-1-badan-usaha-dalam-perekonomian", 
      date: "Tuesday, 12 August 2025", 
      title: "BAB 1 Badan Usaha dalam Perekonomian", 
      img: "/slider-2.jpg" 
    },
    { 
      id: "bab-1-informatika-dan-pembelajarannya", 
      date: "Monday, 11 August 2025", 
      title: "BAB 1 INFORMATIKA & PEMBELAJARANNYA", 
      img: "/slider-3.jpg" 
    }
  ];

  // DATA TEACHERS' BLOG
  const blogGuru = [
    { 
      id: "pemanfaatan-ai-secara-kritis-dalam-pembelajaran",
      date: "Tuesday, 08 September 2026", 
      title: "Pemanfaatan AI secara Kritis dan Bertanggung Jawab dalam Pembelajaran Siswa", 
      img: "/slider-1.jpg" 
    },
    { 
      id: "membangun-integritas-dan-literasi-sains",
      date: "Monday, 31 August 2026", 
      title: "Membangun Integritas Akademik dan Kecintaan pada Eksplorasi Sains", 
      img: "/slider-2.jpg" 
    },
    { 
      id: "metode-komunikasi-efektif-guru-dan-murid",
      date: "Friday, 21 August 2026", 
      title: "Seni Mendengar: Kunci Membina Hubungan Harmonis Guru dan Remaja di Era Digital", 
      img: "/slider-3.jpg" 
    }
  ];

  const fasilitas = [
    { title: "Ruang Laboratorium Bahasa", text: "Fasilitas audio visual interaktif untuk meningkatkan kecakapan percakapan bahasa asing peserta didik.", img: "/slider-1.jpg" },
    { title: "Sarana Olahraga & Bela Diri", text: "Mendukung kebugaran fisik, sportivitas, dan disiplin siswa melalui berbagai cabang olahraga pilihan.", img: "/slider-2.jpg" },
    { title: "Aula & Ruang Peribadatan", text: "Tempat persekutuan doa, renungan rohani harian, dan pembinaan karakter spiritual seluruh siswa.", img: "/slider-3.jpg" }
  ];

  const activeDotIndex = (currentIndex - 1 + baseSlides.length) % baseSlides.length;
  const activeWisdomDotIndex = (wisdomIndex - 1 + baseWisdomQuotes.length) % baseWisdomQuotes.length;
  const activeActivityDotIndex = (activityIndex - 1 + baseActivities.length) % baseActivities.length;

  const currentAnnouncement = announcementsData?.[0] || {
    date: "Tuesday, 08 September 2026",
    title: "Pengumuman Daftar Siswa Baru (PPDB) Tahun Pelajaran 2026/2027",
    content: "Pendaftaran Peserta Didik Baru gelombang pertama untuk jenjang SMP dan SMA Advent Batam resmi dibuka..."
  };

  const currentAgenda = agendaData?.[0] || {
    date: "Jumat - Sabtu, 18-19 September 2026",
    time: "08:00 - 15:00 WIB",
    title: "Kebaktian Padang & Bina Karakter Siswa",
    desc: "Persekutuan rohani dan pelatihan kepemimpinan luar ruang untuk mempererat persaudaraan..."
  };

  return (
    <main className="min-h-screen bg-[#F3EFE4] text-slate-900 font-sans pb-0 flex flex-col overflow-x-hidden">
      
      {/* 1. SLIDER UTAMA */}
      <section className="relative w-full max-w-7xl mx-auto mt-4 px-4 mb-10 shrink-0">
        <div className="relative w-full h-[280px] sm:h-[400px] md:h-[490px] lg:h-[540px] overflow-hidden rounded-2xl shadow-xl bg-slate-900 group">
          <div 
            className="flex w-full h-full"
            style={{ 
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: isTransitioning ? "transform 2800ms cubic-bezier(0.16, 1, 0.3, 1)" : "none"
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedSlides.map((slide, index) => (
              <div key={index} className="w-full h-full shrink-0 relative">
                <img 
                  src={slide.src} 
                  alt={slide.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>
                
                <div className="absolute bottom-10 sm:bottom-12 left-4 sm:left-10 right-4 sm:right-16 text-white text-left z-10">
                  <span className="bg-[#D97706] text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md inline-block mb-2">
                    {slide.tag}
                  </span>
                  <h2 className="text-lg sm:text-2xl md:text-3xl font-black text-white drop-shadow-md leading-tight mb-1.5 max-w-3xl">
                    {slide.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 max-w-2xl drop-shadow hidden sm:block">
                    {slide.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={handlePrev} 
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full transition-all z-20 cursor-pointer shadow-lg"
            aria-label="Previous Slide"
          >
            &#10094;
          </button>

          <button 
            onClick={handleNext} 
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full transition-all z-20 cursor-pointer shadow-lg"
            aria-label="Next Slide"
          >
            &#10095;
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            {baseSlides.map((_, index) => (
              <button 
                key={index} 
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentIndex(index + 1);
                }} 
                className={`h-2.5 rounded-full transition-all duration-700 cursor-pointer ${
                  index === activeDotIndex ? "bg-amber-400 w-8" : "bg-white/60 w-2.5 hover:bg-white"
                }`} 
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. DUA BLOK EDITORIAL */}
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
              
              <div className="flex flex-wrap gap-3">
                <Link href="/editorial-yayasan/detail" className="bg-[#8B0000] hover:bg-red-800 text-white font-bold py-2.5 px-6 rounded shadow-sm text-sm inline-block transition-colors">
                  Read More
                </Link>
                <Link href="/editorial-yayasan" className="bg-[#D97706] hover:bg-amber-700 text-white font-bold py-2.5 px-6 rounded shadow-sm text-sm inline-block transition-colors">
                  View More
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
              
              <div className="flex flex-wrap gap-3">
                <Link href="/editorial-manajer/detail" className="bg-[#8B0000] hover:bg-red-800 text-white font-bold py-2.5 px-6 rounded shadow-sm text-sm inline-block transition-colors">
                  Read More
                </Link>
                <Link href="/editorial-manajer" className="bg-[#D97706] hover:bg-amber-700 text-white font-bold py-2.5 px-6 rounded shadow-sm text-sm inline-block transition-colors">
                  View More
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. EDITORIAL KEPALA SEKOLAH & LATEST NEWS */}
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
              
              <div className="flex flex-wrap gap-3">
                <Link href="/editorial/detail" className="bg-[#8B0000] hover:bg-red-800 text-white font-bold py-2 px-6 rounded shadow-sm text-sm inline-block transition-colors">
                  Read More
                </Link>
                <Link href="/editorial" className="bg-[#D97706] hover:bg-amber-700 text-white font-bold py-2 px-6 rounded shadow-sm text-sm inline-block transition-colors">
                  View More
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
                <div key={idx} className="flex gap-4 items-center group">
                  <Link 
                    href={`/news/detail?id=${news.id}`} 
                    className="w-20 h-16 sm:w-24 sm:h-20 shrink-0 rounded-xl overflow-hidden shadow-sm bg-slate-200 block cursor-pointer"
                  >
                    <img 
                      src={news.img} 
                      alt={news.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                  </Link>

                  <div className="flex flex-col justify-center flex-1">
                    <p className="text-[10px] sm:text-xs text-slate-600 mb-1">{news.date}</p>
                    <Link href={`/news/detail?id=${news.id}`}>
                      <p className="text-xs sm:text-sm font-bold text-red-950 hover:text-[#047857] transition-colors leading-tight line-clamp-2 cursor-pointer">
                        {news.title}
                      </p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. WORDS OF WISDOM */}
      <section className="w-full bg-[#D97706] text-white py-14 px-4 shrink-0 overflow-hidden relative">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative px-8 sm:px-12">
          <h2 className="font-bold text-xl sm:text-2xl mb-8">Words of Wisdom</h2>
          
          <div className="relative w-full overflow-hidden min-h-[160px] sm:min-h-[120px] flex items-center">
            <div 
              className="flex w-full"
              style={{ 
                transform: `translateX(-${wisdomIndex * 100}%)`,
                transition: isWisdomTransitioning ? "transform 2800ms cubic-bezier(0.16, 1, 0.3, 1)" : "none"
              }}
              onTransitionEnd={handleWisdomTransitionEnd}
            >
              {extendedWisdom.map((item, index) => (
                <div key={index} className="w-full shrink-0 px-4 flex flex-col items-center justify-center">
                  <p className="font-bold text-lg sm:text-xl md:text-2xl leading-relaxed italic mb-4 max-w-3xl">
                    "{item.quote}"
                  </p>
                  <p className="text-sm font-semibold text-amber-200">
                    sumber : {item.source}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={handleWisdomPrev} 
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/50 text-white w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-full transition-all cursor-pointer shadow-md"
            aria-label="Previous Wisdom"
          >
            &#10094;
          </button>

          <button 
            onClick={handleWisdomNext} 
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/50 text-white w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-full transition-all cursor-pointer shadow-md"
            aria-label="Next Wisdom"
          >
            &#10095;
          </button>

          <div className="flex space-x-2.5 mt-8">
            {baseWisdomQuotes.map((_, index) => (
              <button 
                key={index} 
                onClick={() => {
                  setIsWisdomTransitioning(true);
                  setWisdomIndex(index + 1);
                }} 
                className={`rounded-full transition-all duration-700 cursor-pointer ${
                  index === activeWisdomDotIndex ? "w-8 h-2.5 bg-white" : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
                }`} 
                aria-label={`Go to wisdom ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. GURU KREATIF SLIDER */}
      <section className="w-full bg-[#DCC690] py-10 px-4 overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative px-2 sm:px-6">
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
          
          <div className="w-full overflow-hidden relative">
            <div 
              className="flex"
              style={{ 
                transform: `translateX(calc(-${teacherIndex} * (100% / var(--visible-teachers))))`,
                transition: isTeacherTransitioning ? "transform 2400ms cubic-bezier(0.16, 1, 0.3, 1)" : "none"
              }}
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

            <button 
              onClick={handleTeacherPrev} 
              className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/75 text-white w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full transition-all z-20 cursor-pointer shadow-md"
              aria-label="Previous Teacher"
            >
              &#10094;
            </button>

            <button 
              onClick={handleTeacherNext} 
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/75 text-white w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full transition-all z-20 cursor-pointer shadow-md"
              aria-label="Next Teacher"
            >
              &#10095;
            </button>
          </div>
        </div>
      </section>

      {/* 6. PENGUMUMAN, AGENDA, TEACHERS' BLOG */}
      <section className="w-full bg-[#E5DCC3] py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="flex flex-col h-full">
            <h3 className="flex items-center text-slate-800 font-bold mb-4 text-xl">
              <span className="bg-slate-800 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm mr-2 pb-0.5">📢</span> 
              Announcements
            </h3>
            <p className="text-[11px] text-slate-500 uppercase font-semibold mb-1">TERBIT : {currentAnnouncement.date}</p>
            <Link href="/announcements">
              <p className="font-bold text-red-900 text-sm mb-3 leading-tight hover:text-red-700 cursor-pointer">
                {currentAnnouncement.title}
              </p>
            </Link>
            <div className="bg-[#DCE1C6] p-4 rounded-lg text-xs text-slate-700 text-justify mb-4 shadow-sm border border-[#C5CCAA] line-clamp-4 flex-1">
              {currentAnnouncement.content}
            </div>
            <div>
              <Link href="/announcements" className="bg-red-900 hover:bg-red-800 text-white text-xs font-bold py-2.5 px-6 rounded shadow-sm inline-block transition-colors">
                View More
              </Link>
            </div>
          </div>

          <div className="flex flex-col h-full">
            <h3 className="flex items-center text-slate-800 font-bold mb-4 text-xl">
              <span className="bg-slate-800 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm mr-2 pb-0.5">📅</span> 
              Latest Agenda
            </h3>
            <div className="flex gap-4 items-start mb-4 flex-1">
              <div className="bg-red-900 text-white w-10 h-10 flex items-center justify-center rounded text-base font-bold shrink-0">
                18
              </div>
              <div className="flex-1">
                <Link href="/agenda">
                  <p className="font-bold text-red-900 text-sm mb-1 hover:text-red-700 cursor-pointer">
                    {currentAgenda.title}
                  </p>
                </Link>
                <p className="text-[10px] text-slate-600 mb-2">{currentAgenda.date} | {currentAgenda.time}</p>
                <div className="bg-[#DCE1C6] p-3 rounded-lg text-xs text-slate-700 shadow-sm border border-[#C5CCAA] line-clamp-3">
                  {currentAgenda.desc}
                </div>
              </div>
            </div>
            <div>
              <Link href="/agenda" className="bg-[#D97706] hover:bg-amber-700 text-white text-xs font-bold py-2.5 px-6 rounded shadow-sm inline-block transition-colors">
                View More
              </Link>
            </div>
          </div>

          <div className="flex flex-col h-full">
            <h3 className="flex items-center text-slate-800 font-bold mb-4 text-xl">
              <span className="bg-slate-800 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm mr-2 pb-0.5">💬</span> 
              Teachers' Blog
            </h3>
            <div className="space-y-4 flex-1">
              {blogGuru.map((blog, idx) => (
                <div key={idx} className="flex gap-3 items-center group">
                  <Link 
                    href={`/blog/detail?id=${blog.id}`}
                    className="w-20 h-16 shrink-0 rounded overflow-hidden shadow-sm bg-slate-200 block cursor-pointer"
                  >
                    <img src={blog.img} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </Link>
                  <div className="flex flex-col justify-center flex-1">
                    <p className="text-[10px] text-slate-500 mb-1">{blog.date}</p>
                    <Link href={`/blog/detail?id=${blog.id}`}>
                      <p className="text-xs font-bold text-red-900 group-hover:text-[#047857] transition-colors leading-tight line-clamp-2 cursor-pointer">
                        {blog.title}
                      </p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <Link href="/blog" className="bg-[#047857] hover:bg-emerald-800 text-white text-xs font-bold py-2.5 px-6 rounded shadow-sm inline-block transition-colors">
                View More
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. KEGIATAN (ACTIVITIES: FOTO & JUDUL DAPAT DIKLIK MENUJU DETAIL UTUH)     */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#DCC690] py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* ACTIVITIES */}
          <div className="flex flex-col h-full">
            <h3 className="flex items-center text-slate-800 font-bold mb-5 text-xl">
              <span className="bg-slate-800 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm mr-2 pb-0.5">★</span> 
              Activities
            </h3>
            <div className="w-full flex-1 rounded-xl overflow-hidden shadow-md relative bg-slate-900 min-h-[280px] group">
              
              {/* TRACK ACTIVITIES */}
              <div 
                className="flex w-full h-full"
                style={{ 
                  transform: `translateX(-${activityIndex * 100}%)`,
                  transition: isActivityTransitioning ? "transform 2400ms cubic-bezier(0.16, 1, 0.3, 1)" : "none"
                }}
                onTransitionEnd={handleActivityTransitionEnd}
              >
                {extendedActivities.map((act, idx) => (
                  <div key={idx} className="w-full h-full shrink-0 relative min-h-[280px]">
                    {/* Tautan Pembungkus Seluruh Foto Kegiatan */}
                    <Link href={`/activities/detail?id=${act.id}`} className="block w-full h-full cursor-pointer">
                      <img src={act.src} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={act.title} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>
                      
                      {/* LABEL & JUDUL KEGIATAN */}
                      <div className="absolute bottom-10 left-4 right-4 text-white text-left z-10">
                        <span className="bg-[#047857] text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider shadow inline-block mb-1.5">
                          {act.tag}
                        </span>
                        <h4 className="text-sm font-bold text-white leading-tight mb-1 drop-shadow line-clamp-2 hover:text-amber-300 transition-colors">
                          {act.title}
                        </h4>
                        <p className="text-[11px] text-slate-200 line-clamp-2 leading-tight">
                          {act.desc}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

              {/* TOMBOL MANUAL PREV ACTIVITIES ( < ) */}
              <button 
                onClick={handleActivityPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/75 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs transition-all z-20 cursor-pointer shadow"
                aria-label="Previous Activity"
              >
                &#10094;
              </button>

              {/* TOMBOL MANUAL NEXT ACTIVITIES ( > ) */}
              <button 
                onClick={handleActivityNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/75 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs transition-all z-20 cursor-pointer shadow"
                aria-label="Next Activity"
              >
                &#10095;
              </button>

              {/* INDIKATOR DOT BULAT */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5 z-20">
                {baseActivities.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setIsActivityTransitioning(true);
                      setActivityIndex(idx + 1);
                    }}
                    className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                      idx === activeActivityDotIndex ? "bg-amber-400 w-6" : "bg-white/50 w-2 hover:bg-white"
                    }`}
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
              Facilities
            </h3>
            <div className="flex flex-col justify-between flex-1">
              {fasilitas.map((fas, idx) => (
                <div key={idx} className="flex gap-4 items-center">
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

          {/* GALLERY */}
          <div className="flex flex-col h-full">
            <h3 className="flex items-center text-slate-800 font-bold mb-5 text-xl">
              <span className="bg-slate-800 text-white rounded-full w-7 h-7 flex items-center justify-center p-1.5 mr-2">
                <svg className="w-full h-full fill-current" viewBox="0 0 24 24"><path d="M4 4h6v6H4zm8 0h8v6h-8zm-8 8h6v8H4zm8 0h8v8h-8z"/></svg>
              </span> 
              Gallery
            </h3>
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

      {/* 8. VIDEO */}
      <section className="w-full bg-[#E5DCC3] py-10 px-4 flex-1">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-red-950 font-bold mb-4 text-lg">Video</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[1, 2, 3].map((vid) => (
              <div key={vid} className="aspect-video relative rounded-none overflow-hidden shadow-md group cursor-pointer">
                <img src={`/slider-${vid}.jpg`} alt="Video" className="w-full h-full object-cover brightness-75 group-hover:brightness-50 transition-all" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-red-600 text-white w-12 h-8 rounded-md flex items-center justify-center group-hover:bg-red-700 transition-colors">▶</div>
                </div>
                <div className="absolute top-2 left-2 right-2 text-white text-xs font-bold truncate drop-shadow-md">Video Dokumentasi {vid}</div>
                <div className="absolute bottom-2 right-2 text-white text-[10px] bg-black/60 px-2 py-0.5 rounded">Tonton di YouTube</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
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
                <li className="hover:underline cursor-pointer line-clamp-1">Cluss Creative on Pemanfaatan AI secara Kritis dalam Pembelajaran</li>
                <li className="hover:underline cursor-pointer line-clamp-1">Cluss Creative on Membangun Integritas dan Literasi Sains</li>
              </ul>
            </div>
            <div className="flex gap-16 mt-2">
              <div>
                <p className="font-bold text-base mb-3">Archives</p>
                <ul className="text-xs space-y-1.5 font-semibold">
                  <li className="hover:underline cursor-pointer">August 2026</li>
                  <li className="hover:underline cursor-pointer">June 2026</li>
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
