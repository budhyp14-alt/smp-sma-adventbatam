import Link from "next/link";

export const metadata = {
  title: "School Profile - SMP SMA Advent Batam",
};

export default function ProfilePage() {
  return (
    <main className="min-h-screen flex flex-col font-sans bg-[#F3EFE4]">
      
      {/* SECTION HEADER & BREADCRUMB */}
      <section className="w-full bg-[#DCC690] text-slate-900 pt-6 pb-12 px-4 shrink-0">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs text-slate-700 font-semibold mb-6 flex items-center gap-1 flex-wrap">
            <span>You are here :</span>
            <Link href="/" className="text-[#047857] hover:underline ml-1">🏠 Home</Link>
            <span>-</span>
            <span className="text-slate-600">School Profile</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-black text-slate-800 mb-4 border-b-2 border-slate-400/30 pb-4 uppercase tracking-wide">
            School Profile
          </h1>
        </div>
      </section>

      {/* SECTION KONTEN PROFIL */}
      <section className="w-full flex-1 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* KIRI - KONTEN UTAMA */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Foto Hero Profil */}
            <div className="w-full aspect-[21/9] rounded-xl overflow-hidden shadow-md">
              <img src="/slider-1.jpg" alt="Gedung SMP SMA Advent Batam" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>

            {/* Sejarah Singkat */}
            <div>
              <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
                <span className="bg-red-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm shadow">🏛️</span>
                Sejarah Singkat
              </h2>
              <div className="bg-[#E5DCC3] p-6 rounded-xl shadow-sm text-slate-700 text-sm sm:text-base leading-relaxed text-justify space-y-4 border border-[#D5CCB3]">
                <p>
                  SMP & SMA Advent Batam berdiri di bawah naungan Yayasan Pendidikan Advent Batam (YPAB) dengan tujuan luhur untuk turut serta mencerdaskan kehidupan bangsa, tidak hanya dari segi intelektual, tetapi juga membina karakter peserta didik yang berlandaskan nilai-nilai Kristiani.
                </p>
                <p>
                  Berlokasi di Jl. Prof. DR. Hamka, Kav 4, Kel. Kibing, Kec. Batu Aji, sekolah ini terus berkembang seiring kemajuan zaman, melengkapi fasilitas dari ruang laboratorium, fasilitas olahraga bela diri, hingga sistem digitalisasi pendidikan yang mumpuni. Kami berkomitmen membentuk generasi yang "Mendidik Generasi Cerdas dan Berkarakter Kristus".
                </p>
              </div>
            </div>

            {/* Visi & Misi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Kartu Visi */}
              <div className="bg-[#DCC690] p-6 rounded-xl shadow-sm border border-slate-400/30">
                <h3 className="text-xl font-bold text-slate-800 mb-3 text-center border-b border-slate-500/20 pb-2">VISI</h3>
                <p className="text-slate-700 text-center font-medium italic text-sm sm:text-base">
                  "Terwujudnya Pendidikan Berkarakter, Unggul, dan Berlandaskan Nilai-Nilai Kristiani di Era Globalisasi."
                </p>
              </div>

              {/* Kartu Misi */}
              <div className="bg-[#DCC690] p-6 rounded-xl shadow-sm border border-slate-400/30">
                <h3 className="text-xl font-bold text-slate-800 mb-3 text-center border-b border-slate-500/20 pb-2">MISI</h3>
                <ul className="text-slate-700 text-sm list-disc pl-5 space-y-2">
                  <li>Menyelenggarakan proses pembelajaran yang inovatif dan berbasis teknologi.</li>
                  <li>Membentuk karakter peserta didik yang disiplin, jujur, dan takut akan Tuhan.</li>
                  <li>Meningkatkan kompetensi pendidik dan tenaga kependidikan.</li>
                  <li>Menyediakan fasilitas yang mendukung minat dan bakat siswa secara holistik.</li>
                </ul>
              </div>
            </div>

          </div>

          {/* KANAN - SIDEBAR */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Info Identitas Sekolah */}
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-red-900">
              <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">Identitas Sekolah</h3>
              <ul className="text-sm text-slate-600 space-y-3">
                <li className="flex justify-between">
                  <span className="font-semibold text-slate-800">Nama:</span>
                  <span className="text-right">SMP SMA Advent Batam</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold text-slate-800">NSPN:</span>
                  <span className="text-right">20404yyy</span>
                </li>
                <li className="flex justify-between border-t pt-2">
                  <span className="font-semibold text-slate-800">Kepala Sekolah:</span>
                  <span className="text-right max-w-[140px]">Tona Leon Ferdinan S., S.Pd.,MA.,ED.</span>
                </li>
                <li className="flex justify-between border-t pt-2">
                  <span className="font-semibold text-slate-800">Telepon:</span>
                  <span className="text-emerald-700 hover:underline cursor-pointer">0778-363082</span>
                </li>
                <li className="flex justify-between border-t pt-2">
                  <span className="font-semibold text-slate-800">Email:</span>
                  <span className="text-emerald-700 hover:underline cursor-pointer break-all text-right max-w-[150px]">info@adventbatam.sch.id</span>
                </li>
              </ul>
            </div>

            {/* Lokasi */}
            <div className="bg-[#E5DCC3] p-6 rounded-xl shadow-sm border border-[#D5CCB3]">
              <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                <span>📍</span> Lokasi Kami
              </h3>
              <p className="text-sm text-slate-700 mb-4">
                Jl. Prof. DR. Hamka, Kav 4, Kel. Kibing, Kec. Batu Aji, Batam, Kepulauan Riau.
              </p>
              <div className="w-full aspect-video bg-slate-300 rounded flex items-center justify-center shadow-inner text-slate-500 text-xs">
                [ Peta Google Maps ]
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
