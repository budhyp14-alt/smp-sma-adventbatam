"use client";

import { useState } from "react";
import Link from "next/link";
import { announcementsData } from "../../data/schoolUpdates";

export default function AnnouncementsPage() {
  // Ambil data pengumuman (7 item dari data terpusat)
  const allAnnouncements = announcementsData || [
    {
      id: "pengumuman-daftar-siswa-baru-2026-2027",
      title: "Pengumuman Pendaftaran Peserta Didik Baru (PPDB) Tahun Ajaran 2026/2027",
      date: "Tuesday, 25 Aug 2026, 08:00 WIB",
      img: "/slider-1.jpg",
      content: "Diberitahukan kepada seluruh calon peserta didik dan orang tua/wali, bahwa pendaftaran siswa baru tingkat SMP dan SMA Advent Batam untuk gelombang pertama telah resmi dibuka. Silakan melengkapi berkas pendaftaran melalui portal PPDB online atau langsung ke kantor sekretariat panitia."
    },
    {
      id: "jadwal-pengambilan-rapor-semester-genap",
      title: "Jadwal Pengambilan Rapor Semester Genap dan Pertemuan Wali Murid",
      date: "Monday, 15 Jun 2026, 10:30 WIB",
      img: "/slider-2.jpg",
      content: "Menjelang akhir tahun ajaran, kami mengundang Bapak/Ibu wali murid untuk hadir dalam acara penyerahan rapor hasil evaluasi belajar siswa. Acara akan dilaksanakan secara bergiliran untuk mematuhi protokol kenyamanan bersama di aula utama sekolah."
    },
    {
      id: "pemberitahuan-libur-nasional-cuti-bersama",
      title: "Pemberitahuan Libur Nasional dan Cuti Bersama Hari Raya",
      date: "Wednesday, 20 May 2026, 14:15 WIB",
      img: "/slider-3.jpg",
      content: "Berdasarkan kalender akademik dan ketetapan pemerintah pusat, kegiatan belajar mengajar (KBM) akan diliburkan sementara waktu. Seluruh aktivitas KBM akan kembali aktif normal sesuai jadwal terlampir."
    },
    {
      id: "pembaruan-tata-tertib-ketentuan-seragam",
      title: "Pembaruan Tata Tertib dan Ketentuan Seragam Sekolah",
      date: "Thursday, 12 Mar 2026, 09:00 WIB",
      img: "/slider-1.jpg",
      content: "Dalam rangka meningkatkan kedisiplinan dan kerapian peserta didik, pihak manajemen sekolah telah memperbarui beberapa poin terkait standar penggunaan seragam harian dan seragam olahraga. Harap diperhatikan dengan saksama."
    },
    {
      id: "jadwal-penilaian-tengah-semester-ganjil",
      title: "Jadwal Pelaksanaan Penilaian Tengah Semester (PTS) Berbasis Komputer",
      date: "Monday, 07 Sep 2026, 07:30 WIB",
      img: "/slider-2.jpg",
      content: "Penilaian Tengah Semester Ganjil akan diselenggarakan berbasis komputer (CBT). Seluruh siswa diharapkan mengecek kartu peserta ujian dan memastikan kesiapan perangkat serta akun pembelajaran masing-masing."
    },
    {
      id: "seleksi-olimpiade-sains-pelajar-tingkat-kota",
      title: "Pembukaan Seleksi Internal Olimpiade Sains Nasional (OSN)",
      date: "Friday, 28 Aug 2026, 13:00 WIB",
      img: "/slider-3.jpg",
      content: "Bidang kesiswaan mengundang siswa yang berminat di cabang Matematika, Fisika, Biologi, dan Informatika untuk mendaftar seleksi tahap awal bimbingan intensif tim olimpiade sains sekolah."
    },
    {
      id: "gerakan-green-campus-lingkungan-asri",
      title: "Gerakan Bakti Lingkungan dan Budaya Asri Kampus Advent Batam",
      date: "Monday, 24 Aug 2026, 08:30 WIB",
      img: "/slider-1.jpg",
      content: "Seluruh warga sekolah diajak berpartisipasi dalam pemeliharaan taman kelas dan penataan pemilahan sampah organik guna menyukseskan program kampus bersih dan ramah lingkungan."
    }
  ];

  // Batasi tampilan awal maksimal 4 berita thumbnail
  const [visibleCount, setVisibleCount] = useState(4);

  // Fungsi menambah tampilan saat tombol View More diklik
  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const displayedList = allAnnouncements.slice(0, visibleCount);

  return (
    <main className="min-h-screen bg-[#F3EFE4] font-sans flex flex-col text-slate-800">
      {/* HEADER & BREADCRUMB */}
      <section className="w-full pt-8 pb-4 px-4 sm:px-8 max-w-7xl mx-auto shrink-0">
        <div className="text-xs text-slate-600 font-semibold mb-4 flex items-center gap-1 flex-wrap">
          <span>You are here :</span>
          <Link href="/" className="text-[#047857] hover:underline ml-1">🏠 Home</Link>
          <span>-</span>
          <span className="text-slate-500">Announcements</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-[#1e293b] tracking-wider uppercase mb-8">
          SCHOOL ANNOUNCEMENTS
        </h1>
      </section>

      {/* KONTEN UTAMA: 2 KOLOM (KIRI BERITA, KANAN SIDEBAR PERSIS TAMPILAN BRO) */}
      <section className="w-full flex-1 pb-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* KOLOM KIRI: DAFTAR PENGUMUMAN (8 DARI 12 KOLOM) */}
          <div className="lg:col-span-8 space-y-8">
            {displayedList.map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-5 items-start group">
                
                {/* 1. THUMBNAIL FOTO */}
                <div className="w-full sm:w-[220px] aspect-[4/3] bg-slate-200 rounded-lg overflow-hidden shrink-0 shadow-sm relative">
                  <img 
                    src={item.img || "/slider-1.jpg"} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 bg-[#1e293b]/80 text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                    <span>📢</span> Info
                  </div>
                </div>

                {/* 2. TEKS PENGUMUMAN */}
                <div className="flex-1 flex flex-col">
                  <span className="text-[11px] text-slate-500 font-semibold mb-1">
                    Published : {item.date}
                  </span>
                  
                  {/* JUDUL */}
                  <h2 className="text-base sm:text-lg font-bold text-[#047857] group-hover:text-emerald-800 transition-colors leading-snug mb-2 cursor-pointer">
                    {item.title}
                  </h2>

                  {/* DESKRIPSI LEAD */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify line-clamp-4 mb-3">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}

            {/* TOMBOL VIEW MORE ANNOUNCEMENTS (ACTION BUTTON, BUKAN LINK RUSAK) */}
            {visibleCount < allAnnouncements.length && (
              <div className="pt-4">
                <button
                  onClick={handleViewMore}
                  className="bg-[#D97706] hover:bg-amber-700 text-white font-bold text-xs sm:text-sm py-2.5 px-6 rounded-md shadow transition-all transform hover:scale-105 flex items-center gap-2 cursor-pointer"
                >
                  <span>View More Announcements</span>
                  <span>→</span>
                </button>
              </div>
            )}
          </div>

          {/* KOLOM KANAN: SIDEBAR (4 DARI 12 KOLOM) */}
          <div className="lg:col-span-4 lg:border-l lg:border-slate-300 lg:pl-8 space-y-6">
            
            {/* KOTAK 1: CARI PENGUMUMAN */}
            <div className="bg-[#EFEAD8] p-5 rounded-xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-sm text-slate-800 mb-3">Cari Pengumuman</h3>
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

            {/* KOTAK 2: ARSIP PENGUMUMAN */}
            <div className="bg-[#EFEAD8] p-5 rounded-xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-sm text-slate-800 mb-3">Arsip Pengumuman</h3>
              <ul className="text-xs space-y-2 text-slate-700 font-medium">
                <li className="flex justify-between hover:text-[#047857] cursor-pointer">
                  <span>August 2026</span>
                  <span className="text-slate-500">(3)</span>
                </li>
                <li className="flex justify-between hover:text-[#047857] cursor-pointer">
                  <span>June 2026</span>
                  <span className="text-slate-500">(1)</span>
                </li>
                <li className="flex justify-between hover:text-[#047857] cursor-pointer">
                  <span>May 2026</span>
                  <span className="text-slate-500">(1)</span>
                </li>
                <li className="flex justify-between hover:text-[#047857] cursor-pointer">
                  <span>March 2026</span>
                  <span className="text-slate-500">(2)</span>
                </li>
              </ul>
            </div>

            {/* KOTAK 3: IDENTITAS & KONTAK SEKOLAH */}
            <div className="pt-2 border-t border-dashed border-slate-300 text-xs text-slate-700 space-y-3">
              <div className="text-center sm:text-left">
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
