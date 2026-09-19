"use client";

import { useState } from "react";
import Link from "next/link";

export default function DetailEditorialYayasan() {
  // DATA LENGKAP 4 BERITA EDITORIAL YAYASAN TERAKHIR
  const editorialList = [
    {
      id: "visi-jangka-panjang-ypab",
      date: "08 September 2026",
      author: "Rima Melati Hutagalung (Chairman of the Foundation)",
      title: "Visi Jangka Panjang YPAB dalam Membangun Peradaban Pendidikan Unggul di Batam",
      // MENGGUNAKAN FOTO BARU YANG DIUNGGAH KE FOLDER PUBLIC
      img: "/ketua tampil di penamatan smp-sma advent batam.webp",
      lead: "Yayasan Pendidikan Advent Batam (YPAB) didirikan bukan semata-mata untuk mendirikan gedung sekolah atau menambah kuantitas lembaga pendidikan formal di Kepulauan Riau. Jauh melampaui itu, yayasan ini lahir dari panggilan iman dan tekad luhur untuk membangun peradaban manusia yang berkeadaban tinggi, bermoral mulia, dan memiliki kompetensi global.",
      paragraphs: [
        "Yayasan Pendidikan Advent Batam (YPAB) didirikan bukan semata-mata untuk mendirikan gedung sekolah atau menambah kuantitas lembaga pendidikan formal di Kepulauan Riau. Jauh melampaui itu, yayasan ini lahir dari panggilan iman dan tekad luhur untuk membangun peradaban manusia yang berkeadaban tinggi, bermoral mulia, dan memiliki kompetensi global. Kami meyakini bahwa investasi terbesar yang dapat diwariskan kepada peradaban adalah mendidik generasi muda agar mengenal kebenaran hakiki dan menguasai ilmu pengetahuan demi melayani kemanusiaan.",
        "Dalam rencana induk pengembangan jangka panjang 2026–2036, YPAB telah menetapkan arah kebijakan yang berfokus pada penguatan tiga pilar: keunggulan fasilitas fisik, profesionalisme sumber daya pendidik, dan kurikulum holistik berbasis nilai Kristiani. Kota Batam sebagai gerbang internasional Indonesia menuntut standar sumber daya manusia yang adaptif, berintelektual tinggi, serta memiliki ketahanan karakter yang kokoh.",
        "Kami terus mendorong modernisasi sarana laboratorium sains, komputasi terpadu, dan penguatan literasi digital, seraya memastikan setiap anak didik bertumbuh dalam atmosfer kasih, kedisiplinan positif yang mendidik, dan saling menghargai tanpa perundungan. Kemitraan yang harmonis antara yayasan, sekolah, orang tua, dan masyarakat menjadi pilar penopang keberlanjutan misi mulia ini."
      ]
    },
    {
      id: "komitmen-penguatan-karakter-kristiani",
      date: "25 Agustus 2026",
      author: "Rima Melati Hutagalung (Chairman of the Foundation)",
      title: "Komitmen Penguatan Karakter Kristiani dan Integritas Generasi Muda di Era Digital",
      img: "/slider-1.jpg",
      lead: "Tantangan terbesar dunia pendidikan saat ini bukan sekadar mengejar capaian nilai akademik kognitif semata, melainkan bagaimana menanamkan fondasi moral dan ketakutan akan Tuhan di tengah derasnya arus globalisasi digital yang serba permisif.",
      paragraphs: [
        "Tantangan terbesar dunia pendidikan saat ini bukan sekadar mengejar capaian nilai akademik kognitif semata, melainkan bagaimana menanamkan fondasi moral dan ketakutan akan Tuhan di tengah derasnya arus globalisasi digital yang serba permisif. Tanpa fondasi spiritual yang tangguh, kecerdasan intelektual berisiko kehilangan arah kompas kebajikan.",
        "Melalui pembiasaan ibadah chapel, program bina rohani berkala, dan penanaman 8 Dimensi Profil Pelajar yang berkarakter, YPAB memastikan proses pendidikan menyentuh ranah hati nurani siswa, membentuk integritas pantang menyerah, serta melatih kepekaan sosial terhadap sesama.",
        "Pihak yayasan senantiasa mendukung para pendidik untuk menjadi teladan hidup (role model) dalam tutur kata, tindakan kasih, dan profesionalisme mengajar sehingga sekolah benar-benar menjadi rumah kedua yang aman dan membahagiakan."
      ]
    },
    {
      id: "transformasi-infrastruktur-pembelajaran-modern",
      date: "10 Agustus 2026",
      author: "Rima Melati Hutagalung (Chairman of the Foundation)",
      title: "Transformasi Infrastruktur dan Lingkungan Belajar yang Aman, Sehat, dan Berkelanjutan",
      img: "/slider-2.jpg",
      lead: "Penyediaan fasilitas pembelajaran yang representatif, aman secara fisik maupun psikis, serta adaptif terhadap perkembangan teknologi mutakhir merupakan tanggung jawab institusi yang terus kami wujudkan secara berkesinambungan.",
      paragraphs: [
        "Penyediaan fasilitas pembelajaran yang representatif, aman secara fisik maupun psikis, serta adaptif terhadap perkembangan teknologi mutakhir merupakan tanggung jawab institusi yang terus kami wujudkan secara berkesinambungan demi menjamin kualitas kegiatan belajar mengajar.",
        "Revitalisasi ruang laboratorium komputer berbasis CBT, penataan ruang kelas ramah anak, ketersediaan perpustakaan digital e-Perpus, serta perluasan sarana olahraga dirancang untuk mendukung eksplorasi potensi talenta siswa secara optimal.",
        "Yayasan memastikan seluruh tata kelola gedung dan sarana pendukung mematuhi standar keselamatan dan higienitas tinggi, sejalan dengan visi mewujudkan Gerakan Sekolah Ramah Anak (SRA) yang nyata di Kota Batam."
      ]
    },
    {
      id: "sinergi-kemitraan-orang-tua-dan-sekolah",
      date: "28 Juli 2026",
      author: "Rima Melati Hutagalung (Chairman of the Foundation)",
      title: "Sinergi Kemitraan Strategis antara Orang Tua dan Sekolah Menuju Keberhasilan Peserta Didik",
      img: "/slider-3.jpg",
      lead: "Pendidikan yang berdaya guna selalu berakar pada keselarasan arah pandang antara nilai-nilai yang ditumbuhkan di lingkungan keluarga dengan proses pembiasaan disiplin positif yang diterapkan di lingkungan sekolah.",
      paragraphs: [
        "Pendidikan yang berdaya guna selalu berakar pada keselarasan arah pandang antara nilai-nilai yang ditumbuhkan di lingkungan keluarga dengan proses pembiasaan disiplin positif yang diterapkan di lingkungan sekolah. Kolaborasi yang erat ini menjadi jembatan penguat pertumbuhan anak.",
        "YPAB membuka ruang dialog konstruktif bersama komite sekolah dan paguyuban orang tua murid melalui forum komunikasi berkala, seminar psiko-edukasi pencegahan perundungan, dan pendampingan bakat anak secara terpadu.",
        "Kami percaya bahwa keberhasilan seorang anak bukan hanya buah dari kerja keras di dalam kelas, melainkan hasil sinergi doa, keteladanan orang tua di rumah, dan bimbingan penuh kasih dari para guru di sekolah."
      ]
    }
  ];

  // STATE ARTIKEL UTAMA YANG SEDANG AKTIF DITAMPILKAN
  const [currentArticle, setCurrentArticle] = useState(editorialList[0]);

  return (
    <main className="min-h-screen bg-[#F3EFE4] font-sans flex flex-col text-slate-800">
      
      {/* BREADCRUMB */}
      <section className="w-full pt-6 pb-3 px-4 sm:px-8 max-w-7xl mx-auto shrink-0">
        <div className="text-xs text-slate-600 font-semibold flex items-center gap-1 flex-wrap">
          <span>You are here :</span>
          <Link href="/" className="text-[#047857] hover:underline ml-1">🏠 Home</Link>
          <span>-</span>
          <Link href="/editorial-yayasan" className="text-[#047857] hover:underline">Editorial Yayasan</Link>
          <span>-</span>
          <span className="text-slate-500">Detail</span>
        </div>
      </section>

      {/* KONTEN UTAMA DUA KOLOM */}
      <section className="w-full flex-1 pb-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* KOLOM KIRI (8 KOLOM): ARTIKEL LENGKAP & JUDUL UTUH APA ADANYA */}
          <article className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
            
            {/* BADGE KATEGORI */}
            <div className="mb-3">
              <span className="bg-[#D97706] text-white text-[10px] sm:text-xs font-black px-3 py-1 rounded-md uppercase tracking-wider inline-block shadow-xs">
                YAYASAN EDITORIAL
              </span>
            </div>

            {/* JUDUL ARTIKEL DITAMPILKAN UTUH TANPA TERPOTONG / TIDAK DIPERSINGKAT */}
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight mb-3">
              {currentArticle.title}
            </h1>

            {/* METADATA TANGGAL & PENULIS */}
            <div className="flex items-center gap-4 text-xs text-slate-500 font-medium mb-6 pb-4 border-b border-slate-200 flex-wrap">
              <span className="flex items-center gap-1.5">
                <span>📅</span> {currentArticle.date}
              </span>
              <span className="flex items-center gap-1.5 font-bold text-slate-700">
                <span>✍️</span> {currentArticle.author}
              </span>
            </div>

            {/* FOTO UTAMA BERITA UTUH */}
            <div className="w-full aspect-16/9 rounded-xl overflow-hidden shadow-sm mb-6 bg-slate-200">
              <img
                src={currentArticle.img}
                alt={currentArticle.title}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/slider-1.jpg";
                }}
              />
            </div>

            {/* PARAGRAF NASKAH BERITA LENGKAP */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
              {currentArticle.paragraphs.map((para, pIdx) => (
                <p key={pIdx}>
                  {para}
                </p>
              ))}
            </div>

            {/* NAVIGASI KEMBALI */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap gap-3">
              <Link
                href="/editorial-yayasan"
                className="bg-[#D97706] hover:bg-amber-700 text-white font-bold text-xs py-2.5 px-6 rounded-lg shadow-sm transition-colors"
              >
                ← Kembali ke Arsip Editorial
              </Link>
              <Link
                href="/"
                className="bg-[#8B0000] hover:bg-red-800 text-white font-bold text-xs py-2.5 px-6 rounded-lg shadow-sm transition-colors"
              >
                Back to Home
              </Link>
            </div>

          </article>

          {/* KOLOM KANAN (4 KOLOM): 4 EDITORIAL YAYASAN TERAKHIR (KERANGKA FOTO KIRI, TEKS KANAN, LEAD PARAGRAF 1) */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-[#EFEAD8] p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-300/80">
              
              {/* HEADER SIDEBAR */}
              <div className="flex items-center gap-2 pb-3 mb-5 border-b-2 border-[#8B0000]">
                <span className="bg-[#8B0000] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  🏛
                </span>
                <h2 className="font-black text-sm sm:text-base text-slate-900 uppercase tracking-wide">
                  Editorial Yayasan Terbaru
                </h2>
              </div>

              {/* LIST 4 THUMBNAIL EDITORIAL YAYASAN TERAKHIR */}
              <div className="space-y-5">
                {editorialList.map((item, idx) => {
                  const isCurrent = currentArticle.id === item.id;

                  return (
                    <div 
                      key={idx} 
                      onClick={() => {
                        setCurrentArticle(item);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className={`flex items-start gap-3.5 p-2 rounded-xl transition-all cursor-pointer ${
                        isCurrent 
                          ? "bg-amber-200/60 ring-1 ring-amber-400" 
                          : "hover:bg-amber-100/60"
                      }`}
                    >
                      
                      {/* FOTO THUMBNAIL BERUKURAN KECIL DAN PADAT DI KIRI */}
                      <div className="w-24 h-20 sm:w-24 sm:h-20 shrink-0 rounded-lg overflow-hidden bg-slate-800 shadow-sm relative">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = "/slider-1.jpg";
                          }}
                        />
                      </div>

                      {/* TEKS TANGGAL, JUDUL UTUH, DAN LEAD PARAGRAF PERTAMA DI KANAN */}
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] sm:text-[11px] text-slate-500 font-semibold block leading-tight mb-1">
                          📅 {item.date}
                        </span>
                        
                        {/* JUDUL UTUH APA ADANYA */}
                        <h3 className="text-xs sm:text-[13px] font-bold text-[#047857] hover:text-emerald-900 transition-colors leading-snug line-clamp-2 mb-1.5">
                          {item.title}
                        </h3>

                        {/* LEAD ASLI DARI PARAGRAF PERTAMA NASKAH */}
                        <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed text-justify">
                          {item.lead}
                        </p>
                      </div>

                    </div>
                  );
                })}
              </div>

              {/* TOMBOL VIEW MORE DI BAGIAN PALING BAWAH */}
              <div className="pt-5 mt-3 border-t border-slate-300/80">
                <Link
                  href="/editorial-yayasan"
                  className="w-full bg-[#D97706] hover:bg-amber-700 text-white text-xs font-bold py-2.5 px-4 rounded-lg shadow-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>View More</span>
                  <span>↗</span>
                </Link>
              </div>

            </div>
          </aside>

        </div>
      </section>

      {/* FOOTER WEB */}
      <footer className="w-full bg-[#8B0000] text-white text-[10px] sm:text-xs text-center py-4 font-semibold shrink-0 mt-auto">
        Developed by Ir. Budhy Prasetyo
      </footer>

    </main>
  );
}
