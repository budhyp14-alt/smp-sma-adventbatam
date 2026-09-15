import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "SMP - SMA ADVENT BATAM",
  description: "Official Website SMP & SMA Advent Batam - Excellence in Character & Knowledge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="antialiased bg-[#F3EFE4] text-slate-900 min-h-screen flex flex-col">
        {/* HEADER UTAMA BERISI NAVBAR LENGKAP & AKREDITASI */}
        <Header />
        
        {/* HALAMAN KONTEN */}
        <div className="flex-1 w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
