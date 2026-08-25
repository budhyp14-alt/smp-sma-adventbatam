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
        
        {/* Animasi Putar Horizontal Khusus */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes spin-horizontal {
            from { transform: perspective(1000px) rotateY(0deg); }
            to { transform: perspective(1000px) rotateY(360deg); }
          }
        `}} />

        {/* Top Bar: Tombol Media Sosial & Status */}
        <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
            
            {/* Tombol Media Sosial */}
            <div className="flex items-center space-x-3">
              <span className="text-slate-400 font-medium hidden sm:inline">Ikuti Kami:</span>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors flex items-center space-x-1"
                title="Facebook"
              >
                <span>📘 Facebook</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors flex items-center space-x-1"
                title="Instagram"
              >
                <span>📸 Instagram</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors flex items-center space-x-1"
                title="YouTube"
              >
                <span>▶️ YouTube</span>
              </a>
            </div>

            {/* Status Tahun Ajaran */}
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-slate-300 font-semibold">Tahun Ajaran 2026/2027</span>
            </div>

          </div>
        </div>

        {/* Header Identitas Sekolah */}
        <header className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 py-1.5 flex flex-col sm:flex-row items-center justify-between">
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
          </div>

          {/* Menu Navigasi Mendatar (Merah Marun) */}
          <nav className="bg-red-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-2 sm:px-4">
              <div className="flex items-center justify-start lg:justify-center overflow-x-auto py-1">
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

          {/* Teks Berjalan (Running Text Kuning) */}
          <div className="bg-amber-400 text-slate-900 font-bold text-xs sm:text-sm py-2 px-4 shadow-inner flex items-center border-b border-amber-500">
            <span className="bg-red-900 text-white text-[11px] font-extrabold px-2.5 py-0.5 rounded mr-3 whitespace-nowrap tracking-wide">
              INFO TERKINI
            </span>
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
