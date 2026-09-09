import Link from "next/link";

export const metadata = {
  title: "Gallery - SMP SMA Advent Batam",
};

export default function GalleryPage() {
  // Data 5 Album Galeri (Hanya 4 yang dirender)
  const galleries = [
    {
      id: "album-wisuda-2026",
      title: "Album: Wisuda Purna Siswa & Pelepasan Kelas XII Tahun 2026",
      date: "Saturday, 23 May 2026",
      excerpt: "Kumpulan momen haru dan bahagia dalam acara wisuda dan pelepasan siswa-siswi kelas XII SMP dan SMA Advent Batam angkatan 2026. Acara ini dihadiri oleh para orang tua wali, dewan guru, dan pengurus yayasan...",
      img: "/slider-1.jpg",
      photosCount: 24
    },
    {
      id: "album-pensi-2025",
      title: "Album: Pentas Seni (Pensi) & Pameran Karya Siswa 2025",
      date: "Friday, 12 Dec 2025",
      excerpt: "Dokumentasi kemeriahan acara Pentas Seni akhir tahun. Menampilkan berbagai pertunjukan kreativitas siswa mulai dari tari tradisional, paduan suara, drama musikal, hingga pameran hasil karya seni rupa...",
      img: "/slider-2.jpg",
      photosCount: 36
    },
    {
      id: "album-hari-guru-2025",
      title: "Album: Perayaan Hari Guru Nasional 2025",
      date: "Tuesday, 25 Nov 2025",
      excerpt: "Momen kejutan dan apresiasi dari para siswa-siswi OSIS kepada seluruh dewan guru pengajar. Berisi foto-foto upacara bendera khusus, pemotongan tumpeng, dan pembagian bunga cinta kasih...",
      img: "/slider-3.jpg",
      photosCount: 15
    },
    {
      id: "album-pramuka-2025",
      title: "Album: Perkemahan Jumat Sabtu Minggu (Perjusami) Pramuka",
      date: "14 - 16 Aug 2025",
      excerpt: "Galeri kegiatan kepramukaan di alam terbuka. Para siswa diajarkan kemandirian, kekompakan tim, tali-temali, sandi morse, hingga kemeriahan acara api unggun pada malam puncak perkemahan...",
      img: "/slider-1.jpg",
      photosCount: 42
    },
    {
      id: "album-class-meeting-2025",
      title: "Album: Keseruan Class Meeting Semester Ganjil",
      date: "18 - 20 Jun 2025",
      excerpt: "Kumpulan foto pertandingan olahraga antarkelas paska ujian akhir semester. Menampilkan aksi-aksi seru siswa dalam perlombaan futsal, basket, dan tarik tambang...",
      img: "/slider-2.jpg",
      photosCount: 18
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
          <span className="text-slate-600">Gallery</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-black text-[#1e293b] mb-8 tracking-wide uppercase">
          SCHOOL GALLERY
        </h1>
      </section>

      {/* KONTEN UTAMA */}
      <section className="w-full flex-1 pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* KIRI - DAFTAR ALBUM GALERI (MAX 4) */}
          <div className="lg:col-span-8 flex flex-col space-y-12">
            {galleries.slice(0, 4).map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-6 items-start group">
                
                {/* THUMBNAIL ALBUM */}
                <Link href={`/gallery/detail?id=${item.id}`} className="w-full sm:w-[300px] aspect-[4/3] shrink-0 bg-slate-300 overflow-hidden rounded-md shadow-sm block cursor-pointer relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-white/95 text-slate-800 text-[11px] font-bold px-2.5 py-1 rounded shadow-sm flex items-center gap-1">
                    📸 {item.photosCount} Photos
                  </div>
                </Link>

                {/* TEKS ALBUM */}
                <div className="flex flex-col flex-1 pt-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="text-[11px] text-slate-500 font-medium">Updated : {item.date}</span>
                  </div>
                  <Link href={`/gallery/detail?id=${item.id}`}>
                    <h2 className="text-[18px] sm:text-[20px] font-bold text-[#047857] mb-3 leading-snug hover:text-emerald-800 transition-colors cursor-pointer">
                      {item.title}
                    </h2>
                  </Link>
                  <Link href={`/gallery/detail?id=${item.id}`}>
                    <p className="text-[13px] sm:text-[14px] text-slate-700 leading-relaxed text-justify hover:text-black cursor-pointer">
                      {item.excerpt}
                    </p>
                  </Link>
                </div>

              </div>
            ))}

            {/* TOMBOL VIEW MORE */}
            <div className="pt-4 border-t border-slate-400/30">
              <Link href="/gallery/all" className="bg-[#D97706] hover:bg-amber-700 text-white font-bold text-xs py-2.5 px-6 rounded shadow-sm transition-colors inline-block">
                View More Galleries →
              </Link>
            </div>
          </div>

          {/* KANAN - SIDEBAR (STANDAR BARU) */}
          <div className="lg:col-span-4 lg:border-l border-dashed border-slate-500 lg:pl-8 space-y-8">
            
            {/* KOTAK CARI GALERI */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-[15px] font-bold text-slate-800 mb-4">Cari Album</h3>
              <div className="flex">
                <input type="text" placeholder="Kata kunci..." className="flex-1 p-2.5 border border-slate-300 rounded-l text-xs focus:outline-none focus:border-[#047857]" />
                <button className="bg-[#047857] hover:bg-emerald-800 text-white font-bold px-5 text-xs rounded-r transition-colors">Cari</button>
              </div>
            </div>

            {/* KATEGORI GALERI */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-[15px] font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">Kategori Album</h3>
              <ul className="text-[13px] font-semibold text-slate-600 space-y-3">
                <li className="hover:text-[#047857] cursor-pointer flex justify-between"><span>Acara Sekolah</span><span>(4)</span></li>
                <li className="hover:text-[#047857] cursor-pointer flex justify-between"><span>Ekstrakurikuler</span><span>(2)</span></li>
                <li className="hover:text-[#047857] cursor-pointer flex justify-between"><span>Prestasi Siswa</span><span>(1)</span></li>
                <li className="hover:text-[#047857] cursor-pointer flex justify-between"><span>Kunjungan & Edukasi</span><span>(1)</span></li>
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
