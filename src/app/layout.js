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
        {/* Header Identitas Sekolah */}
        <header className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-900 text-amber-400 font-extrabold flex items-center justify-center rounded-xl text-xl shadow-sm">
                AB
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-black text-red-950 tracking-tight leading-none">
                  SMP - SMA ADVENT BATAM
                </h1>
                <p className="text-xs text-slate-500 font-medium tracking-wide mt-1">
                  Membentuk Generasi Berkarakter, Cerdas, dan Berintegritas
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Tahun Ajaran 2026/2027</span>
            </div>
          </div>

          {/* Menu Navigasi Mendatar (Merah Marun) */}
          <nav className="bg-red-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-2 sm:px-4">
              <div className="flex items-center justify-start lg:justify-center overflow-x-auto no-scrollbar py-1">
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
