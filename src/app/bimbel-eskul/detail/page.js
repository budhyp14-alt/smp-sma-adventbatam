import Link from "next/link";

export const metadata = {
  title: "Detail Program - SMP SMA Advent Batam",
};

export default function DetailBimbelEskul({ searchParams }) {
  // Kode ini akan otomatis menangkap kata apa pun di belakang ?id= pada URL
  const itemId = searchParams?.id || "Program Sekolah";
  
  // Membersihkan ID agar tampil rapi sebagai judul (contoh: bimbel-matematika -> BIMBEL MATEMATIKA)
  const judulTampil = itemId.replace(/-/g, ' ').toUpperCase();

  return (
    <main className="min-h-screen flex flex-col font-sans bg-[#E5DCC3]">
      
      {/* BREADCRUMB & HEADER */}
      <section className="w-full pt-8 pb-4 px-4 sm:px-8 max-w-7xl mx-auto shrink-0">
        <div className="text-xs text-slate-700 font-semibold mb-6 flex items-center gap-1 flex-wrap">
          <span>You are here :</span>
          <Link href="/" className="text-[#047857] hover:underline ml-1">🏠 Home</Link>
          <span>-</span>
          <Link href="/bimbel-eskul" className="text-[#047857] hover:underline">Bimbel & Eskul</Link>
          <span>-</span>
          <span className="text-slate-600">Baca Detail</span>
        </div>
      </section>

      {/* KONTEN UTAMA */}
      <section className="w-full flex-1 pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* KIRI - ARTIKEL FULL (TEMPLATE BACA DETAIL) */}
          <div className="lg:col-span-8 flex flex-col bg-white p-6 sm:p-10 rounded-xl shadow-sm border-t-4 border-[#047857]">
            
            {/* KEPALA ARTIKEL */}
            <div className="mb-6">
              <span className="bg-[#D97706] text-white text-[11px] font-bold px-3 py-1 rounded shadow-sm">INFO DETAIL PROGRAM</span>
              <h1 className="text-2xl sm:text-3xl font-black text-[#1e293b] mt-4 mb-3 leading-snug">
                Pembahasan Lengkap: {judulTampil}
              </h1>
              <div className="text-xs text-slate-500 font-medium flex gap-4 border-b border-slate-200 pb-4">
                <span>📅 Dipublikasikan: September 2026</span>
                <span>✍️ Oleh: Admin Sekolah</span>
              </div>
            </div>

            {/* FOTO UTAMA */}
            <div className="w-full aspect-[16/9] bg-slate-300 mb-8 rounded-lg overflow-hidden shadow-sm">
              <img src="/slider-2.jpg" alt="Detail Image" className="w-full h-full object-cover" />
            </div>

            {/* TEKS PANJANG (DUMMY KONTEN STANDAR) */}
            <div className="prose max-w-none text-slate-700 text-sm sm:text-[15px] leading-relaxed text-justify space-y-5">
              <p>
                Selamat datang di halaman detail program SMP-SMA Advent Batam. Halaman ini merupakan rincian selengkapnya dari program yang telah Anda pilih. Kami berkomitmen untuk terus memberikan fasilitas dan bimbingan terbaik bagi seluruh siswa-siswi demi mencapai potensi maksimal mereka, baik di bidang akademik maupun non-akademik.
              </p>
              <p>
                Program ini dirancang khusus dengan melibatkan tenaga pendidik yang profesional dan berpengalaman di bidangnya. Melalui kurikulum yang telah disesuaikan dengan kebutuhan zaman, para siswa tidak hanya diajarkan teori, tetapi juga praktik langsung yang mengasah kemampuan analisis, pemecahan masalah (<em>problem-solving</em>), kerja sama tim, dan kepemimpinan.
              </p>
              
              <h3 className="text-lg font-bold text-[#047857] mt-6 mb-2">Tujuan Utama Pelaksanaan</h3>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>Meningkatkan pemahaman mendalam tentang materi atau keterampilan yang dipelajari agar siswa dapat mengaplikasikannya di dunia nyata.</li>
                <li>Membentuk karakter disiplin, pantang menyerah, dan memiliki integritas tinggi sesuai dengan nilai-nilai Kristiani.</li>
                <li>Mempersiapkan mental dan kemampuan siswa untuk menghadapi kompetisi atau kejuaraan di tingkat kota, provinsi, hingga tingkat nasional.</li>
              </ul>
              
              <p>
                Bagi orang tua dan calon siswa yang membutuhkan informasi lebih lanjut mengenai pendaftaran, jadwal rinci, atau persyaratan untuk bergabung ke dalam kegiatan ini, silakan menghubungi pusat layanan informasi kami melalui kontak yang telah disediakan di sebelah kanan layar Anda.
              </p>
            </div>
            
            {/* TOMBOL KEMBALI */}
            <div className="mt-10 pt-6 border-t border-slate-200">
              <Link href="/bimbel-eskul" className="bg-[#8B0000] hover:bg-red-950 text-white font-bold text-xs py-2.5 px-6 rounded shadow-sm transition-colors inline-block">
                ← Kembali ke Halaman Sebelumnya
              </Link>
            </div>

          </div>

          {/* KANAN - SIDEBAR (STANDAR BARU PERMANEN) */}
          <div className="lg:col-span-4 lg:border-l border-dashed border-slate-500 lg:pl-8 space-y-8">
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-[15px] font-bold text-slate-800 mb-4">Cari Informasi</h3>
              <div className="flex">
                <input type="text" placeholder="Kata kunci..." className="flex-1 p-2.5 border border-slate-300 rounded-l text-xs focus:outline-none focus:border-[#047857]" />
                <button className="bg-[#047857] hover:bg-emerald-800 text-white font-bold px-5 text-xs rounded-r transition-colors">Cari</button>
              </div>
            </div>

            {/* BLOK INFO SEKOLAH STANDAR PERMANEN */}
            <div className="pt-6 border-t border-dashed border-slate-400">
              <div className="flex flex-col items-center lg:items-end text-center lg:text-right mb-6">
                <h3 className="text-[22px] font-black text-[#1e293b] mb-1">SMP - SMA ADVENT BATAM</h3>
                <p className="text-[12px] text-slate-800 font-medium">
                  Prof. DR. Hamka St., Kav 4, Kibing Village, Batu Aji District
                </p>
              </div>

              <ul className="text-[13px] text-slate-800 space-y-4">
                <li className="flex justify-between items-start gap-4">
                  <span className="font-bold shrink-0">NSPN</span>
                  <span className="text-right">70002994</span>
                </li>
                <li className="flex justify-between items-start gap-4">
                  <span className="font-bold shrink-0">Principal</span>
                  <span className="text-right leading-tight">
                    Tona Leon Ferdinan<br/>Situmorang,<br/>S.Pd.,MA.,ED.
                  </span>
                </li>
                <li className="flex justify-between items-center gap-4">
                  <span className="font-bold shrink-0">Phone</span>
                  <span className="text-[#047857] text-right font-medium">0778-363082</span>
                </li>
                <li className="flex justify-between items-center gap-4 border-b border-dashed border-slate-400 pb-6">
                  <span className="font-bold shrink-0">Email</span>
                  <span className="text-[#047857] text-right font-medium break-all">info@adventbatam.sch.id</span>
                </li>
                
                {/* SOCIAL MEDIA */}
                <li className="flex justify-between items-center gap-4 pt-2">
                  <span className="font-bold text-slate-800 text-[13px] ml-1">f</span>
                  <span className="text-[#047857] text-right cursor-pointer hover:underline font-medium">Facebook</span>
                </li>
                <li className="flex justify-between items-center gap-4">
                  <span className="font-bold text-slate-500 text-lg">📷</span>
                  <span className="text-[#047857] text-right cursor-pointer hover:underline font-medium">Instagram</span>
                </li>
                <li className="flex justify-between items-center gap-4">
                  <span className="font-bold text-blue-500 text-lg">▶</span>
                  <span className="text-[#047857] text-right cursor-pointer hover:underline font-medium">YouTube</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full shrink-0">
        <div className="bg-[#D97706] py-12 px-4 text-white">
          <div className="max-w-7xl mx-auto flex flex-col items-start space-y-6">
            <div className="text-xs font-semibold">
              <p>© 2026 SMP SMA Advent Batam. Mendidik Generasi Cerdas dan Berkarakter Kristus.</p>
            </div>
          </div>
        </div>
        <div className="bg-[#8B0000] text-white text-[10px] sm:text-xs text-center py-4 font-semibold tracking-wider">
          Developed by Ir. Budhy Prasetyo
        </div>
      </footer>

    </main>
  );
}
