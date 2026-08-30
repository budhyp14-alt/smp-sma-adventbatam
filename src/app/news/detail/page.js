import Link from "next/link";

export const metadata = {
  title: "Detail Berita - SMP SMA Advent Batam",
};

export default function NewsDetailPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans bg-[#F3EFE4]">
      
      {/* HEADER & BREADCRUMB */}
      <section className="w-full bg-[#DCC690] text-slate-900 pt-6 pb-12 px-4 shrink-0">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs text-slate-700 font-semibold mb-6 flex items-center gap-1 flex-wrap">
            <span>You are here :</span>
            <Link href="/" className="text-[#047857] hover:underline ml-1">🏠 Home</Link>
            <span>-</span>
            <Link href="/news" className="text-[#047857] hover:underline">News</Link>
            <span>-</span>
            <span className="text-slate-600">Detail Berita</span>
          </div>
          
          <span className="text-xs bg-red-900 text-white font-semibold px-2.5 py-1 rounded shadow-sm inline-block mb-3">
            Teknologi & Inovasi (Digitalisasi)
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-800 leading-snug">
            Langkah Inovatif Menuju Era Digital: SMP & SMA Advent Batam Miliki Website Terpadu
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-3 font-medium">
            Published on Monday, 21 Aug 2026 | By Admin Sekolah
          </p>
        </div>
      </section>

      {/* KONTEN UTUH BERITA */}
      <section className="w-full flex-1 py-12 px-4">
        <div className="max-w-4xl mx-auto bg-[#E5DCC3] p-6 sm:p-10 rounded-2xl shadow-sm border border-[#D5CCB3] space-y-6 text-slate-800 text-justify">
          
          {/* Gambar Utama Berita */}
          <div className="w-full aspect-[16/9] rounded-xl overflow-hidden shadow-md bg-slate-300">
            <img src="/slider-1.jpg" alt="Ilustrasi Berita" className="w-full h-full object-cover" />
          </div>

          <div className="space-y-4 text-sm sm:text-base leading-relaxed">
            <p className="font-semibold text-red-950 text-base sm:text-lg italic">
              "Penting untuk mendokumentasikan secara digital dan online semua event yang terjadi di sekolah SMP dan SMA Advent Batam."
            </p>
            <p>
              Batam — Di bawah persetujuan dan dukungan penuh dari Kepala Sekolah Bapak Tona Leon F. Situmorang, S.Pd., MA.Ed., civitas akademika SMP & SMA Advent Batam secara resmi meluncurkan portal web terpadu yang dirancang modern, responsif, dan interaktif.
            </p>
            <p>
              Langkah ini diambil guna menjawab tantangan zaman di era digitalisasi pendidikan. Seluruh kegiatan belajar mengajar, pengumuman penting, jadwal agenda, galeri kegiatan siswa, hingga profil guru kreatif kini dapat diakses secara transparan dan cepat oleh para orang tua murid, siswa, maupun masyarakat luas.
            </p>
            <p>
              Dengan sistem navigasi yang terstruktur dan antarmuka bernuansa hangat, website ini tidak hanya berfungsi sebagai media informasi, tetapi juga sebagai wadah dokumentasi prestasi digital sekolah yang berkelanjutan.
            </p>
          </div>

          <div className="pt-6 border-t border-[#D5CCB3] flex justify-between items-center flex-wrap gap-4">
            <span className="text-xs font-semibold text-slate-600">Share this news to parents and friends!</span>
            <Link href="/news" className="bg-[#8B0000] hover:bg-red-800 text-white font-bold text-xs py-2.5 px-6 rounded shadow transition-colors inline-block">
              ← Kembali ke Berita Lainnya
            </Link>
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
