import './globals.css'
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  weight: ['400','500','700'],
  variable: '--font-inter'
});


export const metadata = {
  title: 'STMA Interno',
  description: 'Sistema interno da Seção Técnica de Materiais',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
