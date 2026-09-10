import Link from "next/link";

export const metadata = {
  title: "News Detail - SMP SMA Advent Batam",
};

export default function DetailNewsPage({ searchParams }) {
  // Menangkap ID dari URL dan merapikannya untuk judul
  const itemId = searchParams?.id || "School News";
  const judulBerita = itemId.replace(/-/g, ' ').toUpperCase();

  return (
    <main className="min-h-screen flex flex-col font-sans bg-[#E5DCC3]">
      
      {/* BREADCRUMB & HEADER */}
      <section className="w-full pt-8 pb-4 px-4 sm:px-8 max-w-7xl mx-auto shrink-0">
        <div className="text-xs text-slate-700 font-semibold mb-6 flex items-center gap-1 flex-wrap">
          <span>You are here :</span>
          <Link href="/" className="text-[#047857] hover:underline ml-1">🏠 Home</Link>
          <span>-</span>
          <Link href="/news" className="text-[#047857] hover:underline">News</Link>
          <span>-</span>
          <span className="text-slate-600">Read News</span>
        </div>
      </section>

      {/* KONTEN UTAMA */}
      <section className="w-full flex-1 pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* KIRI - KONTEN ARTIKEL */}
          <div className="lg:col-span-8 flex flex-col bg-white p-6 sm:p-10 rounded-xl shadow-sm border-t-4 border-[#8B0000]">
            
            <div className="mb-6">
              <span className="bg-[#D97706] text-white text-[11px] font-bold px-3 py-1 rounded shadow-sm">NEWS UPDATE</span>
              <h1 className="text-2xl sm:text-3xl font-black text-[#1e293b] mt-4 mb-3 leading-snug">
                {judulBerita}
              </h1>
              <div className="text-xs text-slate-500 font-medium flex gap-4 border-b border-slate-200 pb-4">
                <span>📅 Published: September 2026</span>
                <span>✍️ By: School Editorial Team</span>
              </div>
            </div>

            <div className="w-full aspect-[16/9] bg-slate-300 mb-8 rounded-lg overflow-hidden shadow-sm">
              <img src="/slider-2.jpg" alt="Detail Image" className="w-full h-full object-cover" />
            </div>

            <div className="prose max-w-none text-slate-700 text-sm sm:text-[15px] leading-relaxed text-justify space-y-5">
              <p>
                Batam - SMP dan SMA Advent Batam kembali menyelenggarakan kegiatan positif sebagai bagian dari komitmen sekolah dalam mencetak generasi muda yang unggul secara intelektual dan memiliki karakter Kristiani yang kuat. Rangkaian acara ini diikuti dengan antusias oleh seluruh siswa, guru, dan staf administrasi sekolah.
              </p>
              <p>
                Kepala Sekolah, Tona Leon Ferdinan Situmorang, S.Pd.,MA.,ED., menyampaikan bahwa kegiatan ini tidak hanya bertujuan untuk mengisi jadwal akademik, tetapi juga untuk melatih kemandirian, kerja sama tim, dan kepedulian sosial di kalangan pelajar. "Kami berharap apa yang didapatkan hari ini bisa diaplikasikan langsung di kehidupan bermasyarakat," ujarnya.
              </p>
              <p>
                Acara ditutup dengan doa bersama dan pembagian penghargaan bagi siswa-siswi yang telah berpartisipasi aktif. Sekolah berencana untuk menjadikan kegiatan serupa sebagai agenda rutin tahunan yang terus dievaluasi agar memberikan manfaat yang lebih besar di masa mendatang.
              </p>
            </div>
            
            {/* BAGIAN BAWAH ARTIKEL (TOMBOL KEMBALI) */}
            <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="text-sm text-slate-500 italic">Share this news to parents and friends!</span>
              <Link href="/news" className="bg-[#8B0000] hover:bg-red-950 text-white font-bold text-xs py-2.5 px-6 rounded shadow-sm transition-colors inline-block text-center">
                ← Back to All News
              </Link>
            </div>

          </div>

          {/* KANAN - SIDEBAR PERMANEN */}
          <div className="lg:col-span-4 lg:border-l border-dashed border-slate-500 lg:pl-8 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#8B0000]">
              <h3 className="text-[15px] font-bold text-slate-800 mb-4">Popular News</h3>
              <ul className="space-y-3 text-[13px] text-slate-700">
                <li className="border-b border-slate-100 pb-2 hover:text-[#8B0000] cursor-pointer">New Student Registration 2026 is Open</li>
                <li className="border-b border-slate-100 pb-2 hover:text-[#8B0000] cursor-pointer">E-Library Usage Guide</li>
                <li className="hover:text-[#8B0000] cursor-pointer">Even Semester Exam Schedule</li>
              </ul>
            </div>

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
                  <span className="text-right leading-tight">Tona Leon Ferdinan<br/>Situmorang,<br/>S.Pd.,MA.,ED.</span>
                </li>
                <li className="flex justify-between items-center gap-4 border-b border-dashed border-slate-400 pb-6">
                  <span className="font-bold shrink-0">Phone</span>
                  <span className="text-[#047857] text-right font-medium">0778-363082</span>
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
