import Link from "next/link";

export const metadata = {
  title: "News - SMP SMA Advent Batam",
};

export default function NewsPage() {
  const newsList = [
    {
      title: "Langkah Inovatif Menuju Era Digital: SMP & SMA Advent Batam Miliki Website Terpadu",
      date: "Monday, 21 Aug 2026",
      category: "Teknologi & Inovasi (Digitalisasi)",
      excerpt: "Penting untuk mendokumentasikan secara digital dan online semua event yang terjadi di sekolah SMP dan SMA Advent Batam. Di bawah persetujuan Kepala Sekolah Bapak Tona Leon F. Situmorang, S.Pd., MA.Ed., portal digital resmi ini resmi diluncurkan...",
      img: "/slider-1.jpg",
      link: "/editorial/detail-1"
    },
    {
      title: "Simulasi dan Bedah Kisi-Kisi Ujian Mapel Informatika & Ekonomi Semester Genap",
      date: "Thursday, 16 Apr 2026",
      category: "Akademik & Kurikulum",
      excerpt: "Guru mata pelajaran menyusun rangkaian kisi-kisi dan materi pendalaman guna mempersiapkan para siswa-siswi SMP dan SMA Advent Batam menghadapi Ujian Akhir Semester dengan hasil yang optimal...",
      img: "/slider-2.jpg",
      link: "#"
    },
    {
      title: "Aksi Gemilang Tim Ekstrakurikuler Beladiri (Karate & Silat) di Gelanggang Remaja",
      date: "Saturday, 14 Mar 2026",
      category: "Kesiswaan & Ekstra Kurikuler (Eskul)",
      excerpt: "Ekstrakurikuler bela diri menunjukkan performa membanggakan dalam latihan gabungan fisik dan mental. Kegiatan ini rutin diadakan untuk melatih kedisiplinan serta ketahanan fisik peserta didik...",
      img: "/slider-3.jpg",
      link: "#"
    },
    {
      title: "Siswa SMP & SMA Advent Batam Raih Juara 1 Lomba Sains Tingkat Kota Batam",
      date: "Monday, 02 Feb 2026",
      category: "Prestasi & Perlombaan",
      excerpt: "Sebuah kebanggaan bagi civitas akademika! Perwakilan siswa berhasil menyisihkan puluhan peserta dari sekolah lain berkat penguasaan konsep sains dan logika informatika yang matang...",
      img: "/slider-1.jpg",
      link: "#"
    },
    {
      title: "Pentas Seni (Pensi) 2025: Meriahkan Kreativitas Seni dan Budaya Siswa",
      date: "Friday, 12 Dec 2025",
      category: "Events & Pentas Seni (Pensi)",
      excerpt: "Panggung megah di aula sekolah dipenuhi oleh sorak sorai dan decak kagum tatkala para siswa menampilkan tarian daerah, paduan suara rohani, serta drama musikal kreatif buatan sendiri...",
      img: "/slider-2.jpg",
      link: "#"
    },
    {
      title: "Kunjungan Studi Banding dan Kerja Sama Edukasi dengan Instansi Teknologi Batam",
      date: "Wednesday, 05 Nov 2025",
      category: "Kerja Sama dengan Instansi Terkait",
      excerpt: "Guna memperluas wawasan vokasi dan dunia kerja digital, pihak sekolah menjalin nota kesepahaman dan kunjungan edukatif ke lembaga pengembangan teknologi terkemuka di Kota Batam...",
      img: "/slider-3.jpg",
      link: "#"
    },
    {
      title: "Kisah Inspiratif Alumni: Sukses Berkarier di Industri Kreatif Internasional",
      date: "Saturday, 18 Oct 2025",
      category: "Alumni & Hubungan Masyarakat (Humas)",
      excerpt: "Dalam program bincang inspiratif alumni, lulusan angkatan terdahulu membagikan pengalaman berharga mengenai pentingnya fondasi karakter dan disiplin ilmu yang ditanamkan selama bersekolah di Advent Batam...",
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
            School News & Updates
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
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-[10px] bg-red-900 text-white font-semibold px-2 py-0.5 rounded shadow-sm">{item.category}</span>
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
                    <Link href={item.link} className="bg-[#8B0000] hover:bg-red-800 text-white font-bold text-xs py-2 px-4 rounded shadow-sm transition-colors inline-block">
                      Read More
                    </Link>
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

            {/* Kategori Berita Sesuai Pilihan */}
            <div className="bg-[#E5DCC3] p-6 rounded-xl shadow-sm border border-[#D5CCB3]">
              <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-400/30 pb-2">Kategori Berita</h3>
              <ul className="text-xs sm:text-sm font-semibold text-slate-700 space-y-2.5">
                <li className="hover:text-red-900 cursor-pointer flex justify-between items-center border-b border-[#D5CCB3]/50 pb-1.5">
                  <span>Akademik & Kurikulum</span><span className="bg-slate-700 text-white text-[10px] px-2 py-0.5 rounded-full">1</span>
                </li>
                <li className="hover:text-red-900 cursor-pointer flex justify-between items-center border-b border-[#D5CCB3]/50 pb-1.5">
                  <span>Kesiswaan & Ekstra Kurikuler (Eskul)</span><span className="bg-slate-700 text-white text-[10px] px-2 py-0.5 rounded-full">1</span>
                </li>
                <li className="hover:text-red-900 cursor-pointer flex justify-between items-center border-b border-[#D5CCB3]/50 pb-1.5">
                  <span>Prestasi & Perlombaan</span><span className="bg-slate-700 text-white text-[10px] px-2 py-0.5 rounded-full">1</span>
                </li>
                <li className="hover:text-red-900 cursor-pointer flex justify-between items-center border-b border-[#D5CCB3]/50 pb-1.5">
                  <span>Teknologi & Inovasi (Digitalisasi)</span><span className="bg-slate-700 text-white text-[10px] px-2 py-0.5 rounded-full">1</span>
                </li>
                <li className="hover:text-red-900 cursor-pointer flex justify-between items-center border-b border-[#D5CCB3]/50 pb-1.5">
                  <span>Events & Pentas Seni (Pensi)</span><span className="bg-slate-700 text-white text-[10px] px-2 py-0.5 rounded-full">1</span>
                </li>
                <li className="hover:text-red-900 cursor-pointer flex justify-between items-center border-b border-[#D5CCB3]/50 pb-1.5">
                  <span>Alumni & Humas</span><span className="bg-slate-700 text-white text-[10px] px-2 py-0.5 rounded-full">1</span>
                </li>
                <li className="hover:text-red-900 cursor-pointer flex justify-between items-center">
                  <span>Kerja Sama Instansi</span><span className="bg-slate-700 text-white text-[10px] px-2 py-0.5 rounded-full">1</span>
                </li>
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
