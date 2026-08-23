import React from 'react';

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
          <span className="flex items-center text-gray-700">📞 0099877776666</span>
          <span className="flex items-center text-gray-700">✉️ drovpras@gmail.com</span>
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
          <ul className="flex space-x-6 py-3 text-sm font-semibold">
            <li><a href="/" className="hover:text-yellow-300">Home</a></li>
            <li><a href="/profile" className="hover:text-yellow-300">School Profile</a></li>
            <li><a href="/news" className="hover:text-yellow-300">News</a></li>
            <li><a href="/activities" className="hover:text-yellow-300">Activities</a></li>
            <li><a href="/announcements" className="hover:text-yellow-300">Announcements</a></li>
            <li><a href="/gallery" className="hover:text-yellow-300">Gallery</a></li>
            <li><a href="/library" className="hover:text-yellow-300">Library</a></li>
            <li><a href="/ppdb" className="hover:text-yellow-300">PPDB 2026/2027</a></li>
            <li className="relative group cursor-pointer hover:text-yellow-300">
              Ekskul ▾
              {/* Dropdown Menu Ekskul */}
              <ul className="absolute hidden group-hover:block bg-white text-black p-2 shadow-lg mt-2 w-48 z-10 rounded">
                <li className="p-2 hover:bg-gray-100 border-b">Bimbel SMP</li>
                <li className="p-2 hover:bg-gray-100 border-b">Bimbel SMA</li>
                <li className="p-2 hover:bg-gray-100">Kegiatan Ekskul</li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      
      {/* Teks Berjalan (Marquee) */}
      <div className="bg-yellow-300 text-red-900 py-2 font-semibold text-sm px-4">
        <marquee>
          Sunday, 23-08-2026 | SMA Advent Batam: Mendidik Generasi Cerdas dan Berkarakter Kristus | Pendaftaran Siswa Baru Tahun Ajaran 2026/2027 Telah Dibuka!
        </marquee>
      </div>
    </header>
  );
}
