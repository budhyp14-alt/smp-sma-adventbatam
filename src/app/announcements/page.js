import Link from "next/link";

export const metadata = {
  title: "Announcements - SMP SMA Advent Batam",
};

export default function AnnouncementsPage() {
  // Data 5 Pengumuman (hanya 4 yang dirender di awal)
  const announcements = [
    {
      id: "pengumuman-ppdb-2026",
      title: "Pengumuman Pendaftaran Peserta Didik Baru (PPDB) Tahun Ajaran 2026/2027",
      date: "Tuesday, 25 Aug 2026, 08:00 WIB",
      excerpt: "Diberitahukan kepada seluruh calon peserta didik dan orang tua/wali, bahwa pendaftaran siswa baru tingkat SMP dan SMA Advent Batam untuk gelombang pertama telah resmi dibuka. Silakan melengkapi berkas pendaftaran melalui portal PPDB online...",
      img: "/slider-1.jpg"
    },
    {
      id: "pengambilan-rapor",
      title: "Jadwal Pengambilan Rapor Semester Genap dan Pertemuan Wali Murid",
      date: "Monday, 15 Jun 2026, 10:30 WIB",
      excerpt: "Menjelang akhir tahun ajaran, kami mengundang Bapak/Ibu wali murid untuk hadir dalam acara penyerahan rapor hasil evaluasi belajar siswa. Acara akan dilaksanakan secara bergiliran untuk mematuhi protokol kenyamanan bersama...",
      img: "/slider-2.jpg"
    },
    {
      id: "libur-nasional",
      title: "Pemberitahuan Libur Nasional dan Cuti Bersama Hari Raya",
      date: "Wednesday, 20 May 2026, 14:15 WIB",
      excerpt: "Berdasarkan kalender akademik dan ketetapan pemerintah pusat, kegiatan belajar mengajar (KBM) akan diliburkan sementara waktu terhitung mulai tanggal 22 hingga 26 Mei 2026. KBM akan kembali aktif pada...",
      img: "/slider-3.jpg"
    },
    {
      id: "peraturan-seragam",
      title: "Pembaruan Tata Tertib dan Ketentuan Seragam Sekolah",
      date: "Thursday, 12 Mar 2026, 09:00 WIB",
      excerpt: "Dalam rangka meningkatkan kedisiplinan dan kerapian peserta didik, pihak manajemen sekolah telah memperbarui beberapa poin terkait standar penggunaan seragam harian dan seragam olahraga. Harap diperhatikan dengan saksama...",
      img: "/slider-1.jpg"
    },
    {
      // Pengumuman ke-5 ini akan disembunyikan (masuk ke View More)
      id: "maintenance-web",
      title: "Pemeliharaan Server Website dan Sistem E-Learning",
      date: "Sunday, 01 Feb 2026, 20:00 WIB",
      excerpt: "Mohon maaf atas ketidaknyamanan Anda. Sistem portal akademik dan website utama sekolah akan mengalami pemeliharaan rutin pada akhir pekan ini untuk peningkatan performa server...",
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
          <span className="text-slate-600">Announcements</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-black text-slate-800 mb-8 tracking-wide uppercase">
          School Announcements
        </h1>
      </section>

      {/* KONTEN UTAMA */}
      <section className="w-full flex-1 pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* KIRI - DAFTAR PENGUMUMAN (MAX 4 DITAMPILKAN) */}
          <div className="lg:col-span-8 flex flex-col space-y-10">
            {announcements.slice(0, 4).map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-6 items-start group">
                
                {/* THUMBNAIL FOTO */}
                <Link href={`/announcements/detail?id=${item.id}`} className="w-full sm:w-[280px] aspect-[4/3] shrink-0 bg-slate-300 overflow-hidden rounded-md shadow-sm block cursor-pointer">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </Link>

                {/* TEKS PENGUMUMAN */}
                <div className="flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-[10px] bg-slate-800 text-white font-semibold px-2 py-0.5 rounded shadow-sm">📢 Info</span>
                    <span className="text-[11px] text-slate-600 font-medium">Published : {item.date}</span>
                  </div>
                  <Link href={`/announcements/detail?id=${item.id}`}>
                    <h2 className="text-[17px] sm:text-[19px] font-bold text-[#047857] mb-2.5 leading-snug hover:text-emerald-800 transition-colors cursor-pointer">
                      {item.title}
                    </h2>
                  </Link>
                  <Link href={`/announcements/detail?id=${item.id}`}>
                    <p className="text-[13px] sm:text-[14px] text-slate-800 leading-relaxed text-justify line-clamp-4 hover:text-black cursor-pointer">
                      {item.excerpt}
                    </p>
                  </Link>
                </div>

              </div>
            ))}

            {/* TOMBOL VIEW MORE */}
            <div className="pt-4 border-t border-slate-400/30">
              <Link href="/announcements/all" className="bg-[#D97706] hover:bg-amber-700 text-white font-bold text-xs py-2.5 px-6 rounded shadow-sm transition-colors inline-block">
                View More Announcements →
              </Link>
            </div>
          </div>

          {/* KANAN - SIDEBAR (DIPISAHKAN GARIS PUTUS-PUTUS) */}
          <div className="lg:col-span-4 lg:border-l border-dashed border-slate-500 lg:pl-8 space-y-8">
            
            {/* KOTAK CARI */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-[15px] font-bold text-slate-800 mb-3 border-b border-slate-200 pb-2">Cari Pengumuman</h3>
              <div className="flex">
                <input type="text" placeholder="Kata kunci..." className="flex-1 p-2 border border-slate-300 rounded-l text-xs focus:outline-none focus:border-[#047857]" />
                <button className="bg-[#047857] hover:bg-emerald-800 text-white font-bold px-4 text-xs rounded-r transition-colors">Cari</button>
              </div>
            </div>

            {/* ARSIP PENGUMUMAN */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-[15px] font-bold text-slate-800 mb-3 border-b border-slate-200 pb-2">Arsip Pengumuman</h3>
              <ul className="text-xs font-semibold text-slate-600 space-y-2.5">
                <li className="hover:text-[#047857] cursor-pointer flex justify-between"><span>August 2026</span><span>(1)</span></li>
                <li className="hover:text-[#047857] cursor-pointer flex justify-between"><span>June 2026</span><span>(1)</span></li>
                <li className="hover:text-[#047857] cursor-pointer flex justify-between"><span>May 2026</span><span>(1)</span></li>
                <li className="hover:text-[#047857] cursor-pointer flex justify-between"><span>March 2026</span><span>(1)</span></li>
              </ul>
            </div>

            {/* INFO SEKOLAH */}
            <div className="pt-4 border-t border-dashed border-slate-500">
              <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
                <h3 className="text-xl font-black text-slate-800 mb-1">SMAS ADVENT BATAM</h3>
                <p className="text-xs text-slate-800 mb-6 font-medium">
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
                <li className="flex justify-between items-center gap-4 border-b border-dashed border-slate-500 pb-6">
                  <span className="font-bold shrink-0">Phone</span>
                  <span className="text-[#047857] text-right">0778-363082</span>
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
