import Link from "next/link";

export const metadata = {
  title: "Pelajaran Serta Keteladanan Dari Para Pahlawan - SMP SMA Advent Batam",
};

export default function EditorialDetailPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      
      <section className="w-full bg-[#DCC690] text-slate-900 flex-1 pt-6 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Breadcrumb */}
          <div className="text-xs text-slate-700 font-semibold mb-8 flex items-center gap-1 flex-wrap">
            <span>Anda ada di :</span>
            <Link href="/" className="text-emerald-800 hover:underline ml-1">🏠 Beranda</Link>
            <span>-</span>
            <Link href="/editorial" className="text-emerald-800 hover:underline">Editorial</Link>
            <span>-</span>
            <span className="text-slate-500 line-clamp-1 max-w-[200px] sm:max-w-none">Pelajaran Serta Keteladanan Dari Para Pahlawan</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* === KOLOM KIRI (Baca Berita Lengkap) === */}
            <div className="lg:col-span-8 flex flex-col">
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#047857] mb-2 leading-tight">
                Pelajaran Serta Keteladanan Dari Para Pahlawan
              </h1>
              
              <p className="text-xs sm:text-sm text-slate-600 font-semibold mb-6 flex items-center gap-2">
                <span>📅 Tuesday, 11 Jul 2017</span>
                <span>|</span>
                <span>✍️ Tona Leon Ferdinan Situmorang</span>
              </p>

              {/* Foto Utama Berita */}
              <div className="w-full aspect-video bg-slate-300 shadow-md mb-8 rounded overflow-hidden">
                <img src="/slider-1.jpg" alt="Pelajaran Pahlawan" className="w-full h-full object-cover" />
              </div>

              {/* Isi Paragraf Berita */}
              <div className="space-y-4 text-[15px] sm:text-base text-slate-800 leading-relaxed text-justify">
                <p>
                  An potest, inquit ille, quicquam esse suavius quam nihil dolere? Contemnit enim disserendi elegantiam, confuse loquitur. An est aliquid per se ipsum flagitiosum, etiamsi nulla comitetur infamia? Ab hoc autem quaedam non melius quam veteres, quaedam omnino relicta. Quia dolori non voluptas contraria est, sed doloris privatio. Omnia contraria, quos etiam insanos esse vultis. Quid Zeno? An vero displicuit ea, quae tributa est animi virtutibus tanta praestantia? Primum cur ista res digna odio est, nisi quod est turpis?
                </p>
                <p>
                  Sed in rebus apertissimis nimium longi sumus. Duo Reges: constructio interrete. Dictorem. Scripsit enim et multis saepe verbis et breviter contra voluptatem hanc, qua philosophia probatur, praeter illam, quae divinis praeceptis commendatur. Hoc est non dividere, sed frangere. Cum autem venissemus in Academiae non sine causa, mox videro; Iam in altera philosophiae parte. Nam memini etiam quae nolo, oblivisci non possum quae volo. Sed quia pacem animis afferat.
                </p>
                <p>
                  Atque his de rebus et splendida est eorum et illustris oratio. Hoc loco tenere se Triarius non potuit. Nam qui sciet ubi quidque positum sit vel quam paene sit in rebus, is certe ea, quae sint in rebus, comprehendet. Cum id quoque, utrum esse vultis, ruat. Tu vero, inquam, ducas licet, si modo in hoc. Ergo opifex plus sibi proponet ad formarum quam ille, qui nihil aliud legere, nisi ea quae sint in rebus, aut qualia sint.
                </p>
              </div>

              {/* Tombol Kembali */}
              <div className="mt-10 border-t border-slate-400/30 pt-6">
                <Link href="/editorial" className="bg-[#8B0000] hover:bg-red-800 text-white font-bold py-2.5 px-6 rounded shadow-sm text-sm inline-block transition-colors">
                  &larr; Kembali ke Daftar Editorial
                </Link>
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
                  <span className="text-emerald-700 text-right hover:underline cursor-pointer">0778-363082</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-400/30 pb-2">
                  <span>Email</span>
                  <span className="text-emerald-700 text-right hover:underline cursor-pointer">info@adventbatam.sch.id</span>
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
