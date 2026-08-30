import Link from "next/link";

export const metadata = {
  title: "News - SMP SMA Advent Batam",
};

export default function NewsPage() {
  const newsList = [
    {
      title: "KTT G20 Bali: Momentum Penting Pendidikan Global",
      date: "Tuesday, 12 August 2025",
      category: "Global & Nasional",
      excerpt: "Partisipasi aktif dan pemahaman mendalam mengenai isu-isu strategis internasional seperti KTT G20 menjadi salah satu wawasan penting yang diperkenalkan kepada para siswa di lingkungan SMP & SMA Advent Batam...",
      img: "/slider-1.jpg",
      link: "#"
    },
    {
      title: "BAB 1 Badan Usaha dalam Perekonomian",
      date: "Tuesday, 12 August 2025",
      category: "Ekonomi",
      excerpt: "Materi pembelajaran bab awal mata pelajaran Ekonomi mengenai peran strategis badan usaha dalam menggerakkan roda perekonomian nasional serta pemahaman dasar kewirausahaan bagi siswa tingkat lanjut...",
      img: "/slider-2.jpg",
      link: "#"
    },
    {
      title: "BAB 1 INFORMATIKA & PEMBELAJARANNYA",
      date: "Monday, 11 August 2025",
      category: "Informatika",
      excerpt: "Pengenalan dasar-dasar berpikir komputasional, sistem pengelolaan data, serta pemanfaatan teknologi digital secara bijak dan produktif dalam kerangka kurikulum merdeka mata pelajaran Informatika...",
      img: "/slider-3.jpg",
      link: "#"
    },
    {
      title: "Pelatihan Literasi Digital dan Pemanfaatan Website Sekolah",
      date: "Thursday, 25 September 2025",
      category: "Teknologi & Sekolah",
      excerpt: "Langkah progresif civitas akademika dalam mendokumentasikan seluruh kegiatan belajar mengajar dan event sekolah secara online, terstruktur, dan mudah diakses oleh orang tua serta masyarakat...",
      img: "/slider-1.jpg",
      link: "#"
    }
  ];

  return (
    <main className="min-h-screen flex flex-col font-sans bg-[#F3EFE4]">
      
      {/* SECTION HEADER & BREADCRUMB */}
      <section className="w-full bg-[#DCC690] text-slate-900 pt-6 pb-12 px-4 shrink-0">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs text-slate-700 font-semibold mb-6 flex items-center gap-1 flex-wrap">
            <span>You are here :</span>
            <Link href="/" className="text-[#047857] hover:underline ml-1">🏠 Home</Link>
            <span>-</span>
            <span className="text-slate-600">News</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-black text-slate-800 mb-4 border-b-2 border-slate-400/30 pb-4 uppercase tracking-wide">
            News & Updates
          </h1>
        </div>
      </section>

      {/* SECTION KONTEN BERITA */}
      <section className="w-full flex-1 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* KIRI - DAFTAR BERITA */}
          <div className="lg:col-span-8 flex flex-col space-y-8">
            {newsList.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-5 items-start bg-[#E5DCC3] p-5 rounded-xl shadow-sm border border-[#D5CCB3] group">
                <div className="w-full sm:w-56 aspect-[4/3] shrink-0 bg-slate-300 overflow-hidden rounded-lg shadow-inner">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex flex-col flex-1 justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[11px] bg-red-900 text-white font-semibold px-2 py-0.5 rounded shadow-sm">{item.category}</span>
                      <span className="text-[11px] text-slate-600 font-medium">Published : {item.date}</span>
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-red-950 mb-2 leading-snug hover:text-red-800 transition-colors cursor-pointer">
                      {item.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify line-clamp-3 mb-4">
                      {item.excerpt}
                    </p>
                  </div>
                  <div>
                    <button className="bg-[#8B0000] hover:bg-red-800 text-white font-bold text-xs py-2 px-4 rounded shadow-sm transition-colors">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* KANAN - SIDEBAR */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Kotak Cari Berita */}
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-red-900">
              <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">Cari Berita</h3>
              <div className="flex">
                <input type="text" placeholder="Masukkan kata kunci..." className="flex-1 p-2 border border-slate-300 rounded-l text-sm focus:outline-none focus:border-red-900" />
                <button className="bg-red-900 hover:bg-red-800 text-white font-bold px-4 text-xs rounded-r">Cari</button>
              </div>
            </div>

            {/* Kategori Berita */}
            <div className="bg-[#E5DCC3] p-6 rounded-xl shadow-sm border border-[#D5CCB3]">
              <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-400/30 pb-2">Kategori</h3>
              <ul className="text-sm font-semibold text-slate-700 space-y-2">
                <li className="hover:text-red-900 cursor-pointer flex justify-between"><span>Global & Nasional</span><span>(1)</span></li>
                <li className="hover:text-red-900 cursor-pointer flex justify-between"><span>Ekonomi</span><span>(1)</span></li>
                <li className="hover:text-red-900 cursor-pointer flex justify-between"><span>Informatika</span><span>(1)</span></li>
                <li className="hover:text-red-900 cursor-pointer flex justify-between"><span>Teknologi & Sekolah</span><span>(1)</span></li>
              </ul>
            </div>

            {/* Arsip Berita */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">Arsip Berita</h3>
              <ul className="text-sm font-semibold text-slate-600 space-y-2">
                <li className="hover:text-red-900 cursor-pointer">August 2025</li>
                <li className="hover:text-red-900 cursor-pointer">July 2021</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
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
