"use client";

import Link from "next/link";

export default function DetailEditorialYayasan() {
  // DATA 4 BERITA TERKINI UNTUK BAR SISI KANAN
  const recentNews = [
    {
      id: "ktt-g20-bali",
      href: "/news/detail?id=ktt-g20-bali",
      date: "12 Ogos 2025",
      title: "KTT G20 Bali: Pembelajaran Kolaboratif Antarabangsa Pelajar",
      lead: "Keterlibatan aktif generasi muda dalam memahami isu diplomasi global, pemulihan ekonomi, dan kelestarian alam sekitar.",
      img: "/slider-1.jpg"
    },
    {
      id: "badan-usaha-perekonomian",
      href: "/news/detail?id=bab-1-badan-usaha-dalam-perekonomian",
      date: "12 Ogos 2025",
      title: "BAB 1: Badan Usaha dalam Sistem Ekonomi Moden",
      lead: "Pendedahan struktur BUMN, sektor swasta, dan koperasi untuk membina jati diri keusahawanan yang beretika.",
      img: "/slider-2.jpg"
    },
    {
      id: "informatika-pembelajaran",
      href: "/news/detail?id=bab-1-informatika-dan-pembelajarannya",
      date: "11 Ogos 2025",
      title: "BAB 1: Informatik dan Pembelajaran Abad Ke-21",
      lead: "Mengasah pemikiran komputasi dan literasi data digital bagi mempersiapkan murid menghadapi era automasi.",
      img: "/slider-3.jpg"
    },
    {
      id: "pemanfaatan-ai-kritis",
      href: "/blog/detail?id=pemanfaatan-ai-secara-kritis-dalam-pembelajaran",
      date: "08 September 2026",
      title: "Pemanfaatan AI secara Kritis dan Beretika di Sekolah",
      lead: "Panduan membimbing murid memanfaatkan kecerdasan buatan dengan memelihara integriti akademik dan keaslian karya.",
      img: "/slider-1.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-[#F3EFE4] font-sans flex flex-col text-slate-800">
      
      {/* JEJAK NAVIGASI (BREADCRUMB) */}
      <section className="w-full pt-6 pb-3 px-4 sm:px-8 max-w-7xl mx-auto shrink-0">
        <div className="text-xs text-slate-600 font-semibold flex items-center gap-1 flex-wrap">
          <span>You are here :</span>
          <Link href="/" className="text-[#047857] hover:underline ml-1">🏠 Home</Link>
          <span>-</span>
          <Link href="/editorial-yayasan" className="text-[#047857] hover:underline">Editorial Yayasan</Link>
          <span>-</span>
          <span className="text-slate-500">Detail</span>
        </div>
      </section>

      {/* KANDUNGAN UTAMA: 2 LAJUR */}
      <section className="w-full flex-1 pb-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LAJUR KIRI: ARTIKEL PENUH */}
          <article className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="mb-3">
              <span className="bg-[#D97706] text-white text-[10px] sm:text-xs font-black px-3 py-1 rounded-md uppercase tracking-wider inline-block">
                YAYASAN EDITORIAL
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight mb-3">
              Visi Jangka Panjang YPAB dalam Membangun Peradaban Pendidikan Unggul di Batam
            </h1>

            <div className="flex items-center gap-4 text-xs text-slate-500 font-medium mb-6 pb-4 border-b border-slate-200 flex-wrap">
              <span>📅 08 September 2026</span>
              <span className="font-bold text-slate-700">✍️ Rima Melati Hutagalung (Chairman of the Foundation)</span>
            </div>

            <div className="w-full aspect-16/9 rounded-xl overflow-hidden shadow-sm mb-6 bg-slate-200">
              <img
                src="/slider-1.jpg"
                alt="Bangunan Sekolah SMP-SMA Advent Batam"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
              <p>
                Yayasan Pendidikan Advent Batam (YPAB) didirikan bukan semata-mata untuk mendirikan bangunan sekolah atau menambah kuantiti institusi formal semata-mata. Melangkaui matlamat tersebut, yayasan ini lahir daripada tekad murni untuk membina modal insan berperibadi luhur, berakhlak mulia, serta berdaya saing di peringkat antarabangsa[cite: 21].
              </p>
              <p>
                Melalui pelan induk pembangunan strategik, tumpuan berterusan diberikan kepada pemantapan kemudahan fasiliti, peningkatan kecekapan warga pendidik, serta penerapan nilai-nilai murni secara holistik bagi memastikan iklim pembelajaran yang selamat dan progresif[cite: 21].
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap gap-3">
              <Link
                href="/editorial-yayasan"
                className="bg-[#D97706] hover:bg-amber-700 text-white font-bold text-xs py-2.5 px-6 rounded-lg shadow-sm transition-colors"
              >
                ← Kembali ke Arkib
              </Link>
              <Link
                href="/"
                className="bg-[#8B0000] hover:bg-red-800 text-white font-bold text-xs py-2.5 px-6 rounded-lg shadow-sm transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </article>

          {/* LAJUR KANAN: 4 BERITA DENGAN REKA BENTUK GRID SEBELAH-MENYEBELAH & VIEW MORE */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-[#EFEAD8] p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-300/80">
              
              {/* TAJUK BAR SISI */}
              <h2 className="text-xl font-black text-[#262626] mb-5 tracking-tight">
                Berita Terbaru
              </h2>

              {/* SENARAI 4 BERITA */}
              <div className="space-y-5">
                {recentNews.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 group">
                    
                    {/* GAMBAR THUMBNAIL KECIL & PADAT DI SEBELAH KIRI */}
                    <Link
                      href={item.href}
                      className="w-24 h-20 sm:w-28 sm:h-20 shrink-0 rounded-lg overflow-hidden bg-slate-800 shadow-sm block relative cursor-pointer"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </Link>

                    {/* BUTIRAN DI SEBELAH KANAN */}
                    <div className="flex-1 min-w-0">
                      <span className="text-[11px] text-slate-500 font-medium block leading-tight mb-1">
                        {item.date}
                      </span>
                      
                      <Link href={item.href}>
                        <h3 className="text-xs sm:text-[13px] font-bold text-[#047857] hover:text-emerald-900 transition-colors leading-snug line-clamp-2 mb-1 cursor-pointer">
                          {item.title}
                        </h3>
                      </Link>

                      <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed text-justify">
                        {item.lead}
                      </p>
                    </div>

                  </div>
                ))}
              </div>

              {/* BUTANG VIEW MORE DI BAHAGIAN PALING BAWAH */}
              <div className="pt-6 mt-4 border-t border-slate-300/80">
                <Link
                  href="/news"
                  className="w-full bg-[#D97706] hover:bg-amber-700 text-white text-xs font-bold py-2.5 px-4 rounded-lg shadow-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>View More</span>
                  <span>↗</span>
                </Link>
              </div>

            </div>
          </aside>

        </div>
      </section>

      {/* PENGAKI (FOOTER) */}
      <footer className="w-full bg-[#8B0000] text-white text-[10px] sm:text-xs text-center py-4 font-semibold shrink-0 mt-auto">
        Developed by Ir. Budhy Prasetyo
      </footer>

    </main>
  );
}
