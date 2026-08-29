import Link from "next/link";

export const metadata = {
  title: "Sambutan Kepala Sekolah - SMP SMA Advent Batam",
};

export default function EditorialDetailPage() {
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
            <span className="text-slate-600 line-clamp-1 max-w-[200px] sm:max-w-none">Sambutan Kepala Sekolah</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            <div className="lg:col-span-8 flex flex-col">
              <h1 className="text-2xl sm:text-3xl font-black text-slate-800 mb-3 leading-tight">
                Sambutan Kepala Sekolah: Menyongsong Masa Depan Melalui Website Resmi SMP & SMA Advent Batam
              </h1>
              
              <p className="text-xs sm:text-sm text-slate-700 mb-4">
                Published : Saturday, 29 Aug 2026, 19:54 WIB
              </p>

              <div className="flex gap-1.5 mb-6">
                <span className="w-6 h-6 bg-blue-600 text-white flex items-center justify-center rounded text-xs cursor-pointer hover:bg-blue-700 font-bold">f</span>
                <span className="w-6 h-6 bg-pink-600 text-white flex items-center justify-center rounded text-xs cursor-pointer hover:bg-pink-700 font-bold">📷</span>
                <span className="w-6 h-6 bg-red-600 text-white flex items-center justify-center rounded text-xs cursor-pointer hover:bg-red-700 font-bold">▶</span>
              </div>

              {/* ISI BERITA UTUH HASIL PENGEMBANGAN */}
              <div className="space-y-4 text-[13px] sm:text-sm text-slate-800 leading-relaxed text-justify">
                <p className="font-semibold text-slate-900">
                  Kepala Sekolah SMP & SMA Advent Batam, Bapak Tona Leon F. Situmorang, S.Pd., MA.Ed. menyambut dengan sukacita dan antusiasme tinggi atas selesainya pembuatan website resmi sekolah. Beliau tidak hanya mengucap syukur kepada Tuhan, tetapi juga menaruh harapan besar agar seluruh civitas akademika dapat mendayagunakan platform digital ini untuk kemajuan sekolah dalam menyongsong kemajuan teknologi yang berkembang pesat.
                </p>
                <p>
                  Kehadiran *website* resmi ini bukan sekadar portofolio digital sekolah, melainkan sebuah jembatan vital antara sekolah, peserta didik, orang tua murid, serta masyarakat luas. Dalam sambutannya, Bapak Tona Leon menekankan bahwa era digital menuntut institusi pendidikan untuk lebih transparan, dinamis, dan mudah diakses.
                </p>
                <p>
                  "Kita harus menyadari bahwa perkembangan zaman yang begitu masif ini menuntut kita untuk ikut bergerak maju. Website ini merupakan wajah digital dari SMP & SMA Advent Batam. Saya mengundang para dewan guru, murid, dan *stakeholder* terkait untuk berperan aktif mengisinya dengan karya, inovasi, dan prestasi yang membangun," ungkap beliau.
                </p>
                <p>
                  Melalui sarana *online* ini pula, sistem dokumentasi sekolah kini lebih terintegrasi dengan baik. Hal ini sejalan dengan usulan strategis yang sebelumnya diajukan oleh guru mata pelajaran Informatika. Diharapkan ke depannya, portal informasi ini dapat terus berkembang sebagai media publikasi *event*, pendaftaran *online* (PPDB), hingga wadah pembelajaran interaktif.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col">
              <div className="w-full aspect-[4/3] bg-slate-300 shadow-sm mb-3 rounded overflow-hidden">
                <img src="/slider-3.jpg" alt="Ilustrasi Kepala Sekolah" className="w-full h-full object-cover" />
              </div>
              <p className="text-xs text-slate-700 font-medium mb-1">Author : Admin</p>
              <p className="text-xs text-slate-700 font-medium mb-8">Read 142 times</p>

              <div className="mt-2">
                <h3 className="font-bold text-lg text-slate-800 mb-5">Other Articles</h3>
                <div className="space-y-5">
                  <div>
                    <Link href="/editorial/detail-1" className="text-[#047857] font-bold hover:underline text-[13px] leading-snug block">
                      Langkah Inovatif Menuju Era Digital: SMP & SMA Advent Batam Segera Miliki Website Terpadu
                    </Link>
                    <p className="text-[11px] text-slate-600 italic mt-1">Read : 357 times</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Bagian Bawah / Footer Diabaikan demi keterbacaan, strukturnya SAMA */}
    </main>
  );
}
