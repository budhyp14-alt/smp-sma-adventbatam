import Link from "next/link";
import { editorialsData } from "../../data/editorials";

export const metadata = {
  title: "Principal's Editorial - SMP SMA Advent Batam",
};

export default function EditorialKepsekIndex() {
  const articles = editorialsData.kepsek;

  return (
    <main className="min-h-screen bg-[#E5DCC3] font-sans flex flex-col">
      <section className="w-full pt-8 pb-4 px-4 sm:px-8 max-w-7xl mx-auto shrink-0">
        <div className="text-xs text-slate-700 font-semibold mb-6 flex items-center gap-1 flex-wrap">
          <span>You are here :</span>
          <Link href="/" className="text-[#047857] hover:underline ml-1">🏠 Home</Link>
          <span>-</span>
          <span className="text-slate-600">Principal's Editorial</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-[#1e293b] mb-8 tracking-wide uppercase">
          PRINCIPAL'S EDITORIAL
        </h1>
      </section>

      <section className="w-full flex-1 pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {articles.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#8B0000] flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-[280px] aspect-[4/3] bg-slate-200 rounded-lg overflow-hidden shrink-0">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col">
                <span className="text-xs text-slate-500 font-semibold mb-1">📅 {item.date} | ✍️ {item.author}</span>
                <h2 className="text-xl font-bold text-red-950 mb-3">{item.title}</h2>
                <p className="text-sm text-slate-600 leading-relaxed text-justify mb-4 line-clamp-3">
                  {item.paragraphs[0]}
                </p>
                <div>
                  <Link href={`/editorial/detail?id=${item.id}`} className="bg-[#8B0000] hover:bg-red-800 text-white font-bold text-xs py-2 px-5 rounded shadow-sm inline-block transition-colors">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="w-full bg-[#8B0000] text-white text-xs text-center py-4 font-semibold shrink-0">
        Developed by Ir. Budhy Prasetyo
      </footer>
    </main>
  );
}
