import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "SMP - SMA Advent Batam",
  description: "Website Resmi SMP dan SMA Advent Batam",
};

export default function RootLayout({ children }) {
  const navItems = [
    { name: "HOME", href: "/" },
    { name: "SCHOOL PROFILE", href: "/profile" },
    { name: "NEWS", href: "/news" },
    { name: "ANNOUNCEMENTS", href: "/announcements" },
    { name: "AGENDA", href: "/agenda" },
    { name: "ACTIVITIES", href: "/activities" },
    { name: "FACILITIES", href: "/facilities" },
    { name: "GALLERY", href: "/gallery" },
    { name: "BIMBEL/ESKUL", href: "/ekskul" },
    { name: "PPDB", href: "/ppdb" },
    { name: "LIBRARY", href: "/library" },
  ];

  return (
    <html lang="id">
      <body className="bg-slate-100 text-slate-900 font-sans antialiased min-h-screen flex flex-col">
        
        {/* Animasi Putar Horizontal Khusus (Arah Dibalik / -360deg) */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes spin-horizontal {
            from { transform: perspective(1000px) rotateY(0deg); }
            to { transform: perspective(1000px) rotateY(-360deg); }
          }
        `}} />

        {/* 1. Menu Navigasi Mendatar (Merah Marun) - Dipindah Paling Atas */}
        <nav className="bg-red-900 text-white shadow-md">
          <div className="max-w-7xl mx-auto px-2 sm:px-4">
            <div className="flex items-center justify-start lg:justify-center overflow-x-auto py-1.5">
              <div className="flex items-center space-x-1 sm:space-x-2 min-w-max py-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-3 py-2 rounded-lg text-xs sm:text-[13px] font-bold tracking-wider hover:bg-red-800 hover:text-amber-300 transition-colors duration-200 whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* 2. Header Identitas Sekolah */}
        <header className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Kiri: Logo & Nama Sekolah */}
            <div className="flex items-center space-x-3">
              {/* Logo Adventist Berputar Horizontal 3D */}
              <img
                src="/logo-OKE.png"
                alt="Logo Adventist Education"
                className="h-12 sm:h-16 w-auto object-contain shrink-0"
                style={{ animation: "spin-horizontal 12s linear infinite" }}
              />
              <div className="flex flex-col justify-center">
                <h1 className="text-xl sm:text-2xl font-black text-red-950 tracking-tight leading-none mb-1">
                  SMP - SMA ADVENT BATAM
                </h1>
                <p className="text-xs text-slate-500 font-medium tracking-wide leading-none">
                  Membentuk Generasi Berkarakter, Cerdas, dan Berintegritas
                </p>
              </div>
            </div>

            {/* Kanan: Media Sosial & Nomor Telepon */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              
              {/* Tombol Media Sosial */}
              <div className="flex items-center space-x-3 text-xs sm:text-sm font-semibold text-slate-600">
                <span className="hidden sm:inline text-slate-400 mr-1">Ikuti Kami:</span>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors flex items-center space-x-1"
                  title="Facebook"
                >
                  <span>📘 Facebook</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-600 transition-colors flex items-center space-x-1"
                  title="Instagram"
                >
                  <span>📸 Instagram</span>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-600 transition-colors flex items-center space-x-1"
                  title="YouTube"
                >
                  <span>▶️ YouTube</span>
                </a>
              </div>

              {/* Garis Pemisah Visual */}
              <div className="hidden sm:block h-8 border-l border-slate-200"></div>

              {/* Nomor Telepon (Di letakkan paling kanan) */}
              <div className="flex items-center space-x-2 bg-red-50 text-red-950 px-4 py-1.5 rounded-full border border-red-100 shadow-sm">
                <span className="text-sm">📞</span>
                <span className="text-sm sm:text-base font-extrabold tracking-wide">0778-363082</span>
              </div>

            </div>
          </div>

          {/* 3. Teks Berjalan (Running Text Kuning) & Tanggal */}
          <div className="bg-amber-400 text-slate-900 font-bold text-xs sm:text-sm py-2 px-4 shadow-inner flex items-center border-b border-amber-500">
            
            {/* Tanggal Hari Ini (Paling Kiri) */}
            <span className="bg-slate-800 text-amber-400 text-[11px] font-bold px-2.5 py-0.5 rounded mr-2 whitespace-nowrap">
              Selasa, 25 Agustus 2026
            </span>

            {/* Label Info Terkini */}
            <span className="bg-red-900 text-white text-[11px] font-extrabold px-2.5 py-0.5 rounded mr-3 whitespace-nowrap tracking-wide">
              INFO TERKINI
            </span>

            {/* Marquee Text */}
            <marquee className="w-full tracking-wide">
              Selamat Datang di Website Resmi SMP - SMA Advent Batam | Penerimaan Peserta Didik Baru (PPDB) Tahun Pelajaran 2026/2027 Telah Dibuka | Terwujudnya Pendidikan Berkarakter, Unggul, dan Berlandaskan Nilai-Nilai Kristiani.
            </marquee>
          </div>
        </header>

        {/* Konten Halaman */}
        <div className="flex-1">{children}</div>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 text-xs py-8 border-t border-slate-800 mt-auto">
          <div className="max-w-7xl mx-auto px-4 text-center space-y-2">
            <p className="font-semibold text-slate-300">
              © 2026 SMP - SMA Advent Batam. Hak Cipta Dilindungi.
            </p>
            <p className="text-slate-500">
              Jl. Prof. Drg. Soedomo, Batam, Kepulauan Riau
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
