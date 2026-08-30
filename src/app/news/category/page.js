import Link from "next/link";

export const metadata = {
  title: "Kategori Berita - SMP SMA Advent Batam",
};

export default function NewsCategoryPage() {
  const categoryArticles = [
    {
      id: "teknologi-inovasi",
      title: "Langkah Inovatif Menuju Era Digital: SMP & SMA Advent Batam Miliki Website Terpadu",
      date: "Monday, 21 Aug 2026",
      excerpt: "Penting untuk mendokumentasikan secara digital dan online semua event yang terjadi di sekolah SMP dan SMA Advent Batam. Di bawah persetujuan Kepala Sekolah Bapak Tona Leon F. Situmorang, S.Pd., MA.Ed., portal digital resmi ini resmi diluncurkan...",
      img: "/slider-1.jpg"
    },
    {
      id: "teknologi-inovasi-2",
      title: "Penerapan Absensi Wajah Berbasis AI untuk Meningkatkan Kedisiplinan Siswa",
      date: "Wednesday, 10 Jun 2026",
      excerpt: "Sistem absensi otomatis menggunakan pengenalan wajah kini terintegrasi langsung dengan database Google Sheets sekolah, memudahkan rekapitulasi kehadiran harian secara real-time...",
      img: "/slider-2.jpg"
    },
    {
      id: "teknologi-inovasi-3",
      title: "Pelatihan Pemrograman Python dan Penggunaan Cloud Hosting bagi Guru",
      date: "Saturday, 15 May 2026",
      excerpt: "Kegiatan peningkatan kompetensi tenaga pendidik dalam menguasai teknologi modern guna mendukung transformasi digital pembelajaran di ruang kelas...",
      img: "/slider-3.jpg"
    },
    {
      id: "teknologi-inovasi-4",
      title: "Optimalisasi Laboratorium Komputer dengan Perangkat Keras Terbaru",
      date: "Tuesday, 04 Feb 2026",
      excerpt: "Fasilitas penunjang praktik TIK dan Informatika diperbarui untuk memberikan pengalaman praktikum yang memadai bagi seluruh siswa tingkat SMP dan SMA...",
      img: "/slider-1.jpg"
    }
  ];

  const categoriesList = [
    { name: "Teknologi & Inovasi (Digitalisasi)", count: 1, id: "teknologi-inovasi" },
    { name: "Akademik & Kurikulum", count: 1, id: "akademik-kurikulum" },
    { name: "Kesiswaan & Ekstra Kurikuler (Eskul)", count: 1, id: "kesiswaan-eskul" },
    { name: "Prestasi & Perlombaan", count: 1, id: "prestasi-perlombaan" },
    { name: "Events & Pentas Seni (Pensi)", count: 1, id: "events-pensi" },
    { name: "Kerja Sama dengan Instansi Terkait", count: 1, id: "kerja-sama" },
    { name: "Alumni & Humas", count: 1, id: "alumni-humas" }
  ];

  return (
    <main className="min-h-screen flex flex-col font-sans bg-[#F3EFE4]">
      
      {/* HEADER & BREADCRUMB */}
      <section className="w-full bg-[#DCC690] text-slate-900 pt-6 pb-12 px-4 shrink-0">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs text-slate-700 font-semibold mb-6 flex items-center gap-1 flex-wrap">
            <span>You are here :</span>
            <Link href="/" className="text-[#047857] hover:underline ml-1">🏠 Home</Link>
            <span>-</span>
            <Link href="/news" className="text-[#047857] hover:underline">News</Link>
            <span>-</span>
            <span className="text-slate-600">Kategori Berita</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 mb-2 uppercase tracking-wide">
            Kategori : Teknologi & Inovasi (Digitalisasi)
          </h1>
          <p className="text-xs sm:text-sm text-slate-700 font-medium">
            Menampilkan arsip berita pilihan (maksimal 4 berita terbaru) dalam kategori ini.
          </p>
        </div>
      </section>

      {/* KONTEN UTAMA DENGAN SIDEBAR */}
      <section className="w-full flex-1 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* KIRI - DAFTAR ARSIP BERITA (4 ARTIKEL) */}
          <div className="lg:col-span-8 flex flex-col space-y-8">
            {categoryArticles.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-5 items-start bg-[#E5DCC3] p-5 rounded-xl shadow-sm border border-[#D5CCB3] group">
                
                {/* FOTO THUMBNAIL */}
                <Link href={`/news/detail?id=${item.id}`} className="w-full sm:w-56 aspect-[4/3] shrink-0 bg-slate-300 overflow-hidden rounded-lg shadow-inner block cursor-pointer">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </Link>

                <div className="flex flex-col flex-1 justify-between h-full">
                  <div>
                    <p className="text-[11px] text-slate-600 font-medium mb-1">Published : {item.date}</p>
                    
                    {/* JUDUL */}
                    <Link href={`/news/detail?id=${item.id}`}>
                      <h2 className="text-lg sm:text-xl font-bold text-red-950 mb-2 leading-snug hover:text-red-800 transition-colors cursor-pointer">
                        {item.title}
                      </h2>
                    </Link>

                    {/* LEAD/EXCERPT */}
                    <Link href={`/news/detail?id=${item.id}`}>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify line-clamp-3 mb-4 hover:text-slate-900 cursor-pointer">
                        {item.excerpt}
                      </p>
                    </Link>
                  </div>

                  <div>
                    <Link href={`/news/detail?id=${item.id}`} className="bg-[#8B0000] hover:bg-red-800 text-white font-bold text-xs py-2 px-4 rounded shadow-sm transition-colors inline-block">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <Link href="/news" className="bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold py-2.5 px-6 rounded shadow inline-block">
                ← Kembali ke Halaman News
              </Link>
            </div>
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
              <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-400/30 pb-2">Kategori Berita</h3>
              <ul className="text-xs sm:text-sm font-semibold text-slate-700 space-y-2.5">
                {categoriesList.map((cat, i) => (
                  <li key={i} className="border-b border-[#D5CCB3]/50 pb-1.5">
                    <Link href={`/news/category?cat=${cat.id}`} className="hover:text-red-900 flex justify-between items-center">
                      <span>{cat.name}</span>
                      <span className="bg-slate-700 text-white text-[10px] px-2 py-0.5 rounded-full">{cat.count}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Arsip Berita */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">Arsip Berita</h3>
              <ul className="text-sm font-semibold text-slate-600 space-y-2">
                <li className="hover:text-red-900 cursor-pointer">August 2026</li>
                <li className="hover:text-red-900 cursor-pointer">April 2026</li>
                <li className="hover:text-red-900 cursor-pointer">August 2025</li>
              </ul>
            </div>

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
