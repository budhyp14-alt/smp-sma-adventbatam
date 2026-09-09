import Link from "next/link";

export const metadata = {
  title: "Facilities - SMP SMA Advent Batam",
};

export default function FacilitiesPage() {
  const facilities = [
    {
      id: "lab-komputer",
      title: "Laboratorium Komputer & Informatika",
      category: "Akademik",
      excerpt: "Dilengkapi dengan puluhan unit komputer spesifikasi terbaru, proyektor interaktif, dan koneksi internet berkecepatan tinggi untuk menunjang pembelajaran coding, desain, dan ujian berbasis komputer (CBT)...",
      img: "/slider-1.jpg"
    },
    {
      id: "lab-ipa",
      title: "Laboratorium IPA (Fisika, Kimia, Biologi)",
      category: "Akademik",
      excerpt: "Fasilitas praktikum sains yang lengkap dengan mikroskop, alat peraga anatomi, reagen kimia standar aman, dan perangkat eksperimen fisika untuk mengasah kemampuan observasi dan analisis siswa...",
      img: "/slider-2.jpg"
    },
    {
      id: "lapangan-olahraga",
      title: "Lapangan Olahraga Terpadu",
      category: "Fisik & Olahraga",
      excerpt: "Area luar ruangan yang luas dan nyaman untuk memfasilitasi berbagai kegiatan ekstrakurikuler olahraga seperti basket, voli, futsal, serta bela diri (karate, judo, dan silat)...",
      img: "/slider-3.jpg"
    },
    {
      id: "perpustakaan",
      title: "Perpustakaan Digital & Ruang Baca",
      category: "Akademik & Literasi",
      excerpt: "Pusat literasi sekolah yang menyediakan ribuan koleksi buku cetak, modul pembelajaran, hingga akses e-book digital. Suasana ruang baca dirancang tenang dan nyaman menggunakan pendingin ruangan...",
      img: "/slider-1.jpg"
    },
    {
      id: "ruang-ibadah",
      title: "Ruang Ibadah & Kegiatan Kerohanian",
      category: "Spiritual",
      excerpt: "Fasilitas yang didedikasikan untuk kegiatan pendalaman iman, doa pagi, serta ibadah mingguan siswa guna membentuk karakter spiritual yang tangguh berlandaskan nilai-nilai Kristiani...",
      img: "/slider-2.jpg"
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
          <span className="text-slate-600">Facilities</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-black text-[#1e293b] mb-8 tracking-wide uppercase">
          SCHOOL FACILITIES
        </h1>
      </section>

      {/* KONTEN UTAMA */}
      <section className="w-full flex-1 pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* KIRI - DAFTAR FASILITAS (MAX 4 DITAMPILKAN) */}
          <div className="lg:col-span-8 flex flex-col space-y-12">
            {facilities.slice(0, 4).map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-6 items-start group">
                
                {/* THUMBNAIL FOTO */}
                <Link href={`/facilities/detail?id=${item.id}`} className="w-full sm:w-[300px] aspect-[4/3] shrink-0 bg-slate-300 overflow-hidden rounded-md shadow-sm block cursor-pointer relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-white/95 text-[#047857] text-[11px] font-bold px-2.5 py-1 rounded shadow-sm flex items-center gap-1">
                    🏢 Facility
                  </div>
                </Link>

                {/* TEKS FASILITAS */}
                <div className="flex flex-col flex-1 pt-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="text-[11px] text-slate-500 font-medium border border-slate-300 px-2 py-0.5 rounded-sm">{item.category}</span>
                  </div>
                  <Link href={`/facilities/detail?id=${item.id}`}>
                    <h2 className="text-[18px] sm:text-[20px] font-bold text-[#047857] mb-3 leading-snug hover:text-emerald-800 transition-colors cursor-pointer">
                      {item.title}
                    </h2>
                  </Link>
                  <Link href={`/facilities/detail?id=${item.id}`}>
                    <p className="text-[13px] sm:text-[14px] text-slate-700 leading-relaxed text-justify hover:text-black cursor-pointer">
                      {item.excerpt}
                    </p>
                  </Link>
                </div>

              </div>
            ))}

            {/* TOMBOL VIEW MORE */}
            <div className="pt-4 border-t border-slate-400/30">
              <Link href="/facilities/all" className="bg-[#D97706] hover:bg-amber-700 text-white font-bold text-xs py-2.5 px-6 rounded shadow-sm transition-colors inline-block">
                View More Facilities →
              </Link>
            </div>
          </div>

          {/* KANAN - SIDEBAR (STANDAR BARU) */}
          <div className="lg:col-span-4 lg:border-l border-dashed border-slate-500 lg:pl-8 space-y-8">
            
            {/* KOTAK CARI FASILITAS */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-[15px] font-bold text-slate-800 mb-4">Cari Fasilitas</h3>
              <div className="flex">
                <input type="text" placeholder="Kata kunci..." className="flex-1 p-2.5 border border-slate-300 rounded-l text-xs focus:outline-none focus:border-[#047857]" />
                <button className="bg-[#047857] hover:bg-emerald-800 text-white font-bold px-5 text-xs rounded-r transition-colors">Cari</button>
              </div>
            </div>

            {/* KATEGORI FASILITAS */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-[15px] font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">Kategori Fasilitas</h3>
              <ul className="text-[13px] font-semibold text-slate-600 space-y-3">
                <li className="hover:text-[#047857] cursor-pointer flex justify-between"><span>Akademik & Literasi</span><span>(3)</span></li>
                <li className="hover:text-[#047857] cursor-pointer flex justify-between"><span>Fisik & Olahraga</span><span>(1)</span></li>
                <li className="hover:text-[#047857] cursor-pointer flex justify-between"><span>Spiritual</span><span>(1)</span></li>
                <li className="hover:text-[#047857] cursor-pointer flex justify-between"><span>Kesenian</span><span>(0)</span></li>
              </ul>
            </div>

            {/* INFO SEKOLAH STANDAR */}
            <div className="pt-6 border-t border-dashed border-slate-400">
              <div className="flex flex-col items-center lg:items-end text-center lg:text-right mb-6">
                <h3 className="text-[22px] font-black text-[#1e293b] mb-1">SMP - SMA ADVENT BATAM</h3>
                <p className="text-[12px] text-slate-800 font-medium">
                  Prof. DR. Hamka St., Kav 4, Kibing Village, Batu Aji District
                </p>
              </div>

              <ul className="text-[13px] text-slate-800 space-y-4">
                <li className="flex justify-between items-start gap-4">
                  <span className="font-bold shrink-0">NSPN</span>
                  <span className="text-right">70002994</span>
                </li>
                <li className="flex justify-between items-start gap-4">
                  <span className="font-bold shrink-0">Principal</span>
                  <span className="text-right leading-tight">
                    Tona Leon Ferdinan<br/>Situmorang,<br/>S.Pd.,MA.,ED.
                  </span>
                </li>
                <li className="flex justify-between items-center gap-4">
                  <span className="font-bold shrink-0">Phone</span>
                  <span className="text-[#047857] text-right font-medium">0778-363082</span>
                </li>
                <li className="flex justify-between items-center gap-4 border-b border-dashed border-slate-400 pb-6">
                  <span className="font-bold shrink-0">Email</span>
                  <span className="text-[#047857] text-right font-medium break-all">info@adventbatam.sch.id</span>
                </li>
                
                {/* SOCIAL MEDIA LINKS */}
                <li className="flex justify-between items-center gap-4 pt-2">
                  <span className="font-bold text-slate-800 text-[13px] ml-1">f</span>
                  <span className="text-[#047857] text-right cursor-pointer hover:underline font-medium">Facebook</span>
                </li>
                <li className="flex justify-between items-center gap-4">
                  <span className="font-bold text-slate-500 text-lg">📷</span>
                  <span className="text-[#047857] text-right cursor-pointer hover:underline font-medium">Instagram</span>
                </li>
                <li className="flex justify-between items-center gap-4">
                  <span className="font-bold text-blue-500 text-lg">▶</span>
                  <span className="text-[#047857] text-right cursor-pointer hover:underline font-medium">YouTube</span>
                </li>
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
