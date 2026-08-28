import Link from "next/link";

export const metadata = {
  title: "Editorial Kepala Sekolah - SMP SMA Advent Batam",
};

export default function EditorialPage() {
  // Data Daftar Editorial Kepala Sekolah
  const editorialList = [
    {
      title: "Pelajaran Serta Keteladanan Dari Para Pahlawan",
      date: "Tuesday, 11 Jul 2017",
      excerpt: "An potest, inquit ille, quicquam esse suavius quam nihil dolere? Contemnit enim disserendi elegantiam, confuse loquitur. An est aliquid per se ipsum flagitiosum, etiamsi nulla comitetur infamia? Ab hoc autem...",
      img: "/slider-1.jpg"
    },
    {
      title: "Tugas Kepala Sekolah Sebagai Pembina Siswa Siswa",
      date: "Tuesday, 11 Jul 2017",
      excerpt: "An potest, inquit ille, quicquam esse suavius quam nihil dolere? Contemnit enim disserendi elegantiam, confuse loquitur. An est aliquid per se ipsum flagitiosum, etiamsi nulla comitetur infamia? Ab hoc autem...",
      img: "/slider-2.jpg"
    },
    {
      title: "Editorial Oleh Kepala Sekolah",
      date: "Tuesday, 11 Jul 2017",
      excerpt: "An potest, inquit ille, quicquam esse suavius quam nihil dolere? Contemnit enim disserendi elegantiam, confuse loquitur. An est aliquid per se ipsum flagitiosum, etiamsi nulla comitetur infamia? Ab hoc autem...",
      img: "/slider-3.jpg"
    },
    {
      title: "Membentuk Karakter Siswa Di Sekolah",
      date: "Tuesday, 11 Jul 2017",
      excerpt: "An potest, inquit ille, quicquam esse suavius quam nihil dolere? Contemnit enim disserendi elegantiam, confuse loquitur. An est aliquid per se ipsum flagitiosum, etiamsi nulla comitetur infamia? Ab hoc autem...",
      img: "/slider-1.jpg"
    }
  ];

  return (
    <main className="min-h-screen flex flex-col font-sans">
      
      {/* ========================================= */}
      {/* AREA KONTEN UTAMA (Background Beige)      */}
      {/* ========================================= */}
      <section className="w-full bg-[#DCC690] text-slate-900 flex-1 pt-6 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Breadcrumb */}
          <div className="text-xs text-slate-700 font-semibold mb-8 flex items-center gap-1">
            <span>Anda ada di :</span>
            <Link href="/" className="text-teal-700 hover:underline ml-1">🏠 Beranda</Link>
            <span>-</span>
            <span>Editorial</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* === KOLOM KIRI (Daftar Editorial) === */}
            <div className="lg:col-span-8 flex flex-col">
              <h1 className="text-2xl font-black text-slate-800 mb-8">Editorial Kepala Sekolah</h1>
              
              <div className="space-y-6">
                {editorialList.map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row gap-5 items-start">
                    {/* Thumbnail Foto */}
                    <div className="w-full sm:w-48 aspect-[4/3] shrink-0 bg-slate-300 shadow-sm">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    {/* Teks Berita */}
                    <div className="flex flex-col">
                      <p className="text-[11px] sm:text-xs text-slate-700 mb-1">
                        Terbit : {item.date}
                      </p>
                      <Link href="#" className="text-[#047857] hover:text-emerald-800 font-bold text-lg leading-tight mb-2 transition-colors">
                        {item.title}
                      </Link>
                      <p className="text-sm text-slate-800 leading-relaxed text-justify">
                        {item.excerpt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* === KOLOM KANAN (Sidebar Info Sekolah) === */}
            <div className="lg:col-span-4 lg:border-l border-dashed border-slate-500 lg:pl-8 flex flex-col pt-2">
              <h2 className="text-center font-black text-slate-800 text-base mb-1 tracking-wide">
                SMAS ADVENT BATAM
              </h2>
              <p className="text-center text-xs text-slate-800 font-medium mb-8 px-4">
                Jl. Prof. DR. Hamka, Kav 4, Kel. Kibing, Kec. Batu Aji
              </p>

              <div className="space-y-4 text-xs font-semibold text-slate-800">
                <div className="flex justify-between items-center border-b border-slate-400/30 pb-2">
                  <span>NSPN</span>
                  <span className="text-right">20404yyy</span>
                </div>
                <div className="flex justify-between items-start border-b border-slate-400/30 pb-2">
                  <span>Kepala Sekolah</span>
                  <span className="text-right max-w-[150px]">
                    Tona Leon Ferdinan<br/>Situmorang,<br/>S.Pd.,MA.,ED.
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-400/30 pb-2">
                  <span>Telepon</span>
                  <span className="text-emerald-700 text-right hover:underline cursor-pointer">0099877776666</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-400/30 pb-2">
                  <span>Email</span>
                  <span className="text-emerald-700 text-right hover:underline cursor-pointer">drovptas@gmail.com</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-400/30 pb-2">
                  <span className="text-slate-700">f</span>
                  <Link href="#" className="text-emerald-700 text-right hover:underline">Facebook</Link>
                </div>
                <div className="flex justify-between items-center border-b border-slate-400/30 pb-2">
                  <span className="text-slate-700">🐦</span>
                  <Link href="#" className="text-emerald-700 text-right hover:underline">Twitter</Link>
                </div>
                <div className="flex justify-between items-center border-b border-slate-400/30 pb-2">
                  <span className="text-slate-700">📷</span>
                  <Link href="#" className="text-emerald-700 text-right hover:underline">Instagram</Link>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span className="text-slate-700">▶</span>
                  <Link href="#" className="text-emerald-700 text-right hover:underline">Youtube</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* WIDGET FOOTER ORANYE & KREDIT MERAH       */}
      {/* ========================================= */}
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
            <div>
              <p className="font-bold text-base mb-3">Recent Posts</p>
              <ul className="text-xs space-y-1.5 font-semibold">
                <li className="hover:underline cursor-pointer">KTT G20 Bali</li>
                <li className="hover:underline cursor-pointer">BAB 1 Badan Usaha dalam Perekonomian</li>
                <li className="hover:underline cursor-pointer">BAB 1 INFORMATIKA & PEMBELAJARANNYA</li>
                <li className="hover:underline cursor-pointer">TIK</li>
                <li className="hover:underline cursor-pointer">Hello world!</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-base mb-3 mt-2">Recent Comments</p>
              <ul className="text-xs space-y-2 font-semibold max-w-md">
                <li className="hover:underline cursor-pointer">A WordPress Commenter on Hello world!</li>
                <li className="hover:underline cursor-pointer line-clamp-1">Cluss Creative on Seinima Sapientia Proficiscitur Aconti Copassuni</li>
                <li className="hover:underline cursor-pointer line-clamp-1">Cluss Creative on Seinima Sapientia Proficiscitur Aconti Copassuni</li>
              </ul>
            </div>
            <div className="flex gap-16 mt-2">
              <div>
                <p className="font-bold text-base mb-3">Archives</p>
                <ul className="text-xs space-y-1.5 font-semibold">
                  <li className="hover:underline cursor-pointer">August 2025</li>
                  <li className="hover:underline cursor-pointer">June 2025</li>
                  <li className="hover:underline cursor-pointer">July 2021</li>
                  <li className="hover:underline cursor-pointer">May 2021</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-base mb-3">Categories</p>
                <ul className="text-xs space-y-1.5 font-semibold">
                  <li className="hover:underline cursor-pointer">Grade-07</li>
                  <li className="hover:underline cursor-pointer">Uncategorized</li>
                </ul>
              </div>
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
