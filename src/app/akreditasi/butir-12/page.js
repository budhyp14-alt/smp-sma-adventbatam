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

  // =========================================================================
  // SLIDE LENGKAP MATERI 1: MATERI ANTI BULLYING (MESTIKA R TAMPUBOLON, M.PSI)
  // =========================================================================
  const slidesMateri1 = [
    {
      title: "ANTI BULLYING",
      subtitle: "Sosialisasi & Edukasi Pencegahan Perundungan Satuan Pendidikan",
      tag: "Cover Slide",
      points: [
        "Narasumber: Mestika R Tampubolon, M.Psi., Psikolog",
        "Waktu Pelaksanaan: Kamis, 16 Juli 2026",
        "Lokasi: SMPS Advent Batam Mas",
        "Tujuan: Membangun kesadaran moral, rasa empati, dan mewujudkan lingkungan sekolah aman tanpa intimidasi."
      ]
    },
    {
      title: "APA ITU BULLYING?",
      subtitle: "Definisi dan Pemahaman Hakiki Perundungan",
      tag: "Konsep Dasar",
      points: [
        "Bullying (Bhs. Inggris) = Penindasan / Risak / Perundungan atau Penganiayaan (Bhs. Indonesia).",
        "Definisi: Segala bentuk penindasan atau kekerasan yang dilakukan dengan sengaja oleh satu orang atau sekelompok orang yang lebih kuat atau berkuasa terhadap orang lain.",
        "Tujuan Tindakan: Untuk menyakiti korban secara fisik maupun emosional dan dilakukan secara terus-menerus.",
        "Contoh Nyata: School Bullying di ruang kelas, kantin, halaman sekolah, toilet, asrama, dan ruang siber."
      ]
    },
    {
      title: "JENIS-JENIS BULLYING: 1. KONTAK FISIK LANGSUNG",
      subtitle: "Agresi Jasmani yang Menyebabkan Cedera & Kerugian Materi",
      tag: "Klasifikasi Bullying",
      points: [
        "Tindakan fisik menyerang tubuh: memukul, menampar, menendang, mendorong, menjambak, menggigit, mencubit, dan mencakar.",
        "Tindakan isolasi fisik: mengunci seseorang di dalam ruangan tertutup (toilet, gudang, ruang kelas sepi).",
        "Pemerasan materi: memeras uang saku (pungli sekolah) secara paksa di bawah ancaman kekerasan.",
        "Perusakan barang: merusak buku, seragam, sepeda, gawai, atau perlengkapan pribadi milik korban."
      ]
    },
    {
      title: "JENIS-JENIS BULLYING: 2. KONTAK VERBAL LANGSUNG",
      subtitle: "Kekerasan Berupa Tutur Kata, Hinaan, dan Tekanan Psikologis",
      tag: "Klasifikasi Bullying",
      points: [
        "Tindakan lisan mengintimidasi: mengancam secara verbal dan membentak.",
        "Penghinaan martabat: mempermalukan korban di depan umum dan merendahkan (putdowns).",
        "Name-Calling: memberi julukan atau nama panggilan yang merendahkan fisik atau kekurangan korban.",
        "Sarkasme menyakitkan hati, mencela, mengejek kekurangan, memaki dengan kata kotor, dan menyebarkan fitnah/gosip bohong."
      ]
    },
    {
      title: "JENIS-JENIS BULLYING: 3 & 4. PERILAKU NON-VERBAL",
      subtitle: "Bahasa Tubuh Merendahkan & Manuver Pengucilan Sosial",
      tag: "Klasifikasi Bullying",
      points: [
        "3. Perilaku Non-Verbal Langsung: Melihat korban dengan tatapan sinis, menjulurkan lidah, memasang ekspresi muka merendahkan atau mengancam (sering kali menyertai bullying fisik dan verbal).",
        "4. Perilaku Non-Verbal Tidak Langsung: Sengaja mendiamkan seseorang, memanipulasi persahabatan sehingga menjadi retak, sengaja mengucilkan atau mengabaikan keberadaan korban dari kelompok, serta mengirimkan surat kaleng bernada kebencian."
      ]
    },
    {
      title: "JENIS-JENIS BULLYING: 5. CYBER BULLYING",
      subtitle: "Kekerasan Berbasis Media Elektronik & Jejak Digital",
      tag: "Klasifikasi Bullying",
      points: [
        "Tindakan menyakiti orang lain melalui perangkat media elektronik (rekaman video intimidasi, pencemaran nama baik di media sosial).",
        "Contoh Konkret Cyberbullying:",
        "► Menyebarkan kebohongan atau memposting foto memalukan korban di jejaring sosial.",
        "► Mengirim pesan ancaman menyakitkan melalui platform chatting atau kolom komentar.",
        "► Membuat akun palsu (fake account) atau meretas akun korban untuk mengirim pesan jahat.",
        "► Trolling, pengucilan di grup online / game online, dan pembentukan group chat berisi kebencian.",
        "Catatan Kritis: Cyberbullying meninggalkan rekaman jejak digital (digital footprint) permanen yang sah dijadikan alat bukti hukum pengaduan."
      ]
    },
    {
      title: "JENIS-JENIS BULLYING: 6. PELECEHAN SEKSUAL",
      subtitle: "Perilaku Agresi Kesusilaan Fisik & Verbal",
      tag: "Klasifikasi Bullying",
      points: [
        "Tindakan pelecehan yang melanggar batas privasi tubuh dan kesusilaan anak.",
        "Dapat dikategorikan sebagai perilaku agresi fisik (kontak tubuh tanpa persetujuan) maupun agresi verbal berbau sensual.",
        "Pemaksaan mengirimkan gambar sensual atau memaksa terlibat dalam percakapan seksual secara langsung maupun daring."
      ]
    },
    {
      title: "3 KARAKTERISTIK UTAMA DALAM MEMAHAMI BULLYING",
      subtitle: "Kunci Identifikasi Kasus Secara Akurat",
      tag: "Karakteristik",
      points: [
        "1. Ketidakseimbangan Kekuatan (Power Imbalance): Korban berada dalam keadaan tidak mampu mempertahankan diri melawan pelaku (contoh: pelaku berbadan besar vs kecil, pelaku berkelompok vs korban sendiri).",
        "2. Intimidasi (Intentional Harm): Tindakan secara sadar bertujuan untuk menyakiti korban secara fisik maupun psikologis.",
        "3. Berulang (Repetition): Dilakukan secara berulang-ulang, terus-menerus, dan berlanjut dalam rentang waktu tertentu."
      ]
    },
    {
      title: "DAMPAK BULLYING BAGI ANAK SEKOLAH",
      subtitle: "Bahaya Psikis, Akademik, dan Keselamatan Jiwa",
      tag: "Dampak Psikologis",
      points: [
        "Menimbulkan ketakutan mendalam, kecemasan akut, dan gangguan psikologi kronis.",
        "Mewariskan rasa dendam dan menumbuhkan rantai budaya kekerasan baru antarsiswa.",
        "School Phobia: Takut berangkat ke sekolah, sering beralasan sakit, dan motivasi berprestasi menurun drastis.",
        "Konsep Diri Rendah: Korban merasa dirinya lemah, bodoh, tidak berguna, serta merasa pantas dikerjai oleh teman.",
        "Bahaya Tertinggi: Menyebabkan trauma mendalam dan membahayakan keselamatan nyawa."
      ]
    },
    {
      title: "PROFIL ANAK: FAKTOR PELAKU VS ANAK RENTAN",
      subtitle: "Analisis Psiko-Sosial Lingkungan Siswa",
      tag: "Faktor Penyebab",
      points: [
        "Faktor Anak Suka Membully: Cemburu akibat merasa gagal di bidang akademik, mengalami konflik/masalah dalam keluarga, pola asuh terlalu dimanja tanpa batasan tegas di rumah, haus pengakuan kelompok sebaya, atau sakit hati kalah bersaing.",
        "Karakteristik Anak yang Rentan Di-bully: Cenderung pendiam dan sulit bersosialisasi, memiliki perbedaan ciri fisik yang mencolok, berasal dari latar belakang keluarga minoritas, atau mengalami kesulitan pada mata pelajaran tertentu."
      ]
    },
    {
      title: "CARA MENCEGAH & MELAWAN JIKA ANDA DI-BULLY",
      subtitle: "Langkah Berani, Percaya Diri, dan Pengumpulan Bukti",
      tag: "Panduan Korban",
      points: [
        "Hadapi pelaku dengan berani, tenang, dan tampilkan sikap percaya diri.",
        "Simpan semua bukti yang bisa dilaporkan kepada penegak hukum atau guru (terutama rekaman/tangkapan layar cyberbullying).",
        "Berani berbicara dan laporkan kejadian secepatnya ke guru BK, wali kelas, atau orang tua.",
        "Berbaur dan jalin kedekatan dengan lingkaran teman-teman yang suportif dan dapat meningkatkan rasa percaya diri.",
        "Tetap berpikir positif dan yakini bahwa dirimu berharga."
      ]
    },
    {
      title: "JIKA ANDA MELIHAT BULLYING (PERAN BYSTANDER/SAKSI)",
      subtitle: "Hentikan Sikap Pembiaran di Sekolah",
      tag: "Panduan Saksi",
      points: [
        "JANGAN DIAM! Jangan pura-pura tidak melihat atau ikut menertawakan penderitaan korban.",
        "Leraikan dan damaikan situasi bila aman untuk dilakukan.",
        "Dukung dan rangkul korban agar tetap tenang dan tidak membalas dengan kekerasan fisik.",
        "Ajak bicara orang terdekat pelaku agar memberikan perhatian dan pengertian.",
        "Segera laporkan detik itu juga kepada pihak penegak aturan sekolah (Guru Piket, Wali Kelas, TPPK)."
      ]
    },
    {
      title: "PENANGANAN TERHADAP SISWA PELAKU BULLYING",
      subtitle: "Pendekatan Konseling Edukatif & Non-Menghakimi",
      tag: "Penanganan Pelaku",
      points: [
        "Segera ajak berbicara empat mata secara pribadi mengenai apa yang telah dilakukannya.",
        "Cari tahu motif dan penyebab mendasar siswa melakukan tindakan tersebut.",
        "Posisikan diri untuk menolong menyadarkan perilakunya tanpa menghakimi atau mempermalukan di muka umum.",
        "Ajarkan dan tanamkan rasa empati terhadap penderitaan sesama.",
        "Bimbing siswa mengalihkan energi dan potensinya ke aktivitas positif (olahraga, musik, organisasi).",
        "Tetapkan aturan sanksi dan konsekuensi mendidik yang konsisten sesuai tata tertib sekolah."
      ]
    },
    {
      title: "PEMBEKALAN SELF HEALING: TEKNIK PERNAPASAN & OTOT",
      subtitle: "Pemulihan Trauma & Relaksasi Mandiri Korban",
      tag: "Self Healing",
      points: [
        "Deep Breathing Exercises (Teknik 4-7-8):",
        "► Tarik napas perlahan melalui hidung selama 4 detik.",
        "► Tahan napas di dalam rongga dada selama 7 detik.",
        "► Buang napas dengan kuat dan lega melalui mulut selama 8 detik (ulangi sebanyak 4 kali putaran).",
        "Progressive Muscle Relaxation:",
        "► Fokus pada area pundak dan leher yang tegang.",
        "► Angkat kedua bahu setinggi mungkin ke arah telinga.",
        "► Tahan kontraksi selama 5-10 detik, lalu lepaskan dan rilekskan penuh secara perlahan."
      ]
    },
    {
      title: "PEMBEKALAN SELF HEALING: VISUALISASI & FIRMAN TUHAN",
      subtitle: "Kedamaian Emosional & Landasan Spiritual Kristiani",
      tag: "Self Healing Rohani",
      points: [
        "Guided Imagery & Visualization: Ciptakan gambaran mental tempat yang tenang dan menyenangkan (alam perbukitan, suara ombak pantai). Libatkan panca indera untuk merasakan hawa sejuk dan kedamaian.",
        "Kutipan Kitab Suci 1 Yohanes 2:9:",
        "'Barang siapa berkata, bahwa ia berada di dalam terang, tetapi ia membenci saudaranya, ia berada di dalam kegelapan sampai sekarang.'",
        "Kutipan Kitab Suci Lukas 6:27-28:",
        "'Tetapi kepada kamu, yang mendengar Aku, Aku berkata: kasihilah musuhmu, berbuatlah baik kepada orang yang membenci kamu; mintalah berkat bagi orang yang mengutuk kamu; berdoalah bagi orang yang mencaci kamu.'"
      ]
    },
    {
      title: "KESIMPULAN & PESAN KUNCI: SEKOLAH ZONA KASIH SAYANG",
      subtitle: "Komitmen Bersama Menghapus Perundungan",
      tag: "Penutup Presentasi",
      points: [
        "Peran Guru & Sekolah: Ajarkan cara berkomunikasi asertif (tegas menolak perundungan dengan santun), aktif berpatroli memantau lingkungan sekolah, serta ciptakan ekosistem sekolah ramah anak yang hangat.",
        "Peran Orang Tua: Latih anak mandiri, bangun keberanian anak berkata 'tidak' terhadap kejahatan, dan jalin komunikasi intensif dengan sekolah.",
        "Peran Siswa: Berani menolak pemalakan uang, jangan takut melapor ke guru, dan jangan ragu berteriak meminta tolong.",
        "Slogan Utama: SAY NO TO BULLYING! Anak Terlindungi, Indonesia Maju. Sekolah Adalah Zona Kasih Sayang."
      ]
    }
  ];

  // =========================================================================
  // SLIDE LENGKAP MATERI 2: MATERI BULLYING PADA ANAK REMAJA (MESTIKA RETINA T)
  // =========================================================================
  const slidesMateri2 = [
    {
      title: "BULLYING PADA ANAK REMAJA",
      subtitle: "Kajian Fenomena, Landasan Regulasi Hukum, dan Gerakan Sekolah Ramah Anak",
      tag: "Cover Slide",
      points: [
        "Narasumber: Mestika Retina T, M.Psi., Psikolog",
        "Fokus Materi: Membedah dinamika psikologi remaja, ancaman kekerasan, dan strategi pencegahan komprehensif di lingkungan pendidikan.",
        "Satuan Pendidikan: SMPS Advent Batam Mas"
      ]
    },
    {
      title: "DEFINISI ILMIAH BULLYING PUSTAKA",
      subtitle: "Konsep Menurut Ahli Psikologi (Wicaksana, 2008)",
      tag: "Kajian Teori",
      points: [
        "Definisi: Kekerasan fisik dan psikologis jangka panjang yang dilakukan oleh seseorang atau kelompok terhadap seseorang yang tidak mampu mempertahankan dirinya.",
        "Unsur Kunci: Terdapat hasrat sadar untuk melukai, menakuti, menguasai, atau membuat korban berada dalam kondisi tertekan secara berkelanjutan.",
        "Dikenal Sebagai 'Penindasan': Tindakan agresif terencana yang memanfaatkan dominasi senioritas, jumlah kelompok, atau superioritas fisik."
      ]
    },
    {
      title: "ADA APA DI SEKITAR ANAK DAN REMAJA KITA?",
      subtitle: "5 Ancaman Krusial Degradasi Moral Generasi Muda",
      tag: "Tantangan Remaja",
      points: [
        "Ketika dunia informasi sudah tanpa batas, benteng utama ada pada kendali diri remaja.",
        "1. Kekerasan: Tawuran, intimidasi antargeng sekolah, dan tindak agresif fisik.",
        "2. Narkoba: Ancaman peredaran zat adiktif perusak sel saraf dan masa depan.",
        "3. Pornografi dan Tindakan Amoral: Paparan konten vulgar melalui gawai tanpa filter.",
        "4. Bencana Sosial & Radikalisme: Paham intoleransi dan ujaran kebencian di media sosial.",
        "5. Kejahatan Seksual Anak: Siklus pedofilia, predator daring, dan pelecehan siber."
      ]
    },
    {
      title: "LANDASAN HUKUM: UU PERLINDUNGAN ANAK",
      subtitle: "Undang-Undang Republik Indonesia Nomor 35 Tahun 2014",
      tag: "Aspek Legalitas",
      points: [
        "PASAL 76C UU 35/2014:",
        "'Setiap orang dilarang menempatkan, membiarkan, melakukan, menyuruh melakukan, atau turut serta melakukan kekerasan terhadap anak.'",
        "PASAL 54 UU 35/2014:",
        "'Anak di dalam dan lingkungan satuan pendidikan wajib mendapatkan perlindungan dari tindak kekerasan fisik, psikis, kejahatan seksual, dan kejahatan lainnya yang dilakukan oleh pendidik, tenaga kependidikan, sesama peserta didik, dan atau pihak lain.'"
      ]
    },
    {
      title: "DATA SURVEI KESEHATAN SEKOLAH (BALITBANG DEPKES)",
      subtitle: "Korelasi Nyata Antara Perundungan dan Risiko Fatalitas Siswa",
      tag: "Data Empiris",
      points: [
        "Hasil Survei Kesehatan Berbasis Sekolah Pelajar SMP dan SMA Nasional:",
        "► Siswa Laki-Laki: 24,1% pernah di-bully di sekolah; 4,3% memiliki dorongan ingin bunuh diri (N=10.363).",
        "► Siswa Perempuan: 17,4% pernah di-bully di sekolah; 5,9% memiliki dorongan ingin bunuh diri (N=10.977).",
        "► Rata-rata Total Siswa: 20,6% pernah mengalami perundungan; 5,2% memikirkan keinginan bunuh diri.",
        "Kesimpulan Darurat: Bullying berpotensi fatal merenggut nyawa anak jika tidak dicegah sedini mungkin."
      ]
    },
    {
      title: "FENOMENA GUNUNG ES KASUS BULLYING DI INDONESIA",
      subtitle: "Realitas Terselubung di Balik Data Permukaan",
      tag: "Kondisi Nasional",
      points: [
        "Kasus bullying pada anak dan remaja merupakan fenomena gunung es: kasus yang mencuat terlihat sedikit, namun faktanya sangat banyak, mengakar, dan terwariskan dari generasi ke generasi.",
        "Kerap kurang terpantau maksimal oleh sekolah dan orang tua akibat ketakutan korban untuk bersuara.",
        "Pandangan Keliru Masyarakat: Bullying dianggap hanya terjadi di tingkat SMP/SMA, padahal data LPAI membuktikan angka kekerasan sangat tinggi sejak usia anak 3-12 tahun."
      ]
    },
    {
      title: "MACAM-MACAM BENTUK PERUNDUNGAN DI SEKOLAH",
      subtitle: "Klasifikasi Bentuk Fisik, Verbal, dan Rasional",
      tag: "Bentuk Kasus",
      points: [
        "Bentuk Fisik: Memukul, menendang, mengeroyok, menjambak, merampas bekal makanan, merusak barang, dan meminta uang paksa (pungli).",
        "Bentuk Verbal: Menertawakan kecacatan fisik, memanggil nama julukan tidak pantas, mengancam, menggoda hingga marah, berteriak mencaci, dan menyebarkan berita bohong.",
        "Bentuk Rasional/Sosial: Melarang teman ikut bermain, mengucilkan teman dari pergaulan, dan menolak mengajak teman belajar bersama."
      ]
    },
    {
      title: "GERAKAN SEKOLAH RAMAH ANAK (SRA)",
      subtitle: "Praktik Baik Kemitraan Multipihak di Indonesia",
      tag: "Sekolah Ramah Anak",
      points: [
        "Definisi Resmi: Satuan pendidikan yang aman, bersih, sehat, peduli dan berbudaya lingkungan hidup, mampu menjamin, memenuhi, dan menghargai hak-hak anak dari kekerasan, diskriminasi, dan perlakuan salah lainnya.",
        "Kolaborasi Program Nasional Lintas Kementerian:",
        "► Pangan Jajan Sehat (BPOM) & Kantin Kejujuran (KPK & Kemendikbud).",
        "► Sekolah Bebas Napza (BNN) & UKS Terpadu (Kemenkes, Kemenag, Kemendikbud, Kemendagri).",
        "► Sekolah Aman Anti-Kekerasan (KPPPA) & Sekolah/Madrasah Aman Bencana (BNPB, KLHK)."
      ]
    },
    {
      title: "4 TAHAPAN PENERAPAN SEKOLAH RAMAH ANAK (SRA)",
      subtitle: "Merujuk Permeneg PPPA Nomor 8 Tahun 2014",
      tag: "Tahapan Implementasi",
      points: [
        "1. Persiapan: Konsultasi dengan anak, penetapan kebijakan SRA tertulis, pembentukan Tim SRA / Satgas TPPK, dan identifikasi potensi kerawanan sekolah.",
        "2. Perencanaan: Menyusun Rencana Aksi SRA Tahunan dan mengintegrasikan program anti-kekerasan, UKS, serta Adiwiyata.",
        "3. Pelaksanaan: Melaksanakan aksi nyata dengan mengoptimalkan sumber daya pemerintah, yayasan, masyarakat, alumni, dan dunia usaha.",
        "4. Pemantauan, Evaluasi & Pelaporan: Pemantauan rutin setiap bulan, evaluasi komprehensif setiap tiga bulan, dan laporan ke Gugus Tugas Kota Layak Anak (KLA)."
      ]
    },
    {
      title: "SOLUSI GURU, SEKOLAH, ORANG TUA & SISWA",
      subtitle: "Komunikasi Asertif & Ketegasan Tanpa Kekerasan",
      tag: "Solusi Terintegrasi",
      points: [
        "Bagi Guru: Ajarkan komunikasi asertif (mampu mengekspresikan hak, pikiran, dan perasaan positif/negatif secara langsung, jujur, terhormat, tegas, tanpa menyakiti orang lain). Tidak hanya mengajar, tetapi aktif berkeliling memantau keadaan lingkungan.",
        "Bagi Orang Tua: Ajarkan anak mandiri dan percaya diri, latih anak berani berkata 'tidak' terhadap kejahatan, dan jalin komunikasi erat dengan sekolah.",
        "Bagi Siswa: Jangan beri uang kepada pihak yang memalak, jangan takut melapor, waspadai ajakan orang tak dikenal ke tempat sepi, dan jangan ragu berteriak meminta tolong.",
        "Referensi Panduan: Wardhana, K. 'Panduan Melawan Bullying' • NO BULLYING! Bully Free Zone."
      ]
    }
  ];

  // DAFTAR BUKTI FISIK EVIDENCE BUTIR 12
  const evidenceDocuments = [
    {
      id: "sk-harmoni-3tp",
      code: "SK-HARMONI-3TP",
      nomor: "No: 058 (2024) | No: 059 (2025) | No: 060 (2026)",
      title: "SK Pembentukan Program Gerakan Kelas Harmoni & Satgas Anti Perundungan (3 Tahun Berturut-turut)",
      badge: "SK Kebijakan Resmi",
      status: "Tersedia 3 Dokumen Sah",
      desc: "Surat Keputusan Kepala SMPS Advent Batam Mas tentang Program Gerakan Kelas Harmoni (Penyusunan Kesepakatan Kelas) untuk TP 2024/2025, TP 2025/2026, dan TP 2026/2027 guna menciptakan iklim belajar yang aman, tertib, dan bebas perundungan.",
      docType: "sk-multi"
    },
    {
      id: "sop-penanganan",
      code: "SOP-PENANGANAN-01",
      nomor: "Bab V Prosedur Penanganan Pelanggaran",
      title: "Prosedur Penanganan Pelanggaran & Diagram Alur Eskalasi Penanganan Kasus",
      badge: "SOP Prosedural",
      status: "Terverifikasi Asesor",
      desc: "Panduan berjenjang 6 tahap penanganan (Identifikasi, Klarifikasi & Dialog Empatik, Penetapan Kategori, Pembinaan, Pendokumentasian & Komunikasi Ortu, Pemantauan Tindak Lanjut).",
      docType: "standard",
      docSubtitle: "V. PROSEDUR PENANGANAN PELANGGARAN & DIAGRAM ALUR ESKALASI",
      details: [
        "5.1 Alur Umum: Identifikasi Perilaku → Klarifikasi & Dialog Empatik → Penetapan Kategori (Ringan/Sedang/Berat) → Pembinaan Sesuai Kategori → Pendokumentasian & Komunikasi Ortu → Pemantauan & Evaluasi Tindak Lanjut.",
        "5.2 Prinsip Prosedural: Asas praduga tak bersalah, jaminan kerahasiaan identitas, proporsionalitas pembinaan mendidik, konsistensi penerapan adil, dan hak didampingi orang tua/wali kelas.",
        "5.3 Diagram Alur Eskalasi: Kasus yang belum membaik dieskalasi secara terukur mengikuti kategori pembinaan yang berlaku."
      ]
    },
    {
      id: "tata-tertib",
      code: "TATA-TERTIB-2026",
      nomor: "Regulasi Disiplin Sekolah TP 2026/2027",
      title: "Dokumen Tata Tertib SMPS Advent Batam Tahun Pelajaran 2026/2027",
      badge: "Tata Tertib Siswa",
      status: "Dokumen Sah Sekolah",
      desc: "Sistem poin dan deskripsi peraturan kehadiran, upacara bendera, kerapian seragam sekolah, ketertiban proses belajar mengajar (KBM), serta larangan kekerasan fisik dan verbal.",
      docType: "standard",
      docSubtitle: "TATA TERTIB DAN SISTEM POIN KEDISIPLINAN SISWA",
      details: [
        "A. Kehadiran: Hadir setiap hari efektif belajar sebelum pukul 07.15 WIB.",
        "B. Upacara Bendera: Kedisiplinan barisan dan kelengkapan atribut seragam lengkap.",
        "C. Kerapian Pakaian: Seragam putih-biru, batik, pramuka, olahraga, pakaian melayu, dan pakaian chapel ibadah.",
        "D & E. Ketertiban Belajar: Larangan mengganggu kelas, larangan pengoperasian gawai tanpa izin guru, serta sanksi tegas tindakan tidak sopan atau kekerasan antarsiswa."
      ]
    },
    {
      id: "program-sosialisasi",
      code: "PROGRAM-EDUKASI-02",
      nomor: "Kegiatan Preventif Siswa",
      title: "Program Edukasi & Sosialisasi Berkala Anti-Bullying / Cyber Bullying",
      badge: "Edukasi & Sosialisasi",
      status: "Foto & Arsip Materi",
      desc: "Materi edukasi interaktif fenomena gunung es bullying, deklarasi komitmen bersama di aula gereja sekolah, dan penandatanganan papan deklarasi ramah anak.",
      docType: "gallery",
      docSubtitle: "DOKUMENTASI FOTO KEGIATAN & VIDEO SOSIALISASI ANTI-PERUNDUNGAN",
      youtubeUrl: "https://www.youtube.com/watch?v=hviOV49zohc",
      youtubeEmbed: "https://www.youtube.com/embed/hviOV49zohc",
      photos: [
        {
          title: "Penandatanganan Papan Deklarasi oleh Pendidik",
          caption: "Pendidik dan pimpinan sekolah menandatangani komitmen deklarasi anti-perundungan di SMPS-SMAS Advent Batam Mas.",
          src: "/akreditasi/foto-antibullying-02.jpeg",
          fallback: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&auto=format&fit=crop&q=80"
        },
        {
          title: "Seminar Anti-Bullying di Aula Gereja Sekolah",
          caption: "Pelatihan psiko-edukasi pencegahan perundungan dan cyber bullying bersama Mestika Retina Tampubolon, M.Psi., Psikolog.",
          src: "/akreditasi/guru&siswa-dalam seminar pelatihan anti bullying oleh Mestika Retina Tampubolon M.Psi.jpg",
          fallback: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80"
        },
        {
          title: "Penandatanganan Komitmen Seluruh Peserta Didik",
          caption: "Peserta didik menandatangani Papan Deklarasi Sekolah Ramah Anak sebagai wujud saling menghormati dan menciptakan kelas yang aman.",
          src: "/akreditasi/penandatanganan-siswa.jpg",
          fallback: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&auto=format&fit=crop&q=80"
        }
      ]
    },
    {
      id: "evaluasi-laporan",
      code: "LAPORAN-EVALUASI-03",
      nomor: "Bab VII Pedoman Disiplin Positif & 2 Modul Pelatihan",
      title: "Dokumentasi, Pelaporan Berkala, dan Evaluasi Disiplin Positif",
      badge: "Laporan & Evaluasi",
      status: "Portofolio Lengkap",
      desc: "Rekapitulasi pembinaan bulanan wali kelas, laporan evaluasi semester wakasek kesiswaan, peninjauan tahunan kepatuhan PTK, serta 2 modul materi slide PPT psiko-edukasi narasumber.",
      docType: "materi-edukasi",
      docSubtitle: "MODUL MATERI SLIDE PPT EDUKASI ANTI-BULLYING & SISTEM EVALUASI DISIPLIN POSITIF"
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
                  <strong className="text-slate-900">Fokus Verifikasi Butir 12:</strong> Pemeriksaan SK Satgas TPPK dan SK Program Gerakan Kelas Harmoni (3 TP), modul materi slide PPT pelatihan narasumber psikolog, dokumentasi foto/video, serta instrumen pelaporan evaluasi disiplin positif.
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
      {/* MODAL POP-UP VIEWER DOKUMEN: SLIDE-SLIDE PPT 2 MATERI LENGKAP             */}
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
                            <span className="bg-amber-400/20 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded border border-amber-400/30 uppercase tracking-wider">
                              {slidesMateri1[currentSlideIndex1].tag}
                            </span>
                            <h4 className="text-lg sm:text-2xl font-black text-amber-300 tracking-wide leading-tight mt-1.5">
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
                            Slide {currentSlideIndex1 + 1} / {slidesMateri1.length}
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
                            <span className="bg-emerald-400/20 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-400/30 uppercase tracking-wider">
                              {slidesMateri2[currentSlideIndex2].tag}
                            </span>
                            <h4 className="text-lg sm:text-2xl font-black text-emerald-300 tracking-wide leading-tight mt-1.5">
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
                            Slide {currentSlideIndex2 + 1} / {slidesMateri2.length}
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
