import Link from "next/link";
import { editorialsData } from "../../data/editorials";

export const metadata = {
  title: "Foundation Chairman's Editorial - SMP SMA Advent Batam",
};

export default function EditorialYayasanIndex() {
  const articles = editorialsData.yayasan;

  return (
    <main className="min-h-screen bg-[#E5DCC3] font-sans flex flex-col">
      {/* BREADCRUMB & HEADER */}
      <section className="w-full pt-8 pb-4 px-4 sm:px-8 max-w-7xl mx-auto shrink-0">
        <div className="text-xs text-slate-700 font-semibold mb-6 flex items-center gap-1 flex-wrap">
          <span>You are here :</span>
          <Link href="/" className="text-[#047857] hover:underline ml-1">🏠 Home</Link>
          <span>-</span>
          <span className="text-slate-600">Foundation Chairman's Editorial</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-[#1e293b] mb-8 tracking-wide uppercase">
          FOUNDATION CHAIRMAN'S EDITORIAL
        </h1>
      </section>

      {/* DAFTAR BERITA */}
      <section className="w-full flex-1 pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {articles.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#D97706] flex flex-col md:flex-row gap-6 items-start group"
            >
              {/* 1. FOTO THUMBNAIL (BISA DIKLIK) */}
              <Link 
                href={`/editorial-yayasan/detail?id=${item.id}`} 
                className="w-full md:w-[280px] aspect-[4/3] bg-slate-200 rounded-lg overflow-hidden shrink-0 block cursor-pointer"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </Link>

              {/* KONTEN TEKS */}
              <div className="flex-1 flex flex-col">
                <span className="text-xs text-slate-500 font-semibold mb-1">
                  📅 {item.date} | ✍️ {item.author} ({item.role})
                </span>

                {/* 2. JUDUL BERITA (BISA DIKLIK) */}
                <Link href={`/editorial-yayasan/detail?id=${item.id}`}>
                  <h2 className="text-xl font-bold text-red-950 mb-3 hover:text-[#D97706] transition-colors cursor-pointer leading-snug">
                    {item.title}
                  </h2>
                </Link>

                {/* 3. LEAD BERITA / RINGKASAN (BISA DIKLIK) */}
                <Link href={`/editorial-yayasan/detail?id=${item.id}`}>
                  <p className="text-sm text-slate-600 leading-relaxed text-justify mb-4 line-clamp-3 hover:text-slate-900 transition-colors cursor-pointer">
                    {item.paragraphs[0]}
                  </p>
                </Link>

                {/* 4. TOMBOL READ MORE */}
                <div>
                  <Link 
                    href={`/editorial-yayasan/detail?id=${item.id}`} 
                    className="bg-[#8B0000] hover:bg-red-800 text-white font-bold text-xs py-2.5 px-6 rounded shadow-sm inline-block transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
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
