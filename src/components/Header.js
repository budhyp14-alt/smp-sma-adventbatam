import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md">
      {/* Top Bar: Logo & Kontak */}
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          {/* Area Logo Sekolah */}
          <div className="text-4xl font-extrabold text-blue-900 tracking-wider">
            <span className="text-yellow-500">A</span>
          </div>
        </div>
        
        <div className="flex space-x-6 text-sm items-center font-medium">
          <span className="flex items-center text-gray-700">📞 0778-363082</span>
          <span className="flex items-center text-gray-700">✉️ info@adventbatam.sch.id</span>
          <div className="flex space-x-2">
            {/* Ikon Media Sosial */}
            <a href="#" className="w-8 h-8 bg-red-800 text-white flex items-center justify-center rounded-full hover:bg-red-700">FB</a>
            <a href="#" className="w-8 h-8 bg-red-800 text-white flex items-center justify-center rounded-full hover:bg-red-700">IG</a>
            <a href="#" className="w-8 h-8 bg-red-800 text-white flex items-center justify-center rounded-full hover:bg-red-700">YT</a>
            <a href="#" className="w-8 h-8 bg-red-800 text-white flex items-center justify-center rounded-full hover:bg-red-700">WA</a>
          </div>
        </div>
      </div>
      
      {/* Navigasi Utama */}
      <nav className="bg-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex flex-wrap justify-between items-center py-3 text-sm font-semibold uppercase">
            <li><Link href="/" className="hover:text-yellow-300">Home</Link></li>
            <li><Link href="/profile" className="hover:text-yellow-300">School Profile</Link></li>
            <li><Link href="/news" className="hover:text-yellow-300">News</Link></li>
            <li><Link href="/announcements" className="hover:text-yellow-300">Announcements</Link></li>
            <li><Link href="/agenda" className="hover:text-yellow-300">Agenda</Link></li>
            <li><Link href="/activities" className="hover:text-yellow-300">Activities</Link></li>
            <li><Link href="/facilities" className="hover:text-yellow-300">Facilities</Link></li>
            <li><Link href="/gallery" className="hover:text-yellow-300">Gallery</Link></li>
            
            {/* INI KUNCI UTAMANYA: Mengarah persis ke folder /bimbel-eskul */}
            <li><Link href="/bimbel-eskul" className="hover:text-yellow-300 bg-black/20 px-3 py-1 rounded">Bimbel/Eskul</Link></li>
            
            <li><Link href="/ppdb" className="hover:text-yellow-300">PPDB</Link></li>
            <li><Link href="/library" className="hover:text-yellow-300">Library</Link></li>
          </ul>
        </div>
      </nav>
      
      {/* Teks Berjalan (Marquee) */}
      <div className="bg-yellow-300 text-red-900 py-2 font-semibold text-sm px-4">
        <marquee>
          SMP - SMA Advent Batam: Mendidik Generasi Cerdas dan Berkarakter Kristus | Pendaftaran Siswa Baru Tahun Ajaran 2026/2027 Telah Dibuka!
        </marquee>
      </div>
    </header>
  );
}
