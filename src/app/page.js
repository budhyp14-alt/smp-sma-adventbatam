import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Home - SMP SMA Advent Batam",
  description: "Official Website of SMP - SMA Advent Batam",
};

export default function HomePage() {
  // 3 DATA BERITA TERBARU UNTUK DITAMPILKAN DI HOME
  const latestNews = [
    {
      id: "upacara-kemerdekaan-ri",
      title: "Upacara Peringatan Hari Kemerdekaan RI di SMP-SMA Advent Batam",
      date: "August 17, 2026",
      category: "School Activities",
      excerpt: "Seluruh guru, staf, dan siswa-siswi SMP-SMA Advent Batam melaksanakan upacara bendera dengan khidmat untuk memperingati kemerdekaan...",
      img: "/slider-1.jpg"
    },
    {
      id: "juara-olimpiade-matematika",
      title: "Siswa SMA Advent Batam Meraih Juara 1 Olimpiade Matematika",
      date: "September 05, 2026",
      category: "Student Achievements",
      excerpt: "Prestasi membanggakan kembali ditorehkan oleh siswa SMA Advent Batam yang berhasil menyingkirkan puluhan peserta lain dalam ajang...",
      img: "/slider-2.jpg"
    },
    {
      id: "bakti-sosial-panti-asuhan",
      title: "Kegiatan Bakti Sosial OSIS di Panti Asuhan Kasih",
      date: "August 28, 2026",
      category: "Social & Spiritual",
      excerpt: "Sebagai wujud nyata dari nilai-nilai Kristiani, pengurus OSIS menyelenggarakan kegiatan bakti sosial dan penyerahan bantuan ke panti asuhan...",
      img: "/slider-3.jpg"
    }
  ];

  return (
    <main className="min-h-screen flex flex-col font-sans bg-[#E5DCC3]">
      
      {/* 1. HERO BANNER SECTION */}
      <section className="relative w-full h-[70vh] sm:h-[85vh] bg-slate-900 flex items-center justify-center shrink-0">
        {/* Gambar Latar Belakang */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/slider-1.jpg" 
            alt="Sekolah Advent Batam" 
            className="w-full h-full object-cover opacity-40 scale-105"
          />
        </div>
        
        {/* Teks di atas Banner */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto mt-10">
          <span className="bg-[#D97706] text-white text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase shadow-lg">
            Welcome to Our Official Website
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white drop-shadow-2xl mb-6 uppercase tracking-wide leading-tight">
            SMP - SMA <span className="text-amber-400">ADVENT BATAM</span>
          </h1>
          <p className="text-base sm:text-xl text-slate-200 font-medium drop-shadow-md max-w-2xl leading-relaxed mb-10">
            Mendidik dan membentuk generasi muda yang cerdas secara intelektual, terampil, serta memiliki karakter mulia berlandaskan nilai-nilai luhur Kristiani.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/ppdb" className="bg-[#047857] hover:bg-emerald-700 text-white font-bold py-3.5 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105">
              Daftar Sekarang (PPDB)
            </Link>
            <Link href="/profile" className="bg-white hover:bg-slate-100 text-[#8B0000] font-bold py-3.5 px-8 rounded-full shadow-lg transition-colors border border-transparent hover:border-slate-300">
              Pelajari Profil Sekolah
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SAMBUTAN KEPALA SEKOLAH SECTION */}
      <section className="w-full py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto shrink-0 -mt-16 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border-t-8 border-[#8B0000] p-8 sm:p-12 flex flex-col md:flex-row gap-10 items-center">
          
          {/* Foto Kepala Sekolah (Sementara pakai Logo) */}
          <div className="w-full md:w-1/3 shrink-0 flex justify-center">
            <div className="w-48 h-48 sm:w-64 sm:h-64 bg-slate-100 rounded-full border-4 border-slate-200 shadow-inner flex items-center justify-center p-6 overflow-hidden">
              <img src="/logo-OKE.png" alt="Principal" className="w-full h-full object-contain" />
            </div>
          </div>
          
          {/* Teks Sambutan */}
          <div className="w-full md:w-2/3 flex flex-col text-center md:text-left">
            <h2 className="text-3xl font-black text-[#1e293b] mb-2 uppercase tracking-wide">Sambutan Kepala Sekolah</h2>
            <h3 className="text-[#047857] font-bold text-lg mb-6 border-b border-slate-200 pb-4 inline-block">
              Tona Leon Ferdinan Situmorang, S.Pd., MA., ED.
            </h3>
            <div className="text-slate-600 leading-relaxed space-y-4 text-justify sm:text-left text-sm sm:text-base">
              <p>
                Syalom dan salam sejahtera bagi kita semua. Selamat datang di portal resmi informasi terpadu SMP dan SMA Advent Batam.
              </p>
              <p>
                Di era digitalisasi pendidikan saat ini, kami berkomitmen penuh untuk menghadirkan pelayanan pendidikan yang transparan, inovatif, dan mudah diakses. Website ini hadir sebagai jembatan komunikasi yang efektif antara pihak sekolah, peserta didik, orang tua wali, serta masyarakat luas.
              </p>
              <p>
                Kami percaya bahwa pendidikan sejati tidak hanya mengasah kecerdasan akal, tetapi juga membina hati. Melalui program akademik yang solid, ekstrakurikuler yang beragam, dan pembinaan kerohanian yang intensif, mari bergabung bersama kami untuk mencetak pemimpin-pemimpin masa depan yang tangguh dan berintegritas!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LATEST NEWS SECTION */}
      <section className="w-full py-16 bg-white shrink-0 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-black text-[#1e293b] uppercase tracking-wide">Latest News Update</h2>
              <p className="text-slate-500 mt-2 font-medium">Informasi dan kegiatan terbaru dari sekolah kami.</p>
            </div>
            <Link href="/news" className="bg-[#D97706] hover:bg-amber-700 text-white font-bold py-2.5 px-6 rounded-full shadow transition-colors shrink-0">
              View All News →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((news, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group flex flex-col">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-200">
                  <img src={news.img} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-[#8B0000] text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase">
                    {news.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs text-slate-400 font-semibold mb-2">📅 {news.date}</span>
                  <Link href={`/news/detail?id=${news.id}`}>
                    <h3 className="text-lg font-bold text-[#047857] hover:text-emerald-800 transition-colors mb-3 leading-snug">
                      {news.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">
                    {news.excerpt}
                  </p>
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <Link href={`/news/detail?id=${news.id}`} className="text-[#8B0000] font-bold text-xs hover:underline flex items-center gap-1">
                      Read More <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full shrink-0">
        <div className="bg-[#D97706] py-12 px-4 text-white">
          <div className="max-w-7xl mx-auto flex flex-col items-start space-y-6">
            <div className="text-xs font-semibold">
              <p>© 2026 SMP SMA Advent Batam. Mendidik Generasi Cerdas dan Berkarakter Kristus.</p>
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
