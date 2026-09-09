import Link from "next/link";

export const metadata = {
  title: "Activities - SMP SMA Advent Batam",
};

export default function ActivitiesPage() {
  const activities = [
    {
      id: "pramuka-provinsi",
      title: "Perkemahan Pramuka Tingkat Provinsi Kepulauan Riau",
      date: "10 - 12 September 2026",
      excerpt: "Anggota Pramuka Gugus Depan SMP dan SMA Advent Batam mengikuti kegiatan perkemahan tingkat provinsi. Kegiatan ini bertujuan untuk melatih kemandirian, kedisiplinan, serta kepemimpinan para siswa di alam terbuka...",
      img: "/slider-1.jpg"
    },
    {
      id: "kunjungan-industri",
      title: "Kunjungan Industri ke Perusahaan Teknologi Digital Batam",
      date: "Tuesday, 18 August 2026",
      excerpt: "Siswa-siswi peminatan Informatika melakukan kunjungan edukasi ke salah satu perusahaan teknologi terbesar di Batam. Mereka diperkenalkan dengan dunia kerja nyata, mulai dari pengembangan perangkat lunak hingga jaringan...",
      img: "/slider-2.jpg"
    },
    {
      id: "baksos-panti",
      title: "Bakti Sosial dan Kunjungan ke Panti Asuhan",
      date: "Friday, 07 August 2026",
      excerpt: "Sebagai wujud nyata penerapan nilai-nilai Kristiani dan kasih sayang terhadap sesama, perwakilan OSIS beserta dewan guru menyalurkan bantuan sembako dan pakaian layak pakai kepada panti asuhan setempat...",
      img: "/slider-3.jpg"
    },
    {
      id: "ldks-2026",
      title: "Latihan Dasar Kepemimpinan Siswa (LDKS) Pengurus OSIS",
      date: "25 - 26 July 2026",
      excerpt: "Pengurus OSIS masa bakti 2026/2027 digembleng dalam kegiatan LDKS. Para peserta mendapatkan materi mengenai manajemen organisasi, *public speaking*, dan penyelesaian masalah (*problem solving*) dari para narasumber...",
      img: "/slider-1.jpg"
    },
    {
      id: "lomba-paduan-suara",
      title: "Lomba Paduan Suara Antar Sekolah Menengah",
      date: "Saturday, 11 July 2026",
      excerpt: "Tim paduan suara sekolah tampil memukau pada kompetisi seni suara tingkat kota. Harmonisasi dan penghayatan lagu yang luar biasa berhasil membawa pulang piala kebanggaan untuk sekolah...",
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
          <span className="text-slate-600">Activities</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-black text-[#1e293b] mb-8 tracking-wide uppercase">
          SCHOOL ACTIVITIES
        </h1>
      </section>

      {/* KONTEN UTAMA */}
      <section className="w-full flex-1 pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* KIRI - DAFTAR KEGIATAN (MAX 4) */}
          <div className="lg:col-span-8 flex flex-col space-y-12">
            {activities.slice(0, 4).map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-6 items-start group">
                
                {/* THUMBNAIL FOTO */}
                <Link href={`/activities/detail?id=${item.id}`} className="w-full sm:w-[300px] aspect-[4/3] shrink-0 bg-slate-300 overflow-hidden rounded-md shadow-sm block cursor-pointer relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-slate-800 text-white text-[11px] font-bold px-2.5 py-1 rounded shadow flex items-center gap-1">
                    ★ Activity
                  </div>
                </Link>

                {/* TEKS KEGIATAN */}
                <div className="flex flex-col flex-1 pt-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="text-[11px] text-slate-500 font-medium">{item.date}</span>
                  </div>
                  <Link href={`/activities/detail?id=${item.id}`}>
                    <h2 className="text-[18px] sm:text-[20px] font-bold text-[#047857] mb-3 leading-snug hover:text-emerald-800 transition-colors cursor-pointer">
                      {item.title}
                    </h2>
                  </Link>
                  <Link href={`/activities/detail?id=${item.id}`}>
                    <p className="text-[13px] sm:text-[14px] text-slate-700 leading-relaxed text-justify hover:text-black cursor-pointer">
                      {item.excerpt}
                    </p>
                  </Link>
                </div>

              </div>
            ))}

            {/* TOMBOL VIEW MORE */}
            <div className="pt-4 border-t border-slate-400/30">
              <Link href="/activities/all" className="bg-[#D97706] hover:bg-amber-700 text-white font-bold text-xs py-2.5 px-6 rounded shadow-sm transition-colors inline-block">
                View More Activities →
              </Link>
            </div>
          </div>

          {/* KANAN - SIDEBAR */}
          <div className="lg:col-span-4 lg:border-l border-dashed border-slate-500 lg:pl-8 space-y-8">
            
            {/* KOTAK CARI */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-[15px] font-bold text-slate-800 mb-4">Cari Kegiatan</h3>
              <div className="flex">
                <input type="text" placeholder="Kata kunci..." className="flex-1 p-2.5 border border-slate-300 rounded-l text-xs focus:outline-none focus:border-[#047857]" />
                <button className="bg-[#047857] hover:bg-emerald-800 text-white font-bold px-5 text-xs rounded-r transition-colors">Cari</button>
              </div>
            </div>

            {/* KATEGORI KEGIATAN */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-[15px] font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">Kategori Kegiatan</h3>
              <ul className="text-[13px] font-semibold text-slate-600 space-y-3">
                <li className="hover:text-[#047857] cursor-pointer flex justify-between"><span>Eskul & Olahraga</span><span>(2)</span></li>
                <li className="hover:text-[#047857] cursor-pointer flex justify-between"><span>Kunjungan & Studi</span><span>(1)</span></li>
                <li className="hover:text-[#047857] cursor-pointer flex justify-between"><span>Bakti Sosial</span><span>(1)</span></li>
                <li className="hover:text-[#047857] cursor-pointer flex justify-between"><span>Pentas Seni</span><span>(1)</span></li>
              </ul>
            </div>

            {/* BLOK INFO SEKOLAH (SESUAI ATURAN BARU) */}
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
                
                {/* SOCIAL MEDIA */}
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
