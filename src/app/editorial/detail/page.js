import Link from "next/link";

export const metadata = {
  title: "Tugas Kepala Sekolah Sebagai Pembina Siswa Siswa - SMP SMA Advent Batam",
};

export default function EditorialDetailPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      
      {/* ========================================= */}
      {/* AREA KONTEN UTAMA (Background Beige)      */}
      {/* ========================================= */}
      <section className="w-full bg-[#DCC690] text-slate-900 flex-1 pt-6 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Breadcrumb */}
          <div className="text-xs text-slate-700 font-semibold mb-8 flex items-center gap-1 flex-wrap">
            <span>Anda ada di :</span>
            <Link href="/" className="text-[#047857] hover:underline ml-1">🏠 Beranda</Link>
            <span>-</span>
            <Link href="/editorial" className="text-[#047857] hover:underline">Editorial</Link>
            <span>-</span>
            <span className="text-slate-600">Tugas Kepala Sekolah Sebagai Pembina Siswa Siswa</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* === KOLOM KIRI (Konten Teks Berita) === */}
            <div className="lg:col-span-8 flex flex-col">
              
              <h1 className="text-2xl sm:text-3xl font-black text-slate-800 mb-3 leading-tight">
                Tugas Kepala Sekolah Sebagai Pembina Siswa Siswa
              </h1>
              
              <p className="text-xs sm:text-sm text-slate-700 mb-4">
                Diterbitkan : Tuesday, 11 July 2017
              </p>

              {/* Ikon Media Sosial */}
              <div className="flex gap-1.5 mb-6">
                <span className="w-6 h-6 bg-emerald-600 text-white flex items-center justify-center rounded text-xs cursor-pointer hover:bg-emerald-700">f</span>
                <span className="w-6 h-6 bg-emerald-500 text-white flex items-center justify-center rounded text-xs cursor-pointer hover:bg-emerald-600">t</span>
                <span className="w-6 h-6 bg-green-500 text-white flex items-center justify-center rounded text-xs cursor-pointer hover:bg-green-600">w</span>
              </div>

              {/* Teks Artikel */}
              <div className="space-y-4 text-[13px] sm:text-sm text-slate-800 leading-relaxed text-justify">
                <p>
                  An potest, inquit ille, quicquam esse suavius quam nihil dolere? Contemnit enim disserendi elegantiam, confuse loquitur. An est aliquid per se ipsum flagitiosum, etiamsi nulla comitetur infamia? Ab hoc autem quaedam non melius quam veteres, quaedam omnino relicta.
                </p>
                <p>
                  Quia dolori non voluptas contraria est, sed doloris privatio. Omnia contraria, quos etiam insanos esse vultis. Quid Zeno? An vero displicuit ea, quae tributa est animi virtutibus tanta praestantia? Primum cur ista res digna odio est, nisi quod est turpis? Ad eas enim res ab Epicuro praecepta dantur. Quicquid enim a sapientia proficiscitur, id continuo debet expletum esse omnibus suis partibus; Ut optime, secundum naturam affectum esse possit.
                </p>
                <p>
                  Nummus in Croesi divitiis obscuratur, pars est tamen divitiarum. Quamvis enim depravatae non sint, pravae tamen esse possunt. Idemque diviserunt naturam hominis in animum et corpus. Transfer idem ad modestiam vel temperantiam, quae est moderatio cupiditatum rationi oboediens. Immo alio genere; Illa sunt similia: hebes acies est cuipiam oculorum, corpore alius senescit; Potius ergo illa dicantur: turpe esse, viri non esse debilitari dolore, frangi, succumbere. Duae sunt enim res quoque, ne tu verba solum putes.
                </p>
              </div>

            </div>

            {/* === KOLOM KANAN (Foto, Info Penulis, Info Sekolah & Tulisan Lainnya) === */}
            <div className="lg:col-span-4 flex flex-col">
              
              {/* Gambar Utama Berita & Info Penulis */}
              <div className="w-full aspect-[4/3] bg-slate-300 shadow-sm mb-3 rounded overflow-hidden">
                <img src="/slider-2.jpg" alt="Ilustrasi Penulis" className="w-full h-full object-cover" />
              </div>
              <p className="text-xs text-slate-700 font-medium mb-1">Penulis : Cluss Creative</p>
              <p className="text-xs text-slate-700 font-medium mb-8">Dibaca 57 kali</p>

              {/* Info Sekolah */}
              <div className="border-t border-slate-400/30 pt-6">
                <h2 className="text-center font-black text-slate-800 text-base mb-1 tracking-wide">
                  SMAS ADVENT BATAM
                </h2>
                <p className="text-center text-xs text-slate-800 font-medium mb-6 px-4">
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

              {/* TULISAN LAINNYA (Tepat di bawah Email) */}
              <div className="mt-8">
                <h3 className="font-bold text-lg text-slate-800 mb-5">Tulisan Lainnya</h3>
                <div className="space-y-5">
                  <div>
                    <Link href="#" className="text-[#047857] font-bold hover:underline text-[13px] leading-snug block">
                      Membentuk Karakter Siswa Di Sekolah
                    </Link>
                    <p className="text-[11px] text-slate-600 italic mt-1">Dibaca : 62 kali</p>
                  </div>
                  <div>
                    <Link href="#" className="text-[#047857] font-bold hover:underline text-[13px] leading-snug block">
                      Pelajaran Serta Keteladanan Dari Para Pahlawan
                    </Link>
                    <p className="text-[11px] text-slate-600 italic mt-1">Dibaca : 235 kali</p>
                  </div>
                  <div>
                    <Link href="#" className="text-[#047857] font-bold hover:underline text-[13px] leading-snug block">
                      Editorial Oleh Kepala Sekolah
                    </Link>
                    <p className="text-[11px] text-slate-600 italic mt-1">Dibaca : 59 kali</p>
                  </div>
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
