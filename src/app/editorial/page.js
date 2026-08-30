import Link from "next/link";

export const metadata = {
  title: "Principal's Editorial - SMP SMA Advent Batam",
};

export default function PrincipalEditorialListPage() {
  // Simulasi daftar editorial Kepala Sekolah (maksimal 4 yang tampil di halaman utama)
  const editorials = [
    {
      id: "sambutan-utama",
      title: "Sambutan Kepala Sekolah: Menyongsong Masa Depan Melalui Website Resmi SMP & SMA Advent Batam",
      date: "Saturday, 29 Aug 2026, 19:54 WIB",
      excerpt: "Kepala Sekolah SMP & SMA Advent Batam, Bapak Tona Leon F. Situmorang, S.Pd., MA.Ed. menyambut dengan sukacita dan antusiasme tinggi atas selesainya pembuatan website resmi sekolah...",
      img: "/slider-3.jpg"
    },
    {
      id: "langkah-inovatif",
      title: "Langkah Inovatif Menuju Era Digital: SMP & SMA Advent Batam Segera Miliki Website Terpadu",
      date: "Monday, 21 Aug 2026, 10:15 WIB",
      excerpt: "Penting untuk mendokumentasikan secara digital dan online semua event yang terjadi di sekolah SMP dan SMA Advent Batam. Dokumentasi tersebut harus dibuat terstruktur...",
      img: "/slider-1.jpg"
    },
    {
      id: "pendidikan-karakter",
      title: "Penguatan Pendidikan Karakter dan Nilai-Nilai Kristiani di Lingkungan Sekolah",
      date: "Tuesday, 14 Jul 2026, 08:30 WIB",
      excerpt: "Pembentukan akhlak mulia dan disiplin peserta didik menjadi prioritas utama dalam menghadapi tantangan era globalisasi saat ini...",
      img: "/slider-2.jpg"
    },
    {
      id: "persiapan-semester",
      title: "Persiapan Matang Menyongsong Tahun Ajaran Baru dan Kurikulum Merdeka",
      date: "Friday, 05 Jun 2026, 11:00 WIB",
      excerpt: "Koordinasi intensif bersama seluruh dewan guru guna memastikan efektivitas kegiatan belajar mengajar semester depan berjalan lancar...",
      img: "/slider-3.jpg"
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
            <span className="text-slate-600">Principal's Editorial</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-black text-slate-800 mb-4 border-b-2 border-slate-400/30 pb-4 uppercase tracking-wide">
            Principal's Editorial Archive
          </h1>
        </div>
      </section>

      {/* KONTEN UTAMA (MAX 4 DITAMPILKAN) */}
      <section className="w-full flex-1 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* KIRI - DAFTAR 4 EDITORIAL TERBARU */}
          <div className="lg:col-span-8 flex flex-col space-y-8">
            {editorials.slice(0, 4).map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-5 items-start bg-[#E5DCC3] p-5 rounded-xl shadow-sm border border-[#D5CCB3] group">
                <Link href={`/editorial/detail?id=${item.id}`} className="w-full sm:w-56 aspect-[4/3] shrink-0 bg-slate-300 overflow-hidden rounded-lg shadow-inner block cursor-pointer">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </Link>
                <div className="flex flex-col flex-1 justify-between h-full">
                  <div>
                    <p className="text-[11px] text-slate-600 font-medium mb-1">Published : {item.date}</p>
                    <Link href={`/editorial/detail?id=${item.id}`}>
                      <h2 className="text-lg sm:text-xl font-bold text-red-950 mb-2 leading-snug hover:text-red-800 transition-colors cursor-pointer">
                        {item.title}
                      </h2>
                    </Link>
                    <Link href={`/editorial/detail?id=${item.id}`}>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify line-clamp-3 mb-4 hover:text-slate-900 cursor-pointer">
                        {item.excerpt}
                      </p>
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <Link href={`/editorial/detail?id=${item.id}`} className="bg-[#8B0000] hover:bg-red-800 text-white font-bold text-xs py-2 px-4 rounded shadow-sm transition-colors inline-block">
                      Read More
                    </Link>
                    {/* Tombol View More jika ingin melihat arsip lengkap di luar 4 berita utama */}
                    <Link href="/editorial/all" className="bg-[#D97706] hover:bg-amber-700 text-white font-bold text-xs py-2 px-4 rounded shadow-sm transition-colors inline-block">
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* KANAN - SIDEBAR INFORMASI SEKOLAH */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-[#E5DCC3] p-6 rounded-xl shadow-md border-t-4 border-red-900 space-y-4">
              <h3 className="text-lg font-bold text-slate-800 border-b pb-2">SMAS ADVENT BATAM</h3>
              <p className="text-xs text-slate-700">Prof. DR. Hamka St., Kav 4, Kibing Village, Batu Aji District</p>
              <ul className="text-xs text-slate-700 space-y-2 border-t pt-3">
                <li className="flex justify-between"><span>NSPN:</span><span className="font-semibold">20404yyy</span></li>
                <li className="flex justify-between"><span>Principal:</span><span className="font-semibold text-right">Tona Leon Ferdinan Situmorang, S.Pd., MA., ED.</span></li>
                <li className="flex justify-between"><span>Phone:</span><span className="font-semibold text-emerald-700">0778-363082</span></li>
                <li className="flex justify-between"><span>Email:</span><span className="font-semibold text-emerald-700">info@adventbatam.sch.id</span></li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full shrink-0">
        <div className="bg-[#D97706] py-12 px-4 text-white">
          <div className="max-w-7xl mx-auto text-xs font-semibold">
            <p>© 2026 SMP SMA Advent Batam. Mendidik Generasi Cerdas dan Berkarakter Kristus.</p>
          </div>
        </div>
        <div className="bg-[#8B0000] text-white text-[10px] sm:text-xs text-center py-4 font-semibold tracking-wider">
          Developed by Ir. Budhy Prasetyo
        </div>
      </footer>

    </main>
  );
}
