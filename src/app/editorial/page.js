import Link from "next/link";

export const metadata = {
  title: "Principal's Editorial - SMP SMA Advent Batam",
};

export default function PrincipalEditorialListPage() {
  // Data 5 Berita (yang akan dirender hanya 4 berkat fungsi slice)
  const editorials = [
    {
      id: "sambutan-utama",
      title: "Sambutan Kepala Sekolah: Menyongsong Masa Depan Melalui Website Resmi SMP & SMA Advent Batam",
      date: "Saturday, 29 Aug 2026, 19:54 WIB",
      excerpt: "Kepala Sekolah SMP & SMA Advent Batam, Bapak Tona Leon F. Situmorang, S.Pd., MA.Ed. menyambut dengan sukacita dan antusiasme tinggi atas selesainya pembuatan website resmi sekolah. Beliau tidak hanya mengucap syukur kepada Tuhan, tetapi juga menaruh harapan besar agar seluruh civitas akademika dapat mendayagunakan platform digital ini...",
      img: "/slider-3.jpg"
    },
    {
      id: "langkah-inovatif",
      title: "Langkah Inovatif Menuju Era Digital: SMP & SMA Advent Batam Segera Miliki Website Terpadu",
      date: "Monday, 21 Aug 2026, 10:15 WIB",
      excerpt: "Penting untuk mendokumentasikan secara digital dan online semua event yang terjadi di sekolah SMP dan SMA Advent Batam. Dokumentasi tersebut harus dibuat terstruktur, mudah diarsipkan, mudah diakses, dan ketika diakses memiliki penampilan yang menarik. Oleh karena itu pada hari Kamis - 25 September 2025, Bapak Tona Leon F. Situmorang...",
      img: "/slider-1.jpg"
    },
    {
      id: "pendidikan-karakter",
      title: "Pendidikan Karakter Berlandaskan Nilai Kristiani di Tengah Arus Globalisasi",
      date: "Wednesday, 12 Aug 2026, 08:30 WIB",
      excerpt: "Dalam menghadapi derasnya arus informasi dan globalisasi, sekolah dituntut tidak hanya mencetak generasi yang cerdas secara intelektual, tetapi juga tangguh secara moral dan spiritual. Kami di SMP & SMA Advent Batam terus berkomitmen untuk mengintegrasikan nilai-nilai Kristiani dalam setiap aspek pembelajaran sehari-hari...",
      img: "/slider-2.jpg"
    },
    {
      id: "tahun-ajaran-baru",
      title: "Sinergi Guru, Siswa, dan Orang Tua dalam Menyambut Tahun Ajaran Baru 2026/2027",
      date: "Friday, 10 Jul 2026, 09:00 WIB",
      excerpt: "Menyongsong tahun ajaran baru, kami mengajak seluruh elemen sekolah, khususnya para orang tua wali murid, untuk terus menjalin sinergi yang kuat dengan pihak sekolah. Keterlibatan aktif orang tua di rumah sangat berdampak pada prestasi dan kedisiplinan siswa saat berada di lingkungan sekolah maupun di masyarakat...",
      img: "/slider-3.jpg"
    },
    {
      // BERITA KE-5 INI TIDAK AKAN TAMPIL DI HALAMAN INI KARENA DIBATASI 4 (Kecuali diklik View More)
      id: "evaluasi-akademik",
      title: "Evaluasi Akademik Semester Ganjil: Capaian, Prestasi, dan Target ke Depan",
      date: "Monday, 15 Jun 2026, 10:00 WIB",
      excerpt: "Rapat evaluasi hasil belajar siswa semester ini menunjukkan grafik peningkatan yang positif. Namun demikian, kita tidak boleh cepat berpuas diri. Seluruh dewan guru telah menyepakati beberapa terobosan baru untuk semester genap mendatang...",
      img: "/slider-1.jpg"
    }
  ];

  return (
    <main className="min-h-screen flex flex-col font-sans bg-[#E5DCC3]">
      
      {/* BREADCRUMB & HEADER */}
      <section className="w-full pt-8 pb-4 px-4 sm:px-8 max-w-7xl mx-auto shrink-0">
        <div className="text-xs text-slate-700 font-semibold mb-6 flex items-center gap-1 flex-wrap">
          <span>You are here :</span>
          <Link href="/" className="text-[#047857] hover:underline ml-1">🏠 Home</Link>
          <span>-</span>
          <span className="text-slate-600">Editorial</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-black text-slate-800 mb-8 tracking-wide">
          Principal's Editorial
        </h1>
      </section>

      {/* KONTEN UTAMA */}
      <section className="w-full flex-1 pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* KIRI - DAFTAR EDITORIAL (MAX 4 DITAMPILKAN) */}
          <div className="lg:col-span-8 flex flex-col space-y-10">
            {editorials.slice(0, 4).map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-6 items-start group">
                
                {/* THUMBNAIL FOTO */}
                <Link href={`/editorial/detail?id=${item.id}`} className="w-full sm:w-[280px] aspect-[4/3] shrink-0 bg-slate-300 overflow-hidden rounded-md shadow-sm block cursor-pointer">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </Link>

                {/* TEKS BERITA */}
                <div className="flex flex-col flex-1">
                  <p className="text-[11px] text-slate-600 font-medium mb-1">
                    Published : {item.date}
                  </p>
                  <Link href={`/editorial/detail?id=${item.id}`}>
                    <h2 className="text-[17px] sm:text-[19px] font-bold text-[#047857] mb-2.5 leading-snug hover:text-emerald-800 transition-colors cursor-pointer">
                      {item.title}
                    </h2>
                  </Link>
                  <Link href={`/editorial/detail?id=${item.id}`}>
                    <p className="text-[13px] sm:text-[14px] text-slate-800 leading-relaxed text-justify line-clamp-4 hover:text-black cursor-pointer">
                      {item.excerpt}
                    </p>
                  </Link>
                </div>

              </div>
            ))}

            {/* TOMBOL VIEW MORE DI BAWAH DAFTAR BERITA */}
            <div className="pt-4 border-t border-slate-400/30">
              <Link href="/editorial/all" className="bg-[#D97706] hover:bg-amber-700 text-white font-bold text-xs py-2.5 px-6 rounded shadow-sm transition-colors inline-block">
                View More Editorials →
              </Link>
            </div>
          </div>

          {/* KANAN - SIDEBAR (DIPISAHKAN GARIS PUTUS-PUTUS) */}
          <div className="lg:col-span-4 lg:border-l border-dashed border-slate-500 lg:pl-8 space-y-8">
            
            <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
              <h3 className="text-xl font-black text-slate-800 mb-1">SMAS ADVENT BATAM</h3>
              <p className="text-xs text-slate-800 mb-8 font-medium">
                Prof. DR. Hamka St., Kav 4, Kibing Village, Batu Aji District
              </p>
            </div>

            <ul className="text-xs sm:text-[13px] text-slate-800 space-y-4">
              <li className="flex justify-between items-start gap-4">
                <span className="font-bold shrink-0">NSPN</span>
                <span className="text-right">20404yyy</span>
              </li>
              <li className="flex justify-between items-start gap-4">
                <span className="font-bold shrink-0">Principal</span>
                <span className="text-right leading-tight">
                  Tona Leon Ferdinan<br/>Situmorang,<br/>S.Pd.,MA.,ED.
                </span>
              </li>
              <li className="flex justify-between items-center gap-4">
                <span className="font-bold shrink-0">Phone</span>
                <span className="text-[#047857] text-right">0778-363082</span>
              </li>
              <li className="flex justify-between items-center gap-4 border-b border-dashed border-slate-500 pb-6">
                <span className="font-bold shrink-0">Email</span>
                <span className="text-[#047857] text-right break-all">info@adventbatam.sch.id</span>
              </li>
              
              {/* SOCIAL MEDIA LINKS */}
              <li className="flex justify-between items-center gap-4 pt-2">
                <span className="font-bold text-slate-700">f</span>
                <span className="text-[#047857] text-right cursor-pointer hover:underline">Facebook</span>
              </li>
              <li className="flex justify-between items-center gap-4">
                <span className="font-bold text-slate-700">📷</span>
                <span className="text-[#047857] text-right cursor-pointer hover:underline">Instagram</span>
              </li>
              <li className="flex justify-between items-center gap-4">
                <span className="font-bold text-slate-700">▶</span>
                <span className="text-[#047857] text-right cursor-pointer hover:underline">YouTube</span>
              </li>
            </ul>

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
