import Link from "next/link";

export const metadata = {
  title: "Langkah Inovatif Menuju Era Digital - SMP SMA Advent Batam",
};

export default function EditorialDetailSatuPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      
      <section className="w-full bg-[#DCC690] text-slate-900 flex-1 pt-6 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-xs text-slate-700 font-semibold mb-8 flex items-center gap-1 flex-wrap">
            <span>You are here :</span>
            <Link href="/" className="text-[#047857] hover:underline ml-1">🏠 Home</Link>
            <span>-</span>
            <Link href="/editorial" className="text-[#047857] hover:underline">Editorial</Link>
            <span>-</span>
            <span className="text-slate-600 line-clamp-1 max-w-[200px] sm:max-w-none">
              Langkah Inovatif Menuju Era Digital
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            <div className="lg:col-span-8 flex flex-col">
              <h1 className="text-2xl sm:text-3xl font-black text-slate-800 mb-3 leading-tight">
                Langkah Inovatif Menuju Era Digital: SMP & SMA Advent Batam Segera Miliki Website Terpadu
              </h1>
              
              <p className="text-xs sm:text-sm text-slate-700 mb-4">
                Published : Monday, 21 Aug 2026, 10:15 WIB
              </p>

              <div className="flex gap-1.5 mb-6">
                <span className="w-6 h-6 bg-blue-600 text-white flex items-center justify-center rounded text-xs cursor-pointer hover:bg-blue-700 font-bold">f</span>
                <span className="w-6 h-6 bg-pink-600 text-white flex items-center justify-center rounded text-xs cursor-pointer hover:bg-pink-700 font-bold">📷</span>
                <span className="w-6 h-6 bg-red-600 text-white flex items-center justify-center rounded text-xs cursor-pointer hover:bg-red-700 font-bold">▶</span>
              </div>

              {/* ISI BERITA UTUH */}
              <div className="space-y-4 text-[13px] sm:text-sm text-slate-800 leading-relaxed text-justify">
                <p className="font-semibold text-slate-900">
                  Penting untuk mendokumentasikan secara digital dan online semua event yang terjadi di sekolah SMP dan SMA Advent Batam. Dokumentasi tersebut harus dibuat terstruktur, mudah diarsipkan, mudah diakses, dan ketika diakses memiliki penampilan yang menarik. Oleh karena itu pada hari Kamis - 25 September 2025, Bapak Tona Leon F. Situmorang, S.Pd., MA.Ed. selaku Kepala Sekolah SMP & SMA Advent Batam menyetujui usulan guru Mapel Informatika - Bapak Ir. Budhy Prasetyo untuk mendokumentasikan secara digital dan online berupa sebuah website SMP & SMA Advent Batam.
                </p>
                <p>
                  Dengan adanya website terpadu ini, diharapkan penyampaian informasi kepada siswa, orang tua, dan masyarakat luas dapat dilakukan secara transparan dan seketika (*real-time*). Website ini dirancang tidak hanya sebagai portal informasi satu arah, melainkan juga sebagai wadah interaktif yang mendukung berbagai kegiatan akademik maupun non-akademik di lingkungan sekolah.
                </p>
                <p>
                  Bapak Ir. Budhy Prasetyo menambahkan bahwa rancang bangun website ini akan mengutamakan kemudahan navigasi (*user-friendly*) serta desain yang responsif. Hal ini bertujuan agar informasi sekolah dapat diakses dengan optimal melalui perangkat komputer maupun telepon pintar. Ini adalah sebuah lompatan besar bagi SMP dan SMA Advent Batam untuk semakin mengukuhkan eksistensinya dan beradaptasi penuh di era teknologi digital yang berkembang pesat.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col">
              <div className="w-full aspect-[4/3] bg-slate-300 shadow-sm mb-3 rounded overflow-hidden">
                <img src="/slider-1.jpg" alt="Ilustrasi Sekolah" className="w-full h-full object-cover" />
              </div>
              <p className="text-xs text-slate-700 font-medium mb-1">Author : Admin</p>
              <p className="text-xs text-slate-700 font-medium mb-8">Read 357 times</p>

              <div className="mt-2">
                <h3 className="font-bold text-lg text-slate-800 mb-5">Other Articles</h3>
                <div className="space-y-5">
                  <div>
                    <Link href="/editorial/detail" className="text-[#047857] font-bold hover:underline text-[13px] leading-snug block">
                      Sambutan Kepala Sekolah: Menyongsong Masa Depan Melalui Website Resmi SMP & SMA Advent Batam
                    </Link>
                    <p className="text-[11px] text-slate-600 italic mt-1">Read : 142 times</p>
                  </div>
                </div>
              </div>

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
            <div>
              <p className="font-bold text-base mb-3">Recent Posts</p>
              <ul className="text-xs space-y-1.5 font-semibold">
                <li className="hover:underline cursor-pointer">KTT G20 Bali</li>
                <li className="hover:underline cursor-pointer">BAB 1 Badan Usaha dalam Perekonomian</li>
                <li className="hover:underline cursor-pointer">BAB 1 INFORMATIKA & PEMBELAJARANNYA</li>
                <li className="hover:underline cursor-pointer">TIK</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-base mb-3 mt-2">Recent Comments</p>
              <ul className="text-xs space-y-2 font-semibold max-w-md">
                <li className="hover:underline cursor-pointer line-clamp-1">Cluss Creative on Seinima Sapientia Proficiscitur Aconti Copassuni</li>
              </ul>
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
