import './globals.css'
import Header from '../components/Header'

export const metadata = {
  title: 'SMP-SMA Advent Batam',
  description: 'Mendidik Generasi Cerdas dan Berkarakter Kristus',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
