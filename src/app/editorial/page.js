import Link from "next/link";

export const metadata = {
  title: "Principal's Editorial - SMP SMA Advent Batam",
};

export default function EditorialPage() {
  const editorialList = [
    {
      title: "Pelajaran Serta Keteladanan Dari Para Pahlawan",
      date: "Tuesday, 11 Jul 2017, 13:45 WIB",
      excerpt: "An potest, inquit ille, quicquam esse suavius quam nihil dolere? Contemnit enim disserendi elegantiam, confuse loquitur. An est aliquid per se ipsum flagitiosum, etiamsi nulla comitetur infamia? Ab hoc autem...",
      img: "/slider-1.jpg",
      link: "/editorial/detail"
    },
    {
      title: "Tugas Kepala Sekolah Sebagai Pembina Siswa Siswa",
      date: "Tuesday, 11 Jul 2017, 11:15 WIB",
      excerpt: "An potest, inquit ille, quicquam esse suavius quam nihil dolere? Contemnit enim disserendi elegantiam, confuse loquitur. An est aliquid per se ipsum flagitiosum, etiamsi nulla comitetur infamia? Ab hoc autem...",
      img: "/slider-2.jpg",
      link: "#"
    },
    {
      title: "Editorial Oleh Kepala Sekolah",
      date: "Tuesday, 11 Jul 2017, 09:30 WIB",
      excerpt: "An potest, inquit ille, quicquam esse suavius quam nihil dolere? Contemnit enim disserendi elegantiam, confuse loquitur. An est aliquid per se ipsum flagitiosum, etiamsi nulla comitetur infamia? Ab hoc autem...",
      img: "/slider-3.jpg",
      link: "#"
    },
    {
      title: "Membentuk Karakter Siswa Di Sekolah",
      date: "Tuesday, 11 Jul 2017, 08:00 WIB",
      excerpt: "An potest, inquit ille, quicquam esse suavius quam nihil dolere? Contemnit enim disserendi elegantiam, confuse loquitur. An est aliquid per se ipsum flagitiosum, etiamsi nulla comitetur infamia? Ab hoc autem...",
      img: "/slider-1.jpg",
      link: "#"
    }
  ];

  return (
    <main className="min-h-screen flex flex-col font-sans">
      <section className="w-full bg-[#DCC690] text-slate-900 flex-1 pt-6 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-xs text-slate-700 font-semibold mb-8 flex items-center gap-1">
            <span>You are here :</span>
            <Link href="/" className="text-[#047857] hover:underline ml-1">🏠 Home</Link>
            <span>-</span>
            <span className="text-slate-500">Editorial</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            <div className="lg:col-span-8 flex flex-col">
              <h1 className="text-2xl font-black text-slate-800 mb-8 border-b border-slate-400/30 pb-4">
                Principal's Editorial
              </h1>
              
              <div className="space-y-8">
                {editorialList.map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row gap-5 items-start group">
                    <div className="w-full sm:w-48 aspect-[4/3] shrink-0 bg-slate-300 shadow-sm overflow-hidden rounded">
                      <Link href={item.link}>
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </Link>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[11px] sm:text-xs text-slate-600 font-semibold mb-1">
                        Published : {item.date}
                      </p>
                      <Link href={item.link} className="text-[#047857] hover:text-emerald-900 font-bold text-lg leading-tight mb-2 transition-colors">
                        {item.title}
                      </Link>
                      <Link href={item.link} className="text-sm text-slate-800 leading-relaxed text-justify hover:text-slate-600 transition-colors">
                        {item.excerpt}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 lg:border-l border-dashed border-slate-500 lg:pl-8 flex flex-col pt-2">
              <h2 className="text-center font-black text-slate-800 text-base mb-1 tracking-wide">SMAS ADVENT BATAM</h2>
              <p className="text-center text-xs text-slate-800 font-medium mb-8 px-4">
                Prof. DR. Hamka St., Kav 4, Kibing Village, Batu Aji District
              </p>

              <div className="space-y-4 text-xs font-semibold text-slate-800">
                <div className="flex justify-between items-center border-b border-slate-400/30 pb-2">
                  <span>NSPN</span>
                  <span className="text-right">20404yyy</span>
                </div>
                <div className="flex justify-between items-start border-b border-slate-400/30 pb-2">
                  <span>Principal</span>
                  <span className="text-right max-w-[150px]">Tona Leon Ferdinan<br/>Situmorang,<br/>S.Pd.,MA.,ED.</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-400/30 pb-2">
                  <span>Phone</span>
                  <span className="text-emerald-700 text-right hover:underline cursor-pointer">0778-363082</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-400/30 pb-2">
                  <span>Email</span>
                  <span className="text-emerald-700 text-right hover:underline cursor-pointer">info@adventbatam.sch.id</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-400/30 pb-2">
                  <span className="text-slate-700 font-bold">f</span>
                  <Link href="#" className="text-emerald-700 text-right hover:underline">Facebook</Link>
                </div>
                <div className="flex justify-between items-center border-b border-slate-400/30 pb-2">
                  <span className="text-slate-700 font-bold">📷</span>
                  <Link href="#" className="text-emerald-700 text-right hover:underline">Instagram</Link>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span className="text-slate-700 font-bold">▶</span>
                  <Link href="#" className="text-emerald-700 text-right hover:underline">YouTube</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

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
