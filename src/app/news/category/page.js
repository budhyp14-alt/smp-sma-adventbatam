import Link from "next/link";

export const metadata = {
  title: "Kategori Berita - SMP SMA Advent Batam",
};

export default function NewsCategoryPage() {
  // Simulasi data 4 berita dalam satu kategori
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
          
          <h1 className="text-3xl sm:text-4xl font-black text-slate-800 mb-2 uppercase tracking-wide">
            Kategori : Teknologi & Inovasi (Digitalisasi)
          </h1>
          <p className="text-xs sm:text-sm text-slate-700 font-medium">
            Menampilkan arsip berita pilihan (maksimal 4 berita terbaru) dalam kategori ini.
          </p>
        </div>
      </section>

      {/* KONTEN ARSIP KATEGORI */}
      <section className="w-full flex-1 py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {categoryArticles.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-5 items-start bg-[#E5DCC3] p-5 rounded-xl shadow-sm border border-[#D5CCB3] group">
              
              {/* KLIK FOTO THUMBNAIL */}
              <Link href={`/news/detail?id=${item.id}`} className="w-full sm:w-56 aspect-[4/3] shrink-0 bg-slate-300 overflow-hidden rounded-lg shadow-inner block cursor-pointer">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </Link>

              <div className="flex flex-col flex-1 justify-between h-full">
                <div>
                  <p className="text-[11px] text-slate-600 font-medium mb-1">Published : {item.date}</p>
                  
                  {/* KLIK JUDUL */}
                  <Link href={`/news/detail?id=${item.id}`}>
                    <h2 className="text-lg sm:text-xl font-bold text-red-950 mb-2 leading-snug hover:text-red-800 transition-colors cursor-pointer">
                      {item.title}
                    </h2>
                  </Link>

                  {/* KLIK LEAD */}
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

          <div className="pt-6 text-center">
            <Link href="/news" className="bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold py-2.5 px-6 rounded shadow inline-block">
              ← Kembali ke Halaman News
            </Link>
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
