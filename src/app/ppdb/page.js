import Link from "next/link";

export const metadata = {
  title: "PPDB - SMP SMA Advent Batam",
};

export default function PPDBPage() {
  // DATA INFO PPDB (4 Blok Informasi)
  const ppdbInfo = [
    {
      id: "jadwal-pendaftaran",
      title: "Jadwal Pendaftaran Gelombang 1 & 2",
      date: "Tahun Ajaran 2026/2027",
      excerpt: "Penerimaan Peserta Didik Baru (PPDB) Gelombang 1 dibuka mulai Januari hingga Maret 2026. Sedangkan Gelombang 2 akan dibuka pada bulan April hingga Juni 2026 (jika kuota masih tersedia). Segera amankan kursi Anda!",
      img: "/slider-1.jpg"
    },
    {
      id: "syarat-berkas",
      title: "Syarat & Ketentuan Berkas Pendaftaran",
      date: "Dokumen Wajib",
      excerpt: "Calon siswa wajib melampirkan salinan (fotokopi) Kartu Keluarga, Akta Kelahiran, NISN, Pas Foto terbaru, serta Surat Keterangan Lulus / Rapor dari sekolah asal. Berkas dapat dikumpulkan langsung ke tata usaha atau diunggah via portal online.",
      img: "/slider-2.jpg"
    },
    {
      id: "alur-pendaftaran",
      title: "Panduan Alur Pendaftaran Online",
      date: "Sistem Terpadu",
      excerpt: "Bagi pendaftar online, silakan mengisi formulir pendaftaran pada tautan yang tersedia. Setelah mendapatkan nomor registrasi, lakukan pembayaran formulir, lalu unggah bukti transfer dan berkas persyaratan di dashboard PPDB.",
      img: "/slider-3.jpg"
    },
    {
      id: "program-beasiswa",
      title: "Program Beasiswa & Keringanan Biaya",
      date: "Jalur Prestasi",
      excerpt: "SMP & SMA Advent Batam menyediakan program beasiswa jalur prestasi akademik dan non-akademik (olahraga/seni) tingkat kota/provinsi. Tersedia juga keringanan biaya bagi jemaat dan pendaftar bersaudara kandung.",
      img: "/slider-1.jpg"
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
          <span className="text-slate-600">PPDB</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-black text-[#1e293b] mb-8 tracking-wide uppercase">
          INFORMASI PPDB
        </h1>
      </section>

      {/* KONTEN UTAMA */}
      <section className="w-full flex-1 pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* KIRI - DAFTAR INFORMASI PPDB */}
          <div className="lg:col-span-8 flex flex-col space-y-12">
            
            <div className="bg-[#047857] text-white p-6 rounded-xl shadow-md mb-2">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">Penerimaan Peserta Didik Baru (PPDB) 2026/2027</h2>
              <p className="text-sm sm:text-base opacity-90 leading-relaxed">
                Mari bergabung bersama SMP & SMA Advent Batam. Kami berkomitmen membentuk generasi yang cerdas secara intelektual, terampil, dan memiliki karakter mulia berlandaskan nilai-nilai Kristiani.
              </p>
              <div className="mt-5">
                <button className="bg-[#D97706] hover:bg-amber-600 text-white font-bold py-2.5 px-6 rounded shadow transition-colors">
                  Daftar Online Sekarang →
                </button>
              </div>
            </div>

            {ppdbInfo.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-6 items-start group">
                
                {/* THUMBNAIL FOTO */}
                <div className="w-full sm:w-[300px] aspect-[4/3] shrink-0 bg-slate-300 overflow-hidden rounded-md shadow-sm relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-white/95 text-[#047857] text-[11px] font-bold px-2.5 py-1 rounded shadow-sm flex items-center gap-1">
                    📝 Info PPDB
                  </div>
                </div>

                {/* TEKS INFO */}
                <div className="flex flex-col flex-1 pt-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="text-[11px] text-slate-500 font-bold bg-slate-200 px-2 py-0.5 rounded-sm">{item.date}</span>
                  </div>
                  <h2 className="text-[18px] sm:text-[20px] font-bold text-[#047857] mb-3 leading-snug hover:text-emerald-800 transition-colors cursor-pointer">
                    {item.title}
                  </h2>
                  <p className="text-[13px] sm:text-[14px] text-slate-700 leading-relaxed text-justify hover:text-black cursor-pointer">
                    {item.excerpt}
                  </p>
                  <div className="mt-4">
                    <button className="text-[#8B0000] font-bold text-xs hover:underline flex items-center gap-1">
                      Baca Detail <span>→</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* KANAN - SIDEBAR (STANDAR BARU PERMANEN) */}
          <div className="lg:col-span-4 lg:border-l border-dashed border-slate-500 lg:pl-8 space-y-8">
            
            {/* KOTAK PUSAT BANTUAN PPDB */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#D97706]">
              <h3 className="text-[15px] font-bold text-slate-800 mb-4">Pusat Bantuan PPDB</h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Jika Anda memiliki pertanyaan seputar pendaftaran, biaya, atau persyaratan, silakan hubungi panitia PPDB kami.
              </p>
              <div className="flex flex-col gap-3">
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 px-4 text-xs rounded transition-colors w-full flex items-center justify-center gap-2">
                  <span>💬</span> Hubungi via WhatsApp
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-4 text-xs rounded transition-colors w-full flex items-center justify-center gap-2">
                  <span>📥</span> Download Brosur (PDF)
                </button>
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
                
                {/* SOCIAL MEDIA */}
                <li className="flex justify-between items-center gap-4 pt-2">
                  <span className="font-bold text-slate-800 text-[13px] ml-1">f</span>
                  <span className="text-[#047857] text-right cursor-pointer hover:underline font-medium">Facebook</span>
                </li>
                <li className="flex justify-between items-center gap-4">
                  <span className="font-bold text-slate-500 text-lg">📷</span>
                  <span className="text-[#047857] text-right cursor-pointer hover:underline font-medium">Instagram</span>
                </li>
                <li className="flex justify-between items-center gap-4">
                  <span className="font-bold text-blue-500 text-lg">▶</span>
                  <span className="text-[#047857] text-right cursor-pointer hover:underline font-medium">YouTube</span>
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
