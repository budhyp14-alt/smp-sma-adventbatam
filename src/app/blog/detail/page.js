import Link from "next/link";

export const metadata = {
  title: "Teachers' Blog Detail - SMP SMA Advent Batam",
};

export default function BlogDetailPage({ searchParams }) {
  const articles = [
    {
      id: "pemanfaatan-ai-secara-kritis-dalam-pembelajaran",
      title: "Pemanfaatan AI secara Kritis dan Bertanggung Jawab dalam Pembelajaran Siswa",
      date: "Tuesday, 08 September 2026",
      author: "Ir. Budhy Prasetyo",
      role: "Guru Informatika",
      img: "/slider-1.jpg",
      paragraphs: [
        "Kehadiran kecerdasan buatan (Artificial Intelligence) telah mengubah cara kita mengakses, mengolah, dan menyajikan informasi. Di lingkungan sekolah menengah, teknologi ini menghadirkan peluang besar untuk mempercepat pemahaman materi yang kompleks, menyediakan mitra diskusi logika, dan memperluas wawasan digital peserta didik.",
        "Kendati demikian, pemanfaatan AI harus senantiasa dilandasi oleh integritas akademis yang teguh. Guru tidak hanya mengajarkan cara merumuskan perintah komputasi yang tepat, tetapi juga menanamkan kesadaran etis bahwa AI adalah asisten penunjang nalar, bukan pengganti daya pikir orisinal manusia.",
        "Siswa dilatih untuk memverifikasi setiap fakta yang dihasilkan mesin rujukan, membandingkannya dengan literatur primer yang terpercaya, dan menyusun sintesis pemikiran mandiri. Proses telaah kritis ini justru mengasah ketajaman logika dan kemandirian intelektual generasi muda.",
        "Pendidikan karakter di SMP-SMA Advent Batam memastikan bahwa kemajuan teknologi informasi selalu berjalan seiring dengan kejujuran moral, kerja keras, dan hikmat yang bersumber dari rasa takut akan Tuhan."
      ]
    },
    {
      id: "membangun-integritas-dan-literasi-sains",
      title: "Membangun Integritas Akademik dan Kecintaan pada Eksplorasi Sains",
      date: "Monday, 31 August 2026",
      author: "Tiurma Febryanti, S.Pd",
      role: "Guru IPA Fisika",
      img: "/slider-2.jpg",
      paragraphs: [
        "Sains adalah sarana untuk mengagumi keteraturan ciptaan Tuhan melalui pembuktian empiris yang runut. Ketika siswa melakukan percobaan di laboratorium, mereka belajar bahwa sains menuntut kejujuran mutlak dalam mencatat setiap angka hasil pengamatan tanpa rekayasa.",
        "Kesalahan dalam hasil eksperimen awal bukanlah kegagalan, melainkan pintu masuk menuju evaluasi metodologi yang lebih teliti. Nilai ketekunan dan kerendahan hati ilmiah inilah yang membentuk ketahanan mental seorang peneliti muda.",
        "Melalui model pembelajaran berbasis penemuan (inquiry-based learning), guru mendorong siswa untuk berani bertanya, menguji hipotesis, dan mempresentasikan kesimpulan secara objektif.",
        "Generasi yang mencintai sains dengan pondasi moral yang kokoh akan menjadi motor penggerak inovasi yang membawa manfaat nyata bagi kemajuan masyarakat bangsa."
      ]
    },
    {
      id: "metode-komunikasi-efektif-guru-dan-murid",
      title: "Seni Mendengar: Kunci Membina Hubungan Harmonis Guru dan Remaja di Era Digital",
      date: "Friday, 21 August 2026",
      author: "Renita Pandiangan, S.Pd",
      role: "Guru Bhs. Ind.",
      img: "/slider-3.jpg",
      paragraphs: [
        "Di era banjir notifikasi media sosial, mendengarkan secara mendalam telah menjadi keterampilan langka. Hubungan yang hangat antara pendidik dan peserta didik berawal dari kesediaan untuk saling mendengar dengan penuh empati.",
        "Remaja di bangku SMP dan SMA kerap bergulat dengan pencarian identitas dan tekanan sosial. Ketika mereka merasa didengar dan dihargai pendapatnya di ruang kelas, motivasi belajar dan rasa percaya diri akan tumbuh secara alami.",
        "Guru yang bijak memadukan ketegasan prinsip dengan kelembutan tutur kata, menciptakan iklim kelas yang aman bagi setiap siswa untuk mengekspresikan bakat dan pemikirannya.",
        "Komunikasi penuh kasih ini merupakan wujud nyata penerapan nilai-nilai Kristiani yang menjadi nafas pembinaan di SMP-SMA Advent Batam."
      ]
    }
  ];

  const currentId = searchParams?.id || articles[0].id;
  const currentArticle = articles.find((a) => a.id === currentId) || articles[0];

  return (
    <main className="min-h-screen bg-[#F3EFE4] font-sans flex flex-col text-slate-800">
      <section className="w-full pt-8 pb-4 px-4 sm:px-8 max-w-5xl mx-auto shrink-0">
        <div className="text-xs text-slate-600 font-semibold mb-6 flex items-center gap-1 flex-wrap">
          <Link href="/" className="text-[#047857] hover:underline">🏠 Home</Link>
          <span>-</span>
          <Link href="/blog" className="text-[#047857] hover:underline">Teachers' Blog</Link>
          <span>-</span>
          <span className="text-slate-500">Detail</span>
        </div>

        <article className="bg-white p-6 sm:p-10 rounded-2xl shadow-sm border-t-4 border-[#047857]">
          <span className="bg-[#047857] text-white text-xs font-bold px-3 py-1 rounded">TEACHERS' BLOG</span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-4 mb-2 leading-snug">
            {currentArticle.title}
          </h1>
          <div className="text-xs text-slate-500 font-medium pb-4 border-b border-slate-200 mb-6 flex gap-4 flex-wrap">
            <span>📅 {currentArticle.date}</span>
            <span>✍️ {currentArticle.author} ({currentArticle.role})</span>
          </div>

          <div className="w-full aspect-video bg-slate-200 rounded-xl overflow-hidden mb-6">
            <img src={currentArticle.img} alt={currentArticle.title} className="w-full h-full object-cover" />
          </div>

          <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed text-justify">
            {currentArticle.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 flex justify-between items-center flex-wrap gap-4">
            <Link href="/blog" className="bg-[#047857] hover:bg-emerald-800 text-white font-bold text-xs py-2.5 px-6 rounded transition-colors">
              ← Back to Teachers' Blog
            </Link>
            <Link href="/" className="text-[#047857] text-xs font-bold hover:underline">
              Back to Home
            </Link>
          </div>
        </article>
      </section>

      <footer className="w-full bg-[#8B0000] text-white text-[10px] sm:text-xs text-center py-4 font-semibold shrink-0 mt-auto">
        Developed by Ir. Budhy Prasetyo
      </footer>
    </main>
  );
}
