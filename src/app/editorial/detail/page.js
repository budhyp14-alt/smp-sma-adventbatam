import Link from "next/link";
import { editorialsData } from "../../../data/editorials";

export const metadata = {
  title: "Principal Editorial Detail - SMP SMA Advent Batam",
};

export default function EditorialKepsekDetail({ searchParams }) {
  const itemId = searchParams?.id || editorialsData.kepsek[0].id;
  const article = editorialsData.kepsek.find((a) => a.id === itemId) || editorialsData.kepsek[0];

  return (
    <main className="min-h-screen bg-[#E5DCC3] font-sans flex flex-col">
      <section className="w-full pt-8 pb-4 px-4 sm:px-8 max-w-5xl mx-auto shrink-0">
        <div className="text-xs text-slate-700 font-semibold mb-6 flex items-center gap-1 flex-wrap">
          <Link href="/" className="text-[#047857] hover:underline">🏠 Home</Link>
          <span>-</span>
          <Link href="/editorial" className="text-[#047857] hover:underline">Principal's Editorial</Link>
          <span>-</span>
          <span className="text-slate-600">Detail</span>
        </div>
        <article className="bg-white p-6 sm:p-10 rounded-2xl shadow-md border-t-8 border-[#8B0000]">
          <span className="bg-[#8B0000] text-white text-xs font-bold px-3 py-1 rounded">PRINCIPAL EDITORIAL</span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-4 mb-2 leading-snug">{article.title}</h1>
          <div className="text-xs text-slate-500 font-medium pb-4 border-b border-slate-200 mb-6 flex gap-4">
            <span>📅 {article.date}</span>
            <span>✍️ {article.author} ({article.role})</span>
          </div>
          <div className="w-full aspect-video bg-slate-200 rounded-xl overflow-hidden mb-6">
            <img src={article.img} alt={article.title} className="w-full h-full object-cover" />
          </div>
          <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed text-justify">
            {article.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-slate-200 flex justify-between items-center">
            <Link href="/editorial" className="bg-[#8B0000] hover:bg-red-800 text-white font-bold text-xs py-2.5 px-6 rounded transition-colors">
              ← Back to All Articles
            </Link>
            <Link href="/" className="text-[#047857] text-xs font-bold hover:underline">
              Back to Home
            </Link>
          </div>
        </article>
      </section>
      <footer className="w-full bg-[#8B0000] text-white text-xs text-center py-4 font-semibold mt-auto">
        Developed by Ir. Budhy Prasetyo
      </footer>
    </main>
  );
}
