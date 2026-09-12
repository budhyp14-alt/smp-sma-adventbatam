"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ActivityDetailPage() {
  const searchParams = useSearchParams();
  const currentId = searchParams.get("id") || "class-meeting-porseni";

  // DATA KEGIATAN SEKOLAH (URUTAN TERKINI)
  const allActivities = [
    {
      id: "class-meeting-porseni",
      tag: "OLAHRAGA & PRESTASI",
      title: "Pekan Olahraga Antarkelas (Class Meeting) dan Ajang Solidaritas Siswa",
      date: "Friday, 11 September 2026",
      author: "Kevin Pratama, S.Or",
      img: "/slider-1.jpg",
      paragraphs: [
        "Pekan Olahraga Antarkelas (Class Meeting) semester ini di SMP-SMA Advent Batam kembali diselenggarakan dengan penuh kemeriahan dan antusiasme tinggi dari seluruh peserta didik. Kegiatan tahunan ini bukan sekadar mengisi jeda evaluasi belajar pasca ujian, melainkan wadah strategis untuk menyalurkan energi positif, mengasah bakat atletik, serta merekatkan jalinan persaudaraan di lingkungan sekolah.",
        "Berbagai cabang olahraga dipertandingkan secara terstruktur, mulai dari turnamen futsal, bola basket, bola voli, hingga permainan tradisional seperti tarik tambang dan estafet beregu. Di lapangan pertandingan, seluruh siswa diajak mempraktikkan secara nyata arti sportivitas yang sesungguhnya: menghormati lawan bertanding, menerima keputusan wasit dengan lapang dada, dan merayakan kemenangan bersama secara santun tanpa merendahkan pihak lain.",
        "Dukungan dari para guru wali kelas dan sorak semangat rekan sekelas di pinggir lapangan menciptakan atmosfer kekeluargaan yang begitu hangat. Di samping kebugaran fisik, kegiatan ini terbukti efektif dalam memulihkan kebugaran mental para siswa setelah menjalani pekan evaluasi akademik yang intensif, sekaligus membangun jiwa kepemimpinan para panitia OSIS yang mengorganisasi jalannya lomba.",
        "Kepala sekolah bersama dewan guru memberikan apresiasi tinggi kepada seluruh kontingen kelas yang telah bertanding dengan dedikasi dan tertib. Nilai-nilai kedisiplinan, ketahanan mental, serta kerja sama tim yang terpancar selama Class Meeting ini diharapkan dapat terus terbawa dalam aktivitas belajar sehari-hari di ruang kelas maupun kehidupan bermasyarakat."
      ]
    },
    {
      id: "perkemahan-latihan-kepemimpinan",
      tag: "PRAMUKA & OUTDOOR",
      title: "Perkemahan Sabtu Minggu (Persami) & Latihan Dasar Kepemimpinan Siswa",
      date: "Saturday, 05 September 2026",
      author: "Pembina Pramuka YPAB",
      img: "/slider-2.jpg",
      paragraphs: [
        "Pendidikan kepramukaan dan kemandirian alam terbuka menjadi salah satu pilar pembinaan karakter siswa di SMP-SMA Advent Batam. Kegiatan Perkemahan Sabtu Minggu (Persami) kali ini difokuskan pada penguatan kedisiplinan diri, pengenalan teknik kepanduan dasar, serta latihan kepemimpinan beregu.",
        "Sejak kedatangan di lokasi perkemahan, para peserta dilatih mandiri mendirikan tenda, mengelola logistik konsumsi bersama regu, serta menjaga kebersihan lingkungan perkemahan. Aktivitas halang rintang dan navigasi darat dirancang khusus untuk memicu nalar kritis dan kekompakan tim saat menghadapi rintangan fisik.",
        "Pada sesi malam keakraban di sekitar api unggun, para siswa diajak merenungkan peran mereka sebagai calon penerus bangsa yang harus memiliki keteguhan prinsip moral dan kepedulian sosial yang tinggi. Sesi renungan rohani membimbing mereka untuk selalu menempatkan rasa syukur dan ketaatan kepada Tuhan di atas segala cita-cita hidup.",
        "Melalui kegiatan luar ruang ini, ketergantungan remaja pada gawai digital dapat dikurangi secara positif, berganti dengan interaksi interpersonal yang tulus, empati antarsesama, dan penghargaan yang mendalam terhadap keindahan alam semesta ciptaan Tuhan."
      ]
    },
    {
      id: "praktikum-komputasi-sains-cbt",
      tag: "SAINS & TEKNOLOGI",
      title: "Praktikum Terpadu Sains dan Penguatan Literasi Komputasi Laboratorium",
      date: "Tuesday, 01 September 2026",
      author: "Ir. Budhy Prasetyo",
      img: "/slider-3.jpg",
      paragraphs: [
        "Menjawab tantangan revolusi industri berbasis data dan otomatisasi, SMP-SMA Advent Batam secara berkala menyelenggarakan sesi praktikum terpadu di laboratorium komputer dan laboratorium sains modern. Kegiatan ini dirancang untuk menghubungkan konsep teori ilmiah di kelas dengan aplikasi pemecahan masalah praktis.",
        "Siswa diperkenalkan dengan metode pemodelan komputasi, simulasi eksperimen fisika dan kimia berbasis perangkat lunak, serta logika pemrograman algoritmik dasar. Pembelajaran kontekstual ini membiasakan siswa berpikir terstruktur (*computational thinking*), merumuskan hipotesis yang terukur, dan menguji validitas data secara ilmiah.",
        "Selain keterampilan teknis, ditekankan pula etika integritas akademik dalam pemanfaatan teknologi digital. Para siswa dilatih untuk tidak sekadar mengandalkan hasil otomatisasi kecerdasan buatan, melainkan memiliki daya analisis kritis untuk memeriksa keabsahan sumber referensi dan memahami proses logika di baliknya.",
        "Pengalaman langsung di laboratorium diharapkan menumbuhkan rasa percaya diri generasi muda sekolah kita untuk tidak hanya menjadi konsumen teknologi, tetapi mampu berkembang menjadi kreator inovasi yang bermanfaat bagi masyarakat luas."
      ]
    },
    {
      id: "kebaktian-padang-bina-rohani",
      tag: "SPIRITUAL & IBADAH",
      title: "Kebaktian Padang Civitas Akademika: Mempererat Kasih dan Ketakutan Akan Tuhan",
      date: "Friday, 28 August 2026",
      author: "Tim Pelayanan Rohani",
      img: "/slider-1.jpg",
      paragraphs: [
        "Kebaktian padang di alam terbuka menjadi momen yang senantiasa dinantikan oleh seluruh guru, staf, dan siswa SMP-SMA Advent Batam. Menjauh sejenak dari hiruk-pikuk suasana kelas, seluruh warga sekolah berkumpul dalam suasana teduh untuk beribadah dan memuji kebesaran Tuhan Sang Pencipta.",
        "Rangkaian ibadah diisi dengan puji-pujian yang dibawakan oleh paduan suara siswa, kesaksian pengalaman hidup yang menginspirasi, serta pembacaan firman Tuhan yang kontekstual dengan pergumulan hidup remaja masa kini. Suasana alam yang asri semakin memperdalam perenungan batin tentang arti kasih, kerendahan hati, dan pengampunan.",
        "Seusai ibadah formal, kegiatan dilanjutkan dengan sesi makan siang bersama secara kekeluargaan dan dinamika kelompok persahabatan. Sekat antartingkat kelas melebur dalam kehangatan dialog, canda tawa sehat, dan permainan kolaboratif yang menumbuhkan rasa saling memiliki (*sense of community*).",
        "Pendidikan spiritual semacam ini adalah jantung dari seluruh proses pendidikan di Advent Batam. Kami meyakini bahwa kecerdasan akal yang tidak diimbangi dengan hati yang takut akan Tuhan hanya akan menghasilkan kesombongan intelektual, sedangkan generasi yang berlandaskan iman akan membawa terang dan damai bagi lingkungannya."
      ]
    },
    {
      id: "pentas-seni-paduan-suara",
      tag: "SENI & KREATIVITAS",
      title: "Pentas Harmoni Musik & Gelar Kreasi Seni Rupa Nusantara",
      date: "Thursday, 20 August 2026",
      author: "Koordinator Kesenian",
      img: "/slider-2.jpg",
      paragraphs: [
        "Gelar Seni dan Musik tahunan SMP-SMA Advent Batam sukses memukau ratusan penonton yang memadati aula sekolah. Acara ini menjadi panggung apresiasi bagi seluruh karya kreatif siswa, mulai dari seni lukis, kriya tangan daur ulang, tari tradisional, hingga penampilan paduan suara (*choir*) sekolah yang sarat prestasi.",
        "Harmonisasi vokal dan penguasaan instrumen musik yang ditampilkan merupakan buah dari latihan disiplin dan kesabaran siswa selama berbulan-bulan di bawah bimbingan guru seni. Melalui musik dan seni, para siswa belajar bekerja sama secara selaras, di mana kontribusi tiap nada dan warna menentukan kesempurnaan penampilan bersama.",
        "Pameran instalasi seni rupa di selasar gedung sekolah juga memamerkan beragam kreasi orisinal bertema pelestarian alam dan kearifan lokal Melayu Kepulauan Riau. Hal ini memperlihatkan kepekaan estetika dan kecintaan siswa terhadap kekayaan budaya bangsa.",
        "Kegiatan ini membuktikan bahwa pendidikan holistik di SMP-SMA Advent Batam menaruh perhatian yang seimbang pada pertumbuhan logika sains, kesehatan jasmani, serta kehalusan budi pekerti melalui apresiasi seni dan budaya."
      ]
    }
  ];

  // 1. CARI BERITA ACTIVITIES YANG SEDANG AKTIF DIBACA
  const currentActivity =
    allActivities.find((item) => item.id === currentId) || allActivities[0];

  // 2. AMBIL 4 BERITA TERKINI (THE 4 LATEST ACTIVITIES NEWS)
  const the4Latest = allActivities.slice(0, 4);

  // 3. SARING 3 THUMBNAIL LAINNYA (Eksklusif: selain berita yang sedang tampil utuh saat ini)
  const other3Thumbnails = the4Latest
    .filter((item) => item.id !== currentActivity.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#F3EFE4] font-sans flex flex-col text-slate-800">
      {/* BREADCRUMB */}
      <section className="w-full pt-8 pb-4 px-4 sm:px-8 max-w-7xl mx-auto shrink-0">
        <div className="text-xs text-slate-600 font-semibold mb-4 flex items-center gap-1 flex-wrap">
          <span>You are here :</span>
          <Link href="/" className="text-[#047857] hover:underline ml-1">🏠 Home</Link>
          <span>-</span>
          <span className="text-slate-500">Activities</span>
          <span>-</span>
          <span className="text-slate-500">Detail</span>
        </div>
      </section>

      {/* KONTEN UTAMA */}
      <section className="w-full flex-1 pb-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* KOLOM KIRI (8 DARI 12): BERITA ACTIVITIES UTUH */}
          <article className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-2xl shadow-sm border-t-4 border-[#047857]">
            <span className="bg-[#047857] text-white text-[11px] font-bold px-3 py-1 rounded uppercase tracking-wider">
              {currentActivity.tag}
            </span>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-4 mb-3 leading-snug">
              {currentActivity.title}
            </h1>

            <div className="text-xs text-slate-500 font-medium pb-4 border-b border-slate-200 mb-6 flex gap-4 flex-wrap">
              <span>📅 {currentActivity.date}</span>
              <span>✍️ Oleh: {currentActivity.author}</span>
            </div>

            {/* FOTO KEGIATAN UTUH */}
            <div className="w-full aspect-[16/9] bg-slate-200 rounded-xl overflow-hidden mb-6 shadow-sm">
              <img
                src={currentActivity.img}
                alt={currentActivity.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* PARAGRAF BERITA UTUH */}
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed text-justify">
              {currentActivity.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* TOMBOL KEMBALI */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex justify-between items-center flex-wrap gap-4">
              <Link
                href="/"
                className="bg-[#8B0000] hover:bg-red-800 text-white font-bold text-xs py-2.5 px-6 rounded shadow-sm transition-colors"
              >
                ← Kembali ke Beranda
              </Link>
            </div>
          </article>

          {/* KOLOM KANAN (4 DARI 12): 3 THUMBNAIL BERITA ACTIVITIES TERKINI LAINNYA */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-[#EFEAD8] p-6 rounded-2xl shadow-sm border border-slate-200">
              
              <div className="flex items-center gap-2 mb-5 pb-3 border-b border-slate-300">
                <span className="bg-[#047857] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">★</span>
                <h3 className="font-bold text-sm sm:text-base text-slate-900 uppercase tracking-wide">
                  The 4 Latest Activities
                </h3>
              </div>

              <p className="text-xs text-slate-600 mb-4 font-medium">
                Berita kegiatan terkini lainnya di SMP-SMA Advent Batam:
              </p>

              {/* DAFTAR 3 THUMBNAIL LAINNYA */}
              <div className="space-y-5">
                {other3Thumbnails.map((item, idx) => (
                  <div key={idx} className="bg-white p-3.5 rounded-xl shadow-xs border border-slate-200 hover:border-emerald-600 transition-colors group">
                    
                    {/* FOTO THUMBNAIL (BISA DIKLIK) */}
                    <Link
                      href={`/activities/detail?id=${item.id}`}
                      className="w-full aspect-video rounded-lg overflow-hidden block bg-slate-200 mb-2.5 cursor-pointer relative"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-2 left-2 bg-[#047857]/90 text-white text-[9px] font-bold px-2 py-0.5 rounded">
                        {item.tag}
                      </span>
                    </Link>

                    {/* TANGGAL & JUDUL THUMBNAIL (BISA DIKLIK) */}
                    <span className="text-[10px] text-slate-500 font-semibold block mb-1">
                      📅 {item.date}
                    </span>

                    <Link href={`/activities/detail?id=${item.id}`}>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#047857] transition-colors leading-snug line-clamp-2 cursor-pointer mb-2">
                        {item.title}
                      </h4>
                    </Link>

                    <Link
                      href={`/activities/detail?id=${item.id}`}
                      className="text-[11px] font-bold text-[#047857] hover:underline inline-flex items-center gap-1"
                    >
                      Baca Selengkapnya →
                    </Link>
                  </div>
                ))}
              </div>

            </div>

            {/* KOTAK INFORMASI TAMBAHAN */}
            <div className="bg-[#EFEAD8] p-5 rounded-2xl shadow-sm border border-slate-200 text-xs text-slate-700 space-y-2">
              <h4 className="font-bold text-slate-900">SMP - SMA ADVENT BATAM</h4>
              <p className="text-[11px] text-slate-600">
                Pusat pendidikan yang memadukan keunggulan akademik, teknologi, dan nilai budi pekerti Kristiani.
              </p>
              <p className="font-semibold text-[#047857] pt-1">📞 0778-363082</p>
            </div>
          </aside>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#8B0000] text-white text-[10px] sm:text-xs text-center py-4 font-semibold shrink-0 mt-auto">
        Developed by Ir. Budhy Prasetyo
      </footer>
    </main>
  );
}
