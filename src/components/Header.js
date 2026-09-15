"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // DAFTAR MENU NAVIGASI (AKREDITASI DITARUH DI PALING KANAN)
  const navItems = [
    { label: "HOME", href: "/" },
    { label: "PROFILE", href: "/profile" },
    { label: "EDITORIAL", href: "/editorial" },
    { label: "NEWS", href: "/news" },
    { label: "ANNOUNCEMENTS", href: "/announcements" },
    { label: "AGENDA", href: "/agenda" },
    { label: "TEACHERS' BLOG", href: "/blog" },
    { label: "AKREDITASI", href: "/akreditasi" }, // Posisi paling kanan
  ];

  return (
    <header className="w-full bg-[#1e293b] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO & IDENTITAS SEKOLAH */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center font-black text-slate-900 shadow">
              AB
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-wide text-white">
                SMP - SMA ADVENT BATAM
              </span>
              <span className="text-[10px] text-amber-400 font-medium tracking-wider">
                EXCELLENCE IN CHARACTER & KNOWLEDGE
              </span>
            </div>
          </Link>

          {/* MENU DESKTOP (AKREDITASI BERADA DI PALING KANAN) */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item, idx) => {
              const isActive = pathname === item.href;
              const isAkreditasi = item.label === "AKREDITASI";

              return (
                <Link
                  key={idx}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-xs font-bold tracking-wider transition-colors ${
                    isAkreditasi
                      ? "bg-[#D97706] hover:bg-amber-600 text-white shadow-sm ml-2" // Aksen tombol emas elegan untuk Akreditasi
                      : isActive
                      ? "bg-[#047857] text-white"
                      : "text-slate-200 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* TOMBOL TOGGLE MOBILE */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* MENU MOBILE EXPAND */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item, idx) => {
            const isActive = pathname === item.href;
            const isAkreditasi = item.label === "AKREDITASI";

            return (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-xs font-bold ${
                  isAkreditasi
                    ? "bg-[#D97706] text-white"
                    : isActive
                    ? "bg-[#047857] text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
