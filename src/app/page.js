import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Nantinya komponen Header navigasi ditaruh di sini */}
      
      {/* 1. Hero Section */}
      <section className="w-full h-96 bg-blue-100 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-blue-900">[Area Slider Foto Utama]</h1>
      </section>

      {/* 2. Editorial Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 max-w-7xl mx-auto w-full">
        <div className="p-6 bg-white shadow-md border-t-4 border-yellow-500 rounded">
          <h2 className="font-bold text-lg mb-2">Ketua Yayasan</h2>
          <p className="text-sm text-gray-600">Ibu Rima Melati Hutagalung</p>
        </div>
        <div className="p-6 bg-white shadow-md border-t-4 border-yellow-500 rounded">
          <h2 className="font-bold text-lg mb-2">Manager Operasional</h2>
          <p className="text-sm text-gray-600">Bapak Samuel Simatupang, S.Si</p>
        </div>
        <div className="p-6 bg-white shadow-md border-t-4 border-yellow-500 rounded">
          <h2 className="font-bold text-lg mb-2">Kepala Sekolah</h2>
          <p className="text-sm text-gray-600">Bapak Tona Leon F. Situmorang, S.Pd., MA.Ed</p>
        </div>
      </section>

      {/* 3. Berita Terbaru */}
      <section className="p-8 max-w-7xl mx-auto w-full">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-900 pb-2">Berita Terbaru</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-40 bg-gray-200 rounded flex items-center justify-center shadow">Berita 1</div>
          <div className="h-40 bg-gray-200 rounded flex items-center justify-center shadow">Berita 2</div>
          <div className="h-40 bg-gray-200 rounded flex items-center justify-center shadow">Berita 3</div>
        </div>
      </section>
      
      {/* Nantinya Slider Petuah & Grid Modul lainnya dilanjutkan di sini */}
    </main>
  );
}
