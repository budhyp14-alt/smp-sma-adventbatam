import Link from "next/link";

export const metadata = {
  title: "Semua Program Bimbel - SMP SMA Advent Batam",
};

export default function AllBimbelPage() {
  // DATA BIMBEL FULL (Menampilkan seluruh 5 data, tanpa dipotong)
  const bimbels = [
    {
      id: "bimbel-matematika",
      title: "Bimbingan Belajar: Matematika",
      excerpt: "Program bimbingan intensif untuk memperdalam pemahaman konsep berhitung, logika matematika, serta persiapan menghadapi soal-soal ujian nasional dan olimpiade...",
      img: "/slider-1.jpg"
    },
    {
      id: "bimbel-bhs-indonesia",
      title: "Bimbingan Belajar: Bahasa Indonesia",
      excerpt: "Meningkatkan kemampuan literasi, pemahaman bacaan, tata bahasa baku, serta teknik penulisan esai dan karya ilmiah yang baik dan benar bagi para siswa...",
      img: "/slider-2.jpg"
    },
    {
      id: "bimbel-bhs-inggris",
      title: "Bimbingan Belajar: Bahasa Inggris",
      excerpt: "Fokus pada penguasaan vocabulary, grammar, reading comprehension, dan conversation untuk membekali siswa dengan kemampuan bahasa internasional secara aktif...",
      img: "/slider-3.jpg"
    },
    {
      id: "bimbel-pa",
      title: "Bimbingan Belajar: PA (Pendidikan Agama)",
      excerpt: "Pendalaman materi pendidikan karakter dan kerohanian untuk memperkuat iman serta pemahaman nilai-nilai Kristiani dalam kehidupan sehari-hari...",
      img: "/slider-1.jpg"
    },
    {
      id: "bimbel-ips",
      title: "Bimbingan Belajar: IPS",
      excerpt: "Pendalaman materi Ilmu Pengetahuan Sosial, mencakup sejarah, geografi, sosiologi, dan ekonomi guna meluaskan wawasan sosial peserta didik...",
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
          <Link href="/bimbel-eskul" className="text-[#047857] hover:underline">Bimbel & Eskul</Link>
          <span>-</span>
          <span className="text-slate-600">Semua Bimbel</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-black text-[#1e293b] mb-8 tracking-wide uppercase">
          KUMPULAN PROGRAM BIMBEL
        </h1>
      </section>

      {/* KONTEN UTAMA */}
      <section className="w-full flex-1 pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* KIRI - SEMUA DAFTAR BIMBEL */}
          <div className="lg:col-span-8 flex flex-col space-y-10">
            <div className="bg-[#D97706] text-white p-4 rounded-md shadow-sm mb-2 text-sm font-semibold">
              Menampilkan {bimbels.length} program Bimbingan Belajar (Bimbel) yang tersedia di SMP SMA Advent Batam.
            </div>

            {bimbels.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-6 items-start group pb-8 border-b border-slate-300 last:border-0">
                <Link href={`/bimbel-eskul/detail?id=${item.id}`} className="w-full sm:w-[300px] aspect-[4/3] shrink-0 bg-slate-300 overflow-hidden rounded-md shadow-sm block cursor-pointer relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-white/95 text-[#047857] text-[11px] font-bold px-2.5 py-1 rounded shadow-sm flex items-center gap-1">
                    Bimbel
                  </div>
                </Link>
                <div className="flex flex-col flex-1 pt-1">
                  <Link href={`/bimbel-eskul/detail?id=${item.id}`}>
                    <h3 className="text-[18px] sm:text-[20px] font-bold text-[#047857] mb-3 leading-snug hover:text-emerald-800 transition-colors cursor-pointer mt-1">
                      {item.title}
                    </h3>
                  </Link>
                  <Link href={`/bimbel-eskul/detail?id=${item.id}`}>
                    <p className="text-[13px] sm:text-[14px] text-slate-700 leading-relaxed text-justify hover:text-black cursor-pointer">
                      {item.excerpt}
                    </p>
                  </Link>
                  <div className="mt-4">
                    <Link href={`/bimbel-eskul/detail?id=${item.id}`} className="text-[#D97706] font-bold text-xs hover:underline flex items-center gap-1">
                      Baca Detail Program <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* KANAN - SIDEBAR (STANDAR BARU PERMANEN) */}
          <div className="lg:col-span-4 lg:border-l border-dashed border-slate-500 lg:pl-8 space-y-8">
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-[15px] font-bold text-slate-800 mb-4">Cari Program</h3>
              <div className="flex">
                <input type="text" placeholder="Kata kunci..." className="flex-1 p-2.5 border border-slate-300 rounded-l text-xs focus:outline-none focus:border-[#047857]" />
                <button className="bg-[#047857] hover:bg-emerald-800 text-white font-bold px-5 text-xs rounded-r transition-colors">Cari</button>
              </div>
            </div>

            {/* BLOK INFO SEKOLAH STANDAR PERMANEN */}
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
