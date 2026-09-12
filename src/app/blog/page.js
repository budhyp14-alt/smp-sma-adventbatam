"use client";

import { useState } from "react";
import Link from "next/link";

export default function BlogIndexPage() {
  const allBlogs = [
    {
      id: "pemanfaatan-ai-secara-kritis-dalam-pembelajaran",
      title: "Pemanfaatan AI secara Kritis dan Bertanggung Jawab dalam Pembelajaran Siswa",
      date: "Tuesday, 08 September 2026",
      author: "Ir. Budhy Prasetyo",
      img: "/slider-1.jpg",
      lead: "Kecerdasan buatan hadir sebagai alat akselerasi belajar. Namun, integritas intelektual dan kejujuran akademis tetap merupakan standar tertinggi yang wajib dijaga oleh setiap peserta didik dalam mengeksplorasi teknologi."
    },
    {
      id: "membangun-integritas-dan-literasi-sains",
      title: "Membangun Integritas Akademik dan Kecintaan pada Eksplorasi Sains",
      date: "Monday, 31 August 2026",
      author: "Tiurma Febryanti, S.Pd",
      img: "/slider-2.jpg",
      lead: "Praktikum laboratorium fisika bukan hanya tentang membuktikan hukum alam, melainkan sarana melatih ketelitian, kejujuran dalam mencatat data, dan keuletan dalam menganalisis fenomena empiris."
    },
    {
      id: "metode-komunikasi-efektif-guru-dan-murid",
      title: "Seni Mendengar: Kunci Membina Hubungan Harmonis Guru dan Remaja di Era Digital",
      date: "Friday, 21 August 2026",
      author: "Renita Pandiangan, S.Pd",
      img: "/slider-3.jpg",
      lead: "Remaja masa kini membutuhkan ruang dialog yang bebas dari penghakiman sepihak. Komunikasi dua arah yang empatik menjadi jembatan utama dalam menanamkan nilai karakter dan budi pekerti."
    },
    {
      id: "pentingnya-pembiasaan-bahasa-inggris-sejak-dini",
      title: "Membiasakan Percakapan Bahasa Inggris dalam Lingkungan Sekolah Multikultural",
      date: "Thursday, 13 August 2026",
      author: "Herman, S.Pd",
      img: "/slider-1.jpg",
      lead: "Kemampuan berbahasa internasional bukan sekadar penguasaan tata bahasa, melainkan kepercayaan diri untuk menyampaikan gagasan dan menghargai keragaman sudut pandang di panggung global."
    },
    {
      id: "peran-olahraga-dalam-membentuk-sportivitas",
      title: "Membina Jiwa Ksatria dan Daya Juang Melalui Aktivitas Fisik",
      date: "Tuesday, 04 August 2026",
      author: "Kevin Pratama, S.Or",
      img: "/slider-2.jpg",
      lead: "Di lapangan pertandingan, siswa belajar bahwa kemenangan adalah buah dari kerja keras dan kekalahan adalah bahan evaluasi diri untuk bangkit lebih kuat dengan menjunjung tinggi sportivitas."
    },
    {
      id: "memahami-dinamika-sosial-remaja-modern",
      title: "Menumbuhkan Kepedulian Sosial dan Ketahanan Moral Siswa Menengah",
      date: "Wednesday, 29 July 2026",
      author: "Ernast Simanjuntak, S.Pd",
      img: "/slider-3.jpg",
      lead: "Sosiologi mengajarkan siswa untuk tidak bersikap apatis terhadap persoalan di sekitarnya. Aksi sosial nyata membantu generasi muda melihat nilai keberkahan dalam berbagi kasih."
    },
    {
      id: "matematika-sebagai-seni-bernalar-logis",
      title: "Menghilangkan Paradigma Menakutkan dalam Mempelajari Matematika",
      date: "Friday, 24 July 2026",
      author: "Drs. Andi Mulyono",
      img: "/slider-1.jpg",
      lead: "Matematika adalah bahasa logika. Ketika siswa diajak menemukan pola dan keteraturan di alam semesta, rumus matematika tidak lagi menjadi beban hafalan, melainkan alat berpikir yang mengasyikkan."
    }
  ];

  const [visibleCount, setVisibleCount] = useState(4);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const displayedList = allBlogs.slice(0, visibleCount);

  return (
    <main className="min-h-screen bg-[#F3EFE4] font-sans flex flex-col text-slate-800">
      <section className="w-full pt-8 pb-4 px-4 sm:px-8 max-w-7xl mx-auto shrink-0">
        <div className="text-xs text-slate-600 font-semibold mb-4 flex items-center gap-1 flex-wrap">
          <span>You are here :</span>
          <Link href="/" className="text-[#047857] hover:underline ml-1">🏠 Home</Link>
          <span>-</span>
          <span className="text-slate-500">Teachers' Blog</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-[#1e293b] tracking-wider uppercase mb-8">
          TEACHERS' BLOG
        </h1>
      </section>

      <section className="w-full flex-1 pb-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-8 space-y-8">
            {displayedList.map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-5 items-start group">
                <Link 
                  href={`/blog/detail?id=${item.id}`}
                  className="w-full sm:w-[220px] aspect-[4/3] bg-slate-200 rounded-lg overflow-hidden shrink-0 shadow-sm relative block cursor-pointer"
                >
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 bg-[#1e293b]/80 text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                    <span>✍️</span> Guru
                  </div>
                </Link>

                <div className="flex-1 flex flex-col">
                  <span className="text-[11px] text-slate-500 font-semibold mb-1">
                    Published : {item.date} | Oleh : {item.author}
                  </span>
                  
                  <Link href={`/blog/detail?id=${item.id}`}>
                    <h2 className="text-base sm:text-lg font-bold text-[#047857] group-hover:text-emerald-800 transition-colors leading-snug mb-2 cursor-pointer">
                      {item.title}
                    </h2>
                  </Link>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify line-clamp-4">
                    {item.lead}
                  </p>
                </div>
              </div>
            ))}

            {visibleCount < allBlogs.length && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleViewMore}
                  className="bg-[#047857] hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm py-2.5 px-6 rounded-md shadow transition-all transform hover:scale-105 flex items-center gap-2 cursor-pointer"
                >
                  <span>View More Blog Articles</span>
                  <span>→</span>
                </button>
              </div>
            )}
          </div>

          <div className="lg:col-span-4 lg:border-l lg:border-slate-300 lg:pl-8 space-y-6">
            <div className="bg-[#EFEAD8] p-5 rounded-xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-sm text-slate-800 mb-3">Cari Artikel</h3>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Kata kunci artikel..." 
                  className="flex-1 bg-white px-3 py-1.5 text-xs rounded border border-slate-300 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                />
                <button className="bg-[#047857] hover:bg-emerald-800 text-white text-xs font-bold px-4 py-1.5 rounded transition-colors cursor-pointer">
                  Cari
                </button>
              </div>
            </div>

            <div className="bg-[#EFEAD8] p-5 rounded-xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-sm text-slate-800 mb-3">Arsip Tulisan</h3>
              <ul className="text-xs space-y-2 text-slate-700 font-medium">
                <li className="flex justify-between hover:text-[#047857] cursor-pointer">
                  <span>September 2026</span>
                  <span className="text-slate-500">(1)</span>
                </li>
                <li className="flex justify-between hover:text-[#047857] cursor-pointer">
                  <span>August 2026</span>
                  <span className="text-slate-500">(4)</span>
                </li>
                <li className="flex justify-between hover:text-[#047857] cursor-pointer">
                  <span>July 2026</span>
                  <span className="text-slate-500">(2)</span>
                </li>
              </ul>
            </div>

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
            </div>

          </div>

        </div>
      </section>

      <footer className="w-full bg-[#8B0000] text-white text-[10px] sm:text-xs text-center py-4 font-semibold shrink-0 mt-auto">
        Developed by Ir. Budhy Prasetyo
      </footer>
    </main>
  );
}
