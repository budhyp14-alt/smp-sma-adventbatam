import Link from "next/link";

export const metadata = {
  title: "Pelajaran Serta Keteladanan Dari Para Pahlawan - SMP SMA Advent Batam",
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
            <span className="text-slate-600 line-clamp-1 max-w-[200px] sm:max-w-none">Pelajaran Serta Keteladanan Dari Para Pahlawan</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            <div className="lg:col-span-8 flex flex-col">
              <h1 className="text-2xl sm:text-3xl font-black text-slate-800 mb-3 leading-tight">
                Pelajaran Serta Keteladanan Dari Para Pahlawan
              </h1>
              
              <p className="text-xs sm:text-sm text-slate-700 mb-4">
                Published : Tuesday, 11 Jul 2017, 13:45 WIB
              </p>

              <div className="flex gap-1.5 mb-6">
                <span className="w-6 h-6 bg-blue-600 text-white flex items-center justify-center rounded text-xs cursor-pointer hover:bg-blue-700 font-bold">f</span>
                <span className="w-6 h-6 bg-pink-600 text-white flex items-center justify-center rounded text-xs cursor-pointer hover:bg-pink-700 font-bold">📷</span>
                <span className="w-6 h-6 bg-red-600 text-white flex items-center justify-center rounded text-xs cursor-pointer hover:bg-red-700 font-bold">▶</span>
              </div>

              <div className="space-y-4 text-[13px] sm:text-sm text-slate-800 leading-relaxed text-justify">
                <p>An potest, inquit ille, quicquam esse suavius quam nihil dolere? Contemnit enim disserendi elegantiam, confuse loquitur. An est aliquid per se ipsum flagitiosum, etiamsi nulla comitetur infamia? Ab hoc autem quaedam non melius quam veteres, quaedam omnino relicta.</p>
                <p>Quia dolori non voluptas contraria est, sed doloris privatio. Omnia contraria, quos etiam insanos esse vultis. Quid Zeno? An vero displicuit ea, quae tributa est animi virtutibus tanta praestantia? Primum cur ista res digna odio est, nisi quod est turpis? Ad eas enim res ab Epicuro praecepta dantur. Quicquid enim a sapientia proficiscitur, id continuo debet expletum esse omnibus suis partibus; Ut optime, secundum naturam affectum esse possit.</p>
                <p>Nummus in Croesi divitiis obscuratur, pars est tamen divitiarum. Quamvis enim depravatae non sint, pravae tamen esse possunt. Idemque diviserunt naturam hominis in animum et corpus. Transfer idem ad modestiam vel temperantiam, quae est moderatio cupiditatum rationi oboediens. Immo alio genere; Illa sunt similia: hebes acies est cuipiam oculorum, corpore alius senescit; Potius ergo illa dicantur: turpe esse, viri non esse debilitari dolore, frangi, succumbere. Duae sunt enim res quoque, ne tu verba solum putes.</p>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col">
              <div className="w-full aspect-[4/3] bg-slate-300 shadow-sm mb-3 rounded overflow-hidden">
                <img src="/slider-2.jpg" alt="Ilustrasi Penulis" className="w-full h-full object-cover" />
              </div>
              <p className="text-xs text-slate-700 font-medium mb-1">Author : Cluss Creative</p>
              <p className="text-xs text-slate-700 font-medium mb-8">Read 235 times</p>

              <div className="mt-2">
                <h3 className="font-bold text-lg text-slate-800 mb-5">Other Articles</h3>
                <div className="space-y-5">
                  <div>
                    <Link href="#" className="text-[#047857] font-bold hover:underline text-[13px] leading-snug block">Tugas Kepala Sekolah Sebagai Pembina Siswa Siswa</Link>
                    <p className="text-[11px] text-slate-600 italic mt-1">Read : 57 times</p>
                  </div>
                  <div>
                    <Link href="#" className="text-[#047857] font-bold hover:underline text-[13px] leading-snug block">Editorial Oleh Kepala Sekolah</Link>
                    <p className="text-[11px] text-slate-600 italic mt-1">Read : 59 times</p>
                  </div>
                  <div>
                    <Link href="#" className="text-[#047857] font-bold hover:underline text-[13px] leading-snug block">Membentuk Karakter Siswa Di Sekolah</Link>
                    <p className="text-[11px] text-slate-600 italic mt-1">Read : 62 times</p>
                  </div>
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
