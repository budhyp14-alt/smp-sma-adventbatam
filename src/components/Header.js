"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAkreditasiDropdown, setIsAkreditasiDropdown] = useState(false);
  const [currentDate, setCurrentDate] = useState("Saturday, September 19, 2026");
  const pathname = usePathname();

  useEffect(() => {
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const today = new Date().toLocaleDateString("en-US", options);
    setCurrentDate(today);
  }, []);

  const navLinks = [
    { label: "HOME", href: "/", isExternal: false },
    { label: "SCHOOL PROFILE", href: "/profile", isExternal: false },
    { label: "NEWS", href: "/news", isExternal: false },
    { label: "ANNOUNCEMENTS", href: "/announcements", isExternal: false },
    { label: "AGENDA", href: "/agenda", isExternal: false },
    { label: "ACTIVITIES", href: "/activities", isExternal: false },
    { label: "FACILITIES", href: "/facilities", isExternal: false },
    { label: "GALLERY", href: "/gallery", isExternal: false },
    { label: "BIMBEL/ESKUL", href: "/bimbel-eskul", isExternal: false },
    { label: "PPDB", href: "/ppdb", isExternal: false },
    { label: "LIBRARY", href: "https://e-perpus-batam-mas.vercel.app/", isExternal: true },
  ];

  const announcementText = "Selamat Datang di Website Resmi SMP - SMA Advent Batam. Informasi Pendaftaran Siswa Baru (PPDB) Tahun Ajaran 2026/2027 telah resmi dibuka. Hubungi bagian tata usaha untuk informasi persyaratan dan beasiswa prestasi.";

  return (
    <header className="w-full font-sans shadow-md sticky top-0 z-50">
      
      {/* STYLE ANIMASI: ROTASI LOGO LAMBAT & SEAMLESS INFINITE MARQUEE TANPA JEDA KOSONG */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spinClockwiseSlow {
          from {
            transform: perspective(800px) rotateY(0deg);
          }
          to {
            transform: perspective(800px) rotateY(360deg);
          }
        }
        .logo-adventist-spin-slow {
          animation: spinClockwiseSlow 16s linear infinite;
          transform-style: preserve-3d;
          will-change: transform;
        }
        .logo-adventist-spin-slow:hover {
          animation-play-state: paused;
        }

        @keyframes seamlessMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .seamless-ticker-track {
          display: flex;
          width: max-content;
          animation: seamlessMarquee 42s linear infinite;
          will-change: transform;
        }
        .seamless-ticker-track:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* 1. TOP NAVBAR MERAH MARUN */}
      <nav className="w-full bg-[#8B0000] text-white">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-11 overflow-visible">
          
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-5 w-full justify-between overflow-visible">
            <div className="flex items-center space-x-3 xl:space-x-5">
              {navLinks.map((item, idx) => {
                const isActive = pathname === item.href;

                if (item.isExternal) {
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      className="text-[11px] xl:text-xs font-bold tracking-wider uppercase transition-colors whitespace-nowrap py-1 text-white hover:text-amber-300"
                    >
                      {item.label}
                    </a>
                  );
                }

                return (
                  <Link
                    key={idx}
                    href={item.href}
                    className={`text-[11px] xl:text-xs font-bold tracking-wider uppercase transition-colors whitespace-nowrap py-1 ${
                      isActive
                        ? "text-amber-300 underline underline-offset-4"
                        : "text-white hover:text-amber-300"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* MENU AKREDITASI */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setIsAkreditasiDropdown(true)}
              onMouseLeave={() => setIsAkreditasiDropdown(false)}
            >
              <div className="flex items-center">
                <Link
                  href="/akreditasi"
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-3 py-1 rounded shadow-sm text-[11px] xl:text-xs font-black tracking-wider uppercase flex items-center gap-1 transition-all"
                >
                  <span>AKREDITASI</span>
                  <span className="text-[10px] transform group-hover:rotate-180 transition-transform duration-200">▼</span>
                </Link>
              </div>

              <div 
                className={`absolute right-0 top-full pt-1 w-52 transition-all duration-200 z-50 ${
                  isAkreditasiDropdown ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="bg-white rounded-lg shadow-xl border border-slate-200 py-2 text-slate-800">
                  <Link
                    href="/akreditasi"
                    className="block px-4 py-2 text-xs font-bold hover:bg-amber-50 hover:text-amber-900 border-b border-slate-100 transition-colors"
                  >
                    📋 Overview Akreditasi
                  </Link>
                  <Link
                    href="/akreditasi/butir-12"
                    className="block px-4 py-2 text-xs font-bold text-[#047857] hover:bg-emerald-50 hover:text-emerald-900 transition-colors"
                  >
                    📑 Butir 12
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* TOGGLE MOBILE */}
          <div className="flex lg:hidden items-center justify-between w-full">
            <span className="text-xs font-bold tracking-wider text-amber-300">
              MENU UTAMA
            </span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-1 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </nav>

      {/* DROPDOWN MENU MOBILE */}
      {isOpen && (
        <div className="lg:hidden bg-[#700000] text-white px-4 py-3 space-y-2 border-t border-red-800">
          {navLinks.map((item, idx) => {
            if (item.isExternal) {
              return (
                <a
                  key={idx}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-xs font-bold py-1.5 px-2 rounded hover:bg-red-900 text-amber-300"
                >
                  {item.label}
                </a>
              );
            }

            return (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-xs font-bold py-1.5 px-2 rounded hover:bg-red-900 text-slate-100"
              >
                {item.label}
              </Link>
            );
          })}
          
          <div className="pt-2 border-t border-red-800/60">
            <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider block px-2 mb-1">Akreditasi</span>
            <Link
              href="/akreditasi"
              onClick={() => setIsOpen(false)}
              className="block text-xs font-bold py-1.5 px-3 rounded bg-amber-500 text-slate-950 mb-1"
            >
              Overview Akreditasi
            </Link>
            <Link
              href="/akreditasi/butir-12"
              onClick={() => setIsOpen(false)}
              className="block text-xs font-bold py-1.5 px-3 rounded bg-white text-emerald-900"
            >
              📑 Butir 12
            </Link>
          </div>
        </div>
      )}

      {/* 2. MAIN HEADER PUTIH */}
      <div className="w-full bg-white border-b border-slate-200 relative overflow-visible">
        <div className="max-w-7xl mx-auto px-4 h-16 sm:h-18 flex items-center justify-between gap-4 relative overflow-visible">
          
          <div className="flex items-center text-left relative overflow-visible">
            <div className="absolute -left-6 sm:-left-8 top-1/2 -translate-y-1/2 z-30 pointer-events-auto">
              <Link href="/" className="block cursor-pointer">
                <div className="logo-adventist-spin-slow w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center filter drop-shadow-md">
                  <img 
                    src="/logo.png" 
                    alt="Logo Adventist Education" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/e/e0/Adventist_Education_Logo.png";
                    }}
                  />
                </div>
              </Link>
            </div>

            <div className="flex flex-col justify-center ml-24 sm:ml-28">
              <Link href="/">
                <h1 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-none hover:text-[#047857] transition-colors">
                  SMP - SMA ADVENT BATAM
                </h1>
              </Link>
              <p className="text-[10px] sm:text-xs text-slate-600 font-medium mt-1 leading-none">
                Shaping a Generation of Character, Intelligence, and Integrity
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-6 text-xs text-slate-600 shrink-0">
            <div className="hidden md:flex items-center gap-2 sm:gap-3">
              <span className="font-semibold text-slate-500">Follow Us:</span>
              <a href="#" className="hover:text-blue-600 flex items-center gap-1 font-semibold">
                <span className="text-blue-500">📘</span> Facebook
              </a>
              <a href="#" className="hover:text-pink-600 flex items-center gap-1 font-semibold">
                <span className="text-pink-500">📷</span> Instagram
              </a>
              <a href="#" className="hover:text-red-600 flex items-center gap-1 font-semibold">
                <span className="text-red-500">▶</span> YouTube
              </a>
            </div>

            <div className="bg-red-50 border border-red-200 text-[#8B0000] px-3 sm:px-4 py-1.5 rounded-full font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-xs whitespace-nowrap">
              <span>📞</span> 0778-363082
            </div>
          </div>

        </div>
      </div>

      {/* 3. RUNNING TICKER KUNING EMAS: SEAMLESS BERLANJUT TANPA JEDA KOSONG & LEBIH LAMBAT */}
      <div className="w-full bg-[#D97706] text-white relative z-10 overflow-hidden shadow-inner">
        <div className="max-w-7xl mx-auto px-4 flex items-center h-8 text-[11px] sm:text-xs">
          
          <div className="bg-[#1e293b] text-white font-bold px-2 sm:px-3 py-1 mr-2 rounded text-[10px] sm:text-[11px] shrink-0 z-20 shadow-xs">
            {currentDate}
          </div>
          
          <div className="bg-[#8B0000] text-white font-extrabold px-2 sm:px-3 py-1 mr-3 rounded text-[10px] sm:text-[11px] uppercase tracking-wider shrink-0 z-20 shadow-xs">
            LATEST UPDATES
          </div>

          {/* AREA TEKS BERJALAN KONTINYU SEAMLESS TANPA KOSONG */}
          <div className="flex-1 overflow-hidden relative">
            <div className="seamless-ticker-track text-white font-semibold cursor-default">
              <span className="pr-16 inline-block">
                {announcementText}
              </span>
              <span className="pr-16 inline-block">
                {announcementText}
              </span>
            </div>
          </div>

        </div>
      </div>

    </header>
  );
}
