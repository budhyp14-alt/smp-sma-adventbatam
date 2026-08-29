import Link from "next/link";

export const metadata = {
  title: "Principal's Editorial - SMP SMA Advent Batam",
};

export default function EditorialPage() {
  const editorialList = [
    {
      title: "Sambutan Kepala Sekolah: Menyongsong Masa Depan Melalui Website Resmi SMP & SMA Advent Batam",
      date: "Saturday, 29 Aug 2026, 19:54 WIB",
      excerpt: "Kepala Sekolah SMP & SMA Advent Batam, Bapak Tona Leon F. Situmorang, S.Pd., MA.Ed. menyambut dengan sukacita dan antusiasme tinggi atas selesainya pembuatan website resmi sekolah. Beliau tidak hanya mengucap syukur kepada Tuhan, tetapi juga menaruh harapan besar agar seluruh civitas akademika dapat mendayagunakan platform digital ini...",
      img: "/slider-3.jpg",
      link: "/editorial/detail"
    },
    {
      title: "Langkah Inovatif Menuju Era Digital: SMP & SMA Advent Batam Segera Miliki Website Terpadu",
      date: "Monday, 21 Aug 2026, 10:15 WIB",
      excerpt: "Penting untuk mendokumentasikan secara digital dan online semua event yang terjadi di sekolah SMP dan SMA Advent Batam. Dokumentasi tersebut harus dibuat terstruktur, mudah diarsipkan, mudah diakses, dan ketika diakses memiliki penampilan yang menarik. Oleh karena itu pada hari Kamis - 25 September 2025, Bapak Tona Leon F. Situmorang...",
      img: "/slider-1.jpg",
      link: "/editorial/detail-1" // Ini contoh rute untuk berita 1
    }
  ];

  return (
    <main className="min-h-screen flex flex-col font-sans">
      <section className="w-full bg-[#DCC690] text-slate-900 flex-1 pt-6 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-xs text-slate-700 font-semibold mb-8 flex items-center gap-1">
            <span>You are here :</span>
            <Link href="/" className="text-[#047857] hover:underline ml-1">🏠 Home</Link>
            <span>-</span>
            <span className="text-slate-500">Editorial</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            <div className="lg:col-span-8 flex flex-col">
              <h1 className="text-2xl font-black text-slate-800 mb-8 border-b border-slate-400/30 pb-4">
                Principal's Editorial
              </h1>
              
              <div className="space-y-8">
                {editorialList.map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row gap-5 items-start group">
                    <div className="w-full sm:w-48 aspect-[4/3] shrink-0 bg-slate-300 shadow-sm overflow-hidden rounded">
                      <Link href={item.link}>
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </Link>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[11px] sm:text-xs text-slate-600 font-semibold mb-1">
                        Published : {item.date}
                      </p>
                      <Link href={item.link} className="text-[#047857] hover:text-emerald-900 font-bold text-lg leading-tight mb-2 transition-colors">
                        {item.title}
                      </Link>
                      <Link href={item.link} className="text-sm text-slate-800 leading-relaxed text-justify hover:text-slate-600 transition-colors">
                        {item.excerpt}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 lg:border-l border-dashed border-slate-500 lg:pl-8 flex flex-col pt-2">
              <h2 className="text-center font-black text-slate-800 text-base mb-1 tracking-wide">SMAS ADVENT BATAM</h2>
              <p className="text-center text-xs text-slate-800 font-medium mb-8 px-4">
                Prof. DR. Hamka St., Kav 4, Kibing Village, Batu Aji District
              </p>

              <div className="space-y-4 text-xs font-semibold text-slate-800">
                <div className="flex justify-between items-center border-b border-slate-400/30 pb-2">
                  <span>NSPN</span>
                  <span className="text-right">20404yyy</span>
                </div>
                <div className="flex justify-between items-start border-b border-slate-400/30 pb-2">
                  <span>Principal</span>
                  <span className="text-right max-w-[150px]">Tona Leon Ferdinan<br/>Situmorang,<br/>S.Pd.,MA.,ED.</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-400/30 pb-2">
                  <span>Phone</span>
                  <span className="text-emerald-700 text-right hover:underline cursor-pointer">0778-363082</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-400/30 pb-2">
                  <span>Email</span>
                  <span className="text-emerald-700 text-right hover:underline cursor-pointer">info@adventbatam.sch.id</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-400/30 pb-2">
                  <span className="text-slate-700 font-bold">f</span>
                  <Link href="#" className="text-emerald-700 text-right hover:underline">Facebook</Link>
                </div>
                <div className="flex justify-between items-center border-b border-slate-400/30 pb-2">
                  <span className="text-slate-700 font-bold">📷</span>
                  <Link href="#" className="text-emerald-700 text-right hover:underline">Instagram</Link>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span className="text-slate-700 font-bold">▶</span>
                  <Link href="#" className="text-emerald-700 text-right hover:underline">YouTube</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bagian Bawah Diabaikan demi keterbacaan, strukturnya SAMA */}
    </main>
  );
}
