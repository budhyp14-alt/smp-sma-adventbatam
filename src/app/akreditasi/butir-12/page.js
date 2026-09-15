"use client";

import { useState } from "react";
import Link from "next/link";

export default function Butir12Page() {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [activeSkTab, setActiveSkTab] = useState("2026-2027");
  const [activeMateriTab, setActiveMateriTab] = useState("materi-1");
  const [currentSlideIndex1, setCurrentSlideIndex1] = useState(0);
  const [currentSlideIndex2, setCurrentSlideIndex2] = useState(0);

  // DATA SK PROGRAM GERAKAN KELAS HARMONI 3 TAHUN PELAJARAN
  const skHarmoniData = {
    "2024-2025": {
      tp: "2024/2025",
      nomor: "058/08/SMP-YPAB/VII/2024",
      tanggal: "10 Juli 2024",
      rapat: "10 Juli 2024"
    },
    "2025-2026": {
      tp: "2025/2026",
      nomor: "059/08/SMP-YPAB/VII/2025",
      tanggal: "10 Juli 2025",
      rapat: "10 Juli 2025"
    },
    "2026-2027": {
      tp: "2026/2027",
      nomor: "060/08/SMP-YPAB/VII/2026",
      tanggal: "10 Juli 2026",
      rapat: "10 Juli 2026"
    }
  };

  // SLIDE LENGKAP MATERI 1: MATERI ANTI BULLYING (MESTIKA R TAMPUBOLON, M.PSI)
  const slidesMateri1 = [
    {
      title: "ANTI BULLYING",
      subtitle: "Sosialisasi & Edukasi Pencegahan Perundungan di Lingkungan Sekolah",
      speaker: "Mestika R Tampubolon, M.Psi., Psikolog",
      date: "Kamis, 16 Juli 2026",
      location: "SMPS Advent Batam Mas",
      points: [
        "Membangun kesadaran moral dan empati antarsesama warga sekolah.",
        "Mewujudkan iklim belajar yang aman, suportif, dan bebas intimidasi.",
        "Menghargai martabat setiap peserta didik tanpa membeda-bedakan latar belakang."
      ]
    },
    {
      title: "APA ITU BULLYING?",
      subtitle: "Definisi dan Pemahaman Dasar",
      points: [
        "Bullying (Bhs. Inggris) = Penindasan / Risak / Perundungan atau Penganiayaan (Bhs. Indonesia).",
        "Segala bentuk penindasan atau kekerasan yang dilakukan dengan sengaja oleh satu orang atau sekelompok orang yang lebih kuat atau berkuasa terhadap orang lain.",
        "Tujuan: Menyakiti pihak korban dan dilakukan secara terus-menerus dan berulang.",
        "Contoh Lingkup: School Bullying di ruang kelas, kantin, lorong sekolah, toilet, dan media sosial."
      ]
    },
    {
      title: "JENIS-JENIS BULLYING: 1. KONTAK FISIK LANGSUNG",
      subtitle: "Bentuk Kekerasan Jasmani Nyata",
      points: [
        "Tindakan memukul, menampar, mendorong, dan menendang teman.",
        "Tindakan menjambak, menggigit, mencubit, dan mencakar.",
        "Mengunci seseorang di dalam ruangan (toilet, gudang, atau kelas kosong).",
        "Tindakan memeras uang saku (pungli) dan merusak barang atau perlengkapan milik orang lain."
      ]
    },
    {
      title: "JENIS-JENIS BULLYING: 2. KONTAK VERBAL LANGSUNG",
      subtitle: "Kekerasan Berupa Tutur Kata dan Tekanan Lisan",
      points: [
        "Tindakan mengancam dan mengintimidasi korban secara lisan.",
        "Mempermalukan dan merendahkan martabat di depan khalayak umum.",
        "Memberi julukan buruk atau panggilan merendahkan (name-calling / body shaming).",
        "Sarkasme melukai perasaan, mencela, mengejek, memaki dengan kata kotor, dan menyebarkan fitnah/gosip."
      ]
    },
    {
      title: "JENIS-JENIS BULLYING: 3 & 4. PERILAKU NON-VERBAL",
      subtitle: "Kekerasan Bahasa Tubuh & Pengucilan Sosial",
      points: [
        "Perilaku Non-Verbal Langsung: Melihat sinis, menjulurkan lidah, menampilkan ekspresi muka merendahkan atau mengancam (biasanya menyertai bullying fisik dan verbal).",
        "Perilaku Non-Verbal Tidak Langsung: Sengaja mendiamkan seseorang, memanipulasi persahabatan hingga retak, mengucilkan teman dari pergaulan atau belajar kelompok, dan mengirimkan surat kaleng."
      ]
    },
    {
      title: "JENIS-JENIS BULLYING: 5. CYBER BULLYING",
      subtitle: "Kekerasan Melalui Sarana Media Digital & Elektronik",
      points: [
        "Tindakan menyakiti, mengintimidasi, atau mencemarkan nama baik seseorang melalui media sosial.",
        "Menyebarkan kebohongan, foto memalukan, atau video korban tanpa izin.",
        "Mengirimkan pesan ancaman via platform chatting (WhatsApp, DM Instagram, dsb).",
        "Trolling di ruang obrolan/game online, pembajakan akun (fake account), dan pembuatan grup berisi kebencian.",
        "Catatan Penting: Cyberbullying meninggalkan jejak digital (digital footprint) permanen yang sah dijadikan alat bukti hukum."
      ]
    },
    {
      title: "JENIS-JENIS BULLYING: 6. PELECEHAN SEKSUAL",
      subtitle: "Perilaku Agresi Seksual Fisik & Verbal",
      points: [
        "Tindakan pelecehan yang merendahkan kesusilaan dan privasi tubuh peserta didik.",
        "Dapat berupa agresi fisik menyentuh bagian pribadi tanpa persetujuan.",
        "Dapat berupa komentar verbal sensual tidak pantas, rayuan melecehkan, atau pemaksaan mengirim foto tidak senonoh secara daring."
      ]
    },
    {
      title: "3 KARAKTERISTIK UTAMA BULLYING",
      subtitle: "Kata Kunci dalam Mengidentifikasi Kasus",
      points: [
        "1. Ketidakseimbangan Kekuatan (Power Imbalance): Korban berada dalam posisi tidak mampu membela atau mempertahankan diri (contoh: pelaku berbadan besar vs kecil, pelaku berkelompok vs korban sendiri).",
        "2. Intimidasi (Intentional Harm): Perbuatan secara sadar dirancang untuk melukai korban baik fisik maupun mental.",
        "3. Berulang (Repetition): Perilaku tidak terjadi sekali saja, melainkan berlangsung berulang-ulang secara konsisten."
      ]
    },
    {
      title: "DAMPAK BULLYING BAGI SISWA",
      subtitle: "Trauma Fisik, Emosional, dan Penurunan Akademik",
      points: [
        "Menimbulkan ketakutan luar biasa, kecemasan kronis, dan gangguan psikologis.",
        "Memicu dendam pribadi dan melahirkan siklus rantai budaya kekerasan.",
        "School Phobia: Takut hadir ke sekolah, mogok belajar, dan penurunan prestasi drastis.",
        "Konsep Diri Rendah: Anak merasa lemah, bodoh, tidak berharga, dan merasa pantas diperlakukan buruk.",
        "Dalam kondisi ekstrem: Mengancam keselamatan nyawa dan memicu keputusasaan."
      ]
    },
    {
      title: "PROFIL ANAK: PELAKU VS ANAK RENTAN",
      subtitle: "Analisis Faktor Risiko Perilaku",
      points: [
        "Faktor Anak yang Suka Membully: Cemburu karena merasa gagal di bidang akademik, mengalami konflik/disharmoni keluarga di rumah, pola asuh terlalu dimanja tanpa batasan, haus pengakuan kelompok, atau sakit hati kalah bersaing.",
        "Faktor Anak yang Rentan Di-bully: Cenderung pendiam atau sulit bersosialisasi, memiliki perbedaan fisik menonjol, berasal dari strata sosial berbeda, atau mengalami hambatan pada mata pelajaran tertentu."
      ]
    },
    {
      title: "CARA MENCEGAH & MELAWAN BULLYING",
      subtitle: "Panduan Praktis Bagi Korban",
      points: [
        "Hadapi pelaku dengan berani, tenang, dan tatap mata dengan percaya diri.",
        "Simpan dan amankan semua barang bukti (terutama tangkapan layar/rekaman pada kasus cyberbullying).",
        "Jangan memendam sendiri; segera berbicara dan laporkan kepada Guru Piket, Wali Kelas, Guru BK, atau Orang Tua.",
        "Berbaur dan jalin persahabatan dengan lingkaran teman-teman yang suportif dan positif."
      ]
    },
    {
      title: "JIKA ANDA MELIHAT BULLYING (PERAN SAKSI/BYSTANDER)",
      subtitle: "Hentikan Pembiaran di Lingkungan Sekolah",
      points: [
        "JANGAN DIAM! Membiarkan sama artinya dengan mendukung perundungan.",
        "Jangan ikut menertawakan atau merekam aksi kekerasan untuk konten.",
        "Leraikan dan damaikan situasi secara aman jika memungkinkan.",
        "Dukung korban dengan mengajak menjauh dari kerumunan pelaku.",
        "Segera laporkan detik itu juga kepada otoritas sekolah dan guru yang bertugas."
      ]
    },
    {
      title: "PENANGANAN SISWA PELAKU BULLYING",
      subtitle: "Pendekatan Disiplin Positif & Restoratif",
      points: [
        "Segera ajak berbicara empat mata mengenai apa yang baru saja diperbuat.",
        "Cari tahu motif dan akar masalah tanpa langsung menghakimi atau mempermalukan.",
        "Posisikan diri sebagai pembimbing yang menolong menyadarkan kesalahan.",
        "Tumbuhkan rasa empati dengan menempatkan diri pada posisi penderitaan korban.",
        "Arahkan energi berlebih ke hal positif (olahraga, kepemimpinan OSIS, kesenian).",
        "Terapkan konsekuensi mendidik yang konsisten sesuai tata tertib sekolah."
      ]
    },
    {
      title: "PEMBEKALAN SELF HEALING UNTUK KORBAN (BAGIAN 1)",
      subtitle: "Teknik Deep Breathing & Muscle Relaxation",
      points: [
        "Deep Breathing Exercises (Teknik Pernapasan 4-7-8): Tarik napas perlahan melalui hidung selama 4 detik, tahan napas di dada selama 7 detik, lalu hembuskan napas kuat melalui mulut selama 8 detik. Ulangi sebanyak 4 kali untuk meredakan kepanikan.",
        "Progressive Muscle Relaxation: Fokus pada area bahu yang tegang, angkat kedua bahu ke arah telinga, tahan selama 5-10 detik, lalu rilekskan penuh secara perlahan."
      ]
    },
    {
      title: "PEMBEKALAN SELF HEALING UNTUK KORBAN (BAGIAN 2)",
      subtitle: "Guided Imagery & Landasan Rohani",
      points: [
        "Guided Imagery & Visualization: Duduk rileks, ciptakan gambaran mental tempat yang aman dan damai (alam, pantai, gunung), dan rasakan kenyamanan batin.",
        "Penguatan Firman Tuhan (1 Yohanes 2:9): 'Barang siapa berkata bahwa ia berada di dalam terang, tetapi ia membenci saudaranya, ia berada di dalam kegelapan sampai sekarang.'",
        "Prinsip Kasih Kristiani (Lukas 6:27-28): 'Kasihilah musuhmu, berbuatlah baik kepada orang yang membenci kamu; mintalah berkat bagi orang yang mengutuk kamu; berdoalah bagi orang yang mencaci kamu.'"
      ]
    },
    {
      title: "KESIMPULAN & PESAN KUNCI SOSIALISASI",
      subtitle: "Sekolah adalah Zona Kasih Sayang & Aman",
      points: [
        "Bagi Guru: Ajarkan komunikasi asertif, lakukan patroli keliling lingkungan sekolah, dan jalin kedekatan personal dengan siswa.",
        "Bagi Orang Tua: Ajarkan kemandirian, latih anak berani berkata 'TIDAK' pada kekerasan, dan bangun komunikasi aktif dengan wali kelas.",
        "Bagi Siswa: Jangan takut bersuara, tolak pemalakan uang, dan tolak segala bentuk ejekan.",
        "Slogan Kebangsaan: SAY NO TO BULLYING! Anak Terlindungi, Indonesia Maju."
      ]
    }
  ];

  // SLIDE LENGKAP MATERI 2: MATERI BULLYING PADA ANAK REMAJA
  const slidesMateri2 = [
    {
      title: "BULLYING PADA ANAK REMAJA",
      subtitle: "Kajian Komprehensif Fenomena, Dampak, dan Sekolah Ramah Anak",
      speaker: "Mestika Retina T, M.Psi., Psikolog",
      location: "SMPS Advent Batam Mas",
      points: [
        "Menelisik realitas perundungan di era transformasi digital remaja.",
        "Penerapan instrumen pencegahan berlandaskan Undang-Undang Perlindungan Anak.",
        "Langkah kolaboratif sekolah ramah anak lintas pemangku kepentingan."
      ]
    },
    {
      title: "DEFINISI ILMIAH BULLYING",
      subtitle: "Kajian Pustaka (Wicaksana, 2008)",
      points: [
        "Kekerasan fisik dan psikologis jangka panjang yang dilakukan seseorang atau kelompok terhadap seseorang yang tidak mampu mempertahankan dirinya.",
        "Terdapat hasrat sadar untuk melukai, menakuti, atau membuat korban terus-menerus berada di bawah tekanan batin.",
        "Bullying bukan sekadar perselisihan biasa, melainkan penyalahgunaan kuasa (abuse of power) antarteman sebaya."
      ]
    },
    {
      title: "FENOMENA GUNUNG ES PERUNDUNGAN DI INDONESIA",
      subtitle: "Data dan Fakta Nasional",
      points: [
        "Kasus perundungan anak dan remaja di Indonesia ibarat fenomena gunung es: kasus yang terlaporkan hanya sebagian kecil di permukaan, sementara fakta di lapangan sangat masif dan mengakar.",
        "Perundungan terwariskan antargenerasi (senioritas) sehingga sering kali luput dari pemantauan pihak sekolah dan orang tua.",
        "Temuan LPAI: Kasus bullying terjadi bukan hanya di jenjang SMP/SMA, namun marak sejak anak usia dini (3-12 tahun)."
      ]
    },
    {
      title: "ANCAMAN DI SEKITAR DUNIA REMAJA SAAT INI",
      subtitle: "Tantangan Moral & Media Digital",
      points: [
        "1. Kekerasan fisik dan pengeroyokan antargeng sebaya.",
        "2. Narkoba dan zat adiktif yang merusak masa depan remaja.",
        "3. Pornografi, konten amoral, dan penyimpangan seksual daring.",
        "4. Bencana sosial, intoleransi, dan radikalisme digital.",
        "5. Darurat Perlindungan Anak: Kejahatan siber yang menyasar kepolosan remaja."
      ]
    },
    {
      title: "LANDASAN HUKUM PERLINDUNGAN ANAK",
      subtitle: "Undang-Undang Republik Indonesia Nomor 35 Tahun 2014",
      points: [
        "Pasal 76C UU 35/2014: 'Setiap orang dilarang menempatkan, membiarkan, melakukan, menyuruh melakukan, atau turut serta melakukan kekerasan terhadap anak.'",
        "Pasal 54 UU 35/2014: 'Anak di dalam dan lingkungan satuan pendidikan wajib mendapatkan perlindungan dari tindak kekerasan fisik, psikis, kejahatan seksual, dan kejahatan lainnya yang dilakukan oleh pendidik, tenaga kependidikan, sesama peserta didik, dan/atau pihak lain.'"
      ]
    },
    {
      title: "DATA SURVEI KESEHATAN SEKOLAH (BALITBANG KEMKES)",
      subtitle: "Korelasi Bullying Terhadap Risiko Fatalitas",
      points: [
        "Survei Berbasis Sekolah Pelajar SMP & SMA Nasional:",
        "Prevalensi Pernah Di-Bully: Pelajar Laki-laki 24,1% dan Pelajar Perempuan 17,4% (Rata-rata total 20,6%).",
        "Dampak Ekstrem: Pelajar yang pernah di-bully memiliki kecenderungan keinginan bunuh diri sebesar 5,2% (Perempuan 5,9% dan Laki-laki 4,3%).",
        "Kesimpulan: Bullying adalah isu keselamatan hidup darurat yang harus ditangani segera."
      ]
    },
    {
      title: "BENTUK-BENTUK PERUNDUNGAN DI SEKOLAH",
      subtitle: "Klasifikasi Fisik, Verbal, dan Rasional",
      points: [
        "Fisik: Memukul, menendang, mengeroyok, menjambak, merampas bekal makanan, merusak tas/buku, dan pemerasan uang.",
        "Verbal: Menertawakan kecacatan fisik, memanggil nama julukan menyakitkan, berteriak kencang mencaci, dan menyebarkan berita bohong.",
        "Rasional/Sosial: Tidak membolehkan teman ikut bermain, mengucilkan dari kelompok belajar, dan melarang teman lain bergaul dengan korban."
      ]
    },
    {
      title: "PRAKTIK BAIK: GERAKAN SEKOLAH RAMAH ANAK (SRA)",
      subtitle: "Definisi & Kebijakan Multipihak",
      points: [
        "Definisi SRA: Satuan pendidikan yang aman, bersih, sehat, peduli dan berbudaya lingkungan hidup, serta mampu menjamin, memenuhi, dan menghargai hak perlindungan anak dari kekerasan dan diskriminasi.",
        "Sinergi Kementerian & Lembaga: Sekolah Bebas Napza (BNN), Pangan Jajan Sehat (BPOM), Kantin Kejujuran (KPK/Kemdikbud), UKS Terpadu (Kemenkes/Kemenag), dan Sekolah Aman Bencana (BNPB)."
      ]
    },
    {
      title: "4 TAHAPAN PENERAPAN SEKOLAH RAMAH ANAK",
      subtitle: "Permeneg PPPA Nomor 8 Tahun 2014",
      points: [
        "Tahap 1 - Persiapan: Konsultasi bersama perwakilan anak, penyusunan komitmen kebijakan SRA tertulis, dan pembentukan Tim SRA/Satgas TPPK sekolah.",
        "Tahap 2 - Perencanaan: Menyusun Rencana Aksi Tahunan dan mengintegrasikan program pencegahan kekerasan ke kurikulum.",
        "Tahap 3 - Pelaksanaan: Melaksanakan aksi nyata dengan mengoptimalkan peran warga sekolah, orang tua, alumni, dan masyarakat sekitar.",
        "Tahap 4 - Pemantauan, Evaluasi & Pelaporan: Monitoring rutin setiap bulan, evaluasi triwulan, dan pelaporan berkala ke Gugus Tugas Kota Layak Anak (KLA)."
      ]
    },
    {
      title: "SOLUSI KOMUNIKASI ASERTIF BAGI GURU & ORANG TUA",
      subtitle: "Ketegasan Santun Tanpa Kekerasan",
      points: [
        "Makna Sikap Asertif: Kemampuan mengekspresikan pikiran, perasaan, hak, dan batasan pribadi secara langsung, jujur, terhormat, tanpa rasa takut dan tanpa menyakiti orang lain.",
        "Bagi Guru: Menjadi teladan komunikasi asertif di kelas, tidak sekadar mengajar tetapi aktif mengawasi titik rawan sekolah, dan menangani aduan tanpa menyalahkan korban.",
        "Bagi Orang Tua: Membangun kelekatan emosional di rumah, mendengarkan curahan hati anak setiap hari, dan menjalin komunikasi intensif dengan pihak sekolah."
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#F3EFE4] font-sans flex flex-col text-slate-800">
      
      {/* BREADCRUMB & JUDUL HALAMAN */}
      <section className="w-full pt-8 pb-4 px-4 sm:px-8 max-w-7xl mx-auto shrink-0">
        <div className="text-xs text-slate-600 font-semibold mb-4 flex items-center gap-1 flex-wrap">
          <span>You are here :</span>
          <Link href="/" className="text-[#047857] hover:underline ml-1">🏠 Home</Link>
          <span>-</span>
          <Link href="/akreditasi" className="text-[#047857] hover:underline">Akreditasi</Link>
          <span>-</span>
          <span className="text-slate-500">Butir 12</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-slate-300">
          <div>
            <span className="bg-[#8B0000] text-white text-[10px] sm:text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-2">
              INSTRUMEN AKREDITASI BAN-PDM / BAN-S/M
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-[#1e293b] tracking-wider uppercase">
              BUKTI KINERJA BUTIR 12
            </h1>
            <p className="text-xs sm:text-sm text-slate-700 font-semibold mt-1 max-w-4xl leading-relaxed">
              Satuan pendidikan mewujudkan iklim lingkungan belajar yang aman secara psikis dan fisik bagi peserta didik, pendidik, dan tenaga kependidikan.
            </p>
          </div>

          <div className="bg-emerald-50 border border-emerald-300 px-4 py-2 rounded-xl text-left md:text-right shrink-0">
            <span className="text-[10px] text-emerald-800 font-bold block uppercase tracking-wider">Status Akreditasi</span>
            <span className="text-sm sm:text-base font-black text-emerald-950 flex items-center gap-1.5 md:justify-end">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
              Visitasi Lapangan Asesor
            </span>
            <span className="text-[10px] text-slate-500 block">SMPS Advent Batam Mas</span>
          </div>
        </div>
      </section>

      {/* KONTEN UTAMA DUA KOLOM */}
      <section className="w-full flex-1 pb-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* KOLOM KIRI */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* KARTU PENGANTAR BUTIR 12 */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl shadow-sm border-t-4 border-[#047857]">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                Butir 12. Iklim Lingkungan Belajar yang Aman Secara Psikis dan Fisik
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify mb-5">
                SMPS Advent Batam Mas berkomitmen penuh menghadirkan lingkungan pendidikan yang kondusif, berkeadilan, dan bebas dari segala bentuk diskriminasi, intimidasi, maupun kekerasan fisik dan emosional. Seluruh tata kelola perlindungan warga sekolah didukung oleh regulasi tertulis yang terstruktur, satuan tugas pencegahan kekerasan yang aktif, serta program pembinaan terukur bagi peserta didik, pendidik, dan tenaga kependidikan.
              </p>

              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className="bg-[#047857] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      Indikator 3.12.1
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      Kebijakan dalam Pencegahan dan Penanganan Perundungan dan Kekerasan
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify">
                    Sekolah memiliki kebijakan tertulis dan mekanisme yang jelas untuk mencegah dan menangani kasus perundungan (bullying) dan kekerasan di lingkungan sekolah, termasuk pembentukan Tim Pencegahan dan Penanganan Kekerasan (TPPK).
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className="bg-[#047857] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      Indikator 3.12.2
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                      Program bagi Warga Sekolah dalam Pencegahan dan Penanganan Perundungan dan Kekerasan
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify">
                    Sekolah melaksanakan program sosialisasi dan edukasi anti-perundungan dan kekerasan secara berkala kepada guru, murid, dan orang tua sebagai upaya preventif membangun lingkungan sekolah yang aman.
                  </p>
                </div>
              </div>
            </div>

            {/* DAFTAR BUKTI FISIK EVIDENCE */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-black text-sm text-slate-900 uppercase tracking-wide">
                  Berkas Bukti Dukung (Evidence) Butir 12
                </h3>
                <span className="text-[11px] text-slate-500 font-semibold">
                  Tersedia untuk Telaah Asesor
                </span>
              </div>

              {evidenceDocuments.map((doc, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-emerald-600 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="bg-amber-100 text-amber-900 font-bold text-[10px] px-2 py-0.5 rounded">
                        {doc.badge}
                      </span>
                      <span className="text-[11px] font-mono font-semibold text-slate-500">
                        {doc.nomor}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {doc.title}
                    </h4>

                    <p className="text-xs text-slate-600 mt-1 leading-relaxed text-justify">
                      {doc.desc}
                    </p>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2 shrink-0">
                    <span className="text-[10px] text-emerald-800 font-bold bg-emerald-50 px-2 py-1 rounded border border-emerald-200 whitespace-nowrap">
                      ✓ {doc.status}
                    </span>
                    
                    <button 
                      type="button"
                      onClick={() => {
                        setSelectedDoc(doc);
                        if (doc.docType === "sk-multi") setActiveSkTab("2026-2027");
                        if (doc.docType === "materi-edukasi") {
                          setActiveMateriTab("materi-1");
                          setCurrentSlideIndex1(0);
                          setCurrentSlideIndex2(0);
                        }
                      }}
                      className="bg-[#047857] hover:bg-emerald-800 text-white font-bold text-xs px-4 py-2 rounded-lg shadow-sm transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap flex items-center gap-1"
                    >
                      <span>Buka Dokumen</span>
                      <span>↗</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* NAVIGASI BAWAH */}
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/akreditasi"
                className="bg-[#D97706] hover:bg-amber-700 text-white font-bold text-xs py-2.5 px-6 rounded shadow-sm transition-colors"
              >
                ← Kembali ke Ringkasan Akreditasi
              </Link>
              <Link
                href="/"
                className="bg-[#8B0000] hover:bg-red-800 text-white font-bold text-xs py-2.5 px-6 rounded shadow-sm transition-colors"
              >
                Back to Home
              </Link>
            </div>

          </div>

          {/* KOLOM KANAN */}
          <aside className="lg:col-span-4 space-y-6">
            
            <div className="bg-[#EFEAD8] p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-300">
                <span className="bg-[#8B0000] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">🏛</span>
                <h3 className="font-bold text-sm sm:text-base text-slate-900 uppercase tracking-wide">
                  Visitasi Akreditasi
                </h3>
              </div>
              <div className="text-xs text-slate-700 space-y-2 leading-relaxed">
                <p>
                  <strong className="text-slate-900">Satuan Pendidikan:</strong> SMPS Advent Batam Mas
                </p>
                <p>
                  <strong className="text-slate-900">NPSN:</strong> 70002994
                </p>
                <p>
                  <strong className="text-slate-900">Fokus Verifikasi Butir 12:</strong> Pemeriksaan SK Satgas TPPK dan SK Program Gerakan Kelas Harmoni (3 TP), modul materi slide PPT pelatihan narasumber, dokumentasi foto/video, serta instrumen pelaporan evaluasi disiplin positif.
                </p>
              </div>
            </div>

            <div className="bg-[#EFEAD8] p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-sm text-slate-900 mb-3 pb-2 border-b border-slate-300 uppercase tracking-wide">
                Alur Eskalasi Penanganan
              </h3>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="bg-white p-2.5 rounded border border-slate-200">
                  <strong className="text-[#047857] block">Tahap 1 - 3:</strong>
                  <span>Identifikasi Perilaku → Klarifikasi & Dialog Empatik → Penetapan Kategori</span>
                </div>
                <div className="bg-white p-2.5 rounded border border-slate-200">
                  <strong className="text-[#047857] block">Tahap 4 - 6:</strong>
                  <span>Pembinaan Sesuai Kategori → Pendokumentasian & Komunikasi Ortu → Pemantauan & Evaluasi</span>
                </div>
              </div>
            </div>

            <div className="bg-[#EFEAD8] p-5 rounded-2xl shadow-sm border border-slate-200 text-xs text-slate-700 space-y-2">
              <h4 className="font-black text-slate-900">SMPS ADVENT BATAM MAS</h4>
              <p className="text-[11px] text-slate-600">
                Jalan Prof. Dr. Hamka Kav. IV - Batu Aji - Batam (Kode Pos: 29432)
              </p>
              <p className="text-[11px] text-slate-600">
                Email: smpadventbmas@gmail.com
              </p>
              <p className="font-semibold text-[#047857] pt-1">📞 0778-363082</p>
            </div>

          </aside>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* MODAL POP-UP VIEWER DOKUMEN DENGAN SLIDE PPT VIEWER INTERAKTIF             */}
      {/* ========================================================================= */}
      {selectedDoc && (
        <div className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-2 sm:p-5 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-5xl max-h-[96vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200">
            
            {/* HEADER MODAL */}
            <div className="bg-[#1e293b] text-white p-4 sm:p-5 flex items-center justify-between shrink-0">
              <div>
                <span className="bg-amber-500 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                  {selectedDoc.badge}
                </span>
                <h3 className="text-sm sm:text-base font-bold mt-1 text-white leading-tight">
                  {selectedDoc.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedDoc(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-black transition-colors cursor-pointer ml-3 shrink-0"
                aria-label="Tutup Pratinjau Dokumen"
              >
                ✕
              </button>
            </div>

            {/* TAB PILIHAN JIKA MEMBUKA MODUL MATERI EDUKASI PPT & EVALUASI */}
            {selectedDoc.docType === "materi-edukasi" && (
              <div className="bg-slate-100 border-b border-slate-300 px-4 pt-3 flex gap-2 overflow-x-auto shrink-0">
                <button
                  onClick={() => setActiveMateriTab("materi-1")}
                  className={`px-4 py-2 text-xs font-bold rounded-t-lg transition-all border-t border-x cursor-pointer ${
                    activeMateriTab === "materi-1"
                      ? "bg-white text-[#047857] border-slate-300 border-b-transparent shadow-xs font-black"
                      : "bg-slate-200 text-slate-600 hover:bg-slate-300 border-transparent"
                  }`}
                >
                  📽️ Slide PPT 1: Anti Bullying
                </button>
                <button
                  onClick={() => setActiveMateriTab("materi-2")}
                  className={`px-4 py-2 text-xs font-bold rounded-t-lg transition-all border-t border-x cursor-pointer ${
                    activeMateriTab === "materi-2"
                      ? "bg-white text-[#047857] border-slate-300 border-b-transparent shadow-xs font-black"
                      : "bg-slate-200 text-slate-600 hover:bg-slate-300 border-transparent"
                  }`}
                >
                  📽️ Slide PPT 2: Bullying Remaja
                </button>
                <button
                  onClick={() => setActiveMateriTab("evaluasi")}
                  className={`px-4 py-2 text-xs font-bold rounded-t-lg transition-all border-t border-x cursor-pointer ${
                    activeMateriTab === "evaluasi"
                      ? "bg-white text-[#047857] border-slate-300 border-b-transparent shadow-xs font-black"
                      : "bg-slate-200 text-slate-600 hover:bg-slate-300 border-transparent"
                  }`}
                >
                  📋 Bab VII: Pedoman Pelaporan
                </button>
              </div>
            )}

            {/* TAB PILIHAN SK JIKA SK MULTI-TAHUN */}
            {selectedDoc.docType === "sk-multi" && (
              <div className="bg-slate-100 border-b border-slate-300 px-4 pt-3 flex gap-2 overflow-x-auto shrink-0">
                {Object.keys(skHarmoniData).map((key) => {
                  const item = skHarmoniData[key];
                  const isActive = activeSkTab === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveSkTab(key)}
                      className={`px-4 py-2 text-xs font-bold rounded-t-lg transition-all border-t border-x cursor-pointer ${
                        isActive
                          ? "bg-white text-[#047857] border-slate-300 border-b-transparent shadow-xs"
                          : "bg-slate-200 text-slate-600 hover:bg-slate-300 border-transparent"
                      }`}
                    >
                      📄 SK TP {item.tp}
                    </button>
                  );
                })}
              </div>
            )}

            {/* BODY DOKUMEN MODAL (SCROLLABLE) */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-800 leading-relaxed bg-[#f1f5f9] flex-1">
              
              {/* TAMPILAN 1: MODUL MATERI EDUKASI BERBENTUK SLIDE-SLIDE PPT LENGKAP */}
              {selectedDoc.docType === "materi-edukasi" ? (
                <div>
                  {/* PPT MATERI 1 */}
                  {activeMateriTab === "materi-1" && (
                    <div className="space-y-4 max-w-4xl mx-auto">
                      
                      {/* NAVIGATOR KONTROL SLIDE ATAS */}
                      <div className="bg-white p-3 rounded-xl border border-slate-300 shadow-xs flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="bg-[#8B0000] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                            PPT SLIDE VIEWER
                          </span>
                          <span className="font-bold text-xs text-slate-800">
                            Slide {currentSlideIndex1 + 1} dari {slidesMateri1.length}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            disabled={currentSlideIndex1 === 0}
                            onClick={() => setCurrentSlideIndex1(prev => Math.max(0, prev - 1))}
                            className={`px-3 py-1.5 rounded text-xs font-bold transition-colors cursor-pointer flex items-center gap-1 ${
                              currentSlideIndex1 === 0 
                                ? "bg-slate-200 text-slate-400 cursor-not-allowed" 
                                : "bg-slate-800 hover:bg-slate-900 text-white"
                            }`}
                          >
                            ◀ Slide Sebelumnya
                          </button>
                          <button
                            type="button"
                            disabled={currentSlideIndex1 === slidesMateri1.length - 1}
                            onClick={() => setCurrentSlideIndex1(prev => Math.min(slidesMateri1.length - 1, prev + 1))}
                            className={`px-3 py-1.5 rounded text-xs font-bold transition-colors cursor-pointer flex items-center gap-1 ${
                              currentSlideIndex1 === slidesMateri1.length - 1 
                                ? "bg-slate-200 text-slate-400 cursor-not-allowed" 
                                : "bg-[#047857] hover:bg-emerald-800 text-white"
                            }`}
                          >
                            Slide Berikutnya ▶
                          </button>
                        </div>
                      </div>

                      {/* KANVAS SLIDE PPT 16:9 ELEGAN */}
                      <div className="w-full bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#1e293b] text-white p-6 sm:p-10 rounded-2xl shadow-xl border-2 border-amber-500/40 min-h-[360px] sm:min-h-[400px] flex flex-col justify-between relative overflow-hidden">
                        
                        {/* DEKORASI KOP SLIDE */}
                        <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                            <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-amber-400">
                              SMPS ADVENT BATAM MAS • SOSIALISASI ANTI BULLYING
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-slate-400">
                            Narasumber: Mestika R Tampubolon, M.Psi., Psikolog
                          </span>
                        </div>

                        {/* KONTEN UTAMA SLIDE */}
                        <div className="py-4 space-y-4">
                          <div>
                            <h4 className="text-lg sm:text-2xl font-black text-amber-300 tracking-wide leading-tight">
                              {slidesMateri1[currentSlideIndex1].title}
                            </h4>
                            {slidesMateri1[currentSlideIndex1].subtitle && (
                              <p className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">
                                {slidesMateri1[currentSlideIndex1].subtitle}
                              </p>
                            )}
                          </div>

                          {/* POIN-POIN MATERI UTUH */}
                          <div className="space-y-2.5 pt-1">
                            {slidesMateri1[currentSlideIndex1].points.map((pt, ptIdx) => (
                              <div key={ptIdx} className="flex items-start gap-3 bg-white/5 hover:bg-white/10 p-3 rounded-xl border border-white/10 transition-colors">
                                <span className="text-amber-400 font-black text-sm shrink-0">❖</span>
                                <p className="text-xs sm:text-sm text-slate-100 leading-relaxed text-justify">
                                  {pt}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* FOOTER SLIDE */}
                        <div className="border-t border-slate-800 pt-3 flex items-center justify-between text-[10px] text-slate-400">
                          <span>Dokumen Asli Sosialisasi Siswa (34 Halaman PPT)</span>
                          <span className="font-bold text-amber-400">
                            Halaman {currentSlideIndex1 + 1} / {slidesMateri1.length}
                          </span>
                        </div>
                      </div>

                    </div>
                  )}

                  {/* PPT MATERI 2 */}
                  {activeMateriTab === "materi-2" && (
                    <div className="space-y-4 max-w-4xl mx-auto">
                      
                      {/* NAVIGATOR KONTROL SLIDE ATAS */}
                      <div className="bg-white p-3 rounded-xl border border-slate-300 shadow-xs flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="bg-[#047857] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                            PPT SLIDE VIEWER
                          </span>
                          <span className="font-bold text-xs text-slate-800">
                            Slide {currentSlideIndex2 + 1} dari {slidesMateri2.length}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            disabled={currentSlideIndex2 === 0}
                            onClick={() => setCurrentSlideIndex2(prev => Math.max(0, prev - 1))}
                            className={`px-3 py-1.5 rounded text-xs font-bold transition-colors cursor-pointer flex items-center gap-1 ${
                              currentSlideIndex2 === 0 
                                ? "bg-slate-200 text-slate-400 cursor-not-allowed" 
                                : "bg-slate-800 hover:bg-slate-900 text-white"
                            }`}
                          >
                            ◀ Slide Sebelumnya
                          </button>
                          <button
                            type="button"
                            disabled={currentSlideIndex2 === slidesMateri2.length - 1}
                            onClick={() => setCurrentSlideIndex2(prev => Math.min(slidesMateri2.length - 1, prev + 1))}
                            className={`px-3 py-1.5 rounded text-xs font-bold transition-colors cursor-pointer flex items-center gap-1 ${
                              currentSlideIndex2 === slidesMateri2.length - 1 
                                ? "bg-slate-200 text-slate-400 cursor-not-allowed" 
                                : "bg-[#047857] hover:bg-emerald-800 text-white"
                            }`}
                          >
                            Slide Berikutnya ▶
                          </button>
                        </div>
                      </div>

                      {/* KANVAS SLIDE PPT 16:9 ELEGAN */}
                      <div className="w-full bg-gradient-to-br from-[#1e1e24] via-[#241c2c] to-[#1a1c29] text-white p-6 sm:p-10 rounded-2xl shadow-xl border-2 border-emerald-500/40 min-h-[360px] sm:min-h-[400px] flex flex-col justify-between relative overflow-hidden">
                        
                        <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                            <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-emerald-400">
                              SMPS ADVENT BATAM MAS • KAJIAN BULLYING PADA ANAK REMAJA
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-slate-400">
                            Narasumber: Mestika Retina T, M.Psi., Psikolog
                          </span>
                        </div>

                        <div className="py-4 space-y-4">
                          <div>
                            <h4 className="text-lg sm:text-2xl font-black text-emerald-300 tracking-wide leading-tight">
                              {slidesMateri2[currentSlideIndex2].title}
                            </h4>
                            {slidesMateri2[currentSlideIndex2].subtitle && (
                              <p className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">
                                {slidesMateri2[currentSlideIndex2].subtitle}
                              </p>
                            )}
                          </div>

                          <div className="space-y-2.5 pt-1">
                            {slidesMateri2[currentSlideIndex2].points.map((pt, ptIdx) => (
                              <div key={ptIdx} className="flex items-start gap-3 bg-white/5 hover:bg-white/10 p-3 rounded-xl border border-white/10 transition-colors">
                                <span className="text-emerald-400 font-black text-sm shrink-0">✦</span>
                                <p className="text-xs sm:text-sm text-slate-100 leading-relaxed text-justify">
                                  {pt}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="border-t border-slate-800 pt-3 flex items-center justify-between text-[10px] text-slate-400">
                          <span>Dokumen Lengkap Sekolah Ramah Anak & Data Riset (38 Halaman PPT)</span>
                          <span className="font-bold text-emerald-400">
                            Halaman {currentSlideIndex2 + 1} / {slidesMateri2.length}
                          </span>
                        </div>
                      </div>

                    </div>
                  )}

                  {/* PEDOMAN EVALUASI BAB VII */}
                  {activeMateriTab === "evaluasi" && (
                    <div className="bg-white p-5 sm:p-7 rounded-xl border border-slate-300 shadow-sm space-y-4 max-w-4xl mx-auto">
                      <div className="text-center pb-3 border-b-2 border-slate-800">
                        <p className="font-extrabold text-xs text-slate-900">PEDOMAN DISIPLIN POSITIF SMPS ADVENT BATAM MAS</p>
                        <h4 className="font-black text-base text-[#047857] uppercase">
                          BAB VII. PENDOKUMENTASIAN, PELAPORAN, DAN EVALUASI BERKALA
                        </h4>
                      </div>

                      <div className="space-y-3 text-xs text-slate-700 leading-relaxed text-justify">
                        <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                          <strong className="text-slate-900 block mb-1">7.1 Pendokumentasian:</strong>
                          Setiap proses pembinaan wajib didokumentasikan menggunakan formulir baku yang tersedia, mencakup identitas siswa, uraian kejadian, kategori pelanggaran, bentuk pembinaan, dan hasil pemantauan yang disimpan secara rahasia dan aman.
                        </div>

                        <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                          <strong className="text-slate-900 block mb-1">7.2 Pelaporan Berkala:</strong>
                          Wali kelas menyampaikan rekapitulasi pembinaan kelas kepada PKS Kesiswaan setiap bulan; Tim Kesiswaan menyusun laporan evaluasi semester kepada Kepala Sekolah dan Dinas Pendidikan sesuai kebutuhan.
                        </div>

                        <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                          <strong className="text-slate-900 block mb-1">7.3 Evaluasi dan Peninjauan Tahunan:</strong>
                          Mengukur penurunan jumlah dan tingkat keparahan pelanggaran, tingkat kepuasan peserta didik dan orang tua, efektivitas tindak lanjut pembinaan, serta kepatuhan pendidik terhadap larangan kekerasan.
                        </div>

                        <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                          <strong className="text-slate-900 block mb-1">7.4 Jadwal Penerapan Budaya Sekolah Aman:</strong>
                          Pelatihan guru dan tendik mengenai disiplin positif restoratif (Juli), penguatan konsistensi evaluasi (Agustus), dan pemantapan budaya sekolah aman bebas kekerasan terintegrasi 8 Dimensi Profil Lulusan (September).
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              ) : selectedDoc.docType === "gallery" ? (
                /* TAMPILAN 2: FOTO & VIDEO YOUTUBE */
                <div className="space-y-6 max-w-4xl mx-auto">
                  <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs">
                    <h4 className="font-black text-sm text-[#047857] uppercase mb-1">
                      Dokumentasi Bukti Fisik: Sosialisasi & Komitmen Deklarasi Anti-Perundungan
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Dokumentasi otentik sosialisasi anti-bullying, seminar psiko-edukasi bersama narasumber ahli, penandatanganan papan komitmen bersama, dan video kegiatan terintegrasi.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h5 className="font-black text-xs sm:text-sm text-slate-900 uppercase tracking-wide flex items-center gap-1.5">
                      <span>📸</span> Galeri 3 Foto Kegiatan
                    </h5>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {selectedDoc.photos.map((item, pIdx) => (
                        <div key={pIdx} className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
                          <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
                            <img
                              src={item.src}
                              alt={item.title}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = item.fallback;
                              }}
                            />
                          </div>
                          <div className="p-3 flex-1 flex flex-col justify-between">
                            <h6 className="font-bold text-xs text-slate-900 leading-snug">
                              {item.title}
                            </h6>
                            <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                              {item.caption}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200">
                      <div className="flex items-center gap-2">
                        <span className="text-red-600 text-lg">▶</span>
                        <h5 className="font-black text-xs sm:text-sm text-slate-900 uppercase tracking-wide">
                          Video Dokumentasi Kampanye Anti-Perundungan
                        </h5>
                      </div>
                      
                      <a
                        href={selectedDoc.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 hover:bg-red-700 text-white font-bold text-[11px] px-3 py-1 rounded shadow-xs transition-colors flex items-center gap-1 w-fit"
                      >
                        <span>Buka di YouTube</span>
                        <span>↗</span>
                      </a>
                    </div>

                    <p className="text-xs text-slate-600">
                      Tautan video resmi kegiatan di kanal SMPS Advent Batam Mas:{" "}
                      <a 
                        href={selectedDoc.youtubeUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 underline font-mono break-all font-semibold"
                      >
                        {selectedDoc.youtubeUrl}
                      </a>
                    </p>

                    <div className="aspect-video w-full rounded-lg overflow-hidden bg-slate-900 shadow-md border border-slate-300">
                      <iframe
                        className="w-full h-full"
                        src={selectedDoc.youtubeEmbed}
                        title="Video Kampanye Anti Perundungan SMPS Advent Batam Mas"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              ) : selectedDoc.docType === "sk-multi" ? (
                /* TAMPILAN 3: SK HARMONI 3 TAHUN */
                (() => {
                  const currentSk = skHarmoniData[activeSkTab];
                  return (
                    <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-300 shadow-sm max-w-3xl mx-auto space-y-4 text-justify">
                      <div className="text-center pb-4 border-b-2 border-slate-800">
                        <p className="font-extrabold text-xs sm:text-sm text-slate-900 tracking-wider">
                          YAYASAN PENDIDIKAN ADVENT BATAM
                        </p>
                        <p className="font-black text-base sm:text-lg text-slate-950">
                          SMPS ADVENT BATAM MAS
                        </p>
                        <p className="text-[10px] text-slate-500">
                          AKTA No. 29 Tahun 2011 • NPSN : 70002994 • Jalan Prof. Dr. Hamka Kav. IV - Batu Aji - Batam
                        </p>
                      </div>

                      <div className="text-center py-2">
                        <h4 className="font-black text-sm sm:text-base text-slate-900 uppercase">
                          SURAT KEPUTUSAN KEPALA SEKOLAH MENENGAH PERTAMA SWASTA ADVENT BATAM MAS
                        </h4>
                        <p className="font-bold text-xs text-slate-700 mt-1">
                          Nomor : {currentSk.nomor}
                        </p>
                        <p className="font-black text-xs sm:text-sm text-[#8B0000] mt-2 uppercase tracking-wide">
                          TENTANG<br/>
                          PROGRAM GERAKAN KELAS HARMONI<br/>
                          (PENYUSUNAN KESEPAKATAN KELAS)<br/>
                          TAHUN PELAJARAN {currentSk.tp}
                        </p>
                      </div>

                      <div className="space-y-2 text-[11px] sm:text-xs text-slate-700 border-t border-slate-200 pt-3">
                        <p className="font-bold text-slate-900">Menimbang :</p>
                        <ol className="list-alpha pl-5 space-y-1">
                          <li>bahwa untuk mewujudkan iklim kelas yang aman, nyaman, dan kondusif bagi tumbuh kembang peserta didik, diperlukan kesepakatan bersama antara guru dan peserta didik mengenai norma sikap dan perilaku di dalam kelas;</li>
                          <li>bahwa Program Gerakan Kelas Harmoni merupakan upaya sekolah untuk menumbuhkan disiplin positif, sikap saling menghormati, dan tanggung jawab bersama dalam proses pembelajaran;</li>
                          <li>bahwa penyusunan kesepakatan kelas secara partisipatif terbukti mendukung optimalisasi waktu belajar yang fokus dan minim gangguan sebagaimana dipersyaratkan dalam Instrumen Akreditasi IA2024 Versi 2025;</li>
                          <li>bahwa berdasarkan pertimbangan sebagaimana dimaksud pada huruf a, b, dan c, perlu ditetapkan Surat Keputusan Kepala Sekolah tentang Program Gerakan Kelas Harmoni.</li>
                        </ol>

                        <p className="font-bold text-slate-900 pt-2">Mengingat :</p>
                        <ol className="list-decimal pl-5 space-y-1">
                          <li>Undang-Undang Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional;</li>
                          <li>Peraturan Menteri Pendidikan dan Kebudayaan Nomor 82 Tahun 2015 tentang Pencegahan dan Penanggulangan Tindak Kekerasan di Lingkungan Satuan Pendidikan;</li>
                          <li>Peraturan Menteri Pendidikan, Kebudayaan, Riset, dan Teknologi Nomor 46 Tahun 2023 tentang Pencegahan dan Penanganan Perundungan di Lingkungan Satuan Pendidikan;</li>
                          <li>Instrumen Akreditasi IA2024 Versi 2025 Badan Akreditasi Nasional Pendidikan Dasar dan Menengah (BAN-PDM);</li>
                          <li>Program Kerja Yayasan Advent Indonesia Bidang Pendidikan Tahun Pelajaran 2026/2027;</li>
                          <li>Hasil Rapat Dewan Guru SMPS Advent Batam Mas tanggal {currentSk.rapat}.</li>
                        </ol>
                      </div>

                      <div className="space-y-2 text-[11px] sm:text-xs text-slate-800 border-t border-slate-200 pt-3">
                        <p className="font-black text-center text-slate-900">MEMUTUSKAN</p>
                        <p><strong className="text-slate-900">KESATU :</strong> Memberlakukan Program Gerakan Kelas Harmoni sebagai program pembentukan kesepakatan kelas (class agreement) di setiap rombongan belajar SMPS Advent Batam Mas, mulai Tahun Pelajaran {currentSk.tp}.</p>
                        <p><strong className="text-slate-900">KEDUA :</strong> Program Gerakan Kelas Harmoni bertujuan membangun kesepakatan kelas bersama, menumbuhkan budaya disiplin positif tanpa kekerasan fisik maupun verbal, menciptakan suasana belajar fokus dan tertib, meningkatkan rasa memiliki, serta menanamkan nilai-nilai Kristiani Advent (kasih, hormat, dan tanggung jawab).</p>
                        <p><strong className="text-slate-900">KETIGA :</strong> Setiap wali kelas wajib memfasilitasi penyusunan kesepakatan kelas pada minggu pertama tahun pelajaran, mendokumentasikan dalam bentuk piagam/poster yang ditandatangani bersama, dan menempelkannya di ruang kelas.</p>
                        <p><strong className="text-slate-900">KEEMPAT :</strong> Kesepakatan kelas memuat norma sikap dan tutur kata, pengelolaan waktu belajar tertib, prosedur pengingatan (reminder), dan konsekuensi mendidik tanpa hukuman fisik atau perundungan.</p>
                        <p><strong className="text-slate-900">KELIMA :</strong> Guru BK dan Wakil Kepala Kesiswaan bertugas mendampingi, memantau, mengevaluasi berkala setiap semester, dan melaporkan hasilnya kepada Kepala Sekolah.</p>
                        <p><strong className="text-slate-900">KEENAM :</strong> Segala biaya yang timbul dibebankan pada anggaran operasional sekolah yang sesuai.</p>
                        <p><strong className="text-slate-900">KETUJUH :</strong> Surat Keputusan ini mulai berlaku sejak tanggal ditetapkan.</p>
                      </div>

                      <div className="pt-6 border-t border-slate-200 flex justify-end">
                        <div className="text-center text-xs">
                          <p>Ditetapkan di: Batam</p>
                          <p>Pada tanggal: {currentSk.tanggal}</p>
                          <p className="font-bold mt-1">Kepala SMPS Advent Batam Mas,</p>
                          <div className="py-5 font-script text-slate-400 italic font-bold">
                            [Tanda Tangan & Cap Sah Sekolah]
                          </div>
                          <p className="font-black text-slate-900 underline">
                            Tona Leon F. Situmorang, S.Pd., MA.Ed.
                          </p>
                          <p className="text-[10px] text-slate-600 font-mono">
                            NRKS. 21023L0013160241226163
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })()
              ) : (
                /* TAMPILAN 4: DOKUMEN STANDARD */
                <div className="bg-white p-6 rounded-xl border border-slate-300 shadow-sm max-w-3xl mx-auto space-y-4">
                  <div className="text-center pb-3 border-b-2 border-slate-800">
                    <p className="font-extrabold text-xs text-slate-900">SMPS ADVENT BATAM MAS</p>
                    <p className="font-black text-sm text-[#047857]">{selectedDoc.docSubtitle}</p>
                    <p className="text-[10px] text-slate-500">{selectedDoc.nomor}</p>
                  </div>
                  <div className="space-y-3 pt-2">
                    {selectedDoc.details?.map((item, dIdx) => (
                      <div key={dIdx} className="flex gap-2.5 items-start bg-slate-50 p-3 rounded-lg border border-slate-200">
                        <span className="text-[#047857] font-bold text-sm">✓</span>
                        <p className="text-xs text-slate-800 leading-relaxed text-justify">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* FOOTER MODAL */}
            <div className="bg-slate-100 p-3 sm:p-4 border-t border-slate-200 flex justify-between items-center flex-wrap gap-2 shrink-0">
              <span className="text-[11px] text-slate-600 font-medium">
                Arsip Resmi Terakreditasi BAN-PDM / BAN-S/M
              </span>
              <button
                type="button"
                onClick={() => setSelectedDoc(null)}
                className="bg-slate-700 hover:bg-slate-800 text-white font-bold text-xs px-5 py-2 rounded-lg transition-colors cursor-pointer"
              >
                Tutup Dokumen
              </button>
            </div>

          </div>
        </div>
      )}

      {/* FOOTER WEB */}
      <footer className="w-full bg-[#8B0000] text-white text-[10px] sm:text-xs text-center py-4 font-semibold shrink-0 mt-auto">
        Developed by Ir. Budhy Prasetyo
      </footer>
    </main>
  );
}
