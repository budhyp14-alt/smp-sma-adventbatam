"use client";

import Link from "next/link";

export default function DetailEditorialYayasan() {
  // DATA 4 BERITA TERAKHIR UNTUK SIDEBAR KANAN
  const recentNews = [
    {
      id: "ktt-g20-bali",
      href: "/news/detail?id=ktt-g20-bali",
      date: "12 August 2025",
      title: "KTT G20 Bali: Pembelajaran Kolaboratif Internasional Peserta Didik",
      lead: "Mengkaji signifikansi keterlibatan generasi muda dalam isu diplomasi global, pemulihan ekonomi, dan transisi teknologi hijau.",
      img: "/slider-1.jpg"
    },
    {
      id: "badan-usaha-perekonomian",
      href: "/news/detail?id=bab-1-badan-usaha-dalam-perekonomian",
      date: "12 August 2025",
      title: "BAB 1: Badan Usaha dalam Sistem Perekonomian Modern",
      lead: "Pemahaman struktur Badan Usaha Milik Negara, Swasta, dan Koperasi guna membentuk jiwa kewirausahaan yang tangguh dan etis.",
      img: "/slider-2.jpg"
    },
    {
      id: "informatika-pembelajaran",
      href: "/news/detail?id=bab-1-informatika-dan-pembelajarannya",
      date: "11 August 2025",
      title: "BAB 1: Informatika dan Pembelajarannya Abad ke-21",
      lead: "Mengasah kemampuan computational thinking, logika pemrograman terstruktur, serta literasi data digital bagi siswa di era otomatisasi.",
      img: "/slider-3.jpg"
    },
    {
      id: "pemanfaatan-ai-kritis",
      href: "/blog/detail?id=pemanfaatan-ai-secara-kritis-dalam-pembelajaran",
      date: "08 September 2026",
      title: "Pemanfaatan AI secara Kritis dan Beretika di Kelas",
      lead: "Strategi pendidik mendampingi anak didik menggunakan kecerdasan buatan secara proporsional, menjunjung orisinalitas karya, dan integritas ilmiah.",
      img: "/slider-1.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-[#F3EFE4] font-sans flex flex-col text-slate-800">
      
      {/* BREADCRUMB */}
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

      {/* KONTEN UTAMA: 2 KOLOM (KIRI BERITA UTUH, KANAN 4 BERITA TERAKHIR) */}
      <section className="w-full flex-1 pb-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* KOLOM KIRI (8 KOLOM): ARTIKEL LENGKAP */}
          <article className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
            
            {/* BADGE KATEGORI */}
            <div className="mb-3">
              <span className="bg-[#D97706] text-white text-[10px] sm:text-xs font-black px-3 py-1 rounded-md uppercase tracking-wider inline-block shadow-xs">
                YAYASAN EDITORIAL
              </span>
            </div>

            {/* JUDUL ARTIKEL */}
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight mb-3">
              Visi Jangka Panjang YPAB dalam Membangun Peradaban Pendidikan Unggul di Batam
            </h1>

            {/* METADATA PENULIS & TANGGAL */}
            <div className="flex items-center gap-4 text-xs text-slate-500 font-medium mb-6 pb-4 border-b border-slate-200 flex-wrap">
              <span className="flex items-center gap-1.5">
                <span>📅</span> 08 September 2026
              </span>
              <span className="flex items-center gap-1.5 font-bold text-slate-700">
                <span>✍️</span> Rima Melati Hutagalung (Chairman of the Foundation)
              </span>
            </div>

            {/* FOTO UTAMA BERITA UTUH */}
            <div className="w-full aspect-16/10 sm:aspect-16/9 rounded-xl overflow-hidden shadow-sm mb-6 bg-slate-200">
              <img
                src="/slider-1.jpg"
                alt="Gedung SMPS - SMAS Advent Batam Mas"
                className="w-full h-full object-cover"
              />
            </div>

            {/* ISI NASKAH BERITA UTUH */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
              <p>
                Yayasan Pendidikan Advent Batam (YPAB) didirikan bukan semata-mata untuk mendirikan gedung sekolah atau menambah kuantitas lembaga pendidikan formal di Kepulauan Riau. Jauh melampaui itu, yayasan ini lahir dari panggilan iman dan tekad luhur untuk membangun peradaban manusia yang berkeadaban tinggi, bermoral mulia, dan memiliki kompetensi global. Kami meyakini bahwa investasi terbesar yang dapat diwariskan kepada peradaban adalah mendidik generasi muda agar mengenal kebenaran hakiki dan menguasai ilmu pengetahuan demi melayani kemanusiaan.
              </p>
              <p>
                Dalam rencana induk pengembangan jangka panjang 2026–2036, YPAB telah menetapkan arah kebijakan yang berfokus pada penguatan tiga pilar: keunggulan fasilitas fisik, profesionalisme sumber daya pendidik, dan kurikulum holistik berbasis nilai Kristiani[cite: 21]. Kota Batam sebagai gerbang internasional Indonesia menuntut standar sumber daya manusia yang adaptif, berintelektual tinggi, serta memiliki ketahanan karakter yang kokoh[cite: 21].
              </p>
              <p>
                Kami terus mendorong modernisasi sarana laboratorium sains, komputasi, dan literasi perpustakaan terpadu, seraya memastikan setiap anak didik bertumbuh dalam atmosfer kasih, kedisiplinan positif, dan saling menghargai tanpa kekerasan. Kolaborasi sinergis antara pihak yayasan, pimpinan sekolah, pendidik, dan orang tua adalah kunci utama keberhasilan ekosistem ini.
              </p>
            </div>

            {/* TOMBOL KEMBALI */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap gap-3">
              <Link
                href="/editorial-yayasan"
                className="bg-[#D97706] hover:bg-amber-700 text-white font-bold text-xs py-2.5 px-6 rounded-lg shadow-sm transition-colors"
              >
                ← Kembali ke Arsip Editorial
              </Link>
              <Link
                href="/"
                className="bg-[#8B0000] hover:bg-red-800 text-white font-bold text-xs py-2.5 px-6 rounded-lg shadow-sm transition-colors"
              >
                Back to Home
              </Link>
            </div>

          </article>

          {/* KOLOM KANAN (4 KOLOM): SIDEBAR 4 BERITA TERAKHIR DARI ATAS KE BAWAH */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
              
              {/* HEADER SIDEBAR */}
              <div className="flex items-center gap-2 pb-3 mb-4 border-b-2 border-[#8B0000]">
                <span className="bg-[#8B0000] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  📰
                </span>
                <h2 className="font-black text-sm sm:text-base text-slate-900 uppercase tracking-wide">
                  Berita Terakhir
                </h2>
              </div>

              {/* LIST 4 BERITA: THUMBNAIL, JUDUL & LEAD DARI ATAS KE BAWAH */}
              <div className="space-y-5">
                {recentNews.map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-2 pb-4 border-b border-slate-100 last:border-b-0 last:pb-0 group">
                    
                    {/* FOTO THUMBNAIL */}
                    <Link
                      href={item.href}
                      className="w-full aspect-16/9 rounded-xl overflow-hidden shadow-xs bg-slate-200 block cursor-pointer"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </Link>

                    {/* DETAIL TEKS BERITA */}
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-500 font-semibold mb-1">
                        📅 {item.date}
                      </span>
                      
                      {/* JUDUL BERITA */}
                      <Link href={item.href}>
                        <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#047857] transition-colors leading-snug line-clamp-2 cursor-pointer mb-1.5">
                          {item.title}
                        </h3>
                      </Link>

                      {/* LEAD BERITA */}
                      <p className="text-[11px] sm:text-xs text-slate-600 line-clamp-3 leading-relaxed text-justify">
                        {item.lead}
                      </p>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </aside>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#8B0000] text-white text-[10px] sm:text-xs text-center py-4 font-semibold shrink-0 mt-auto">
        Developed by Ir. Budhy Prasetyo
      </footer>

    </main>
  );
}
