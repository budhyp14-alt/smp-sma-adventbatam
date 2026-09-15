"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState("Tuesday, August 25, 2026");
  const pathname = usePathname();

  // FORMAT TANGGAL RESMI
  useEffect(() => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date().toLocaleDateString('en-US', options);
    setCurrentDate(today);
  }, []);

  // DAFTAR LENGKAP MENU UTAMA DENGAN AKREDITASI DI PALING KANAN
  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "SCHOOL PROFILE", href: "/profile" },
    { label: "NEWS", href: "/news" },
    { label: "ANNOUNCEMENTS", href: "/announcements" },
    { label: "AGENDA", href: "/agenda" },
    { label: "ACTIVITIES", href: "/activities" },
    { label: "FACILITIES", href: "/facilities" },
    { label: "GALLERY", href: "/gallery" },
    { label: "BIMBEL/ESKUL", href: "/bimbel-eskul" },
    { label: "PPDB", href: "/ppdb" },
    { label: "LIBRARY", href: "/library" },
    { label: "AKREDITASI", href: "/akreditasi" }, // Posisi paling kanan
  ];

  return (
    <header className="w-full font-sans shadow-md sticky top-0 z-50">
      
      {/* 1. TOP NAVBAR MERAH MARUN (DERETAN MENU UTAMA) */}
      <nav className="w-full bg-[#8B0000] text-white">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-11 sm:h-12 overflow-x-auto no-scrollbar">
          
          {/* MENU DESKTOP */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-5 w-full justify-between">
            {navLinks.map((item, idx) => {
              const isActive = pathname === item.href;
              const isAkreditasi = item.label === "AKREDITASI";

              return (
                <Link
                  key={idx}
                  href={item.href}
                  className={`text-[11px] xl:text-xs font-bold tracking-wider uppercase transition-colors whitespace-nowrap py-1 ${
                    isAkreditasi
                      ? "bg-amber-500 hover:bg-amber-400 text-slate-950 px-2.5 py-1 rounded shadow-sm"
                      : isActive
                      ? "text-amber-300 underline underline-offset-4"
                      : "text-white hover:text-amber-300"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* LABEL & TOMBOL TOGGLE UNTUK TAMPILAN MOBILE */}
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
          {navLinks.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block text-xs font-bold py-1.5 px-2 rounded ${
                item.label === "AKREDITASI"
                  ? "bg-amber-500 text-slate-950 font-black"
                  : "hover:bg-red-900 text-slate-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

      {/* 2. MAIN HEADER PUTIH (LOGO, SLOGAN, SOSMED, & TELEPON) */}
      <div className="w-full bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* SISI KIRI: LOGO & NAMA SEKOLAH */}
          <div className="flex items-center gap-3 sm:gap-4 text-center md:text-left">
            <Link href="/" className="shrink-0">
              <img 
                src="/slider-1.jpg" 
                alt="Logo Advent Batam" 
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-full shadow-xs"
              />
            </Link>
            <div>
              <Link href="/">
                <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-none hover:text-[#047857] transition-colors">
                  SMP - SMA ADVENT BATAM
                </h1>
              </Link>
              <p className="text-[11px] sm:text-xs text-slate-600 font-medium mt-1">
                Shaping a Generation of Character, Intelligence, and Integrity
              </p>
            </div>
          </div>

          {/* SISI KANAN: SOSMED & NOMOR TELEPON */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-6 text-xs text-slate-600">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="font-semibold text-slate-500 hidden sm:inline">Follow Us:</span>
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

            <div className="bg-red-50 border border-red-200 text-[#8B0000] px-3 sm:px-4 py-1.5 rounded-full font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-xs">
              <span>📞</span> 0778-363082
            </div>
          </div>

        </div>
      </div>

      {/* 3. RUNNING TICKER KUNING EMAS */}
      <div className="w-full bg-[#D97706] text-white">
        <div className="max-w-7xl mx-auto px-4 flex items-center h-8 text-[11px] sm:text-xs overflow-hidden">
          <div className="bg-[#1e293b] text-white font-bold px-2 sm:px-3 py-1 mr-2 rounded text-[10px] sm:text-[11px] shrink-0">
            {currentDate}
          </div>
          <div className="bg-[#8B0000] text-white font-extrabold px-2 sm:px-3 py-1 mr-3 rounded text-[10px] sm:text-[11px] uppercase tracking-wider shrink-0">
            LATEST UPDATES
          </div>
          <div className="truncate text-white font-semibold">
            Selamat Datang di Website Resmi SMP - SMA Advent Batam. Informasi Pendaftaran Siswa Baru (PPDB) Tahun Ajaran 2026/2027 telah resmi dibuka.
          </div>
        </div>
      </div>

    </header>
  );
}
