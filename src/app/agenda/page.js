"use client";

import { useState } from "react";
import Link from "next/link";
import { agendaData } from "../../data/schoolUpdates";

export default function AgendaPage() {
  const allAgenda = agendaData || [
    {
      id: "pts-ganjil-2026-2027",
      title: "Pelaksanaan Ujian Tengah Semester (PTS) Ganjil 2026/2027",
      date: "14 - 18 September 2026",
      time: "07:30 - 12:00 WIB",
      img: "/slider-1.jpg",
      desc: "Diinformasikan kepada seluruh siswa siswi SMP dan SMA Advent Batam bahwa Ujian Tengah Semester (PTS) Ganjil akan diselenggarakan pada pertengahan bulan September. Diharapkan seluruh siswa mempersiapkan diri dengan baik materi yang telah diajarkan..."
    },
    {
      id: "upacara-hari-guru-nasional-2026",
      title: "Upacara dan Perayaan Hari Guru Nasional 2026",
      date: "Wednesday, 25 November 2026",
      time: "07:00 - Selesai",
      img: "/slider-2.jpg",
      desc: "Sebagai bentuk penghormatan dan apresiasi kepada para pahlawan tanpa tanda jasa, OSIS SMP dan SMA Advent Batam akan menyelenggarakan upacara bendera khusus dilanjutkan dengan acara ramah tamah, persembahan lagu, dan pentas seni kecil dari perwakilan kelas..."
    },
    {
      id: "pembagian-rapor-semester-ganjil",
      title: "Pembagian Rapor Semester Ganjil dan Rapat Wali Murid",
      date: "Friday, 18 December 2026",
      time: "08:00 - 11:30 WIB",
      img: "/slider-3.jpg",
      desc: "Puncak evaluasi belajar siswa selama satu semester akan ditandai dengan penyerahan Buku Laporan Hasil Belajar (Rapor). Kami memohon kehadiran Bapak/Ibu wali murid sesuai dengan jadwal sesi yang akan dibagikan oleh masing-masing wali kelas..."
    },
    {
      id: "class-meeting-dan-porseni",
      title: "Class Meeting & Pekan Olahraga dan Seni (Porseni)",
      date: "21 - 23 December 2026",
      time: "08:00 - 14:00 WIB",
      img: "/slider-1.jpg",
      desc: "Untuk menyegarkan pikiran siswa pasca ujian semester, sekolah mengadakan kegiatan Class Meeting yang berisi berbagai perlombaan olahraga (futsal, basket, tarik tambang) dan seni antarkelas. Mari junjung tinggi sportivitas dan jalin keakraban antar siswa..."
    },
    {
      id: "kebaktian-padang-retreat-spiritual",
      title: "Kebaktian Padang & Bina Karakter Siswa",
      date: "18 - 19 September 2026",
      time: "08:00 - 15:00 WIB",
      img: "/slider-2.jpg",
      desc: "Persekutuan rohani dan pelatihan kepemimpinan luar ruang untuk mempererat persaudaraan dan ketahanan mental siswa di Kawasan Agrowisata Marina Batam."
    },
    {
      id: "donor-darah-dan-bakti-sosial",
      title: "Aksi Donor Darah Kemanusiaan YPAB",
      date: "Thursday, 01 October 2026",
      time: "08:30 - 14:00 WIB",
      img: "/slider-3.jpg",
      desc: "Kegiatan bakti sosial donor darah bekerja sama dengan PMI Kota Batam yang terbuka untuk umum, guru, dan para orang tua murid."
    },
    {
      id: "advent-education-art-expo",
      title: "Advent Batam Education & Art Expo 2026",
      date: "Thursday, 15 October 2026",
      time: "08:00 - 16:00 WIB",
      img: "/slider-1.jpg",
      desc: "Pameran proyek karya seni rupa, kerajinan tangan daur ulang, dan stan mini kewirausahaan mandiri hasil kreativitas siswa."
    }
  ];

  // Batasi tampilan awal maksimal 4 agenda
  const [visibleCount, setVisibleCount] = useState(4);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const displayedList = allAgenda.slice(0, visibleCount);

  return (
    <main className="min-h-screen bg-[#F3EFE4] font-sans flex flex-col text-slate-800">
      {/* BREADCRUMB & HEADER */}
      <section className="w-full pt-8 pb-4 px-4 sm:px-8 max-w-7xl mx-auto shrink-0">
        <div className="text-xs text-slate-600 font-semibold mb-4 flex items-center gap-1 flex-wrap">
          <span>You are here :</span>
          <Link href="/" className="text-[#047857] hover:underline ml-1">🏠 Home</Link>
          <span>-</span>
          <span className="text-slate-500">Agenda</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-[#1e293b] tracking-wider uppercase mb-8">
          SCHOOL AGENDA
        </h1>
      </section>

      {/* KONTEN UTAMA: 2 KOLOM */}
      <section className="w-full flex-1 pb-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* KOLOM KIRI: DAFTAR AGENDA (MAKSIMAL 4 DI AWAL) */}
          <div className="lg:col-span-8 space-y-8">
            {displayedList.map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-5 items-start group">
                
                {/* 1. THUMBNAIL FOTO AGENDA */}
                <div className="w-full sm:w-[220px] aspect-[4/3] bg-slate-200 rounded-lg overflow-hidden shrink-0 shadow-sm relative">
                  <img 
                    src={item.img || "/slider-1.jpg"} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 bg-[#1e293b]/80 text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                    <span>📅</span> Event
                  </div>
                </div>

                {/* 2. TEKS DETAIL AGENDA */}
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-[11px] text-slate-500 font-semibold mb-1 flex-wrap">
                    <span>📅 {item.date}</span>
                    <span>⏰ {item.time}</span>
                  </div>
                  
                  {/* JUDUL */}
                  <h2 className="text-base sm:text-lg font-bold text-[#047857] group-hover:text-emerald-800 transition-colors leading-snug mb-2 cursor-pointer">
                    {item.title}
                  </h2>

                  {/* DESKRIPSI LEAD */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify line-clamp-4">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* TOMBOL VIEW MORE AGENDA (DINAMIS & AMAN DARI ERROR 404) */}
            {visibleCount < allAgenda.length && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleViewMore}
                  className="bg-[#D97706] hover:bg-amber-700 text-white font-bold text-xs sm:text-sm py-2.5 px-6 rounded-md shadow transition-all transform hover:scale-105 flex items-center gap-2 cursor-pointer"
                >
                  <span>View More Agenda</span>
                  <span>→</span>
                </button>
              </div>
            )}
          </div>

          {/* KOLOM KANAN: SIDEBAR */}
          <div className="lg:col-span-4 lg:border-l lg:border-slate-300 lg:pl-8 space-y-6">
            
            {/* CARI AGENDA */}
            <div className="bg-[#EFEAD8] p-5 rounded-xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-sm text-slate-800 mb-3">Cari Agenda</h3>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Kata kunci..." 
                  className="flex-1 bg-white px-3 py-1.5 text-xs rounded border border-slate-300 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                />
                <button className="bg-[#047857] hover:bg-emerald-800 text-white text-xs font-bold px-4 py-1.5 rounded transition-colors cursor-pointer">
                  Cari
                </button>
              </div>
            </div>

            {/* ARSIP AGENDA */}
            <div className="bg-[#EFEAD8] p-5 rounded-xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-sm text-slate-800 mb-3">Arsip Agenda</h3>
              <ul className="text-xs space-y-2 text-slate-700 font-medium">
                <li className="flex justify-between hover:text-[#047857] cursor-pointer">
                  <span>December 2026</span>
                  <span className="text-slate-500">(2)</span>
                </li>
                <li className="flex justify-between hover:text-[#047857] cursor-pointer">
                  <span>November 2026</span>
                  <span className="text-slate-500">(1)</span>
                </li>
                <li className="flex justify-between hover:text-[#047857] cursor-pointer">
                  <span>September 2026</span>
                  <span className="text-slate-500">(2)</span>
                </li>
                <li className="flex justify-between hover:text-[#047857] cursor-pointer">
                  <span>October 2026</span>
                  <span className="text-slate-500">(2)</span>
                </li>
              </ul>
            </div>

            {/* IDENTITAS SEKOLAH */}
            <div className="pt-2 border-t border-dashed border-slate-300 text-xs text-slate-700 space-y-3">
              <div>
                <h4 className="font-black text-sm text-slate-900 tracking-wide">SMP - SMA ADVENT BATAM</h4>
                <p className="text-[11px] text-slate-600">Prof. DR. Hamka St., Kav 4, Kibing Village, Batu Aji District</p>
              </div>

              <div className="space-y-1 pt-1 text-[11px]">
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-600">NSPN</span>
                  <span className="font-bold text-slate-900">70002994</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="font-semibold text-slate-600">Principal</span>
                  <span className="font-bold text-slate-900 text-right">Tona Leon Ferdinan Situmorang, S.Pd.,MA.,ED.</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-600">Phone</span>
                  <span className="font-bold text-[#047857]">0778-363082</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-600">Email</span>
                  <span className="font-bold text-slate-900">info@adventbatam.sch.id</span>
                </div>
              </div>

              <div className="pt-3 border-t border-dashed border-slate-300 space-y-1.5 text-xs font-semibold">
                <div className="flex items-center justify-between text-slate-600 hover:text-blue-700 cursor-pointer">
                  <span>Facebook</span>
                  <span>f</span>
                </div>
                <div className="flex items-center justify-between text-slate-600 hover:text-pink-700 cursor-pointer">
                  <span>Instagram</span>
                  <span>📷</span>
                </div>
                <div className="flex items-center justify-between text-slate-600 hover:text-red-700 cursor-pointer">
                  <span>YouTube</span>
                  <span>▶</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#8B0000] text-white text-[10px] sm:text-xs text-center py-4 font-semibold shrink-0 mt-auto">
        Developed by Ir. Budhy Prasetyo
      </footer>
    </main>
  );
}
